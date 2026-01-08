// Sanity schema helpers for localized content

// Supported languages (including Arabic)
export const supportedLanguages = [
    { id: "en", title: "English", isDefault: true },
    { id: "fr", title: "Français" },
    { id: "es", title: "Español" },
    { id: "de", title: "Deutsch" },
    { id: "ar", title: "العربية" },
];

// Localized string field helper
export const localizedString = (name: string, title: string) => ({
    name,
    title,
    type: "object",
    fields: supportedLanguages.map((lang) => ({
        name: lang.id,
        title: lang.title,
        type: "string",
    })),
});

// Localized text field helper
export const localizedText = (name: string, title: string, rows = 3) => ({
    name,
    title,
    type: "object",
    fields: supportedLanguages.map((lang) => ({
        name: lang.id,
        title: lang.title,
        type: "text",
        rows,
    })),
});

// Reusable link field
export const linkField = {
    type: "object",
    fields: [
        localizedString("label", "Label"),
        { name: "href", type: "string", title: "URL" },
    ],
};

// Reusable CTA button field
export const ctaButtonField = (name: string, title: string) => ({
    name,
    title,
    type: "object",
    fields: [
        localizedString("text", "Button Text"),
        { name: "href", type: "string", title: "Link URL", initialValue: "/get-started" },
        {
            name: "variant",
            type: "string",
            title: "Button Style",
            options: {
                list: [
                    { title: "Primary", value: "primary" },
                    { title: "Secondary", value: "secondary" },
                    { title: "Outline", value: "outline" },
                ]
            },
            initialValue: "primary"
        },
    ],
});

// Reusable stats field
export const statsField = {
    name: "stats",
    title: "Statistics",
    type: "array",
    of: [{
        type: "object",
        fields: [
            { name: "value", type: "string", title: "Value (e.g., 190+, 45%)" },
            localizedString("label", "Description"),
        ],
        preview: {
            select: { title: "value", subtitle: "label.en" },
        },
    }],
};

// Icon field options (expanded)
export const iconField = {
    name: "icon",
    title: "Icon",
    type: "string",
    options: {
        list: [
            { title: "Globe", value: "globe" },
            { title: "Credit Card", value: "credit-card" },
            { title: "Wallet", value: "wallet" },
            { title: "Arrow Left Right", value: "arrow-left-right" },
            { title: "Code", value: "code" },
            { title: "Trending Up", value: "trending-up" },
            { title: "Shield", value: "shield" },
            { title: "Shield Check", value: "shield-check" },
            { title: "Zap", value: "zap" },
            { title: "Building", value: "building" },
            { title: "Lock", value: "lock" },
            { title: "Check", value: "check" },
            { title: "Dollar Sign", value: "dollar-sign" },
            { title: "Clock", value: "clock" },
            { title: "Users", value: "users" },
            { title: "Shopping Bag", value: "shopping-bag" },
            { title: "Laptop", value: "laptop" },
            { title: "Headphones", value: "headphones" },
            { title: "Target", value: "target" },
            { title: "Plane", value: "plane" },
            { title: "Handshake", value: "handshake" },
            { title: "Lightbulb", value: "lightbulb" },
            { title: "Bar Chart", value: "bar-chart" },
            { title: "Layers", value: "layers" },
            { title: "Send", value: "send" },
            { title: "Download", value: "download" },
            { title: "Upload", value: "upload" },
            { title: "Repeat", value: "repeat" },
            { title: "Settings", value: "settings" },
            { title: "Award", value: "award" },
        ],
    },
};

// Color field
export const colorField = {
    name: "color",
    title: "Color",
    type: "string",
    options: {
        list: [
            { title: "Blue", value: "blue" },
            { title: "Purple", value: "purple" },
            { title: "Emerald", value: "emerald" },
            { title: "Orange", value: "orange" },
            { title: "Pink", value: "pink" },
            { title: "Teal", value: "teal" },
            { title: "Red", value: "red" },
            { title: "Yellow", value: "yellow" },
        ],
    },
};

// Hero section field group (reusable across pages)
export const heroFields = [
    localizedString("heroBadge", "Hero Badge"),
    localizedString("heroTitle", "Hero Title"),
    localizedText("heroSubtitle", "Hero Subtitle"),
    { name: "heroImage", title: "Hero Image", type: "image", options: { hotspot: true } },
    ctaButtonField("heroPrimaryCta", "Primary CTA Button"),
    ctaButtonField("heroSecondaryCta", "Secondary CTA Button"),
];

// CTA section field group (reusable)
export const ctaFields = [
    localizedString("ctaTitle", "CTA Title"),
    localizedText("ctaSubtitle", "CTA Subtitle"),
    ctaButtonField("ctaButton", "CTA Button"),
    { name: "ctaBackgroundImage", title: "CTA Background Image", type: "image", options: { hotspot: true } },
];

// FAQ section field group (reusable)
export const faqFields = [
    localizedString("faqBadge", "FAQ Badge"),
    localizedString("faqTitle", "FAQ Title"),
    localizedText("faqSubtitle", "FAQ Subtitle"),
    {
        name: "faqItems",
        title: "FAQ Items",
        type: "array",
        of: [{
            type: "object",
            fields: [
                localizedString("question", "Question"),
                localizedText("answer", "Answer"),
            ],
            preview: {
                select: { title: "question.en" },
            },
        }],
    },
];

// Feature card field (reusable)
export const featureCardFields = {
    type: "object",
    fields: [
        iconField,
        localizedString("title", "Title"),
        localizedText("description", "Description"),
        { name: "image", type: "image", title: "Image", options: { hotspot: true } },
        { name: "link", type: "string", title: "Link URL" },
        colorField,
    ],
    preview: {
        select: { title: "title.en", subtitle: "description.en" },
    },
};

// Content block field (for flexible content sections)
export const contentBlockField = {
    type: "object",
    name: "contentBlock",
    title: "Content Block",
    fields: [
        localizedString("badge", "Badge"),
        localizedString("title", "Title"),
        localizedString("subtitle", "Subtitle"),
        localizedText("description", "Description"),
        { name: "image", type: "image", title: "Image", options: { hotspot: true } },
        {
            name: "imagePosition",
            type: "string",
            title: "Image Position",
            options: { list: ["left", "right"] },
            initialValue: "right"
        },
        ctaButtonField("cta", "CTA Button"),
    ],
    preview: {
        select: { title: "title.en", media: "image" },
    },
};
