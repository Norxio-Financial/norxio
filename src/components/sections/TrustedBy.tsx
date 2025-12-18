"use client";

import type { TrustedBySection } from "@/lib/types";
import NextImage from "next/image";
import { useEffect, useRef } from "react";

interface TrustedByProps {
  data: TrustedBySection;
}

// Logo files from /images/logos/
const logos = [
  { name: "Affirm", logo: "/images/logos/affirm.svg" },
  { name: "Airtable", logo: "/images/logos/airtable.svg" },
  { name: "AliExpress", logo: "/images/logos/aliexpress.svg" },
  { name: "Alipay", logo: "/images/logos/alipay.svg" },
  { name: "Amazon Pay", logo: "/images/logos/amazon-pay.svg" },
  { name: "Asana", logo: "/images/logos/asana.svg" },
  { name: "Barclays", logo: "/images/logos/barclays.svg" },
  { name: "Basecamp", logo: "/images/logos/basecamp.svg" },
  { name: "Binance Pay", logo: "/images/logos/binance-pay.svg" },
  { name: "Calendly", logo: "/images/logos/calendly.svg" },
  { name: "Discover", logo: "/images/logos/discover.svg" },
];

export default function TrustedBy({ data }: TrustedByProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll carousel (continuous, no pause on hover)
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;

    const scroll = () => {
      if (scrollContainer) {
        scrollPosition += 0.5;
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;
        }
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  // Duplicate items for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-12 bg-white border-b border-slate-100 overflow-hidden relative">
      {/* Left blur/fade */}
      <div className="absolute left-0 top-0 bottom-0 w-32 lg:w-56 bg-gradient-to-r from-white from-20% via-white/90 via-50% to-transparent z-20 pointer-events-none" />

      {/* Right blur/fade */}
      <div className="absolute right-0 top-0 bottom-0 w-32 lg:w-56 bg-gradient-to-l from-white from-20% via-white/90 via-50% to-transparent z-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={scrollRef}
          className="flex items-center gap-16 lg:gap-20 overflow-hidden"
        >
          {duplicatedLogos.map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="flex-shrink-0 grayscale opacity-50"
            >
              <NextImage
                src={company.logo}
                alt={company.name}
                width={160}
                height={56}
                className="h-12 lg:h-14 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

