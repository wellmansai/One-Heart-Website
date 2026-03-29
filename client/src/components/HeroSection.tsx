/**
 * HeroSection — Eventique
 * Style: Asymmetric 60/40 layout, bold Fraunces headline, glass stats card
 * Animation: GSAP — headline words slide up, image fades in, stats count up
 * Background: Inherited purple dot pattern from body
 */
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight, Star, Calendar, Users } from "lucide-react";

const HERO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663491263720/K56cdPnQSuQdfWaFVptZpB/hero-event-DGPT3edYTMGyoX9VKeY6wu.webp";

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Badge
      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: -20, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6 }
      );

      // Headline words
      const words = headlineRef.current?.querySelectorAll(".word");
      if (words) {
        tl.fromTo(
          words,
          { opacity: 0, y: 60, rotateX: -20 },
          { opacity: 1, y: 0, rotateX: 0, duration: 0.7, stagger: 0.08 },
          "-=0.3"
        );
      }

      // Subtitle
      tl.fromTo(
        subRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.3"
      );

      // CTA buttons
      tl.fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.3"
      );

      // Image
      tl.fromTo(
        imageRef.current,
        { opacity: 0, x: 40, scale: 0.96 },
        { opacity: 1, x: 0, scale: 1, duration: 0.9 },
        "-=0.7"
      );

      // Stats
      tl.fromTo(
        statsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.5"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const headline = ["We Craft", "Unforgettable", "Events"];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-violet-200/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-purple-200/25 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-violet-100/15 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Text content */}
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <div ref={badgeRef} className="inline-flex items-center gap-2 self-start">
              <div className="glass-card rounded-full px-4 py-2 flex items-center gap-2 shadow-sm">
                <Star className="w-3.5 h-3.5 text-violet-500 fill-violet-500" />
                <span
                  className="text-xs font-semibold text-violet-700 tracking-wide uppercase"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Premium Event Planning
                </span>
              </div>
            </div>

            {/* Headline */}
            <div
              ref={headlineRef}
              className="overflow-hidden"
              style={{ perspective: "800px" }}
            >
              {headline.map((word, i) => (
                <div key={i} className="overflow-hidden">
                  <span
                    className="word inline-block text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight"
                    style={{
                      fontFamily: "'Fraunces', Georgia, serif",
                      color: i === 1 ? "oklch(0.52 0.22 293)" : "oklch(0.12 0.01 285)",
                      fontStyle: i === 1 ? "italic" : "normal",
                    }}
                  >
                    {word}
                  </span>
                </div>
              ))}
            </div>

            {/* Subtitle */}
            <p
              ref={subRef}
              className="text-lg text-gray-500 leading-relaxed max-w-md"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              From intimate gatherings to grand celebrations — we design, coordinate, and execute events that leave lasting impressions.
            </p>

            {/* CTA */}
            <div ref={ctaRef} className="flex flex-wrap gap-3 items-center">
              <button
                className="btn-black"
                onClick={() => {
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Start Planning
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                className="btn-outline"
                onClick={() => {
                  document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View Portfolio
              </button>
            </div>

            {/* Stats */}
            <div ref={statsRef} className="flex flex-wrap gap-6 pt-2">
              {[
                { icon: Calendar, value: "500+", label: "Events Planned" },
                { icon: Users, value: "98%", label: "Client Satisfaction" },
                { icon: Star, value: "12+", label: "Years Experience" },
              ].map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-violet-100 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-violet-600" />
                  </div>
                  <div>
                    <p
                      className="text-lg font-bold leading-none"
                      style={{ fontFamily: "'Fraunces', serif", color: "oklch(0.12 0.01 285)" }}
                    >
                      {value}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5" style={{ fontFamily: "'Outfit', sans-serif" }}>
                      {label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Hero image with glass overlay */}
          <div ref={imageRef} className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-purple-200/50">
              <img
                src={HERO_IMAGE}
                alt="Elegant event setup"
                className="w-full h-[520px] object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent" />
            </div>

            {/* Floating glass card — next event */}
            <div className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-4 shadow-xl max-w-[200px]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-semibold text-green-600" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  Live Booking
                </span>
              </div>
              <p className="text-sm font-bold text-gray-800" style={{ fontFamily: "'Fraunces', serif" }}>
                Summer Gala 2025
              </p>
              <p className="text-xs text-gray-500 mt-0.5" style={{ fontFamily: "'Outfit', sans-serif" }}>
                June 14 · Grand Ballroom
              </p>
            </div>

            {/* Floating glass card — rating */}
            <div className="absolute -top-4 -right-4 glass-card rounded-2xl p-3 shadow-xl">
              <div className="flex items-center gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-3 h-3 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs font-semibold text-gray-700" style={{ fontFamily: "'Outfit', sans-serif" }}>
                5.0 · 240 reviews
              </p>
            </div>

            {/* Decorative ring */}
            <div className="absolute -z-10 inset-4 rounded-3xl border-2 border-violet-200/50 translate-x-4 translate-y-4" />
          </div>
        </div>
      </div>
    </section>
  );
}
