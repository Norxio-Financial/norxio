"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import type { FAQSection } from "@/lib/types";
import { cn } from "@/lib/utils";

interface FAQProps {
    data: FAQSection;
    className?: string;
}

export default function CardFAQ({ data, className }: FAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const midPoint = Math.ceil(data.faqs.length / 2);
    const leftColumn = data.faqs.slice(0, midPoint);
    const rightColumn = data.faqs.slice(midPoint);

    return (
        <section className={cn("py-20 bg-[#F5F9FA]", className)}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-bold text-[#111827] mb-6">
                        {data.title}
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                        {data.subtitle}
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-6 items-start">
                    <div className="space-y-6">
                        {leftColumn.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer"
                                onClick={() => toggleFAQ(index)}
                            >
                                <div className="flex items-center justify-between gap-4">
                                    <h3 className="text-base lg:text-lg font-medium text-[#111827]">
                                        {faq.question}
                                    </h3>
                                    <div className="flex-shrink-0 text-gray-400">
                                        {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                    </div>
                                </div>
                                <div
                                    className={cn(
                                        "grid transition-all duration-300 ease-in-out text-gray-500 text-base leading-relaxed overflow-hidden",
                                        openIndex === index ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
                                    )}
                                >
                                    <div className="overflow-hidden">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-6">
                        {rightColumn.map((faq, index) => {
                            const actualIndex = index + midPoint;
                            return (
                                <div
                                    key={actualIndex}
                                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer"
                                    onClick={() => toggleFAQ(actualIndex)}
                                >
                                    <div className="flex items-center justify-between gap-4">
                                        <h3 className="text-base lg:text-lg font-medium text-[#111827]">
                                            {faq.question}
                                        </h3>
                                        <div className="flex-shrink-0 text-gray-400">
                                            {openIndex === actualIndex ? <Minus size={20} /> : <Plus size={20} />}
                                        </div>
                                    </div>
                                    <div
                                        className={cn(
                                            "grid transition-all duration-300 ease-in-out text-gray-500 text-base leading-relaxed overflow-hidden",
                                            openIndex === actualIndex ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
                                        )}
                                    >
                                        <div className="overflow-hidden">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
