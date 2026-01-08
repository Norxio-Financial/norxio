import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Code2,
    Zap,
    ShieldCheck,
    Globe,
    Webhook,
    FileCode2,
    Terminal,
    Blocks
} from "lucide-react";
import FAQ from "@/components/sections/FAQ";
import { FAQSection } from "@/lib/types";

// FAQ data for API Integration
const faqData: FAQSection = {
    title: "Frequently Asked Questions",
    badge: "FAQ",
    subtitle: "Everything you need to know about integrating with our API.",
    faqs: [
        {
            question: "What can I build with the Norxio API?",
            answer: "You can build payment solutions, multi-currency wallets, FX conversion tools, payout systems, and integrate global financial services directly into your product."
        },
        {
            question: "Who is the Norxio API built for?",
            answer: "Our API is built for developers, fintech companies, marketplaces, and businesses that need to integrate global payment capabilities into their platforms."
        },
        {
            question: "How do I get access to the API?",
            answer: "Sign up for a Norxio account, complete the verification process, and you'll receive API credentials to start integrating immediately."
        },
        {
            question: "What programming languages are supported?",
            answer: "Our RESTful API works with any programming language. We provide SDKs for JavaScript, Python, PHP, Ruby, and Go, with more coming soon."
        },
        {
            question: "Can I test the API before going live?",
            answer: "Yes, we provide a full-featured sandbox environment where you can test all API endpoints without processing real transactions."
        },
        {
            question: "Is there a rate limit on API calls?",
            answer: "Rate limits depend on your plan. Free plans have 100 requests/minute, while enterprise plans have custom limits to match your scale."
        },
        {
            question: "How secure is the API?",
            answer: "We use bank-grade encryption, OAuth 2.0 authentication, and all data is transmitted over HTTPS. We're also PCI DSS compliant."
        },
        {
            question: "Do you offer webhooks for real-time updates?",
            answer: "Yes, our webhook system sends real-time notifications for all transaction events, allowing you to build responsive applications."
        }
    ]
};

export default function APIIntegrationPage() {
    return (
        <div className="bg-white">
            {/* 1. Hero Section - Dark Blue with Code Snippet */}
            <section className="relative min-h-[550px] sm:min-h-[600px] lg:min-h-[700px] w-full overflow-hidden bg-[#0B2545]">
                {/* Background Vector */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/api-integration/hero-bg-vectors.svg"
                        alt=""
                        fill
                        className="object-cover object-center opacity-30"
                        priority
                    />
                </div>
                <div className="absolute inset-0 flex items-center z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                            {/* Left Content */}
                            <div className="text-white">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full mb-4 sm:mb-6 border border-white/10">
                                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                                    <span className="text-xs sm:text-sm font-medium">API Integration</span>
                                </div>
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                                    Build Global Payments Into Your Product
                                </h1>
                                <p className="text-base sm:text-lg text-white/80 mb-6 sm:mb-8 max-w-md leading-relaxed">
                                    Connect to Norxio&apos;s powerful APIs to send payouts, manage currencies, and automate payments at scale. Developer-first, enterprise-ready.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                    <Link href="/get-started">
                                        <Button className="bg-white text-[#0B2545] hover:bg-blue-50 text-sm sm:text-base py-4 sm:py-5 lg:py-6 px-6 sm:px-7 lg:px-8 rounded-full font-semibold w-full sm:w-auto">
                                            Get API Keys
                                        </Button>
                                    </Link>
                                    <Link href="/get-started">
                                        <Button
                                            variant="outline"
                                            className="border-white text-white hover:bg-white/10 rounded-full py-4 sm:py-5 lg:py-6 px-6 sm:px-7 lg:px-8 text-sm sm:text-base font-medium bg-transparent w-full sm:w-auto"
                                        >
                                            View Documentation
                                        </Button>
                                    </Link>
                                </div>
                            </div>

                            {/* Right - Code Snippet */}
                            <div className="relative hidden lg:block">
                                <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
                                    {/* Window Header */}
                                    <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 border-b border-gray-200">
                                        <div className="flex gap-1.5">
                                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                        </div>
                                        <span className="ml-4 text-sm text-gray-500">payout.js</span>
                                    </div>
                                    {/* Code Content */}
                                    <div className="p-6 font-mono text-sm leading-relaxed bg-white">
                                        <div className="flex">
                                            <div className="text-gray-400 pr-4 select-none text-right w-8">
                                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map(num => (
                                                    <div key={num}>{num}</div>
                                                ))}
                                            </div>
                                            <div className="flex-1 overflow-x-auto">
                                                <div><span className="text-purple-600">async function</span> <span className="text-yellow-600">createTransfer</span><span className="text-gray-700">() {"{"}</span></div>
                                                <div className="pl-2"><span className="text-purple-600">const</span> <span className="text-blue-600">response</span> <span className="text-gray-700">=</span> <span className="text-purple-600">await</span> <span className="text-yellow-600">fetch</span><span className="text-gray-700">(</span></div>
                                                <div className="pl-4"><span className="text-green-600">&apos;https://api.norxio.com/v1/transfers&apos;</span><span className="text-gray-700">, {"{"}</span></div>
                                                <div className="pl-6"><span className="text-blue-600">method</span><span className="text-gray-700">:</span> <span className="text-green-600">&apos;POST&apos;</span><span className="text-gray-700">,</span></div>
                                                <div className="pl-6"><span className="text-blue-600">headers</span><span className="text-gray-700">:</span> <span className="text-gray-700">{"{"}</span></div>
                                                <div className="pl-8"><span className="text-green-600">&apos;Authorization&apos;</span><span className="text-gray-700">:</span> <span className="text-green-600">&apos;Bearer nx_live_key_...&apos;</span><span className="text-gray-700">,</span></div>
                                                <div className="pl-8"><span className="text-green-600">&apos;Content-Type&apos;</span><span className="text-gray-700">:</span> <span className="text-green-600">&apos;application/json&apos;</span></div>
                                                <div className="pl-6"><span className="text-gray-700">{"}"},</span></div>
                                                <div className="pl-6"><span className="text-blue-600">body</span><span className="text-gray-700">:</span> <span className="text-blue-600">JSON</span><span className="text-gray-700">.</span><span className="text-yellow-600">stringify</span><span className="text-gray-700">({"{"}</span></div>
                                                <div className="pl-8"><span className="text-blue-600">amount</span><span className="text-gray-700">:</span> <span className="text-orange-500">2500.00</span><span className="text-gray-700">,</span></div>
                                                <div className="pl-8"><span className="text-blue-600">source_currency</span><span className="text-gray-700">:</span> <span className="text-green-600">&apos;USD&apos;</span><span className="text-gray-700">,</span></div>
                                                <div className="pl-8"><span className="text-blue-600">destination_currency</span><span className="text-gray-700">:</span> <span className="text-green-600">&apos;EUR&apos;</span><span className="text-gray-700">,</span></div>
                                                <div className="pl-8"><span className="text-blue-600">recipient_account</span><span className="text-gray-700">:</span> <span className="text-green-600">&apos;DE893704...&apos;</span></div>
                                                <div className="pl-6"><span className="text-gray-700">{"}"})</span></div>
                                                <div className="pl-4"><span className="text-gray-700">{"}"})</span><span className="text-gray-700">;</span></div>
                                                <div className="pl-2"><span className="text-purple-600">const</span> <span className="text-blue-600">data</span> <span className="text-gray-700">=</span> <span className="text-purple-600">await</span> <span className="text-blue-600">response</span><span className="text-gray-700">.</span><span className="text-yellow-600">json</span><span className="text-gray-700">();</span></div>
                                                <div className="pl-2"><span className="text-purple-600">return</span> <span className="text-blue-600">data</span><span className="text-gray-700">;</span> <span className="text-gray-400">{'//'} {"{"} id: &quot;txn_...&quot;, status: &quot;completed&quot; {"}"}</span></div>
                                                <div><span className="text-gray-700">{"}"}</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Why Developers Choose Norxio */}
            <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#F5F7FA]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
                        {/* Left Content */}
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-4 sm:mb-6 shadow-sm">
                                <span className="w-2 h-2 bg-[#0B2545] rounded-full"></span>
                                <span className="text-sm font-medium text-[#1e3a5f]">Developer First</span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1e3a5f] mb-4 sm:mb-6 leading-tight">
                                Built for Developers, Designed for Scale
                            </h2>
                            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-md mb-4 sm:mb-6">
                                Our API is designed with developer experience in mind. Clean documentation, intuitive endpoints, and comprehensive SDKs let you integrate in hours, not weeks.
                            </p>
                            <ul className="space-y-3 sm:space-y-4">
                                <li className="flex items-center gap-3">
                                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-slate-700 text-sm sm:text-base">RESTful API with predictable resource-oriented URLs</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-slate-700 text-sm sm:text-base">SDKs for Node.js, Python, PHP, Ruby, and Go</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-slate-700 text-sm sm:text-base">Full sandbox environment with test data</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-slate-700 text-sm sm:text-base">99.99% uptime SLA for enterprise customers</span>
                                </li>
                            </ul>
                        </div>

                        {/* Right - Images */}
                        <div className="flex gap-4 justify-center lg:justify-end">
                            <div className="relative w-[200px] sm:w-[280px] h-[240px] sm:h-[320px] rounded-2xl overflow-hidden shadow-lg">
                                <Image
                                    src="/images/api-integration/integrate1.jpg"
                                    alt="Developer working"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative w-[120px] sm:w-[180px] h-[160px] sm:h-[220px] rounded-2xl overflow-hidden self-end shadow-lg">
                                <Image
                                    src="/images/api-integration/integrate2.png"
                                    alt="Code on screen"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. API Capabilities */}
            <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#0B2545] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
                        <div className="lg:sticky lg:top-24">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                                Powerful API Capabilities
                            </h2>
                            <p className="text-blue-100 text-base sm:text-lg leading-relaxed max-w-md">
                                Everything you need to build world-class payment experiences. From simple transfers to complex multi-currency operations.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            {/* Card 1 */}
                            <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 hover:-translate-y-1 transition-transform duration-300">
                                <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-blue-50 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-5 md:mb-6 text-blue-600">
                                    <Globe className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6" />
                                </div>
                                <h3 className="text-[#0B2545] font-bold text-base sm:text-lg md:text-xl mb-2 sm:mb-3">Global Payouts</h3>
                                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                                    Send money to 160+ countries via bank transfer, mobile money, or digital wallets.
                                </p>
                            </div>
                            {/* Card 2 */}
                            <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 hover:-translate-y-1 transition-transform duration-300">
                                <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-blue-50 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-5 md:mb-6 text-blue-600">
                                    <Zap className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6" />
                                </div>
                                <h3 className="text-[#0B2545] font-bold text-base sm:text-lg md:text-xl mb-2 sm:mb-3">Real-time FX</h3>
                                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                                    Access live exchange rates and convert between 50+ currencies instantly.
                                </p>
                            </div>
                            {/* Card 3 */}
                            <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 hover:-translate-y-1 transition-transform duration-300">
                                <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-blue-50 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-5 md:mb-6 text-blue-600">
                                    <Webhook className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6" />
                                </div>
                                <h3 className="text-[#0B2545] font-bold text-base sm:text-lg md:text-xl mb-2 sm:mb-3">Webhooks</h3>
                                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                                    Get instant notifications for payments, refunds, and account events.
                                </p>
                            </div>
                            {/* Card 4 */}
                            <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 hover:-translate-y-1 transition-transform duration-300">
                                <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-blue-50 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-5 md:mb-6 text-blue-600">
                                    <ShieldCheck className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6" />
                                </div>
                                <h3 className="text-[#0B2545] font-bold text-base sm:text-lg md:text-xl mb-2 sm:mb-3">Bank-Grade Security</h3>
                                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                                    PCI DSS compliant with OAuth 2.0, TLS 1.3, and encrypted data at rest.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. What You Can Build */}
            <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#F5F7FA]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 sm:mb-12 md:mb-16">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-4 sm:mb-6 shadow-sm">
                            <span className="w-2 h-2 bg-[#0B2545] rounded-full"></span>
                            <span className="text-sm font-medium text-[#1e3a5f]">Use Cases</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-3 sm:mb-4">
                            What You Can Build
                        </h2>
                        <p className="text-slate-500 max-w-2xl mx-auto text-base sm:text-lg px-4">
                            From marketplaces to fintech apps, our API powers innovative payment solutions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {/* Card 1 */}
                        <div className="bg-white rounded-[1.5rem] sm:rounded-[2rem] p-5 sm:p-6 md:p-8 h-[280px] sm:h-[320px] md:h-[360px] flex flex-col relative overflow-hidden group hover:bg-[#0B2545] transition-all duration-300 hover:shadow-2xl">
                            <div className="relative z-10">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-4 sm:mb-6 text-blue-600 group-hover:bg-white/10 group-hover:text-white transition-colors duration-300">
                                    <Code2 className="w-6 h-6 sm:w-7 sm:h-7" />
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-[#1e3a5f] mb-2 sm:mb-3 leading-tight group-hover:text-white transition-colors duration-300">Marketplace Payouts</h3>
                                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed group-hover:text-blue-100 transition-colors duration-300">
                                    Automate seller payouts for e-commerce platforms and gig economy apps.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-[1.5rem] sm:rounded-[2rem] p-5 sm:p-6 md:p-8 h-[280px] sm:h-[320px] md:h-[360px] flex flex-col relative overflow-hidden group hover:bg-[#0B2545] transition-all duration-300 hover:shadow-2xl">
                            <div className="relative z-10">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-4 sm:mb-6 text-blue-600 group-hover:bg-white/10 group-hover:text-white transition-colors duration-300">
                                    <FileCode2 className="w-6 h-6 sm:w-7 sm:h-7" />
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-[#1e3a5f] mb-2 sm:mb-3 leading-tight group-hover:text-white transition-colors duration-300">Payroll Systems</h3>
                                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed group-hover:text-blue-100 transition-colors duration-300">
                                    Pay employees and contractors globally in their local currencies.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-[1.5rem] sm:rounded-[2rem] p-5 sm:p-6 md:p-8 h-[280px] sm:h-[320px] md:h-[360px] flex flex-col relative overflow-hidden group hover:bg-[#0B2545] transition-all duration-300 hover:shadow-2xl">
                            <div className="relative z-10">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-4 sm:mb-6 text-blue-600 group-hover:bg-white/10 group-hover:text-white transition-colors duration-300">
                                    <Terminal className="w-6 h-6 sm:w-7 sm:h-7" />
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-[#1e3a5f] mb-2 sm:mb-3 leading-tight group-hover:text-white transition-colors duration-300">FX Platforms</h3>
                                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed group-hover:text-blue-100 transition-colors duration-300">
                                    Build currency exchange features with real-time rates and instant conversions.
                                </p>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white rounded-[1.5rem] sm:rounded-[2rem] p-5 sm:p-6 md:p-8 h-[280px] sm:h-[320px] md:h-[360px] flex flex-col relative overflow-hidden group hover:bg-[#0B2545] transition-all duration-300 hover:shadow-2xl">
                            <div className="relative z-10">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-4 sm:mb-6 text-blue-600 group-hover:bg-white/10 group-hover:text-white transition-colors duration-300">
                                    <Blocks className="w-6 h-6 sm:w-7 sm:h-7" />
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-[#1e3a5f] mb-2 sm:mb-3 leading-tight group-hover:text-white transition-colors duration-300">Neobank Apps</h3>
                                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed group-hover:text-blue-100 transition-colors duration-300">
                                    Create multi-currency wallets and virtual card issuing platforms.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Integration Steps */}
            <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 sm:mb-12 md:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-3 sm:mb-4">
                            Start Integrating in Minutes
                        </h2>
                        <p className="text-slate-500 max-w-2xl mx-auto text-base sm:text-lg px-4">
                            Get up and running with just a few lines of code. We&apos;ve made it simple.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
                        {/* Step 1 */}
                        <div className="bg-[#F5F7FA] rounded-2xl p-6 sm:p-8 transition-colors relative">
                            <div className="w-12 h-12 bg-[#0B2545] rounded-xl flex items-center justify-center font-bold text-xl mb-4 sm:mb-6 text-white">1</div>
                            <h3 className="text-lg sm:text-xl font-bold text-[#181B1D] mb-3 sm:mb-4">Create Account</h3>
                            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                                Sign up for a free Norxio account and complete verification. Get instant access to your sandbox environment.
                            </p>
                        </div>
                        {/* Step 2 */}
                        <div className="bg-[#F5F7FA] rounded-2xl p-6 sm:p-8 transition-colors relative">
                            <div className="w-12 h-12 bg-[#0B2545] rounded-xl flex items-center justify-center font-bold text-xl mb-4 sm:mb-6 text-white">2</div>
                            <h3 className="text-lg sm:text-xl font-bold text-[#181B1D] mb-3 sm:mb-4">Get API Keys</h3>
                            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                                Generate your API keys from the dashboard. Use test keys in sandbox and live keys for production.
                            </p>
                        </div>
                        {/* Step 3 */}
                        <div className="bg-[#F5F7FA] rounded-2xl p-6 sm:p-8 transition-colors relative">
                            <div className="w-12 h-12 bg-[#0B2545] rounded-xl flex items-center justify-center font-bold text-xl mb-4 sm:mb-6 text-white">3</div>
                            <h3 className="text-lg sm:text-xl font-bold text-[#181B1D] mb-3 sm:mb-4">Start Building</h3>
                            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                                Install our SDK, make your first API call, and start building payment experiences your users will love.
                            </p>
                        </div>
                    </div>

                    <div className="text-center mt-8 sm:mt-12">
                        <Link href="/get-started">
                            <Button className="bg-brand-blue hover:bg-brand-blue-hover text-white rounded-md py-4 sm:py-5 lg:py-6 px-6 sm:px-8 font-medium text-sm sm:text-base">
                                Get Started Now
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* 6. CTA Banner */}
            <section className="bg-[#09325E] py-12 sm:py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
                        <div className="text-center lg:text-left">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                                Ready to Build the Future of Payments?
                            </h2>
                            <p className="text-blue-100 text-base sm:text-lg leading-relaxed max-w-lg">
                                Join thousands of developers using Norxio to power global payments. Start with our free tier today.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <Link href="/get-started">
                                <Button className="bg-white text-[#09325E] hover:bg-blue-50 text-sm sm:text-base py-4 sm:py-5 lg:py-6 px-6 sm:px-8 rounded-full font-semibold w-full sm:w-auto">
                                    Start for Free
                                </Button>
                            </Link>
                            <Link href="/get-started">
                                <Button variant="outline" className="border-white text-white hover:bg-white/10 text-sm sm:text-base py-4 sm:py-5 lg:py-6 px-6 sm:px-8 rounded-full bg-transparent w-full sm:w-auto">
                                    Contact Sales
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. FAQ Section */}
            <FAQ data={faqData} className="bg-[#F5F7FA]" />
        </div>
    );
}
