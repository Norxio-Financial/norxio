"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import type { FeaturesSection } from "@/lib/types";

// Feature cards data matching the design exactly
const featureCards = [
  {
    title: "Global payments",
    description: "Send and receive funds across supported countries.",
    image: "/images/home/card1.png",
  },
  {
    title: "Virtual & physical cards",
    description: "Create cards for teams and expenses.",
    image: "/images/home/card2.png",
  },
  {
    title: "Multi-currency accounts",
    description: "Hold and manage money in multiple global currencies.",
    image: "/images/home/card3.png",
  },
  {
    title: "Smart FX Conversion",
    description: "Convert currencies instantly with competitive FX rates.",
    image: "/images/home/card4.png",
  },
  {
    title: "Api Integration",
    description: "Create custom processes using Norxio's fast, secure APIs.",
    image: "/images/home/card5.png",
  },
];

interface FeaturesProps {
  data: FeaturesSection;
}

export default function Features({ data }: FeaturesProps) {
  const [selectedIndex, setSelectedIndex] = useState(2);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextCard = useCallback(() => {
    setSelectedIndex((prev) => (prev + 1) % featureCards.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextCard, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextCard]);

  const handleCardClick = (index: number) => {
    setSelectedIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section id="product" className="py-20 lg:py-24 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-6">
            <span className="w-2 h-2 bg-[#1368C4] rounded-full"></span>
            <span className="text-sm font-medium text-slate-600">{data.badge}</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#1e3a5f] mb-5">
            {data.title}
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base lg:text-lg leading-relaxed">
            {data.subtitle}
          </p>
        </div>

        {/* Feature Cards - Simple Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
          {featureCards.map((card, index) => {
            const isSelected = selectedIndex === index;

            return (
              <div
                key={card.title}
                onClick={() => handleCardClick(index)}
                className={`
                  cursor-pointer rounded-2xl lg:rounded-3xl overflow-hidden 
                  transition-all duration-300 ease-out
                  ${isSelected
                    ? "bg-[#1e3a5f] shadow-xl ring-2 ring-[#1368C4] ring-offset-2"
                    : "bg-white shadow-md hover:shadow-lg"
                  }
                `}
              >
                {/* Card Image */}
                <div className="aspect-[4/5] relative overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className={`
                      object-contain object-bottom p-3 transition-transform duration-300
                      ${isSelected ? "scale-105" : "scale-100"}
                    `}
                  />
                </div>

                {/* Text Content */}
                <div className="p-4">
                  <h3
                    className={`
                      font-semibold mb-1.5 text-sm lg:text-base leading-tight
                      ${isSelected ? "text-white" : "text-[#1e3a5f]"}
                    `}
                  >
                    {card.title}
                  </h3>
                  <p
                    className={`
                      text-xs lg:text-sm leading-snug
                      ${isSelected ? "text-white/75" : "text-slate-500"}
                    `}
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-2 mt-10 lg:mt-12">
          {featureCards.map((_, index) => (
            <button
              key={index}
              onClick={() => handleCardClick(index)}
              className={`
                h-2 rounded-full transition-all duration-300
                ${selectedIndex === index
                  ? "bg-[#1368C4] w-6"
                  : "bg-slate-300 w-2 hover:bg-slate-400"
                }
              `}
              aria-label={`View ${featureCards[index].title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


