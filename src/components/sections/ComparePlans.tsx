"use client";

import { Check, Minus } from "lucide-react";

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
      return <Check className="w-5 h-5 text-blue-600" />;
    }
    if (value === false) {
      return <Minus className="w-5 h-5 text-gray-300" />;
    }
    return <span className="text-slate-700 font-medium">{value}</span>;
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Compare Plans
          </h2>
          <p className="text-lg text-slate-600">
            See what each plan offers and choose the features that fit your business needs.
          </p>
        </div>

        <div className="max-w-6xl mx-auto overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <tbody>
              {sections.map((section, sIndex) => (
                <>
                  <tr key={`header-${sIndex}`} className="bg-slate-100">
                    <td className="py-3 px-6 font-bold text-slate-900">{section.title}</td>
                    <td className="py-3 px-6 font-bold text-slate-900">Lite</td>
                    <td className="py-3 px-6 font-bold text-slate-900">Business</td>
                    <td className="py-3 px-6 font-bold text-slate-900">Custom</td>
                  </tr>
                  {section.rows.map((row, rIndex) => (
                    <tr key={`row-${sIndex}-${rIndex}`} className="border-b border-slate-100 hover:bg-slate-50">
                      <td className="py-4 px-6 text-slate-600 font-medium">{row.name}</td>
                      <td className="py-4 px-6">{renderCell(row.lite)}</td>
                      <td className="py-4 px-6">{renderCell(row.business)}</td>
                      <td className="py-4 px-6">{renderCell(row.custom)}</td>
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
