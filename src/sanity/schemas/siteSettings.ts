import { localizedString, localizedText, iconField, ctaButtonField, supportedLanguages } from "./helpers";

// ============================================
// SITE SETTINGS SCHEMA (Global)
// ============================================
export const siteSettings = {
    name: "siteSettings",
    title: "Site Settings",
    type: "document",
    groups: [
        { name: "general", title: "General" },
        { name: "header", title: "Header/Navigation" },
        { name: "footer", title: "Footer" },
        { name: "seo", title: "SEO & Meta" },
        { name: "social", title: "Social Media" },
        { name: "contact", title: "Contact Info" },
    ],
    fields: [
        // ============ GENERAL SETTINGS ============
        {
            name: "siteName",
            title: "Site Name",
            type: "string",
            group: "general",
            initialValue: "Norxio"
        },
        {
            name: "siteTagline",
            title: "Site Tagline",
            type: "string",
            group: "general"
        },
        {
            name: "logo",
            title: "Site Logo",
            type: "image",
            group: "general",
            options: { hotspot: true }
        },
        {
            name: "logoWhite",
            title: "White Logo (for dark backgrounds)",
            type: "image",
            group: "general",
            options: { hotspot: true }
        },
        {
            name: "favicon",
            title: "Favicon",
            type: "image",
            group: "general"
        },
        {
            name: "defaultLanguage",
            title: "Default Language",
            type: "string",
            group: "general",
            options: {
                list: supportedLanguages.map(lang => ({ title: lang.title, value: lang.id })),
            },
            initialValue: "en",
        },

        // ============ HEADER/NAVIGATION ============
        {
            name: "headerCta",
            title: "Header CTA Button",
            type: "object",
            group: "header",
            fields: [
                localizedString("text", "Button Text"),
                { name: "href", type: "string", title: "Link", initialValue: "/get-started" },
            ],
        },
        {
            name: "headerLoginText",
            title: "Login Button Text",
            type: "object",
            group: "header",
            fields: supportedLanguages.map(lang => ({
                name: lang.id,
                title: lang.title,
                type: "string",
            })),
        },
        {
            name: "loginUrl",
            title: "Login URL",
            type: "string",
            group: "header",
            initialValue: "/login",
        },

        // ============ FOOTER ============
        {
            ...localizedText("footerTagline", "Footer Tagline"),
            group: "footer",
        },
        {
            name: "footerColumns",
            title: "Footer Link Columns",
            type: "array",
            group: "footer",
            of: [{
                type: "object",
                fields: [
                    localizedString("title", "Column Title"),
                    {
                        name: "links",
                        title: "Links",
                        type: "array",
                        of: [{
                            type: "object",
                            fields: [
                                localizedString("label", "Link Label"),
                                { name: "href", type: "string", title: "URL" },
                            ],
                            preview: { select: { title: "label.en", subtitle: "href" } },
                        }],
                    },
                ],
                preview: { select: { title: "title.en" } },
            }],
        },
        {
            ...localizedText("footerDisclaimer", "Footer Disclaimer Text"),
            group: "footer",
        },
        {
            ...localizedString("footerCopyright", "Copyright Text"),
            group: "footer",
        },

        // ============ SEO & META ============
        {
            ...localizedString("seoTitle", "Default SEO Title"),
            group: "seo",
        },
        {
            ...localizedText("seoDescription", "Default Meta Description"),
            group: "seo",
        },
        {
            name: "seoKeywords",
            title: "Default Keywords",
            type: "array",
            group: "seo",
            of: [{ type: "string" }],
        },
        {
            name: "ogImage",
            title: "Default OG Image",
            type: "image",
            group: "seo",
            description: "Default image for social sharing",
        },
        {
            name: "twitterHandle",
            title: "Twitter Handle",
            type: "string",
            group: "seo",
        },

        // ============ SOCIAL MEDIA ============
        {
            name: "socialLinks",
            title: "Social Media Links",
            type: "array",
            group: "social",
            of: [{
                type: "object",
                fields: [
                    {
                        name: "platform",
                        type: "string",
                        title: "Platform",
                        options: {
                            list: [
                                { title: "Twitter/X", value: "twitter" },
                                { title: "LinkedIn", value: "linkedin" },
                                { title: "Facebook", value: "facebook" },
                                { title: "Instagram", value: "instagram" },
                                { title: "YouTube", value: "youtube" },
                                { title: "TikTok", value: "tiktok" },
                                { title: "WhatsApp", value: "whatsapp" },
                            ],
                        },
                    },
                    { name: "url", type: "url", title: "Profile URL" },
                ],
                preview: { select: { title: "platform", subtitle: "url" } },
            }],
        },

        // ============ CONTACT INFO ============
        {
            name: "contactEmail",
            title: "Contact Email",
            type: "string",
            group: "contact",
        },
        {
            name: "supportEmail",
            title: "Support Email",
            type: "string",
            group: "contact",
        },
        {
            name: "salesEmail",
            title: "Sales Email",
            type: "string",
            group: "contact",
        },
        {
            name: "phoneNumber",
            title: "Phone Number",
            type: "string",
            group: "contact",
        },
        {
            name: "address",
            title: "Company Address",
            type: "text",
            group: "contact",
            rows: 3,
        },
    ],
    preview: {
        prepare() {
            return { title: "Site Settings" };
        },
    },
};

// ============================================
// BLOG POST SCHEMA
// ============================================
export const blogPost = {
    name: "blogPost",
    title: "Blog Posts",
    type: "document",
    fields: [
        { name: "title", type: "string", title: "Title" },
        {
            name: "slug",
            type: "slug",
            title: "Slug",
            options: { source: "title" },
        },
        {
            name: "publishedAt",
            type: "datetime",
            title: "Published Date"
        },
        {
            name: "category",
            type: "string",
            title: "Category",
            options: {
                list: [
                    { title: "News", value: "news" },
                    { title: "Product Updates", value: "product" },
                    { title: "Industry Insights", value: "insights" },
                    { title: "Guides", value: "guides" },
                    { title: "Company", value: "company" },
                ],
            },
        },
        { name: "author", type: "string", title: "Author Name" },
        { name: "authorImage", type: "image", title: "Author Image" },
        { name: "coverImage", type: "image", title: "Cover Image", options: { hotspot: true } },
        { name: "excerpt", type: "text", title: "Excerpt", rows: 3 },
        {
            name: "content",
            type: "array",
            title: "Content",
            of: [
                { type: "block" },
                { type: "image", options: { hotspot: true } },
            ],
        },
        {
            name: "tags",
            type: "array",
            title: "Tags",
            of: [{ type: "string" }],
        },
        { name: "readTime", type: "number", title: "Read Time (minutes)" },
    ],
    preview: {
        select: {
            title: "title",
            subtitle: "category",
            media: "coverImage",
        },
    },
    orderings: [
        {
            title: "Published Date, Newest",
            name: "publishedAtDesc",
            by: [{ field: "publishedAt", direction: "desc" }],
        },
    ],
};

// ============================================
// CUSTOMER/INDUSTRY PAGE SCHEMA
// ============================================
export const customerPage = {
    name: "customerPage",
    title: "Customer/Industry Pages",
    type: "document",
    groups: [
        { name: "hero", title: "Hero Section" },
        { name: "challenges", title: "Challenges" },
        { name: "solutions", title: "Solutions" },
        { name: "testimonials", title: "Testimonials" },
        { name: "cta", title: "Call to Action" },
    ],
    fields: [
        {
            name: "slug",
            title: "Page Slug",
            type: "slug",
            options: { source: "internalName" },
            description: "URL path (e.g., e-commerce-retail)",
        },
        { name: "internalName", type: "string", title: "Internal Name" },

        // Hero
        { ...localizedString("heroBadge", "Hero Badge"), group: "hero" },
        { ...localizedString("heroTitle", "Hero Title"), group: "hero" },
        { ...localizedText("heroSubtitle", "Hero Subtitle"), group: "hero" },
        { name: "heroImage", title: "Hero Image", type: "image", group: "hero", options: { hotspot: true } },
        { ...ctaButtonField("heroPrimaryCta", "Primary CTA"), group: "hero" },
        { ...ctaButtonField("heroSecondaryCta", "Secondary CTA"), group: "hero" },

        // Challenges
        { ...localizedString("challengesTitle", "Challenges Section Title"), group: "challenges" },
        {
            name: "challenges",
            title: "Industry Challenges",
            type: "array",
            group: "challenges",
            of: [{
                type: "object",
                fields: [
                    iconField,
                    localizedString("title", "Challenge Title"),
                    localizedText("description", "Description"),
                ],
                preview: { select: { title: "title.en", subtitle: "icon" } },
            }],
        },

        // Solutions
        { ...localizedString("solutionsTitle", "Solutions Section Title"), group: "solutions" },
        {
            name: "solutions",
            title: "Norxio Solutions",
            type: "array",
            group: "solutions",
            of: [{
                type: "object",
                fields: [
                    iconField,
                    localizedString("title", "Solution Title"),
                    localizedText("description", "Description"),
                    { name: "image", type: "image", title: "Image" },
                ],
                preview: { select: { title: "title.en", subtitle: "icon" } },
            }],
        },

        // Testimonials
        { ...localizedString("testimonialsTitle", "Testimonials Title"), group: "testimonials" },
        {
            name: "testimonials",
            title: "Customer Testimonials",
            type: "array",
            group: "testimonials",
            of: [{
                type: "object",
                fields: [
                    { name: "quote", type: "text", title: "Quote", rows: 3 },
                    { name: "authorName", type: "string", title: "Author Name" },
                    { name: "authorRole", type: "string", title: "Author Role" },
                    { name: "company", type: "string", title: "Company" },
                    { name: "authorImage", type: "image", title: "Author Image" },
                    { name: "companyLogo", type: "image", title: "Company Logo" },
                ],
                preview: { select: { title: "authorName", subtitle: "company" } },
            }],
        },

        // CTA
        { ...localizedString("ctaTitle", "CTA Title"), group: "cta" },
        { ...localizedText("ctaSubtitle", "CTA Subtitle"), group: "cta" },
        { ...ctaButtonField("ctaButton", "CTA Button"), group: "cta" },
    ],
    preview: {
        select: { title: "internalName" },
    },
};
