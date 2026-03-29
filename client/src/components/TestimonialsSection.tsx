/**
 * TestimonialsSection — Eventique
 * Style: Horizontal scrolling testimonial cards with glass effect
 * Animation: GSAP ScrollTrigger — cards slide in from right
 */
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Sarah & James Hartley",
    role: "Wedding Clients",
    rating: 5,
    text: "Eventique turned our dream wedding into reality. Every single detail was perfect — from the floral arrangements to the lighting. Our guests are still talking about it months later.",
    avatar: "SH",
    avatarColor: "from-violet-400 to-purple-600",
    event: "Wedding · Grand Ballroom, NYC",
  },
  {
    name: "Marcus Chen",
    role: "CEO, TechVision Inc.",
    rating: 5,
    text: "Our product launch was flawlessly executed. The team handled 600 attendees, live streaming, and complex AV requirements without a single hiccup. Truly professional.",
    avatar: "MC",
    avatarColor: "from-blue-400 to-indigo-600",
    event: "Corporate Event · LA Convention Center",
  },
  {
    name: "Isabella Moreno",
    role: "Birthday Client",
    rating: 5,
    text: "My 30th birthday party was absolutely magical. The surprise element they planned had me in tears. The décor, the food, the entertainment — everything was beyond my expectations.",
    avatar: "IM",
    avatarColor: "from-rose-400 to-pink-600",
    event: "Birthday · Rooftop Venue, Miami",
  },
  {
    name: "The Williams Foundation",
    role: "Charity Gala Client",
    rating: 5,
    text: "Our annual charity gala raised 40% more funds this year, and we credit much of that to the incredible atmosphere Eventique created. The room was breathtaking.",
    avatar: "WF",
    avatarColor: "from-emerald-400 to-teal-600",
    event: "Charity Gala · The Ritz, Chicago",
  },
  {
    name: "Priya Sharma",
    role: "Corporate HR Director",
    rating: 5,
    text: "Our company retreat was transformed into an experience our team will never forget. The attention to detail and the warmth of the Eventique team made all the difference.",
    avatar: "PS",
    avatarColor: "from-amber-400 to-orange-500",
    event: "Team Retreat · Napa Valley",
  },
];

export default function TestimonialsSection() {
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
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/20 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-violet-500" />
            <span
              className="text-xs font-semibold text-violet-700 tracking-widest uppercase"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Testimonials
            </span>
          </div>
          <h2
            className="text-4xl sm:text-5xl font-black tracking-tight mb-4"
            style={{ fontFamily: "'Fraunces', Georgia, serif", color: "oklch(0.12 0.01 285)" }}
          >
            Stories From Our{" "}
            <span className="italic" style={{ color: "oklch(0.52 0.22 293)" }}>
              Clients
            </span>
          </h2>
          <p
            className="text-gray-500 text-lg max-w-lg mx-auto"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Real words from real people who trusted us with their most important moments.
          </p>
        </div>

        {/* Testimonials grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.slice(0, 3).map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>

        {/* Second row — 2 centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-2xl mx-auto">
          {testimonials.slice(3).map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="testimonial-card glass-card rounded-3xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4">
      {/* Quote icon */}
      <Quote className="w-6 h-6 text-violet-300" />

      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
        ))}
      </div>

      {/* Text */}
      <p
        className="text-gray-600 text-sm leading-relaxed flex-1"
        style={{ fontFamily: "'Outfit', sans-serif" }}
      >
        "{testimonial.text}"
      </p>

      {/* Event tag */}
      <span
        className="text-xs text-violet-500 font-medium"
        style={{ fontFamily: "'Outfit', sans-serif" }}
      >
        {testimonial.event}
      </span>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
        <div
          className={`w-10 h-10 rounded-xl bg-gradient-to-br ${testimonial.avatarColor} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          {testimonial.avatar}
        </div>
        <div>
          <p
            className="text-sm font-semibold text-gray-800"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            {testimonial.name}
          </p>
          <p className="text-xs text-gray-500" style={{ fontFamily: "'Outfit', sans-serif" }}>
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );
}
