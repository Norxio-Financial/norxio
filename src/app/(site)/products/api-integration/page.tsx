import Image from "next/image";
import { Button } from "@/components/ui/button";
import FAQ from "@/components/sections/FAQ";
import { FAQSection } from "@/lib/types";

// FAQ data for API Integration
const faqData: FAQSection = {
    title: "Frequently Asked Questions",
    badge: "FAQ",
    subtitle: "Integrate global payouts, FX, and multi-currency accounts into your product with simple, reliable APIs.",
    faqs: [
        {
            question: "What can I build with the Norxio API?",
            answer: "You can build payment solutions, multi-currency wallets, FX conversion tools, payout systems, and integrate global financial services directly into your product."
        },
        {
            question: "What can I build with the Norxio API?",
            answer: "You can build payment solutions, multi-currency wallets, FX conversion tools, payout systems, and integrate global financial services directly into your product."
        },
        {
            question: "Who is the Norxio API built for?",
            answer: "Our API is built for developers, fintech companies, marketplaces, and businesses that need to integrate global payment capabilities into their platforms."
        },
        {
            question: "Do I need a Norxio account to read the blog?",
            answer: "No, our blog and documentation are publicly accessible. However, you'll need an account to access the API and developer sandbox."
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
            question: "What programming languages are supported?",
            answer: "Our RESTful API works with any programming language. We provide SDKs for JavaScript, Python, PHP, Ruby, and Go, with more coming soon."
        },
        {
            question: "Can I test the API before going live?",
            answer: "Yes, we provide a full-featured sandbox environment where you can test all API endpoints without processing real transactions."
        }
    ]
};

export default function APIIntegrationPage() {
    return (
        <div className="bg-white">
            {/* 1. Hero Section - Dark Blue with Code Snippet */}
            <section className="relative h-[600px] lg:h-[700px] w-full overflow-hidden bg-[#0B2545]">
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
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left Content */}
                        <div className="text-white">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/10">
                                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                                <span className="text-sm font-medium">API Integration</span>
                            </div>
                            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                                Build Global Payments Into Your Product
                            </h1>
                            <p className="text-lg text-white/80 mb-8 max-w-md leading-relaxed">
                                Connect to Norxio&apos;s APIs to send payouts, manage currencies, and automate payments at scale.
                            </p>
                            <Button
                                variant="outline"
                                className="border-[#1e3a5f] text-[#1e3a5f] bg-white hover:bg-gray-100 rounded-full py-6 px-8 text-base font-medium"
                            >
                                Talk to sale
                            </Button>
                        </div>

                        {/* Right - Code Snippet */}
                        <div className="relative">
                            <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
                                {/* Window Header */}
                                <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 border-b border-gray-200">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                    </div>
                                    <span className="ml-4 text-sm text-gray-500">Norxio.Api</span>
                                </div>
                                {/* Code Content */}
                                <div className="p-6 font-mono text-sm leading-relaxed bg-white">
                                    <div className="flex">
                                        <div className="text-gray-400 pr-4 select-none text-right w-8">
                                            {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                                                <div key={num}>{num}</div>
                                            ))}
                                        </div>
                                        <div className="flex-1 overflow-x-auto">
                                            <div><span className="text-purple-600">async function</span> <span className="text-yellow-600">fetchAccountBalance</span><span className="text-gray-700">() {"{"}</span></div>
                                            <div className="pl-4"><span className="text-purple-600">try</span> <span className="text-gray-700">{"{"}</span></div>
                                            <div className="pl-8"><span className="text-purple-600">const</span> <span className="text-gray-700">response = </span><span className="text-purple-600">await</span> <span className="text-yellow-600">fetch</span><span className="text-gray-700">(</span><span className="text-green-600">&apos;https://</span></div>
                                            <div className="pl-12"><span className="text-green-600">api.norxio.com/v1/accounts/balance&apos;</span><span className="text-gray-700">, {"{"}</span></div>
                                            <div className="pl-8"><span className="text-gray-700">method: </span><span className="text-green-600">&apos;GET&apos;</span><span className="text-gray-700">,</span></div>
                                            <div className="pl-8"><span className="text-gray-700">headers: {"{"}</span></div>
                                            <div className="pl-12"><span className="text-green-600">&apos;Authorization&apos;</span><span className="text-gray-700">: </span><span className="text-green-600">&apos;Bearer YOUR_API_KEY&apos;</span><span className="text-gray-700">,</span></div>
                                            <div className="pl-12"><span className="text-green-600">&apos;Content-type&apos;</span><span className="text-gray-700">: </span><span className="text-green-600">&apos;application/json&apos;</span><span className="text-gray-700">,</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>

            {/* 2. Integrate with Norxio Section */}
            <section className="py-20 lg:py-24 bg-[#F5F7FA]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Left Content */}
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a5f] mb-6 leading-tight">
                                Integrate with Norxio
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed max-w-md">
                                Integrate Norxio&apos;s secure APIs to automate payments, manage currencies, and build seamless financial workflows— all from your existing system.
                            </p>
                        </div>

                        {/* Right - Images */}
                        <div className="flex gap-4 justify-end">
                            <div className="relative w-[280px] h-[320px] rounded-2xl overflow-hidden">
                                <Image
                                    src="/images/api-integration/integrate1.jpg"
                                    alt="Business professional"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative w-[180px] h-[220px] rounded-2xl overflow-hidden self-end">
                                <Image
                                    src="/images/api-integration/integrate2.png"
                                    alt="Developer working"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Built for Global Payouts */}
            <section className="py-20 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-6">
                            <span className="w-2 h-2 bg-[#0B2545] rounded-full"></span>
                            <span className="text-sm font-medium text-[#1e3a5f]">Our features</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-4">
                            What we offer
                        </h2>
                        <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                            A simple process that lets your business hold, convert, and send money globally—fast, transparent, and secure.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {/* Card 1 - Global payments (Light) */}
                        <div className="bg-[#F5F7FA] rounded-[1.5rem] p-6 h-[420px] flex flex-col relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-lg font-bold text-[#1e3a5f] mb-2 leading-tight">
                                    Global payments
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    Send and receive funds across supported countries.
                                </p>
                            </div>
                            <div className="absolute -bottom-4 -left-8 w-[140%] h-[220px]">
                                <Image
                                    src="/images/api-integration/payouts2.png"
                                    alt="Global payments"
                                    fill
                                    className="object-contain object-bottom"
                                />
                            </div>
                        </div>

                        {/* Card 2 - Virtual & physical cards (Dark) */}
                        <div className="bg-[#0B2545] rounded-[1.5rem] p-6 h-[420px] flex flex-col relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                                    Virtual & physical cards
                                </h3>
                                <p className="text-blue-200 text-sm leading-relaxed">
                                    Create cards for teams and expenses.
                                </p>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 h-[240px]">
                                <Image
                                    src="/images/corporate/cards.png"
                                    alt="Virtual & physical cards"
                                    fill
                                    className="object-contain object-bottom scale-125 translate-y-2"
                                />
                            </div>
                        </div>

                        {/* Card 3 - Multi-currency accounts (Dark) */}
                        <div className="bg-[#0B2545] rounded-[1.5rem] p-6 h-[420px] flex flex-col relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                                    Multi-currency accounts
                                </h3>
                                <p className="text-blue-200 text-sm leading-relaxed">
                                    Hold and manage money in multiple global currencies.
                                </p>
                            </div>
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-[220px]">
                                <Image
                                    src="/images/api-integration/payouts1.png"
                                    alt="Multi-currency"
                                    fill
                                    className="object-contain object-bottom"
                                />
                            </div>
                        </div>

                        {/* Card 4 - Smart FX Conversion (Dark) */}
                        <div className="bg-[#0B2545] rounded-[1.5rem] p-6 h-[420px] flex flex-col relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                                    Smart FX Conversion
                                </h3>
                                <p className="text-blue-200 text-sm leading-relaxed">
                                    Convert currencies instantly with competitive FX rates.
                                </p>
                            </div>
                            <div className="absolute -bottom-2 -left-4 -right-4 h-[220px]">
                                <Image
                                    src="/images/api-integration/payouts3.png"
                                    alt="Smart FX"
                                    fill
                                    className="object-contain object-bottom scale-110"
                                />
                            </div>
                        </div>

                        {/* Card 5 - Api Integration (Light) */}
                        <div className="bg-[#F5F7FA] rounded-[1.5rem] p-6 h-[420px] flex flex-col relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-lg font-bold text-[#1e3a5f] mb-2 leading-tight">
                                    Api Integration
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    Create custom processes using Norxio&apos;s fast, secure APIs.
                                </p>
                            </div>
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[85%] h-[200px]">
                                <Image
                                    src="/images/home/all-in-one.png"
                                    alt="Api Integration"
                                    fill
                                    className="object-contain object-bottom"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Carousel Dots Indicator */}
                    <div className="flex justify-center items-center gap-2 mt-10">
                        <div className="w-8 h-2.5 bg-[#0B2545] rounded-full"></div>
                        <div className="w-2.5 h-2.5 bg-gray-300 rounded-full"></div>
                        <div className="w-2.5 h-2.5 bg-gray-300 rounded-full"></div>
                        <div className="w-2.5 h-2.5 bg-gray-300 rounded-full"></div>
                        <div className="w-2.5 h-2.5 bg-gray-300 rounded-full"></div>
                    </div>
                </div>
            </section>

            {/* 4. FAQ Section */}
            <FAQ data={faqData} className="bg-[#F5F7FA]" />
        </div>
    );
}
