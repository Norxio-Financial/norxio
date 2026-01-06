"use client";

export default function OpenPositions() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0f2c4f] rounded-[32px] py-24 px-4 text-center relative overflow-hidden">
          {/* Decorative Vectors */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Open Positions Coming Shortly
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
              Our team is expanding soon — stay updated for upcoming positions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
