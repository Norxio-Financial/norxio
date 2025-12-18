import { Shield, Globe, DollarSign, Clock, CheckCircle, LucideIcon } from "lucide-react";
import type { WhyTrustSection } from "@/lib/types";

const iconMap: Record<string, LucideIcon> = {
  "dollar-sign": DollarSign,
  shield: Shield,
  globe: Globe,
  clock: Clock,
};

interface WhyTrustProps {
  data: WhyTrustSection;
}

export default function WhyTrust({ data }: WhyTrustProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Why business trust us */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
              <span className="text-sm font-medium text-blue-600">{data.badge}</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
              {data.title}
            </h2>

            <p className="text-gray-600 mb-8 max-w-md">
              {data.subtitle}
            </p>

            {/* Trust Points */}
            <div className="space-y-4">
              {data.bulletPoints?.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-blue-600" />
                  </div>
                  <p className="text-gray-600 text-sm">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Feature Cards */}
          <div className="space-y-6">
            {data.reasons.map((reason, index) => {
              const IconComponent = iconMap[reason.icon] || Globe;
              const isFirst = index === 0;
              
              return (
                <div key={reason.title} className="bg-gray-50 rounded-2xl p-6 flex gap-6">
                  <div className="flex-shrink-0">
                    <div className={`w-14 h-14 ${isFirst ? "bg-[#1e3a5f]" : "bg-blue-100"} rounded-xl flex items-center justify-center`}>
                      <IconComponent className={`w-7 h-7 ${isFirst ? "text-white" : "text-blue-600"}`} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1e3a5f] text-lg mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
