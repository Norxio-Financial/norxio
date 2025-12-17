import { Badge } from "@/components/ui/badge";
import { TrendingUp, Shield, Zap, Globe, LucideIcon } from "lucide-react";
import type { WhyTrustSection } from "@/lib/types";

const iconMap: Record<string, LucideIcon> = {
  "trending-up": TrendingUp,
  shield: Shield,
  zap: Zap,
  globe: Globe,
};

interface WhyTrustProps {
  data: WhyTrustSection;
}

export default function WhyTrust({ data }: WhyTrustProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">{data.badge}</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {data.title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-br from-slate-100 to-slate-50 rounded-3xl p-12 flex items-center justify-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">N</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">NORXIO</h3>
              <p className="text-gray-500 text-sm mt-1">Your global payment partner</p>
            </div>
          </div>

          <div className="space-y-6">
            {data.reasons.map((reason) => {
              const IconComponent = iconMap[reason.icon] || Globe;
              return (
                <div key={reason.title} className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{reason.title}</h3>
                    <p className="text-gray-500 text-sm">{reason.description}</p>
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
