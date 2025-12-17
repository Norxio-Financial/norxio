import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-[#0f2744] to-[#1e3a5f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-blue-300 text-sm mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              Try our AI solutions
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Global payments, one account to power your business.
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Manage money worldwide with multi-currency accounts, clear and transparent FX pricing, and fast payouts.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/signup"
                className="bg-[#f97316] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#ea580c] transition-colors"
              >
                Open an Account
              </Link>
              <Link
                href="/contact"
                className="bg-white/10 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors border border-white/20"
              >
                Talk to Sales
              </Link>
            </div>
          </div>

          {/* Right Content - Currency Display */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 max-w-sm ml-auto">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🇺🇸</span>
                    <span className="font-medium">USD</span>
                  </div>
                  <span className="text-green-400">+2.4%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🇬🇧</span>
                    <span className="font-medium">GBP</span>
                  </div>
                  <span className="text-green-400">+1.8%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🇪🇺</span>
                    <span className="font-medium">EUR</span>
                  </div>
                  <span className="text-red-400">-0.5%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🇯🇵</span>
                    <span className="font-medium">JPY</span>
                  </div>
                  <span className="text-green-400">+0.9%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🇨🇦</span>
                    <span className="font-medium">CAD</span>
                  </div>
                  <span className="text-green-400">+1.2%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
