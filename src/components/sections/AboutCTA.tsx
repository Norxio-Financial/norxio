"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslation } from "@/lib/i18n";

export default function AboutCTA() {
  const { t } = useTranslation();

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/aboutus/about4.jpg"
        alt="Office background"
        fill
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0B2545]/80" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 max-w-4xl mx-auto leading-tight">
          {t.cta.title}
        </h2>
        <p className="text-base sm:text-lg text-blue-100 mb-6 sm:mb-8 lg:mb-10 max-w-2xl mx-auto px-2">
          {t.cta.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
          <Link href="/get-started">
            <Button className="bg-white text-[#0B2545] hover:bg-blue-50 px-6 sm:px-8 py-4 sm:py-5 lg:py-6 rounded-full text-sm sm:text-base font-semibold w-full sm:w-auto">
              {t.common.getStarted}
            </Button>
          </Link>
          <Link href="/get-started">
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-6 sm:px-8 py-4 sm:py-5 lg:py-6 rounded-full text-sm sm:text-base bg-transparent w-full sm:w-auto">
              {t.common.contactSales}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
