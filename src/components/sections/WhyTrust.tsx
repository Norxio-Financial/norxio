"use client";

import { DollarSign, Globe, CreditCard, Lock, Clock, Shield, LucideIcon } from "lucide-react";
import type { WhyTrustSection } from "@/lib/types";
import { useTranslation } from "@/lib/i18n";
import { useSanityData } from "@/lib/i18n/SanityDataContext";

interface WhyTrustProps {
  data: WhyTrustSection;
}

// Icon mapping for Sanity data
const iconMap: Record<string, LucideIcon> = {
  "dollar-sign": DollarSign,
  "globe": Globe,
  "credit-card": CreditCard,
  "lock": Lock,
  "clock": Clock,
  "shield": Shield,
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function WhyTrust({ data }: WhyTrustProps) {
  const { t, isRTL } = useTranslation();
  const { homePageData } = useSanityData();

  // Use Sanity data if available
  const sanityWhyTrust = homePageData?.whyTrust;
  const badge = sanityWhyTrust?.badge || t.whyTrust.badge;
  const title = sanityWhyTrust?.title || t.whyTrust.title;
  const subtitle = sanityWhyTrust?.subtitle || t.whyTrust.subtitle;

  // Build feature cards from Sanity or fallback to translations
  const featureCards = sanityWhyTrust?.cards && sanityWhyTrust.cards.length > 0
    ? sanityWhyTrust.cards.map((card) => ({
      icon: iconMap[card.icon] || DollarSign,
      title: card.title,
      description: card.description,
    }))
    : [
      { icon: DollarSign, title: t.whyTrust.transparentFx, description: t.whyTrust.transparentFxDesc },
      { icon: Globe, title: t.whyTrust.globalBusiness, description: t.whyTrust.globalBusinessDesc },
      { icon: CreditCard, title: t.whyTrust.alwaysOn, description: t.whyTrust.alwaysOnDesc },
      { icon: Lock, title: t.whyTrust.gradeSecurity, description: t.whyTrust.gradeSecurityDesc },
    ];

  // Split cards into left column (0, 2) and right column (1, 3)
  const leftColumnCards = [featureCards[0], featureCards[2]].filter(Boolean);
  const rightColumnCards = [featureCards[1], featureCards[3]].filter(Boolean);

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-8 sm:gap-10 lg:gap-16 items-start">
          {/* Left Side - Title */}
          <div className={`lg:sticky lg:top-32 ${isRTL ? 'text-right' : ''}`}>
            {/* Badge */}
            <div className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white rounded-full shadow-sm mb-4 sm:mb-6`}>
              <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#3173BD] rounded-full"></span>
              <span className="text-xs sm:text-sm font-medium text-slate-600">{badge}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#1e3a5f] leading-tight mb-4 sm:mb-5">
              {title}
            </h2>

            <p className="text-slate-500 max-w-sm text-sm sm:text-base lg:text-lg leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Right Side - Staggered 2x2 Card Grid */}
          <div className="flex gap-4 sm:gap-5 lg:gap-6">
            {/* Left Column - starts at top */}
            <div className="flex-1 flex flex-col gap-4 sm:gap-5 lg:gap-6">
              {leftColumnCards.map((card, index) => {
                const IconComponent = card.icon;
                return (
                  <div
                    key={index}
                    className={`bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-7 shadow-sm hover:shadow-md transition-shadow duration-200 ${isRTL ? 'text-right' : ''}`}
                  >
                    {/* Icon */}
                    <div className={`w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl bg-[#F0F7FF] flex items-center justify-center mb-4 sm:mb-5 border border-[#E0EDFA] ${isRTL ? 'mr-auto' : ''}`}>
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-[#3173BD]" strokeWidth={1.5} />
                    </div>

                    {/* Title */}
                    <h3 className="font-semibold text-[#1e3a5f] text-base sm:text-lg mb-2 sm:mb-3">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Right Column - starts lower (staggered) */}
            <div className="flex-1 flex flex-col gap-4 sm:gap-5 lg:gap-6 mt-6 sm:mt-8 lg:mt-12">
              {rightColumnCards.map((card, index) => {
                const IconComponent = card.icon;
                return (
                  <div
                    key={index}
                    className={`bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-7 shadow-sm hover:shadow-md transition-shadow duration-200 ${isRTL ? 'text-right' : ''}`}
                  >
                    {/* Icon */}
                    <div className={`w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl bg-[#F0F7FF] flex items-center justify-center mb-4 sm:mb-5 border border-[#E0EDFA] ${isRTL ? 'mr-auto' : ''}`}>
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-[#3173BD]" strokeWidth={1.5} />
                    </div>

                    {/* Title */}
                    <h3 className="font-semibold text-[#1e3a5f] text-base sm:text-lg mb-2 sm:mb-3">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
