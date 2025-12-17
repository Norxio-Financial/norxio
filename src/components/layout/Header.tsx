"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import type { SiteSettings } from "@/lib/types";

const languages = [
  { code: "en-US", flag: "🇺🇸", label: "English (US)" },
  { code: "en-GB", flag: "🇬🇧", label: "English (UK)" },
  { code: "eu", flag: "🇪🇺", label: "Europe" },
  { code: "jp", flag: "🇯🇵", label: "日本語" },
];

interface HeaderProps {
  data: SiteSettings;
}

export default function Header({ data }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">N</span>
          </div>
          <span className="text-xl font-semibold">{data.siteName}</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {data.navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 px-2 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span>{selectedLang.flag}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${langOpen ? "rotate-180" : ""}`} />
            </button>
            {langOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setLangOpen(false)} />
                <div className="absolute right-0 top-full mt-1 w-40 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-20">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setSelectedLang(lang);
                        setLangOpen(false);
                      }}
                      className={`w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-50 transition-colors ${
                        selectedLang.code === lang.code ? "bg-gray-50 text-gray-900" : "text-gray-600"
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
          <Button variant="ghost" size="sm">Login</Button>
          <Button size="sm">Get Started</Button>
        </div>

        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          {data.navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="block text-gray-600 py-2">
              {link.label}
            </Link>
          ))}
          <div className="py-2 border-t border-gray-100">
            <p className="text-xs text-gray-400 mb-2">Language</p>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setSelectedLang(lang)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm ${
                    selectedLang.code === lang.code 
                      ? "bg-slate-800 text-white" 
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <span>{lang.flag}</span>
                  <span>{lang.label}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="pt-3 space-y-2">
            <Button variant="outline" className="w-full">Login</Button>
            <Button className="w-full">Get Started</Button>
          </div>
        </div>
      )}
    </header>
  );
}
