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
    { _key: "s1", platform: "Twitter", url: "https://twitter.com" },
    { _key: "s2", platform: "LinkedIn", url: "https://linkedin.com" },
    { _key: "s3", platform: "Facebook", url: "https://facebook.com" },
  ],
  copyright: "© 2025 Norxio. All rights reserved.",
};

const homePage = {
  _id: "homePage",
  _type: "homePage",

  // Hero Section
  heroBadge: "Now available in 180+ countries",
  heroTitle: "Global payments, one account to power your",
  heroHighlight: "business",
  heroSubtitle: "Manage money worldwide with multi-currency accounts, transparent FX pricing, and fast payouts.",
  heroPrimaryCta: "Open an Account",
  heroSecondaryCta: "Talk to Sales",
  heroCurrencies: [
    { _key: "c1", code: "USD", flag: "🇺🇸", change: "+2.4%", up: true },
    { _key: "c2", code: "GBP", flag: "🇬🇧", change: "+1.8%", up: true },
    { _key: "c3", code: "EUR", flag: "🇪🇺", change: "-0.5%", up: false },
    { _key: "c4", code: "JPY", flag: "🇯🇵", change: "+0.9%", up: true },
    { _key: "c5", code: "CAD", flag: "🇨🇦", change: "+1.2%", up: true },
  ],

  // Trusted By
  trustedByHeading: "Trusted by 5,000+ companies worldwide",
  trustedByCompanies: ["Amazon", "Canva", "Asana", "Meta", "UPS", "Airtable", "Stripe", "Shopify"],

  // Features
  featuresBadge: "Our Services",
  featuresTitle: "What we offer",
  featuresSubtitle: "A simple process that lets your business hold, convert, and send money globally—fast, transparent, and secure.",
  featuresList: [
    { _key: "f1", icon: "globe", title: "Global Payments", description: "Send and receive money across 180+ countries with competitive rates.", color: "blue" },
    { _key: "f2", icon: "credit-card", title: "Virtual & Physical Cards", description: "Create cards for your team and track spending in real-time.", color: "purple" },
    { _key: "f3", icon: "wallet", title: "Multi-Currency Accounts", description: "Hold and manage money in over 30+ global currencies.", color: "emerald" },
    { _key: "f4", icon: "arrow-left-right", title: "Smart FX Conversion", description: "Convert currencies instantly with transparent, competitive rates.", color: "orange" },
    { _key: "f5", icon: "code", title: "API Integration", description: "Build custom workflows with our comprehensive REST API.", color: "pink" },
  ],

  // Why Trust
  whyTrustBadge: "Why Norxio",
  whyTrustTitle: "Why businesses trust us",
  whyTrustSubtitle: "Built to help global businesses move money smarter, faster, and more transparently.",
  whyTrustReasons: [
    { _key: "r1", icon: "trending-up", title: "Transparent FX Rates", description: "No hidden fees. See the real exchange rate before every transaction." },
    { _key: "r2", icon: "globe", title: "Built for Global Business", description: "Designed for companies operating across borders and time zones." },
    { _key: "r3", icon: "zap", title: "Always On, Always Fast", description: "Same-day payouts in major corridors. Your money moves when you need it." },
    { _key: "r4", icon: "shield", title: "Enterprise Security", description: "Bank-grade encryption and multi-factor authentication on every account." },
  ],

  // Security
  securityBadge: "Security",
  securityTitle: "Security you can trust",
  securitySubtitle: "Your data and operations stay fully protected with enterprise-grade safety at every layer.",
  securityFeatures: [
    { _key: "s1", icon: "building", title: "Enterprise-Grade Security", description: "Your data and operations are protected with multi-layer encryption for all transactions." },
    { _key: "s2", icon: "lock", title: "Advanced Data Encryption", description: "All data encrypted in transit and at rest. Unauthorized access is never possible." },
    { _key: "s3", icon: "check", title: "Compliance You Can Trust", description: "Aligned with global security standards including SOC 2, GDPR, and PCI DSS." },
  ],

  // Pricing
  pricingBadge: "Pricing",
  pricingTitle: "Simple, transparent pricing",
  pricingSubtitle: "Choose a plan that fits your business. No hidden fees, no surprises.",
  pricingPlans: [
    { _key: "p1", name: "Lite", description: "For small businesses", price: "$0", period: "/month", features: ["Multi-currency account", "Transparent FX rates", "Global payouts", "Virtual cards", "Email support", "Basic reporting"], cta: "Start free", popular: false },
    { _key: "p2", name: "Enterprise", description: "For growing SMBs", price: "$80", period: "/month", features: ["Everything in Lite", "Better FX rates", "Same-day payouts", "Multiple virtual cards", "Advanced reporting", "Priority support"], cta: "Upgrade now", popular: true },
    { _key: "p3", name: "Business", description: "For large companies", price: "Custom", period: "", features: ["Everything in Enterprise", "Custom FX pricing", "Global payouts with SLAs", "Unlimited cards", "API access", "Dedicated manager"], cta: "Contact sales", popular: false },
  ],

  // FAQ
  faqBadge: "FAQ",
  faqTitle: "Frequently asked questions",
  faqSubtitle: "Everything you need to know about Norxio.",
  faqList: [
    { _key: "q1", question: "What is Norxio?", answer: "Norxio is a global payments platform that helps businesses manage multi-currency accounts, make international transfers, and access transparent FX rates." },
    { _key: "q2", question: "How fast are international payouts?", answer: "Most international payouts are processed same-day in major corridors. Transfer times may vary depending on the destination country and currency." },
    { _key: "q3", question: "Can I hold multiple currencies?", answer: "Yes, you can hold, receive, and manage over 30+ currencies in a single Norxio account." },
    { _key: "q4", question: "Is Norxio secure?", answer: "Yes. We use bank-level security including multi-factor authentication, end-to-end encryption, and continuous fraud monitoring." },
    { _key: "q5", question: "What countries do you support?", answer: "Norxio supports transfers to 180+ countries worldwide with local payment rails in major markets." },
    { _key: "q6", question: "Are there transaction limits?", answer: "Transaction limits depend on your plan and verification level. Enterprise customers can request custom limits." },
  ],

  // CTA
  ctaTitle: "Start moving money smarter",
  ctaSubtitle: "Join thousands of businesses using Norxio to streamline global payments, access transparent FX, and move funds faster.",
  ctaButtonText: "Get started",
};

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

    console.log("🎉 Seeding complete! You can now view and edit content in Sanity Studio.");
    console.log("   → http://localhost:3000/studio");
  } catch (error) {
    console.error("❌ Error seeding data:", error);
    process.exit(1);
  }
}

seed();
