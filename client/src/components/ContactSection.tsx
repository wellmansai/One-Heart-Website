/**
 * ContactSection — Eventique
 * Style: Split layout — left info panel, right glass form card
 * Animation: GSAP ScrollTrigger — left slides from left, right from right
 */
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

gsap.registerPlugin(ScrollTrigger);

const eventTypes = [
  "Wedding",
  "Corporate Event",
  "Birthday / Milestone",
  "Concert / Gala",
  "Other",
];

export default function ContactSection() {
  const { language } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    date: "",
    message: "",
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
      );
      gsap.fromTo(
        rightRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.eventType) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitted(true);
    toast.success("Your inquiry has been sent! We'll be in touch within 24 hours.");
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 relative">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-violet-100/30 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Info */}
          <div ref={leftRef} className="flex flex-col gap-8">
            <div>
              <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-4 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-violet-500" />
                <span
                  className="text-xs font-semibold text-violet-700 tracking-widest uppercase"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Get In Touch
                </span>
              </div>
              <h2
                className="text-4xl sm:text-5xl font-black tracking-tight mb-4"
                style={{ fontFamily: "'Fraunces', Georgia, serif", color: "oklch(0.12 0.01 285)" }}
              >
                Let's Plan Your{" "}
                <span className="italic" style={{ color: "oklch(0.52 0.22 293)" }}>
                  Perfect Event
                </span>
              </h2>
              <p
                className="text-gray-500 text-lg leading-relaxed"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Ready to create something extraordinary? Tell us about your vision and we'll craft a personalized plan just for you.
              </p>
            </div>

            {/* Contact info */}
            <div className="flex flex-col gap-4">
              {[
                { icon: Mail, label: "Email Us", value: "hello@eventique.co", color: "bg-violet-100 text-violet-600" },
                { icon: Phone, label: "Call Us", value: "+1 (555) 123-4567", color: "bg-blue-100 text-blue-600" },
                { icon: MapPin, label: "Visit Us", value: "123 Event Plaza, New York, NY", color: "bg-rose-100 text-rose-600" },
              ].map(({ icon: Icon, label, value, color }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className={`w-11 h-11 rounded-xl ${color} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium" style={{ fontFamily: "'Outfit', sans-serif" }}>
                      {label}
                    </p>
                    <p className="text-sm font-semibold text-gray-800" style={{ fontFamily: "'Outfit', sans-serif" }}>
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="glass-card rounded-2xl p-5">
              <p
                className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Why Choose Eventique
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Free Consultation",
                  "Dedicated Planner",
                  "Transparent Pricing",
                  "24/7 Support",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-violet-500 flex-shrink-0" />
                    <span className="text-sm text-gray-600" style={{ fontFamily: "'Outfit', sans-serif" }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div ref={rightRef}>
            <div className="glass-card rounded-3xl p-8 shadow-xl">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-violet-100 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-violet-600" />
                  </div>
                  <h3
                    className="text-2xl font-bold"
                    style={{ fontFamily: "'Fraunces', serif", color: "oklch(0.12 0.01 285)" }}
                  >
                    We'll Be In Touch!
                  </h3>
                  <p className="text-gray-500 text-sm max-w-xs" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    Thank you for reaching out. Our team will contact you within 24 hours to discuss your event.
                  </p>
                  <button
                    className="btn-black mt-2"
                    onClick={() => setSubmitted(false)}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <h3
                    className="text-2xl font-bold mb-1"
                    style={{ fontFamily: "'Fraunces', serif", color: "oklch(0.12 0.01 285)" }}
                  >
                    Start Your Journey
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide" style={{ fontFamily: "'Outfit', sans-serif" }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        className="px-4 py-3 rounded-xl border border-gray-200 bg-white/60 backdrop-blur-sm text-sm focus:outline-none focus:ring-2 focus:ring-violet-300 focus:border-transparent transition-all"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide" style={{ fontFamily: "'Outfit', sans-serif" }}>
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane@example.com"
                        className="px-4 py-3 rounded-xl border border-gray-200 bg-white/60 backdrop-blur-sm text-sm focus:outline-none focus:ring-2 focus:ring-violet-300 focus:border-transparent transition-all"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide" style={{ fontFamily: "'Outfit', sans-serif" }}>
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="px-4 py-3 rounded-xl border border-gray-200 bg-white/60 backdrop-blur-sm text-sm focus:outline-none focus:ring-2 focus:ring-violet-300 focus:border-transparent transition-all"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide" style={{ fontFamily: "'Outfit', sans-serif" }}>
                        Event Type *
                      </label>
                      <select
                        name="eventType"
                        value={form.eventType}
                        onChange={handleChange}
                        className="px-4 py-3 rounded-xl border border-gray-200 bg-white/60 backdrop-blur-sm text-sm focus:outline-none focus:ring-2 focus:ring-violet-300 focus:border-transparent transition-all"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                        required
                      >
                        <option value="">Select type...</option>
                        {eventTypes.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide" style={{ fontFamily: "'Outfit', sans-serif" }}>
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      className="px-4 py-3 rounded-xl border border-gray-200 bg-white/60 backdrop-blur-sm text-sm focus:outline-none focus:ring-2 focus:ring-violet-300 focus:border-transparent transition-all"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide" style={{ fontFamily: "'Outfit', sans-serif" }}>
                      Tell Us About Your Vision
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe your dream event, guest count, budget range, and any special requests..."
                      rows={4}
                      className="px-4 py-3 rounded-xl border border-gray-200 bg-white/60 backdrop-blur-sm text-sm focus:outline-none focus:ring-2 focus:ring-violet-300 focus:border-transparent transition-all resize-none"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    />
                  </div>

                  <button type="submit" className="btn-black justify-center w-full py-4">
                    Send My Inquiry
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="text-xs text-center text-gray-400" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    Free consultation · No commitment required · Response within 24 hours
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
