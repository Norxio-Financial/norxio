"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import type { FAQSection } from "@/lib/types";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/lib/i18n";
import { useSanityData } from "@/lib/i18n/SanityDataContext";

interface FAQProps {
  data: FAQSection;
  className?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function FAQ({ data, className }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useTranslation();
  const { homePageData } = useSanityData();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Use Sanity data if available, otherwise fall back to translations
  const sanityFaq = homePageData?.faq;
  const badge = sanityFaq?.badge || t.faq.badge;
  const title = sanityFaq?.title || t.faq.title;
  const subtitle = sanityFaq?.subtitle || t.faq.subtitle;

  // Use Sanity FAQ items or translation items
  const faqs = sanityFaq?.items && sanityFaq.items.length > 0
    ? sanityFaq.items
    : [
      { question: t.faq.q1, answer: t.faq.a1 },
      { question: t.faq.q2, answer: t.faq.a2 },
      { question: t.faq.q3, answer: t.faq.a3 },
      { question: t.faq.q4, answer: t.faq.a4 },
      { question: t.faq.q5, answer: t.faq.a5 },
      { question: t.faq.q6, answer: t.faq.a6 },
      { question: t.faq.q7, answer: t.faq.a7 },
      { question: t.faq.q8, answer: t.faq.a8 },
      { question: t.faq.q9, answer: t.faq.a9 },
      { question: t.faq.q10, answer: t.faq.a10 },
    ];

  const midPoint = Math.ceil(faqs.length / 2);
  const leftColumn = faqs.slice(0, midPoint);
  const rightColumn = faqs.slice(midPoint);

  return (
    <section className={cn("py-12 sm:py-16 md:py-20 bg-white", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-14">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-blue-50 rounded-full mb-3 sm:mb-4">
            <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-brand-blue rounded-full"></span>
            <span className="text-xs sm:text-sm font-medium text-brand-blue">{badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-3 sm:mb-4 px-2">
            {title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
            {subtitle}
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 max-w-5xl mx-auto">
          {/* Left Column */}
          <div className="space-y-3 sm:space-y-4">
            {leftColumn.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-start justify-between text-left rtl:text-right rtl:flex-row-reverse cursor-pointer"
                >
                  <span className="font-medium text-[#1e3a5f] ltr:pr-3 ltr:sm:pr-4 rtl:pl-3 rtl:sm:pl-4 text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                    {openIndex === index ? (
                      <Minus className="w-4 sm:w-5 h-4 sm:h-5 text-gray-400" />
                    ) : (
                      <Plus className="w-4 sm:w-5 h-4 sm:h-5 text-gray-400" />
                    )}
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0">
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-3 sm:space-y-4">
            {rightColumn.map((faq, index) => (
              <div key={index + midPoint} className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
                <button
                  onClick={() => toggleFAQ(index + midPoint)}
                  className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-start justify-between text-left rtl:text-right rtl:flex-row-reverse cursor-pointer"
                >
                  <span className="font-medium text-[#1e3a5f] ltr:pr-3 ltr:sm:pr-4 rtl:pl-3 rtl:sm:pl-4 text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                    {openIndex === index + midPoint ? (
                      <Minus className="w-4 sm:w-5 h-4 sm:h-5 text-gray-400" />
                    ) : (
                      <Plus className="w-4 sm:w-5 h-4 sm:h-5 text-gray-400" />
                    )}
                  </div>
                </button>
                {openIndex === index + midPoint && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0">
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{faq.answer}</p>
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
