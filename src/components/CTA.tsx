import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0f2744] to-[#1e3a5f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Start Moving Money Smarter
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Join businesses using Norxio to streamline global payments, access transparent FX, and move funds faster.
        </p>
        <Link
          href="/signup"
          className="inline-block bg-[#f97316] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#ea580c] transition-colors"
        >
          Get started
        </Link>
      </div>
    </section>
  );
}
