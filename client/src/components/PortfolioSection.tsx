/**
 * PortfolioSection — Eventique
 * Style: Masonry-style image grid with glass overlay on hover
 * Animation: GSAP ScrollTrigger — images scale in from center
 */
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const WEDDING_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663491263720/K56cdPnQSuQdfWaFVptZpB/service-wedding-UEggFH8574fE8hvSvo9jXs.webp";
const CORPORATE_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663491263720/K56cdPnQSuQdfWaFVptZpB/service-corporate-HKF55LSXe94yWw4SmN7kZ4.webp";
const BIRTHDAY_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663491263720/K56cdPnQSuQdfWaFVptZpB/service-birthday-c9TKdWZwfYgK6it28iNcnL.webp";
const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663491263720/K56cdPnQSuQdfWaFVptZpB/hero-event-DGPT3edYTMGyoX9VKeY6wu.webp";

const portfolio = [
  {
    title: "The Hartley Wedding",
    category: "Wedding",
    image: WEDDING_IMG,
    size: "large",
    guests: "280 guests",
    location: "Grand Ballroom, NYC",
  },
  {
    title: "TechVision Summit 2024",
    category: "Corporate",
    image: CORPORATE_IMG,
    size: "small",
    guests: "600 attendees",
    location: "Convention Center, LA",
  },
  {
    title: "Sofia's Sweet 30",
    category: "Birthday",
    image: BIRTHDAY_IMG,
    size: "small",
    guests: "120 guests",
    location: "Rooftop Venue, Miami",
  },
  {
    title: "The Lavender Gala",
    category: "Gala",
    image: HERO_IMG,
    size: "large",
    guests: "350 guests",
    location: "The Ritz, Chicago",
  },
];

export default function PortfolioSection() {
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
          { opacity: 0, scale: 0.93 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: { trigger: gridRef.current, start: "top 80%" },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

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
              Our Work
            </span>
          </div>
          <h2
            className="text-4xl sm:text-5xl font-black tracking-tight mb-4"
            style={{ fontFamily: "'Fraunces', Georgia, serif", color: "oklch(0.12 0.01 285)" }}
          >
            Events That{" "}
            <span className="italic" style={{ color: "oklch(0.52 0.22 293)" }}>
              Inspire
            </span>
          </h2>
          <p
            className="text-gray-500 text-lg max-w-lg mx-auto"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            A glimpse into the moments we've crafted for our clients.
          </p>
        </div>

        {/* Portfolio grid — masonry style */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolio.map((item) => (
            <div
              key={item.title}
              className={`portfolio-item relative rounded-3xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-purple-200/40 transition-all duration-400 ${
                item.size === "large" ? "md:row-span-1" : ""
              }`}
              style={{ height: item.size === "large" ? "380px" : "280px" }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span
                    className="inline-block text-xs font-semibold text-violet-300 uppercase tracking-widest mb-2"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {item.category}
                  </span>
                  <h3
                    className="text-xl font-bold text-white mb-1"
                    style={{ fontFamily: "'Fraunces', serif" }}
                  >
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm text-white/80" style={{ fontFamily: "'Outfit', sans-serif" }}>
                      {item.guests}
                    </span>
                    <span className="text-white/40">·</span>
                    <span className="text-sm text-white/80" style={{ fontFamily: "'Outfit', sans-serif" }}>
                      {item.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* External link icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-xl glass-card flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ExternalLink className="w-4 h-4 text-gray-700" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            className="btn-outline"
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Start Your Story
          </button>
        </div>
      </div>
    </section>
  );
}
