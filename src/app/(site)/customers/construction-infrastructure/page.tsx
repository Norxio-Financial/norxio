"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import FAQ from "@/components/sections/FAQ";
import { FAQSection } from "@/lib/types";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ConstructionInfrastructurePage() {
    const { t } = useLanguage();
    const cp = t.customerPages?.construction;
    const common = t.customerPages?.common;

    // Card data for the Payments for Large Projects section
    const projectCards = [
        {
            id: 1,
            image: "/images/customers/construction/card1.jpg",
            title: cp?.card1Title || "Project-Based Payments",
            description: cp?.card1Desc || "Manage milestone payments with full transparency and real-time tracking across all project phases."
        },
        {
            id: 2,
            image: "/images/customers/construction/card2.jpg",
            title: cp?.card2Title || "Multi-Currency Settlements",
            description: cp?.card2Desc || "Pay international suppliers and contractors in their local currencies while holding and converting funds at transparent FX rates."
        },
        {
            id: 3,
            image: "/images/customers/construction/card3.jpg",
            title: cp?.card3Title || "Secure Large Transactions",
            description: cp?.card3Desc || "Handle high-value payments with enterprise-grade security and compliance across all jurisdictions."
        }
    ];

    // Hardcoded data for the FAQ section
    const faqData: FAQSection = {
        title: cp?.faqTitle || "Frequently Asked Questions",
        badge: "FAQ",
        subtitle: cp?.faqSubtitle || "Everything you need to know about our construction and infrastructure services.",
        faqs: [
            {
                question: "How can Norxio help my construction business?",
                answer: "Norxio provides multi-currency accounts, project-based payment management, and competitive FX rates designed for the construction and infrastructure industry, helping you pay contractors and suppliers worldwide efficiently."
            },
            {
                question: "Can I pay suppliers in their local currency?",
                answer: "Yes, with Norxio you can pay suppliers, contractors, and partners in over 50 currencies across 180+ countries using local payment rails for faster processing."
            },
            {
                question: "How do you handle large project payments?",
                answer: "Our platform supports milestone-based payments, batch processing, and automated workflows designed for complex multi-phase construction projects."
            },
            {
                question: "Do you support automated recurring payments?",
                answer: "Yes, our API allows you to automate recurring contractor payments, integrate with your project management systems, and set up batch processing for operational efficiency."
            },
            {
                question: "What makes Norxio different for infrastructure projects?",
                answer: "We understand the complexity of large-scale infrastructure projects with multiple vendors across regions. Our platform offers consolidated reporting, multi-entity support, and real-time visibility into all payments."
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
                {/* Background SVG Vectors */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/customers/hero-bg-vectors.svg"
                        alt="Background Pattern"
                        fill
                        className="object-cover object-center opacity-60"
                        priority
                    />
                </div>

                {/* Mobile overlay for better text readability */}
                <div className="absolute inset-0 z-[1] bg-[#0B2545]/50 sm:bg-transparent" />

                <div className="absolute inset-0 flex items-center z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <div className="max-w-2xl text-white">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 bg-white/10 backdrop-blur-md rounded-full mb-4 sm:mb-6 border border-white/10">
                                <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-blue-400 rounded-full"></span>
                                <span className="text-xs sm:text-sm font-medium">{cp?.badge || "Project Payments"}</span>
                            </div>

                            {/* Title */}
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                                {cp?.title || "Construction Infrastructure & Project Supply"}
                            </h1>

                            {/* Subtitle */}
                            <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 lg:mb-10 max-w-xl leading-relaxed">
                                {cp?.subtitle || "Streamline payments for large-scale projects with multi-currency support, milestone tracking, and full transparency across borders."}
                            </p>

                            {/* Buttons */}
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
                        <Image
                            src="/images/customers/norxio-map.png"
                            alt="Norxio Global Network"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* 3. Payments for Large Projects Section */}
            <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#f5f7fa]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-10 sm:mb-12 lg:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-4 leading-tight">
                            {cp?.paymentsTitle || "Payments for Large Projects"}
                        </h2>
                        <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                            {cp?.paymentsSubtitle || "Simple, secure payments for global construction operations."}
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                        {projectCards.map((card) => (
                            <div
                                key={card.id}
                                className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg group cursor-pointer"
                            >
                                {/* Card Background Image */}
                                <div className="relative w-full aspect-[4/5]">
                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        fill
                                        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                                    />
                                </div>

                                {/* Default Title at Bottom */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 bg-white/80 backdrop-blur-md transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:translate-y-4">
                                    <h3 className="text-base sm:text-lg font-semibold text-[#1e3a5f] text-center">
                                        {card.title}
                                    </h3>
                                </div>

                                {/* Hover Detail Box */}
                                <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                                    <div className="bg-white/70 backdrop-blur-xl rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-2xl max-w-[90%] transform scale-95 group-hover:scale-100 transition-transform duration-500 ease-in-out border border-white/50">
                                        <h3 className="text-lg sm:text-xl font-bold text-[#1e3a5f] mb-3">
                                            {card.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                                            {card.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Manage Payments Across Large-Scale Projects Section */}
            <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#f5f7fa]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
                        {/* Image */}
                        <div className="relative order-2 lg:order-1">
                            <div className="relative w-full aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden">
                                <Image
                                    src="/images/customers/construction/section1.jpg"
                                    alt="Construction Project Management"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="order-1 lg:order-2">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-4 sm:mb-6 leading-tight">
                                {cp?.section1Title || "Manage Payments Across Large-Scale Projects"}
                            </h2>
                            <p className="text-lg sm:text-xl text-[#1e3a5f] font-medium mb-4">
                                {cp?.section1Subtitle || "Built for complex projects and long timelines."}
                            </p>
                            <p className="text-slate-600 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                                {cp?.section1Desc1 || "Construction and infrastructure projects involve multiple stakeholders, contractors, and suppliers across different countries. Norxio simplifies payment management with milestone-based tracking."}
                            </p>
                            <p className="text-slate-600 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                                {cp?.section1Desc2 || "Our platform enables you to manage complex payment schedules, track project milestones, and ensure contractors get paid on time—every time."}
                            </p>
                            <Link href="/get-started">
                                <Button className="bg-brand-blue hover:bg-brand-blue-hover text-white rounded-full py-5 sm:py-6 px-6 sm:px-8 font-medium text-sm sm:text-base cursor-pointer shadow-sm hover:shadow-md transition-all">
                                    {common?.getStarted || "Get Started"}
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Control Cross-Border Project Costs Section */}
            <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
                        {/* Content */}
                        <div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-4 sm:mb-6 leading-tight">
                                {cp?.section2Title || "Control Cross-Border Project Costs"}
                            </h2>
                            <p className="text-lg sm:text-xl text-[#1e3a5f] font-medium mb-4">
                                {cp?.section2Subtitle || "Stay on top of international spending."}
                            </p>
                            <p className="text-slate-600 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                                {cp?.section2Desc1 || "Monitor and control project costs across multiple currencies and jurisdictions. Get real-time visibility into payment flows and lock in favorable exchange rates to protect your margins."}
                            </p>
                            <p className="text-slate-600 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                                {cp?.section2Desc2 || "Our transparent pricing and competitive FX rates help you maximize every project budget while maintaining compliance across all operating regions."}
                            </p>
                            <Link href="/get-started">
                                <Button className="bg-brand-blue hover:bg-brand-blue-hover text-white rounded-full py-5 sm:py-6 px-6 sm:px-8 font-medium text-sm sm:text-base cursor-pointer shadow-sm hover:shadow-md transition-all">
                                    {common?.getStarted || "Get Started"}
                                </Button>
                            </Link>
                        </div>

                        {/* Image */}
                        <div className="relative">
                            <div className="relative w-full aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden">
                                <Image
                                    src="/images/customers/construction/section2.jpg"
                                    alt="Cross-Border Project Costs"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Full-Width Banner Section */}
            <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/customers/construction/section3.jpg"
                        alt="Construction Background"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[#0B2545]/85" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif italic text-white mb-4 sm:mb-6 leading-tight">
                        {cp?.bannerTitle || "Move Payments as Fast as Your Shipments"}
                    </h2>
                    <p className="text-blue-100/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        {cp?.bannerSubtitle || "Accelerate project timelines with faster payments. Our platform ensures funds reach contractors and suppliers when they need them."}
                    </p>
                </div>
            </section>

            {/* 7. FAQ Section */}
            <FAQ data={faqData} className="bg-white" />
        </div>
    );
}
