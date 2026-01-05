import Image from "next/image";

import { Button } from "@/components/ui/button";
import CardFAQ from "@/components/sections/CardFAQ";
import { FAQSection } from "@/lib/types";


const faqData: FAQSection = {
    title: "Frequently Asked Questions",
    badge: "FAQ",
    subtitle: "Get quick answers to the most common questions about how Norxio helps your business manage global payments with ease.",
    faqs: [
        {
            question: "What is a Norxio virtual card?",
            answer: "A Norxio virtual card is a digital payment card that exists entirely online. It works just like a physical card but offers greater security and control for online transactions."
        },
        {
            question: "Are virtual cards accepted worldwide?",
            answer: "Yes, our virtual cards are issued by major networks like Visa and Mastercard, meaning they are accepted globally anywhere these cards are supported."
        },
        {
            question: "How quickly can I create a virtual card?",
            answer: "Instantly. You can generate new virtual cards directly from your dashboard in a matter of seconds and start using them immediately for payments."
        },
        {
            question: "Can I delete or freeze a virtual card?",
            answer: "Yes, you have full control. You can freeze a card temporarily or delete it permanently with a single click to stop all future charges instantly."
        },
        {
            question: "Can I create multiple virtual cards?",
            answer: "Absolutely. You can create unlimited virtual cards for different team members, departments, or specific vendors to keep your expenses organized and secure."
        },
        {
            question: "Can I use virtual cards for subscriptions?",
            answer: "Yes, virtual cards are perfect for managing recurring subscriptions. You can set limits or cancel the specific card easily if you want to stop a subscription service."
        },
        {
            question: "Are Norxio virtual cards secure?",
            answer: "Highly secure. Since physical details aren't exposed, the risk of theft is minimized. Plus, you get real-time fraud monitoring and 3D Secure protection."
        },
        {
            question: "Will I get real-time notifications?",
            answer: "Yes, you and your admins receive instant notifications for every transaction, giving you full visibility into company spending as it happens."
        },
        {
            question: "Can I set spending limits on each card?",
            answer: "Yes, you can set daily, monthly, or total spending limits for each card to ensure budget compliance and prevent overspending."
        },
        {
            question: "Can teams or employees use virtual cards?",
            answer: "Yes, you can issue cards to specific employees with pre-set limits, eliminating the need for expense reports and reimbursements while maintaining control."
        }
    ]
};

export default function CorporateCardsPage() {
    return (
        <div className="bg-white">
            {/* 1. Hero Section */}
            <section className="relative h-[600px] lg:h-[700px] w-full overflow-hidden">
                <Image
                    src="/images/corporate/hero-corporate.jpg"
                    alt="Corporate Hero"
                    fill
                    className="object-cover object-top"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B2545] via-[#0B2545]/80 to-transparent z-10" />

                <div className="absolute inset-0 flex items-center z-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <div className="max-w-2xl text-white">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/10">
                                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                                <span className="text-sm font-medium">Corporate Cards</span>
                            </div>
                            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                                Spend Smarter With Norxio Corporate Cards
                            </h1>
                            <p className="text-lg lg:text-xl text-blue-100 mb-8 max-w-xl leading-relaxed">
                                Control expenses, issue cards instantly, and manage your team&apos;s spending in real-time.
                            </p>
                            <div className="flex gap-4">
                                <Button className="bg-white text-[#0B2545] hover:bg-blue-50 text-base py-6 px-8 rounded-full font-semibold">
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

            {/* 2. All-in-One Corporate Cards */}
            <section className="py-20 lg:py-24 bg-[#F5F9FA]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-[#181B1D] mb-4">
                            All-in-One Corporate Cards
                        </h2>
                        <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
                            Issue unlimited cards, control spending, and transact globally with total confidence.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="rounded-[15px] overflow-hidden shadow-sm hover:shadow-md transition-shadow group bg-white">
                            {/* Image Top */}
                            <div className="bg-[#EAEFF5] h-72 flex justify-center pt-4 overflow-hidden">
                                <Image
                                    src="/images/corporate/card1.png"
                                    alt="Blue Card"
                                    width={158}
                                    height={120}
                                    className=" drop-shadow-2xl transition-transform duration-500 origin-center"
                                />
                            </div>
                            {/* Text Bottom */}
                            <div className="p-8 h-full">
                                <h3 className="text-xl font-bold text-[#181B1D] mb-4">Unlimited Virtual Cards</h3>
                                <p className="text-slate-500 leading-relaxed text-sm">
                                    Stay organized, assign cards to different projects, and track every expense in real time.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className=" rounded-[15px] overflow-hidden shadow-sm hover:shadow-md transition-shadow group bg-white">
                            <div className="bg-[#EAEFF5] h-72 bottom-0 flex justify-center pt-4 overflow-hidden">
                                <Image
                                    src="/images/corporate/card2.png"
                                    alt="Black Card"
                                    width={210}
                                    height={220}
                                    className="drop-shadow-2xl transition-transform duration-500 origin-center"
                                />
                            </div>
                            <div className="p-8 h-full">
                                <h3 className="text-xl font-bold text-[#181B1D] mb-4">Smart Spend Controls</h3>
                                <p className="text-slate-500 leading-relaxed text-sm">
                                    Set limits, freeze cards, restrict merchant types, and stay in full control of your budget.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="rounded-[15px] overflow-hidden shadow-sm hover:shadow-md transition-shadow group bg-white">
                            <div className="bg-[#EAEFF5] h-72 flex justify-center  overflow-hidden pt-4">
                                <Image
                                    src="/images/corporate/card3.png"
                                    alt="Gold Card"
                                    width={158}
                                    height={220}
                                    className="drop-shadow-2xl transition-transform duration-500 origin-center"
                                />
                            </div>
                            <div className="p-8 h-full">
                                <h3 className="text-xl font-bold text-[#181B1D] mb-4">Multi-Currency Support</h3>
                                <p className="text-slate-500 leading-relaxed text-sm">
                                    Spend globally with ease using virtual cards that work across major currencies.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Smart Corporate Cards for Modern Businesses */}
            <section className="bg-[#F5F9FA] py-20 lg:py-24 ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="bg-[#EAEFF5] rounded-[2rem] p-8 lg:p-12 relative flex items-center justify-center min-h-[400px]">
                            <Image
                                src="/images/corporate/business-card.png"
                                alt="Smart Dashboard"
                                width={600}
                                height={400}
                                className="w-full h-auto object-contain drop-shadow-2xl"
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-[#181B1D] mb-6 leading-tight">
                                Smart Corporate Cards for Modern Businesses
                            </h2>
                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                Norxio virtual cards give your business complete control over every transaction. Create cards instantly for teams, subscriptions, or one-time payments, set your own spending rules, and track activity in real time.
                            </p>
                            <Button className="bg-[#2563EB] hover:bg-blue-700 text-white rounded-md py-6 px-8 font-medium shadow-lg shadow-blue-500/20 text-base">
                                Open an Account
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Powering the Future (Banner) */}
            <section className="bg-[#09325E] h-[400px] overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                    <div className="grid lg:grid-cols-2 gap-12 h-full">
                        <div className="flex flex-col justify-center h-full z-10">
                            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                                Powering the Future of Digital Finance
                            </h2>
                            <p className="text-blue-100 text-lg mb-6 leading-relaxed max-w-lg">
                                Whether you&apos;re paying, receiving, or managing funds, Norxio keeps everything smooth, smart, and stress-free.
                            </p>
                            <Button className="bg-white text-[#09325E] hover:bg-blue-50 text-base py-3 px-8 rounded-xl font-semibold w-fit">
                                Open an Account
                            </Button>
                        </div>
                        <div className="relative  flex items-end justify-center lg:justify-end">
                            <Image
                                src="/images/corporate/man.png"
                                alt="Business Professional"
                                width={200}
                                height={200}
                                className="object-contain object-bottom w-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Cards Built for Global Spending */}
            <section className="py-20 lg:py-24 bg-[#F5F9FA]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-[2rem] p-8 lg:p-16 shadow-sm">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="relative bg-[#09325E] rounded-[15px]">
                                <Image
                                    src="/images/corporate/cards.png"
                                    alt="Global Cards"
                                    width={500}
                                    height={500}
                                    className="object-contain w-full h-auto drop-shadow-xl rounded-2xl"
                                />
                            </div>
                            <div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-[#181B1D] mb-6">
                                    Cards Built for Global Spending
                                </h2>
                                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                    Issue virtual and physical cards that work seamlessly across currencies. Control spending, manage expenses, and pay globally with confidence—online or in-store.
                                </p>
                                <Button className="bg-[#2563EB] hover:bg-blue-700 text-white rounded-md py-6 px-8 font-medium">
                                    Talk to sales
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Smart Corporate Cards (3 Cols Features) */}
            <section className="py-20 lg:py-24 bg-[#F5F9FA]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-[#181B1D] mb-4">
                            Smart Corporate Cards
                        </h2>
                        <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                            Fast, secure, currency you can trust in business.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Item 1 */}
                        <div className="bg-white rounded-2xl p-8 transition-colors">
                            <div className="w-12 h-12 bg-[#E6EDF1] rounded-xl shadow-sm flex items-center justify-center font-bold text-xl mb-6">1</div>
                            <h3 className="text-xl font-bold text-[#181B1D] mb-4">Virtual & physical cards</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Issue cards instantly for your team. Manage physical card delivery and activate virtual cards in seconds.
                            </p>
                        </div>
                        {/* Item 2 */}
                        <div className="bg-white rounded-2xl p-8 transition-colors">
                            <div className="w-12 h-12 bg-[#E6EDF1] rounded-xl shadow-sm flex items-center justify-center font-bold text-xl mb-6">2</div>
                            <h3 className="text-xl font-bold text-[#181B1D] mb-4">Secure payments & transfer</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Advanced security features keep your money safe. Bank-grade encryption for every transaction.
                            </p>
                        </div>
                        {/* Item 3 */}
                        <div className="bg-white rounded-2xl p-8 transition-colors">
                            <div className="w-12 h-12 bg-[#E6EDF1] rounded-xl shadow-sm flex items-center justify-center font-bold text-xl mb-6">3</div>
                            <h3 className="text-xl font-bold text-[#181B1D] mb-4">Control & Manage in Real Time</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Set spending limits, freeze cards, and track expenses as they happen from your dashboard.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Premium Cards (Dark Section) */}
            <section className="bg-[#0F2F52] text-white pt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                            Check out our premium cards
                        </h2>
                        <p className="text-blue-200 max-w-2xl mx-auto text-lg">
                            Custom solutions designed for scaling businesses. Choose the card that fits your lifestyle.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
                        {/* Left Card */}
                        <div className="relative w-full max-w-md aspect-[1.6] lg:w-1/3">
                            <Image
                                src="/images/corporate/premium-card1.png"
                                alt="Gold Premium Card"
                                fill
                                className="object-contain"
                            />
                        </div>

                        {/* Center Phone */}
                        <div className="relative w-full max-w-sm lg:w-1/3">
                            <Image
                                src="/images/corporate/premium-card2-phone.png"
                                alt="Mobile App"
                                width={400}
                                height={700}
                                className="object-contain w-full h-auto"
                            />
                        </div>

                        {/* Right Card */}
                        <div className="relative w-full max-w-md aspect-[1.6] lg:w-1/3">
                            <Image
                                src="/images/corporate/premium-card3.png"
                                alt="Red Premium Card"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. FAQ */}
            <CardFAQ data={faqData} className="bg-[#F5F9FA]" />
        </div>
    );
}
