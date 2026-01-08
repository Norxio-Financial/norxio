"use client";

import { Check, Minus } from "lucide-react";
import { Fragment } from "react";
import { useTranslation } from "@/lib/i18n";

export default function ComparePlans() {
  const { t } = useTranslation();

  const sections = [
    {
      title: t.comparePlans.coreFeature,
      rows: [
        { name: t.comparePlans.monthlyFee, lite: "Free", business: "$49 / mo", custom: "Tailored pricing" },
        { name: t.comparePlans.virtualCard, lite: "3 cards", business: "Unlimited cards", custom: "Unlimited + custom rules" },
        { name: t.comparePlans.fxMarkup, lite: "1.2%", business: "0.7%", custom: "Custom rates" },
        { name: t.comparePlans.multiCurrencyWallet, lite: true, business: true, custom: true },
        { name: t.comparePlans.globalPayoutLimit, lite: "$10,000 / mo", business: "$100,000 / mo", custom: "Custom" },
        { name: t.comparePlans.localAccountDetails, lite: false, business: "USD + EUR", custom: "Custom setup" },
      ]
    },
    {
      title: t.comparePlans.transfersExchange,
      rows: [
        { name: t.comparePlans.internationalTransfers, lite: "Standard", business: "Fast", custom: "Priority" },
        { name: t.comparePlans.supportedCurrencies, lite: "15+", business: "40+", custom: "40+" },
        { name: t.comparePlans.exchangeSpeed, lite: "Standard", business: "Instant", custom: "Instant" },
        { name: t.comparePlans.payoutCountries, lite: "40+", business: "120+", custom: "120+" },
      ]
    },
    {
      title: t.comparePlans.supportIntegrations,
      rows: [
        { name: t.comparePlans.support, lite: "Email", business: "Email + Live Chat", custom: "Dedicated Success Manager" },
        { name: t.comparePlans.apiAccess, lite: false, business: true, custom: true },
        { name: t.comparePlans.accountingIntegrations, lite: false, business: true, custom: true },
        { name: t.comparePlans.customWorkflows, lite: false, business: false, custom: true },
      ]
    },
    {
      title: t.comparePlans.cardControls,
      rows: [
        { name: t.comparePlans.spendingLimits, lite: "Basic", business: "Advanced", custom: "Fully customizable" },
        { name: t.comparePlans.freezeUnfreeze, lite: true, business: true, custom: true },
        { name: t.comparePlans.teamCards, lite: false, business: "Up to 20 users", custom: "Unlimited users" },
        { name: t.comparePlans.fraudProtection, lite: "Standard", business: "Enhanced", custom: "Enterprise-grade" },
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
            {t.comparePlans.title}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto px-4">
            {t.comparePlans.subtitle}
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
                        <div className="text-[10px] text-slate-400 mb-1">{t.comparePlans.lite}</div>
                        <div className="flex justify-center">{renderMobileCell(row.lite)}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[10px] text-slate-400 mb-1">{t.comparePlans.business}</div>
                        <div className="flex justify-center">{renderMobileCell(row.business)}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[10px] text-slate-400 mb-1">{t.comparePlans.custom}</div>
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
                <th className="py-3 px-4 lg:px-6 text-left font-bold text-slate-900 text-sm lg:text-base rtl:text-right">{t.comparePlans.feature}</th>
                <th className="py-3 px-4 lg:px-6 text-left font-bold text-slate-900 text-sm lg:text-base rtl:text-right">{t.comparePlans.lite}</th>
                <th className="py-3 px-4 lg:px-6 text-left font-bold text-slate-900 text-sm lg:text-base rtl:text-right">{t.comparePlans.business}</th>
                <th className="py-3 px-4 lg:px-6 text-left font-bold text-slate-900 text-sm lg:text-base rtl:text-right">{t.comparePlans.custom}</th>
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
