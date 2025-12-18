import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center bg-[#F8FAFC] px-4 py-20 relative">
            {/* 404 Graphic */}
            <div className="relative flex items-center justify-center gap-8 mb-8 lg:mb-12">
                {/* Left 4 */}
                <span className="text-[180px] sm:text-[220px] lg:text-[300px] font-bold text-[#eef2f6] leading-none select-none -mr-8 lg:-mr-12">
                    4
                </span>

                {/* Box Image - Represents 0 */}
                <div className="relative w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] lg:w-[240px] lg:h-[240px] z-10 shrink-0 mt-8 lg:mt-12">
                    <Image
                        src="/404-box.svg"
                        alt="0"
                        fill
                        className="object-contain drop-shadow-xl"
                        priority
                    />
                </div>

                {/* Right 4 */}
                <span className="text-[180px] sm:text-[220px] lg:text-[300px] font-bold text-[#eef2f6] leading-none select-none -ml-8 lg:-ml-12">
                    4
                </span>
            </div>

            {/* Text Content */}
            <div className="text-center z-10 max-w-md mx-auto relative -mt-4 lg:-mt-8">
                <h1 className="text-3xl lg:text-4xl font-bold text-[#0B2545] mb-4">
                    Oops! Page not found
                </h1>
                <p className="text-slate-500 font-medium text-base lg:text-lg mb-10 leading-relaxed max-w-sm mx-auto">
                    The page you&apos;re looking for doesn&apos;t exist or has been moved.
                </p>

                <div className="flex items-center justify-center gap-4">
                    <Button asChild className="bg-[#2563EB] hover:bg-blue-600 text-white rounded-lg px-8 py-2.5 h-auto text-sm font-semibold shadow-lg shadow-blue-500/20 transition-all hover:translate-y-[-2px]">
                        <Link href="/">
                            Go to home
                        </Link>
                    </Button>
                    <Button asChild variant="outline" className="border-slate-300 text-slate-700 hover:bg-white hover:text-[#0B2545] rounded-lg px-8 py-2.5 h-auto text-sm font-semibold hover:border-slate-400 transition-all bg-transparent">
                        <Link href="/contact">
                            Talk to sale
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
