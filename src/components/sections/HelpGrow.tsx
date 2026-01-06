"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import type { HelpGrowSection } from "@/lib/types";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

// Cards matching the design exactly
const growCards = [
  {
    title: "Effortless Team Collaboration",
    description: "Give your team one place to manage tasks, share updates, and keep work moving without friction.",
    image: "/images/home/grow-1.jpg",
    link: "/features/collaboration",
  },
  {
    title: "Automation That Works",
    description: "Streamline repetitive operations with intelligent automation that saves time and reduces errors.",
    image: "/images/home/grow-2.jpg",
    link: "/features/automation",
  },
  {
    title: "Real-Time Insights",
    description: "Access accurate data instantly so every decisions backed by clarity, not guesswork.",
    image: "/images/home/grow-3.jpg",
    link: "/features/insights",
  },
  {
    title: "Seamless Integration",
    description: "Connect with your favorite tools and platforms for a unified workflow experience.",
    image: "/images/home/grow-1.jpg",
    link: "/features/integration",
  },
  {
    title: "Secure & Compliant",
    description: "Enterprise-grade security with compliance standards you can trust.",
    image: "/images/home/grow-2.jpg",
    link: "/features/security",
  },
];

interface HelpGrowProps {
  data: HelpGrowSection;
}

export default function HelpGrow({ data }: HelpGrowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const scroll = useCallback((direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const cardWidth = container.firstElementChild?.getBoundingClientRect().width || 300;
      const gap = 24; // 1.5rem (gap-6)
      const scrollAmount = cardWidth + gap;

      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    // Auto-scroll logic: Check if we are at end, if so scroll to start?
    // Harder to do 'infinite' loop with native scroll without complex cloning.
    // For now, let's just scroll right, and if at end, scroll back to 0.
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        // tolerance for floats
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scroll('right');
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, scroll]);

  return (
    <section
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#F5F7FA]"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 sm:mb-10 lg:mb-12 gap-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-[#1e3a5f]">
            {data.title}
          </h2>
          <div className="flex gap-2 sm:gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-[#1368C4] flex items-center justify-center text-white hover:bg-[#0f5aa8] transition-colors shadow-sm cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-[#1368C4] flex items-center justify-center text-white hover:bg-[#0f5aa8] transition-colors shadow-sm cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Cards Carousel */}
        <div className="relative">
          {/* Container with scroll snap */}
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-5 md:gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-6 sm:pb-8 -mb-6 sm:-mb-8"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {growCards.map((card, index) => (
              <div
                key={`${card.title}-${index}`}
                className="flex-shrink-0 w-[80vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-[400px] snap-center group"
              >
                <div className="relative aspect-[4/3] rounded-[16px] sm:rounded-[20px] md:rounded-[24px] overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Progressive Blur Overlay */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-[45%] backdrop-blur-md"
                    style={{
                      maskImage: 'linear-gradient(to top, black 50%, transparent 100%)',
                      WebkitMaskImage: 'linear-gradient(to top, black 50%, transparent 100%)'
                    }}
                  />

                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute h-full inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 flex flex-col items-start text-white">
                    <h3 className="text-lg sm:text-xl font-bold mb-1.5 sm:mb-2 leading-tight tracking-tight">
                      {card.title}
                    </h3>
                    <p className="text-white/90 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-2">
                      {card.description}
                    </p>

                    <Link
                      href={card.link}
                      className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-bold text-white group/link hover:gap-2 sm:hover:gap-3 transition-all duration-300 cursor-pointer"
                    >
                      <span className="opacity-100">Learn more</span>
                      <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-[#3B82F6] flex items-center justify-center shadow-lg group-hover/link:bg-[#2563EB] transition-colors">
                        <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-white" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



