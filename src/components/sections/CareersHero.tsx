"use client";

import Image from "next/image";

export default function CareersHero() {
  return (
    <section className="bg-[#0f2c4f] py-24 text-center text-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium mb-6 border border-white/20">
          Career
        </div>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-12 tracking-tight">
          Build the Future of Global
          <br />
          Payments With Us
        </h1>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {/* Image 1 */}
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
            <Image
              src="/images/careers/careers1.jpg"
              alt="Team member 1"
              fill
              className="object-cover"
            />
          </div>
          {/* Image 2 */}
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mt-8 md:mt-0">
            <Image
              src="/images/careers/careers2.png"
              alt="Team member 2"
              fill
              className="object-cover"
            />
          </div>
          {/* Image 3 */}
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
            <Image
              src="/images/careers/careers3.jpg"
              alt="Team member 3"
              fill
              className="object-cover"
            />
          </div>
          {/* Image 4 */}
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mt-8 md:mt-0">
            <Image
              src="/images/careers/careers4.jpg"
              alt="Team member 4"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
