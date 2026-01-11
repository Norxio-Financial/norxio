"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import FAQ from "@/components/sections/FAQ";
import { FAQSection } from "@/lib/types";
import { Globe, Zap, CreditCard, TrendingUp } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function HospitalityTravelEventsPage() {
    const { t } = useLanguage();
    const cp = t.customerPages?.hospitality;
    const common = t.customerPages?.common;

    // Feature data for the Built for Hospitality section
    const features = [
        {
            icon: CreditCard,
            title: cp?.feature1Title || "Booking Payments",
            description: cp?.feature1Desc || "Accept reservations and deposits in multiple currencies with instant confirmation."
        },
        {
            icon: Zap,
            title: cp?.feature2Title || "Same-day Settlements",
            description: cp?.feature2Desc || "Get funds quickly with same-day settlement in major corridors."
        },
        {
            icon: Globe,
            title: cp?.feature3Title || "Vendor Payouts",
            description: cp?.feature3Desc || "Pay suppliers, venues, and partners worldwide in their local currency."
        },
        {
            icon: TrendingUp,
            title: cp?.feature4Title || "Real-time FX Rates",
            description: cp?.feature4Desc || "Lock in competitive rates with full transparency on every transaction."
        }
    ];

    // Hardcoded data for the FAQ section
    const faqData: FAQSection = {
        title: cp?.faqTitle || "Frequently Asked Questions",
        badge: "FAQ",
        subtitle: cp?.faqSubtitle || "Everything you need to know about our hospitality and travel payment services.",
        faqs: [
            {
                question: "How can Norxio help my hospitality business?",
                answer: "Norxio provides multi-currency payment acceptance, fast settlements, and competitive FX rates specifically designed for hotels, travel agencies, and event management companies."
            },
            {
                question: "Can I accept bookings in multiple currencies?",
                answer: "Yes, with Norxio you can accept payments in over 50 currencies from guests worldwide. We handle the conversion automatically with transparent rates."
            },
            {
                question: "How fast are booking settlements?",
                answer: "We offer same-day settlements in major corridors, ensuring you have quick access to your funds without lengthy waiting periods."
            },
            {
                question: "Do you support payments to international vendors?",
                answer: "Absolutely. Pay venues, suppliers, and partners in their local currency across 180+ countries using local payment rails for faster processing."
            },
            {
                question: "Can I integrate with my booking system?",
                answer: "Yes, our API allows you to integrate payment processing directly with your property management system, booking engine, or event management platform."
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
                                <span className="text-xs sm:text-sm font-medium">{cp?.badge || "Hospitality Payments"}</span>
                            </div>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                                {cp?.title || "Hospitality, Travel & Events"}
                            </h1>
                            <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 lg:mb-10 max-w-xl leading-relaxed">
                                {cp?.subtitle || "Streamline payments for hotels, travel agencies, and event management with seamless booking collections and vendor payouts."}
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

            {/* 3. Built for Hospitality Section - WhyTrust Style */}
            <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#f5f7fa]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-8 sm:gap-10 lg:gap-16 items-start">
                        {/* Left Side - Sticky Title */}
                        <div className="lg:sticky lg:top-32">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white rounded-full shadow-sm mb-4 sm:mb-6">
                                <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#3173BD] rounded-full"></span>
                                <span className="text-xs sm:text-sm font-medium text-slate-600">{cp?.badge || "Hospitality Payments"}</span>
                            </div>

                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#1e3a5f] leading-tight mb-4 sm:mb-5">
                                {cp?.paymentsTitle || "Payments Built for Hospitality, Travel & Events"}
                            </h2>

                            <p className="text-slate-500 max-w-sm text-sm sm:text-base lg:text-lg leading-relaxed">
                                {cp?.paymentsSubtitle || "Purpose-built solutions for your industry."}
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

            {/* 4. Global Booking Payments Section */}
            <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
                        <div className="relative order-2 lg:order-1">
                            <div className="relative w-full aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden">
                                <Image src="/images/customers/hospitality/section1.jpg" alt="Hotel Booking" fill className="object-cover" />
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-4 sm:mb-6 leading-tight">
                                {cp?.section1Title || "Global Booking Payments"}
                            </h2>
                            <p className="text-lg sm:text-xl text-[#1e3a5f] font-medium mb-4">
                                {cp?.section1Subtitle || "Accept payments worldwide for bookings."}
                            </p>
                            <p className="text-slate-600 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                                {cp?.section1Desc1 || "Hotels, travel agencies, and event planners operate globally. Norxio helps you accept bookings and payments from customers worldwide in their preferred currency."}
                            </p>
                            <p className="text-slate-600 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                                {cp?.section1Desc2 || "Our platform provides real-time currency conversion, transparent fees, and instant confirmation for your customers."}
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

            {/* 5. Power Every Booking Banner Section */}
            <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
                <div className="absolute inset-0">
                    <Image src="/images/customers/hospitality/section2.jpg" alt="Travel Background" fill className="object-cover" />
                    <div className="absolute inset-0 bg-[#0B2545]/85" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif italic text-white mb-4 sm:mb-6 leading-tight">
                        {cp?.bannerTitle || "Power Every Booking with Norxio"}
                    </h2>
                    <p className="text-blue-100/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        {cp?.bannerSubtitle || "From hotel reservations to event tickets, make every payment seamless for your customers and your business."}
                    </p>
                </div>
            </section>

            {/* 6. Centralized Revenue Control Section */}
            <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#f5f7fa]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
                        <div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-4 sm:mb-6 leading-tight">
                                {cp?.section2Title || "Centralized Revenue Control"}
                            </h2>
                            <p className="text-lg sm:text-xl text-[#1e3a5f] font-medium mb-4">
                                {cp?.section2Subtitle || "Track and manage all flows on one platform."}
                            </p>
                            <p className="text-slate-600 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                                {cp?.section2Desc1 || "Manage all your payment flows from a single dashboard. Track bookings, monitor settlements, and reconcile payments effortlessly."}
                            </p>
                            <p className="text-slate-600 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                                {cp?.section2Desc2 || "Our flexible structure allows you to easily route funds, split payments between stakeholders, and maintain full control over your revenue."}
                            </p>
                            <Link href="/get-started">
                                <Button className="bg-[#2563EB] hover:bg-blue-700 text-white rounded-lg py-5 sm:py-6 px-6 sm:px-8 font-medium text-sm sm:text-base cursor-pointer">
                                    {common?.getStarted || "Get Started"}
                                </Button>
                            </Link>
                        </div>
                        <div className="relative">
                            <div className="relative w-full aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden">
                                <Image src="/images/customers/hospitality/section3.jpg" alt="Revenue Dashboard" fill className="object-cover" />
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
