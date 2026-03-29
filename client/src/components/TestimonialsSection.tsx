/**
 * TestimonialsSection — Eventique
 * Style: Horizontal scrolling testimonial cards with glass effect
 * Animation: GSAP ScrollTrigger — cards slide in from right
 */
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

gsap.registerPlugin(ScrollTrigger);

const getTestimonials = (lang: string) => [
  {
    name: t("testimonials.sarahJames", lang as any),
    role: t("testimonials.weddingClients", lang as any),
    rating: 5,
    text: t("testimonials.sarahTestimonial", lang as any),
    avatar: "SH",
    avatarColor: "from-violet-400 to-purple-600",
    event: t("testimonials.sarahEvent", lang as any),
  },
  {
    name: t("testimonials.marcus", lang as any),
    role: t("testimonials.ceo", lang as any),
    rating: 5,
    text: t("testimonials.marcusTestimonial", lang as any),
    avatar: "MC",
    avatarColor: "from-blue-400 to-indigo-600",
    event: t("testimonials.marcusEvent", lang as any),
  },
  {
    name: t("testimonials.isabella", lang as any),
    role: t("testimonials.birthdayClient", lang as any),
    rating: 5,
    text: t("testimonials.isabellaTestimonial", lang as any),
    avatar: "IM",
    avatarColor: "from-rose-400 to-pink-600",
    event: t("testimonials.isabellaEvent", lang as any),
  },
  {
    name: t("testimonials.williams", lang as any),
    role: t("testimonials.charityClient", lang as any),
    rating: 5,
    text: t("testimonials.williamsTestimonial", lang as any),
    avatar: "WF",
    avatarColor: "from-emerald-400 to-teal-600",
    event: t("testimonials.williamsEvent", lang as any),
  },
  {
    name: t("testimonials.priya", lang as any),
    role: t("testimonials.hrDirector", lang as any),
    rating: 5,
    text: t("testimonials.priyaTestimonial", lang as any),
    avatar: "PS",
    avatarColor: "from-amber-400 to-orange-500",
    event: t("testimonials.priyaEvent", lang as any),
  },
];

export default function TestimonialsSection() {
  const { language } = useLanguage();
  const testimonials = getTestimonials(language);
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

      const cards = cardsRef.current?.querySelectorAll(".testimonial-card");
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, x: 50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: { trigger: cardsRef.current, start: "top 80%" },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [language]);

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-50/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-violet-500" />
            <span
              className="text-xs font-semibold text-violet-700 tracking-widest uppercase"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              {t("testimonials.badge", language)}
            </span>
          </div>
          <h2
            className="text-4xl sm:text-5xl font-black tracking-tight mb-4"
            style={{ fontFamily: "'Fraunces', Georgia, serif", color: "oklch(0.12 0.01 285)" }}
          >
            {t("testimonials.headline", language)}
          </h2>
          <p
            className="text-gray-500 text-lg max-w-lg mx-auto"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            {t("testimonials.description", language)}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="testimonial-card glass-card rounded-3xl p-6 flex flex-col justify-between hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Quote icon */}
              <Quote className="w-5 h-5 text-violet-300 mb-3 opacity-60" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Text */}
              <p
                className="text-sm text-gray-600 mb-6 leading-relaxed flex-grow"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {testimonial.text}
              </p>

              {/* Avatar + Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.avatarColor} flex items-center justify-center text-white font-bold text-sm`}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <p
                    className="text-sm font-bold text-gray-900"
                    style={{ fontFamily: "'Fraunces', serif" }}
                  >
                    {testimonial.name}
                  </p>
                  <p
                    className="text-xs text-gray-500"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Event */}
              <p
                className="text-xs text-violet-600 mt-3 pt-3 border-t border-gray-100"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {testimonial.event}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
