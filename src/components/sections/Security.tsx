import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Lock, CheckCircle, LucideIcon } from "lucide-react";
import type { SecuritySection } from "@/lib/types";

const iconMap: Record<string, LucideIcon> = {
  building: Building2,
  lock: Lock,
  check: CheckCircle,
};

interface SecurityProps {
  data: SecuritySection;
}

export default function Security({ data }: SecurityProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="secondary" className="mb-4">{data.badge}</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {data.title}
            </h2>
            <p className="text-gray-600 mb-8">
              {data.subtitle}
            </p>
          </div>

          <div className="space-y-4">
            {data.features.map((feature) => {
              const IconComponent = iconMap[feature.icon] || CheckCircle;
              return (
                <Card key={feature.title} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-slate-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-gray-500 text-sm">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
