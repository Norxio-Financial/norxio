"use client";

import { Button } from "@/components/ui/button";
import type { CTASection } from "@/lib/types";
// redirect removed

interface CTAProps {
  data: CTASection;
}

export default function CTA({ data }: CTAProps) {
  return (
    <section className="py-20 bg-[#f2f8f9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#09325E] rounded-[2rem] overflow-hidden px-8 py-20 text-center">

          {/* Background Pattern */}
          <div className="absolute inset-0">
            {/* Decorative dots pattern */}
            <div className="absolute top-8 left-8 grid grid-cols-4 gap-2">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-white/20 rounded-full"></div>
              ))}
            </div>
            <div className="absolute bottom-8 right-8 grid grid-cols-4 gap-2">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-white/20 rounded-full"></div>
              ))}
            </div>

            {/* Decorative circles */}
            <div className="absolute top-1/2 -left-20 w-40 h-40 border border-white/10 rounded-full"></div>
            <div className="absolute top-1/2 -right-20 w-60 h-60 border border-white/10 rounded-full"></div>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              {data.title}
            </h2>
            <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              {data.subtitle}
            </p>
            <Button onClick={() => window.location.href = "/get-started"} className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white px-8 py-6 text-base font-semibold rounded-xl shadow-lg shadow-blue-900/20 transition-all hover:scale-105">
              {data.buttonText}
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
