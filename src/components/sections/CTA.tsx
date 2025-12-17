import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { CTASection } from "@/lib/types";

interface CTAProps {
  data: CTASection;
}

export default function CTA({ data }: CTAProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {data.title}
        </h2>
        <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
          {data.subtitle}
        </p>
        <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
          {data.buttonText}
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </section>
  );
}
