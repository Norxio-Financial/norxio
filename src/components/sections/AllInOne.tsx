import type { AllInOneSection } from "@/lib/types";

interface AllInOneProps {
  data: AllInOneSection;
}

export default function AllInOne({ data }: AllInOneProps) {
  return (
    <section className="py-24 bg-[#1e3a5f] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {/* Top wave pattern */}
        <div className="absolute top-0 left-0 right-0 h-32">
          <svg viewBox="0 0 1440 120" className="w-full h-full fill-[#2a4a6f]/30">
            <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,75 1440,60 L1440,0 L0,0 Z" />
          </svg>
        </div>
        
        {/* Bottom wave pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-32 rotate-180">
          <svg viewBox="0 0 1440 120" className="w-full h-full fill-[#2a4a6f]/30">
            <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,75 1440,60 L1440,0 L0,0 Z" />
          </svg>
        </div>
        
        {/* Decorative circles */}
        <div className="absolute top-10 left-10 w-20 h-20 border border-white/10 rounded-full"></div>
        <div className="absolute top-20 left-24 w-8 h-8 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 border border-white/10 rounded-full"></div>
        <div className="absolute bottom-20 right-40 w-16 h-16 bg-white/5 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
            <span className="text-sm font-medium text-white/80">{data.badge}</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-3xl mx-auto leading-tight">
            {data.title}
          </h2>
        </div>
      </div>
    </section>
  );
}
