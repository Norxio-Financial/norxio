"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative h-[600px] lg:h-[700px] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/aboutus/hero-about.jpg"
        alt="Team working together"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(90deg, #052c54 0%, #052c54 10%, rgba(5, 44, 84, 0.9) 35%, rgba(5, 44, 84, 0) 100%)",
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex items-center z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl text-white">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/10">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
              <span className="text-sm font-medium">About</span>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Partner for Smarter Global Finance
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg lg:text-xl text-white/90 mb-10 max-w-xl leading-relaxed">
              Norxio is a new standard in cross-border payments and financial technology. We help businesses expand globally by simplifying currency exchange and payouts to the world.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/get-started">
                <Button className="bg-white text-blue-900 hover:bg-blue-50 text-base py-6 px-8 rounded-full font-semibold">
                  Get Started
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 text-base py-6 px-8 rounded-full bg-transparent"
                >
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
