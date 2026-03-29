/**
 * ServicesSection — Eventique
 * Style: 3-column glass card grid, image thumbnails, hover lift effect
 * Animation: GSAP ScrollTrigger — staggered card entrance from below
 */
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Heart, Briefcase, PartyPopper, Music, Camera, Utensils } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const WEDDING_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663491263720/K56cdPnQSuQdfWaFVptZpB/service-wedding-UEggFH8574fE8hvSvo9jXs.webp";
const CORPORATE_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663491263720/K56cdPnQSuQdfWaFVptZpB/service-corporate-HKF55LSXe94yWw4SmN7kZ4.webp";
const BIRTHDAY_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663491263720/K56cdPnQSuQdfWaFVptZpB/service-birthday-c9TKdWZwfYgK6it28iNcnL.webp";

const services = [
  {
    icon: Heart,
    title: "Wedding Planning",
    subtitle: "From Proposal to Forever",
    description:
      "Full-service wedding coordination including venue selection, floral design, catering, photography, and day-of management. Every detail crafted with love.",
    image: WEDDING_IMG,
    tag: "Most Popular",
    tagColor: "bg-rose-100 text-rose-600",
    features: ["Venue Scouting", "Floral Design", "Catering Coordination", "Day-of Management"],
    price: "From $2,500",
  },
  {
    icon: Briefcase,
    title: "Corporate Events",
    subtitle: "Impress. Inspire. Connect.",
    description:
      "Conferences, product launches, team retreats, and award ceremonies. We handle logistics so your team can focus on what matters.",
    image: CORPORATE_IMG,
    tag: "Enterprise",
    tagColor: "bg-blue-100 text-blue-600",
    features: ["AV & Tech Setup", "Branded Experiences", "Guest Management", "Keynote Staging"],
    price: "From $1,800",
  },
  {
    icon: PartyPopper,
    title: "Birthday & Milestones",
    subtitle: "Celebrate Every Chapter",
    description:
      "Milestone birthdays, anniversaries, and life celebrations. We create personalized experiences that reflect who you are.",
    image: BIRTHDAY_IMG,
    tag: "Personal",
    tagColor: "bg-amber-100 text-amber-600",
    features: ["Theme Design", "Entertainment", "Custom Décor", "Surprise Planning"],
    price: "From $800",
  },
  {
    icon: Music,
    title: "Concerts & Galas",
    subtitle: "Grand Scale, Flawless Execution",
    description:
      "Large-scale concerts, charity galas, and fundraising events with full production management and artist coordination.",
    image: null,
    tag: "Premium",
    tagColor: "bg-violet-100 text-violet-600",
    features: ["Stage Production", "Artist Liaison", "Ticketing", "Security & Logistics"],
    price: "Custom Quote",
    gradient: "from-violet-500 to-purple-700",
  },
  {
    icon: Camera,
    title: "Photo & Film Packages",
    subtitle: "Memories That Last Forever",
    description:
      "Professional photography and videography packages for any event. Drone coverage, same-day edits, and cinematic highlight reels.",
    image: null,
    tag: "Add-on",
    tagColor: "bg-green-100 text-green-600",
    features: ["Professional Photography", "Cinematic Video", "Drone Coverage", "Same-Day Edits"],
    price: "From $600",
    gradient: "from-emerald-400 to-teal-600",
  },
  {
    icon: Utensils,
    title: "Catering & Tastings",
    subtitle: "Cuisine That Delights",
    description:
      "Curated menus, private chef experiences, and full catering coordination with top-rated vendors for every dietary preference.",
    image: null,
    tag: "Exclusive",
    tagColor: "bg-orange-100 text-orange-600",
    features: ["Menu Curation", "Private Chef", "Dietary Options", "Bar Service"],
    price: "From $45/person",
    gradient: "from-orange-400 to-rose-500",
  },
];

export default function ServicesSection() {
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
  }, []);

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
              Our Services
            </span>
          </div>
          <h2
            className="text-4xl sm:text-5xl font-black tracking-tight mb-4"
            style={{ fontFamily: "'Fraunces', Georgia, serif", color: "oklch(0.12 0.01 285)" }}
          >
            Everything You Need,{" "}
            <span className="italic" style={{ color: "oklch(0.52 0.22 293)" }}>
              Perfectly Planned
            </span>
          </h2>
          <p
            className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            From intimate dinners to grand galas, our full suite of services ensures every moment is extraordinary.
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
                      Book Now
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
