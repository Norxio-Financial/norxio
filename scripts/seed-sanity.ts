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
    { _key: "nav4", label: "Pricing", href: "#pricing" },
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
        { _key: "l1", label: "Multi-Currency Accounts", href: "#" },
        { _key: "l2", label: "FX Exchange", href: "#" },
        { _key: "l3", label: "Global Payouts", href: "#" },
        { _key: "l4", label: "Virtual Cards", href: "#" },
      ],
    },
    {
      _key: "col3",
      title: "Resources",
      links: [
        { _key: "l1", label: "Security", href: "#" },
        { _key: "l2", label: "Support", href: "#" },
        { _key: "l3", label: "Contact", href: "#" },
      ],
    },
    {
      _key: "col4",
      title: "Legal",
      links: [
        { _key: "l1", label: "Terms", href: "#" },
        { _key: "l2", label: "Privacy", href: "#" },
        { _key: "l3", label: "Cookies", href: "#" },
      ],
    },
  ],
  socialLinks: [
    { _key: "s1", platform: "Twitter", url: "https://twitter.com/norxio" },
    { _key: "s2", platform: "LinkedIn", url: "https://linkedin.com/company/norxio" },
    { _key: "s3", platform: "Facebook", url: "https://facebook.com/norxio" },
  ],
  copyright: "Norxio Technologies Limited provides advanced digital identity verification, compliance, and fraud prevention solutions for modern businesses. We enable secure, scalable onboarding, real-time risk monitoring, and streamlined banking and payments.",
};

// ============================================
// HOME PAGE CONTENT
// ============================================
const homePage = {
  _id: "homePage",
  _type: "homePage",

  // ==========================================
  // HERO SECTION
  // ==========================================
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

  // ==========================================
  // TRUSTED BY SECTION
  // ==========================================
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

  // ==========================================
  // FEATURES SECTION (What We Offer)
  // ==========================================
  featuresBadge: "Our Services",
  featuresTitle: "What we offer",
  featuresSubtitle: "A simple process that lets your business hold, convert, and send money globally—fast, transparent, and secure.",
  featuresList: [
    { 
      _key: "f1", 
      icon: "globe", 
      title: "Global payments", 
      description: "Send and receive funds easily to and from over 180 countries.", 
      color: "blue" 
    },
    { 
      _key: "f2", 
      icon: "credit-card", 
      title: "Virtual & physical cards", 
      description: "Create cards for your team and track spending in real-time.", 
      color: "blue" 
    },
    { 
      _key: "f3", 
      icon: "wallet", 
      title: "Multi-currency", 
      description: "Hold and manage money in over 30+ currencies in one account.", 
      color: "blue" 
    },
    { 
      _key: "f4", 
      icon: "arrow-left-right", 
      title: "Smart FX Conversion", 
      description: "Convert currencies instantly with transparent, competitive rates.", 
      color: "blue" 
    },
    { 
      _key: "f5", 
      icon: "code", 
      title: "Api Integration", 
      description: "Create custom processes with our comprehensive REST API integrations.", 
      color: "blue" 
    },
  ],

  // ==========================================
  // WHY TRUST US SECTION
  // ==========================================
  whyTrustBadge: "Our Services",
  whyTrustTitle: "Why bussiness trust us",
  whyTrustSubtitle: "Built to help global businesses move money smarter, faster, and more transparently.",
  whyTrustBulletPoints: [
    "Same-day payouts in many regions. Money moves when you need it, without delays.",
    "Safe-guarded by multi-layer encryption and real-time fraud monitoring.",
  ],
  whyTrustReasons: [
    { 
      _key: "r1", 
      icon: "dollar-sign", 
      title: "Transparent FX Rates", 
      description: "hold, receive, and manage multiple currencies without opening multiple bank accounts." 
    },
    { 
      _key: "r2", 
      icon: "globe", 
      title: "Designed for Global Businesses", 
      description: "Every transaction is protected with end-to-end encryption, real-time compliance checks, and continuous fraud monitoring." 
    },
    { 
      _key: "r3", 
      icon: "clock", 
      title: "Always On, Always Reliable", 
      description: "Same-day payouts in many regions. Money moves when you need it, without delays." 
    },
    { 
      _key: "r4", 
      icon: "shield", 
      title: "Grade Security", 
      description: "We use bank-level protections so your currency conversions is clear, upfront, and free from hidden fees." 
    },
  ],

  // ==========================================
  // HELP YOU GROW SECTION
  // ==========================================
  helpGrowTitle: "Norxio Helps You Grow",
  helpGrowCards: [
    { 
      _key: "hg1", 
      title: "Secure Enterprise Account management", 
      description: "Your data and operations stay fully protected with enterprise-grade safety at every layer." 
    },
    { 
      _key: "hg2", 
      title: "Build trust with clear, real-time FX", 
      description: "Get competitive, real-time rates every time you make a currency conversion to a clear, upfront, and free flow." 
    },
    { 
      _key: "hg3", 
      title: "Scale Payment Without Complexity", 
      description: "Norxio lets you manage payment details with multi-layer encryption and compliance checks." 
    },
  ],

  // ==========================================
  // ALL IN ONE SECTION
  // ==========================================
  allInOneBadge: "Norxio",
  allInOneTitle: "Your All-in-One Digital Payment Solution",

  // ==========================================
  // SECURITY SECTION
  // ==========================================
  securityBadge: "Security",
  securityTitle: "Security You Can Trust",
  securitySubtitle: "Norxio protects every transaction with advanced encryption, strict access controls, real-time threat monitoring, and global compliance standards—keeping your business safe at every step.",
  securityFeatures: [
    { 
      _key: "s1", 
      icon: "building", 
      title: "Enterprise-Grade Security", 
      description: "Your data and operations are protected with multi-layer encryption for all transactions." 
    },
    { 
      _key: "s2", 
      icon: "lock", 
      title: "Advanced Data Encryption", 
      description: "All data encrypted in transit and at rest. Unauthorized access is never possible." 
    },
    { 
      _key: "s3", 
      icon: "check", 
      title: "Compliance You Can Trust", 
      description: "Aligned with global security standards including SOC 2, GDPR, and PCI DSS." 
    },
  ],

  // ==========================================
  // PRICING SECTION
  // ==========================================
  pricingBadge: "Pricing",
  pricingTitle: "Simple, Transparent Pricing",
  pricingSubtitle: "Choose a plan that fits your business. No hidden fees, no surprises—just clear rates and full transparency.",
  pricingPlans: [
    { 
      _key: "p1", 
      name: "Lite", 
      description: "For small businesses", 
      price: "$0", 
      period: "/month", 
      features: [
        "Multi-currency account", 
        "Transparent FX rates", 
        "Global payouts", 
        "Virtual cards", 
        "Email support", 
        "Simple dashboard & reporting"
      ], 
      cta: "Start free", 
      popular: false 
    },
    { 
      _key: "p2", 
      name: "Enterprise", 
      description: "For SMEs", 
      price: "$80", 
      period: "/month", 
      features: [
        "Multi-currency accounts", 
        "Better FX rates", 
        "Same-day payouts to major corridors", 
        "Multiple virtual cards + spend controls", 
        "Advanced reporting & reconciliation", 
        "Priority customer support"
      ], 
      cta: "Upgrade now", 
      popular: true 
    },
    { 
      _key: "p3", 
      name: "Business", 
      description: "For large companies", 
      price: "Custom", 
      period: " pricing", 
      features: [
        "Multi-currency infrastructure", 
        "Custom FX Pricing", 
        "Global payouts with SLAs", 
        "Unlimited cards + real-time controls", 
        "API access & system integrations", 
        "Dedicated account manager support"
      ], 
      cta: "Speak to sales", 
      popular: false 
    },
  ],

  // ==========================================
  // FAQ SECTION
  // ==========================================
  faqBadge: "FAQ",
  faqTitle: "Frequently Asked Questions",
  faqSubtitle: "Get quick answers to the most common questions about how Norxio helps your business manage global payments with ease.",
  faqList: [
    { 
      _key: "q1", 
      question: "What is Norxio?", 
      answer: "Norxio is a global payments platform that helps businesses manage multi-currency accounts, make international transfers, and access transparent FX rates." 
    },
    { 
      _key: "q2", 
      question: "Who can use Norxio?", 
      answer: "Any business looking to manage global payments, from startups to enterprises, can use Norxio." 
    },
    { 
      _key: "q3", 
      question: "How fast are international payouts?", 
      answer: "Most international payouts are processed same-day in major corridors. Transfer times may vary depending on the destination country and currency." 
    },
    { 
      _key: "q4", 
      question: "Is Norxio secure?", 
      answer: "Yes. We use bank-level security including multi-factor authentication, end-to-end encryption, and continuous fraud monitoring." 
    },
    { 
      _key: "q5", 
      question: "Can I hold multiple currencies in one account?", 
      answer: "Yes, you can hold, receive, and manage over 30+ currencies in a single Norxio account." 
    },
    { 
      _key: "q6", 
      question: "Can I send money to any country?", 
      answer: "Norxio supports transfers to 180+ countries worldwide with local payment rails in major markets." 
    },
    { 
      _key: "q7", 
      question: "How does Norxio keep my money safe?", 
      answer: "Your funds are held in segregated accounts with trusted banking partners, protected by enterprise-grade security." 
    },
    { 
      _key: "q8", 
      question: "How do virtual accounts work?", 
      answer: "Virtual accounts allow you to receive payments in local currencies without needing a physical bank account in that country." 
    },
    { 
      _key: "q9", 
      question: "What is FX transparency?", 
      answer: "FX transparency means you see the real exchange rate before every transaction with no hidden fees." 
    },
    { 
      _key: "q10", 
      question: "Are there limits on transactions?", 
      answer: "Transaction limits depend on your plan and verification level. Enterprise customers can request custom limits." 
    },
  ],

  // ==========================================
  // CTA SECTION
  // ==========================================
  ctaTitle: "Start Moving Money Smarter",
  ctaSubtitle: "Join businesses using Norxio to streamline global payments, access transparent FX, and move funds faster.",
  ctaButtonText: "Get started",
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
    console.log("   ✓ Site name: " + siteSettings.siteName);
    console.log("   ✓ Navigation links: " + siteSettings.navLinks.length);
    console.log("   ✓ Footer columns: " + siteSettings.footerColumns.length);
    console.log("   ✓ Social links: " + siteSettings.socialLinks.length);
    console.log("✅ Site Settings created!\n");

    // Create or replace Home Page
    console.log("📝 Creating Home Page content...");
    await client.createOrReplace(homePage);
    console.log("   ✓ Hero section");
    console.log("   ✓ Trusted by: " + homePage.trustedByCompanies.length + " companies");
    console.log("   ✓ Features: " + homePage.featuresList.length + " items");
    console.log("   ✓ Why Trust: " + homePage.whyTrustReasons.length + " reasons");
    console.log("   ✓ Help Grow: " + homePage.helpGrowCards.length + " cards");
    console.log("   ✓ All In One section");
    console.log("   ✓ Security: " + homePage.securityFeatures.length + " features");
    console.log("   ✓ Pricing: " + homePage.pricingPlans.length + " plans");
    console.log("   ✓ FAQ: " + homePage.faqList.length + " questions");
    console.log("   ✓ CTA section");
    console.log("✅ Home Page created!\n");

    console.log("═══════════════════════════════════════════════════════");
    console.log("🎉 Seeding complete! All content has been initialized.");
    console.log("═══════════════════════════════════════════════════════\n");
    console.log("📌 What you can now edit in Sanity Studio:\n");
    console.log("   SITE SETTINGS:");
    console.log("   • Site name & logo");
    console.log("   • Navigation links");
    console.log("   • Footer columns & links");
    console.log("   • Social media links");
    console.log("   • Copyright text\n");
    console.log("   HOME PAGE SECTIONS:");
    console.log("   • Hero (badge, title, subtitle, CTAs, currencies)");
    console.log("   • Trusted By (heading, company names/logos)");
    console.log("   • Features (badge, title, cards with icons)");
    console.log("   • Why Trust Us (bullet points, reason cards)");
    console.log("   • Help You Grow (title, growth cards)");
    console.log("   • All In One (badge, title)");
    console.log("   • Security (title, subtitle, feature cards)");
    console.log("   • Pricing (plans with features)");
    console.log("   • FAQ (questions & answers)");
    console.log("   • CTA (title, subtitle, button text)\n");
    console.log("🔗 Open Sanity Studio: http://localhost:3000/studio");
  } catch (error) {
    console.error("❌ Error seeding data:", error);
    process.exit(1);
  }
}

seed();
