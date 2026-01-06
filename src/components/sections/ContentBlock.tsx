"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ContentBlockProps {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  badge?: string;
  ctaText?: string;
  ctaLink?: string;
  className?: string;
}

export default function ContentBlock({
  title,
  subtitle,
  description,
  image,
  imageAlt,
  imagePosition = "right",
  badge,
  ctaText,
  ctaLink,
  className
}: ContentBlockProps) {
  return (
    <section className={cn("py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn(
          "grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-20 items-center",
          imagePosition === "left" ? "lg:grid-flow-dense" : ""
        )}>
          {/* Content */}
          <div className={cn(imagePosition === "left" ? "lg:col-start-2" : "")}>
            {badge && (
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 bg-blue-50 rounded-full mb-4 sm:mb-6">
                <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-blue-600 rounded-full"></span>
                <span className="text-xs sm:text-sm font-medium text-blue-600">{badge}</span>
              </div>
            )}

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B2545] mb-4 sm:mb-6">
              {title}
            </h2>

            {subtitle && (
              <p className="text-lg sm:text-xl text-slate-700 font-medium mb-3 sm:mb-4">
                {subtitle}
              </p>
            )}

            {description.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-base sm:text-lg text-slate-600 leading-relaxed mb-4 sm:mb-6 last:mb-6 last:sm:mb-8">
                {paragraph}
              </p>
            ))}

            {ctaText && ctaLink && (
              <Link href={ctaLink}>
                <Button className="bg-[#2563EB] hover:bg-blue-700 text-white px-6 sm:px-8 py-4 sm:py-5 lg:py-6 rounded-full text-sm sm:text-base font-medium">
                  {ctaText}
                </Button>
              </Link>
            )}
          </div>

          {/* Image */}
          <div className={cn(
            "relative w-full h-[300px] sm:h-[400px] md:h-[480px] lg:w-[496px] lg:h-[520px] rounded-[12px] sm:rounded-[15px] overflow-hidden",
            imagePosition === "left" ? "lg:col-start-1" : ""
          )}>
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
