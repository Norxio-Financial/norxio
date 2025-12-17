import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, TrendingDown } from "lucide-react";
import type { HeroSection } from "@/lib/types";

interface HeroProps {
  data: HeroSection;
}

export default function Hero({ data }: HeroProps) {
  return (
    <section className="pt-28 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-300 text-sm mb-6">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              {data.badge}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {data.title}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {data.highlight}
              </span>
            </h1>

            <p className="text-lg text-slate-300 mb-8 max-w-lg">
              {data.subtitle}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                {data.primaryCta}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                {data.secondaryCta}
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-white font-medium">Live Rates</span>
                <span className="text-xs text-slate-400">Updated just now</span>
              </div>
              <div className="space-y-3">
                {data.currencies.map((currency) => (
                  <div
                    key={currency.code}
                    className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{currency.flag}</span>
                      <span className="text-white font-medium">{currency.code}</span>
                    </div>
                    <div className={`flex items-center gap-1 ${currency.up ? "text-emerald-400" : "text-red-400"}`}>
                      {currency.up ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                      <span className="text-sm font-medium">{currency.change}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
