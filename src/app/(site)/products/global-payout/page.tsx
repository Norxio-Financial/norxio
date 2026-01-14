import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Globe,
    Zap,
    ShieldCheck,
    CreditCard,
} from "lucide-react";
import FAQ from "@/components/sections/FAQ";
import { FAQSection } from "@/lib/types";

// Hardcoded data for the FAQ section to match the design style
const faqData: FAQSection = {

    title: "Frequently Asked Questions",
    badge: "FAQ",
    subtitle: "Everything you need to know about our global payout services.",
    faqs: [
        {
            question: "How fast are global payouts?",
            answer: "Most payouts are processed instantly or within the same business day, depending on the destination country and currency."
        },
        {
            question: "What currencies do you support?",
            answer: "We support payouts in over 160+ countries and 50+ currencies including USD, EUR, GBP, INR, and many more."
        },
        {
            question: "Are there any hidden fees?",
            answer: "No, we believe in full transparency. You only pay the transaction fee displayed upfront before you send money."
        },
        {
            question: "Is my money safe?",
            answer: "Yes, we use bank-grade encryption and are fully regulated in all jurisdictions where we operate to ensure your funds are secure."
        },
        {
            question: "Can businesses automate payouts?",
            answer: "Yes, our API allows businesses to automate bulk payouts directly from their own systems."
        },
        {
            question: "Do you offer bulk upload support?",
            answer: "Absolutely. You can upload a CSV file to process thousands of payments in a single click."
        },
        {
            question: "Is there a limit on transactions?",
            answer: "Limits depend on your account tier and verification level. Enterprise accounts have custom high-volume limits."
        },
        {
            question: "Can businesses use local payout?",
            answer: "Yes, we utilize local payment rails (like ACH, SEPA, UPI) to ensure low-cost and fast delivery."
        }
    ]
};

export default function GlobalPayoutPage() {
    return (
        <div className="bg-white">
            {/* 1. Hero Section */}
            <section className="relative h-[450px] sm:h-[500px] md:h-[600px] lg:h-[700px] w-full overflow-hidden">
                <Image
                    src="/images/payout/hero-payout.jpg"
                    alt="Global Payouts Hero"
                    fill
                    className="object-cover object-center"
                    priority
                />
                {/* Gradient Overlay */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background: "linear-gradient(90deg, #052c54 0%, #052c54 5%, rgba(5, 44, 84, 0.8) 25%, rgba(5, 44, 84, 0) 100%)",
                    }}
                />
                {/* Mobile overlay */}
                <div className="absolute inset-0 z-0 bg-[#052c54]/50 sm:bg-transparent" />

                <div className="absolute inset-0 flex items-center z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <div className="max-w-2xl text-white">
                            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 bg-white/10 backdrop-blur-md rounded-full mb-4 sm:mb-6 border border-white/10">
                                <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-blue-400 rounded-full"></span>
                                <span className="text-xs sm:text-sm font-medium">Global Payouts</span>
                            </div>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                                Send Payments Globally, Hassle-Free
                            </h1>
                            <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 lg:mb-10 max-w-xl leading-relaxed">
                                Send money to over 160+ countries with low fees, real-time tracking, and zero hidden charges.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                <Link href="/get-started">
                                    <Button className="bg-white text-blue-900 hover:bg-blue-50 text-sm sm:text-base py-4 sm:py-5 lg:py-6 px-6 sm:px-7 lg:px-8 rounded-full font-semibold w-full sm:w-auto">
                                        Start for free
                                    </Button>
                                </Link>
                                <Link href="/get-started">
                                    <Button variant="outline" className="border-white text-white hover:bg-white/10 text-sm sm:text-base py-4 sm:py-5 lg:py-6 px-6 sm:px-7 lg:px-8 rounded-full bg-transparent w-full sm:w-auto">
                                        Get Started
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Send Money Section */}
            <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-blue-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-20 items-center">
                        <div className="relative order-2 lg:order-1">
                            <div className="relative w-full aspect-square max-w-[300px] sm:max-w-[400px] md:max-w-[500px] mx-auto">
                                <Image
                                    src="/images/payout/world.png"
                                    alt="Global Coverage"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-4 sm:mb-6 leading-tight">
                                Send Money to 160+ Countries with Ease
                            </h2>
                            <p className="text-slate-600 text-base sm:text-lg mb-4 sm:mb-6 lg:mb-8 leading-relaxed max-w-lg">
                                Norxio simplifies cross-border payments. businesses sending funds to employees, freelancers, or suppliers abroad.
                            </p>
                            <p className="text-slate-600 text-base sm:text-lg mb-6 sm:mb-8 lg:mb-10 leading-relaxed max-w-lg">
                                Our platform ensures you get the best exchange rates and lowest fees, making global payouts as simple as local transfers.
                            </p>
                            <Link href="/get-started">
                                <Button className="bg-brand-blue hover:bg-brand-blue-hover text-white rounded-full py-4 sm:py-5 lg:py-6 px-6 sm:px-8 font-medium text-sm sm:text-base shadow-sm hover:shadow-md transition-all">
                                    Get Started
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Global Payments Simplified (Dark Blue) */}
            <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#0B2545] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
                        <div className="lg:sticky lg:top-24">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                                Global Payments, Simplified
                            </h2>
                            <p className="text-blue-100 text-base sm:text-lg leading-relaxed max-w-md">
                                Everything you need to manage international transactions with speed, transparency, and control.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            {/* Card 1 */}
                            <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 hover:-translate-y-1 transition-transform duration-300">
                                <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-blue-50 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-5 md:mb-6 text-blue-600">
                                    <Globe className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6" />
                                </div>
                                <h3 className="text-[#0B2545] font-bold text-base sm:text-lg md:text-xl mb-2 sm:mb-3">Multi-Currency Coverage</h3>
                                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                                    Send, hold, and convert money in over 50 currencies with real-time exchange rates.
                                </p>
                            </div>
                            {/* Card 2 */}
                            <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 hover:-translate-y-1 transition-transform duration-300">
                                <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-blue-50 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-5 md:mb-6 text-blue-600">
                                    <Zap className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6" />
                                </div>
                                <h3 className="text-[#0B2545] font-bold text-base sm:text-lg md:text-xl mb-2 sm:mb-3">Transparent Fees</h3>
                                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                                    No hidden markups. See exactly what you pay and what your recipient gets upfront.
                                </p>
                            </div>
                            {/* Card 3 */}
                            <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 hover:-translate-y-1 transition-transform duration-300">
                                <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-blue-50 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-5 md:mb-6 text-blue-600">
                                    <ShieldCheck className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6" />
                                </div>
                                <h3 className="text-[#0B2545] font-bold text-base sm:text-lg md:text-xl mb-2 sm:mb-3">Safe & Secure</h3>
                                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                                    Bank-grade security and compliance ensuring your money is always protected.
                                </p>
                            </div>
                            {/* Card 4 */}
                            <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 hover:-translate-y-1 transition-transform duration-300">
                                <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-blue-50 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-5 md:mb-6 text-blue-600">
                                    <CreditCard className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6" />
                                </div>
                                <h3 className="text-[#0B2545] font-bold text-base sm:text-lg md:text-xl mb-2 sm:mb-3">Flexible Options</h3>
                                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                                    Payouts to bank accounts, mobile wallets, or cards—whatever suits your needs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Built for Global Payouts */}
            <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#F5F7FA]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 sm:mb-12 md:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-3 sm:mb-4">
                            Built for Global Payouts
                        </h2>
                        <p className="text-slate-500 max-w-2xl mx-auto text-base sm:text-lg px-4">
                            Send and manage payouts worldwide with ease.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-stretch">
                        {/* 1. Multi-currency (Light) */}
                        <div className="bg-[#eff4f9] rounded-[1.5rem] sm:rounded-[2rem] p-5 sm:p-6 md:p-8 h-[320px] sm:h-[380px] md:h-[420px] flex flex-col relative overflow-hidden group hover:bg-[#002f5b] transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
                            <div className="relative z-10">
                                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#1e3a5f] mb-2 sm:mb-3 leading-tight group-hover:text-white transition-colors duration-300">Multi-currency accounts</h3>
                                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed group-hover:text-blue-100 transition-colors duration-300">Hold and manage money in multiple global currencies.</p>
                            </div>
                            <div className="absolute top-28 sm:top-36 left-0 w-full h-full transition-transform duration-500 group-hover:scale-105">
                                <Image src="/images/payout/payout-1.png" alt="Multi-currency" fill className="object-contain object-top scale-110" />
                            </div>
                        </div>

                        {/* 2. Global Payments */}
                        <div className="bg-[#eff4f9] rounded-[1.5rem] sm:rounded-[2rem] p-5 sm:p-6 md:p-8 h-[320px] sm:h-[380px] md:h-[420px] flex flex-col relative overflow-hidden group hover:bg-[#002f5b] transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
                            <div className="relative z-10">
                                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#1e3a5f] mb-2 sm:mb-3 leading-tight group-hover:text-white transition-colors duration-300">Global payments</h3>
                                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed group-hover:text-blue-100 transition-colors duration-300">Send and receive funds across supported countries.</p>
                            </div>
                            <div className="absolute top-1/2 left-0 right-0 h-full transition-transform duration-500 group-hover:scale-[1.02]">
                                <Image src="/images/payout/world.png" alt="Global payments" fill className="object-cover object-top scale-150" />
                            </div>
                        </div>

                        {/* 3. Smart FX (Light) */}
                        <div className="bg-[#eff4f9] rounded-[1.5rem] sm:rounded-[2rem] p-5 sm:p-6 md:p-8 h-[320px] sm:h-[380px] md:h-[420px] flex flex-col relative overflow-hidden group hover:bg-[#002f5b] transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
                            <div className="relative z-10">
                                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#1e3a5f] mb-2 sm:mb-3 leading-tight group-hover:text-white transition-colors duration-300">Smart FX Conversion</h3>
                                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed group-hover:text-blue-100 transition-colors duration-300">Convert currencies instantly with competitive FX rates.</p>
                            </div>
                            <div className="absolute top-20 sm:top-24 left-0 right-0 h-full transition-transform duration-500 group-hover:scale-105">
                                <Image src="/images/payout/payout-3.png" alt="Smart FX" fill className="object-contain object-center scale-125" />
                            </div>
                        </div>

                        {/* 4. Cards (Light) */}
                        <div className="bg-[#eff4f9] rounded-[1.5rem] sm:rounded-[2rem] p-5 sm:p-6 md:p-8 h-[320px] sm:h-[380px] md:h-[420px] flex flex-col relative overflow-hidden group hover:bg-[#002f5b] transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
                            <div className="relative z-10">
                                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#1e3a5f] mb-2 sm:mb-3 leading-tight group-hover:text-white transition-colors duration-300">Virtual & physical cards</h3>
                                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed group-hover:text-blue-100 transition-colors duration-300">Create cards for teams and expenses.</p>
                            </div>
                            <div className="absolute top-1/3 left-0 w-full h-full transition-transform duration-500 group-hover:scale-105">
                                <Image src="/images/payout/payout-4.png" alt="Cards" fill className="object-contain object-center scale-110 translate-y-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Payments for Businesses */}
            <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 sm:mb-12 md:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-3 sm:mb-4">
                            Payments for Businesses
                        </h2>
                        <p className="text-slate-500 max-w-2xl mx-auto text-base sm:text-lg px-4">
                            Simplify cross-border transactions with transparency and control.
                        </p>
                    </div>

                    {/* Mobile Grid - Simpler 2 column layout */}
                    <div className="grid grid-cols-2 md:hidden gap-3 sm:gap-4">
                        {[
                            { src: "/images/payout/business-1.jpg", title: "E-commerce & Retail" },
                            { src: "/images/payout/business-2.jpg", title: "Freelancers & Agencies" },
                            { src: "/images/payout/business-4.jpg", title: "Education & eLearning" },
                            { src: "/images/payout/business-7.jpg", title: "Import & Export" },
                            { src: "/images/payout/business-5.jpg", title: "Healthcare" },
                            { src: "/images/payout/business-8.jpg", title: "Financial Services" },
                        ].map((item, idx) => (
                            <div key={idx} className="relative rounded-xl sm:rounded-2xl overflow-hidden group h-[140px] sm:h-[180px]">
                                <Image src={item.src} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center pb-3">
                                    <span className="text-white font-bold text-xs sm:text-sm drop-shadow-md text-center px-2">{item.title}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Desktop Masonry Grid */}
                    <div className="hidden md:flex flex-col md:flex-row gap-6">

                        {/* Column 1 */}
                        <div className="flex-1 flex flex-col gap-6">
                            {/* E-commerce & Retail */}
                            <div className="relative rounded-[2rem] overflow-hidden group h-[200px]">
                                <Image src="/images/payout/business-1.jpg" alt="E-commerce" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center pb-6">
                                    <span className="text-white font-bold text-lg drop-shadow-md">E-commerce & Retail</span>
                                </div>
                            </div>

                            {/* Freelancers & Agencies (Tall) */}
                            <div className="relative rounded-[2rem] overflow-hidden group h-[320px]">
                                <Image src="/images/payout/business-2.jpg" alt="Freelancers" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center pb-6">
                                    <span className="text-white font-bold text-lg drop-shadow-md">Freelancers & Agencies</span>
                                </div>
                            </div>

                            {/* Import & Export */}
                            <div className="relative rounded-[2rem] overflow-hidden group h-[200px]">
                                <Image src="/images/payout/business-3.jpg" alt="Import Export" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center pb-6">
                                    <span className="text-white font-bold text-lg drop-shadow-md">Real Estate</span>
                                </div>
                            </div>
                        </div>

                        {/* Column 2 */}
                        <div className="flex-1 flex flex-col gap-6">
                            {/* Education & eLearning */}
                            <div className="relative rounded-[2rem] overflow-hidden group h-[240px]">
                                <Image src="/images/payout/business-4.jpg" alt="Education" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center pb-6">
                                    <span className="text-white font-bold text-lg drop-shadow-md">Education & eLearning</span>
                                </div>
                            </div>

                            {/* Healthcare */}
                            <div className="relative rounded-[2rem] overflow-hidden group h-[240px]">
                                <Image src="/images/payout/business-7.jpg" alt="Healthcare" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center pb-6">
                                    <span className="text-white font-bold text-lg drop-shadow-md">Import & Export</span>
                                </div>
                            </div>

                            {/* Financial Services */}
                            <div className="relative rounded-[2rem] overflow-hidden group h-[200px]">
                                <Image src="/images/payout/business-9.jpg" alt="Financial" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center pb-6">
                                    <span className="text-white font-bold text-lg drop-shadow-md">Media & Creator Economy</span>
                                </div>
                            </div>
                        </div>

                        {/* Column 3 */}
                        <div className="flex-1 flex flex-col gap-6">
                            {/* Real Estate */}
                            <div className="relative rounded-[2rem] overflow-hidden group h-[200px]">
                                <Image src="/images/payout/business-5.jpg" alt="Real Estate" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center pb-6">
                                    <span className="text-white font-bold text-lg drop-shadow-md">Healthcare</span>
                                </div>
                            </div>

                            {/* Nonprofits & NGOs (Tall) */}
                            <div className="relative rounded-[2rem] overflow-hidden group h-[320px]">
                                <Image src="/images/payout/business-8.jpg" alt="Nonprofits" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center pb-6">
                                    <span className="text-white font-bold text-lg drop-shadow-md">Financial Services</span>
                                </div>
                            </div>

                            {/* Media & Creator Economy */}
                            <div className="relative rounded-[2rem] overflow-hidden group h-[200px]">
                                <Image src="/images/payout/business-6.jpg" alt="Creator Economy" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center pb-6">
                                    <span className="text-white font-bold text-lg drop-shadow-md">Non Profits & NGOs</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* 6. FAQ Section */}
            <FAQ data={faqData} className="bg-[#F5F7FA]" />

        </div>
    );
}
