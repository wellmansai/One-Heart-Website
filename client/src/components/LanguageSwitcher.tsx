/**
 * LanguageSwitcher — Toggle between English and Arabic
 * Style: Glass button in navbar
 */
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "ar" : "en")}
      className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/40 hover:bg-white/60 backdrop-blur-sm border border-white/30 transition-all duration-200 text-sm font-medium text-gray-700"
      title={language === "en" ? "Switch to Arabic" : "Switch to English"}
    >
      <Globe className="w-4 h-4" />
      <span>{language === "en" ? "العربية" : "English"}</span>
    </button>
  );
}
