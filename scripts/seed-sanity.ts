// Sanity seed script
// 1. Add your SANITY_API_TOKEN to .env.local
// 2. Run: npx tsx scripts/seed-sanity.ts

import { createClient } from "@sanity/client";
import * as dotenv from "dotenv";
import * as path from "path";

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_API_TOKEN;

if (!projectId || !dataset) {
  console.error("❌ Missing NEXT_PUBLIC_SANITY_PROJECT_ID or NEXT_PUBLIC_SANITY_DATASET in .env.local");
  process.exit(1);
}

if (!token) {
  console.error("❌ Missing SANITY_API_TOKEN in .env.local");
  console.error("   Create a token at: https://www.sanity.io/manage/project/" + projectId + "/api#tokens");
  console.error("   Select 'Editor' permissions and add it to .env.local");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  useCdn: false,
  token,
});

// ============================================
// SITE SETTINGS (Global)
// ============================================
const siteSettings = {
  _id: "siteSettings",
  _type: "siteSettings",
  siteName: "Norxio",
  navLinks: [
    { _key: "nav1", label: "Product", href: "#product" },
    { _key: "nav2", label: "Solutions", href: "#solutions" },
    { _key: "nav3", label: "Blog", href: "/blog" },
    { _key: "nav4", label: "Pricing", href: "/pricing" },
  ],
  footerTagline: "A smarter way for businesses to hold, convert, and move money globally.",
  footerColumns: [
    {
      _key: "col1",
      title: "Company",
      links: [
        { _key: "l1", label: "About", href: "/about" },
        { _key: "l2", label: "Careers", href: "/careers" },
        { _key: "l3", label: "Blog", href: "/blog" },
      ],
    },
    {
      _key: "col2",
      title: "Product",
      links: [
        { _key: "l1", label: "Multi-Currency Accounts", href: "/products/multi-currency" },
        { _key: "l2", label: "FX & Currency Exchange", href: "/products/fx-exchange" },
        { _key: "l3", label: "Global Payouts", href: "/products/payouts" },
        { _key: "l4", label: "Virtual Cards", href: "/products/cards" },
      ],
    },
    {
      _key: "col3",
      title: "Resources",
      links: [
        { _key: "l1", label: "Security & Compliance", href: "/security" },
        { _key: "l2", label: "Support", href: "/support" },
        { _key: "l3", label: "Contact Us", href: "/contact" },
      ],
    },
    {
      _key: "col4",
      title: "Legal",
      links: [
        { _key: "l1", label: "Terms & Conditions", href: "/legal/terms" },
        { _key: "l2", label: "Privacy Policy", href: "/legal/privacy" },
        { _key: "l3", label: "Cookie Policy", href: "/legal/cookie" },
      ],
    },
  ],
  socialLinks: [
    { _key: "s1", platform: "Twitter", url: "https://twitter.com/norxio" },
    { _key: "s2", platform: "LinkedIn", url: "https://linkedin.com/company/norxio" },
    { _key: "s3", platform: "Facebook", url: "https://facebook.com/norxio" },
  ],
  copyright: "Norxio Technologies Limited provides advanced digital identity verification, compliance, and fraud-prevention solutions for modern businesses...",
};

// ============================================
// HOME PAGE CONTENT
// ============================================
const homePage = {
  _id: "homePage",
  _type: "homePage",
  heroBadge: "Payment Solutions",
  heroTitle: "Global payments, one account to power your",
  heroHighlight: "business",
  heroSubtitle: "Manage money worldwide with multi-currency accounts, clear and transparent FX pricing, and fast payouts.",
  heroPrimaryCta: "Open an account",
  heroSecondaryCta: "Talk to Sales",
  heroCurrencies: [
    { _key: "c1", code: "USD", flag: "🇺🇸", change: "+2.4%", up: true },
    { _key: "c2", code: "GBP", flag: "🇬🇧", change: "+1.8%", up: true },
    { _key: "c3", code: "EUR", flag: "🇪🇺", change: "-0.5%", up: false },
    { _key: "c4", code: "JPY", flag: "🇯🇵", change: "+0.9%", up: true },
    { _key: "c5", code: "CAD", flag: "🇨🇦", change: "+1.2%", up: true },
  ],
  trustedByHeading: "Trusted by 5,000+ companies worldwide",
  trustedByCompanies: [
    { _key: "tc1", name: "amazon" },
    { _key: "tc2", name: "Canva" },
    { _key: "tc3", name: "OSFIFA" },
    { _key: "tc4", name: "Nitro" },
    { _key: "tc5", name: "gusto" },
    { _key: "tc6", name: "Airtable" },
    { _key: "tc7", name: "Bettermind" },
    { _key: "tc8", name: "AllExpress" },
    { _key: "tc9", name: "Walmart" },
  ],
  featuresBadge: "Our Services",
  featuresTitle: "What we offer",
  featuresSubtitle: "A simple process that lets your business hold, convert, and send money globally—fast, transparent, and secure.",
  featuresList: [
    { _key: "f1", icon: "globe", title: "Global payments", description: "Send and receive funds easily to and from over 180 countries.", color: "blue" },
    { _key: "f2", icon: "credit-card", title: "Virtual & physical cards", description: "Create cards for your team and track spending in real-time.", color: "blue" },
    { _key: "f3", icon: "wallet", title: "Multi-currency", description: "Hold and manage money in over 30+ currencies in one account.", color: "blue" },
    { _key: "f4", icon: "arrow-left-right", title: "Smart FX Conversion", description: "Convert currencies instantly with transparent, competitive rates.", color: "blue" },
    { _key: "f5", icon: "code", title: "Api Integration", description: "Create custom processes with our comprehensive REST API integrations.", color: "blue" },
  ],
  whyTrustBadge: "Our Services",
  whyTrustTitle: "Why bussiness trust us",
  whyTrustSubtitle: "Built to help global businesses move money smarter, faster, and more transparently.",
  whyTrustBulletPoints: [
    "Same-day payouts in many regions. Money moves when you need it, without delays.",
    "Safe-guarded by multi-layer encryption and real-time fraud monitoring.",
  ],
  whyTrustReasons: [
    { _key: "r1", icon: "dollar-sign", title: "Transparent FX Rates", description: "hold, receive, and manage multiple currencies without opening multiple bank accounts." },
    { _key: "r2", icon: "globe", title: "Designed for Global Businesses", description: "Every transaction is protected with end-to-end encryption, real-time compliance checks, and continuous fraud monitoring." },
    { _key: "r3", icon: "clock", title: "Always On, Always Reliable", description: "Same-day payouts in many regions. Money moves when you need it, without delays." },
    { _key: "r4", icon: "shield", title: "Grade Security", description: "We use bank-level protections so your currency conversions is clear, upfront, and free from hidden fees." },
  ],
  helpGrowTitle: "Norxio Helps You Grow",
  helpGrowCards: [
    { _key: "hg1", title: "Secure Enterprise Account management", description: "Your data and operations stay fully protected with enterprise-grade safety at every layer." },
    { _key: "hg2", title: "Build trust with clear, real-time FX", description: "Get competitive, real-time rates every time you make a currency conversion to a clear, upfront, and free flow." },
    { _key: "hg3", title: "Scale Payment Without Complexity", description: "Norxio lets you manage payment details with multi-layer encryption and compliance checks." },
  ],
  allInOneBadge: "Norxio",
  allInOneTitle: "Your All-in-One Digital Payment Solution",
  securityBadge: "Security",
  securityTitle: "Security You Can Trust",
  securitySubtitle: "Norxio protects every transaction with advanced encryption, strict access controls, real-time threat monitoring, and global compliance standards.",
  securityFeatures: [
    { _key: "s1", icon: "building", title: "Enterprise-Grade Security", description: "Your data and operations are protected with multi-layer encryption for all transactions." },
    { _key: "s2", icon: "lock", title: "Advanced Data Encryption", description: "All data encrypted in transit and at rest. Unauthorized access is never possible." },
    { _key: "s3", icon: "check", title: "Compliance You Can Trust", description: "Aligned with global security standards including SOC 2, GDPR, and PCI DSS." },
  ],
  pricingBadge: "Pricing",
  pricingTitle: "Simple, Transparent Pricing",
  pricingSubtitle: "Choose a plan that fits your business. No hidden fees, no surprises—just clear rates and full transparency.",
  pricingPlans: [
    { _key: "p1", name: "Lite", description: "For small businesses", price: "$0", period: "/month", features: ["Multi-currency account", "Transparent FX rates"], cta: "Start free", popular: false },
    { _key: "p2", name: "Enterprise", description: "For SMEs", price: "$80", period: "/month", features: ["Multi-currency accounts", "Better FX rates"], cta: "Upgrade now", popular: true },
    { _key: "p3", name: "Business", description: "For large companies", price: "Custom", period: " pricing", features: ["Multi-currency infrastructure", "Custom FX Pricing"], cta: "Speak to sales", popular: false },
  ],
  faqBadge: "FAQ",
  faqTitle: "Frequently Asked Questions",
  faqSubtitle: "Get quick answers to the most common questions about how Norxio helps your business manage global payments with ease.",
  faqList: [
    { _key: "q1", question: "What is Norxio?", answer: "Norxio is a global payments platform that helps businesses manage multi-currency accounts, make international transfers, and access transparent FX rates." },
    { _key: "q2", question: "Who can use Norxio?", answer: "Any business looking to manage global payments, from startups to enterprises, can use Norxio." },
  ],
  ctaTitle: "Start Moving Money Smarter",
  ctaSubtitle: "Join businesses using Norxio to streamline global payments, access transparent FX, and move funds faster.",
  ctaButtonText: "Get started",
};


// ============================================
// MULTI-CURRENCY PAGE CONTENT
// ============================================
const multiCurrencyPage = {
  _id: "multiCurrencyPage",
  _type: "multiCurrencyPage",
  heroTitle: "Send Payments Globally, Hassle-Free",
  heroSubtitle: "Send and receive payments in over 30 currencies. manage your cash flow with real-time exchange rates.",

  feature1Title: "Hold 30+ Global Currencies",

  feature2Title: "Your money, connected across borders",
  feature2Desc: "Connect with customers and suppliers globally. Collect payments in their local currency and convert it when the rate is right.",

  feature3Title: "Virtual Wallet Sub-Accounts",
  feature3Desc: "Create separate wallets for different teams, projects, or expense categories. Keep your funds organized and track spending with ease.",

  feature4Title: "Built for Global Operations",
  feature4Desc: "Access a complete suite of financial tools designed for modern global businesses. From mass payouts to expense management.",
  feature4List: [
    "Instant transfers to 100+ countries",
    "Real-time tracking and reporting",
    "Automated compliance checks"
  ],

  faqs: [
    { _key: "q1", question: "What currencies can I hold in my account?", answer: "You can hold over 30 global currencies including USD, EUR, GBP, CAD, AUD, JPY, and many more, all in a single account." },
    { _key: "q2", question: "How much does it cost to open an account?", answer: "Opening a multi-currency account is free. There are no monthly maintenance fees for standard accounts." },
    { _key: "q3", question: "Is my money safe?", answer: "Yes, we use bank-grade encryption and safeguard your funds with regulated financial institutions." },
  ],
  ctaTitle: "Start Moving Money Smarter",
  ctaSubtitle: "Join thousands of businesses sending faster, cheaper, and safer global payments today.",
};

// ============================================
// GLOBAL PAYOUT PAGE CONTENT
// ============================================
const globalPayoutPage = {
  _id: "globalPayoutPage",
  _type: "globalPayoutPage",
  heroTitle: "Send Payments Globally, Hassle-Free",
  heroSubtitle: "Send money to over 160+ countries with low fees, real-time tracking, and zero hidden charges.",

  sendMoneyTitle: "Send Money to 160+ Countries with Ease",
  sendMoneyDesc: "Norxio simplifies cross-border payments. businesses sending funds to employees, freelancers, or suppliers abroad. Our platform ensures you get the best exchange rates and lowest fees, making global payouts as simple as local transfers.",

  simplifiedTitle: "Global Payments, Simplified",
  simplifiedCards: [
    { _key: "c1", icon: "globe", title: "Multi-Currency Coverage", description: "Send, hold, and convert money in over 50 currencies with real-time exchange rates." },
    { _key: "c2", icon: "zap", title: "Transparent Fees", description: "No hidden markups. See exactly what you pay and what your recipient gets upfront." },
    { _key: "c3", icon: "shield", title: "Safe & Secure", description: "Bank-grade security and compliance ensuring your money is always protected." },
    { _key: "c4", icon: "credit-card", title: "Flexible Options", description: "Payouts to bank accounts, mobile wallets, or cards—whatever suits your needs." },
  ],

  builtForTitle: "Built for Global Payouts",
  builtForCards: [
    { _key: "bc1", title: "Multi-currency accounts", description: "Hold and manage money in multiple global currencies." },
    { _key: "bc2", title: "Global payments", description: "Send and receive funds across supported countries." },
    { _key: "bc3", title: "Smart FX Conversion", description: "Convert currencies instantly with competitive FX rates." },
    { _key: "bc4", title: "Virtual & physical cards", description: "Create cards for teams and expenses." },
  ],

  businessGridTitle: "Payments for Businesses",
  businessGridImages: [
    { _key: "bg1", title: "E-commerce & Retail" },
    { _key: "bg2", title: "Freelancers & Agencies" },
    { _key: "bg3", title: "Real Estate" },
    { _key: "bg4", title: "Education & eLearning" },
    { _key: "bg5", title: "Healthcare" },
  ],

  faqs: [
    { _key: "q1", question: "How fast are global payouts?", answer: "Most payouts are processed instantly or within the same business day, depending on the destination country and currency." },
    { _key: "q2", question: "What currencies do you support?", answer: "We support payouts in over 160+ countries and 50+ currencies including USD, EUR, GBP, INR, and many more." },
  ],
  ctaTitle: "Start Sending Payments",
  ctaSubtitle: "Join thousands of businesses sending faster, cheaper, and safer global payments today.",
};

// ============================================
// FX EXCHANGE PAGE CONTENT
// ============================================
const fxExchangePage = {
  _id: "fxExchangePage",
  _type: "fxExchangePage",
  heroTitle: "Save on Every Currency Exchange",
  heroSubtitle: "Get mid-market rates, transparent fees, and fast transfers. Stop losing money to bank markups.",

  statsList: [
    { _key: "s1", icon: "users", text: "50k+ Businesses" },
    { _key: "s2", icon: "globe", text: "180+ Countries" },
    { _key: "s3", icon: "dollar-sign", text: "$2B+ Transferred" },
  ],

  feature1Title: "Optimize Every Currency Exchange",
  feature1Desc: "Access real-time, mid-market exchange rates that banks use themselves. We add a small, transparent fee so you know exactly what you're paying.",

  feature2Title: "Stay Ahead with Real-Time Alerts",
  feature2Desc: "Set target rates and get notified instantly when the market moves in your favor. Never miss an opportunity to save on FX again.",

  feature3Title: "Transparent Rates",
  feature3Desc: "No hidden fees, no bad surprises. See the cost upfront before you convert.",

  mapTitle: "See the World in FX",
  mapSubtitle: "Track currencies across the globe in real-time.",

  faqs: [
    { _key: "q1", question: "What is the FX rate?", answer: "We use the mid-market rate—the one you see on Google—and apply a small, transparent fee. No hidden markups." },
    { _key: "q2", question: "How do I lock in a rate?", answer: "You can use our forward contracts to lock in a rate for future transfers, protecting your business from volatility." },
  ],
};


// ============================================
// SEED FUNCTION
// ============================================
async function seed() {
  console.log("🌱 Seeding Sanity with initial content...\n");

  try {
    // Create or replace Site Settings
    console.log("📝 Creating Site Settings...");
    await client.createOrReplace(siteSettings);
    console.log("✅ Site Settings created!\n");

    // Create or replace Home Page
    console.log("📝 Creating Home Page content...");
    await client.createOrReplace(homePage);
    console.log("✅ Home Page created!\n");

    // Create or replace Multi-Currency Page
    console.log("📝 Creating Multi-Currency Page content...");
    await client.createOrReplace(multiCurrencyPage);
    console.log("✅ Multi-Currency Page created!\n");

    // Create or replace Global Payout Page
    console.log("📝 Creating Global Payout Page content...");
    await client.createOrReplace(globalPayoutPage);
    console.log("✅ Global Payout Page created!\n");

    // Create or replace FX Exchange Page
    console.log("📝 Creating FX Exchange Page content...");
    await client.createOrReplace(fxExchangePage);
    console.log("✅ FX Exchange Page created!\n");

    console.log("═══════════════════════════════════════════════════════");
    console.log("🎉 Seeding complete! All content has been initialized.");
    console.log("   (Note: Images were not uploaded and must be added via Studio)");
    console.log("═══════════════════════════════════════════════════════\n");
  } catch (error) {
    console.error("❌ Error seeding data:", error);
    process.exit(1);
  }
}

seed();
