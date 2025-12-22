import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import FAQ from "@/components/sections/FAQ";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Blog | Norxio",
    description:
        "Management news, interviews, market indices, and expert tips on corporate financial management.",
};

const blogPosts = [
    {
        image: "/images/blog/trends1.jpg",
        title: "How Real-Time Data Helps You Succeed In Any Market",
        description:
            "In the fast-paced world of global finance, access to accurate, real-time data is critical for making informed decisions.",
        link: "#",
    },
    {
        image: "/images/blog/trends2.jpg",
        title: "The Digital Move to Cloud Computing in the Payment Industry",
        description:
            "Cloud technology is revolutionizing how financial institutions handle payments, offering better security and scalability.",
        link: "#",
    },
    {
        image: "/images/blog/trends3.jpg",
        title: "Managing International Expenses With Virtual Cards",
        description:
            "Find out how virtual cards can simplify expense tracking and spending control for your global workforce.",
        link: "#",
    },
    {
        image: "/images/blog/trends4.png",
        title: "Introducing Norxio Multi-Currency Wallets",
        description:
            "Our new multi-currency wallets allow businesses to hold, exchange, and spend in over 30 currencies instantly.",
        link: "#",
    },
    {
        image: "/images/blog/trends5.jpg",
        title: "How Brexit Protects Your Global Business",
        description:
            "Understanding the regulatory landscape post-Brexit and how it affects international trade and payments.",
        link: "#",
    },
    {
        image: "/images/blog/trends6.png",
        title: "How to Clean Up Your SEPA Direct Debit Scheme",
        description:
            "Optimizing your direct debit processes can reduce failures and improve cash flow management for your business.",
        link: "#",
    },
    {
        image: "/images/blog/trends7.jpg",
        title: "Why Businesses Move To Integrated FX Payments",
        description:
            "Lower fees and faster settlement times are just a few reasons why companies are switching to integrated FX solutions.",
        link: "#",
    },
    {
        image: "/images/blog/trends8.jpg",
        title: "Mass Payments: Global Payouts Simplified",
        description:
            "Learn how to automate payments to thousands of beneficiaries worldwide with a single API call.",
        link: "#",
    },
    {
        image: "/images/blog/trends9.jpg",
        title: "Scaling Operations With White Label Payment APIs",
        description:
            "Leverage our white-label solutions to build your own payment products and scale your fintech operations.",
        link: "#",
    },
];

const faqs = [
    {
        question: "What is the purpose of the Norxio Blog?",
        answer:
            "The Norxio blog serves as a resource for businesses to learn about the latest trends in fintech, corporate finance management, and updates about our products.",
    },
    {
        question: "How is the blog designed to help businesses?",
        answer:
            "We provide expert tips, market analysis, and practical guides to help companies optimize their financial operations and grow effectively.",
    },
    {
        question: "Do you have a newsletter I can subscribe to?",
        answer:
            "Yes, you can subscribe to our newsletter to receive the latest articles, industry news, and product updates directly in your inbox.",
    },
    {
        question: "Can I submit a topic for the blog?",
        answer:
            "We welcome suggestions! If there's a specific topic you'd like us to cover, please reach out to our content team via the contact page.",
    },
    {
        question: "Can stories from the blog be shared?",
        answer:
            "Absolutely. We encourage you to share our articles on social media or with your colleagues to help spread valuable insights.",
    },
    {
        question: "How often is the blog updated?",
        answer:
            "We publish new articles weekly, covering a range of topics from industry news to deep dives into specific financial strategies.",
    },
    {
        question: "Are product updates also included in the blog?",
        answer:
            "Yes, we regularly post about new features, improvements, and tutorials to help you get the most out of the Norxio platform.",
    },
    {
        question: "Can we create a guest post?",
        answer:
            "We occasionally accept guest posts from industry experts. Please contact our editorial team for guidelines and more information.",
    },
];

export default function BlogPage() {
    return (
        <main className="bg-[#F8FAFC]">
            {/* Hero Section */}
            <section className="pt-12 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-4">
                        Blog
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Management news, interviews, market indices, and expert tips on
                        corporate financial management.
                    </p>
                </div>

                {/* Featured Article */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="grid md:grid-cols-2">
                        <div className="relative h-64 md:h-auto min-h-[400px]">
                            <Image
                                src="/images/blog/exchange.jpg"
                                alt="Winning With Smarter Currency Exchange"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6 leading-tight">
                                Winning With Smarter <br />
                                Currency Exchange
                            </h2>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                Discover how our teams reduce costs and increase efficiency
                                using Norxio&apos;s corporate cards, expense management, and automated
                                operations.
                            </p>
                            <div>
                                <Button className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white px-8 py-6 rounded text-base font-medium">
                                    Read More
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Latest Insights Section */}
            <section className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-[#1e3a5f] mb-12">
                        Latest Insights & Trends
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <Link
                                key={index}
                                href={post.link}
                                className="group flex flex-col h-full bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
                            >
                                <div className="relative h-60 w-full overflow-hidden rounded-xl">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="py-6 pr-4">
                                    <h3 className="text-xl font-bold text-[#1e3a5f] mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 line-clamp-3 text-sm leading-relaxed">
                                        {post.description}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Button variant="outline" className="border-none text-gray-500 hover:text-[#1e3a5f]">
                            See All Articles
                        </Button>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <FAQ
                className="bg-[#F8FAFC]"
                data={{
                    title: "Frequently Asked Questions",
                    subtitle:
                        "Find quick answers to common questions about the Norxio blog, access, and how to get the most out of our content.",
                    faqs: faqs,
                }}
            />
        </main>
    );
}
