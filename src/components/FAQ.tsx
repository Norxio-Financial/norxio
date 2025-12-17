"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { question: "What is Norxio?", answer: "Norxio is a global payments platform that helps businesses manage multi-currency accounts, make international transfers, and access transparent FX rates." },
    { question: "How fast are international payouts?", answer: "Most international payouts are processed same-day in major corridors. Transfer times may vary depending on the destination country and currency." },
    { question: "Can I hold multiple currencies in one account?", answer: "Yes, you can hold, receive, and manage over 30+ currencies in a single Norxio account." },
    { question: "How does Norxio keep my money safe?", answer: "Norxio uses enterprise-grade security including multi-factor authentication, end-to-end encryption, and continuous fraud monitoring." },
    { question: "What is FX transparency?", answer: "FX transparency means you always see the real exchange rate with no hidden markups. What you see is what you get." },
    { question: "Who can use Norxio?", answer: "Norxio is designed for businesses of all sizes—from startups to large enterprises operating globally." },
    { question: "Is Norxio secure?", answer: "Yes, Norxio employs bank-level security measures and is compliant with global financial regulations." },
    { question: "Can I send money to any country?", answer: "Norxio supports transfers to 180+ countries worldwide." },
    { question: "How do virtual accounts work?", answer: "Virtual accounts let you receive payments in local currencies without needing a physical bank account in that country." },
    { question: "Are there limits on transactions?", answer: "Transaction limits depend on your plan and verification level. Enterprise customers can request custom limits." },
  ];

  const leftFaqs = faqs.slice(0, 5);
  const rightFaqs = faqs.slice(5);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            ❓ FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get quick answers to the most common questions about how Norxio helps your business manage global payments with ease.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left column */}
          <div className="space-y-4">
            {leftFaqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openIndex === index ? "rotate-45" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-4 pb-4 text-gray-600 text-sm">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right column */}
          <div className="space-y-4">
            {rightFaqs.map((faq, index) => (
              <div key={index + 5} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50"
                  onClick={() => setOpenIndex(openIndex === index + 5 ? null : index + 5)}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openIndex === index + 5 ? "rotate-45" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
                {openIndex === index + 5 && (
                  <div className="px-4 pb-4 text-gray-600 text-sm">
                    {faq.answer}
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
