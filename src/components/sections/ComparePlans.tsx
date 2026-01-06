"use client";

import { Check, Minus } from "lucide-react";
import { Fragment } from "react";

export default function ComparePlans() {
  const sections = [
    {
      title: "Core feature",
      rows: [
        { name: "Monthly fee", lite: "Free", business: "$49 / mo", custom: "Tailored pricing" },
        { name: "Virtual card", lite: "3 cards", business: "Unlimited cards", custom: "Unlimited + custom rules" },
        { name: "Fx markup", lite: "1.2%", business: "0.7%", custom: "Custom rates" },
        { name: "Multi currency wallet", lite: true, business: true, custom: true },
        { name: "Global Payout Limit", lite: "$10,000 / mo", business: "$100,000 / mo", custom: "Custom" },
        { name: "Local Account Details", lite: false, business: "USD + EUR", custom: "Custom setup" },
      ]
    },
    {
      title: "Transfers & Exchange",
      rows: [
        { name: "International Transfers", lite: "Standard", business: "Fast", custom: "Priority" },
        { name: "Supported Currencies", lite: "15+", business: "40+", custom: "40+" },
        { name: "Exchange Speed", lite: "Standard", business: "Instant", custom: "Instant" },
        { name: "Payout Countries", lite: "40+", business: "120+", custom: "120+" },
      ]
    },
    {
      title: "Support & Integrations",
      rows: [
        { name: "Support", lite: "Email", business: "Email + Live Chat", custom: "Dedicated Success Manager" },
        { name: "API Access", lite: false, business: true, custom: true },
        { name: "Accounting Integrations", lite: false, business: true, custom: true },
        { name: "Custom workflows", lite: false, business: false, custom: true },
      ]
    },
    {
      title: "Card Controls",
      rows: [
        { name: "Spending Limits", lite: "Basic", business: "Advanced", custom: "Fully customizable" },
        { name: "Freeze / Unfreeze", lite: true, business: true, custom: true },
        { name: "Team Cards", lite: false, business: "Up to 20 users", custom: "Unlimited users" },
        { name: "Fraud Protection", lite: "Standard", business: "Enhanced", custom: "Enterprise-grade" },
      ]
    }
  ];

  const renderCell = (value: string | boolean) => {
    if (value === true) {
      return <Check className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />;
    }
    if (value === false) {
      return <Minus className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />;
    }
    return <span className="text-slate-700 font-medium text-xs sm:text-sm">{value}</span>;
  };

  const renderMobileCell = (value: string | boolean) => {
    if (value === true) {
      return <Check className="w-4 h-4 text-blue-600" />;
    }
    if (value === false) {
      return <Minus className="w-4 h-4 text-gray-300" />;
    }
    return <span className="text-slate-700 font-medium text-xs">{value}</span>;
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
            Compare Plans
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto px-4">
            See what each plan offers and choose the features that fit your business needs.
          </p>
        </div>

        {/* Mobile View - Stacked Cards */}
        <div className="md:hidden space-y-6">
          {sections.map((section, sIndex) => (
            <div key={`mobile-section-${sIndex}`} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="bg-slate-100 px-4 py-3">
                <h3 className="font-bold text-slate-900 text-sm">{section.title}</h3>
              </div>
              <div className="divide-y divide-slate-100">
                {section.rows.map((row, rIndex) => (
                  <div key={`mobile-row-${sIndex}-${rIndex}`} className="px-4 py-3">
                    <div className="font-medium text-slate-600 text-xs mb-2">{row.name}</div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="text-center">
                        <div className="text-[10px] text-slate-400 mb-1">Lite</div>
                        <div className="flex justify-center">{renderMobileCell(row.lite)}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[10px] text-slate-400 mb-1">Business</div>
                        <div className="flex justify-center">{renderMobileCell(row.business)}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[10px] text-slate-400 mb-1">Custom</div>
                        <div className="flex justify-center">{renderMobileCell(row.custom)}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View - Table */}
        <div className="hidden md:block max-w-6xl mx-auto overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="py-3 px-4 lg:px-6 text-left font-bold text-slate-900 text-sm lg:text-base">Feature</th>
                <th className="py-3 px-4 lg:px-6 text-left font-bold text-slate-900 text-sm lg:text-base">Lite</th>
                <th className="py-3 px-4 lg:px-6 text-left font-bold text-slate-900 text-sm lg:text-base">Business</th>
                <th className="py-3 px-4 lg:px-6 text-left font-bold text-slate-900 text-sm lg:text-base">Custom</th>
              </tr>
            </thead>
            <tbody>
              {sections.map((section, sIndex) => (
                <Fragment key={`section-${sIndex}`}>
                  <tr className="bg-slate-50">
                    <td colSpan={4} className="py-2 sm:py-3 px-4 lg:px-6 font-bold text-slate-900 text-xs sm:text-sm">{section.title}</td>
                  </tr>
                  {section.rows.map((row, rIndex) => (
                    <tr key={`row-${sIndex}-${rIndex}`} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                      <td className="py-3 sm:py-4 px-4 lg:px-6 text-slate-600 font-medium text-xs sm:text-sm">{row.name}</td>
                      <td className="py-3 sm:py-4 px-4 lg:px-6">{renderCell(row.lite)}</td>
                      <td className="py-3 sm:py-4 px-4 lg:px-6">{renderCell(row.business)}</td>
                      <td className="py-3 sm:py-4 px-4 lg:px-6">{renderCell(row.custom)}</td>
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
