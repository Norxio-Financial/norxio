"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language, Translations, getTranslation, languages, isRTL } from "./translations";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Translations;
    languages: typeof languages;
    isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
    children: ReactNode;
    defaultLanguage?: Language;
}

export function LanguageProvider({ children, defaultLanguage = "en" }: LanguageProviderProps) {
    const [language, setLanguageState] = useState<Language>(defaultLanguage);
    const [t, setT] = useState<Translations>(getTranslation(defaultLanguage));
    const [rtl, setRtl] = useState(isRTL(defaultLanguage));

    // Load language from localStorage on mount
    useEffect(() => {
        if (typeof window !== "undefined") {
            const savedLang = localStorage.getItem("norxio-language") as Language | null;
            if (savedLang && languages.some(l => l.code === savedLang)) {
                setLanguageState(savedLang);
                setT(getTranslation(savedLang));
                setRtl(isRTL(savedLang));
                document.documentElement.lang = savedLang;
                document.documentElement.dir = isRTL(savedLang) ? "rtl" : "ltr";
            }
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        setT(getTranslation(lang));
        setRtl(isRTL(lang));
        if (typeof window !== "undefined") {
            localStorage.setItem("norxio-language", lang);
            // Update the html lang and dir attributes
            document.documentElement.lang = lang;
            document.documentElement.dir = isRTL(lang) ? "rtl" : "ltr";
        }
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t, languages, isRTL: rtl }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}

// Hook for components that may be rendered outside of the provider
export function useTranslation() {
    const context = useContext(LanguageContext);
    if (!context) {
        // Return default English translations if not in provider
        return {
            language: "en" as Language,
            t: getTranslation("en"),
            setLanguage: () => { },
            languages,
            isRTL: false,
        };
    }
    return context;
}
