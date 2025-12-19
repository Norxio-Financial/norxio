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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-full mb-4">
            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
            <span className="text-sm font-medium text-blue-600">{data.badge}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
            {data.title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-0 max-w-5xl mx-auto">
          {/* Left Column */}
          <div className="space-y-0">
            {leftColumn.map((faq, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-5 flex items-center justify-between text-left"
                >
                  <span className="font-medium text-[#1e3a5f] pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                    {openIndex === index ? (
                      <Minus className="w-4 h-4 text-gray-600" />
                    ) : (
                      <Plus className="w-4 h-4 text-gray-600" />
                    )}
                  </div>
                </button>
                {openIndex === index && (
                  <div className="pb-5 pr-10">
                    <p className="text-gray-600 text-sm">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-0">
            {rightColumn.map((faq, index) => (
              <div key={index + midPoint} className="border-b border-gray-200">
                <button
                  onClick={() => toggleFAQ(index + midPoint)}
                  className="w-full py-5 flex items-center justify-between text-left"
                >
                  <span className="font-medium text-[#1e3a5f] pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                    {openIndex === index + midPoint ? (
                      <Minus className="w-4 h-4 text-gray-600" />
                    ) : (
                      <Plus className="w-4 h-4 text-gray-600" />
                    )}
                  </div>
                </button>
                {openIndex === index + midPoint && (
                  <div className="pb-5 pr-10">
                    <p className="text-gray-600 text-sm">{faq.answer}</p>
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
