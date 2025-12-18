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
      { title: "Users", value: "users" },
      { title: "Shopping Bag", value: "shopping-bag" },
      { title: "Laptop", value: "laptop" },
      { title: "Headphones", value: "headphones" },
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
// HOME PAGE
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
    { name: "heroBadge", title: "Badge Text", type: "string", group: "hero" },
    { name: "heroTitle", title: "Title", type: "string", group: "hero" },
    { name: "heroHighlight", title: "Highlighted Word", type: "string", group: "hero" },
    { name: "heroSubtitle", title: "Subtitle", type: "text", rows: 2, group: "hero" },
    { name: "heroImage", title: "Hero Image", type: "image", group: "hero", options: { hotspot: true } },
    { name: "heroPrimaryCta", title: "Primary Button Text", type: "string", group: "hero" },
    { name: "heroSecondaryCta", title: "Secondary Button Text", type: "string", group: "hero" },
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

    // Trusted By
    { name: "trustedByHeading", title: "Heading", type: "string", group: "trustedBy" },
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

    // Features
    { name: "featuresBadge", title: "Badge", type: "string", group: "features" },
    { name: "featuresTitle", title: "Title", type: "string", group: "features" },
    { name: "featuresSubtitle", title: "Subtitle", type: "text", rows: 2, group: "features" },
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

    // Why Trust
    { name: "whyTrustBadge", title: "Badge", type: "string", group: "whyTrust" },
    { name: "whyTrustTitle", title: "Title", type: "string", group: "whyTrust" },
    { name: "whyTrustSubtitle", title: "Subtitle", type: "text", rows: 2, group: "whyTrust" },
    { name: "whyTrustBulletPoints", title: "Bullet Points", type: "array", group: "whyTrust", of: [{ type: "string" }] },
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

    // Help Grow
    { name: "helpGrowTitle", title: "Title", type: "string", group: "helpGrow" },
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

    // All In One
    { name: "allInOneBadge", title: "Badge", type: "string", group: "allInOne" },
    { name: "allInOneTitle", title: "Title", type: "string", group: "allInOne" },

    // Security
    { name: "securityBadge", title: "Badge", type: "string", group: "security" },
    { name: "securityTitle", title: "Title", type: "string", group: "security" },
    { name: "securitySubtitle", title: "Subtitle", type: "text", rows: 2, group: "security" },
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

    // Pricing
    { name: "pricingBadge", title: "Badge", type: "string", group: "pricing" },
    { name: "pricingTitle", title: "Title", type: "string", group: "pricing" },
    { name: "pricingSubtitle", title: "Subtitle", type: "text", rows: 2, group: "pricing" },
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
            { name: "features", type: "array", title: "Features", of: [{ type: "string" }] },
            { name: "cta", type: "string", title: "Button Text" },
            { name: "popular", type: "boolean", title: "Is Popular?" },
          ],
        },
      ],
    },

    // FAQ
    { name: "faqBadge", title: "Badge", type: "string", group: "faq" },
    { name: "faqTitle", title: "Title", type: "string", group: "faq" },
    { name: "faqSubtitle", title: "Subtitle", type: "string", group: "faq" },
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

    // CTA
    { name: "ctaTitle", title: "Title", type: "string", group: "cta" },
    { name: "ctaSubtitle", title: "Subtitle", type: "text", rows: 2, group: "cta" },
    { name: "ctaButtonText", title: "Button Text", type: "string", group: "cta" },
  ],
};

// ============================================
// MULTI-CURRENCY PAGE
// ============================================

export const multiCurrencyPage = {
  name: "multiCurrencyPage",
  title: "Multi-Currency Page",
  type: "document",
  fields: [
    { name: "heroTitle", title: "Hero Title", type: "string" },
    { name: "heroSubtitle", title: "Hero Subtitle", type: "string" },
    { name: "heroImage", title: "Hero Image", type: "image", options: { hotspot: true } },

    { name: "feature1Title", title: "Feature 1 Title (Coins)", type: "string" },
    { name: "feature1Image", title: "Feature 1 Image", type: "image" },

    { name: "feature2Title", title: "Feature 2 Title (Map)", type: "string" },
    { name: "feature2Desc", title: "Feature 2 Description", type: "text" },
    { name: "feature2Image", title: "Feature 2 Image", type: "image" },

    { name: "feature3Title", title: "Feature 3 Title (Wallet)", type: "string" },
    { name: "feature3Desc", title: "Feature 3 Description", type: "text" },
    { name: "feature3Image", title: "Feature 3 Image", type: "image" },

    { name: "feature4Title", title: "Feature 4 Title (Operations)", type: "string" },
    { name: "feature4Desc", title: "Feature 4 Description", type: "text" },
    { name: "feature4List", title: "Feature 4 List", type: "array", of: [{ type: "string" }] },
    { name: "feature4Image", title: "Feature 4 Image", type: "image" },

    {
      name: "faqs",
      title: "FAQs",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "question", type: "string" },
            { name: "answer", type: "text" },
          ],
        },
      ],
    },
    { name: "ctaTitle", title: "CTA Title", type: "string" },
    { name: "ctaSubtitle", title: "CTA Subtitle", type: "string" },
  ],
};

// ============================================
// FX EXCHANGE PAGE
// ============================================

export const fxExchangePage = {
  name: "fxExchangePage",
  title: "FX Exchange Page",
  type: "document",
  fields: [
    { name: "heroTitle", title: "Hero Title", type: "string" },
    { name: "heroSubtitle", title: "Hero Subtitle", type: "string" },
    { name: "heroImage", title: "Hero Image", type: "image", options: { hotspot: true } }, // Optional bg

    { name: "statsList", title: "Stats Strip", type: "array", of: [{ type: "object", fields: [{ name: "icon", type: "string" }, { name: "text", type: "string" }] }] },

    { name: "feature1Title", title: "Feature 1 Title", type: "string" },
    { name: "feature1Desc", title: "Feature 1 Desc", type: "text" },
    { name: "feature1Image", title: "Feature 1 Image", type: "image" },

    { name: "feature2Title", title: "Feature 2 Title", type: "string" },
    { name: "feature2Desc", title: "Feature 2 Desc", type: "text" },
    { name: "feature2Image", title: "Feature 2 Image", type: "image" },

    { name: "feature3Title", title: "Feature 3 Title", type: "string" },
    { name: "feature3Desc", title: "Feature 3 Desc", type: "text" },
    { name: "feature3Image", title: "Feature 3 Image", type: "image" },

    { name: "mapTitle", title: "Map Section Title", type: "string" },
    { name: "mapSubtitle", title: "Map Section Subtitle", type: "string" },
    { name: "mapImage", title: "Map Background", type: "image" },

    {
      name: "faqs",
      title: "FAQs",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "question", type: "string" },
            { name: "answer", type: "text" },
          ],
        },
      ],
    },
  ],
};

// ============================================
// GLOBAL PAYOUT PAGE
// ============================================

export const globalPayoutPage = {
  name: "globalPayoutPage",
  title: "Global Payout Page",
  type: "document",
  fields: [
    { name: "heroTitle", title: "Hero Title", type: "string" },
    { name: "heroSubtitle", title: "Hero Subtitle", type: "string" },
    { name: "heroImage", title: "Hero Image", type: "image", options: { hotspot: true } },

    { name: "sendMoneyTitle", title: "Send Money Title", type: "string" },
    { name: "sendMoneyDesc", title: "Send Money Desc", type: "text" },
    { name: "sendMoneyImage", title: "Send Money Image", type: "image" },

    { name: "simplifiedTitle", title: "Simplified Title", type: "string" },
    { name: "simplifiedCards", title: "Simplified Cards", type: "array", of: [{ type: "object", fields: [iconField, { name: "title", type: "string" }, { name: "description", type: "text" }] }] },

    { name: "builtForTitle", title: "Built For Title", type: "string" },
    { name: "builtForCards", title: "Built For Cards", type: "array", of: [{ type: "object", fields: [{ name: "title", type: "string" }, { name: "description", type: "text" }, { name: "image", type: "image" }] }] },

    { name: "businessGridTitle", title: "Business Grid Title", type: "string" },
    { name: "businessGridImages", title: "Business Images", type: "array", of: [{ type: "object", fields: [{ name: "title", type: "string" }, { name: "image", type: "image" }] }] },

    {
      name: "faqs",
      title: "FAQs",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "question", type: "string" },
            { name: "answer", type: "text" },
          ],
        },
      ],
    },
    { name: "ctaTitle", title: "CTA Title", type: "string" },
    { name: "ctaSubtitle", title: "CTA Subtitle", type: "string" },
  ],
};


export const schemaTypes = [siteSettings, homePage, multiCurrencyPage, fxExchangePage, globalPayoutPage];
