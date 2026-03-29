/**
 * Chatbot — AI-powered event assistant with bilingual support
 * Style: Floating glass card, bottom-right corner
 * Features: Bilingual responses, quick action buttons
 */
import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";
import { toast } from "sonner";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { language } = useLanguage();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize with greeting
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greeting: Message = {
        id: "greeting",
        role: "assistant",
        content: t("chatbot.greeting", language),
        timestamp: new Date(),
      };
      setMessages([greeting]);
    }
  }, [isOpen, language]);

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async (userMessage: string) => {
    if (!userMessage.trim()) return;

    // Add user message
    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: userMessage,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response (in production, call real API)
    setTimeout(() => {
      const responses = {
        en: [
          "That's a great question! Our team specializes in creating unforgettable events. Would you like to know more about our services?",
          "We'd love to help you plan your event! Our services include wedding planning, corporate events, and more. What type of event are you interested in?",
          "Our pricing is transparent and tailored to your needs. We offer packages starting from $800 for birthdays up to custom quotes for large galas.",
          "We're available year-round and can accommodate events on most dates. Let me connect you with our booking team for availability!",
          "Thank you for your interest! Feel free to fill out our contact form, and we'll get back to you within 24 hours.",
        ],
        ar: [
          "سؤال رائع! يتخصص فريقنا في إنشاء أحداث لا تُنسى. هل تود معرفة المزيد عن خدماتنا؟",
          "نود مساعدتك في تخطيط حدثك! تشمل خدماتنا تخطيط الزفاف والأحداث الشركية والمزيد. ما نوع الحدث الذي تهتم به؟",
          "تسعيرنا شفاف ومخصص لاحتياجاتك. نقدم حزم تبدأ من 800 دولار لأعياد الميلاد وحتى عروض مخصصة للحفلات الكبرى.",
          "نحن متاحون على مدار السنة ويمكننا استيعاب الأحداث في معظم التواريخ. دعني أربطك بفريق الحجز لدينا للتحقق من التوفر!",
          "شكراً لاهتمامك! لا تتردد في ملء نموذج الاتصال الخاص بنا، وسنعود إليك خلال 24 ساعة.",
        ],
      };

      const langResponses = responses[language];
      const randomResponse = langResponses[Math.floor(Math.random() * langResponses.length)];

      const assistantMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: randomResponse,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMsg]);
      setIsLoading(false);
    }, 800);
  };

  const quickActions = [
    { label: t("chatbot.askAboutServices", language), text: "Tell me about your services" },
    { label: t("chatbot.askAboutPricing", language), text: "What are your prices?" },
    { label: t("chatbot.askAboutAvailability", language), text: "When are you available?" },
  ];

  return (
    <>
      {/* Floating button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-br from-violet-500 to-purple-700 text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
          title={t("chatbot.title", language)}
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 max-h-[600px] glass-card rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-violet-500 to-purple-700 text-white p-4 flex items-center justify-between">
            <h3 className="font-semibold" style={{ fontFamily: "'Outfit', sans-serif" }}>
              {t("chatbot.title", language)}
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/20 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-2xl ${
                    msg.role === "user"
                      ? "bg-violet-500 text-white rounded-br-none"
                      : "bg-gray-100 text-gray-800 rounded-bl-none"
                  }`}
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  <p className="text-sm leading-relaxed">{msg.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-2xl rounded-bl-none flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="text-sm" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    {language === "en" ? "Typing..." : "يكتب..."}
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick actions (show when no messages yet) */}
          {messages.length === 1 && !isLoading && (
            <div className="px-4 py-2 border-t border-gray-100 space-y-2">
              {quickActions.map((action) => (
                <button
                  key={action.text}
                  onClick={() => handleSendMessage(action.text)}
                  className="w-full text-left text-xs px-3 py-2 rounded-lg bg-gray-50 hover:bg-violet-50 text-gray-700 hover:text-violet-700 transition-colors"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {action.label}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="border-t border-gray-100 p-3 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") handleSendMessage(input);
              }}
              placeholder={t("chatbot.placeholder", language)}
              className="flex-1 px-3 py-2 rounded-xl border border-gray-200 bg-white/60 backdrop-blur-sm text-sm focus:outline-none focus:ring-2 focus:ring-violet-300 focus:border-transparent"
              style={{ fontFamily: "'Outfit', sans-serif" }}
              disabled={isLoading}
            />
            <button
              onClick={() => handleSendMessage(input)}
              disabled={isLoading || !input.trim()}
              className="p-2 rounded-xl bg-violet-500 text-white hover:bg-violet-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
