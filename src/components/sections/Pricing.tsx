import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import type { PricingSection } from "@/lib/types";

interface PricingProps {
  data: PricingSection;
}

export default function Pricing({ data }: PricingProps) {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
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

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {data.plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-2xl p-8 ${plan.popular
                  ? "ring-2 ring-[#2563eb] shadow-lg relative"
                  : "border border-gray-200"
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[#2563eb] text-white text-xs font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-1">
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-500">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-[#1e3a5f]">
                  {plan.price}
                </span>
                <span className="text-gray-500">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-blue-600" />
                    </div>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "default" : "outline"}
                className={`w-full py-6 text-base font-medium rounded-xl ${plan.popular
                    ? "bg-[#2563eb] hover:bg-[#1d4ed8] text-white"
                    : "border-2 border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
