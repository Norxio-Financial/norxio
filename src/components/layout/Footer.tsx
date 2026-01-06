"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { type Footer as FooterType, type SiteSettings } from "@/lib/types";
import { countryList, type Country } from "@/lib/country-list";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Check } from "lucide-react";

interface FooterProps {
    data: FooterType;
    settings: SiteSettings;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Footer(_props: FooterProps) {
    const [country, setCountry] = useState<Country>({ name: "Ghana", code: "gh" });
    const [open, setOpen] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [error, setError] = useState(false);

    useEffect(() => {
        // Automatic country detection
        const detectCountry = async () => {
            try {
                const response = await fetch('https://ipapi.co/json/');
                if (response.ok) {
                    const data = await response.json();
                    const detectedCode = data.country_code?.toLowerCase();
                    const detectedCountry = countryList.find(c => c.code.toLowerCase() === detectedCode);

                    if (detectedCountry) {
                        setCountry(detectedCountry);
                    }
                }
            } catch (error) {
                console.error("Failed to detect location", error);
                setError(true);
            }
        };

        detectCountry();
    }, []);

    // Hardcoded columns to match the design exactness
    const links = {
        company: [
            { label: "About", href: "/about" },
            { label: "Careers", href: "/careers" },
            { label: "Blog", href: "/blog" },
        ],
        product: [
            { label: "Multi-Currency Accounts", href: "/products/multi-currency" },
            { label: "FX & Currency Exchange", href: "/products/fx-exchange" },
            { label: "Global Payouts", href: "/products/payouts" },
            { label: "Virtual Cards", href: "/products/cards" },
            { label: "Api Integration", href: "/products/api" },
        ],
        resources: [
            { label: "Security & Compliance", href: "/security" },
            { label: "Support", href: "/support" },
            { label: "Contact Us", href: "/get-started" },
        ],
        legal: [
            { label: "Terms & Conditions", href: "/legal/terms" },
            { label: "Privacy Policy", href: "/legal/privacy" },
            { label: "Cookie Policy", href: "/legal/cookie" },
        ],
    };

    return (
        <footer className="bg-[#0B2545] text-white py-16 relative overflow-hidden font-sans">
            {/* Background Watermark */}
            <div className="absolute bottom-[-6vw] left-1/2 -translate-x-1/2 text-[22vw] font-bold text-white/[0.02] pointer-events-none select-none leading-none whitespace-nowrap z-0">
                NORXIO
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-24 mb-6">
                    {/* Tagline & Logo */}
                    <div className="lg:w-[32%] space-y-8">
                        <Link href="/" className="inline-block">
                            <div className="flex items-center gap-2.5">
                                <Image
                                    src="/Norxio-White-Icon.svg"
                                    alt="Norxio"
                                    width={34}
                                    height={21}
                                    className="h-6 w-auto"
                                />
                                <span className="text-2xl font-bold text-white">Norxio</span>
                            </div>
                        </Link>
                        <h2 className="text-base font-normal leading-relaxed text-blue-100/90 max-w-[280px]">
                            A smarter way for businesses to hold, convert, and move money globally.
                        </h2>
                    </div>

                    {/* Columns */}
                    <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">
                        {/* Company */}
                        <div>
                            <h3 className="text-[17px] font-medium mb-5 text-white">Company</h3>
                            <ul className="space-y-4">
                                {links.company.map((link) => (
                                    <li key={link.label}>
                                        <Link href={link.href} className="text-[#bfccdf] hover:text-white transition-colors text-[14px]">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Product */}
                        <div>
                            <h3 className="text-[17px] font-medium mb-5 text-white">Product</h3>
                            <ul className="space-y-4">
                                {links.product.map((link) => (
                                    <li key={link.label}>
                                        <Link href={link.href} className="text-[#bfccdf] hover:text-white transition-colors text-[14px]">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Resources */}
                        <div>
                            <h3 className="text-[17px] font-medium mb-5 text-white">Resources</h3>
                            <ul className="space-y-4">
                                {links.resources.map((link) => (
                                    <li key={link.label}>
                                        <Link href={link.href} className="text-[#bfccdf] hover:text-white transition-colors text-[14px]">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Legal */}
                        <div>
                            <h3 className="text-[17px] font-medium mb-5 text-white">Legal</h3>
                            <ul className="space-y-4">
                                {links.legal.map((link) => (
                                    <li key={link.label}>
                                        <Link href={link.href} className="text-[#bfccdf] hover:text-white transition-colors text-[14px]">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Social and Branding Row */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-20 mb-10 pt-4">
                    <Link href="/" className="flex items-center gap-2.5">
                        <Image src="/Norxio-White-Icon.svg" alt="Norxio" width={32} height={32} className="w-8 h-8" />
                        <span className="text-2xl font-bold text-white tracking-tight">Norxio</span>
                    </Link>

                    <div className="flex items-center gap-3">
                        {/* X (Twitter) */}
                        <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
                            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                        </a>
                        {/* WhatsApp */}
                        <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
                            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 0 0 1.333 4.993L2 22l5.233-1.373A9.957 9.957 0 0 0 12.016 22c5.507 0 9.989-4.478 9.989-9.984 0-5.507-4.481-9.984-9.993-9.984zm0 18.068a8.055 8.055 0 0 1-4.122-1.127l-.295-.176-3.058.802.816-2.981-.192-.305a8.055 8.055 0 0 1-1.23-4.298c0-4.444 3.617-8.06 8.077-8.06 4.459 0 8.076 3.616 8.076 8.06 0 4.444-3.618 8.06-8.072 8.085zm4.415-6.046c-.242-.121-1.433-.707-1.655-.788-.222-.081-.383-.121-.544.121-.162.242-.626.788-.767.949-.141.161-.282.182-.524.06-1.558-.775-2.583-1.39-3.626-3.186-.179-.311.179-.288.513-.956.06-.121.03-.227-.015-.318-.045-.091-.403-.97-.554-1.328-.147-.35-.298-.302-.409-.307l-.348-.005c-.121 0-.318.045-.484.227-.166.182-.636.621-.636 1.514 0 .893.651 1.761.742 1.882.091.121 1.282 1.957 3.106 2.744 1.077.464 1.498.497 2.053.414.618-.092 1.433-.585 1.635-1.15.202-.565.202-1.049.141-1.15-.06-.101-.222-.162-.464-.283z" /></svg>
                        </a>
                        {/* LinkedIn */}
                        <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
                            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                        </a>
                        {/* Instagram */}
                        <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-label="Instagram" > <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 4a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.5-.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0z" /> </svg>
                        </a>
                        {/* Facebook */}
                        <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
                            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                        </a>
                    </div>
                </div>

                {/* Separator */}
                <div className="border-t border-white/10 mb-8"></div>

                {/* Bottom Section */}
                <div className="space-y-6 pb-12">
                    {/* Country Selector */}
                    <div>
                        <Dialog open={open} onOpenChange={setOpen}>
                            <DialogTrigger asChild>
                                <button className="flex items-center gap-2 hover:bg-white/5 py-1.5 px-3 -ml-3 rounded-lg transition-colors group cursor-pointer">
                                    <div className="relative w-5 h-5 rounded-full overflow-hidden shrink-0 border border-white/20">
                                        <Image
                                            src={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png`}
                                            alt={country.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <span className="text-sm font-medium text-white group-hover:text-blue-200 transition-colors">{country.name}</span>
                                </button>
                            </DialogTrigger>
                            <DialogContent className="p-0 overflow-hidden sm:max-w-[425px]">
                                <DialogHeader className="p-4 pb-2 border-b">
                                    <DialogTitle>Select your country</DialogTitle>
                                </DialogHeader>
                                <Command className="overflow-hidden bg-white">
                                    <CommandInput placeholder="Search country..." />
                                    <CommandList className="max-h-[300px]">
                                        <CommandEmpty>No country found.</CommandEmpty>
                                        <CommandGroup>
                                            {countryList.map((c) => (
                                                <CommandItem
                                                    key={c.code}
                                                    value={c.name}
                                                    onSelect={() => {
                                                        setCountry(c);
                                                        setOpen(false);
                                                    }}
                                                    className="cursor-pointer aria-selected:bg-gray-100"
                                                >
                                                    <div className="flex items-center gap-3 w-full">
                                                        <div className="relative w-5 h-5 rounded-full overflow-hidden shrink-0 border border-black/10">
                                                            <Image
                                                                src={`https://flagcdn.com/w40/${c.code.toLowerCase()}.png`}
                                                                alt={c.name}
                                                                fill
                                                                className="object-cover"
                                                            />
                                                        </div>
                                                        <span className="text-sm font-medium text-gray-900">{c.name}</span>
                                                        {country.code === c.code && (
                                                            <Check className="ml-auto h-4 w-4 text-blue-600" />
                                                        )}
                                                    </div>
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    </CommandList>
                                </Command>
                            </DialogContent>
                        </Dialog>
                    </div>

                    {/* Disclaimer */}
                    <div className="text-[13px] text-[#bfccdf] leading-relaxed opacity-80 max-w-7xl">
                        Norxio services are subject to local laws, licensing, and <Link href="/regulatory-requirements" className="font-semibold text-[#3b82f6] hover:text-[#60a5fa] hover:underline">regulatory requirements</Link>. Norxio operates under strict industry standards for data protection, encryption, and authentication to guarantee secure onboarding, reliable verification processes, and responsible handling of sensitive user information. Our systems are continuously monitored, audited, and updated to maintain the highest level of trust, transparency, and operational integrity across all services.
                    </div>
                </div>
            </div>
        </footer>
    );
}
