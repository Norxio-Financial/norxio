"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import FAQ from "@/components/sections/FAQ";
import { FAQSection } from "@/lib/types";
import { Globe, Zap, Shield, TrendingUp } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function FreightLogisticsPage() {
    const { t } = useLanguage();
    const cp = t.customerPages?.freightLogistics;
    const common = t.customerPages?.common;

    // Feature data for the Built for Freight section
    const features = [
        {
            icon: Globe,
            title: cp?.feature1Title || "Global Payment Coverage",
            description: cp?.feature1Desc || "Pay carriers, warehouses, and agents in 180+ countries with local payment rails."
        },
        {
            icon: Shield,
            title: cp?.feature2Title || "Multi-Currency Operations",
            description: cp?.feature2Desc || "Hold, convert, and pay in 50+ currencies from a single dashboard."
        },
        {
            icon: Zap,
            title: cp?.feature3Title || "Same-day Settlements",
            description: cp?.feature3Desc || "Accelerate cash flow with fast settlements across major corridors."
        },
        {
            icon: TrendingUp,
            title: cp?.feature4Title || "Transparent FX & Real-time Rates",
            description: cp?.feature4Desc || "Lock in competitive rates with no hidden fees on every transaction."
        }
    ];

    // Hardcoded data for the FAQ section
    const faqData: FAQSection = {
        title: cp?.faqTitle || "Frequently Asked Questions",
        badge: "FAQ",
        subtitle: cp?.faqSubtitle || "Everything you need to know about our logistics payment services.",
        faqs: [
            {
                question: "How can Norxio help my logistics business?",
                answer: "Norxio provides multi-currency accounts, fast same-day settlements, and competitive FX rates specifically designed for the freight and logistics industry, helping you pay carriers and agents worldwide efficiently."
            },
            {
                question: "Can I pay carriers in their local currency?",
                answer: "Yes, with Norxio you can pay carriers, agents, and partners in over 50 currencies across 180+ countries using local payment rails for faster processing."
            },
            {
                question: "How do you handle high-volume payments?",
                answer: "Our platform is built for enterprise-scale B2B transactions with batch payment processing, API automation, and dedicated support for high-volume operations."
            },
            {
                question: "Do you support automated recurring payments?",
                answer: "Yes, our API allows you to automate recurring carrier payments, integrate with your TMS, and set up batch processing for operational efficiency."
            },
            {
                question: "What makes Norxio different for 3PL providers?",
                answer: "We understand the complexity of 3PL operations with multiple vendors across regions. Our platform offers consolidated reporting, multi-entity support, and real-time visibility into all payments."
            },
            {
                question: "Are there any hidden fees?",
                answer: "No. We believe in complete transparency. All fees are clearly displayed before you confirm any transaction—what you see is what you pay."
            }
        ]
    };

    return (
        <div className="bg-white">
            {/* 1. Hero Section */}
            <section className="relative h-[450px] sm:h-[500px] md:h-[600px] lg:h-[700px] w-full overflow-hidden bg-[#0B2545]">
                <div className="absolute inset-0 z-0">
                    <Image src="/images/customers/hero-bg-vectors.svg" alt="Background Pattern" fill className="object-cover object-center opacity-60" priority />
                </div>
                <div className="absolute inset-0 z-[1] bg-[#0B2545]/50 sm:bg-transparent" />
                <div className="absolute inset-0 flex items-center z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <div className="max-w-2xl text-white">
                            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 bg-white/10 backdrop-blur-md rounded-full mb-4 sm:mb-6 border border-white/10">
                                <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-blue-400 rounded-full"></span>
                                <span className="text-xs sm:text-sm font-medium">{cp?.badge || "Logistics Payments"}</span>
                            </div>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                                {cp?.title || "Freight, Logistics & 3PL"}
                            </h1>
                            <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 lg:mb-10 max-w-xl leading-relaxed">
                                {cp?.subtitle || "Move money as fast as you move goods. Fast, transparent payments for carriers, warehouses, and agents across 180+ countries."}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                <Link href="/get-started">
                                    <Button className="bg-white text-blue-900 hover:bg-blue-50 text-sm sm:text-base py-4 sm:py-5 lg:py-6 px-6 sm:px-7 lg:px-8 rounded-full font-semibold w-full sm:w-auto cursor-pointer">
                                        {common?.startForFree || "Start for free"}
                                    </Button>
                                </Link>
                                <Link href="/get-started">
                                    <Button variant="outline" className="border-white text-white hover:bg-white/10 text-sm sm:text-base py-4 sm:py-5 lg:py-6 px-6 sm:px-7 lg:px-8 rounded-full bg-transparent w-full sm:w-auto cursor-pointer">
                                        {common?.getStarted || "Get Started"}
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Norxio Map Section */}
            <section className="bg-[#f5f7fa] mt-[-1rem]">
                <div className="w-full">
                    <div className="relative w-full aspect-[3/1] min-h-[180px] sm:min-h-[200px] md:min-h-[250px]">
                        <Image src="/images/customers/norxio-map.png" alt="Norxio Global Network" fill className="object-contain" priority />
                    </div>
                </div>
            </section>

            {/* 3. Built for Freight Section - WhyTrust Style */}
            <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#f5f7fa]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-8 sm:gap-10 lg:gap-16 items-start">
                        {/* Left Side - Sticky Title */}
                        <div className="lg:sticky lg:top-32">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white rounded-full shadow-sm mb-4 sm:mb-6">
                                <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#3173BD] rounded-full"></span>
                                <span className="text-xs sm:text-sm font-medium text-slate-600">{cp?.badge || "Logistics Payments"}</span>
                            </div>

                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#1e3a5f] leading-tight mb-4 sm:mb-5">
                                {cp?.builtForTitle || "Built for Freight, Logistics & 3PL Payments"}
                            </h2>

                            <p className="text-slate-500 max-w-sm text-sm sm:text-base lg:text-lg leading-relaxed">
                                {cp?.builtForSubtitle || "Purpose-built payment solutions for logistics companies, freight forwarders, and third-party logistics providers operating globally."}
                            </p>
                        </div>

                        {/* Right Side - Staggered 2x2 Card Grid */}
                        <div className="flex gap-4 sm:gap-5 lg:gap-6">
                            {/* Left Column - starts at top */}
                            <div className="flex-1 flex flex-col gap-4 sm:gap-5 lg:gap-6">
                                {[features[0], features[2]].filter(Boolean).map((feature, index) => {
                                    const IconComponent = feature.icon;
                                    return (
                                        <div key={index} className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-7 shadow-sm hover:shadow-md transition-shadow duration-200">
                                            <div className="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl bg-[#F0F7FF] flex items-center justify-center mb-4 sm:mb-5 border border-[#E0EDFA]">
                                                <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-[#3173BD]" strokeWidth={1.5} />
                                            </div>
                                            <h3 className="font-semibold text-[#1e3a5f] text-base sm:text-lg mb-2 sm:mb-3">{feature.title}</h3>
                                            <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Right Column - starts lower (staggered) */}
                            <div className="flex-1 flex flex-col gap-4 sm:gap-5 lg:gap-6 mt-6 sm:mt-8 lg:mt-12">
                                {[features[1], features[3]].filter(Boolean).map((feature, index) => {
                                    const IconComponent = feature.icon;
                                    return (
                                        <div key={index} className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-7 shadow-sm hover:shadow-md transition-shadow duration-200">
                                            <div className="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl bg-[#F0F7FF] flex items-center justify-center mb-4 sm:mb-5 border border-[#E0EDFA]">
                                                <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-[#3173BD]" strokeWidth={1.5} />
                                            </div>
                                            <h3 className="font-semibold text-[#1e3a5f] text-base sm:text-lg mb-2 sm:mb-3">{feature.title}</h3>
                                            <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Simplify Your Global Logistics Payments Section */}
            <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
                        <div className="relative order-2 lg:order-1">
                            <div className="relative w-full aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden">
                                <Image src="/images/customers/logistics/section1.jpg" alt="Freight Operations" fill className="object-cover" />
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-4 sm:mb-6 leading-tight">
                                {cp?.section1Title || "Simplify Your Global Logistics Payments"}
                            </h2>
                            <p className="text-lg sm:text-xl text-[#1e3a5f] font-medium mb-4">
                                {cp?.section1Subtitle || "Built for freight and logistics"}
                            </p>
                            <p className="text-slate-600 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                                {cp?.section1Desc1 || "The logistics industry operates on tight margins and even tighter timelines. Norxio understands that every delay in payment can disrupt your entire supply chain."}
                            </p>
                            <p className="text-slate-600 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                                {cp?.section1Desc2 || "Our platform is designed to keep your operations running smoothly with fast, reliable payments to partners worldwide."}
                            </p>
                            <Link href="/get-started">
                                <Button className="bg-[#2563EB] hover:bg-blue-700 text-white rounded-lg py-5 sm:py-6 px-6 sm:px-8 font-medium text-sm sm:text-base cursor-pointer">
                                    {common?.getStarted || "Get Started"}
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Move Payments as Fast as Your Freight Section */}
            <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
                <div className="absolute inset-0">
                    <Image src="/images/customers/logistics/section2.jpg" alt="Logistics Background" fill className="object-cover" />
                    <div className="absolute inset-0 bg-[#0B2545]/85" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif italic text-white mb-4 sm:mb-6 leading-tight">
                        {cp?.bannerTitle || "Move Payments as Fast as Your Freight"}
                    </h2>
                    <p className="text-blue-100/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        {cp?.bannerSubtitle || "Accelerate your logistics operations with seamless cross-border payments."}
                    </p>
                </div>
            </section>

            {/* 6. Optimize Your Payment Operations Section */}
            <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#f5f7fa]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
                        <div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-4 sm:mb-6 leading-tight">
                                {cp?.section2Title || "Optimize Your Payment Operations"}
                            </h2>
                            <p className="text-lg sm:text-xl text-[#1e3a5f] font-medium mb-4">
                                {cp?.section2Subtitle || "Efficiency at every step"}
                            </p>
                            <p className="text-slate-600 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                                {cp?.section2Desc1 || "From carrier payments to customs fees, logistics involves countless transactions across multiple currencies and jurisdictions."}
                            </p>
                            <p className="text-slate-600 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                                {cp?.section2Desc2 || "Norxio consolidates your payment operations, providing clear visibility and control over every transaction."}
                            </p>
                            <Link href="/get-started">
                                <Button className="bg-[#2563EB] hover:bg-blue-700 text-white rounded-lg py-5 sm:py-6 px-6 sm:px-8 font-medium text-sm sm:text-base cursor-pointer">
                                    {common?.getStarted || "Get Started"}
                                </Button>
                            </Link>
                        </div>
                        <div className="relative">
                            <div className="relative w-full aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden">
                                <Image src="/images/customers/logistics/section3.jpg" alt="Logistics Operations" fill className="object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. FAQ Section */}
            <FAQ data={faqData} className="bg-white" />
        </div>
    );
}
