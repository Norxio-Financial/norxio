import { type Rule } from "sanity";

// ============================================
// REUSABLE FIELD TYPES
// ============================================

const linkField = {
  type: "object",
  fields: [
    { name: "label", type: "string", title: "Label" },
    { name: "href", type: "string", title: "URL" },
  ],
};

const iconField = {
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
      { title: "Zap", value: "zap" },
      { title: "Building", value: "building" },
      { title: "Lock", value: "lock" },
      { title: "Check", value: "check" },
      { title: "Dollar Sign", value: "dollar-sign" },
      { title: "Clock", value: "clock" },
    ],
  },
};

const colorField = {
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
    ],
  },
};

// ============================================
// SITE SETTINGS (Global)
// ============================================

export const siteSettings = {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  groups: [
    { name: "branding", title: "Branding" },
    { name: "navigation", title: "Navigation" },
    { name: "footer", title: "Footer" },
  ],
  fields: [
    {
      name: "siteName",
      title: "Site Name",
      type: "string",
      group: "branding",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
      group: "branding",
    },
    {
      name: "navLinks",
      title: "Navigation Links",
      type: "array",
      group: "navigation",
      of: [linkField],
    },
    {
      name: "footerTagline",
      title: "Footer Tagline",
      type: "string",
      group: "footer",
    },
    {
      name: "footerColumns",
      title: "Footer Link Columns",
      type: "array",
      group: "footer",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string", title: "Column Title" },
            {
              name: "links",
              type: "array",
              title: "Links",
              of: [linkField],
            },
          ],
        },
      ],
    },
    {
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      group: "footer",
      of: [
        {
          type: "object",
          fields: [
            { name: "platform", type: "string", title: "Platform" },
            { name: "url", type: "url", title: "URL" },
          ],
        },
      ],
    },
    {
      name: "copyright",
      title: "Copyright Text",
      type: "string",
      group: "footer",
    },
  ],
};

// ============================================
// HOME PAGE (Single Document)
// ============================================

export const homePage = {
  name: "homePage",
  title: "Home Page",
  type: "document",
  groups: [
    { name: "hero", title: "Hero Section" },
    { name: "trustedBy", title: "Trusted By" },
    { name: "features", title: "Features" },
    { name: "whyTrust", title: "Why Trust Us" },
    { name: "helpGrow", title: "Help You Grow" },
    { name: "allInOne", title: "All In One" },
    { name: "security", title: "Security" },
    { name: "pricing", title: "Pricing" },
    { name: "faq", title: "FAQ" },
    { name: "cta", title: "Call to Action" },
  ],
  fields: [
    // Hero Section
    {
      name: "heroBadge",
      title: "Badge Text",
      type: "string",
      group: "hero",
    },
    {
      name: "heroTitle",
      title: "Title",
      type: "string",
      group: "hero",
    },
    {
      name: "heroHighlight",
      title: "Highlighted Word",
      type: "string",
      group: "hero",
    },
    {
      name: "heroSubtitle",
      title: "Subtitle",
      type: "text",
      rows: 2,
      group: "hero",
    },
    {
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      group: "hero",
      options: {
        hotspot: true,
      },
    },
    {
      name: "heroPrimaryCta",
      title: "Primary Button Text",
      type: "string",
      group: "hero",
    },
    {
      name: "heroSecondaryCta",
      title: "Secondary Button Text",
      type: "string",
      group: "hero",
    },
    {
      name: "heroCurrencies",
      title: "Currency Display",
      type: "array",
      group: "hero",
      of: [
        {
          type: "object",
          fields: [
            { name: "code", type: "string", title: "Currency Code" },
            { name: "flag", type: "string", title: "Flag Emoji" },
            { name: "change", type: "string", title: "Change %" },
            { name: "up", type: "boolean", title: "Is Positive?" },
          ],
        },
      ],
    },

    // Trusted By Section
    {
      name: "trustedByHeading",
      title: "Heading",
      type: "string",
      group: "trustedBy",
    },
    {
      name: "trustedByCompanies",
      title: "Company Logos",
      type: "array",
      group: "trustedBy",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", type: "string", title: "Company Name" },
            { name: "logo", type: "image", title: "Company Logo" },
          ],
        },
      ],
    },

    // Features Section
    {
      name: "featuresBadge",
      title: "Badge",
      type: "string",
      group: "features",
    },
    {
      name: "featuresTitle",
      title: "Title",
      type: "string",
      group: "features",
    },
    {
      name: "featuresSubtitle",
      title: "Subtitle",
      type: "text",
      rows: 2,
      group: "features",
    },
    {
      name: "featuresList",
      title: "Features",
      type: "array",
      group: "features",
      of: [
        {
          type: "object",
          fields: [
            iconField,
            { name: "title", type: "string", title: "Title" },
            { name: "description", type: "text", title: "Description" },
            colorField,
          ],
        },
      ],
    },

    // Why Trust Section
    {
      name: "whyTrustBadge",
      title: "Badge",
      type: "string",
      group: "whyTrust",
    },
    {
      name: "whyTrustTitle",
      title: "Title",
      type: "string",
      group: "whyTrust",
    },
    {
      name: "whyTrustSubtitle",
      title: "Subtitle",
      type: "text",
      rows: 2,
      group: "whyTrust",
    },
    {
      name: "whyTrustBulletPoints",
      title: "Bullet Points",
      type: "array",
      group: "whyTrust",
      of: [{ type: "string" }],
    },
    {
      name: "whyTrustReasons",
      title: "Reasons",
      type: "array",
      group: "whyTrust",
      of: [
        {
          type: "object",
          fields: [
            iconField,
            { name: "title", type: "string", title: "Title" },
            { name: "description", type: "text", title: "Description" },
          ],
        },
      ],
    },

    // Help You Grow Section
    {
      name: "helpGrowTitle",
      title: "Title",
      type: "string",
      group: "helpGrow",
    },
    {
      name: "helpGrowCards",
      title: "Growth Cards",
      type: "array",
      group: "helpGrow",
      of: [
        {
          type: "object",
          fields: [
            { name: "image", type: "image", title: "Image", options: { hotspot: true } },
            { name: "title", type: "string", title: "Title" },
            { name: "description", type: "text", title: "Description" },
          ],
        },
      ],
    },

    // All In One Section
    {
      name: "allInOneBadge",
      title: "Badge",
      type: "string",
      group: "allInOne",
    },
    {
      name: "allInOneTitle",
      title: "Title",
      type: "string",
      group: "allInOne",
    },

    // Security Section
    {
      name: "securityBadge",
      title: "Badge",
      type: "string",
      group: "security",
    },
    {
      name: "securityTitle",
      title: "Title",
      type: "string",
      group: "security",
    },
    {
      name: "securitySubtitle",
      title: "Subtitle",
      type: "text",
      rows: 2,
      group: "security",
    },
    {
      name: "securityFeatures",
      title: "Security Features",
      type: "array",
      group: "security",
      of: [
        {
          type: "object",
          fields: [
            iconField,
            { name: "title", type: "string", title: "Title" },
            { name: "description", type: "text", title: "Description" },
          ],
        },
      ],
    },

    // Pricing Section
    {
      name: "pricingBadge",
      title: "Badge",
      type: "string",
      group: "pricing",
    },
    {
      name: "pricingTitle",
      title: "Title",
      type: "string",
      group: "pricing",
    },
    {
      name: "pricingSubtitle",
      title: "Subtitle",
      type: "text",
      rows: 2,
      group: "pricing",
    },
    {
      name: "pricingPlans",
      title: "Pricing Plans",
      type: "array",
      group: "pricing",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", type: "string", title: "Plan Name" },
            { name: "description", type: "string", title: "Description" },
            { name: "price", type: "string", title: "Price" },
            { name: "period", type: "string", title: "Period (e.g., /month)" },
            {
              name: "features",
              type: "array",
              title: "Features",
              of: [{ type: "string" }],
            },
            { name: "cta", type: "string", title: "Button Text" },
            { name: "popular", type: "boolean", title: "Is Popular?" },
          ],
        },
      ],
    },

    // FAQ Section
    {
      name: "faqBadge",
      title: "Badge",
      type: "string",
      group: "faq",
    },
    {
      name: "faqTitle",
      title: "Title",
      type: "string",
      group: "faq",
    },
    {
      name: "faqSubtitle",
      title: "Subtitle",
      type: "string",
      group: "faq",
    },
    {
      name: "faqList",
      title: "FAQs",
      type: "array",
      group: "faq",
      of: [
        {
          type: "object",
          fields: [
            { name: "question", type: "string", title: "Question" },
            { name: "answer", type: "text", title: "Answer" },
          ],
        },
      ],
    },

    // CTA Section
    {
      name: "ctaTitle",
      title: "Title",
      type: "string",
      group: "cta",
    },
    {
      name: "ctaSubtitle",
      title: "Subtitle",
      type: "text",
      rows: 2,
      group: "cta",
    },
    {
      name: "ctaButtonText",
      title: "Button Text",
      type: "string",
      group: "cta",
    },
  ],
};

// ============================================
// EXPORT ALL SCHEMAS
// ============================================

export const schemaTypes = [siteSettings, homePage];
