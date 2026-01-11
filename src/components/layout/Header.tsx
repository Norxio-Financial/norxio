"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { useTranslation, type Language } from "@/lib/i18n";



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
      className={`group block p-3 rounded-md transition-all duration-300 ease-out ltr:border-l-[3px] rtl:border-r-[3px] ${isActive
        ? "ltr:border-l-[#1e3a5f] rtl:border-r-[#1e3a5f] bg-slate-50"
        : "border-transparent ltr:hover:border-l-[#1e3a5f] rtl:hover:border-r-[#1e3a5f] hover:bg-slate-50"
        }`}
    >
      <h4 className={`text-[13px] font-semibold transition-colors duration-200 rtl:text-right ${isActive ? "text-slate-900" : "text-slate-800 group-hover:text-slate-900"}`}>{title}</h4>
      <p className="text-[12px] text-slate-500 mt-0.5 leading-snug transition-colors duration-200 rtl:text-right">{description}</p>
    </Link>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();
  const languageRef = useRef<HTMLDivElement>(null);

  // Multi-language support
  const { language, setLanguage, t, languages } = useTranslation();

  // Navigation data with translations
  const companyItems = [
    { title: t.header.about, description: t.header.aboutDesc, href: "/about" },
    { title: t.header.careers, description: t.header.careersDesc, href: "/careers" },
    { title: t.header.blog, description: t.header.blogDesc, href: "/blog" },
  ];

  const productItems = [
    { title: t.header.multiCurrency, description: t.header.multiCurrencyDesc, href: "/products/multi-currency-account" },
    { title: t.header.fxExchange, description: t.header.fxExchangeDesc, href: "/products/fx-exchange" },
    { title: t.header.globalPayout, description: t.header.globalPayoutDesc, href: "/products/global-payout" },
    { title: t.header.corporateCards, description: t.header.corporateCardsDesc, href: "/products/corporate-cards" },
    { title: t.header.apiIntegration, description: t.header.apiIntegrationDesc, href: "/products/api-integration" },
  ];

  const customerItems = [
    { title: t.header.ecommerce, description: t.header.ecommerceDesc, href: "/customers/e-commerce-retail" },
    { title: t.header.freelancers, description: t.header.freelancersDesc, href: "/customers/freelancers-agencies" },
    { title: t.header.importExport, description: t.header.importExportDesc, href: "/customers/import-export" },
    { title: t.header.manufacturing, description: t.header.manufacturingDesc, href: "/customers/manufacturing-supply-chain" },
    { title: t.header.freightLogistics, description: t.header.freightLogisticsDesc, href: "/customers/freight-logistics" },
    { title: t.header.construction, description: t.header.constructionDesc, href: "/customers/construction-infrastructure" },
    { title: t.header.hospitality, description: t.header.hospitalityDesc, href: "/customers/hospitality-travel-events" },
  ];

  const resourceItems = [
    { title: t.header.security, description: t.header.securityDesc, href: "/resources/security" },
    { title: t.header.contactUs, description: t.header.contactUsDesc, href: "/get-started" },
  ];

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

  const isSolidHeader = isScrolled || activeDropdown !== null || pathname?.startsWith("/get-started") || pathname?.startsWith("/blog") || pathname?.startsWith("/regulatory-requirements");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

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

  const textColor = isSolidHeader ? "text-slate-800" : "text-white";
  const textColorMuted = isSolidHeader ? "text-slate-600" : "text-white/85";
  const textColorHover = isSolidHeader ? "hover:text-slate-900" : "hover:text-white";

  // Get current language label
  const currentLang = languages.find(l => l.code === language);

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
                className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors cursor-pointer ${activeDropdown === "company" ? textColor : `${textColorMuted} ${textColorHover}`}`}
              >
                {t.header.company}
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
                className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors cursor-pointer ${activeDropdown === "products" ? textColor : `${textColorMuted} ${textColorHover}`}`}
              >
                {t.header.products}
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
                className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors cursor-pointer ${activeDropdown === "customers" ? textColor : `${textColorMuted} ${textColorHover}`}`}
              >
                {t.header.customers}
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
                className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors cursor-pointer ${activeDropdown === "resources" ? textColor : `${textColorMuted} ${textColorHover}`}`}
              >
                {t.header.resources}
                <ChevronDown
                  className={`w-3.5 h-3.5 opacity-70 transition-transform duration-200 ${activeDropdown === "resources" ? "rotate-180" : ""}`}
                />
              </button>
            </div>

            {/* Pricing */}
            <Link
              href="/pricing"
              className={`px-4 py-2 text-sm font-medium transition-colors cursor-pointer ${textColorMuted} ${textColorHover}`}
              onMouseEnter={() => setActiveDropdown(null)}
            >
              {t.header.pricing}
            </Link>
          </div>

          {/* Desktop Right Section */}
          <div className="hidden lg:flex items-center gap-5 z-10">
            {/* Language Selector */}
            <div className="relative" ref={languageRef}>
              <button
                className={`flex items-center gap-2 px-2 py-1.5 text-sm font-medium transition-colors cursor-pointer ${textColorMuted} ${textColorHover}`}
                onClick={() => {
                  setLanguageOpen(!languageOpen);
                  setActiveDropdown(null);
                }}
              >
                <Globe className="w-4 h-4" />
                <span>{currentLang?.label || "ENG"}</span>
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
                      className={`flex items-center gap-2.5 w-full px-4 py-2.5 text-sm text-left hover:bg-slate-50 transition-colors cursor-pointer ${language === lang.code ? "bg-slate-50 font-medium" : ""
                        }`}
                      onClick={() => {
                        setLanguage(lang.code as Language);
                        setLanguageOpen(false);
                      }}
                    >
                      <span className="text-slate-700">{lang.label}</span>
                      <span className="text-slate-400 text-xs">({lang.nativeName})</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Login */}
            <Link href="/get-started">
              <button className={`text-sm font-medium transition-colors cursor-pointer ${textColorMuted} ${textColorHover}`}>
                {t.header.login}
              </button>
            </Link>

            {/* Get Started Button */}
            <Button asChild className="bg-brand-blue hover:bg-brand-blue-hover text-white text-sm font-medium px-6 py-2.5 shadow-sm hover:shadow-md transition-all">
              <Link href="/get-started">
                {t.header.getStarted}
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
                  <h3 className="text-sm font-semibold text-slate-900 mb-4">{t.header.learnAbout}</h3>
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
                  <h3 className="text-sm font-semibold text-slate-900 mb-4">{t.header.exploreTools}</h3>
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
                  <h3 className="text-sm font-semibold text-slate-900 mb-4">{t.header.industriesWeServe}</h3>
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
                  <h3 className="text-sm font-semibold text-slate-900 mb-4">{t.header.guidesUpdates}</h3>
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
                {t.header.company}
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${mobileExpanded === "company" ? "rotate-180" : ""
                    }`}
                />
              </button>
              {mobileExpanded === "company" && (
                <div className="py-2 pl-4 space-y-1 animate-in slide-in-from-top-1 fade-in duration-200">
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
                {t.header.products}
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${mobileExpanded === "products" ? "rotate-180" : ""
                    }`}
                />
              </button>
              {mobileExpanded === "products" && (
                <div className="py-2 pl-4 space-y-1 animate-in slide-in-from-top-1 fade-in duration-200">
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
                {t.header.customers}
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${mobileExpanded === "customers" ? "rotate-180" : ""
                    }`}
                />
              </button>
              {mobileExpanded === "customers" && (
                <div className="py-2 pl-4 space-y-1 animate-in slide-in-from-top-1 fade-in duration-200">
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
                {t.header.resources}
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${mobileExpanded === "resources" ? "rotate-180" : ""
                    }`}
                />
              </button>
              {mobileExpanded === "resources" && (
                <div className="py-2 pl-4 space-y-1 animate-in slide-in-from-top-1 fade-in duration-200">
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
              {t.header.pricing}
            </Link>

            {/* Language Selector */}
            <div className="pt-4 pb-2">
              <button
                className="flex items-center gap-2 text-slate-700"
                onClick={() => toggleMobileSection("language")}
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">{currentLang?.label || "ENG"}</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${mobileExpanded === "language" ? "rotate-180" : ""
                    }`}
                />
              </button>
              {mobileExpanded === "language" && (
                <div className="py-2 pl-6 space-y-1 animate-in slide-in-from-top-1 fade-in duration-200">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className={`flex items-center gap-2 py-2 text-sm cursor-pointer ${language === lang.code
                        ? "text-slate-900 font-medium"
                        : "text-slate-600"
                        }`}
                      onClick={() => {
                        setLanguage(lang.code as Language);
                        setMobileExpanded(null);
                      }}
                    >
                      {lang.label} ({lang.nativeName})
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col gap-3">
              <Link href="/get-started" className="w-full">
                <Button variant="outline" className="w-full border-slate-200 text-slate-800 hover:bg-slate-50 py-5">
                  {t.header.login}
                </Button>
              </Link>
              <Button className="w-full bg-brand-blue hover:bg-brand-blue-hover text-white shadow-sm py-5" asChild>
                <Link href="/get-started">
                  {t.header.getStarted}
                </Link>
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
