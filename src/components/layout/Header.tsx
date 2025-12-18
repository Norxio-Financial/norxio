"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
// import type { SiteSettings } from "@/lib/types"; removed unused import

const navItems = [
  { label: "Company", href: "#", hasDropdown: true },
  { label: "Products", href: "#", hasDropdown: true },
  { label: "Customers", href: "#", hasDropdown: true },
  { label: "Resources", href: "#", hasDropdown: true },
  { label: "Pricing", href: "#pricing", hasDropdown: false },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#1e3a5f] rounded-lg flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="text-xl font-bold text-[#1e3a5f]">Norxio</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-50"
            >
              {item.label}
              {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
            </Link>
          ))}
        </div>

        {/* Desktop Right Section */}
        <div className="hidden lg:flex items-center gap-3">
          <button className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
            <Globe className="w-4 h-4" />
            <span>EN</span>
          </button>
          <Button variant="ghost" className="text-sm font-medium">
            Login
          </Button>
          <Button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-sm font-medium px-5">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center justify-between py-3 text-gray-700 font-medium border-b border-gray-100"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
              {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
            </Link>
          ))}
          <div className="pt-4 space-y-3">
            <Button variant="outline" className="w-full">
              Login
            </Button>
            <Button className="w-full bg-[#2563eb] hover:bg-[#1d4ed8]">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
