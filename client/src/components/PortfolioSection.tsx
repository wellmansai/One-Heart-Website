/**
 * PortfolioSection — Eventique
 * Style: Masonry-style image grid with glass overlay on hover
 * Animation: GSAP ScrollTrigger — images scale in from center
 */
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

gsap.registerPlugin(ScrollTrigger);

const WEDDING_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663491263720/K56cdPnQSuQdfWaFVptZpB/service-wedding-UEggFH8574fE8hvSvo9jXs.webp";
const CORPORATE_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663491263720/K56cdPnQSuQdfWaFVptZpB/service-corporate-HKF55LSXe94yWw4SmN7kZ4.webp";
const BIRTHDAY_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663491263720/K56cdPnQSuQdfWaFVptZpB/service-birthday-c9TKdWZwfYgK6it28iNcnL.webp";
const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663491263720/K56cdPnQSuQdfWaFVptZpB/hero-event-DGPT3edYTMGyoX9VKeY6wu.webp";

const getPortfolio = (lang: string) => [
  {
    title: t("portfolio.hartleyWedding", lang as any),
    category: t("portfolio.wedding", lang as any),
    image: WEDDING_IMG,
    size: "large",
    guests: t("portfolio.hartleyGuests", lang as any),
    location: t("portfolio.hartleyLocation", lang as any),
  },
  {
    title: t("portfolio.techVisionSummit", lang as any),
    category: t("portfolio.corporate", lang as any),
    image: CORPORATE_IMG,
    size: "small",
    guests: t("portfolio.techVisionGuests", lang as any),
    location: t("portfolio.techVisionLocation", lang as any),
  },
  {
    title: t("portfolio.sofiaSweet30", lang as any),
    category: t("portfolio.birthday", lang as any),
    image: BIRTHDAY_IMG,
    size: "small",
    guests: t("portfolio.sofiaGuests", lang as any),
    location: t("portfolio.sofiaLocation", lang as any),
  },
  {
    title: t("portfolio.lavenderGala", lang as any),
    category: t("portfolio.gala", lang as any),
    image: HERO_IMG,
    size: "large",
    guests: t("portfolio.galaGuests", lang as any),
    location: t("portfolio.galaLocation", lang as any),
  },
];

export default function PortfolioSection() {
  const { language } = useLanguage();
  const portfolio = getPortfolio(language);
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: titleRef.current, start: "top 85%" },
        }
      );

      const items = gridRef.current?.querySelectorAll(".portfolio-item");
      if (items) {
        gsap.fromTo(
          items,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: { trigger: gridRef.current, start: "top 80%" },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [language]);

  return (
    <section id="portfolio" ref={sectionRef} className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-violet-500" />
            <span
              className="text-xs font-semibold text-violet-700 tracking-widest uppercase"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              {t("portfolio.badge", language)}
            </span>
          </div>
          <h2
            className="text-4xl sm:text-5xl font-black tracking-tight mb-4"
            style={{ fontFamily: "'Fraunces', Georgia, serif", color: "oklch(0.12 0.01 285)" }}
          >
            {t("portfolio.headline", language)}
          </h2>
          <p
            className="text-gray-500 text-lg max-w-lg mx-auto"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            {t("portfolio.description", language)}
          </p>
        </div>

        {/* Portfolio Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-max">
          {portfolio.map((item, i) => (
            <div
              key={i}
              className={`portfolio-item group relative overflow-hidden rounded-2xl cursor-pointer ${
                item.size === "large" ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p
                    className="text-xs font-semibold text-violet-300 uppercase tracking-widest mb-2"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {item.category}
                  </p>
                  <h3
                    className="text-xl font-bold text-white mb-1"
                    style={{ fontFamily: "'Fraunces', serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-300 mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    {item.guests} · {item.location}
                  </p>
                  <button
                    onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-violet-300 hover:text-white transition-colors"
                  >
                    {t("portfolio.startYourStory", language)}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
