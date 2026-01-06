"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Globe } from "lucide-react";

// Navigation dropdown data
const companyItems = [
  { title: "About", description: "The story behind Norxio", href: "/about" },
  { title: "Careers", description: "Join our global team", href: "/careers" },
  { title: "Blog", description: "Insights & industry stories", href: "/blog" },
];

const productItems = [
  { title: "Multi-Currency Accounts", description: "Hold and manage global balances", href: "/products/multi-currency-account" },
  { title: "Fx & Currency Exchange", description: "Exchange at competitive rates", href: "/products/fx-exchange" },
  { title: "Global payout", description: "Send money worldwide", href: "/products/global-payout" },
  { title: "Corporate Cards", description: "Instant business spending", href: "/products/corporate-cards" },
  { title: "Api Integration", description: "Automate your workflows", href: "/products/api-integration" },
];

const customerItems = [
  { title: "E-commerce & Retail", description: "Global payments for online stores", href: "/customers/e-commerce-retail" },
  { title: "Freelancers & Agencies", description: "Get paid in any currency", href: "/customers/freelancers-agencies" },
  { title: "Import & Export", description: "Better FX rates for trade", href: "/customers/import-export" },
  { title: "Education & eLearning", description: "Collect tuition fees globally", href: "/customers/education-elearning" },
];

const resourceItems = [
  { title: "Security & Compliance", description: "Enterprise-grade protection", href: "/resources/security" },
  // { title: "Support", description: "Help when you need it", href: "/resources/support" },
  { title: "Contact us", description: "Speak to our team", href: "/get-started" },
];

const languages = [
  { code: "en", label: "ENG", flag: "ca" },
  { code: "fr", label: "FRA", flag: "fr" },
  { code: "es", label: "ESP", flag: "es" },
  { code: "de", label: "DEU", flag: "de" },
];

interface NavItemProps {
  title: string;
  description: string;
  href: string;
}

function NavItem({ title, description, href }: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`group block p-3 rounded-md transition-all duration-300 ease-out border-l-[3px] ${isActive
        ? "border-l-[#1e3a5f] bg-slate-50"
        : "border-l-transparent hover:border-l-[#1e3a5f] hover:bg-slate-50"
        }`}
    >
      <h4 className={`text-[13px] font-semibold transition-colors duration-200 ${isActive ? "text-slate-900" : "text-slate-800 group-hover:text-slate-900"}`}>{title}</h4>
      <p className="text-[12px] text-slate-500 mt-0.5 leading-snug transition-colors duration-200">{description}</p>
    </Link>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();
  const languageRef = useRef<HTMLDivElement>(null);

  // Close language dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (languageRef.current && !languageRef.current.contains(event.target as Node)) {
        setLanguageOpen(false);
      }
    }

    if (languageOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [languageOpen]);

  // Determine if we should show the solid white header
  // activeDropdown !== null -> Turn white when a dropdown is open
  // pathname.startsWith("/get-started") -> Always white on get-started page
  // isScrolled -> Turn white when scrolled
  const isSolidHeader = isScrolled || activeDropdown !== null || pathname?.startsWith("/get-started") || pathname?.startsWith("/blog") || pathname?.startsWith("/regulatory-requirements");

  // Scroll detection for header background
  useEffect(() => {
    const handleScroll = () => {
      // Change header style after scrolling past ~100px (hero section start)
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial scroll position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownEnter = (name: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(name);
    setLanguageOpen(false);
  };

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const handleDropdownContentEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const toggleMobileSection = (section: string) => {
    setMobileExpanded(mobileExpanded === section ? null : section);
  };

  // Dynamic text colors based on solid header state
  const textColor = isSolidHeader ? "text-slate-800" : "text-white";
  const textColorMuted = isSolidHeader ? "text-slate-600" : "text-white/85";
  const textColorHover = isSolidHeader ? "hover:text-slate-900" : "hover:text-white";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,box-shadow] duration-300 ease-out border-b ${isSolidHeader
          ? "bg-white/95 backdrop-blur-md shadow-sm border-slate-100"
          : "bg-transparent border-transparent"
          }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 z-10">
            <Image
              src={isSolidHeader ? "/Norxio-Dark-Icon.svg" : "/Norxio-White-Icon.svg"}
              alt="Norxio"
              width={34}
              height={21}
              className="h-5 w-auto transition-opacity duration-300"
            />
            <span className={`text-xl font-bold transition-colors duration-300 ${textColor}`}>Norxio</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0.5">
            {/* Company */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter("company")}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors ${activeDropdown === "company" ? textColor : `${textColorMuted} ${textColorHover}`}`}
              >
                Company
                <ChevronDown
                  className={`w-3.5 h-3.5 opacity-70 transition-transform duration-200 ${activeDropdown === "company" ? "rotate-180" : ""}`}
                />
              </button>
            </div>

            {/* Products */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter("products")}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors ${activeDropdown === "products" ? textColor : `${textColorMuted} ${textColorHover}`}`}
              >
                Products
                <ChevronDown
                  className={`w-3.5 h-3.5 opacity-70 transition-transform duration-200 ${activeDropdown === "products" ? "rotate-180" : ""}`}
                />
              </button>
            </div>

            {/* Customers */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter("customers")}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors ${activeDropdown === "customers" ? textColor : `${textColorMuted} ${textColorHover}`}`}
              >
                Customers
                <ChevronDown
                  className={`w-3.5 h-3.5 opacity-70 transition-transform duration-200 ${activeDropdown === "customers" ? "rotate-180" : ""}`}
                />
              </button>
            </div>

            {/* Resources */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter("resources")}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors ${activeDropdown === "resources" ? textColor : `${textColorMuted} ${textColorHover}`}`}
              >
                Resources
                <ChevronDown
                  className={`w-3.5 h-3.5 opacity-70 transition-transform duration-200 ${activeDropdown === "resources" ? "rotate-180" : ""}`}
                />
              </button>
            </div>

            {/* Pricing */}
            <Link
              href="/pricing"
              className={`px-4 py-2 text-sm font-medium transition-colors ${textColorMuted} ${textColorHover}`}
              onMouseEnter={() => setActiveDropdown(null)}
            >
              Pricing
            </Link>
          </div>

          {/* Desktop Right Section */}
          <div className="hidden lg:flex items-center gap-5 z-10">
            {/* Language Selector */}
            <div className="relative" ref={languageRef}>
              <button
                className={`flex items-center gap-2 px-2 py-1.5 text-sm font-medium transition-colors ${textColorMuted} ${textColorHover}`}
                onClick={() => {
                  setLanguageOpen(!languageOpen);
                  setActiveDropdown(null);
                }}
              >
                <Globe className="w-4 h-4" />
                <span>{selectedLanguage.label}</span>
                <ChevronDown
                  className={`w-3 h-3 opacity-70 transition-transform duration-200 ${languageOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Language Dropdown */}
              {languageOpen && (
                <div className="absolute top-full right-0 mt-3 bg-white rounded-lg shadow-2xl border border-slate-100 py-1.5 min-w-[130px] animate-in fade-in slide-in-from-top-2 duration-300 ease-out">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className={`flex items-center gap-2.5 w-full px-4 py-2.5 text-sm text-left hover:bg-slate-50 transition-colors ${selectedLanguage.code === lang.code ? "bg-slate-50 font-medium" : ""
                        }`}
                      onClick={() => {
                        setSelectedLanguage(lang);
                        setLanguageOpen(false);
                      }}
                    >

                      <span className="text-slate-700">{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Login */}
            <button className={`text-sm font-medium transition-colors ${textColorMuted} ${textColorHover}`}>
              Login
            </button>

            {/* Get Started Button */}
            <Button asChild className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white text-sm font-medium px-6 py-2.5 rounded-full">
              <Link href="/get-started">
                Get Started
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 z-10 transition-colors ${textColor}`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Desktop Dropdowns - Full Width Panel */}
        {activeDropdown && (
          <div
            className="hidden lg:block absolute top-20 left-0 right-0 bg-white shadow-xl border-t border-slate-100 animate-in fade-in slide-in-from-top-2 duration-300 ease-out"
            onMouseEnter={handleDropdownContentEnter}
            onMouseLeave={handleDropdownLeave}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              {/* Company Dropdown */}
              {activeDropdown === "company" && (
                <>
                  <h3 className="text-sm font-semibold text-slate-900 mb-4">Learn about who we are</h3>
                  <div className="grid grid-cols-3 gap-1">
                    {companyItems.map((item, i) => (
                      <NavItem key={i} {...item} />
                    ))}
                  </div>
                </>
              )}

              {/* Products Dropdown */}
              {activeDropdown === "products" && (
                <>
                  <h3 className="text-sm font-semibold text-slate-900 mb-4">Explore our financial tools</h3>
                  <div className="grid grid-cols-4 gap-1">
                    {productItems.slice(0, 4).map((item, i) => (
                      <NavItem key={i} {...item} />
                    ))}
                  </div>
                  <div className="grid grid-cols-4 gap-1 mt-1">
                    {productItems.slice(4).map((item, i) => (
                      <NavItem key={i} {...item} />
                    ))}
                  </div>
                </>
              )}

              {/* Customers Dropdown */}
              {activeDropdown === "customers" && (
                <>
                  <h3 className="text-sm font-semibold text-slate-900 mb-4">Industries we serve</h3>
                  <div className="grid grid-cols-4 gap-1">
                    {customerItems.map((item, i) => (
                      <NavItem key={i} {...item} />
                    ))}
                  </div>
                </>
              )}

              {/* Resources Dropdown */}
              {activeDropdown === "resources" && (
                <>
                  <h3 className="text-sm font-semibold text-slate-900 mb-4">Guides, updates & documentation</h3>
                  <div className="grid grid-cols-3 gap-1">
                    {resourceItems.map((item, i) => (
                      <NavItem key={i} {...item} />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-1 max-h-[calc(100vh-5rem)] overflow-y-auto shadow-xl">
            {/* Company Section */}
            <div>
              <button
                className="flex items-center justify-between w-full py-3 text-slate-800 font-medium border-b border-slate-100"
                onClick={() => toggleMobileSection("company")}
              >
                Company
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${mobileExpanded === "company" ? "rotate-180" : ""
                    }`}
                />
              </button>
              {mobileExpanded === "company" && (
                <div className="py-2 pl-4 space-y-1">
                  {companyItems.map((item, i) => (
                    <Link
                      key={i}
                      href={item.href}
                      className="block py-2 text-sm text-slate-600 hover:text-slate-900"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Products Section */}
            <div>
              <button
                className="flex items-center justify-between w-full py-3 text-slate-800 font-medium border-b border-slate-100"
                onClick={() => toggleMobileSection("products")}
              >
                Products
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${mobileExpanded === "products" ? "rotate-180" : ""
                    }`}
                />
              </button>
              {mobileExpanded === "products" && (
                <div className="py-2 pl-4 space-y-1">
                  {productItems.map((item, i) => (
                    <Link
                      key={i}
                      href={item.href}
                      className="block py-2 text-sm text-slate-600 hover:text-slate-900"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Customers Section */}
            <div>
              <button
                className="flex items-center justify-between w-full py-3 text-slate-800 font-medium border-b border-slate-100"
                onClick={() => toggleMobileSection("customers")}
              >
                Customers
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${mobileExpanded === "customers" ? "rotate-180" : ""
                    }`}
                />
              </button>
              {mobileExpanded === "customers" && (
                <div className="py-2 pl-4 space-y-1">
                  {customerItems.map((item, i) => (
                    <Link
                      key={i}
                      href={item.href}
                      className="block py-2 text-sm text-slate-600 hover:text-slate-900"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Resources Section */}
            <div>
              <button
                className="flex items-center justify-between w-full py-3 text-slate-800 font-medium border-b border-slate-100"
                onClick={() => toggleMobileSection("resources")}
              >
                Resources
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${mobileExpanded === "resources" ? "rotate-180" : ""
                    }`}
                />
              </button>
              {mobileExpanded === "resources" && (
                <div className="py-2 pl-4 space-y-1">
                  {resourceItems.map((item, i) => (
                    <Link
                      key={i}
                      href={item.href}
                      className="block py-2 text-sm text-slate-600 hover:text-slate-900"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Pricing */}
            <Link
              href="/pricing"
              className="block py-3 text-slate-800 font-medium border-b border-slate-100"
              onClick={() => setMobileOpen(false)}
            >
              Pricing
            </Link>

            {/* Language Selector */}
            <div className="pt-4 pb-2">
              <button
                className="flex items-center gap-2 text-slate-700"
                onClick={() => toggleMobileSection("language")}
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">{selectedLanguage.label}</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${mobileExpanded === "language" ? "rotate-180" : ""
                    }`}
                />
              </button>
              {mobileExpanded === "language" && (
                <div className="py-2 pl-6 space-y-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className={`flex items-center gap-2 py-2 text-sm ${selectedLanguage.code === lang.code
                        ? "text-slate-900 font-medium"
                        : "text-slate-600"
                        }`}
                      onClick={() => {
                        setSelectedLanguage(lang);
                        setMobileExpanded(null);
                      }}
                    >

                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 space-y-3">
              <Button variant="outline" className="w-full border-slate-200 text-slate-800 hover:bg-slate-50">
                Login
              </Button>
              <Button className="w-full bg-[#2563EB] hover:bg-[#1d4ed8] text-white rounded-full" asChild>
                <Link href="/get-started">
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
