import React from "react";

export default function Stats() {
  return (
    <section className="py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 lg:gap-24">
          {/* Left Text */}
          <div className="max-w-xl">
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
              Hold, exchange, and pay worldwide with transparent FX rates, same-day payouts, and funds always safeguarded by regulated partners.
            </p>
          </div>

          {/* Right Stats */}
          <div className="flex flex-wrap gap-8 md:gap-12 items-center">
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-bold text-[#0B2545]">25+</span>
              <span className="text-sm md:text-base text-slate-500 font-medium mt-1">Currencies</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-bold text-[#0B2545]">80+</span>
              <span className="text-sm md:text-base text-slate-500 font-medium mt-1">Countries</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-bold text-[#0B2545]">Transparent FX</span>
              <span className="text-sm md:text-base text-slate-500 font-medium mt-1">Markups from 0.4%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
