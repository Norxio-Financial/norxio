"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/lib/i18n";

export default function NotFound() {
    const { t, isRTL } = useTranslation();

    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center bg-[#F8FAFC] px-4 py-12 sm:py-16 md:py-20 relative">
            {/* 404 Graphic */}
            <div className="relative flex items-center justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 mb-6 sm:mb-8 lg:mb-12">
                {/* Left 4 */}
                <span className="text-[100px] sm:text-[140px] md:text-[180px] lg:text-[220px] xl:text-[300px] font-bold text-[#eef2f6] leading-none select-none -mr-4 sm:-mr-6 md:-mr-8 lg:-mr-12">
                    4
                </span>

                {/* Box Image - Represents 0 */}
                <div className="relative w-[80px] h-[80px] sm:w-[110px] sm:h-[110px] md:w-[140px] md:h-[140px] lg:w-[180px] lg:h-[180px] xl:w-[240px] xl:h-[240px] z-10 shrink-0 mt-4 sm:mt-6 md:mt-8 lg:mt-12">
                    <Image
                        src="/404-box.svg"
                        alt="0"
                        fill
                        className="object-contain drop-shadow-xl"
                        priority
                    />
                </div>

                {/* Right 4 */}
                <span className="text-[100px] sm:text-[140px] md:text-[180px] lg:text-[220px] xl:text-[300px] font-bold text-[#eef2f6] leading-none select-none -ml-4 sm:-ml-6 md:-ml-8 lg:-ml-12">
                    4
                </span>
            </div>

            {/* Text Content */}
            <div className={`text-center z-10 max-w-md mx-auto relative -mt-2 sm:-mt-4 lg:-mt-8 px-4 ${isRTL ? 'font-arabic' : ''}`}>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#0B2545] mb-3 sm:mb-4">
                    {t.notFound?.title ?? "Oops! Page not found"}
                </h1>
                <p className="text-slate-500 font-medium text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 lg:mb-10 leading-relaxed max-w-sm mx-auto">
                    {t.notFound?.description ?? "The page you're looking for doesn't exist or has been moved."}
                </p>

                <div className={`flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                    <Button asChild className="bg-brand-blue hover:bg-brand-blue-hover text-white rounded-lg px-6 sm:px-8 py-2 sm:py-2.5 h-auto text-xs sm:text-sm font-semibold shadow-lg shadow-blue-500/20 transition-all hover:translate-y-[-2px] w-full sm:w-auto cursor-pointer">
                        <Link href="/">
                            {t.notFound?.goHome ?? "Go to home"}
                        </Link>
                    </Button>
                    <Button asChild variant="outline" className="border-slate-300 text-slate-700 hover:bg-white hover:text-[#0B2545] rounded-lg px-6 sm:px-8 py-2 sm:py-2.5 h-auto text-xs sm:text-sm font-semibold hover:border-slate-400 transition-all bg-transparent w-full sm:w-auto cursor-pointer">
                        <Link href="/get-started">
                            {t.notFound?.talkToSales ?? "Talk to sales"}
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
