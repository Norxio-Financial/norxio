import type { AllInOneSection } from "@/lib/types";
import Image from "next/image";

interface AllInOneProps {
  data: AllInOneSection;
}

export default function AllInOne({ data }: AllInOneProps) {
  return (
    <section className="py-12 lg:py-24 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#09325E] rounded-[2rem] overflow-hidden h-[400px] md:h-[500px] flex items-center justify-center isolate">
          {/* Image - Positioned at bottom center */}
          <div className="absolute inset-x-0 bottom-0 top-0 flex justify-center items-end">
            <div className=" w-full max-w-md md:max-w-lg h-full">
              <Image
                src="/images/home/all-in-one.png"
                alt="All in one payment solution"
                fill
                className="object-contain object-bottom"
                priority
              />
              <div className="absolute inset-0 bg-gray-900/30" />
            </div>
          </div>

          {/* Text Overlay - Centered */}
          <div className="relative z-10 max-w-2xl px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight drop-shadow-sm">
              {data.title}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
