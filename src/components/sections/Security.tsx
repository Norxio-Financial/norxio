import Image from "next/image";
import type { SecuritySection } from "@/lib/types";

interface SecurityProps {
  data: SecuritySection;
}

export default function Security({ data }: SecurityProps) {
  return (
    <section className="py-20 lg:py-24 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Image */}
          <div className="relative order-last lg:order-first">
            <div className="relative aspect-square max-w-[500px] mx-auto lg:mx-0">
              {/* The image appears to contain the shield and circles based on user instruction to use the specific file */}
              <Image
                src="/images/home/security.png"
                alt="Security Shield"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col items-start text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#E8EEF5] rounded-full mb-6">
              <span className="w-2 h-2 bg-[#1368C4] rounded-full"></span>
              <span className="text-sm font-medium text-[#1e3a5f]">{data.badge}</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#1e3a5f] leading-tight mb-6">
              {data.title}
            </h2>

            {/* Description */}
            <p className="text-slate-500 text-base lg:text-lg leading-relaxed max-w-xl">
              {data.subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
