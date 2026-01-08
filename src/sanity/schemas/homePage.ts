import {
    localizedString,
    localizedText,
    iconField,
    colorField,
    faqFields,
    statsField,
    ctaButtonField,
    featureCardFields
} from "./helpers";

// ============================================
// HOME PAGE SCHEMA
// ============================================
export const homePage = {
    name: "homePage",
    title: "Home Page",
    type: "document",
    groups: [
        { name: "hero", title: "Hero Section" },
        { name: "stats", title: "Stats Section" },
        { name: "features", title: "Features Section" },
        { name: "whyTrust", title: "Why Trust Us" },
        { name: "helpGrow", title: "Help You Grow" },
        { name: "allInOne", title: "All In One" },
        { name: "security", title: "Security" },
        { name: "pricing", title: "Pricing" },
        { name: "faq", title: "FAQ" },
        { name: "cta", title: "Call to Action" },
    ],
    fields: [
        // ============ HERO SECTION ============
        {
            ...localizedString("heroBadge", "Hero Badge"),
            group: "hero",
        },
        {
            ...localizedString("heroTitle", "Hero Title"),
            group: "hero",
        },
        {
            ...localizedString("heroHighlight", "Highlighted Word"),
            group: "hero",
            description: "The emphasized word in the title",
        },
        {
            ...localizedText("heroSubtitle", "Hero Subtitle"),
            group: "hero",
        },
        {
            name: "heroImage",
            title: "Hero Background Image",
            type: "image",
            group: "hero",
            options: { hotspot: true }
        },
        {
            ...ctaButtonField("heroPrimaryCta", "Primary CTA Button"),
            group: "hero",
        },
        {
            ...ctaButtonField("heroSecondaryCta", "Secondary CTA Button"),
            group: "hero",
        },

        // ============ STATS SECTION ============
        {
            ...statsField,
            group: "stats",
            description: "Key statistics displayed below hero (e.g., 190+ Countries)",
        },

        // ============ FEATURES SECTION ============
        {
            ...localizedString("featuresBadge", "Features Badge"),
            group: "features",
        },
        {
            ...localizedString("featuresTitle", "Features Title"),
            group: "features",
        },
        {
            ...localizedText("featuresSubtitle", "Features Subtitle"),
            group: "features",
        },
        {
            name: "featureCards",
            title: "Feature Cards",
            type: "array",
            group: "features",
            of: [featureCardFields],
        },

        // ============ WHY TRUST SECTION ============
        {
            ...localizedString("whyTrustBadge", "Badge"),
            group: "whyTrust",
        },
        {
            ...localizedString("whyTrustTitle", "Title"),
            group: "whyTrust",
        },
        {
            ...localizedText("whyTrustSubtitle", "Subtitle"),
            group: "whyTrust",
        },
        {
            name: "whyTrustCards",
            title: "Trust Cards",
            type: "array",
            group: "whyTrust",
            of: [{
                type: "object",
                fields: [
                    iconField,
                    localizedString("title", "Title"),
                    localizedText("description", "Description"),
                ],
                preview: {
                    select: { title: "title.en", subtitle: "icon" },
                },
            }],
        },

        // ============ HELP GROW SECTION ============
        {
            ...localizedString("helpGrowBadge", "Badge"),
            group: "helpGrow",
        },
        {
            ...localizedString("helpGrowTitle", "Section Title"),
            group: "helpGrow",
        },
        {
            name: "helpGrowCards",
            title: "Growth Cards",
            type: "array",
            group: "helpGrow",
            of: [{
                type: "object",
                fields: [
                    { name: "image", type: "image", title: "Card Image", options: { hotspot: true } },
                    localizedString("title", "Card Title"),
                    localizedText("description", "Card Description"),
                    { name: "link", type: "string", title: "Link URL" },
                ],
                preview: {
                    select: { title: "title.en", media: "image" },
                },
            }],
        },

        // ============ ALL IN ONE SECTION ============
        {
            ...localizedString("allInOneTitle", "Title"),
            group: "allInOne",
        },
        {
            name: "allInOneImage",
            title: "Section Image",
            type: "image",
            group: "allInOne",
            options: { hotspot: true }
        },

        // ============ SECURITY SECTION ============
        {
            ...localizedString("securityBadge", "Badge"),
            group: "security",
        },
        {
            ...localizedString("securityTitle", "Title"),
            group: "security",
        },
        {
            ...localizedText("securitySubtitle", "Subtitle"),
            group: "security",
        },
        {
            name: "securityImage",
            title: "Security Image",
            type: "image",
            group: "security",
            options: { hotspot: true }
        },

        // ============ PRICING SECTION ============
        {
            ...localizedString("pricingBadge", "Badge"),
            group: "pricing",
        },
        {
            ...localizedString("pricingTitle", "Title"),
            group: "pricing",
        },
        {
            ...localizedText("pricingSubtitle", "Subtitle"),
            group: "pricing",
        },
        {
            name: "pricingPlans",
            title: "Pricing Plans",
            type: "array",
            group: "pricing",
            of: [{
                type: "object",
                fields: [
                    localizedString("name", "Plan Name"),
                    localizedString("audience", "Target Audience"),
                    { name: "price", type: "string", title: "Price" },
                    localizedString("period", "Period (e.g., /month)"),
                    {
                        name: "features",
                        type: "array",
                        title: "Features",
                        of: [{ type: "string" }],
                    },
                    localizedString("cta", "Button Text"),
                    { name: "isDark", type: "boolean", title: "Is Dark Theme?", initialValue: false },
                ],
                preview: {
                    select: { title: "name.en", subtitle: "price" },
                },
            }],
        },

        // ============ FAQ SECTION ============
        {
            ...localizedString("faqBadge", "Badge"),
            group: "faq",
        },
        {
            ...localizedString("faqTitle", "Title"),
            group: "faq",
        },
        {
            ...localizedText("faqSubtitle", "Subtitle"),
            group: "faq",
        },
        {
            name: "faqItems",
            title: "FAQ Items",
            type: "array",
            group: "faq",
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

        // ============ CTA SECTION ============
        {
            ...localizedString("ctaTitle", "CTA Title"),
            group: "cta",
        },
        {
            ...localizedText("ctaSubtitle", "CTA Subtitle"),
            group: "cta",
        },
        {
            ...ctaButtonField("ctaButton", "CTA Button"),
            group: "cta",
        },
    ],
    preview: {
        prepare() {
            return { title: "Home Page" };
        },
    },
};

// ============================================
// ABOUT PAGE SCHEMA
// ============================================
export const aboutPage = {
    name: "aboutPage",
    title: "About Page",
    type: "document",
    groups: [
        { name: "hero", title: "Hero Section" },
        { name: "mission", title: "Mission & Vision" },
        { name: "values", title: "Company Values" },
        { name: "stats", title: "Stats" },
        { name: "team", title: "Team" },
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

        // Mission & Vision
        { ...localizedString("missionTitle", "Mission Title"), group: "mission" },
        { ...localizedText("missionContent", "Mission Content"), group: "mission" },
        { name: "missionImage", title: "Mission Image", type: "image", group: "mission", options: { hotspot: true } },
        { ...localizedString("visionTitle", "Vision Title"), group: "mission" },
        { ...localizedText("visionContent", "Vision Content"), group: "mission" },
        { name: "visionImage", title: "Vision Image", type: "image", group: "mission", options: { hotspot: true } },

        // Company Values
        { ...localizedString("valuesTitle", "Values Section Title"), group: "values" },
        {
            name: "values",
            title: "Company Values",
            type: "array",
            group: "values",
            of: [{
                type: "object",
                fields: [
                    iconField,
                    localizedString("title", "Value Title"),
                    localizedText("description", "Description"),
                    colorField,
                ],
                preview: { select: { title: "title.en", subtitle: "icon" } },
            }],
        },

        // Stats
        { ...statsField, group: "stats" },

        // Team
        { ...localizedString("teamTitle", "Team Section Title"), group: "team" },
        {
            name: "teamMembers",
            title: "Team Members",
            type: "array",
            group: "team",
            of: [{
                type: "object",
                fields: [
                    { name: "name", type: "string", title: "Name" },
                    localizedString("role", "Role"),
                    { name: "photo", type: "image", title: "Photo", options: { hotspot: true } },
                    { name: "linkedin", type: "url", title: "LinkedIn URL" },
                    { name: "twitter", type: "url", title: "Twitter URL" },
                ],
                preview: { select: { title: "name", subtitle: "role.en", media: "photo" } },
            }],
        },

        // CTA
        { ...localizedString("ctaTitle", "CTA Title"), group: "cta" },
        { ...localizedText("ctaSubtitle", "CTA Subtitle"), group: "cta" },
        { ...ctaButtonField("ctaPrimaryCta", "Primary CTA"), group: "cta" },
        { ...ctaButtonField("ctaSecondaryCta", "Secondary CTA"), group: "cta" },
        { name: "ctaBackgroundImage", title: "CTA Background Image", type: "image", group: "cta", options: { hotspot: true } },
    ],
    preview: {
        prepare() {
            return { title: "About Page" };
        },
    },
};

// ============================================
// CAREERS PAGE SCHEMA
// ============================================
export const careersPage = {
    name: "careersPage",
    title: "Careers Page",
    type: "document",
    groups: [
        { name: "hero", title: "Hero Section" },
        { name: "culture", title: "Culture" },
        { name: "benefits", title: "Benefits" },
        { name: "positions", title: "Open Positions" },
        { name: "cta", title: "Call to Action" },
    ],
    fields: [
        // Hero
        { ...localizedString("heroBadge", "Hero Badge"), group: "hero" },
        { ...localizedString("heroTitle", "Hero Title"), group: "hero" },
        { ...localizedText("heroSubtitle", "Hero Subtitle"), group: "hero" },
        {
            name: "heroImages",
            title: "Hero Images",
            type: "array",
            group: "hero",
            of: [{ type: "image", options: { hotspot: true } }],
            validation: (Rule: { max: (arg: number) => unknown }) => Rule.max(4),
        },

        // Culture
        { ...localizedString("cultureTitle", "Culture Section Title"), group: "culture" },
        { ...localizedText("cultureSubtitle", "Culture Subtitle"), group: "culture" },
        {
            name: "cultureValues",
            title: "Culture Values",
            type: "array",
            group: "culture",
            of: [{
                type: "object",
                fields: [
                    iconField,
                    localizedString("title", "Title"),
                    localizedText("description", "Description"),
                ],
                preview: { select: { title: "title.en", subtitle: "icon" } },
            }],
        },

        // Benefits
        { ...localizedString("benefitsTitle", "Benefits Title"), group: "benefits" },
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
                ],
                preview: { select: { title: "title.en", subtitle: "icon" } },
            }],
        },

        // Open Positions
        { ...localizedString("positionsTitle", "Open Positions Title"), group: "positions" },
        {
            name: "positions",
            title: "Job Positions",
            type: "array",
            group: "positions",
            of: [{
                type: "object",
                fields: [
                    { name: "title", type: "string", title: "Job Title" },
                    localizedString("department", "Department"),
                    localizedString("location", "Location"),
                    {
                        name: "type",
                        type: "string",
                        title: "Employment Type",
                        options: { list: ["Full-time", "Part-time", "Contract", "Remote"] }
                    },
                    localizedText("description", "Job Description"),
                    { name: "applyUrl", type: "url", title: "Apply URL" },
                ],
                preview: { select: { title: "title", subtitle: "department.en" } },
            }],
        },

        // CTA
        { ...localizedString("ctaTitle", "CTA Title"), group: "cta" },
        { ...localizedText("ctaSubtitle", "CTA Subtitle"), group: "cta" },
        { ...ctaButtonField("ctaButton", "CTA Button"), group: "cta" },
    ],
    preview: {
        prepare() {
            return { title: "Careers Page" };
        },
    },
};

// ============================================
// PRICING PAGE SCHEMA
// ============================================
export const pricingPage = {
    name: "pricingPage",
    title: "Pricing Page",
    type: "document",
    groups: [
        { name: "hero", title: "Hero Section" },
        { name: "plans", title: "Pricing Plans" },
        { name: "comparison", title: "Feature Comparison" },
        { name: "faq", title: "FAQ" },
        { name: "cta", title: "Call to Action" },
    ],
    fields: [
        // Hero
        { ...localizedString("heroBadge", "Hero Badge"), group: "hero" },
        { ...localizedString("heroTitle", "Hero Title"), group: "hero" },
        { ...localizedText("heroSubtitle", "Hero Subtitle"), group: "hero" },

        // Pricing Plans
        {
            name: "plans",
            title: "Pricing Plans",
            type: "array",
            group: "plans",
            of: [{
                type: "object",
                fields: [
                    localizedString("name", "Plan Name"),
                    localizedString("description", "Description"),
                    { name: "price", type: "string", title: "Price" },
                    localizedString("period", "Period"),
                    { name: "popular", type: "boolean", title: "Is Popular?", initialValue: false },
                    {
                        name: "features",
                        title: "Features",
                        type: "array",
                        of: [localizedString("feature", "Feature")],
                    },
                    localizedString("cta", "Button Text"),
                    { name: "ctaLink", type: "string", title: "Button Link", initialValue: "/get-started" },
                ],
                preview: { select: { title: "name.en", subtitle: "price" } },
            }],
        },

        // Feature Comparison
        { ...localizedString("comparisonTitle", "Comparison Title"), group: "comparison" },
        { ...localizedText("comparisonSubtitle", "Comparison Subtitle"), group: "comparison" },
        {
            name: "comparisonSections",
            title: "Comparison Sections",
            type: "array",
            group: "comparison",
            of: [{
                type: "object",
                fields: [
                    localizedString("sectionTitle", "Section Title"),
                    {
                        name: "features",
                        title: "Features",
                        type: "array",
                        of: [{
                            type: "object",
                            fields: [
                                localizedString("feature", "Feature Name"),
                                { name: "lite", type: "string", title: "Lite Plan", description: "Value or ✓/✗" },
                                { name: "business", type: "string", title: "Business Plan" },
                                { name: "custom", type: "string", title: "Custom Plan" },
                            ],
                        }],
                    },
                ],
                preview: { select: { title: "sectionTitle.en" } },
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
            return { title: "Pricing Page" };
        },
    },
};
