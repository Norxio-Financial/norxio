"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

import { motion } from "framer-motion";


// Feature cards data
const featureCards = [
  {
    title: "Global payments",
    description: "Send and receive funds across supported countries.",
    image: "/images/home/card1.png",
    link: "/products/global-payout",
  },
  {
    title: "Virtual & physical cards",
    description: "Create cards for teams and expenses.",
    image: "/images/home/card2.png",
    link: "/products/corporate-cards",
  },
  {
    title: "Multi-currency accounts",
    description: "Hold and manage money in multiple global currencies.",
    image: "/images/home/card3.png",
    link: "/products/multi-currency-account",
  },
  {
    title: "Smart FX Conversion",
    description: "Convert currencies instantly with competitive FX rates.",
    image: "/images/home/card4.png",
    link: "/products/fx-exchange",
  },
  {
    title: "Api Integration",
    description: "Create custom processes using Norxio's fast, secure APIs.",
    image: "/images/home/card5.png",
    link: "/products/fx-exchange",
  },
];

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(2); // Start in the middle
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);


  // Auto-play functionality - using functional update for infinite scroll
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Helper to get positive modulo
  const getModIndex = (i: number) => ((i % 5) + 5) % 5;

  // Handle manual navigation - Find shortest path
  const handleCardClick = (targetIndex: number) => {
    const currentMod = getModIndex(activeIndex);

    // Calculate shortest distance on the circle (0..4)
    let diff = targetIndex - currentMod;
    if (diff > 2) diff -= 5;
    if (diff < -2) diff += 5;

    setActiveIndex(activeIndex + diff);
  };

  return (
    <section id="product" className="py-24 lg:py-32 bg-[#F5F7FA] overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#E1E6EB] rounded-full mb-6"
          >
            <span className="w-2.5 h-2.5 bg-[#2563EB] rounded-full"></span>
            <span className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Our features</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#0B2545] mb-6 tracking-tight"
          >
            What we offer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 max-w-2xl mx-auto text-lg lg:text-xl leading-relaxed font-medium"
          >
            A simple process that lets your business hold, convert, and send money globally—fast, transparent, and secure.
          </motion.p>
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
              // Linear Depth Logic
              // We define positions relative to the active index [-2, -1, 0, 1, 2]
              // This ensures the visual order is always correct Left-to-Right


              const currentMod = getModIndex(activeIndex);

              // Calculate shortest distance (diff) wrapping around 5
              let diff = index - currentMod;
              if (diff > 2) diff -= 5;
              if (diff < -2) diff += 5;

              // Spacing config
              const xSpacing = 280; // horizontal spread
              const scaleStep = 0.15; // how much smaller per step

              // Calculate X
              const x = diff * xSpacing;

              // Calculate Scale (Center 1.05, Edges smaller)
              const scale = 1.05 - Math.abs(diff) * scaleStep;

              // Calculate Z-Index
              // Center is highest. Far edges lowest.
              // This is CRITICAL for the "Orbit" effect: usually items wrapping 2->-2 pass behind
              const zIndex = 50 - Math.abs(diff) * 10;

              // Opacity - Keep all visible as requested
              // Fade slighty at edges to enhance depth
              const opacity = 1 - Math.abs(diff) * 0.1;

              // Determine visual active state
              const isActive = diff === 0;

              // Colors logic: Active Center is Dark, others Light
              const isDark = isActive;

              return (
                <motion.div
                  key={card.title}
                  layout // Enable layout to smooth the X movement
                  animate={{
                    x: x,
                    scale: scale,
                    zIndex: zIndex,
                    opacity: opacity,
                    filter: isActive ? "blur(0px)" : "blur(0px)",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 20,
                    mass: 1.2
                  }}
                  onClick={() => handleCardClick(index)}
                  className={`absolute w-[340px] h-[480px] rounded-[24px] cursor-pointer overflow-hidden shadow-xl transition-colors duration-500 ${isDark ? "bg-[#0B2C4F]" : "bg-[#E8F1F5]"
                    } ${isActive ? "shadow-2xl ring-2 ring-blue-500/20" : "shadow-lg"}`}
                  style={{
                    left: "calc(50% - 170px)",
                  }}
                >
                  <div className="relative h-full flex flex-col">
                    {/* Progress Bar for Active Card */}
                    {isActive && (
                      <motion.div
                        className="absolute top-0 left-0 h-1 bg-[#2563EB] z-50"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 4, ease: "linear", repeat: isPaused ? 0 : Infinity }}
                        key={activeIndex}
                      />
                    )}

                    {/* Content */}
                    <div className="z-20 p-8">
                      <h3 className={`text-[1.35rem] font-medium mb-3 leading-tight tracking-tight transition-colors duration-300 ${isDark ? "text-white" : "text-[#111111]"}`}>
                        {card.title}
                      </h3>
                      <p className={`text-[0.95rem] leading-snug font-normal transition-colors duration-300 ${isDark ? "text-blue-100/90" : "text-[#333333]/80"}`}>
                        {card.description}
                      </p>
                    </div>

                    {/* Image */}
                    <div className="mt-auto relative w-full h-[340px] flex items-end justify-start">
                      <motion.div
                        animate={{
                          translateY: isActive ? 0 : 20,
                          scale: isActive ? 1.05 : 1
                        }}
                        transition={{ duration: 0.5 }}
                        className="relative w-full h-full"
                      >
                        <Image
                          src={card.image}
                          alt={card.title}
                          fill
                          className=" object-cover object-left-bottom"
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
              className={`h-3 w-3 rounded-full transition-all duration-300 ${getModIndex(activeIndex) === idx ? "bg-[#2563EB]" : "bg-[#D1D5DB] hover:bg-[#9CA3AF]"
                }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}


