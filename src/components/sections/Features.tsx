"use client";

import Image from "next/image";
import Link from "next/link";
import type { FeaturesSection } from "@/lib/types";

// Feature cards data matching the design exactly
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
    link: "/products/global-payout",
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
    link: "/products/global-payout",
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

        {/* Feature Cards - Interactive Scroll on Mobile/Tablet, Grid on Large Desktop */}
        <div className={`
            flex xl:grid xl:grid-cols-5 gap-6 
            overflow-x-auto xl:overflow-visible pb-12 xl:pb-0 -mx-4 px-4 xl:mx-0 xl:px-0
            snap-x snap-mandatory scroll-smooth hide-scrollbar 
        `}>
          {featureCards.map((card, index) => {
            const isDark = index === 1 || index === 3;

            return (
              <Link
                key={card.title}
                href={card.link}
                className={`
                  relative flex-shrink-0 snap-center rounded-[15px] flex flex-col overflow-hidden group transition-all duration-500 
                  ${isDark
                    ? "bg-[#0B2C4F] text-white shadow-xl shadow-blue-900/10"
                    : "bg-[#E8F1F5] text-[#0B2C4F]"
                  }
                `}
                style={{
                  width: '226px',
                  height: '350px'
                }}
              >
                <div className="relative z-10 flex flex-col h-full">
                  <div className="p-6">
                    <h3 className={`text-[1.35rem] font-medium mb-3 leading-tight tracking-tight ${isDark ? 'text-white' : 'text-[#111111]'}`}>
                      {card.title}
                    </h3>
                    <p className={`text-[0.95rem] leading-snug font-normal ${isDark ? 'text-blue-100/90' : 'text-[#333333]/80'}`}>
                      {card.description}
                    </p>
                  </div>

                  {/* Image Container */}
                  <div className="mt-auto relative w-full h-[200px] ">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-contain object-bottom scale-120"
                    />
                  </div>
                </div>
              </Link>
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


