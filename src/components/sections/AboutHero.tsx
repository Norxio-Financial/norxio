"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslation } from "@/lib/i18n";

export default function AboutHero() {
  const { t, isRTL } = useTranslation();

  return (
    <section className="relative h-[450px] sm:h-[500px] md:h-[600px] lg:h-[700px] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/aboutus/hero-about.jpg"
        alt="Team working together"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: isRTL
            ? "linear-gradient(270deg, #052c54 0%, #052c54 10%, rgba(5, 44, 84, 0.9) 35%, rgba(5, 44, 84, 0) 100%)"
            : "linear-gradient(90deg, #052c54 0%, #052c54 10%, rgba(5, 44, 84, 0.9) 35%, rgba(5, 44, 84, 0) 100%)",
        }}
      />
      {/* Mobile overlay for better text readability */}
      <div className="absolute inset-0 z-0 bg-[#052c54]/50 sm:bg-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className={`max-w-2xl text-white ${isRTL ? 'mr-auto text-right' : ''}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 bg-white/10 backdrop-blur-md rounded-full mb-4 sm:mb-6 border border-white/10">
              <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-blue-400 rounded-full"></span>
              <span className="text-xs sm:text-sm font-medium">{t.about.badge}</span>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              {t.about.title}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 lg:mb-10 max-w-xl leading-relaxed">
              {t.about.subtitle}
            </p>

            {/* Buttons */}
            <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <Link href="/get-started">
                <Button className="bg-white text-blue-900 hover:bg-blue-50 text-sm sm:text-base py-4 sm:py-5 lg:py-6 px-6 sm:px-7 lg:px-8 rounded-full font-semibold w-full sm:w-auto">
                  {t.common.getStarted}
                </Button>
              </Link>
              <Link href="/get-started">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 text-sm sm:text-base py-4 sm:py-5 lg:py-6 px-6 sm:px-7 lg:px-8 rounded-full bg-transparent w-full sm:w-auto"
                >
                  {t.common.contactSales}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
