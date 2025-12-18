import { Shield, Lock, CheckCircle, Building, LucideIcon } from "lucide-react";
import type { SecuritySection } from "@/lib/types";

const iconMap: Record<string, LucideIcon> = {
  shield: Shield,
  lock: Lock,
  check: CheckCircle,
  building: Building,
};

interface SecurityProps {
  data: SecuritySection;
}

export default function Security({ data }: SecurityProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
            <span className="text-sm font-medium text-blue-600">{data.badge}</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">
            {data.title}
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-lg leading-relaxed">
            {data.subtitle}
          </p>
        </div>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {data.features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon] || Shield;
            return (
              <div key={index} className="text-center">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="font-semibold text-[#1e3a5f] text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm">
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
