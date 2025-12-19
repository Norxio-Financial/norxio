import Image from "next/image";
import { Button } from "@/components/ui/button";
import FAQ from "@/components/sections/FAQ";
import { FAQSection } from "@/lib/types";


// FAQ Data
const faqData: FAQSection = {

    title: "Frequently Asked Questions",
    badge: "FAQ",
    subtitle: "Get quick answers to the most common questions about our multi-currency accounts.",
    faqs: [
        {
            question: "What currencies can I hold in my account?",
            answer: "You can hold over 30 global currencies including USD, EUR, GBP, CAD, AUD, JPY, and many more, all in a single account."
        },
        {
            question: "How much does it cost to open an account?",
            answer: "Opening a multi-currency account is free. There are no monthly maintenance fees for standard accounts."
        },
        {
            question: "Is my money safe?",
            answer: "Yes, we use bank-grade encryption and safeguard your funds with regulated financial institutions."
        },
        {
            question: "Can I receive payments in foreign currencies?",
            answer: "Absolutely. You get unique account details (IBAN, routing number, etc.) to receive local payments in key currencies like USD, EUR, and GBP."
        },
        {
            question: "Are the exchange rates competitive?",
            answer: "We offer real-time, mid-market exchange rates with low, transparent fees, often much cheaper than traditional banks."
        },
        {
            question: "Can I issue cards for my team?",
            answer: "Yes, you can issue unlimited virtual and physical corporate cards linked to your multi-currency balances."
        },
        {
            question: "How fast are transfers?",
            answer: "Transfers between Norxio and other accounts are instant. International payouts typically arrive within 1 business day."
        },
        {
            question: "Do you offer API access?",
            answer: "Yes, our robust API allows you to automate payments, currency conversions, and reconciliation."
        }
    ]
};

export default function MultiCurrencyAccountPage() {
    return (
        <div className="bg-white">
            {/* 1. Hero Section */}
            <section className="relative h-[600px] lg:h-[700px] w-full overflow-hidden">
                <Image
                    src="/images/currency/hero-currency.jpg"
                    alt="Multi Currency Hero"
                    fill
                    className="object-cover object-center"
                    priority
                />
                {/* Gradient Overlay */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background: "linear-gradient(90deg, #052c54 0%, #052c54 10%, rgba(5, 44, 84, 0.6) 40%, rgba(5, 44, 84, 0) 100%)",
                    }}
                />

                <div className="absolute inset-0 flex items-center z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <div className="max-w-2xl text-white">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/10">
                                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                                <span className="text-sm font-medium">Multi-Currency Account</span>
                            </div>
                            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                                Send Payments Globally, Hassle-Free
                            </h1>
                            <p className="text-lg lg:text-xl text-white/90 mb-10 max-w-xl leading-relaxed">
                                Send and receive payments in over 30 currencies. manage your cash flow with real-time exchange rates.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button className="bg-white text-blue-900 hover:bg-blue-50 text-base py-6 px-8 rounded-full font-semibold">
                                    Get Started
                                </Button>
                                <Button variant="outline" className="border-white text-white hover:bg-white/10 text-base py-6 px-8 rounded-full bg-transparent">
                                    View Demo
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Hold 30+ Global Currencies - Centered Coin Stack */}
            <section className="py-12 lg:py-16 bg-[#F5F7FA]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a5f] mb-4">
                        Hold 30+ Global Currencies
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                        Manage and store multiple currencies in a convenient account without opening separate bank accounts.
                    </p>

                    <div className="relative w-full max-w-5xl mx-auto h-150 min-h-[200px] lg:min-h-[300px]">
                        <Image
                            src="/images/currency/coins.png"
                            alt="30+ Currencies"
                            width={1200}
                            height={400}
                            className="mt-[-100px] w-full h-auto object-contain rotate-[-16deg]"
                        />
                    </div>
                </div>
            </section>

            {/* 3. Your money, connected across borders (Map 1) */}
            <section className="py-20 lg:py-24 bg-[#eff4f9]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Image (Left) */}
                        <div className="relative order-2 lg:order-1">
                            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-white/50 p-6">
                                <Image
                                    src="/images/currency/map-1.png"
                                    alt="Global Connections"
                                    fill
                                    className="object-contain p-4"
                                />
                            </div>
                        </div>

                        {/* Content (Right) */}
                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a5f] mb-6 leading-tight">
                                Your money, connected across borders
                            </h2>
                            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                                Connect with customers and suppliers globally. Collect payments in their local currency and convert it when the rate is right.
                            </p>
                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                With our global network of local bank accounts, you can get paid like a local in the US, UK, Eurozone, and more.
                            </p>
                            <Button className="bg-[#2563EB] hover:bg-blue-700 text-white rounded-full py-6 px-8 text-base shadow-lg shadow-blue-500/25">
                                Learn more
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Virtual Wallet Sub-Accounts (Right Image) */}
            <section className="py-20 lg:py-24 bg-[#F5F7FA]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Content (Left) */}
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a5f] mb-6 leading-tight">
                                Virtual Wallet Sub-Accounts
                            </h2>
                            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                                Create separate wallets for different teams, projects, or expense categories. Keep your funds organized and track spending with ease.
                            </p>
                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                Assign specific budgets to each sub-account and delegate access to team members with custom permissions.
                            </p>
                            <Button className="bg-[#2563EB] hover:bg-blue-700 text-white rounded-full py-6 px-8 text-base shadow-lg shadow-blue-500/25">
                                Start now
                            </Button>
                        </div>

                        {/* Image (Right) */}
                        <div className="relative">
                            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-white/50 p-6 flex items-center justify-center">
                                <Image
                                    src="/images/currency/wallet.png"
                                    alt="Virtual Wallet"
                                    width={400}
                                    height={400}
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Built for Global Operations (Dark Blue) */}
            <section className="py-20 lg:py-24 bg-[#0B2545] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative">
                            <div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-white p-2">
                                <Image
                                    src="/images/currency/map-2.png"
                                    alt="Global Operations"
                                    fill
                                    className="object-contain p-4"
                                />
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
                                Built for Global Operations
                            </h2>
                            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                                Access a complete suite of financial tools designed for modern global businesses. From mass payouts to expense management.
                            </p>
                            <ul className="space-y-4 mb-10">
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-xs flex-shrink-0">✓</div>
                                    <span className="text-lg text-blue-50">Instant transfers to 100+ countries</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-xs flex-shrink-0">✓</div>
                                    <span className="text-lg text-blue-50">Real-time tracking and reporting</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-xs flex-shrink-0">✓</div>
                                    <span className="text-lg text-blue-50">Automated compliance checks</span>
                                </li>
                            </ul>
                            <Button className="bg-white text-[#0B2545] hover:bg-blue-50 rounded-full py-6 px-8 text-base font-semibold">
                                View now
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. FAQ Section */}
            <FAQ data={faqData} className="bg-[#F5F7FA]" />

            {/* 7. Start Moving Money Smarter CTA */}
            <section className="py-20 bg-[#F5F7FA]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative rounded-[2.5rem] overflow-hidden bg-[#0B2545] text-center px-6 py-20 lg:py-24">
                        {/* Background Pattern overlay if needed */}
                        <div className="absolute inset-x-0 bottom-0 h-full w-full opacity-10"
                            style={{ backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
                        </div>

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                                Start Moving Money Smarter
                            </h2>
                            <p className="text-blue-200 text-lg mb-10">
                                Join thousands of businesses sending faster, cheaper, and safer global payments today.
                            </p>
                            <Button className="bg-[#2563EB] hover:bg-blue-600 text-white rounded-full py-6 px-10 text-lg font-semibold shadow-lg shadow-blue-900/50">
                                Let&apos;s Start
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
