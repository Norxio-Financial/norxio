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
      { code: "JPY", flag: "🇯🇵", change: "+0.9%", up: true },
      { code: "CAD", flag: "🇨🇦", change: "+1.2%", up: true },
    ],
  },
  trustedBy: {
    heading: "Trusted by 5,000+ companies worldwide",
    companies: [
      { name: "amazon" },
      { name: "Canva" },
      { name: "OSFIFA" },
      { name: "Nitro" },
      { name: "gusto" },
      { name: "Airtable" },
      { name: "Bettermind" },
      { name: "AllExpress" },
      { name: "Walmart" },
    ],
  },
  features: {
    badge: "Our Services",
    title: "What we offer",
    subtitle: "A simple process that lets your business hold, convert, and send money globally—fast, transparent, and secure.",
    features: [
      { icon: "globe", title: "Global payments", description: "Send and receive funds easily to and from over 180 countries.", color: "blue" },
      { icon: "credit-card", title: "Virtual & physical cards", description: "Create cards for your team and track spending in real-time.", color: "blue" },
      { icon: "wallet", title: "Multi-currency", description: "Hold and manage money in over 30+ currencies in one account.", color: "blue" },
      { icon: "arrow-left-right", title: "Smart FX Conversion", description: "Convert currencies instantly with transparent, competitive rates.", color: "blue" },
      { icon: "code", title: "Api Integration", description: "Create custom processes with our comprehensive REST API integrations.", color: "blue" },
    ],
  },
  whyTrust: {
    badge: "Our Services",
    title: "Why bussiness trust us",
    subtitle: "Built to help global businesses move money smarter, faster, and more transparently.",
    bulletPoints: [
      "Same-day payouts in many regions. Money moves when you need it, without delays.",
      "Safe-guarded by multi-layer encryption and real-time fraud monitoring.",
    ],
    reasons: [
      { icon: "dollar-sign", title: "Transparent FX Rates", description: "hold, receive, and manage multiple currencies without opening multiple bank accounts." },
      { icon: "globe", title: "Designed for Global Businesses", description: "Every transaction is protected with end-to-end encryption, real-time compliance checks, and continuous fraud monitoring." },
      { icon: "clock", title: "Always On, Always Reliable", description: "Same-day payouts in many regions. Money moves when you need it, without delays." },
      { icon: "shield", title: "Grade Security", description: "We use bank-level protections so your currency conversions is clear, upfront, and free from hidden fees." },
    ],
  },
  helpGrow: {
    title: "Norxio Helps You Grow",
    cards: [
      { image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop", title: "Secure Enterprise Account management", description: "Your data and operations stay fully protected with enterprise-grade safety at every layer." },
      { image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=400&auto=format&fit=crop", title: "Build trust with clear, real-time FX", description: "Get competitive, real-time rates every time you make a currency conversion to a clear, upfront, and free flow." },
      { image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop", title: "Scale Payment Without Complexity", description: "Norxio lets you manage payment details with multi-layer encryption and compliance checks." },
    ],
  },
  allInOne: {
    badge: "Norxio",
    title: "Your All-in-One Digital Payment Solution",
  },
  security: {
    badge: "Security",
    title: "Security You Can Trust",
    subtitle: "Norxio protects every transaction with advanced encryption, strict access controls, real-time threat monitoring, and global compliance standards—keeping your business safe at every step.",
    features: [
      { icon: "building", title: "Enterprise-Grade Security", description: "Your data and operations are protected with multi-layer encryption for all transactions." },
      { icon: "lock", title: "Advanced Data Encryption", description: "All data encrypted in transit and at rest. Unauthorized access is never possible." },
      { icon: "check", title: "Compliance You Can Trust", description: "Aligned with global security standards including SOC 2, GDPR, and PCI DSS." },
    ],
  },
  pricing: {
    badge: "Pricing",
    title: "Simple, Transparent Pricing",
    subtitle: "Choose a plan that fits your business. No hidden fees, no surprises—just clear rates and full transparency.",
    plans: [
      { name: "Lite", description: "For small businesses", price: "$0", period: "/month", features: ["Multi-currency account", "Transparent FX rates", "Global payouts", "Virtual cards", "Email support", "Simple dashboard & reporting"], cta: "Start free", popular: false },
      { name: "Enterprise", description: "For SMEs", price: "$80", period: "/month", features: ["Multi-currency accounts", "Better FX rates", "Same-day payouts to major corridors", "Multiple virtual cards + spend controls", "Advanced reporting & reconciliation", "Priority customer support"], cta: "Upgrade now", popular: true },
      { name: "Business", description: "For large companies", price: "Custom", period: " pricing", features: ["Multi-currency infrastructure", "Custom FX Pricing", "Global payouts with SLAs", "Unlimited cards + real-time controls", "API access & system integrations", "Dedicated account manager support"], cta: "Speak to sales", popular: false },
    ],
  },
  faq: {
    badge: "FAQ",
    title: "Frequently Asked Questions",
    subtitle: "Get quick answers to the most common questions about how Norxio helps your business manage global payments with ease.",
    faqs: [
      { question: "What is Norxio?", answer: "Norxio is a global payments platform that helps businesses manage multi-currency accounts, make international transfers, and access transparent FX rates." },
      { question: "Who can use Norxio?", answer: "Any business looking to manage global payments, from startups to enterprises, can use Norxio." },
      { question: "How fast are international payouts?", answer: "Most international payouts are processed same-day in major corridors. Transfer times may vary depending on the destination country and currency." },
      { question: "Is Norxio secure?", answer: "Yes. We use bank-level security including multi-factor authentication, end-to-end encryption, and continuous fraud monitoring." },
      { question: "Can I hold multiple currencies in one account?", answer: "Yes, you can hold, receive, and manage over 30+ currencies in a single Norxio account." },
      { question: "Can I send money to any country?", answer: "Norxio supports transfers to 180+ countries worldwide with local payment rails in major markets." },
      { question: "How does Norxio keep my money safe?", answer: "Your funds are held in segregated accounts with trusted banking partners, protected by enterprise-grade security." },
      { question: "How do virtual accounts work?", answer: "Virtual accounts allow you to receive payments in local currencies without needing a physical bank account in that country." },
      { question: "What is FX transparency?", answer: "FX transparency means you see the real exchange rate before every transaction with no hidden fees." },
      { question: "Are there limits on transactions?", answer: "Transaction limits depend on your plan and verification level. Enterprise customers can request custom limits." },
    ],
  },
  cta: {
    title: "Start Moving Money Smarter",
    subtitle: "Join businesses using Norxio to streamline global payments, access transparent FX, and move funds faster.",
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
        bulletPoints: hp.whyTrustBulletPoints || fallbackData.whyTrust.bulletPoints,
        reasons: hp.whyTrustReasons || fallbackData.whyTrust.reasons,
      },
      helpGrow: {
        title: hp.helpGrowTitle || fallbackData.helpGrow.title,
        cards: hp.helpGrowCards || fallbackData.helpGrow.cards,
      },
      allInOne: {
        badge: hp.allInOneBadge || fallbackData.allInOne.badge,
        title: hp.allInOneTitle || fallbackData.allInOne.title,
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
