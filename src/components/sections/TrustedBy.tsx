"use client";

import type { TrustedBySection } from "@/lib/types";
import { useEffect, useRef, useState } from "react";

interface TrustedByProps {
  data: TrustedBySection;
}

export default function TrustedBy({ data }: TrustedByProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-scroll carousel
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;

    const scroll = () => {
      if (!isHovered && scrollContainer) {
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
  }, [isHovered]);

  // Duplicate items for seamless loop
  const duplicatedCompanies = [...data.companies, ...data.companies];

  return (
    <section className="py-8 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={scrollRef}
          className="flex items-center gap-12 overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {duplicatedCompanies.map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="flex-shrink-0 text-gray-300 hover:text-gray-400 transition-colors cursor-default"
            >
              {company.logo ? (
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-8 w-auto object-contain opacity-50 hover:opacity-70 transition-opacity"
                />
              ) : (
                <span className="text-xl font-semibold whitespace-nowrap">
                  {company.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
