"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const industries = [
    "Professional Services",
    "Consultancies",
    "Holding Companies",
    "Real Estate & Property",
    "Agencies & Marketing",
    "Importers & Wholesale",
    "Exporters & Distributors",
    "Marketplace & Platforms",
    "E-commerce & Online Retail",
    "Hospitality & Travel",
    "IT Service & Managed Services",
    "Construction & Infrastructure",
    "Media & Communication",
    "Tech companies",
    "Manufacturing",
    "Freight, Shipping & Signs",
    "Education & Edtech",
    "Healthcare & Edtech",
    "Healthcare & Pharmaceutical",
    "Sports & Events",
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#1e3a5f] rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">Norxio</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="relative">
              <button
                className="flex items-center gap-1 text-gray-600 hover:text-gray-900"
                onClick={() => setActiveDropdown(activeDropdown === "product" ? null : "product")}
              >
                Product
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="relative">
              <button
                className="flex items-center gap-1 text-gray-600 hover:text-gray-900"
                onClick={() => setActiveDropdown(activeDropdown === "solution" ? null : "solution")}
              >
                Solution
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === "solution" && (
                <div className="absolute top-full left-0 mt-2 w-[600px] bg-white rounded-lg shadow-lg border border-gray-100 p-6">
                  <h3 className="text-sm font-semibold text-gray-500 mb-4">Industries we serve</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {industries.map((industry) => (
                      <Link
                        key={industry}
                        href="#"
                        className="text-sm text-gray-600 hover:text-[#1e3a5f]"
                      >
                        {industry}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900">
              Blog
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-gray-900">
              Pricing
            </Link>
          </nav>

          {/* Currency Flags & Auth */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-1">
              <span className="text-sm">🇺🇸</span>
              <span className="text-sm text-gray-600">USD</span>
            </div>
            <div className="flex -space-x-1">
              <span className="text-xs">🇬🇧</span>
              <span className="text-xs">🇪🇺</span>
              <span className="text-xs">🇯🇵</span>
              <span className="text-xs">🇨🇦</span>
            </div>
            <Link href="/login" className="text-gray-600 hover:text-gray-900">
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-[#1e3a5f] text-white px-4 py-2 rounded-lg hover:bg-[#2d4a6f] transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col gap-4">
              <Link href="#" className="text-gray-600 hover:text-gray-900">Product</Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">Solution</Link>
              <Link href="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link>
              <Link href="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link>
              <Link href="/login" className="text-gray-600 hover:text-gray-900">Login</Link>
              <Link
                href="/signup"
                className="bg-[#1e3a5f] text-white px-4 py-2 rounded-lg text-center hover:bg-[#2d4a6f]"
              >
                Get Started
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
