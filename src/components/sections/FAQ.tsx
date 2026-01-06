"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import type { FAQSection } from "@/lib/types";
import { cn } from "@/lib/utils";

interface FAQProps {
  data: FAQSection;
  className?: string;
}

export default function FAQ({ data, className }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const midPoint = Math.ceil(data.faqs.length / 2);
  const leftColumn = data.faqs.slice(0, midPoint);
  const rightColumn = data.faqs.slice(midPoint);

  return (
    <section className={cn("py-20 bg-white", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          {data.badge && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-full mb-4">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
              <span className="text-sm font-medium text-blue-600">{data.badge}</span>
            </div>
          )}
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
            {data.title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Left Column */}
          <div className="space-y-4">
            {leftColumn.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-start justify-between text-left"
                >
                  <span className="font-medium text-[#1e3a5f] pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 mt-1">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-gray-400" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {rightColumn.map((faq, index) => (
              <div key={index + midPoint} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
                <button
                  onClick={() => toggleFAQ(index + midPoint)}
                  className="w-full px-6 py-5 flex items-start justify-between text-left"
                >
                  <span className="font-medium text-[#1e3a5f] pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 mt-1">
                    {openIndex === index + midPoint ? (
                      <Minus className="w-5 h-5 text-gray-400" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>
                {openIndex === index + midPoint && (
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
