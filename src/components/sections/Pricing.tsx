import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import type { PricingSection } from "@/lib/types";

interface PricingProps {
  data: PricingSection;
}

export default function Pricing({ data }: PricingProps) {


  return (
    <section id="pricing" className="py-20 lg:py-24 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#E8EEF5] rounded-full mb-6">
            <span className="w-2 h-2 bg-[#1368C4] rounded-full"></span>
            <span className="text-sm font-medium text-[#1e3a5f]">{data.badge}</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#1e3a5f] mb-6">
            {data.title}
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-base lg:text-lg leading-relaxed">
            {data.subtitle}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {data.plans.map((plan) => {
            const isEnterprise = plan.name === "Enterprise";

            return (
              <div
                key={plan.name}
                className={`
                  rounded-[2rem] p-3 flex flex-col h-full transition-transform duration-300
                  ${isEnterprise
                    ? "bg-[#09325E] text-white shadow-2xl scale-105 z-10"
                    : "bg-[#EBF1F6] text-[#1e3a5f]"
                  }
                `}
              >
                <div className="px-5 py-5 flex flex-col h-full text-left">
                  {/* Header Inner Block */}
                  <div className={`
                          rounded-[1.5rem] p-8 mb-8
                          ${isEnterprise ? "bg-[#1d426b]" : "bg-[#DEE4EB]"}
                      `}>
                    {/* Pill Badge */}
                    <div className={`
                              inline-flex px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-5
                              ${isEnterprise
                        ? "bg-[#2d5077] text-white"
                        : "bg-white text-[#1e3a5f]"
                      }
                          `}>
                      {plan.name}
                    </div>

                    <div className={`text-sm font-medium mb-5 ${isEnterprise ? "text-blue-100" : "text-slate-500"}`}>
                      {plan.description}
                    </div>

                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl lg:text-5xl font-bold tracking-tight">
                        {plan.price}
                      </span>
                      <span className={`text-sm font-medium ${isEnterprise ? "text-blue-200" : "text-slate-500"}`}>
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-10 flex-grow px-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className={`mt-0.5 flex-shrink-0 ${isEnterprise ? "text-white" : "text-[#1e3a5f]"}`}>
                          <CheckCircle2 className="w-5 h-5" strokeWidth={1.5} />
                        </div>
                        <span className={`text-sm font-medium ${isEnterprise ? "text-blue-50" : "text-slate-700"}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`
                              w-full py-7 text-sm font-semibold rounded-xl shadow-none transition-colors
                              ${isEnterprise
                        ? "bg-white text-[#09325E] hover:bg-blue-50"
                        : "bg-[#2563EB] text-white hover:bg-[#1d4ed8]"
                      }
                          `}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
