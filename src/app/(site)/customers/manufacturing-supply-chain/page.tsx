"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import FAQ from "@/components/sections/FAQ";
import { FAQSection } from "@/lib/types";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ManufacturingSupplyChainPage() {
    const { t } = useLanguage();
    const cp = t.customerPages?.manufacturing;
    const common = t.customerPages?.common;

    // Card data for carousel
    const carouselCards = [
        {
            id: 1,
            image: "/images/customers/manufacturing/card1.jpg",
            title: cp?.carouselTitle1 || "Streamlined supplier payments",
            description: cp?.carouselDesc1 || "Pay suppliers in 180+ countries with local payment rails."
        },
        {
            id: 2,
            image: "/images/customers/manufacturing/card2.jpg",
            title: cp?.carouselTitle2 || "Multi-currency management",
            description: cp?.carouselDesc2 || "Hold and convert 50+ currencies from a single dashboard."
        },
        {
            id: 3,
            image: "/images/customers/manufacturing/card3.jpg",
            title: cp?.carouselTitle3 || "Real-time payment tracking",
            description: cp?.carouselDesc3 || "Track every payment with full visibility and transparency."
        }
    ];

    // Hardcoded data for the FAQ section
    const faqData: FAQSection = {
        title: cp?.faqTitle || "Frequently Asked Questions",
        badge: "FAQ",
        subtitle: cp?.faqSubtitle || "Everything you need to know about our manufacturing payment services.",
        faqs: [
            {
                question: "How can Norxio help my manufacturing business?",
                answer: "Norxio provides multi-currency accounts, competitive FX rates, and streamlined payment solutions that help manufacturers pay suppliers faster, reduce currency conversion costs, and improve cash flow management."
            },
            {
                question: "Can I pay suppliers in their local currency?",
                answer: "Yes, with Norxio you can pay suppliers in over 50 currencies. This helps you negotiate better terms and avoid costly currency conversions for your vendors."
            },
            {
                question: "How do you handle large B2B payments?",
                answer: "We specialize in high-value B2B transactions with competitive rates, real-time tracking, and dedicated support for enterprise-level payment volumes."
            },
            {
                question: "Do you support automated payments?",
                answer: "Yes, our API allows you to automate recurring supplier payments, batch processing, and integrate directly with your ERP or procurement systems."
            },
            {
                question: "What is trade finance and how can it help?",
                answer: "Trade finance solutions help bridge the gap between paying suppliers and receiving payment from customers, improving your working capital and enabling larger orders."
            },
            {
                question: "Is there support for multiple subsidiaries?",
                answer: "Absolutely. Norxio supports multi-entity structures with consolidated reporting, individual account access, and centralized treasury management."
            }
        ]
    };

    const [activeIndex, setActiveIndex] = useState(1);

    const nextSlide = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % carouselCards.length);
    }, [carouselCards.length]);

    useEffect(() => {
        const interval = setInterval(nextSlide, 4000);
        return () => clearInterval(interval);
    }, [nextSlide]);

    const getCardStyles = (index: number) => {
        const diff = index - activeIndex;
        const normalizedDiff = ((diff + carouselCards.length) % carouselCards.length);

        if (normalizedDiff === 0) {
            return { zIndex: 30, transform: "translateX(0) scale(1)", opacity: 1 };
        } else if (normalizedDiff === 1) {
            return { zIndex: 20, transform: "translateX(60%) scale(0.85)", opacity: 1 };
        } else {
            return { zIndex: 20, transform: "translateX(-60%) scale(0.85)", opacity: 1 };
        }
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
                                <span className="text-xs sm:text-sm font-medium">{cp?.badge || "Supply Chain Payments"}</span>
                            </div>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                                {cp?.title || "Manufacturing & Supply Chain"}
                            </h1>
                            <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 lg:mb-10 max-w-xl leading-relaxed">
                                {cp?.subtitle || "Streamline supplier payments, manage multi-currency transactions, and optimize your global supply chain with seamless cross-border payment solutions."}
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

            {/* 3. Card Carousel Section */}
            <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#f5f7fa] overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative h-[400px] sm:h-[450px] md:h-[500px] flex items-center justify-center">
                        <div className="relative w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px] h-[360px] sm:h-[400px] md:h-[450px]">
                            {carouselCards.map((card, index) => {
                                const styles = getCardStyles(index);
                                return (
                                    <div key={card.id} className="absolute inset-0 w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl cursor-pointer transition-all duration-500 ease-out"
                                        style={{ zIndex: styles.zIndex, transform: styles.transform, opacity: styles.opacity }}
                                        onClick={() => setActiveIndex(index)}>
                                        <Image src={card.image} alt={card.title} fill className="object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                                        <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-6 md:p-8">
                                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight max-w-[80%]">{card.title}</h3>
                                            <p className="text-white/80 text-sm sm:text-base leading-relaxed">{card.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="flex justify-center gap-2 mt-6 sm:mt-8">
                        {carouselCards.map((_, index) => (
                            <button key={index} onClick={() => setActiveIndex(index)}
                                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 cursor-pointer ${index === activeIndex ? "bg-brand-blue scale-110" : "bg-gray-300 hover:bg-gray-400"}`}
                                aria-label={`Go to slide ${index + 1}`} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Optimize Your Supply Chain Payments Section */}
            <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
                        <div className="relative order-2 lg:order-1">
                            <div className="relative w-full aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden">
                                <Image src="/images/customers/manufacturing/section1.jpg" alt="Manufacturing Facility" fill className="object-cover" />
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-4 sm:mb-6 leading-tight">
                                {cp?.section1Title || "Optimize Your Supply Chain Payments"}
                            </h2>
                            <p className="text-lg sm:text-xl text-[#1e3a5f] font-medium mb-4">
                                {cp?.section1Subtitle || "Built for global manufacturers"}
                            </p>
                            <p className="text-slate-600 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                                {cp?.section1Desc1 || "Managing payments across a global supply chain is complex. Norxio simplifies multi-currency transactions, helping you pay suppliers efficiently anywhere in the world."}
                            </p>
                            <p className="text-slate-600 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                                {cp?.section1Desc2 || "Our platform provides the tools you need to manage payments at scale, with competitive FX rates and transparent pricing."}
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

            {/* 5. Power Your Global Manufacturing Section */}
            <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
                <div className="absolute inset-0">
                    <Image src="/images/customers/manufacturing/section2.jpg" alt="Supply Chain Background" fill className="object-cover" />
                    <div className="absolute inset-0 bg-[#0B2545]/85" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif italic text-white mb-4 sm:mb-6 leading-tight">
                        {cp?.bannerTitle || "Power Your Global Manufacturing"}
                    </h2>
                    <p className="text-blue-100/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        {cp?.bannerSubtitle || "Accelerate your supply chain with faster, more reliable cross-border payments."}
                    </p>
                </div>
            </section>

            {/* 6. Scale Your Operations Globally Section */}
            <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#f5f7fa]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
                        <div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-4 sm:mb-6 leading-tight">
                                {cp?.section2Title || "Scale Your Operations Globally"}
                            </h2>
                            <p className="text-lg sm:text-xl text-[#1e3a5f] font-medium mb-4">
                                {cp?.section2Subtitle || "Built for growth"}
                            </p>
                            <p className="text-slate-600 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                                {cp?.section2Desc1 || "As your manufacturing operations expand, your payment infrastructure needs to keep up. Norxio grows with you, supporting payments in new markets seamlessly."}
                            </p>
                            <p className="text-slate-600 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                                {cp?.section2Desc2 || "From paying a single supplier to managing thousands of transactions, our platform handles the complexity so you can focus on what you do best."}
                            </p>
                            <Link href="/get-started">
                                <Button className="bg-brand-blue hover:bg-brand-blue-hover text-white rounded-full py-5 sm:py-6 px-6 sm:px-8 font-medium text-sm sm:text-base cursor-pointer shadow-sm hover:shadow-md transition-all">
                                    {common?.getStarted || "Get Started"}
                                </Button>
                            </Link>
                        </div>
                        <div className="relative">
                            <div className="relative w-full aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden">
                                <Image src="/images/customers/manufacturing/section3.jpg" alt="Manufacturing Team" fill className="object-cover" />
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
