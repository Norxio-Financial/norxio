import { client } from "./sanity";
import type { LandingPageData } from "./types";

// Fallback data when Sanity is not configured
const fallbackData: LandingPageData = {
  settings: {
    siteName: "Norxio",
    navLinks: [
      { label: "Product", href: "#product" },
      { label: "Solutions", href: "#solutions" },
      { label: "Blog", href: "/blog" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  hero: {
    badge: "Now available in 180+ countries",
    title: "Global payments, one account to power your",
    highlight: "business",
    subtitle: "Manage money worldwide with multi-currency accounts, transparent FX pricing, and fast payouts.",
    primaryCta: "Open an Account",
    secondaryCta: "Talk to Sales",
    currencies: [
      { code: "USD", flag: "🇺🇸", change: "+2.4%", up: true },
      { code: "GBP", flag: "🇬🇧", change: "+1.8%", up: true },
      { code: "EUR", flag: "🇪🇺", change: "-0.5%", up: false },
      { code: "JPY", flag: "🇯🇵", change: "+0.9%", up: true },
      { code: "CAD", flag: "🇨🇦", change: "+1.2%", up: true },
    ],
  },
  trustedBy: {
    heading: "Trusted by 5,000+ companies worldwide",
    companies: ["Amazon", "Canva", "Asana", "Meta", "UPS", "Airtable", "Stripe", "Shopify"],
  },
  features: {
    badge: "Our Services",
    title: "What we offer",
    subtitle: "A simple process that lets your business hold, convert, and send money globally—fast, transparent, and secure.",
    features: [
      { icon: "globe", title: "Global Payments", description: "Send and receive money across 180+ countries with competitive rates.", color: "blue" },
      { icon: "credit-card", title: "Virtual & Physical Cards", description: "Create cards for your team and track spending in real-time.", color: "purple" },
      { icon: "wallet", title: "Multi-Currency Accounts", description: "Hold and manage money in over 30+ global currencies.", color: "emerald" },
      { icon: "arrow-left-right", title: "Smart FX Conversion", description: "Convert currencies instantly with transparent, competitive rates.", color: "orange" },
      { icon: "code", title: "API Integration", description: "Build custom workflows with our comprehensive REST API.", color: "pink" },
    ],
  },
  whyTrust: {
    badge: "Why Norxio",
    title: "Why businesses trust us",
    subtitle: "Built to help global businesses move money smarter, faster, and more transparently.",
    reasons: [
      { icon: "trending-up", title: "Transparent FX Rates", description: "No hidden fees. See the real exchange rate before every transaction." },
      { icon: "globe", title: "Built for Global Business", description: "Designed for companies operating across borders and time zones." },
      { icon: "zap", title: "Always On, Always Fast", description: "Same-day payouts in major corridors. Your money moves when you need it." },
      { icon: "shield", title: "Enterprise Security", description: "Bank-grade encryption and multi-factor authentication on every account." },
    ],
  },
  security: {
    badge: "Security",
    title: "Security you can trust",
    subtitle: "Your data and operations stay fully protected with enterprise-grade safety at every layer.",
    features: [
      { icon: "building", title: "Enterprise-Grade Security", description: "Your data and operations are protected with multi-layer encryption for all transactions." },
      { icon: "lock", title: "Advanced Data Encryption", description: "All data encrypted in transit and at rest. Unauthorized access is never possible." },
      { icon: "check", title: "Compliance You Can Trust", description: "Aligned with global security standards including SOC 2, GDPR, and PCI DSS." },
    ],
  },
  pricing: {
    badge: "Pricing",
    title: "Simple, transparent pricing",
    subtitle: "Choose a plan that fits your business. No hidden fees, no surprises.",
    plans: [
      { name: "Lite", description: "For small businesses", price: "$0", period: "/month", features: ["Multi-currency account", "Transparent FX rates", "Global payouts", "Virtual cards", "Email support", "Basic reporting"], cta: "Start free", popular: false },
      { name: "Enterprise", description: "For growing SMBs", price: "$80", period: "/month", features: ["Everything in Lite", "Better FX rates", "Same-day payouts", "Multiple virtual cards", "Advanced reporting", "Priority support"], cta: "Upgrade now", popular: true },
      { name: "Business", description: "For large companies", price: "Custom", period: "", features: ["Everything in Enterprise", "Custom FX pricing", "Global payouts with SLAs", "Unlimited cards", "API access", "Dedicated manager"], cta: "Contact sales", popular: false },
    ],
  },
  faq: {
    badge: "FAQ",
    title: "Frequently asked questions",
    subtitle: "Everything you need to know about Norxio.",
    faqs: [
      { question: "What is Norxio?", answer: "Norxio is a global payments platform that helps businesses manage multi-currency accounts, make international transfers, and access transparent FX rates." },
      { question: "How fast are international payouts?", answer: "Most international payouts are processed same-day in major corridors. Transfer times may vary depending on the destination country and currency." },
      { question: "Can I hold multiple currencies?", answer: "Yes, you can hold, receive, and manage over 30+ currencies in a single Norxio account." },
      { question: "Is Norxio secure?", answer: "Yes. We use bank-level security including multi-factor authentication, end-to-end encryption, and continuous fraud monitoring." },
      { question: "What countries do you support?", answer: "Norxio supports transfers to 180+ countries worldwide with local payment rails in major markets." },
      { question: "Are there transaction limits?", answer: "Transaction limits depend on your plan and verification level. Enterprise customers can request custom limits." },
    ],
  },
  cta: {
    title: "Start moving money smarter",
    subtitle: "Join thousands of businesses using Norxio to streamline global payments, access transparent FX, and move funds faster.",
    buttonText: "Get started",
  },
  footer: {
    tagline: "A smarter way for businesses to hold, convert, and move money globally.",
    columns: [
      { title: "Company", links: [{ label: "About", href: "/about" }, { label: "Careers", href: "/careers" }, { label: "Blog", href: "/blog" }] },
      { title: "Product", links: [{ label: "Multi-Currency Accounts", href: "#" }, { label: "FX Exchange", href: "#" }, { label: "Global Payouts", href: "#" }, { label: "Virtual Cards", href: "#" }] },
      { title: "Resources", links: [{ label: "Security", href: "#" }, { label: "Support", href: "#" }, { label: "Contact", href: "#" }] },
      { title: "Legal", links: [{ label: "Terms", href: "#" }, { label: "Privacy", href: "#" }, { label: "Cookies", href: "#" }] },
    ],
    copyright: `© ${new Date().getFullYear()} Norxio. All rights reserved.`,
    socialLinks: [
      { platform: "Twitter", url: "#" },
      { platform: "LinkedIn", url: "#" },
      { platform: "Facebook", url: "#" },
    ],
  },
};

export async function getLandingPageData(): Promise<LandingPageData> {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID === "your_project_id") {
    return fallbackData;
  }

  try {
    const query = `{
      "settings": *[_type == "siteSettings"][0]{
        siteName,
        navLinks
      },
      "homePage": *[_type == "homePage"][0],
      "footer": *[_type == "siteSettings"][0]{
        "tagline": footerTagline,
        "columns": footerColumns,
        copyright,
        socialLinks
      }
    }`;

    // Enable caching with revalidation
    const data = await client.fetch(query, {}, {
      next: { revalidate: 60 }
    });

    if (!data.homePage) {
      return fallbackData;
    }

    const hp = data.homePage;

    return {
      settings: data.settings || fallbackData.settings,
      hero: {
        badge: hp.heroBadge || fallbackData.hero.badge,
        title: hp.heroTitle || fallbackData.hero.title,
        highlight: hp.heroHighlight || fallbackData.hero.highlight,
        subtitle: hp.heroSubtitle || fallbackData.hero.subtitle,
        primaryCta: hp.heroPrimaryCta || fallbackData.hero.primaryCta,
        secondaryCta: hp.heroSecondaryCta || fallbackData.hero.secondaryCta,
        currencies: hp.heroCurrencies || fallbackData.hero.currencies,
      },
      trustedBy: {
        heading: hp.trustedByHeading || fallbackData.trustedBy.heading,
        companies: hp.trustedByCompanies || fallbackData.trustedBy.companies,
      },
      features: {
        badge: hp.featuresBadge || fallbackData.features.badge,
        title: hp.featuresTitle || fallbackData.features.title,
        subtitle: hp.featuresSubtitle || fallbackData.features.subtitle,
        features: hp.featuresList || fallbackData.features.features,
      },
      whyTrust: {
        badge: hp.whyTrustBadge || fallbackData.whyTrust.badge,
        title: hp.whyTrustTitle || fallbackData.whyTrust.title,
        subtitle: hp.whyTrustSubtitle || fallbackData.whyTrust.subtitle,
        reasons: hp.whyTrustReasons || fallbackData.whyTrust.reasons,
      },
      security: {
        badge: hp.securityBadge || fallbackData.security.badge,
        title: hp.securityTitle || fallbackData.security.title,
        subtitle: hp.securitySubtitle || fallbackData.security.subtitle,
        features: hp.securityFeatures || fallbackData.security.features,
      },
      pricing: {
        badge: hp.pricingBadge || fallbackData.pricing.badge,
        title: hp.pricingTitle || fallbackData.pricing.title,
        subtitle: hp.pricingSubtitle || fallbackData.pricing.subtitle,
        plans: hp.pricingPlans || fallbackData.pricing.plans,
      },
      faq: {
        badge: hp.faqBadge || fallbackData.faq.badge,
        title: hp.faqTitle || fallbackData.faq.title,
        subtitle: hp.faqSubtitle || fallbackData.faq.subtitle,
        faqs: hp.faqList || fallbackData.faq.faqs,
      },
      cta: {
        title: hp.ctaTitle || fallbackData.cta.title,
        subtitle: hp.ctaSubtitle || fallbackData.cta.subtitle,
        buttonText: hp.ctaButtonText || fallbackData.cta.buttonText,
      },
      footer: data.footer?.tagline ? data.footer : fallbackData.footer,
    };
  } catch (error) {
    console.error("Error fetching from Sanity:", error);
    return fallbackData;
  }
}
