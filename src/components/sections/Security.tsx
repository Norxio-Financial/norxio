"use client";

import Image from "next/image";
import type { SecuritySection } from "@/lib/types";
import { useTranslation } from "@/lib/i18n";

interface SecurityProps {
  data: SecuritySection;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Security({ data }: SecurityProps) {
  const { t, isRTL } = useTranslation();

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-20 items-center">
          {/* Left Side - Image */}
          <div className={`relative ${isRTL ? 'order-last' : 'order-last lg:order-first'}`}>
            <div className="relative aspect-square max-w-[300px] sm:max-w-[400px] md:max-w-[500px] mx-auto lg:mx-0">
              <Image
                src="/images/home/security.png"
                alt="Security Shield"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className={`flex flex-col ${isRTL ? 'items-end text-right' : 'items-start text-left'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-[#E8EEF5] rounded-full mb-4 sm:mb-6">
              <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#1368C4] rounded-full"></span>
              <span className="text-xs sm:text-sm font-medium text-[#1e3a5f]">{t.security.badge}</span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#1e3a5f] leading-tight mb-4 sm:mb-6">
              {t.security.title}
            </h2>

            {/* Description */}
            <p className="text-slate-500 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl">
              {t.security.subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
