"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import FAQ from "@/components/sections/FAQ";
import { Phone, MapPin } from "lucide-react";

export default function TalkToSalesPage() {
    const faqData = {
        badge: "FAQ",
        title: "Frequently Asked Questions",
        subtitle: "Find answers to frequently asked questions about our product and sales team.",
        faqs: [
            {
                question: "How long does verification take?",
                answer: "Verification typically takes 1-2 business days, depending on the complexity of your business and the documents provided."
            },
            {
                question: "What can I discuss on the call?",
                answer: "You can discuss your business needs, pricing plans, specific features, and how our solution can be tailored to your requirements."
            },
            {
                question: "Do I need technical skills to talk to your team?",
                answer: "No, our sales team is trained to explain everything in simple terms. If technical details are needed, we can bring in a solutions engineer."
            },
            {
                question: "Will you help me choose the right plan?",
                answer: "Absolutely. We'll assess your current volume and future goals to recommend the most cost-effective plan."
            },
            {
                question: "Can I schedule a call at a specific time?",
                answer: "Yes, you can choose a time slot that works best for you from our calendar after submitting the form."
            },
            {
                question: "Do I need to have anything before the call?",
                answer: "Just a general idea of your business volume and what you're looking for. No specific documents are needed for the initial chat."
            },
            {
                question: "Is the call free?",
                answer: "Yes, the consultation with our sales team is completely free of charge."
            },
            {
                question: "How long does the call usually take?",
                answer: "Most introductory calls take about 15-30 minutes, but we can extend this if you have more questions."
            }
        ]
    };

    return (
        <div className="bg-[#f2f8f9]">
            {/* Hero Section */}
            <section className="relative h-[600px] lg:h-[700px] w-full overflow-hidden">
                <Image
                    src="/images/talkSales/hero-tts.jpg"
                    alt="Talk to our sales team"
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
                                <span className="text-sm font-medium">Contact Sales</span>
                            </div>
                            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                                Talk to Our Sales Team
                            </h1>
                            <p className="text-lg lg:text-xl text-white/90 mb-10 max-w-xl leading-relaxed">
                                Get expert guidance on how Norxio can answer your questions and help you grow with our payments solutions.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button className="bg-white text-blue-900 hover:bg-blue-50 text-base py-6 px-8 rounded-full font-semibold">
                                    Talk to Sales
                                </Button>
                                <Button variant="outline" className="border-white text-white hover:bg-white/10 text-base py-6 px-8 rounded-full bg-transparent">
                                    Get Started
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* What Happens After Section */}
            <section className="py-20 md:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                        <div className="w-full md:w-1/2 relative">
                            <div className="aspect-square relative rounded-[2rem] overflow-hidden bg-gray-100">
                                <Image
                                    src="/images/talkSales/tts-1.jpg"
                                    alt="Happy customer"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#09325E] mb-6">
                                What Happens After You Contact Sales?
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Our team will review your requirements and get back to you within 24 hours. We&apos;ll schedule a call to understand your specific needs and propose a tailored solution that fits your business goals.
                            </p>
                            <Button className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white px-8 h-12 rounded-lg text-base">
                                Contact Sales
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-20 bg-[#f2f8f9]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-12 gap-12 items-start">

                        {/* Left Column: Info */}
                        <div className="md:col-span-5 pt-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#09325E] mb-6">
                                Contact Us
                            </h2>
                            <p className="text-gray-600 mb-12 text-lg">
                                We&apos;re here to help. Reach out to our team for support, inquiries, or partnership opportunities.
                            </p>

                            <div className="bg-white rounded-2xl p-8 shadow-sm">
                                <div className="mb-6">
                                    <h3 className="text-lg font-bold text-[#09325E] mb-2">United Kingdom</h3>
                                    <p className="text-gray-600">Row 2a, Three col, London, UK</p>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center gap-3 text-gray-600">
                                        <MapPin className="w-5 h-5" />
                                        <span>UK Branch</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-600">
                                        <Phone className="w-5 h-5" />
                                        <span>+44 20 7123 4567</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Form */}
                        <div className="md:col-span-7">
                            <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm">
                                <form className="space-y-6">
                                    <div>
                                        <label htmlFor="fullName" className="block text-sm font-medium text-[#09325E] mb-2">Full name <span className="text-red-500">*</span></label>
                                        <Input id="fullName" placeholder="Enter your name" className="bg-[#f9fafb] border-0 h-12" />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-[#09325E] mb-2">Email <span className="text-red-500">*</span></label>
                                        <Input id="email" type="email" placeholder="Enter your email" className="bg-[#f9fafb] border-0 h-12" />
                                    </div>

                                    <div>
                                        <label htmlFor="interest" className="block text-sm font-medium text-[#09325E] mb-2">What are you interested in? <span className="text-red-500">*</span></label>
                                        <div className="relative">
                                            <select
                                                id="interest"
                                                className="w-full h-12 px-3 py-2 bg-[#f9fafb] rounded-md text-sm border-0 focus:ring-2 focus:ring-[#2563EB] outline-none appearance-none text-gray-500"
                                                defaultValue=""
                                            >
                                                <option value="" disabled>Select option</option>
                                                <option value="payments">Payments</option>
                                                <option value="payouts">Payouts</option>
                                                <option value="issuing">Card Issuing</option>
                                                <option value="other">Other</option>
                                            </select>
                                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2 4L6 8L10 4" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-[#09325E] mb-2">Message <span className="text-red-500">*</span></label>
                                        <textarea
                                            id="message"
                                            placeholder="Type your message"
                                            className="w-full min-h-[120px] px-3 py-3 bg-[#f9fafb] rounded-md text-sm border-0 focus:ring-2 focus:ring-[#2563EB] outline-none resize-y placeholder:text-muted-foreground"
                                        ></textarea>
                                    </div>

                                    <div className="pt-4">
                                        <Button className="w-full bg-[#2563EB] hover:bg-[#1d4ed8] text-white h-12 text-base font-semibold rounded-lg">
                                            Send message
                                        </Button>
                                    </div>
                                    <div className="pt-2">
                                        <Button variant="ghost" className="w-full bg-gray-100 hover:bg-gray-200 text-[#09325E] h-12 text-base font-semibold rounded-lg">
                                            Help center
                                        </Button>
                                    </div>

                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <FAQ data={faqData} />
        </div>
    );
}
