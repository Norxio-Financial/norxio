"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { label: "Company", href: "#", hasDropdown: true },
  { label: "Product", href: "#", hasDropdown: true },
  { label: "Customers", href: "#", hasDropdown: true },
  { label: "Resources", href: "#", hasDropdown: true },
  { label: "Pricing", href: "#pricing", hasDropdown: false },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{ background: "linear-gradient(90deg, #09325E 0%, #0E4D91 30%, #1368C4 100%)" }}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/Norxio-White-Icon.svg"
            alt="Norxio"
            width={34}
            height={21}
            className="h-5 w-auto"
          />
          <span className="text-xl font-bold text-white">Norxio</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors"
            >
              {item.label}
              {item.hasDropdown && <ChevronDown className="w-4 h-4 opacity-70" />}
            </Link>
          ))}
        </div>

        {/* Desktop Right Section */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Language Selector with Flag */}
          <button className="flex items-center gap-2 px-2 py-1.5 text-sm font-medium text-white/90 hover:text-white transition-colors">
            <Image
              src="https://flagcdn.com/w20/ca.png"
              alt="Canada"
              width={20}
              height={15}
              className="rounded-sm"
            />
            <span>ENG</span>
          </button>

          {/* Login */}
          <button className="text-sm font-medium text-white/90 hover:text-white transition-colors">
            Login
          </button>

          {/* Get Started Button */}
          <Button className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white text-sm font-medium px-6 py-2.5 rounded-full">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0E4D91]/95 backdrop-blur-lg border-t border-white/10 px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center justify-between py-3 text-white font-medium border-b border-white/10"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
              {item.hasDropdown && <ChevronDown className="w-4 h-4 opacity-70" />}
            </Link>
          ))}
          <div className="pt-4 space-y-3">
            <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
              Login
            </Button>
            <Button className="w-full bg-[#2563EB] hover:bg-[#1d4ed8] text-white rounded-full">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

