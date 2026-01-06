import Image from "next/image";
import Link from "next/link";
import { Shield, Activity, FileCheck, Lock } from "lucide-react";

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
      <section className="relative h-[600px] lg:h-[700px] w-full overflow-hidden">
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

        {/* Content */}
        <div className="absolute inset-0 flex items-center z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-xl text-white">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20">
                <span className="text-sm font-medium">Security</span>
              </div>
              
              {/* Title */}
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Strong statement about trust and protection
              </h1>
              
              {/* Subtitle */}
              <p className="text-lg text-white/90 mb-10 max-w-lg leading-relaxed">
                Short assurance about how Norxio keeps customer funds and data safe
              </p>
              
              {/* Buttons */}
              <div className="flex gap-4">
                <Link href="/get-started">
                  <Button className="bg-white text-[#1e3a5f] hover:bg-white/90 text-base py-6 px-8 rounded-full font-semibold min-w-[160px]">
                    Open an Account
                  </Button>
                </Link>
                <Link href="/talk-to-sales">
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 text-base py-6 px-8 rounded-full bg-transparent min-w-[160px]"
                  >
                    Talk to Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment to Security */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC] overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B2545] mb-6">
                Our Commitment to <br /> Security
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                We are building a platform where every transaction, every login, and every piece of data is protected with the highest security standards.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                A system where safety is not an add-on, but the foundation—trusted, compliant, and monitored around the clock.
              </p>
              <Link href="/talk-to-sales">
                <Button className="bg-[#2563EB] hover:bg-blue-700 text-white px-8 py-6 rounded-full text-base font-medium min-w-[140px]">
                  Talk to Sales
                </Button>
              </Link>
            </div>

            {/* Right Visual (Shield & Circles) */}
            <div className="order-1 lg:order-2 relative flex justify-center items-center h-[400px]">
              {/* Concentric Circles using divs */}
              <div className="absolute w-[400px] h-[400px] rounded-full border border-dashed border-blue-200 animate-spin-slow opacity-30"></div>
              <div className="absolute w-[320px] h-[320px] rounded-full border border-dashed border-blue-300 animate-reverse-spin opacity-40"></div>
              <div className="absolute w-[240px] h-[240px] rounded-full border border-dashed border-blue-400 opacity-50"></div>
              
              {/* Blue Dots on outer circle */}
              <div className="absolute w-[400px] h-[400px] rounded-full animate-spin-slow">
                <div className="absolute top-1/2 left-0 w-3 h-3 bg-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute top-0 left-1/2 w-2 h-2 bg-blue-400 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-1/2 right-0 w-2 h-2 bg-blue-300 rounded-full translate-x-1/2 translate-y-1/2"></div>
              </div>

              {/* Shield Icon */}
              <div className="relative z-10 w-24 h-32 bg-gradient-to-b from-blue-500 to-blue-700 rounded-[2rem] flex items-center justify-center shadow-2xl shadow-blue-500/30 transform transition-transform hover:scale-105">
                <div className="absolute inset-0 bg-blue-400/20 blur-xl rounded-full transform scale-110"></div>
                <Lock className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B2545] mb-4">
              Why It Matters
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Ensure every transaction, account detail, and piece of data is protected with clarity, control, and trust.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-[#2563EB]" />
              </div>
              <h3 className="text-lg font-bold text-[#0B2545] mb-3">
                Advanced Data Protection
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Keep your sensitive information safe with industry-grade encryption and strict security controls designed to prevent unauthorized access.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <Activity className="w-6 h-6 text-[#2563EB]" />
              </div>
              <h3 className="text-lg font-bold text-[#0B2545] mb-3">
                Real-Time Fraud Monitoring
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our automated systems monitor every transaction, detect suspicious activity instantly, and help keep your business protected 24/7.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <FileCheck className="w-6 h-6 text-[#2563EB]" />
              </div>
              <h3 className="text-lg font-bold text-[#0B2545] mb-3">
                Fully Compliant Infrastructure
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
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
        ctaText="Talk to Sales"
        ctaLink="/talk-to-sales"
        // Adjust padding to match design spacing between sections
        className="pt-10 pb-20"
      />

      {/* CTA Banner */}
      <CTA 
        data={{
          title: "Stay Protected With Enterprise-Grade Security",
          subtitle: "Get peace of mind knowing your transactions and data are secured by industry-leading compliance standards.",
          buttonText: "Talk to Sales", // Design implies a call to action
          buttonLink: "/talk-to-sales"
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
