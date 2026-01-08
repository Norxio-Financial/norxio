"use client";

import { useTranslation } from "@/lib/i18n";
import { useSanityData } from "@/lib/i18n/SanityDataContext";

export default function Stats() {
  const { t } = useTranslation();
  const { homePageData } = useSanityData();

  // Use Sanity data if available, otherwise fall back to translations
  const sanityStats = homePageData?.stats;

  const stats = sanityStats && sanityStats.length > 0 ? sanityStats : [
    {
      value: "190+",
      label: t.stats.countriesPayout,
    },
    {
      value: "45%",
      label: t.stats.lowerFx,
    },
    {
      value: "T+0",
      label: t.stats.instantSettlement,
    },
    {
      value: "100%",
      label: t.stats.apiPayments,
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#F4F9FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col rtl:text-right">
              <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#3173BD] mb-2 sm:mb-3">
                {stat.value}
              </span>
              <span className="text-sm sm:text-base  font-medium leading-snug">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
