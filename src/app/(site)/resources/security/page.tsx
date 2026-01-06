import Image from "next/image";
import Link from "next/link";
import { Shield, Activity, FileCheck } from "lucide-react";

import ContentBlock from "@/components/sections/ContentBlock";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "What is the purpose of the Norxio Blog?",
    answer: "The Norxio blog serves as a resource for businesses to learn about the latest trends in fintech, corporate finance management, and updates about our products.",
  },
  {
    question: "Can I search for articles by topic?",
    answer: "Yes, you can browse articles by category using individual topic tags or use the search feature to find specific information.",
  },
  {
    question: "Who is the blog designed for?",
    answer: "The blog is designed for business owners, financial managers, and anyone interested in corporate finance and fintech trends.",
  },
  {
    question: "Do I need a Norxio account to read the blog?",
    answer: "No, the Norxio blog is publicly available to everyone. You don't need an account to read our articles.",
  },
  {
    question: "Are the blog articles based on real financial expertise?",
    answer: "Yes, our articles are written and reviewed by financial experts to ensure accuracy and provide actionable insights for your business.",
  },
  {
    question: "Can I suggest a topic for the blog?",
    answer: "We welcome suggestions! If there's a specific topic you'd like us to cover, please reach out to our content team via the contact page.",
  },
  {
    question: "How often do you publish new content?",
    answer: "We publish new articles weekly, covering a range of topics from industry news to deep dives into specific financial strategies.",
  },
  {
    question: "Are product update posts included in the blog?",
    answer: "Yes, we regularly post about new features, improvements, and tutorials to help you get the most out of the Norxio platform.",
  },
  {
    question: "Can I use the information in the blog for my business?",
    answer: "Absolutely. Our content is designed to provide practical advice and strategies that you can implement in your business operations.",
  },
  {
    question: "Can I share Norxio blog articles with others?",
    answer: "Absolutely. We encourage you to share our articles on social media or with your colleagues to help spread valuable insights.",
  },
];

export default function SecurityPage() {
  return (
    <main className="bg-[#F8FAFC]">
      {/* Hero Section */}
      <section className="relative h-[450px] sm:h-[500px] md:h-[600px] lg:h-[700px] w-full overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/security/security-hero.jpg"
          alt="Security Hero"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 z-0 bg-gradient-to-r from-[#0B2545] to-transparent/10"
          style={{
            background: "linear-gradient(90deg, #1e3a5f 0%, #1e3a5f 20%, rgba(30, 58, 95, 0.45) 50%, rgba(30, 58, 95, 0) 100%)",
          }}
        />
        {/* Mobile overlay */}
        <div className="absolute inset-0 z-0 bg-[#1e3a5f]/50 sm:bg-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-xl text-white">
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 bg-white/10 backdrop-blur-md rounded-full mb-4 sm:mb-6 border border-white/20">
                <span className="text-xs sm:text-sm font-medium">Security</span>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                Strong statement about trust and protection
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 lg:mb-10 max-w-lg leading-relaxed">
                Short assurance about how Norxio keeps customer funds and data safe
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link href="/get-started">
                  <Button className="bg-white text-[#1e3a5f] hover:bg-white/90 text-sm sm:text-base py-4 sm:py-5 lg:py-6 px-6 sm:px-7 lg:px-8 rounded-full font-semibold w-full sm:w-auto sm:min-w-[160px]">
                    Open an Account
                  </Button>
                </Link>
                <Link href="/get-started">
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 text-sm sm:text-base py-4 sm:py-5 lg:py-6 px-6 sm:px-7 lg:px-8 rounded-full bg-transparent w-full sm:w-auto sm:min-w-[160px]"
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment to Security */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-[#F8FAFC] overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B2545] mb-4 sm:mb-6">
                Our Commitment to <br className="hidden sm:block" />Security
              </h2>
              <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
                We are building a platform where every transaction, every login, and every piece of data is protected with the highest security standards.
              </p>
              <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
                A system where safety is not an add-on, but the foundation—trusted, compliant, and monitored around the clock.
              </p>
              <Link href="/get-started">
                <Button className="bg-[#2563EB] hover:bg-blue-700 text-white px-6 sm:px-8 py-4 sm:py-5 lg:py-6 rounded-full text-sm sm:text-base font-medium min-w-[120px] sm:min-w-[140px]">
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Right Visual (Shield & Circles) */}
            <div className="order-1 lg:order-2 flex justify-center items-center">
              <Image
                src="/images/security/security.png"
                alt="Security Illustration"
                width={600}
                height={500}
                className="w-full max-w-[500px] h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B2545] mb-3 sm:mb-4">
              Why It Matters
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
              Ensure every transaction, account detail, and piece of data is protected with clarity, control, and trust.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {/* Card 1 */}
            <div className="bg-white p-5 sm:p-6 md:p-8 rounded-[1.5rem] sm:rounded-[2rem] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-blue-50 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-5 md:mb-6">
                <Shield className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 text-[#2563EB]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#0B2545] mb-2 sm:mb-3">
                Advanced Data Protection
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Keep your sensitive information safe with industry-grade encryption and strict security controls designed to prevent unauthorized access.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-5 sm:p-6 md:p-8 rounded-[1.5rem] sm:rounded-[2rem] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-blue-50 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-5 md:mb-6">
                <Activity className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 text-[#2563EB]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#0B2545] mb-2 sm:mb-3">
                Real-Time Fraud Monitoring
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our automated systems monitor every transaction, detect suspicious activity instantly, and help keep your business protected 24/7.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-5 sm:p-6 md:p-8 rounded-[1.5rem] sm:rounded-[2rem] shadow-sm hover:shadow-md transition-shadow sm:col-span-2 md:col-span-1">
              <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-blue-50 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-5 md:mb-6">
                <FileCheck className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 text-[#2563EB]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#0B2545] mb-2 sm:mb-3">
                Fully Compliant Infrastructure
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Norxio follows global standards and regional regulations, ensuring your operations remain compliant no matter where you do business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security You Can Rely On */}
      <ContentBlock
        title="Security You Can Rely On"
        subtitle="Creating a Borderless Financial Experience"
        description="Behind every feature we build is one mission—protecting your data, your funds, and your peace of mind.\n\nWe operate with rigorous security controls, transparent processes, and industry-leading compliance standards that keep your information safe at every step."
        image="/images/security/security1.jpg"
        imageAlt="Security You Can Rely On"
        imagePosition="left"
        ctaText="Get Started"
        ctaLink="/get-started"
        // Adjust padding to match design spacing between sections
        className="pt-10 pb-20"
      />

      {/* CTA Banner */}
      <CTA
        data={{
          title: "Stay Protected With Enterprise-Grade Security",
          subtitle: "Get peace of mind knowing your transactions and data are secured by industry-leading compliance standards.",
          buttonText: "Get Started", // Design implies a call to action
        }}
      />

      {/* FAQ Section */}
      <FAQ
        className="bg-[#F8FAFC]"
        data={{
          title: "Frequently Asked Questions",
          subtitle: "Find quick answers to common questions about how the Norxio blog works and how to get the most from our content.",
          faqs: faqs,
        }}
      />
    </main>
  );
}
