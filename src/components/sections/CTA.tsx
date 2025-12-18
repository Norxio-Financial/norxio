import { Button } from "@/components/ui/button";
import type { CTASection } from "@/lib/types";

interface CTAProps {
  data: CTASection;
}

export default function CTA({ data }: CTAProps) {
  return (
    <section className="py-20 bg-[#1e3a5f] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        {/* Decorative dots pattern */}
        <div className="absolute top-8 left-8 grid grid-cols-4 gap-2">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-white/20 rounded-full"></div>
          ))}
        </div>
        <div className="absolute bottom-8 right-8 grid grid-cols-4 gap-2">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-white/20 rounded-full"></div>
          ))}
        </div>
        
        {/* Decorative circles */}
        <div className="absolute top-1/2 -left-20 w-40 h-40 border border-white/10 rounded-full"></div>
        <div className="absolute top-1/2 -right-20 w-60 h-60 border border-white/10 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {data.title}
          </h2>
          <p className="text-white/80 text-lg mb-8">
            {data.subtitle}
          </p>
          <Button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 py-6 text-base font-medium rounded-xl">
            {data.buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
}
