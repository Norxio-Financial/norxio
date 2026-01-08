import {
    localizedString,
    localizedText,
    iconField,
    colorField,
    statsField,
    ctaButtonField,
    contentBlockField,
    faqFields
} from "./helpers";

// ============================================
// MULTI-CURRENCY PAGE SCHEMA
// ============================================
export const multiCurrencyPage = {
    name: "multiCurrencyPage",
    title: "Multi-Currency Account Page",
    type: "document",
    groups: [
        { name: "hero", title: "Hero Section" },
        { name: "stats", title: "Stats" },
        { name: "features", title: "Features" },
        { name: "howItWorks", title: "How It Works" },
        { name: "benefits", title: "Benefits" },
        { name: "currencies", title: "Supported Currencies" },
        { name: "faq", title: "FAQ" },
        { name: "cta", title: "Call to Action" },
    ],
    fields: [
        // Hero
        { ...localizedString("heroBadge", "Hero Badge"), group: "hero" },
        { ...localizedString("heroTitle", "Hero Title"), group: "hero" },
        { ...localizedText("heroSubtitle", "Hero Subtitle"), group: "hero" },
        { name: "heroImage", title: "Hero Image", type: "image", group: "hero", options: { hotspot: true } },
        { ...ctaButtonField("heroPrimaryCta", "Primary CTA"), group: "hero" },
        { ...ctaButtonField("heroSecondaryCta", "Secondary CTA"), group: "hero" },

        // Stats Strip
        { ...statsField, group: "stats" },

        // Feature Sections
        {
            name: "features",
            title: "Feature Sections",
            type: "array",
            group: "features",
            of: [contentBlockField],
        },

        // How It Works
        { ...localizedString("howItWorksTitle", "Section Title"), group: "howItWorks" },
        { ...localizedText("howItWorksSubtitle", "Section Subtitle"), group: "howItWorks" },
        {
            name: "howItWorksSteps",
            title: "Steps",
            type: "array",
            group: "howItWorks",
            of: [{
                type: "object",
                fields: [
                    { name: "stepNumber", type: "number", title: "Step Number" },
                    iconField,
                    localizedString("title", "Step Title"),
                    localizedText("description", "Step Description"),
                ],
                preview: { select: { title: "title.en", subtitle: "stepNumber" } },
            }],
        },

        // Benefits Grid
        { ...localizedString("benefitsTitle", "Benefits Section Title"), group: "benefits" },
        {
            name: "benefits",
            title: "Benefits",
            type: "array",
            group: "benefits",
            of: [{
                type: "object",
                fields: [
                    iconField,
                    localizedString("title", "Title"),
                    localizedText("description", "Description"),
                    colorField,
                ],
                preview: { select: { title: "title.en", subtitle: "icon" } },
            }],
        },

        // Supported Currencies
        { ...localizedString("currenciesTitle", "Currencies Section Title"), group: "currencies" },
        {
            name: "currencies",
            title: "Currencies List",
            type: "array",
            group: "currencies",
            of: [{
                type: "object",
                fields: [
                    { name: "code", type: "string", title: "Currency Code (e.g., USD)" },
                    { name: "name", type: "string", title: "Currency Name" },
                    { name: "flag", type: "string", title: "Country Code (e.g., us)" },
                ],
                preview: { select: { title: "code", subtitle: "name" } },
            }],
        },

        // FAQ
        ...faqFields.map(field => ({ ...field, group: "faq" })),

        // CTA
        { ...localizedString("ctaTitle", "CTA Title"), group: "cta" },
        { ...localizedText("ctaSubtitle", "CTA Subtitle"), group: "cta" },
        { ...ctaButtonField("ctaButton", "CTA Button"), group: "cta" },
    ],
    preview: {
        prepare() {
            return { title: "Multi-Currency Account Page" };
        },
    },
};

// ============================================
// FX EXCHANGE PAGE SCHEMA
// ============================================
export const fxExchangePage = {
    name: "fxExchangePage",
    title: "FX Exchange Page",
    type: "document",
    groups: [
        { name: "hero", title: "Hero Section" },
        { name: "calculator", title: "FX Calculator" },
        { name: "stats", title: "Stats Strip" },
        { name: "features", title: "Features" },
        { name: "rates", title: "Exchange Rates" },
        { name: "faq", title: "FAQ" },
        { name: "cta", title: "Call to Action" },
    ],
    fields: [
        // Hero
        { ...localizedString("heroBadge", "Hero Badge"), group: "hero" },
        { ...localizedString("heroTitle", "Hero Title"), group: "hero" },
        { ...localizedText("heroSubtitle", "Hero Subtitle"), group: "hero" },
        { ...ctaButtonField("heroPrimaryCta", "Primary CTA"), group: "hero" },
        { ...ctaButtonField("heroSecondaryCta", "Secondary CTA"), group: "hero" },

        // Calculator Settings
        { ...localizedString("calculatorTitle", "Calculator Title"), group: "calculator" },
        { ...localizedString("sendLabel", "You Send Label"), group: "calculator" },
        { ...localizedString("receiveLabel", "Beneficiary Receives Label"), group: "calculator" },
        { name: "feePercentage", type: "number", title: "Fee Percentage", group: "calculator", initialValue: 0.3 },
        { ...localizedString("feeLabel", "Fee Label"), group: "calculator" },
        { ...localizedString("rateLabel", "Exchange Rate Label"), group: "calculator" },
        { ...ctaButtonField("calculatorCta", "Calculator CTA"), group: "calculator" },

        // Stats Strip
        {
            name: "statsStrip",
            title: "Stats Strip Items",
            type: "array",
            group: "stats",
            of: [{
                type: "object",
                fields: [
                    iconField,
                    localizedString("label", "Label"),
                ],
                preview: { select: { title: "label.en", subtitle: "icon" } },
            }],
        },

        // Feature Sections
        {
            name: "features",
            title: "Feature Sections",
            type: "array",
            group: "features",
            of: [contentBlockField],
        },

        // Live Rates Section
        { ...localizedString("ratesTitle", "Rates Section Title"), group: "rates" },
        { ...localizedText("ratesSubtitle", "Rates Subtitle"), group: "rates" },
        { name: "ratesBackgroundImage", title: "Background Image (Map)", type: "image", group: "rates" },

        // FAQ
        ...faqFields.map(field => ({ ...field, group: "faq" })),

        // CTA
        { ...localizedString("ctaTitle", "CTA Title"), group: "cta" },
        { ...localizedText("ctaSubtitle", "CTA Subtitle"), group: "cta" },
        { ...ctaButtonField("ctaButton", "CTA Button"), group: "cta" },
    ],
    preview: {
        prepare() {
            return { title: "FX Exchange Page" };
        },
    },
};

// ============================================
// GLOBAL PAYOUT PAGE SCHEMA
// ============================================
export const globalPayoutPage = {
    name: "globalPayoutPage",
    title: "Global Payout Page",
    type: "document",
    groups: [
        { name: "hero", title: "Hero Section" },
        { name: "stats", title: "Stats" },
        { name: "features", title: "Features" },
        { name: "countries", title: "Countries Coverage" },
        { name: "paymentMethods", title: "Payment Methods" },
        { name: "faq", title: "FAQ" },
        { name: "cta", title: "Call to Action" },
    ],
    fields: [
        // Hero
        { ...localizedString("heroBadge", "Hero Badge"), group: "hero" },
        { ...localizedString("heroTitle", "Hero Title"), group: "hero" },
        { ...localizedText("heroSubtitle", "Hero Subtitle"), group: "hero" },
        { name: "heroImage", title: "Hero Image", type: "image", group: "hero", options: { hotspot: true } },
        { ...ctaButtonField("heroPrimaryCta", "Primary CTA"), group: "hero" },
        { ...ctaButtonField("heroSecondaryCta", "Secondary CTA"), group: "hero" },

        // Stats
        { ...statsField, group: "stats" },

        // Feature Sections
        {
            name: "features",
            title: "Feature Sections",
            type: "array",
            group: "features",
            of: [contentBlockField],
        },

        // Countries Section
        { ...localizedString("countriesTitle", "Countries Section Title"), group: "countries" },
        { ...localizedText("countriesSubtitle", "Countries Subtitle"), group: "countries" },
        { name: "countriesMapImage", title: "World Map Image", type: "image", group: "countries" },
        {
            name: "countriesCount",
            type: "string",
            title: "Countries Count Text (e.g., 190+)",
            group: "countries"
        },

        // Payment Methods
        { ...localizedString("paymentMethodsTitle", "Payment Methods Title"), group: "paymentMethods" },
        {
            name: "paymentMethods",
            title: "Payment Methods",
            type: "array",
            group: "paymentMethods",
            of: [{
                type: "object",
                fields: [
                    iconField,
                    localizedString("title", "Method Title"),
                    localizedText("description", "Description"),
                    { name: "processingTime", type: "string", title: "Processing Time" },
                ],
                preview: { select: { title: "title.en", subtitle: "processingTime" } },
            }],
        },

        // FAQ
        ...faqFields.map(field => ({ ...field, group: "faq" })),

        // CTA
        { ...localizedString("ctaTitle", "CTA Title"), group: "cta" },
        { ...localizedText("ctaSubtitle", "CTA Subtitle"), group: "cta" },
        { ...ctaButtonField("ctaButton", "CTA Button"), group: "cta" },
    ],
    preview: {
        prepare() {
            return { title: "Global Payout Page" };
        },
    },
};

// ============================================
// CORPORATE CARDS PAGE SCHEMA
// ============================================
export const corporateCardsPage = {
    name: "corporateCardsPage",
    title: "Corporate Cards Page",
    type: "document",
    groups: [
        { name: "hero", title: "Hero Section" },
        { name: "stats", title: "Stats" },
        { name: "features", title: "Features" },
        { name: "cardTypes", title: "Card Types" },
        { name: "controls", title: "Spend Controls" },
        { name: "faq", title: "FAQ" },
        { name: "cta", title: "Call to Action" },
    ],
    fields: [
        // Hero
        { ...localizedString("heroBadge", "Hero Badge"), group: "hero" },
        { ...localizedString("heroTitle", "Hero Title"), group: "hero" },
        { ...localizedText("heroSubtitle", "Hero Subtitle"), group: "hero" },
        { name: "heroImage", title: "Hero Card Image", type: "image", group: "hero", options: { hotspot: true } },
        { ...ctaButtonField("heroPrimaryCta", "Primary CTA"), group: "hero" },
        { ...ctaButtonField("heroSecondaryCta", "Secondary CTA"), group: "hero" },

        // Stats
        { ...statsField, group: "stats" },

        // Feature Sections
        {
            name: "features",
            title: "Feature Sections",
            type: "array",
            group: "features",
            of: [contentBlockField],
        },

        // Card Types
        { ...localizedString("cardTypesTitle", "Card Types Title"), group: "cardTypes" },
        {
            name: "cardTypes",
            title: "Card Types",
            type: "array",
            group: "cardTypes",
            of: [{
                type: "object",
                fields: [
                    localizedString("name", "Card Name"),
                    localizedText("description", "Description"),
                    { name: "image", type: "image", title: "Card Image" },
                    {
                        name: "features",
                        title: "Features",
                        type: "array",
                        of: [localizedString("feature", "Feature")],
                    },
                ],
                preview: { select: { title: "name.en", media: "image" } },
            }],
        },

        // Spend Controls
        { ...localizedString("controlsTitle", "Spend Controls Title"), group: "controls" },
        { ...localizedText("controlsSubtitle", "Controls Subtitle"), group: "controls" },
        {
            name: "spendControls",
            title: "Spend Control Features",
            type: "array",
            group: "controls",
            of: [{
                type: "object",
                fields: [
                    iconField,
                    localizedString("title", "Feature Title"),
                    localizedText("description", "Description"),
                ],
                preview: { select: { title: "title.en", subtitle: "icon" } },
            }],
        },

        // FAQ
        ...faqFields.map(field => ({ ...field, group: "faq" })),

        // CTA
        { ...localizedString("ctaTitle", "CTA Title"), group: "cta" },
        { ...localizedText("ctaSubtitle", "CTA Subtitle"), group: "cta" },
        { ...ctaButtonField("ctaButton", "CTA Button"), group: "cta" },
    ],
    preview: {
        prepare() {
            return { title: "Corporate Cards Page" };
        },
    },
};

// ============================================
// API INTEGRATION PAGE SCHEMA
// ============================================
export const apiIntegrationPage = {
    name: "apiIntegrationPage",
    title: "API Integration Page",
    type: "document",
    groups: [
        { name: "hero", title: "Hero Section" },
        { name: "codeDemo", title: "Code Demo" },
        { name: "features", title: "Features" },
        { name: "endpoints", title: "API Endpoints" },
        { name: "sdks", title: "SDKs" },
        { name: "faq", title: "FAQ" },
        { name: "cta", title: "Call to Action" },
    ],
    fields: [
        // Hero
        { ...localizedString("heroBadge", "Hero Badge"), group: "hero" },
        { ...localizedString("heroTitle", "Hero Title"), group: "hero" },
        { ...localizedText("heroSubtitle", "Hero Subtitle"), group: "hero" },
        { ...ctaButtonField("heroPrimaryCta", "Primary CTA (Get API Keys)"), group: "hero" },
        { ...ctaButtonField("heroSecondaryCta", "Secondary CTA (View Docs)"), group: "hero" },

        // Code Demo
        { ...localizedString("codeDemoTitle", "Code Demo Title"), group: "codeDemo" },
        { name: "codeSnippet", type: "text", title: "Code Snippet", group: "codeDemo", rows: 15 },
        { name: "codeLanguage", type: "string", title: "Code Language", group: "codeDemo", initialValue: "javascript" },

        // Feature Sections
        {
            name: "features",
            title: "Feature Sections",
            type: "array",
            group: "features",
            of: [contentBlockField],
        },

        // API Endpoints
        { ...localizedString("endpointsTitle", "Endpoints Section Title"), group: "endpoints" },
        {
            name: "endpoints",
            title: "API Endpoints",
            type: "array",
            group: "endpoints",
            of: [{
                type: "object",
                fields: [
                    { name: "method", type: "string", title: "HTTP Method", options: { list: ["GET", "POST", "PUT", "DELETE", "PATCH"] } },
                    { name: "endpoint", type: "string", title: "Endpoint Path" },
                    localizedString("description", "Description"),
                ],
                preview: { select: { title: "endpoint", subtitle: "method" } },
            }],
        },

        // SDKs
        { ...localizedString("sdksTitle", "SDKs Section Title"), group: "sdks" },
        {
            name: "sdks",
            title: "SDK Languages",
            type: "array",
            group: "sdks",
            of: [{
                type: "object",
                fields: [
                    { name: "language", type: "string", title: "Language" },
                    { name: "icon", type: "image", title: "Language Icon" },
                    { name: "docUrl", type: "url", title: "Documentation URL" },
                    { name: "githubUrl", type: "url", title: "GitHub URL" },
                ],
                preview: { select: { title: "language" } },
            }],
        },

        // FAQ
        ...faqFields.map(field => ({ ...field, group: "faq" })),

        // CTA
        { ...localizedString("ctaTitle", "CTA Title"), group: "cta" },
        { ...localizedText("ctaSubtitle", "CTA Subtitle"), group: "cta" },
        { ...ctaButtonField("ctaButton", "CTA Button"), group: "cta" },
    ],
    preview: {
        prepare() {
            return { title: "API Integration Page" };
        },
    },
};

// ============================================
// REGULATORY REQUIREMENTS PAGE SCHEMA
// ============================================
export const regulatoryPage = {
    name: "regulatoryPage",
    title: "Regulatory Requirements Page",
    type: "document",
    groups: [
        { name: "hero", title: "Hero Section" },
        { name: "regulations", title: "Regulations" },
    ],
    fields: [
        // Hero
        { ...localizedString("title", "Page Title"), group: "hero" },
        { ...localizedText("subtitle", "Page Subtitle"), group: "hero" },

        // Regulations List
        {
            name: "regulations",
            title: "Regulation Entries",
            type: "array",
            group: "regulations",
            of: [{
                type: "object",
                fields: [
                    { ...localizedString("country", "Country Name") },
                    { ...localizedText("description", "Description") },
                ],
                preview: {
                    select: { title: "country.en" },
                },
            }],
        },
    ],
    preview: {
        prepare() {
            return { title: "Regulatory Requirements Page" };
        },
    },
};

