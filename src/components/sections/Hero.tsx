import { Button } from "@/components/ui/button";
import type { HeroSection } from "@/lib/types";
import Image from "next/image";

interface HeroProps {
  data: HeroSection;
}

export default function Hero({ data }: HeroProps) {
  return (
    <section
      className="pt-20 pb-0 overflow-hidden relative min-h-[600px]"
      style={{
        background: "linear-gradient(90deg, #09325E 0%, #0E4D91 30%, #1368C4 100%)"
      }}
    >
      {/* Background Vector Lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/home/hero-bg-vectors.svg"
          alt=""
          fill
          className="object-cover object-right opacity-100"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-end min-h-[580px]">
          {/* Left Content */}
          <div className="py-16 lg:py-24">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full mb-8">
              <Image
                src="/images/icons/StackSimple.svg"
                alt=""
                width={18}
                height={18}
                className="w-4 h-4"
              />
              <span className="text-sm font-medium text-white/90">{data.badge}</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[3.75rem] font-bold text-white leading-[1.15] mb-6">
              {data.title}
              <br />
              {data.highlight}.
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-lg text-blue-100/80 mb-10 max-w-md leading-relaxed">
              {data.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button className="bg-white hover:bg-gray-100 text-[#0E4D91] px-7 py-6 text-sm font-semibold rounded-full shadow-lg">
                {data.primaryCta}
              </Button>
              <Button
                variant="outline"
                className="border-white/30 hover:bg-white/10 text-white px-7 py-6 text-sm font-medium rounded-full bg-transparent"
              >
                {data.secondaryCta}
              </Button>
            </div>
          </div>

          {/* Right - Hero Image */}
          <div className="relative flex items-end justify-center lg:justify-end self-end">
            <div className="absolute w-full max-w-2xl lg:max-w-3xl">
              {/* <Image
                src="/images/home/hero-section.png"
                alt="Business professional"
                width={800}
                height={900}
                className="object-contain object-bottom w-full h-auto"
                priority
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
