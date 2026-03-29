/**
 * HowItWorksSection — Eventique
 * Style: Horizontal step cards with connecting line, glass cards
 * Animation: GSAP ScrollTrigger — steps animate in sequentially
 */
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageSquare, Search, Sparkles, CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    step: "01",
    icon: MessageSquare,
    title: "Tell Us Your Vision",
    description:
      "Share your event idea, budget, and dream details through our simple consultation form. No vision is too big or too small.",
    color: "from-violet-400 to-purple-600",
  },
  {
    step: "02",
    icon: Search,
    title: "We Craft Your Plan",
    description:
      "Our expert planners design a custom event blueprint — venues, vendors, timelines, and every detail tailored to you.",
    color: "from-pink-400 to-rose-600",
  },
  {
    step: "03",
    icon: Sparkles,
    title: "We Handle Everything",
    description:
      "Sit back while we coordinate vendors, manage logistics, and ensure every element is perfectly in place.",
    color: "from-amber-400 to-orange-500",
  },
  {
    step: "04",
    icon: CheckCircle2,
    title: "You Enjoy the Moment",
    description:
      "On the day, our team is on-site managing every detail so you can be fully present and enjoy your event.",
    color: "from-emerald-400 to-teal-600",
  },
];

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

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

      const cards = stepsRef.current?.querySelectorAll(".step-card");
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: { trigger: stepsRef.current, start: "top 80%" },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="how-it-works" ref={sectionRef} className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-50/30 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-violet-500" />
            <span
              className="text-xs font-semibold text-violet-700 tracking-widest uppercase"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              The Process
            </span>
          </div>
          <h2
            className="text-4xl sm:text-5xl font-black tracking-tight mb-4"
            style={{ fontFamily: "'Fraunces', Georgia, serif", color: "oklch(0.12 0.01 285)" }}
          >
            How It{" "}
            <span className="italic" style={{ color: "oklch(0.52 0.22 293)" }}>
              Works
            </span>
          </h2>
          <p
            className="text-gray-500 text-lg max-w-lg mx-auto"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Four simple steps from your first idea to an unforgettable event.
          </p>
        </div>

        {/* Steps */}
        <div ref={stepsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-violet-200 via-purple-300 to-violet-200 z-0" />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="step-card glass-card rounded-3xl p-6 flex flex-col items-center text-center relative z-10 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* Step number */}
                <span
                  className="text-xs font-bold text-violet-400 tracking-widest mb-3"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  STEP {step.step}
                </span>

                {/* Icon circle */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 shadow-lg`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3
                  className="text-lg font-bold mb-2"
                  style={{ fontFamily: "'Fraunces', serif", color: "oklch(0.12 0.01 285)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm text-gray-500 leading-relaxed"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
