import type { TrustedBySection } from "@/lib/types";

interface TrustedByProps {
  data: TrustedBySection;
}

export default function TrustedBy({ data }: TrustedByProps) {
  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-500 mb-8">
          {data.heading}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          {data.companies.map((company) => (
            <span
              key={company}
              className="text-xl font-semibold text-gray-300 hover:text-gray-400 transition-colors"
            >
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
