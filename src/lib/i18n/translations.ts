import { Language, Translations } from './types';
import { en } from './locales/en';
import { fr } from './locales/fr';
import { es } from './locales/es';
import { de } from './locales/de';
import { ar } from './locales/ar';

export type { Language, Translations };

export const languages: { code: Language; label: string; flag: string; nativeName: string; rtl?: boolean }[] = [
    { code: "en", label: "ENG", flag: "gb", nativeName: "English" },
    { code: "fr", label: "FRA", flag: "fr", nativeName: "Français" },
    { code: "es", label: "ESP", flag: "es", nativeName: "Español" },
    { code: "de", label: "DEU", flag: "de", nativeName: "Deutsch" },
    { code: "ar", label: "ARA", flag: "ae", nativeName: "العربية", rtl: true },
];

export const isRTL = (lang: Language): boolean => {
    return lang === "ar";
};

export const translations: Record<Language, Translations> = {
    en,
    fr,
    es,
    de,
    ar,
};

export function getTranslation(lang: Language): Translations {
    return translations[lang] || translations.en;
}
