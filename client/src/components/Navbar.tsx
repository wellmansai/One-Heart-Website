/**
 * Navbar — Eventique
 * Style: Glass header, white/88 backdrop blur, rounded pill nav links
 * Font: Outfit (nav items), Fraunces (logo)
 * Features: One Heart logo, language switcher, bilingual nav
 */
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";
import LanguageSwitcher from "./LanguageSwitcher";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663491263720/K56cdPnQSuQdfWaFVptZpB/one-heart-original-logo_d0ae4548.png";

const getNavLinks = (lang: string) => [
  { label: t("nav.services", lang as any), href: "#services" },
  { label: t("nav.howItWorks", lang as any), href: "#how-it-works" },
  { label: t("nav.portfolio", lang as any), href: "#portfolio" },
  { label: t("nav.testimonials", lang as any), href: "#testimonials" },
  { label: t("nav.contact", lang as any), href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language } = useLanguage();
  const navLinks = getNavLinks(language);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div
          className={`glass-header rounded-2xl px-6 py-3 flex items-center justify-between transition-all duration-300 ${
            scrolled ? "shadow-lg" : ""
          }`}
        >
          {/* Logo */}
          <a
            href="#"
            className="flex items-center group hover:opacity-90 transition-opacity"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          >
            <img src={LOGO_URL} alt="One Heart" className="h-16 sm:h-20 object-contain" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 rounded-xl text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-purple-50/80 transition-all duration-200"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA & Language */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            <button
              onClick={() => handleNavClick("#contact")}
              className="btn-black text-sm py-2.5 px-5"
            >
              {t("nav.planEvent", language)}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-xl hover:bg-purple-50 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden mt-2 glass-card rounded-2xl p-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-purple-50 transition-colors"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {link.label}
              </button>
            ))}
            <div className="px-4 py-2">
              <LanguageSwitcher />
            </div>
            <button
              onClick={() => handleNavClick("#contact")}
              className="btn-black mt-2 justify-center"
            >
              {t("nav.planEvent", language)}
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
