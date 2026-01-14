"use client";

import { Button } from "@/components/ui/button";
import type { CTASection } from "@/lib/types";
import { useTranslation } from "@/lib/i18n";
import { useSanityData } from "@/lib/i18n/SanityDataContext";

interface CTAProps {
  data: CTASection;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function CTA({ data }: CTAProps) {
  const { t } = useTranslation();
  const { homePageData } = useSanityData();

  // Use Sanity data if available, otherwise fall back to translations
  const sanityCta = homePageData?.cta;
  const title = sanityCta?.title || t.cta.title;
  const subtitle = sanityCta?.subtitle || t.cta.subtitle;
  const buttonText = sanityCta?.button?.text || t.cta.buttonText;
  const buttonHref = sanityCta?.button?.href || "/get-started";

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#f2f8f9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#09325E] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden px-6 sm:px-8 py-12 sm:py-16 md:py-20 text-center">

          {/* Background Pattern */}
          <div className="absolute inset-0">
            {/* Decorative dots pattern - hidden on small screens */}
            <div className="absolute top-4 sm:top-8 left-4 sm:left-8 grid grid-cols-4 gap-1.5 sm:gap-2 hidden sm:grid">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-white/20 rounded-full"></div>
              ))}
            </div>
            <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 grid grid-cols-4 gap-1.5 sm:gap-2 hidden sm:grid">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-white/20 rounded-full"></div>
              ))}
            </div>

            {/* Decorative circles */}
            <div className="absolute top-1/2 -left-10 sm:-left-20 w-20 sm:w-40 h-20 sm:h-40 border border-white/10 rounded-full"></div>
            <div className="absolute top-1/2 -right-10 sm:-right-20 w-30 sm:w-60 h-30 sm:h-60 border border-white/10 rounded-full"></div>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 tracking-tight px-2">
              {title}
            </h2>
            <p className="text-blue-100 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
              {subtitle}
            </p>
            <Button onClick={() => window.location.href = buttonHref} className="bg-brand-blue hover:bg-brand-blue-hover text-white px-6 sm:px-8 py-4 sm:py-5 md:py-6 text-sm sm:text-base font-semibold rounded-xl shadow-sm hover:shadow-md transition-all hover:scale-105 cursor-pointer">
              {buttonText}
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
