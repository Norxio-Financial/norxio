"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";

export default function Features() {
  const { t } = useTranslation();
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(2);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Feature cards data with translations
  const featureCards = [
    {
      title: t.features.globalPayments,
      description: t.features.globalPaymentsDesc,
      image: "/images/home/card1.png",
      link: "/products/global-payout",
      imgClass: "object-contain object-left-bottom",
    },
    {
      title: t.features.virtualCards,
      description: t.features.virtualCardsDesc,
      image: "/images/home/card2.png",
      link: "/products/corporate-cards",
      imgClass: "object-contain object-left-bottom",
    },
    {
      title: t.features.multiCurrency,
      description: t.features.multiCurrencyDesc,
      image: "/images/home/card3.png",
      link: "/products/multi-currency-account",
      imgClass: "object-contain object-bottom",
    },
    {
      title: t.features.smartFx,
      description: t.features.smartFxDesc,
      image: "/images/home/card4.png",
      link: "/products/fx-exchange",
      imgClass: "object-contain object-right-bottom",
    },
    {
      title: t.features.apiIntegration,
      description: t.features.apiIntegrationDesc,
      image: "/images/home/card5.png",
      link: "/products/api-integration",
      imgClass: "object-contain object-right-bottom",
    },
  ];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const getModIndex = (i: number) => ((i % 5) + 5) % 5;

  const handleCardClick = (targetIndex: number) => {
    const currentMod = getModIndex(activeIndex);
    let diff = targetIndex - currentMod;
    if (diff > 2) diff -= 5;
    if (diff < -2) diff += 5;

    if (diff === 0) {
      router.push(featureCards[targetIndex].link);
    } else {
      setActiveIndex(activeIndex + diff);
    }
  };

  return (
    <section id="product" className="py-24 lg:py-32 bg-[#F5F7FA] overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E1E6EB] rounded-full mb-6">
            <span className="w-2.5 h-2.5 bg-brand-blue rounded-full"></span>
            <span className="text-sm font-semibold text-slate-700 uppercase tracking-wide">{t.features.badge}</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#0B2545] mb-6 tracking-tight">
            {t.features.title}
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg lg:text-xl leading-relaxed font-medium">
            {t.features.subtitle}
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative h-[500px] flex items-center justify-center perspective-[1000px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          ref={containerRef}
        >
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] h-full flex items-center justify-center">
            {featureCards.map((card, index) => {
              const currentMod = getModIndex(activeIndex);
              let diff = index - currentMod;
              if (diff > 2) diff -= 5;
              if (diff < -2) diff += 5;

              const xSpacing = 320;
              const x = diff * xSpacing;
              const isActive = diff === 0;
              const scale = isActive ? 1.1 : 1;
              const zIndex = 50 - Math.abs(diff) * 10;
              const opacity = 1;
              const isDark = isActive;

              return (
                <motion.div
                  key={index}
                  layout
                  initial={false}
                  animate={{
                    x: x,
                    scale: scale,
                    zIndex: zIndex,
                    opacity: opacity,
                    filter: "blur(0px)",
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut"
                  }}
                  onClick={() => handleCardClick(index)}
                  className={`absolute w-[280px] h-[450px] rounded-[24px] cursor-pointer overflow-hidden shadow-xl transition-colors duration-500 ${isDark ? "bg-[#0B2545]" : "bg-[#EBF2F7]"
                    } ${isActive ? "shadow-2xl ring-2 ring-blue-500/20" : "shadow-lg"}`}
                  style={{
                    left: "calc(50% - 140px)",
                  }}
                >
                  <div className="relative h-full flex flex-col">
                    <div className="z-20 p-6">
                      <h3 className={`text-[1.25rem] font-medium mb-3 leading-tight tracking-tight transition-colors duration-300 ${isDark ? "text-white" : "text-[#111111]"}`}>
                        {card.title}
                      </h3>
                      <p className={`text-[0.9rem] leading-snug font-normal transition-colors duration-300 ${isDark ? "text-blue-100/90" : "text-[#333333]/80"}`}>
                        {card.description}
                      </p>
                    </div>

                    <div className="mt-auto relative w-full h-[260px] flex items-end justify-start">
                      <motion.div
                        initial={false}
                        animate={{
                          translateY: isActive ? 0 : 0,
                          scale: 1
                        }}
                        transition={{ duration: 0.5 }}
                        className="relative w-full h-full"
                      >
                        <Image
                          src={card.image}
                          alt={card.title}
                          fill
                          className={`transition-transform duration-500 ${card.imgClass}`}
                          priority={index === 0 || index === 2}
                        />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {featureCards.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleCardClick(idx)}
              className={`h-3 rounded-full transition-all duration-300 cursor-pointer ${getModIndex(activeIndex) === idx ? "w-8 bg-brand-blue" : "w-3 bg-[#D1D5DB] hover:bg-[#9CA3AF]"
                }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
