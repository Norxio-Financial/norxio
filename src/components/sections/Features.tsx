"use client";

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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Features(_props: FeaturesProps) {
  return (
    <section id="product" className="py-20 lg:py-32 bg-[#F5F7FA] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E1E6EB] rounded-full mb-6">
            <span className="w-2.5 h-2.5 bg-[#2563EB] rounded-full"></span>
            <span className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Our features</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#0B2545] mb-6 tracking-tight">
            What we offer
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg lg:text-xl leading-relaxed font-medium">
            A simple process that lets your business hold, convert, and send money globally—fast, transparent, and secure.
          </p>
        </div>

        {/* Feature Cards - Interactive Scroll on Mobile, Grid on Desktop */}
        <div className={`
            flex lg:grid lg:grid-cols-5 gap-6 
            overflow-x-auto lg:overflow-visible pb-12 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0
            snap-x snap-mandatory scroll-smooth hide-scrollbar
        `}>
          {featureCards.map((card, index) => {
            // Cards 1 (index 1) and 3 (index 3) are dark by default in the design
            const isDarkByDefault = index === 1 || index === 3;

            return (
              <div
                key={card.title}
                className={`
                   relative flex-shrink-0 w-[85vw] sm:w-[400px] lg:w-auto snap-center
                   rounded-[2.5rem] h-[520px] lg:h-[480px] flex flex-col overflow-hidden group 
                   transition-all duration-500
                   border border-transparent
                   ${isDarkByDefault
                    ? "bg-gradient-to-br from-[#0f3a69] to-[#0B2C4F] text-white shadow-xl shadow-blue-900/10"
                    : "bg-[#EFF4F9] text-[#0B2C4F]"
                  }
                `}
              >
                <div className="relative z-10 flex flex-col h-full">
                  <div className="p-8 pb-0">
                    <h3 className="text-2xl lg:text-xl font-bold mb-4 leading-tight tracking-tight">
                      {card.title}
                    </h3>
                    <p
                      className={`
                        text-base lg:text-sm leading-relaxed mb-8 transition-colors duration-300 font-medium
                        ${isDarkByDefault ? "text-blue-100" : "text-slate-500"}
                      `}
                    >
                      {card.description}
                    </p>
                  </div>

                  {/* Image Container */}
                  <div className="mt-auto relative w-full h-56 lg:h-52 transform transition-transform duration-700">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className={`
                        object-contain object-bottom 
                        ${index === 4 ? "scale-[1.15] translate-y-6" : "scale-100"}
                      `}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}


