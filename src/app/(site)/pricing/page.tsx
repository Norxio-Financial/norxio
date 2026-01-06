import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import ComparePlans from "@/components/sections/ComparePlans";
import { PricingSection, FAQSection } from "@/lib/types";

export default function PricingPage() {
  // Dummy data for Pricing component since it has hardcoded plans matching the design
  const pricingData: PricingSection = {
    badge: "Pricing",
    title: "Simple, Transparent Pricing",
    subtitle: "Choose a plan that fits your business.",
    plans: []
  };

  const faqData: FAQSection = {
    title: "Frequently Asked Questions",
    subtitle: "Clear answers to the most common questions about Norxio's pricing, plans, and billing—so you know exactly what you're paying for.",
    faqs: [
      {
        question: "What is included in each Norxio plan?",
        answer: "Each plan includes a set number of virtual cards, FX rates, and payout capabilities. The Lite plan is perfect for small businesses, while Enterprise and Business plans offer more advanced features like custom FX rates, dedicated support, and API access."
      },
      {
        question: "What payment methods does Norxio accept?",
        answer: "We accept all major credit cards, bank transfers, and direct debits. For Enterprise and Business plans, we can also arrange invoicing options."
      },
      {
        question: "Can I upgrade or downgrade my plan anytime?",
        answer: "Yes, you can upgrade or downgrade your plan at any time from your dashboard. Changes will take effect immediately, and billing will be adjusted on a pro-rata basis."
      },
      {
        question: "Can multiple team members use one plan?",
        answer: "Yes, depending on your plan. The Lite plan includes 3 cards, while Business allows up to 20 users, and Custom plans offer unlimited users with advanced team controls."
      },
      {
        question: "Do I get billed monthly or yearly?",
        answer: "You can choose between monthly or yearly billing. Yearly billing typically comes with a discount compared to paying month-to-month."
      },
      {
        question: "How do I cancel my subscription?",
        answer: "You can cancel your subscription directly from your account settings. Cancellation will be effective at the end of your current billing period."
      },
      {
        question: "Is there a free trial available?",
        answer: "Yes, we offer a 14-day free trial for our Business plan so you can explore the advanced features before committing."
      },
      {
        question: "Will I lose my data if I cancel or downgrade?",
        answer: "No, your data will be retained for a period of time even if you cancel. If you downgrade, you will simply lose access to the features not included in your new plan."
      },
      {
        question: "Are there any hidden fees?",
        answer: "No, we believe in full transparency. All fees are clearly outlined in your plan, and FX rates are shown upfront before you make a transaction."
      },
      {
        question: "What happens if my usage exceeds the plan limits?",
        answer: "If you exceed your plan limits, we will notify you. You may be charged overage fees or asked to upgrade to a higher plan to continue enjoying uninterrupted service."
      }
    ]
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#0f2c4f] py-12 sm:py-16 md:py-20 lg:py-24 text-center text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-white/10 text-white text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-white/20">
            Pricing
          </div>
          <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 tracking-tight px-2">
            Pricing Built for Every Business
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
            Flexible plans designed to match your growth—start small, scale confidently, and pay only for what you need.
          </p>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <Pricing data={pricingData} />

      {/* Compare Plans Section */}
      <ComparePlans />

      {/* FAQ Section */}
      <FAQ data={faqData} className="bg-[#f8fafc]" />
    </main>
  );
}
