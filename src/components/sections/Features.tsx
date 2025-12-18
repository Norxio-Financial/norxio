"use client";

import { useState } from "react";
import { Globe, CreditCard, Wallet, ArrowLeftRight, Code, LucideIcon } from "lucide-react";
import type { FeaturesSection } from "@/lib/types";

const iconMap: Record<string, LucideIcon> = {
  globe: Globe,
  "credit-card": CreditCard,
  wallet: Wallet,
  "arrow-left-right": ArrowLeftRight,
  code: Code,
};

interface FeaturesProps {
  data: FeaturesSection;
}

export default function Features({ data }: FeaturesProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section id="product" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-full mb-4">
            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
            <span className="text-sm font-medium text-blue-600">{data.badge}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
            {data.title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        {/* Feature Cards Grid with Animation */}
        <div className="flex flex-wrap justify-center gap-4">
          {data.features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon] || Globe;
            const isSelected = selectedIndex === index;

            return (
              <div
                key={feature.title}
                onClick={() => setSelectedIndex(index)}
                className={`
                  bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer border border-gray-100
                  ${isSelected 
                    ? "p-8 min-w-[280px] max-w-[320px] scale-105 shadow-lg ring-2 ring-blue-100" 
                    : "p-6 min-w-[200px] max-w-[220px] opacity-80 hover:opacity-100"
                  }
                `}
              >
                <div
                  className={`
                    ${isSelected ? "w-14 h-14" : "w-12 h-12"} 
                    ${isSelected ? "bg-[#1e3a5f]" : "bg-blue-100"} 
                    rounded-xl flex items-center justify-center mb-4 transition-all duration-300
                  `}
                >
                  <IconComponent 
                    className={`
                      ${isSelected ? "w-7 h-7 text-white" : "w-6 h-6 text-blue-600"} 
                      transition-all duration-300
                    `} 
                  />
                </div>
                <h3 className={`font-semibold text-[#1e3a5f] mb-2 transition-all duration-300 ${isSelected ? "text-xl" : "text-lg"}`}>
                  {feature.title}
                </h3>
                <p className={`text-gray-500 leading-relaxed transition-all duration-300 ${isSelected ? "text-base" : "text-sm"}`}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
