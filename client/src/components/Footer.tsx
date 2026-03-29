/**
 * Footer — Eventique
 * Style: Glass card footer with links and social icons
 */
import { Instagram, Twitter, Facebook, Linkedin } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663491263720/K56cdPnQSuQdfWaFVptZpB/one-heart-logo-hq-6ziWDjtTJmHa9STSwb7gTY.webp";

const footerLinks = {
  Services: ["Wedding Planning", "Corporate Events", "Birthday Parties", "Galas & Concerts", "Photography"],
  Company: ["About Us", "Our Team", "Careers", "Press", "Blog"],
  Support: ["FAQ", "Pricing", "Contact", "Privacy Policy", "Terms of Service"],
};

export default function Footer() {
  const { language } = useLanguage();
  return (
    <footer className="py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="glass-card rounded-3xl p-8 sm:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <img src={LOGO_URL} alt="One Heart" className="w-14 h-14 object-contain" />
                <div>
                  <span
                    className="text-lg font-bold block"
                    style={{ fontFamily: "'Fraunces', Georgia, serif", color: "oklch(0.12 0.01 285)" }}
                  >
                    One Heart
                  </span>
                  <span
                    className="text-xs text-gray-500 tracking-widest"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    Event Planning
                  </span>
                </div>
              </div>
              <p
                className="text-sm text-gray-500 leading-relaxed"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Crafting extraordinary events with precision, passion, and an eye for detail.
              </p>
              {/* Social links */}
              <div className="flex gap-3 mt-2">
                {[Instagram, Twitter, Facebook, Linkedin].map((Icon, i) => (
                  <button
                    key={i}
                    className="w-9 h-9 rounded-xl bg-gray-100 hover:bg-violet-100 flex items-center justify-center transition-colors"
                    onClick={() => toast.info("Feature coming soon")}
                  >
                    <Icon className="w-4 h-4 text-gray-600" />
                  </button>
                ))}
              </div>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4
                  className="text-sm font-bold text-gray-800 mb-4 uppercase tracking-widest"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {category}
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {links.map((link) => (
                    <li key={link}>
                      <button
                        className="text-sm text-gray-500 hover:text-violet-600 transition-colors text-left"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                        onClick={() => toast.info("Feature coming soon")}
                      >
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p
              className="text-xs text-gray-400"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              © 2025 Eventique. All rights reserved.
            </p>
            <p
              className="text-xs text-gray-400"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Crafted with care for unforgettable moments.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
