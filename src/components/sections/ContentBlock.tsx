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
    <section className={cn("py-20 lg:py-28 overflow-hidden", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn(
          "grid lg:grid-cols-2 gap-12 lg:gap-20 items-center",
          imagePosition === "left" ? "lg:grid-flow-dense" : ""
        )}>
          {/* Content */}
          <div className={cn(imagePosition === "left" ? "lg:col-start-2" : "")}>
            {badge && (
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 rounded-full mb-6">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                <span className="text-sm font-medium text-blue-600">{badge}</span>
              </div>
            )}

            <h2 className="text-3xl md:text-4xl font-bold text-[#0B2545] mb-6">
              {title}
            </h2>

            {subtitle && (
              <p className="text-xl text-slate-700 font-medium mb-4">
                {subtitle}
              </p>
            )}

            {description.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-lg text-slate-600 leading-relaxed mb-6 last:mb-8">
                {paragraph}
              </p>
            ))}

            {ctaText && ctaLink && (
              <Link href={ctaLink}>
                <Button className="bg-[#2563EB] hover:bg-blue-700 text-white px-8 py-6 rounded-full text-base font-medium">
                  {ctaText}
                </Button>
              </Link>
            )}
          </div>

          {/* Image */}
          <div className={cn(
            "relative w-full lg:w-[496px] h-[520px] rounded-[15px] overflow-hidden",
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
