"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PricingSection as PricingType } from "@/lib/types";

interface PricingProps {
    data: PricingType;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Pricing({ data }: PricingProps) {
    // Hardcoded to match the visual design requested if data isn't perfect, 
    // but using data props where possible to keep it dynamic.
    // We will apply specific styles based on index to match the image.

    const plans = [
        {
            name: "Lite",
            audience: "For small businesses",
            price: "$0",
            period: "/month",
            features: [
                "Multi-currency account",
                "Transparent FX rates",
                "Global payouts",
                "Virtual cards",
                "Email support",
                "Simple dashboard & reporting"
            ],
            cta: "Start free",
            isDark: false
        },
        {
            name: "Enterprise",
            audience: "For SMEs",
            price: "$80",
            period: "/month",
            features: [
                "Multi-currency accounts",
                "Better FX rates",
                "Same-day payouts to major corridors",
                "Multiple virtual cards + spend controls",
                "Advanced reporting & reconciliation",
                "Priority customer support"
            ],
            cta: "Upgrade now",
            isDark: true
        },
        {
            name: "Business",
            audience: "For large companies",
            price: "Custom",
            period: " pricing",
            features: [
                "Multi-currency infrastructure",
                "Custom FX pricing",
                "Global payouts with SLAs",
                "Unlimited cards + real-time controls",
                "API access & system integrations",
                "Account manager support"
            ],
            cta: "Speak to sales",
            isDark: false
        }
    ];

    return (
        <section id="pricing" className="py-24 bg-[#f2f8f9]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="flex justify-center mb-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/50 text-slate-600 text-sm font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                            Pricing
                        </span>
                    </div>
                    <h2 className="font-heading text-4xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Choose a plan that fits your business. No hidden fees, no surprises—<br className="hidden sm:block" />just clear rates and full transparency.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto items-stretch">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative flex flex-col p-8 rounded-2xl transition-all duration-300
                ${plan.isDark
                                    ? "bg-[#0f2c4f] text-white shadow-2xl scale-100 md:scale-105 z-10 ring-1 ring-white/10"
                                    : "bg-[#e2e8f0] text-slate-900 border border-transparent"
                                }
              `}
                        >
                            {/* Header */}
                            <div className="mb-8">
                                <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${plan.isDark ? "bg-white/10 text-white" : "bg-white text-slate-800"}`}>
                                    {plan.name}
                                </div>
                                <div className={`text-sm mb-4 ${plan.isDark ? "text-slate-300" : "text-slate-500"}`}>
                                    {plan.audience}
                                </div>
                                <div className="flex items-baseline gap-1">
                                    <span className={`text-5xl font-bold ${plan.isDark ? "text-white" : "text-slate-900"}`}>
                                        {plan.price}
                                    </span>
                                    <span className={`text-lg ${plan.isDark ? "text-slate-300" : "text-slate-500"}`}>
                                        {plan.period}
                                    </span>
                                </div>
                            </div>

                            {/* Features */}
                            <div className="flex-grow space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className={`mt-0.5 min-w-[18px] h-[18px] rounded-full flex items-center justify-center border ${plan.isDark ? "border-slate-400 text-white" : "border-slate-800 text-slate-800"}`}>
                                            <Check className="w-2.5 h-2.5" strokeWidth={3} />
                                        </div>
                                        <span className={`text-sm font-medium ${plan.isDark ? "text-slate-300" : "text-slate-700"}`}>
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA */}
                            <div className="mt-auto">
                                <Button
                                    className={`w-full rounded-lg h-12 text-sm font-semibold transition-all
                        ${plan.isDark
                                            ? "bg-white text-slate-900 hover:bg-slate-100"
                                            : "bg-[#2563EB] text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20"
                                        }
                    `}
                                >
                                    {plan.cta}
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
