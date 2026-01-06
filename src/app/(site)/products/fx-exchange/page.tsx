"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import FAQ from "@/components/sections/FAQ";
import { FAQSection } from "@/lib/types";
import { ArrowDownUp, ShieldCheck, Clock, Headphones, TrendingUp } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

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

// Currencies supported by Fixer.io free tier (EUR is the base currency)
// Including major world currencies with their country codes for flags
const currencies = [
    { code: "EUR", name: "Euro", flag: "eu" },
    { code: "USD", name: "US Dollar", flag: "us" },
    { code: "GBP", name: "British Pound", flag: "gb" },
    { code: "JPY", name: "Japanese Yen", flag: "jp" },
    { code: "AUD", name: "Australian Dollar", flag: "au" },
    { code: "CAD", name: "Canadian Dollar", flag: "ca" },
    { code: "CHF", name: "Swiss Franc", flag: "ch" },
    { code: "CNY", name: "Chinese Yuan", flag: "cn" },
    { code: "INR", name: "Indian Rupee", flag: "in" },
    { code: "NZD", name: "New Zealand Dollar", flag: "nz" },
    { code: "SGD", name: "Singapore Dollar", flag: "sg" },
    { code: "HKD", name: "Hong Kong Dollar", flag: "hk" },
    { code: "KRW", name: "South Korean Won", flag: "kr" },
    { code: "MXN", name: "Mexican Peso", flag: "mx" },
    { code: "BRL", name: "Brazilian Real", flag: "br" },
    { code: "ZAR", name: "South African Rand", flag: "za" },
    { code: "SEK", name: "Swedish Krona", flag: "se" },
    { code: "NOK", name: "Norwegian Krone", flag: "no" },
    { code: "DKK", name: "Danish Krone", flag: "dk" },
    { code: "PLN", name: "Polish Zloty", flag: "pl" },
    { code: "THB", name: "Thai Baht", flag: "th" },
    { code: "AED", name: "UAE Dirham", flag: "ae" },
    { code: "SAR", name: "Saudi Riyal", flag: "sa" },
    { code: "TRY", name: "Turkish Lira", flag: "tr" },
    { code: "RUB", name: "Russian Ruble", flag: "ru" },
    { code: "PHP", name: "Philippine Peso", flag: "ph" },
    { code: "IDR", name: "Indonesian Rupiah", flag: "id" },
    { code: "MYR", name: "Malaysian Ringgit", flag: "my" },
    { code: "CZK", name: "Czech Koruna", flag: "cz" },
    { code: "HUF", name: "Hungarian Forint", flag: "hu" },
];

export default function FxExchangePage() {
    // Default: 25,000 USD -> EUR
    const [amount, setAmount] = useState<string>("25000");
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("EUR");

    // Results
    const [result, setResult] = useState<number | null>(null);
    const [rate, setRate] = useState<number | null>(null);
    const [error, setError] = useState<string | null>(null);

    // Auto-convert logic
    useEffect(() => {
        // Debounce to avoid spamming API while typing
        const timer = setTimeout(() => {
            handleConvert();
        }, 500);

        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [amount, fromCurrency, toCurrency]);

    const handleConvert = async () => {
        if (!amount || parseFloat(amount) <= 0) return;

        setError(null);

        try {
            const response = await fetch('/api/fx-exchange', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    from: fromCurrency,
                    to: toCurrency,
                    amount: parseFloat(amount)
                }),
            });

            const data = await response.json();

            if (data.success) {
                setResult(data.result);
                setRate(data.info?.rate || (data.result / parseFloat(amount)));
                setError(null);
            } else {
                console.error("Conversion error:", data.error);
                setError(data.error || "Failed to convert currency. Please try again.");
                setResult(null);
                setRate(null);
            }
        } catch (err) {
            console.error("Network error:", err);
            setError("Network error. Please check your connection and try again.");
            setResult(null);
            setRate(null);
        }
    };

    // Calculate fees (mock 0.3%)
    const feePercentage = 0.003;
    const feeAmount = amount ? (parseFloat(amount) * feePercentage).toFixed(2) : "0.00";
    const amountAfterFee = amount ? (parseFloat(amount) - parseFloat(feeAmount)) : 0;

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
                                <Link href="/get-started">
                                    <Button className="bg-white text-[#1e3a5f] hover:bg-blue-50 text-base py-6 px-8 rounded-full font-semibold">
                                        Get Started
                                    </Button>
                                </Link>
                                <Link href="/get-started">
                                    <Button variant="outline" className="border-white text-white hover:bg-white/10 text-base py-6 px-8 rounded-full bg-transparent">
                                        View Demo
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Right Calculator Card */}
                        <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-md w-full ml-auto text-slate-800">
                            <h3 className="text-lg font-semibold mb-6">Business FX & Global Payouts</h3>

                            <div className="space-y-4">
                                {/* You Send */}
                                <div className="space-y-2">
                                    <label className="text-sm text-slate-500 font-medium">You send</label>
                                    <div className="relative flex">
                                        <Input
                                            type="number"
                                            value={amount}
                                            onChange={(e) => setAmount(e.target.value)}
                                            className="pr-32 h-14 text-lg font-semibold border-slate-200 focus:ring-blue-500 rounded-r-none border-r-0"
                                            placeholder="1000"
                                        />
                                        <div className="bg-slate-50 border border-l-0 border-slate-200 rounded-r-md flex items-center min-w-[110px]">
                                            <Select value={fromCurrency} onValueChange={setFromCurrency}>
                                                <SelectTrigger className="h-full border-0 bg-transparent focus:ring-0 px-3 gap-2">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent className="max-h-[280px]">
                                                    {currencies.map((c) => (
                                                        <SelectItem key={c.code} value={c.code}>
                                                            <div className="flex items-center gap-2">
                                                                <Image
                                                                    src={`https://flagcdn.com/w20/${c.flag}.png`}
                                                                    alt={c.code}
                                                                    width={20}
                                                                    height={15}
                                                                    className=" object-cover"
                                                                />
                                                                <span className="font-semibold">{c.code}</span>
                                                            </div>
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
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
                                        <span className="text-slate-500">Fees (0.3%)</span>
                                        <span className="font-medium">- {feeAmount} {fromCurrency}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-500">Amount to convert</span>
                                        <span className="font-medium">{amountAfterFee.toFixed(2)} {fromCurrency}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-500">Locked FX Rate</span>
                                        <span className="font-medium text-blue-600">
                                            {rate ? `1 ${fromCurrency} = ${rate.toFixed(4)} ${toCurrency}` : "-"}
                                        </span>
                                    </div>
                                </div>

                                {/* You Receive */}
                                <div className="space-y-2">
                                    <label className="text-sm text-slate-500 font-medium">Beneficiary Receives</label>
                                    <div className="relative flex">
                                        <Input
                                            type="text"
                                            value={result ? result.toFixed(2) : "---"}
                                            readOnly
                                            className="pr-32 h-14 text-lg font-semibold border-slate-200 bg-slate-50 focus:ring-blue-500 rounded-r-none border-r-0"
                                        />
                                        <div className="bg-white border border-l-0 border-slate-200 rounded-r-md flex items-center min-w-[110px]">
                                            <Select value={toCurrency} onValueChange={setToCurrency}>
                                                <SelectTrigger className="h-full border-0 bg-transparent focus:ring-0 px-3 gap-2">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent className="max-h-[280px]">
                                                    {currencies.map((c) => (
                                                        <SelectItem key={c.code} value={c.code}>
                                                            <div className="flex items-center gap-2">
                                                                <Image
                                                                    src={`https://flagcdn.com/w20/${c.flag}.png`}
                                                                    alt={c.code}
                                                                    width={20}
                                                                    height={15}
                                                                    className=" object-cover"
                                                                />
                                                                <span className="font-semibold">{c.code}</span>
                                                            </div>
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                </div>

                                {error && (
                                    <div className="text-red-500 text-sm bg-red-50 p-2 rounded">
                                        {error}
                                    </div>
                                )}

                                <Button
                                    asChild
                                    className="w-full bg-[#2563EB] hover:bg-blue-600 text-white rounded-lg py-6 text-base font-semibold mt-4 shadow-lg shadow-blue-500/25 transition-all"
                                >
                                    <Link href="/get-started">
                                        Start Transfer
                                    </Link>
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
                            <TrendingUp className="w-5 h-5 text-blue-600" />
                            <span>Real time settlement</span>
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
                                <Link href="/get-started">
                                    <Button className="bg-[#2563EB] hover:bg-blue-700 text-white rounded-full py-6 px-8">
                                        View rates
                                    </Button>
                                </Link>
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
                                <Link href="/get-started">
                                    <Button className="bg-[#2563EB] hover:bg-blue-700 text-white rounded-full py-6 px-8">
                                        Get started
                                    </Button>
                                </Link>
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
                                <Link href="/get-started">
                                    <Button className="bg-[#2563EB] hover:bg-blue-700 text-white rounded-full py-6 px-8">
                                        Start now
                                    </Button>
                                </Link>
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
