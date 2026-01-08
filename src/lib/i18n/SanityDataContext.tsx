"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { getHomePageData, getSiteSettings } from "@/lib/queries";
import { useLanguage } from "./LanguageContext";

// Types for Sanity data
interface SanityHeroData {
    badge: string;
    title: string;
    highlight: string;
    subtitle: string;
    primaryCta: { text: string; href: string } | null;
    secondaryCta: { text: string; href: string } | null;
}

interface SanityStatItem {
    value: string;
    label: string;
}

interface SanityFeatureCard {
    icon: string;
    title: string;
    description: string;
    link: string;
    color: string;
}

interface SanityWhyTrustCard {
    icon: string;
    title: string;
    description: string;
}

interface SanityPricingPlan {
    name: string;
    audience: string;
    price: string;
    period: string;
    features: string[];
    cta: string;
    isDark: boolean;
}

interface SanityFAQItem {
    question: string;
    answer: string;
}

interface SanityHomePageData {
    hero: SanityHeroData;
    stats: SanityStatItem[];
    features: {
        badge: string;
        title: string;
        subtitle: string;
        cards: SanityFeatureCard[];
    };
    whyTrust: {
        badge: string;
        title: string;
        subtitle: string;
        cards: SanityWhyTrustCard[];
    };
    security: {
        badge: string;
        title: string;
        subtitle: string;
    };
    pricing: {
        badge: string;
        title: string;
        subtitle: string;
        plans: SanityPricingPlan[];
    };
    faq: {
        badge: string;
        title: string;
        subtitle: string;
        items: SanityFAQItem[];
    };
    cta: {
        title: string;
        subtitle: string;
        button: { text: string; href: string } | null;
    };
}

interface SanitySiteSettings {
    siteName: string;
    headerCta: { text: string; href: string } | null;
    footerTagline: string;
    footerColumns: Array<{
        title: string;
        links: Array<{ label: string; href: string }>;
    }>;
    footerCopyright: string;
    socialLinks: Array<{ platform: string; url: string }>;
    contactEmail: string;
    supportEmail: string;
}

interface SanityDataContextType {
    homePageData: SanityHomePageData | null;
    siteSettings: SanitySiteSettings | null;
    isLoading: boolean;
    error: string | null;
}

const SanityDataContext = createContext<SanityDataContextType>({
    homePageData: null,
    siteSettings: null,
    isLoading: true,
    error: null,
});

export function SanityDataProvider({ children }: { children: ReactNode }) {
    const { language } = useLanguage();
    const [homePageData, setHomePageData] = useState<SanityHomePageData | null>(null);
    const [siteSettings, setSiteSettings] = useState<SanitySiteSettings | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            setError(null);

            try {
                const [homeData, settingsData] = await Promise.all([
                    getHomePageData(language),
                    getSiteSettings(language),
                ]);

                setHomePageData(homeData);
                setSiteSettings(settingsData);
            } catch (err) {
                console.error("Error fetching Sanity data:", err);
                setError("Failed to fetch content");
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
    }, [language]);

    return (
        <SanityDataContext.Provider value={{ homePageData, siteSettings, isLoading, error }}>
            {children}
        </SanityDataContext.Provider>
    );
}

export function useSanityData() {
    return useContext(SanityDataContext);
}

// Export types for use in components
export type {
    SanityHomePageData,
    SanitySiteSettings,
    SanityHeroData,
    SanityStatItem,
    SanityFeatureCard,
    SanityWhyTrustCard,
    SanityPricingPlan,
    SanityFAQItem
};
