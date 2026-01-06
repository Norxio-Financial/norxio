"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/aboutus/about4.jpg"
        alt="Office background"
        fill
        className="object-cover"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0B2545]/80" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-4xl mx-auto">
          Building the future of global business payments.
        </h2>
        <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
          Join thousands of businesses that trust Norxio for their international financial needs.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/get-started">
            <Button className="bg-white text-[#0B2545] hover:bg-blue-50 px-8 py-6 rounded-full text-base font-semibold">
              Get Started
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 rounded-full text-base bg-transparent">
              Contact Sales
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
