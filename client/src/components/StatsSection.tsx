/**
 * StatsSection — Eventique
 * Style: Full-width dark glass banner with animated stat counters
 * Animation: GSAP ScrollTrigger — numbers count up when in view
 */
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 500, suffix: "+", label: "Events Planned", description: "Across 15 cities" },
  { value: 98, suffix: "%", label: "Client Satisfaction", description: "Based on 1,200+ reviews" },
  { value: 12, suffix: "+", label: "Years of Experience", description: "Since 2012" },
  { value: 50, suffix: "+", label: "Trusted Vendors", description: "Curated network" },
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const countersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
        }
      );

      // Count up animation
      const counters = countersRef.current?.querySelectorAll(".stat-number");
      if (counters) {
        counters.forEach((counter, i) => {
          const target = stats[i].value;
          const obj = { val: 0 };
          gsap.to(obj, {
            val: target,
            duration: 2,
            ease: "power2.out",
            onUpdate: () => {
              counter.textContent = Math.round(obj.val).toString();
            },
            scrollTrigger: { trigger: countersRef.current, start: "top 80%" },
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div
          className="rounded-3xl overflow-hidden relative"
          style={{
            background: "linear-gradient(135deg, oklch(0.22 0.08 293) 0%, oklch(0.18 0.06 285) 100%)",
          }}
        >
          {/* Dot pattern overlay */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.4) 1.5px, transparent 1.5px)",
              backgroundSize: "20px 20px",
            }}
          />

          <div ref={countersRef} className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-0">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center text-center py-10 px-6 ${
                  i < stats.length - 1 ? "border-r border-white/10" : ""
                } ${i < 2 ? "border-b border-white/10 lg:border-b-0" : ""}`}
              >
                <div className="flex items-baseline gap-0.5 mb-1">
                  <span
                    className="stat-number text-4xl sm:text-5xl font-black text-white"
                    style={{ fontFamily: "'Fraunces', serif" }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="text-2xl font-bold text-violet-300"
                    style={{ fontFamily: "'Fraunces', serif" }}
                  >
                    {stat.suffix}
                  </span>
                </div>
                <p
                  className="text-sm font-semibold text-white/90 mb-1"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {stat.label}
                </p>
                <p
                  className="text-xs text-white/50"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
