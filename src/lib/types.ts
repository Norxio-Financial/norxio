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
