import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, CreditCard, Wallet, ArrowLeftRight, Code, LucideIcon } from "lucide-react";
import type { FeaturesSection } from "@/lib/types";

const iconMap: Record<string, LucideIcon> = {
  globe: Globe,
  "credit-card": CreditCard,
  wallet: Wallet,
  "arrow-left-right": ArrowLeftRight,
  code: Code,
};

const colorMap: Record<string, string> = {
  blue: "bg-blue-50 text-blue-600",
  purple: "bg-purple-50 text-purple-600",
  emerald: "bg-emerald-50 text-emerald-600",
  orange: "bg-orange-50 text-orange-600",
  pink: "bg-pink-50 text-pink-600",
};

interface FeaturesProps {
  data: FeaturesSection;
}

export default function Features({ data }: FeaturesProps) {
  return (
    <section id="product" className="py-20 bg-gray-50">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {data.features.map((feature) => {
            const IconComponent = iconMap[feature.icon] || Globe;
            const colorClass = colorMap[feature.color] || colorMap.blue;
            return (
              <Card key={feature.title} className="group hover:shadow-lg transition-shadow border-0 bg-white">
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 ${colorClass} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-500">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
