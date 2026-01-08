"use client";

import type { AllInOneSection } from "@/lib/types";
import Image from "next/image";
import { useTranslation } from "@/lib/i18n";

interface AllInOneProps {
  data: AllInOneSection;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function AllInOne({ data }: AllInOneProps) {
  const { t } = useTranslation();

  return (
    <section className="py-8 sm:py-10 md:py-12 lg:py-24 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#09325E] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden h-[280px] sm:h-[350px] md:h-[400px] lg:h-[500px] flex items-center justify-center isolate">
          {/* Background Patterns */}
          <div className="absolute inset-0 pointer-events-none">
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
            <div className="absolute top-1/2 -left-10 sm:-left-20 w-20 sm:w-40 h-20 sm:h-40 border border-white/10 rounded-full"></div>
            <div className="absolute top-1/2 -right-10 sm:-right-20 w-30 sm:w-60 h-30 sm:h-60 border border-white/10 rounded-full"></div>
          </div>
          {/* Image */}
          <div className="absolute inset-x-0 bottom-0 top-0 flex justify-center items-end">
            <div className="w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg h-full">
              <Image
                src="/images/home/all-in-one.png"
                alt="All in one payment solution"
                fill
                className="object-contain object-bottom"
                priority
              />
              <div className="absolute inset-0 bg-gray-900/30" />
            </div>
          </div>

          {/* Text Overlay */}
          <div className="relative z-10 max-w-2xl px-4 text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight drop-shadow-sm">
              {data.title || t.allInOne.title}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
