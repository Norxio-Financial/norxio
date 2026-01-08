import { client } from "./sanity";
import type { Language } from "./i18n/translations";

// ===================================
// SANITY DATA FETCHING WITH LANGUAGE SUPPORT
// ===================================

// Check if Sanity is properly configured
const isSanityEnabled = () => {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  return !!projectId && projectId !== "your_project_id";
};

// Helper to get localized field from Sanity
export const getLocalizedField = (field: Record<string, string> | string | undefined, lang: Language = "en"): string => {
  if (!field) return "";
  if (typeof field === "string") return field;
  return field[lang] || field.en || "";
};

// ===================================
// HOME PAGE QUERY
// ===================================
export async function getHomePageData(lang: Language = "en") {
  if (!isSanityEnabled()) return null;

  try {
    const query = `*[_type == "homePage"][0]{
            heroBadge,
            heroTitle,
            heroHighlight,
            heroSubtitle,
            heroPrimaryCta,
            heroSecondaryCta,
            heroImage,
            stats,
            featuresBadge,
            featuresTitle,
            featuresSubtitle,
            featureCards,
            whyTrustBadge,
            whyTrustTitle,
            whyTrustSubtitle,
            whyTrustCards,
            securityBadge,
            securityTitle,
            securitySubtitle,
            pricingBadge,
            pricingTitle,
            pricingSubtitle,
            pricingPlans,
            faqBadge,
            faqTitle,
            faqSubtitle,
            faqItems,
            ctaTitle,
            ctaSubtitle,
            ctaButton
        }`;

    const data = await client.fetch(query, {}, { next: { revalidate: 60 } });
    if (!data) return null;

    // Transform data with language support
    return {
      hero: {
        badge: getLocalizedField(data.heroBadge, lang),
        title: getLocalizedField(data.heroTitle, lang),
        highlight: getLocalizedField(data.heroHighlight, lang),
        subtitle: getLocalizedField(data.heroSubtitle, lang),
        primaryCta: data.heroPrimaryCta ? {
          text: getLocalizedField(data.heroPrimaryCta.text, lang),
          href: data.heroPrimaryCta.href || "/get-started"
        } : null,
        secondaryCta: data.heroSecondaryCta ? {
          text: getLocalizedField(data.heroSecondaryCta.text, lang),
          href: data.heroSecondaryCta.href || "/get-started"
        } : null,
      },
      stats: data.stats?.map((s: { value: string; label: Record<string, string> }) => ({
        value: s.value,
        label: getLocalizedField(s.label, lang)
      })) || [],
      features: {
        badge: getLocalizedField(data.featuresBadge, lang),
        title: getLocalizedField(data.featuresTitle, lang),
        subtitle: getLocalizedField(data.featuresSubtitle, lang),
        cards: data.featureCards?.map((f: { icon: string; title: Record<string, string>; description: Record<string, string>; link: string; color: string }) => ({
          icon: f.icon,
          title: getLocalizedField(f.title, lang),
          description: getLocalizedField(f.description, lang),
          link: f.link,
          color: f.color
        })) || []
      },
      whyTrust: {
        badge: getLocalizedField(data.whyTrustBadge, lang),
        title: getLocalizedField(data.whyTrustTitle, lang),
        subtitle: getLocalizedField(data.whyTrustSubtitle, lang),
        cards: data.whyTrustCards?.map((c: { icon: string; title: Record<string, string>; description: Record<string, string> }) => ({
          icon: c.icon,
          title: getLocalizedField(c.title, lang),
          description: getLocalizedField(c.description, lang)
        })) || []
      },
      security: {
        badge: getLocalizedField(data.securityBadge, lang),
        title: getLocalizedField(data.securityTitle, lang),
        subtitle: getLocalizedField(data.securitySubtitle, lang)
      },
      pricing: {
        badge: getLocalizedField(data.pricingBadge, lang),
        title: getLocalizedField(data.pricingTitle, lang),
        subtitle: getLocalizedField(data.pricingSubtitle, lang),
        plans: data.pricingPlans?.map((p: { name: Record<string, string>; audience: Record<string, string>; price: string; period: Record<string, string>; features: string[]; cta: Record<string, string>; isDark: boolean }) => ({
          name: getLocalizedField(p.name, lang),
          audience: getLocalizedField(p.audience, lang),
          price: p.price,
          period: getLocalizedField(p.period, lang),
          features: p.features || [],
          cta: getLocalizedField(p.cta, lang),
          isDark: p.isDark
        })) || []
      },
      faq: {
        badge: getLocalizedField(data.faqBadge, lang),
        title: getLocalizedField(data.faqTitle, lang),
        subtitle: getLocalizedField(data.faqSubtitle, lang),
        items: data.faqItems?.map((f: { question: Record<string, string>; answer: Record<string, string> }) => ({
          question: getLocalizedField(f.question, lang),
          answer: getLocalizedField(f.answer, lang)
        })) || []
      },
      cta: {
        title: getLocalizedField(data.ctaTitle, lang),
        subtitle: getLocalizedField(data.ctaSubtitle, lang),
        button: data.ctaButton ? {
          text: getLocalizedField(data.ctaButton.text, lang),
          href: data.ctaButton.href || "/get-started"
        } : null
      }
    };
  } catch (error) {
    console.error("Error fetching home page:", error);
    return null;
  }
}

// ===================================
// SITE SETTINGS QUERY
// ===================================
export async function getSiteSettings(lang: Language = "en") {
  if (!isSanityEnabled()) return null;

  try {
    const query = `*[_type == "siteSettings"][0]{
            siteName,
            headerCta,
            footerTagline,
            footerColumns,
            footerCopyright,
            socialLinks,
            contactEmail,
            supportEmail
        }`;

    const data = await client.fetch(query, {}, { next: { revalidate: 60 } });
    if (!data) return null;

    return {
      siteName: data.siteName,
      headerCta: data.headerCta ? {
        text: getLocalizedField(data.headerCta.text, lang),
        href: data.headerCta.href
      } : null,
      footerTagline: getLocalizedField(data.footerTagline, lang),
      footerColumns: data.footerColumns?.map((col: { title: Record<string, string>; links: Array<{ label: Record<string, string>; href: string }> }) => ({
        title: getLocalizedField(col.title, lang),
        links: col.links?.map(link => ({
          label: getLocalizedField(link.label, lang),
          href: link.href
        })) || []
      })) || [],
      footerCopyright: getLocalizedField(data.footerCopyright, lang),
      socialLinks: data.socialLinks || [],
      contactEmail: data.contactEmail,
      supportEmail: data.supportEmail
    };
  } catch (error) {
    console.error("Error fetching site settings:", error);
    return null;
  }
}

// ===================================
// ABOUT PAGE QUERY
// ===================================
export async function getAboutPageData(lang: Language = "en") {
  if (!isSanityEnabled()) return null;

  try {
    const query = `*[_type == "aboutPage"][0]`;
    const data = await client.fetch(query, {}, { next: { revalidate: 60 } });
    if (!data) return null;

    return {
      hero: {
        badge: getLocalizedField(data.heroBadge, lang),
        title: getLocalizedField(data.heroTitle, lang),
        subtitle: getLocalizedField(data.heroSubtitle, lang)
      },
      mission: {
        title: getLocalizedField(data.missionTitle, lang),
        content: getLocalizedField(data.missionContent, lang)
      },
      vision: {
        title: getLocalizedField(data.visionTitle, lang),
        content: getLocalizedField(data.visionContent, lang)
      },
      cta: {
        title: getLocalizedField(data.ctaTitle, lang),
        subtitle: getLocalizedField(data.ctaSubtitle, lang)
      }
    };
  } catch (error) {
    console.error("Error fetching about page:", error);
    return null;
  }
}

// ===================================
// CAREERS PAGE QUERY
// ===================================
export async function getCareersPageData(lang: Language = "en") {
  if (!isSanityEnabled()) return null;

  try {
    const query = `*[_type == "careersPage"][0]`;
    const data = await client.fetch(query, {}, { next: { revalidate: 60 } });
    if (!data) return null;

    return {
      hero: {
        badge: getLocalizedField(data.heroBadge, lang),
        title: getLocalizedField(data.heroTitle, lang),
        subtitle: getLocalizedField(data.heroSubtitle, lang)
      },
      culture: {
        title: getLocalizedField(data.cultureTitle, lang),
        subtitle: getLocalizedField(data.cultureSubtitle, lang),
        values: data.cultureValues?.map((v: { icon: string; title: Record<string, string>; description: Record<string, string> }) => ({
          icon: v.icon,
          title: getLocalizedField(v.title, lang),
          description: getLocalizedField(v.description, lang)
        })) || []
      },
      benefits: {
        title: getLocalizedField(data.benefitsTitle, lang),
        items: data.benefits?.map((b: { icon: string; title: Record<string, string>; description: Record<string, string> }) => ({
          icon: b.icon,
          title: getLocalizedField(b.title, lang),
          description: getLocalizedField(b.description, lang)
        })) || []
      },
      positions: {
        title: getLocalizedField(data.positionsTitle, lang),
        jobs: data.positions || []
      },
      cta: {
        title: getLocalizedField(data.ctaTitle, lang),
        subtitle: getLocalizedField(data.ctaSubtitle, lang)
      }
    };
  } catch (error) {
    console.error("Error fetching careers page:", error);
    return null;
  }
}

// ===================================
// PRICING PAGE QUERY
// ===================================
export async function getPricingPageData(lang: Language = "en") {
  if (!isSanityEnabled()) return null;

  try {
    const query = `*[_type == "pricingPage"][0]`;
    const data = await client.fetch(query, {}, { next: { revalidate: 60 } });
    if (!data) return null;

    return {
      hero: {
        badge: getLocalizedField(data.heroBadge, lang),
        title: getLocalizedField(data.heroTitle, lang),
        subtitle: getLocalizedField(data.heroSubtitle, lang)
      },
      plans: data.plans?.map((p: { name: Record<string, string>; description: Record<string, string>; price: string; period: Record<string, string>; popular: boolean; features: Array<Record<string, string>>; cta: Record<string, string>; ctaLink: string }) => ({
        name: getLocalizedField(p.name, lang),
        description: getLocalizedField(p.description, lang),
        price: p.price,
        period: getLocalizedField(p.period, lang),
        popular: p.popular,
        features: p.features?.map(f => getLocalizedField(f, lang)) || [],
        cta: getLocalizedField(p.cta, lang),
        ctaLink: p.ctaLink
      })) || [],
      comparison: {
        title: getLocalizedField(data.comparisonTitle, lang),
        subtitle: getLocalizedField(data.comparisonSubtitle, lang)
      },
      faq: {
        badge: getLocalizedField(data.faqBadge, lang),
        title: getLocalizedField(data.faqTitle, lang),
        subtitle: getLocalizedField(data.faqSubtitle, lang),
        items: data.faqItems?.map((f: { question: Record<string, string>; answer: Record<string, string> }) => ({
          question: getLocalizedField(f.question, lang),
          answer: getLocalizedField(f.answer, lang)
        })) || []
      },
      cta: {
        title: getLocalizedField(data.ctaTitle, lang),
        subtitle: getLocalizedField(data.ctaSubtitle, lang)
      }
    };
  } catch (error) {
    console.error("Error fetching pricing page:", error);
    return null;
  }
}

// ===================================
// PRODUCT PAGES QUERIES
// ===================================
export async function getProductPageData(pageType: string, lang: Language = "en") {
  if (!isSanityEnabled()) return null;

  try {
    const query = `*[_type == "${pageType}"][0]`;
    const data = await client.fetch(query, {}, { next: { revalidate: 60 } });
    if (!data) return null;

    return {
      hero: {
        badge: getLocalizedField(data.heroBadge, lang),
        title: getLocalizedField(data.heroTitle, lang),
        subtitle: getLocalizedField(data.heroSubtitle, lang),
        primaryCta: data.heroPrimaryCta ? {
          text: getLocalizedField(data.heroPrimaryCta.text, lang),
          href: data.heroPrimaryCta.href
        } : null
      },
      stats: data.stats?.map((s: { value: string; label: Record<string, string> }) => ({
        value: s.value,
        label: getLocalizedField(s.label, lang)
      })) || [],
      faq: {
        badge: getLocalizedField(data.faqBadge, lang),
        title: getLocalizedField(data.faqTitle, lang),
        items: data.faqItems?.map((f: { question: Record<string, string>; answer: Record<string, string> }) => ({
          question: getLocalizedField(f.question, lang),
          answer: getLocalizedField(f.answer, lang)
        })) || []
      },
      cta: {
        title: getLocalizedField(data.ctaTitle, lang),
        subtitle: getLocalizedField(data.ctaSubtitle, lang)
      }
    };
  } catch (error) {
    console.error(`Error fetching ${pageType}:`, error);
    return null;
  }
}

// Convenience functions for specific product pages
export const getMultiCurrencyPageData = (lang: Language) => getProductPageData("multiCurrencyPage", lang);
export const getFxExchangePageData = (lang: Language) => getProductPageData("fxExchangePage", lang);
export const getGlobalPayoutPageData = (lang: Language) => getProductPageData("globalPayoutPage", lang);
export const getCorporateCardsPageData = (lang: Language) => getProductPageData("corporateCardsPage", lang);
export const getApiIntegrationPageData = (lang: Language) => getProductPageData("apiIntegrationPage", lang);

// ===================================
// LEGACY LANDING PAGE DATA (for layout compatibility)
// ===================================
import type {
  LandingPageData,
} from "./types";

// Fallback data for when Sanity is not available or not configured
const fallbackData: LandingPageData = {
  settings: {
    siteName: "Norxio",
    navLinks: [
      { label: "Product", href: "#product" },
      { label: "Solutions", href: "#solutions" },
      { label: "Blog", href: "/blog" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  hero: {
    badge: "Payment Solutions",
    title: "Global payments, one account to power your",
    highlight: "business",
    subtitle: "Manage money worldwide with multi-currency accounts, clear and transparent FX pricing, and fast payouts.",
    primaryCta: "Open an account",
    secondaryCta: "Talk to Sales",
    currencies: [
      { code: "USD", flag: "🇺🇸", change: "+2.4%", up: true },
      { code: "GBP", flag: "🇬🇧", change: "+1.8%", up: true },
      { code: "EUR", flag: "🇪🇺", change: "-0.5%", up: false },
    ],
  },
  trustedBy: {
    heading: "Trusted by 5,000+ companies worldwide",
    companies: [{ name: "amazon" }, { name: "Canva" }, { name: "Nitro" }],
  },
  features: {
    badge: "Our Services",
    title: "What we offer",
    subtitle: "A simple process for global money management.",
    features: [
      { icon: "globe", title: "Global payments", description: "Send and receive funds easily.", color: "blue" },
      { icon: "credit-card", title: "Virtual & physical cards", description: "Create cards for your team.", color: "blue" },
    ],
  },
  whyTrust: {
    badge: "Our Services",
    title: "Why businesses trust us",
    subtitle: "Built to help global businesses move money smarter.",
    bulletPoints: ["Same-day payouts", "Bank-level security"],
    reasons: [
      { icon: "dollar-sign", title: "Transparent FX Rates", description: "Clear, upfront rates." },
      { icon: "globe", title: "Designed for Global Businesses", description: "End-to-end encryption." },
    ],
  },
  helpGrow: {
    title: "Norxio Helps You Grow",
    cards: [
      { image: "/images/placeholder.jpg", title: "Secure Enterprise Account management", description: "Enterprise-grade safety." },
    ],
  },
  allInOne: {
    badge: "Norxio",
    title: "Your All-in-One Digital Payment Solution",
  },
  security: {
    badge: "Security",
    title: "Security You Can Trust",
    subtitle: "Norxio protects every transaction with advanced encryption.",
    features: [
      { icon: "building", title: "Enterprise-Grade Security", description: "Multi-layer encryption." },
    ],
  },
  pricing: {
    badge: "Pricing",
    title: "Simple, Transparent Pricing",
    subtitle: "Choose a plan that fits your business.",
    plans: [
      { name: "Lite", description: "For small businesses", price: "$0", period: "/month", features: ["Multi-currency account"], cta: "Start free", popular: false },
      { name: "Enterprise", description: "For SMEs", price: "$80", period: "/month", features: ["Better FX rates"], cta: "Upgrade now", popular: true },
    ],
  },
  faq: {
    badge: "FAQ",
    title: "Frequently Asked Questions",
    subtitle: "Get quick answers.",
    faqs: [
      { question: "What is Norxio?", answer: "A global payments platform." },
    ],
  },
  cta: {
    title: "Start Moving Money Smarter",
    subtitle: "Join businesses using Norxio.",
    buttonText: "Get started",
  },
  footer: {
    tagline: "A smarter way for businesses to manage money globally.",
    columns: [],
    copyright: "© 2026 Norxio. All rights reserved.",
    socialLinks: [],
  },
};

export async function getLandingPageData(): Promise<LandingPageData> {
  // Return fallback data - components now use translations + Sanity context
  return fallbackData;
}

