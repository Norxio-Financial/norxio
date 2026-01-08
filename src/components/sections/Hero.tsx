"use client";

import { Button } from "@/components/ui/button";
import type { HeroSection } from "@/lib/types";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/lib/i18n";
import { useSanityData } from "@/lib/i18n/SanityDataContext";

interface HeroProps {
  data: HeroSection;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Hero({ data }: HeroProps) {
  const { t, isRTL } = useTranslation();
  const { homePageData } = useSanityData();

  // Use Sanity data if available, otherwise fall back to translations
  const sanityHero = homePageData?.hero;
  const badge = sanityHero?.badge || t.hero.badge;
  const title = sanityHero?.title || t.hero.title;
  const highlight = sanityHero?.highlight || t.hero.highlight;
  const subtitle = sanityHero?.subtitle || t.hero.subtitle;
  const primaryCta = sanityHero?.primaryCta?.text || t.hero.primaryCta;
  const secondaryCta = sanityHero?.secondaryCta?.text || t.hero.secondaryCta;
  const primaryCtaHref = sanityHero?.primaryCta?.href || "/get-started";
  const secondaryCtaHref = sanityHero?.secondaryCta?.href || "/get-started";

  return (
    <section className="relative h-[500px] sm:h-[550px] md:h-[600px] lg:h-[700px] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/home/hero-section.jpg"
        alt="Hero Background"
        fill
        className="object-cover object-center lg:object-top"
        priority
      />

      {/* Gradient Overlay - Flip for RTL */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: isRTL
            ? "linear-gradient(270deg, #052c54 0%, #052c54 10%, rgba(5, 44, 84, 0.9) 35%, rgba(5, 44, 84, 0) 100%)"
            : "linear-gradient(90deg, #052c54 0%, #052c54 10%, rgba(5, 44, 84, 0.9) 35%, rgba(5, 44, 84, 0) 100%)",
        }}
      />
      {/* Additional mobile gradient for better text readability */}
      <div className="absolute inset-0 z-0 bg-[#052c54]/60 sm:bg-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className={`max-w-2xl text-white ${isRTL ? 'mr-auto text-right' : ''}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 bg-white/10 backdrop-blur-md rounded-full mb-4 sm:mb-6 border border-white/10">
              <Image src="/images/icons/StackSimple.svg" alt="Badge" width={20} height={20} />
              <span className="text-xs sm:text-sm font-medium">{badge}</span>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              {title}
              <br />
              <span className="text-blue-300">{highlight}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 lg:mb-10 max-w-xl leading-relaxed">
              {subtitle}
            </p>

            {/* Buttons */}
            <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <Link href={primaryCtaHref}>
                <Button className="bg-white text-blue-900 hover:bg-blue-50 text-sm sm:text-base py-4 sm:py-5 lg:py-6 px-6 sm:px-7 lg:px-8 rounded-full font-semibold w-full sm:w-auto cursor-pointer">
                  {primaryCta}
                </Button>
              </Link>
              <Link href={secondaryCtaHref}>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 text-sm sm:text-base py-4 sm:py-5 lg:py-6 px-6 sm:px-7 lg:px-8 rounded-full bg-transparent w-full sm:w-auto cursor-pointer"
                >
                  {secondaryCta}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
