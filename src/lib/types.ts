// TypeScript types for Sanity content

export interface NavLink {
  label: string;
  href: string;
}

export interface SiteSettings {
  siteName: string;
  navLinks: NavLink[];
}

export interface Currency {
  code: string;
  flag: string;
  change: string;
  up: boolean;
}

export interface HeroSection {
  badge: string;
  title: string;
  highlight: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  heroImage?: string;
  currencies: Currency[];
}

export interface TrustedCompany {
  name: string;
  logo?: string;
}

export interface TrustedBySection {
  heading: string;
  companies: TrustedCompany[];
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
  color: string;
}

export interface FeaturesSection {
  badge: string;
  title: string;
  subtitle: string;
  features: Feature[];
}

export interface TrustReason {
  icon: string;
  title: string;
  description: string;
}

export interface WhyTrustSection {
  badge: string;
  title: string;
  subtitle: string;
  bulletPoints: string[];
  reasons: TrustReason[];
}

export interface HelpGrowCard {
  image: string;
  title: string;
  description: string;
  color?: string; // Optional if not used
}

export interface HelpGrowSection {
  title: string;
  cards: HelpGrowCard[];
}

export interface AllInOneSection {
  badge: string;
  title: string;
}

export interface SecurityFeature {
  icon: string;
  title: string;
  description: string;
}

export interface SecuritySection {
  badge: string;
  title: string;
  subtitle: string;
  features: SecurityFeature[];
}

export interface PricingPlan {
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  popular: boolean;
}

export interface PricingSection {
  badge: string;
  title: string;
  subtitle: string;
  plans: PricingPlan[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface FAQSection {
  badge: string;
  title: string;
  subtitle: string;
  faqs: FAQ[];
}

export interface CTASection {
  title: string;
  subtitle: string;
  buttonText: string;
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface Footer {
  tagline: string;
  columns: FooterColumn[];
  copyright: string;
  socialLinks: { platform: string; url: string }[];
}

export interface LandingPageData {
  settings: SiteSettings;
  hero: HeroSection;
  trustedBy: TrustedBySection;
  features: FeaturesSection;
  whyTrust: WhyTrustSection;
  helpGrow: HelpGrowSection;
  allInOne: AllInOneSection;
  security: SecuritySection;
  pricing: PricingSection;
  faq: FAQSection;
  cta: CTASection;
  footer: Footer;
}

// Multi-Currency Page Types
export interface MultiCurrencyPageData {
  heroTitle: string;
  heroSubtitle: string;
  heroImage?: string;
  feature1Title: string;
  feature1Image?: string; // Coins
  feature2Title: string;
  feature2Desc: string;
  feature2Image?: string; // Map 1
  feature3Title: string;
  feature3Desc: string;
  feature3Image?: string; // Wallet
  feature4Title: string;
  feature4Desc: string;
  feature4List: string[];
  feature4Image?: string; // Global Ops Map
  faqs: FAQ[];
  ctaTitle: string;
  ctaSubtitle: string;
}

// FX Exchange Page Types
export interface FxExchangePageData {
  heroTitle: string;
  heroSubtitle: string;
  heroImage?: string;
  stats: { icon: string; text: string }[];
  feature1Title: string;
  feature1Desc: string;
  feature1Image?: string;
  feature2Title: string;
  feature2Desc: string;
  feature2Image?: string;
  feature3Title: string;
  feature3Desc: string;
  feature3Image?: string;
  mapTitle: string;
  mapSubtitle: string;
  mapImage?: string;
  faqs: FAQ[];
}

// Global Payout Page Types
export interface GlobalPayoutPageData {
  heroTitle: string;
  heroSubtitle: string;
  heroImage?: string;
  sendMoneyTitle: string;
  sendMoneyDesc: string;
  sendMoneyImage?: string;
  simplifiedTitle: string;
  simplifiedCards: { icon: string; title: string; description: string }[];
  builtForTitle: string;
  builtForCards: { title: string; description: string; image?: string }[];
  businessGridTitle: string;
  businessGridImages: { title: string; image?: string }[];
  faqs: FAQ[];
  ctaTitle: string;
  ctaSubtitle: string;
}
