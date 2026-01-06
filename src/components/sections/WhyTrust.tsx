import { DollarSign, Globe, CreditCard, Lock } from "lucide-react";
import type { WhyTrustSection } from "@/lib/types";

// Feature cards matching the design
const featureCards = [
  {
    icon: DollarSign,
    title: "Transparent FX Rates",
    description: "Hold, receive, and manage multiple currencies without opening multiple bank accounts.",
  },
  {
    icon: Globe,
    title: "Designed for Global Businesses",
    description: "Every transaction is protected with strict compliance, encryption, and continuous fraud monitoring.",
  },
  {
    icon: CreditCard,
    title: "Always On. Always Reliable",
    description: "Same-day payouts in many regions ensure money moves quickly, helping businesses operate without delays.",
  },
  {
    icon: Lock,
    title: "Enterprise - Grade Security",
    description: "Businesses trust Norxio because every currency conversion is clear, upfront, and free from hidden fees.",
  },
];

interface WhyTrustProps {
  data: WhyTrustSection;
}

export default function WhyTrust({ data }: WhyTrustProps) {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-8 sm:gap-10 lg:gap-16 items-start">
          {/* Left Side - Title */}
          <div className="lg:sticky lg:top-32">
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white rounded-full shadow-sm mb-4 sm:mb-6">
              <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#1368C4] rounded-full"></span>
              <span className="text-xs sm:text-sm font-medium text-slate-600">{data.badge}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#1e3a5f] leading-tight mb-4 sm:mb-5">
              Why business<br className="hidden sm:block" />trust us
            </h2>

            <p className="text-slate-500 max-w-sm text-sm sm:text-base lg:text-lg leading-relaxed">
              {data.subtitle}
            </p>
          </div>

          {/* Right Side - 2x2 Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-5">
            {featureCards.map((card) => {
              const IconComponent = card.icon;

              return (
                <div
                  key={card.title}
                  className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 xl:p-7 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  {/* Icon */}
                  <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl bg-[#EBF4FF] flex items-center justify-center mb-3 sm:mb-4 lg:mb-5">
                    <IconComponent className="w-5 h-5 sm:w-5.5 sm:h-5.5 lg:w-6 lg:h-6 text-[#1368C4]" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-[#1e3a5f] text-base sm:text-lg mb-2 sm:mb-3">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

