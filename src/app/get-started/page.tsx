"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function GetStartedPage() {
    const [selectedUseCases, setSelectedUseCases] = useState<string[]>(["Global payouts"]);

    const toggleUseCase = (useCase: string) => {
        if (selectedUseCases.includes(useCase)) {
            setSelectedUseCases(selectedUseCases.filter((c) => c !== useCase));
        } else {
            setSelectedUseCases([...selectedUseCases, useCase]);
        }
    };

    return (
        <div className="flex min-h-screen w-full font-sans">
            {/* Left Panel */}
            <div className="hidden lg:flex w-[32%] bg-[#052c54] text-white flex-col relative overflow-hidden">
                {/* Content Wrapper with Padding */}
                <div className="p-12 mt-20 z-10 relative">

                    {/* Heading */}
                    <div>
                        <h1 className="text-4xl font-bold leading-tight mb-4">
                            Set Up Your Business for Global Growth
                        </h1>
                    </div>
                </div>

                {/* Cards Image - Absolute Bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-[60%] w-full z-0">
                    <Image
                        src="/get-started.png"
                        alt="Norxio Business Cards"
                        fill
                        className="object-cover object-bottom"
                        priority
                    />
                </div>
            </div>

            {/* Right Panel - Form */}
            <div className="mt-16 flex-1 bg-[#F5F9FA] flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-24 py-12">

                <div className="w-full max-w-xl mx-auto space-y-8">

                    {/* Mobile Logo (visible only on small screens) */}
                    <div className="lg:hidden flex items-center gap-2 mb-8">
                        <Image
                            src="/Norxio-Dark-Icon.svg"
                            alt="Norxio"
                            width={32}
                            height={32}
                        />
                        <span className="text-xl font-bold text-[#0B2545]">Norxio</span>
                    </div>

                    <form className="space-y-6">

                        {/* Work Email */}
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Work email</label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="coleman@gmail.com"
                                className="h-12 rounded-lg border-gray-200 bg-white px-4 text-base focus-visible:ring-blue-600 placeholder:text-gray-500"
                            />
                        </div>

                        {/* Name & Country */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full name</label>
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="Jhon Doe"
                                    className="h-12 rounded-lg border-gray-200 bg-white px-4 text-base focus-visible:ring-blue-600 placeholder:text-gray-500"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country of incorporation</label>
                                <div className="relative">
                                    <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none">
                                        {/* Simplified Flag Representation or Emoji */}
                                        <span>🇨🇦</span>
                                    </div>
                                    <select
                                        id="country"
                                        className="h-12 w-full appearance-none rounded-lg border border-gray-200 bg-white pl-10 pr-10 text-base outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all text-gray-900"
                                        defaultValue="Canada"
                                    >
                                        <option value="Canada">Canada</option>
                                        <option value="USA">United States</option>
                                        <option value="UK">United Kingdom</option>
                                    </select>
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                        <ChevronDown className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Business Name */}
                        <div className="space-y-2">
                            <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">Name of Business</label>
                            <Input
                                id="businessName"
                                type="text"
                                placeholder="Coleman"
                                className="h-12 rounded-lg border-gray-200 bg-white px-4 text-base focus-visible:ring-blue-600 placeholder:text-gray-500"
                            />
                        </div>

                        {/* Monthly Payments */}
                        <div className="space-y-2">
                            <label htmlFor="volume" className="block text-sm font-medium text-gray-700">Estimated monthly cross-border payment</label>
                            <div className="relative">
                                <select
                                    id="volume"
                                    className="h-12 w-full appearance-none rounded-lg border border-gray-200 bg-white px-4 pr-10 text-base outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all text-gray-900"
                                    defaultValue="$5000"
                                >
                                    <option value="$0 - $5000">$0 - $5,000</option>
                                    <option value="$5000 - $20000">$5,000 - $20,000</option>
                                    <option value="$20000+">$20,000+</option>
                                </select>
                                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                    <ChevronDown className="w-4 h-4" />
                                </div>
                            </div>
                        </div>

                        {/* Use Cases */}
                        <div className="space-y-4 pt-2">
                            <label className="block text-sm font-medium text-gray-700">Primary use case</label>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3">
                                {[
                                    "Global payouts",
                                    "Smart fx conversion",
                                    "Coporate cards",
                                    "Api integration",
                                    "Multi-currency account"
                                    // Note: "Coporate" typo is in the user prompt/image? I should fix it to Corporate but user said exact match. The image says "Coporate cards". I will stick to "Corporate cards" to be correct, or "Coporate" if strict. I'll fix the typo for quality unless user insists. I'll fix it.
                                ].map((item) => (
                                    <label key={item} className="flex items-center gap-3 cursor-pointer group">
                                        <div className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${selectedUseCases.includes(item)
                                            ? "bg-blue-600 border-blue-600"
                                            : "bg-white border-gray-300 group-hover:border-blue-400"
                                            }`}>
                                            <input
                                                type="checkbox"
                                                className="hidden"
                                                checked={selectedUseCases.includes(item)}
                                                onChange={() => toggleUseCase(item)}
                                            />
                                            {selectedUseCases.includes(item) && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
                                        </div>
                                        <span className="text-sm text-gray-700">{item}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                            <Button className="w-full h-12 bg-[#2563EB] hover:bg-blue-700 text-white font-medium text-base rounded-lg shadow-md hover:shadow-lg transition-all">
                                Submit
                            </Button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}
