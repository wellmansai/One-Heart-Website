/**
 * ServicesSection — Eventique
 * Style: 3-column glass card grid, image thumbnails, hover lift effect
 * Animation: GSAP ScrollTrigger — staggered card entrance from below
 */
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Heart, Briefcase, PartyPopper, Music, Camera, Utensils } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

gsap.registerPlugin(ScrollTrigger);

const WEDDING_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663491263720/K56cdPnQSuQdfWaFVptZpB/service-wedding-UEggFH8574fE8hvSvo9jXs.webp";
const CORPORATE_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663491263720/K56cdPnQSuQdfWaFVptZpB/service-corporate-HKF55LSXe94yWw4SmN7kZ4.webp";
const BIRTHDAY_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663491263720/K56cdPnQSuQdfWaFVptZpB/service-birthday-c9TKdWZwfYgK6it28iNcnL.webp";

const getServices = (lang: string) => [
  {
    icon: Heart,
    title: t("services.weddingPlanning", lang as any),
    subtitle: t("services.fromProposalToForever", lang as any),
    description: t("services.weddingDescription", lang as any),
    image: WEDDING_IMG,
    tag: t("services.mostPopular", lang as any),
    tagColor: "bg-rose-100 text-rose-600",
    features: (t("services.weddingFeatures", lang as any) as unknown) as string[],
    price: t("services.weddingPrice", lang as any),
  },
  {
    icon: Briefcase,
    title: t("services.corporateEvents", lang as any),
    subtitle: t("services.impressInspireConnect", lang as any),
    description: t("services.corporateDescription", lang as any),
    image: CORPORATE_IMG,
    tag: t("services.enterprise", lang as any),
    tagColor: "bg-blue-100 text-blue-600",
    features: (t("services.corporateFeatures", lang as any) as unknown) as string[],
    price: t("services.corporatePrice", lang as any),
  },
  {
    icon: PartyPopper,
    title: t("services.birthdayMilestones", lang as any),
    subtitle: t("services.celebrateEveryChapter", lang as any),
    description: t("services.birthdayDescription", lang as any),
    image: BIRTHDAY_IMG,
    tag: t("services.personal", lang as any),
    tagColor: "bg-amber-100 text-amber-600",
    features: (t("services.birthdayFeatures", lang as any) as unknown) as string[],
    price: t("services.birthdayPrice", lang as any),
  },
  {
    icon: Music,
    title: t("services.concertsGalas", lang as any),
    subtitle: t("services.grandScaleFlawlessExecution", lang as any),
    description: t("services.concertDescription", lang as any),
    image: null,
    tag: t("services.premium", lang as any),
    tagColor: "bg-violet-100 text-violet-600",
    features: (t("services.concertFeatures", lang as any) as unknown) as string[],
    price: "Custom Quote",
    gradient: "from-violet-500 to-purple-700",
  },
  {
    icon: Camera,
    title: t("services.photoFilm", lang as any),
    subtitle: t("services.memoriesThatLastForever", lang as any),
    description: t("services.photoDescription", lang as any),
    image: null,
    tag: t("services.addOn", lang as any),
    tagColor: "bg-green-100 text-green-600",
    features: (t("services.photoFeatures", lang as any) as unknown) as string[],
    price: t("services.photoPrice", lang as any),
    gradient: "from-emerald-400 to-teal-600",
  },
  {
    icon: Utensils,
    title: t("services.cateringTastings", lang as any),
    subtitle: t("services.cuisineThatDelights", lang as any),
    description: t("services.cateringDescription", lang as any),
    image: null,
    tag: t("services.exclusive", lang as any),
    tagColor: "bg-orange-100 text-orange-600",
    features: (t("services.cateringFeatures", lang as any) as unknown) as string[],
    price: t("services.cateringPrice", lang as any),
    gradient: "from-orange-400 to-rose-500",
  },
];

export default function ServicesSection() {
  const { language } = useLanguage();
  const services = getServices(language);
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
          },
        }
      );

      // Cards stagger
      const cards = gridRef.current?.querySelectorAll(".service-card");
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 60, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.65,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 80%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [language]);

  return (
    <section id="services" ref={sectionRef} className="py-24 relative">
      {/* Decorative blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-violet-100/40 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div ref={titleRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-violet-500" />
            <span
              className="text-xs font-semibold text-violet-700 tracking-widest uppercase"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              {t("services.badge", language)}
            </span>
          </div>
          <h2
            className="text-4xl sm:text-5xl font-black tracking-tight mb-4"
            style={{ fontFamily: "'Fraunces', Georgia, serif", color: "oklch(0.12 0.01 285)" }}
          >
            {t("services.headline", language)}
          </h2>
          <p
            className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            {t("services.description", language)}
          </p>
        </div>

        {/* Services grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="service-card glass-card rounded-3xl overflow-hidden group hover:shadow-2xl hover:shadow-purple-200/40 hover:-translate-y-2 transition-all duration-300"
              >
                {/* Image or gradient header */}
                <div className="relative h-48 overflow-hidden">
                  {service.image ? (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div
                      className={`w-full h-full bg-gradient-to-br ${service.gradient} flex items-center justify-center`}
                    >
                      <Icon className="w-16 h-16 text-white/80" />
                    </div>
                  )}
                  {/* Tag badge */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${service.tagColor} backdrop-blur-sm`}
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      {service.tag}
                    </span>
                  </div>
                  {/* Icon overlay for image cards */}
                  {service.image && (
                    <div className="absolute bottom-3 right-3 w-10 h-10 rounded-xl bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md">
                      <Icon className="w-5 h-5 text-violet-600" />
                    </div>
                  )}
                </div>

                {/* Card content */}
                <div className="p-6">
                  <p
                    className="text-xs font-medium text-violet-500 uppercase tracking-widest mb-1"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {service.subtitle}
                  </p>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ fontFamily: "'Fraunces', serif", color: "oklch(0.12 0.01 285)" }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-sm text-gray-500 leading-relaxed mb-4"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {service.description}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-1.5 mb-5">
                    {service.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-sm text-gray-600"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span
                      className="text-sm font-semibold text-gray-700"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      {service.price}
                    </span>
                    <button
                      className="flex items-center gap-1.5 text-sm font-semibold text-violet-600 hover:text-violet-800 transition-colors group/btn"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                      onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                    >
                      {t("services.bookNow", language)}
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
