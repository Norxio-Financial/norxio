"use client";

import { useState, useEffect, useCallback } from "react";
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const maxIndex = growCards.length - 3;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  // Calculate card width percentage (show 3 cards per view roughly)
  // We want to show 2 full cards and part of the 3rd, or 3 full cards. 
  // The image shows 2 full and a slice of 3rd. Let's aim for ~40% width each or similar.
  // Actually, standard 3-column is 33.33%. If we want distinct cards with gap, maybe 350px width fixed or %.
  // Let's stick to percentage for responsiveness. 3 cards visible = 33.333% minus gap.
  const cardWidthPercent = 33.333; // 3 visible

  return (
    <section
      className="py-20 lg:py-24 bg-[#F5F7FA]"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 lg:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-[#1e3a5f] mb-6 md:mb-0">
            {data.title}
          </h2>
          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              className="w-11 h-11 rounded-full bg-[#1368C4] flex items-center justify-center text-white hover:bg-[#0f5aa8] transition-colors shadow-sm"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-11 h-11 rounded-full bg-[#1368C4] flex items-center justify-center text-white hover:bg-[#0f5aa8] transition-colors shadow-sm"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Cards Carousel */}
        <div className="relative">
          <div className="overflow-hidden -mx-4 px-4 sm:-mx-0 sm:px-0 py-4 -my-4">
            <div
              className="flex gap-6 transition-transform duration-500 ease-out will-change-transform"
              style={{
                transform: `translateX(calc(-${currentIndex * (100 / 3)}% - ${currentIndex * (24 / 3)}px))`,
                // Adjusting calculation to account for gap
              }}
            >
              {growCards.map((card, index) => (
                <div
                  key={`${card.title}-${index}`}
                  className="flex-shrink-0 w-[85%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] group"
                >
                  <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-x-0 bottom-0 top-1/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col items-start text-white">
                      <h3 className="text-xl lg:text-2xl font-bold mb-3 leading-tight">
                        {card.title}
                      </h3>
                      <p className="text-white/90 text-sm lg:text-base leading-relaxed mb-6 line-clamp-2">
                        {card.description}
                      </p>

                      <Link
                        href={card.link}
                        className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all duration-300 group/link"
                      >
                        <span className="opacity-90">Learn more</span>
                        <div className="w-8 h-8 rounded-full bg-[#1368C4] flex items-center justify-center shadow-lg group-hover/link:bg-[#0f5aa8] transition-colors">
                          <ArrowRight className="w-4 h-4 text-white" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



