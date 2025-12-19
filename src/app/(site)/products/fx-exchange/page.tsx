import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import FAQ from "@/components/sections/FAQ";
import { FAQSection } from "@/lib/types";
import { ArrowDownUp, ShieldCheck, Clock, Headphones } from "lucide-react";

// FAQ Data
const faqData: FAQSection = {

    title: "Frequently Asked Questions",
    badge: "FAQ",
    subtitle: "Common questions about our currency exchange services.",
    faqs: [
        {
            question: "What is the FX rate?",
            answer: "We use the mid-market rate—the one you see on Google—and apply a small, transparent fee. No hidden markups."
        },
        {
            question: "Can individuals use private connections?",
            answer: "Yes, our services are available for both individuals and businesses looking for competitive exchange rates."
        },
        {
            question: "Does national currency devaluation affect me?",
            answer: "It can. Holding multiple currencies helps hedge against devaluation risks in your local currency."
        },
        {
            question: "Is there a limit on how much I can exchange?",
            answer: "Limits vary by verification level and currency pair. Enterprise accounts usually have custom high limits."
        },
        {
            question: "Are these rates guaranteed?",
            answer: "Rates are live and locked in for a specific timeframe once you start a transaction."
        },
        {
            question: "Is currency FX transaction safe?",
            answer: "Absolutely. We are regulated and use bank-grade security to protect your funds and data."
        },
        {
            question: "What currencies can I exchange?",
            answer: "We support over 50 major and exotic currencies including USD, EUR, GBP, JPY, CAD, AUD, and more."
        },
        {
            question: "Can individuals and small money transfer use?",
            answer: "Yes, our platform is designed to scale from small personal transfers to large corporate treasury operations."
        },
        {
            question: "Do I get live / demo exchange rates?",
            answer: "Yes, you can see live exchange rates in your dashboard before you commit to any trade."
        },
        {
            question: "Does Norxio account business to business FX?",
            answer: "Yes, B2B payments and FX are a core part of our offering, allowing you to pay suppliers globally."
        }
    ]
};

export default function FxExchangePage() {
    return (
        <div className="bg-white">
            {/* 1. Hero Section */}
            <section className="relative bg-[#1e3a5f] text-white overflow-hidden py-20 lg:py-28">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f] to-[#2b5285] z-0" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Left Content */}
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/10">
                                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                                <span className="text-sm font-medium">Fx Exchange</span>
                            </div>
                            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                                Exchange Currencies Effortlessly
                            </h1>
                            <p className="text-lg text-blue-100 mb-8 max-w-xl leading-relaxed">
                                Save on every transaction with real-time rates and low, transparent fees. The smarter way to exchange.
                            </p>
                            <div className="flex gap-4">
                                <Button className="bg-white text-[#1e3a5f] hover:bg-blue-50 text-base py-6 px-8 rounded-full font-semibold">
                                    Get Started
                                </Button>
                                <Button variant="outline" className="border-white text-white hover:bg-white/10 text-base py-6 px-8 rounded-full bg-transparent">
                                    View Demo
                                </Button>
                            </div>
                        </div>

                        {/* Right Calculator Card */}
                        <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-md w-full ml-auto text-slate-800">
                            <h3 className="text-lg font-semibold mb-6">Make a conversion</h3>

                            <div className="space-y-4">
                                {/* You Send */}
                                <div className="space-y-2">
                                    <label className="text-sm text-slate-500 font-medium">You send</label>
                                    <div className="relative">
                                        <Input
                                            type="number"
                                            defaultValue="1000"
                                            className="pr-24 h-12 text-lg font-semibold border-slate-200 focus:ring-blue-500"
                                        />
                                        <div className="absolute right-1 top-1 bottom-1 flex items-center gap-1 px-2 bg-slate-100 rounded hover:bg-slate-200 cursor-pointer transition-colors">
                                            <Image src="https://flagcdn.com/w20/gb.png" alt="GBP" width={20} height={15} className="rounded-sm" />
                                            <span className="font-semibold text-sm">GBP</span>
                                            <ArrowDownUp className="w-3 h-3 text-slate-400" />
                                        </div>
                                    </div>
                                </div>

                                {/* Rate Details */}
                                <div className="pl-4 border-l-2 border-slate-100 py-2 my-2 space-y-2 relative">
                                    {/* Decorator Line with Icon */}
                                    <div className="absolute -left-[9px] top-1/2 -translate-y-1/2 w-4 h-4 bg-slate-100 rounded-full flex items-center justify-center border-2 border-white">
                                        <ArrowDownUp className="w-2 h-2 text-slate-500" />
                                    </div>

                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-500">Fees (0.5%)</span>
                                        <span className="font-medium">- 5.00 GBP</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-500">Amount to convert</span>
                                        <span className="font-medium">995.00 GBP</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-500">Guaranteed rate</span>
                                        <span className="font-medium text-blue-600">1 GBP = 1.25 USD</span>
                                    </div>
                                </div>

                                {/* You Receive */}
                                <div className="space-y-2">
                                    <label className="text-sm text-slate-500 font-medium">You receive</label>
                                    <div className="relative">
                                        <Input
                                            type="number"
                                            defaultValue="1243.75"
                                            readOnly
                                            className="pr-24 h-12 text-lg font-semibold border-slate-200 bg-slate-50 focus:ring-blue-500"
                                        />
                                        <div className="absolute right-1 top-1 bottom-1 flex items-center gap-1 px-2 bg-white rounded border border-slate-200 shadow-sm cursor-pointer">
                                            <Image src="https://flagcdn.com/w20/us.png" alt="USD" width={20} height={15} className="rounded-sm" />
                                            <span className="font-semibold text-sm">USD</span>
                                            <ArrowDownUp className="w-3 h-3 text-slate-400" />
                                        </div>
                                    </div>
                                </div>

                                <Button className="w-full bg-[#2563EB] hover:bg-blue-600 text-white rounded-lg py-6 text-base font-semibold mt-4 shadow-lg shadow-blue-500/25">
                                    Convert now
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Stats Strip */}
            <div className="bg-[#F5F7FA] border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-medium text-slate-600">
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5 text-blue-600" />
                            <span>Multi-Currency Wallet Support</span>
                        </div>
                        <div className="hidden md:block w-1 h-1 bg-slate-300 rounded-full"></div>
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5 text-blue-600" />
                            <span>Bank-Beating Exchange Rates</span>
                        </div>
                        <div className="hidden md:block w-1 h-1 bg-slate-300 rounded-full"></div>
                        <div className="flex items-center gap-2">
                            <Headphones className="w-5 h-5 text-blue-600" />
                            <span>24/7 Global Support</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Feature 1: Optimize Every Currency Exchange */}
            <section className="py-20 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-[2rem] p-8 lg:p-12 shadow-sm border border-slate-100">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="relative h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden">
                                <Image
                                    src="/images/exchange/exchange-1.jpg"
                                    alt="Optimize Exchange"
                                    fill
                                    className=" object-cover"
                                />
                            </div>
                            <div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a5f] mb-6">
                                    Optimize Every Currency Exchange
                                </h2>
                                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                    Save on transfers and international bookings with exchange rates that beat the banks. We track the markets so you can trade at the perfect moment.
                                </p>
                                <Button className="bg-[#2563EB] hover:bg-blue-700 text-white rounded-full py-6 px-8">
                                    View rates
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Feature 2: Stay Ahead (Alternating) */}
            <section className="py-20 lg:py-24 bg-[#F5F7FA]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-[2rem] p-8 lg:p-12 shadow-sm">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="order-2 lg:order-1">
                                <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a5f] mb-6">
                                    Stay Ahead of Every Currency Move
                                </h2>
                                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                    Set up rate alerts and auto-conversions. Never miss a favorable rate again with our advanced monitoring tools designed for businesses and individuals alike.
                                </p>
                                <Button className="bg-[#2563EB] hover:bg-blue-700 text-white rounded-full py-6 px-8">
                                    Get started
                                </Button>
                            </div>
                            <div className="relative order-1 lg:order-2 h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden">
                                <Image
                                    src="/images/exchange/exchange-2.jpg"
                                    alt="Stay Ahead"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Feature 3: Transparent Rates */}
            <section className="py-20 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-[2rem] p-8 lg:p-12 shadow-sm border border-slate-100">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="relative h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden">
                                <Image
                                    src="/images/exchange/exchange-3.jpg"
                                    alt="Transparent Rates"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-100 text-red-600 rounded-full mb-6">
                                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                                    <span className="text-xs font-bold uppercase tracking-wide">Live FX</span>
                                </div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a5f] mb-6">
                                    Transparent Rates, Instant Conversions
                                </h2>
                                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                    See the exact rate and fee before you convert. No surprises, just fast and secure exchanges at the click of a button.
                                </p>
                                <Button className="bg-[#2563EB] hover:bg-blue-700 text-white rounded-full py-6 px-8">
                                    Start now
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. World Map: See the World in FX */}
            <section className="py-20 lg:py-24 bg-[#0B2545] text-white relative overflow-hidden">
                {/* Map Background */}
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image
                        src="/images/exchange/map-base.svg"
                        alt="World Map"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                        See the World in FX
                    </h2>
                    <p className="text-blue-100 text-lg lg:text-xl max-w-2xl mx-auto">
                        Global coverage with local expertise. Trade in over 100+ countries with confidence.
                    </p>
                </div>
            </section>

            {/* 7. FAQ Section */}
            <FAQ data={faqData} className="bg-[#F5F7FA]" />
        </div>
    );
}
