import { Button } from "@/components/ui/button";
import type { HeroSection } from "@/lib/types";
import Image from "next/image";

interface HeroProps {
  data: HeroSection;
}

export default function Hero({ data }: HeroProps) {
  return (
    <section className="pt-24 pb-0 bg-white overflow-hidden relative">
      {/* Background decorative wave */}
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none">
        <svg 
          viewBox="0 0 500 800" 
          className="absolute top-0 right-0 h-full w-auto opacity-100"
          preserveAspectRatio="xMaxYMin slice"
        >
          <defs>
            <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e3a5f" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
          </defs>
          <path 
            d="M100,0 Q200,100 150,200 Q100,300 200,400 Q300,500 250,600 Q200,700 300,800 L500,800 L500,0 Z" 
            fill="url(#heroGradient)"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Left Content */}
          <div className="relative z-10 py-12">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1e3a5f]/10 rounded-full mb-6">
              <span className="w-2 h-2 bg-[#1e3a5f] rounded-full"></span>
              <span className="text-sm font-medium text-[#1e3a5f]">{data.badge}</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#1e3a5f] leading-[1.15] mb-6">
              {data.title}<br />
              <span className="text-[#2563eb]">{data.highlight}</span>.
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-gray-600 mb-8 max-w-md leading-relaxed">
              {data.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-6 py-6 text-base font-medium rounded-xl shadow-lg shadow-blue-500/25">
                {data.primaryCta}
              </Button>
              <Button variant="outline" className="border-2 border-gray-300 text-gray-700 px-6 py-6 text-base font-medium rounded-xl hover:bg-gray-50">
                {data.secondaryCta}
              </Button>
            </div>
          </div>

          {/* Right - Hero Image */}
          <div className="relative z-10 flex items-end justify-center lg:justify-end">
            {/* Image Container */}
            <div className="relative w-full max-w-md lg:max-w-lg">
              <Image 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop" 
                alt="Business professional with phone"
                width={500}
                height={600}
                className="object-cover object-top w-full h-auto rounded-b-none"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
