/**
 * Bilingual Translations — English & Arabic
 * Complete translation dictionary for all website content
 */

export type Language = "en" | "ar";

export const translations = {
  en: {
    // Navigation
    nav: {
      services: "Services",
      howItWorks: "How It Works",
      portfolio: "Portfolio",
      testimonials: "Testimonials",
      contact: "Contact",
      planEvent: "Plan Your Event",
    },
    // Hero Section
    hero: {
      badge: "Premium Event Planning",
      headline1: "We Craft",
      headline2: "Unforgettable",
      headline3: "Events",
      description:
        "From intimate gatherings to grand celebrations — we design, coordinate, and execute events that leave lasting impressions.",
      startPlanning: "Start Planning",
      viewPortfolio: "View Portfolio",
      eventsPlanned: "Events Planned",
      clientSatisfaction: "Client Satisfaction",
      yearsExperience: "Years Experience",
      liveBooking: "Live Booking",
      summerGala: "Summer Gala 2025",
      grandBallroom: "Grand Ballroom",
      reviews: "reviews",
    },
    // Stats Section
    stats: {
      eventsPlanned: "Events Planned",
      across15Cities: "Across 15 cities",
      clientSatisfaction: "Client Satisfaction",
      based1200Reviews: "Based on 1,200+ reviews",
      yearsExperience: "Years of Experience",
      since2012: "Since 2012",
      trustedVendors: "Trusted Vendors",
      curatedNetwork: "Curated network",
    },
    // Services Section
    services: {
      badge: "Our Services",
      headline: "Everything You Need, Perfectly Planned",
      description:
        "From intimate dinners to grand galas, our full suite of services ensures every moment is extraordinary.",
      weddingPlanning: "Wedding Planning",
      fromProposalToForever: "From Proposal to Forever",
      weddingDescription:
        "Full-service wedding coordination including venue selection, floral design, catering, photography, and day-of management. Every detail crafted with love.",
      mostPopular: "Most Popular",
      weddingFeatures: ["Venue Scouting", "Floral Design", "Catering Coordination", "Day-of Management"],
      weddingPrice: "From $2,500",
      corporateEvents: "Corporate Events",
      impressInspireConnect: "Impress. Inspire. Connect.",
      corporateDescription:
        "Conferences, product launches, team retreats, and award ceremonies. We handle logistics so your team can focus on what matters.",
      enterprise: "Enterprise",
      corporateFeatures: ["AV & Tech Setup", "Branded Experiences", "Guest Management", "Keynote Staging"],
      corporatePrice: "From $1,800",
      birthdayMilestones: "Birthday & Milestones",
      celebrateEveryChapter: "Celebrate Every Chapter",
      birthdayDescription:
        "Milestone birthdays, anniversaries, and life celebrations. We create personalized experiences that reflect who you are.",
      personal: "Personal",
      birthdayFeatures: ["Theme Design", "Entertainment", "Custom Décor", "Surprise Planning"],
      birthdayPrice: "From $800",
      concertsGalas: "Concerts & Galas",
      grandScaleFlawlessExecution: "Grand Scale, Flawless Execution",
      concertDescription:
        "Large-scale concerts, charity galas, and fundraising events with full production management and artist coordination.",
      premium: "Premium",
      concertFeatures: ["Stage Production", "Artist Liaison", "Ticketing", "Security & Logistics"],
      photoFilm: "Photo & Film Packages",
      memoriesThatLastForever: "Memories That Last Forever",
      photoDescription:
        "Professional photography and videography packages for any event. Drone coverage, same-day edits, and cinematic highlight reels.",
      addOn: "Add-on",
      photoFeatures: ["Professional Photography", "Cinematic Video", "Drone Coverage", "Same-Day Edits"],
      photoPrice: "From $600",
      cateringTastings: "Catering & Tastings",
      cuisineThatDelights: "Cuisine That Delights",
      cateringDescription:
        "Curated menus, private chef experiences, and full catering coordination with top-rated vendors for every dietary preference.",
      exclusive: "Exclusive",
      cateringFeatures: ["Menu Curation", "Private Chef", "Dietary Options", "Bar Service"],
      cateringPrice: "From $45/person",
      bookNow: "Book Now",
    },
    // How It Works
    howItWorks: {
      badge: "The Process",
      headline: "How It Works",
      description: "Four simple steps from your first idea to an unforgettable event.",
      step1: "Tell Us Your Vision",
      step1Description:
        "Share your event idea, budget, and dream details through our simple consultation form. No vision is too big or too small.",
      step2: "We Craft Your Plan",
      step2Description:
        "Our expert planners design a custom event blueprint — venues, vendors, timelines, and every detail tailored to you.",
      step3: "We Handle Everything",
      step3Description:
        "Sit back while we coordinate vendors, manage logistics, and ensure every element is perfectly in place.",
      step4: "You Enjoy the Moment",
      step4Description:
        "On the day, our team is on-site managing every detail so you can be fully present and enjoy your event.",
    },
    // Portfolio
    portfolio: {
      badge: "Our Work",
      headline: "Events That Inspire",
      description: "A glimpse into the moments we've crafted for our clients.",
      startYourStory: "Start Your Story",
      hartleyWedding: "The Hartley Wedding",
      wedding: "Wedding",
      hartleyGuests: "280 guests",
      hartleyLocation: "Grand Ballroom, NYC",
      techVisionSummit: "TechVision Summit 2024",
      corporate: "Corporate",
      techVisionGuests: "600 attendees",
      techVisionLocation: "Convention Center, LA",
      sofiaSweet30: "Sofia's Sweet 30",
      birthday: "Birthday",
      sofiaGuests: "120 guests",
      sofiaLocation: "Rooftop Venue, Miami",
      lavenderGala: "The Lavender Gala",
      gala: "Gala",
      galaGuests: "350 guests",
      galaLocation: "The Ritz, Chicago",
    },
    // Testimonials
    testimonials: {
      badge: "Testimonials",
      headline: "Stories From Our Clients",
      description: "Real words from real people who trusted us with their most important moments.",
      sarahJames: "Sarah & James Hartley",
      weddingClients: "Wedding Clients",
      sarahTestimonial:
        "Eventique turned our dream wedding into reality. Every single detail was perfect — from the floral arrangements to the lighting. Our guests are still talking about it months later.",
      sarahEvent: "Wedding · Grand Ballroom, NYC",
      marcus: "Marcus Chen",
      ceo: "CEO, TechVision Inc.",
      marcusTestimonial:
        "Our product launch was flawlessly executed. The team handled 600 attendees, live streaming, and complex AV requirements without a single hiccup. Truly professional.",
      marcusEvent: "Corporate Event · LA Convention Center",
      isabella: "Isabella Moreno",
      birthdayClient: "Birthday Client",
      isabellaTestimonial:
        "My 30th birthday party was absolutely magical. The surprise element they planned had me in tears. The décor, the food, the entertainment — everything was beyond my expectations.",
      isabellaEvent: "Birthday · Rooftop Venue, Miami",
      williams: "The Williams Foundation",
      charityClient: "Charity Gala Client",
      williamsTestimonial:
        "Our annual charity gala raised 40% more funds this year, and we credit much of that to the incredible atmosphere Eventique created. The room was breathtaking.",
      williamsEvent: "Charity Gala · The Ritz, Chicago",
      priya: "Priya Sharma",
      hrDirector: "Corporate HR Director",
      priyaTestimonial:
        "Our company retreat was transformed into an experience our team will never forget. The attention to detail and the warmth of the Eventique team made all the difference.",
      priyaEvent: "Team Retreat · Napa Valley",
    },
    // Contact
    contact: {
      badge: "Get In Touch",
      headline: "Let's Plan Your Perfect Event",
      description:
        "Ready to create something extraordinary? Tell us about your vision and we'll craft a personalized plan just for you.",
      emailUs: "Email Us",
      email: "hello@eventique.co",
      callUs: "Call Us",
      phone: "+1 (555) 123-4567",
      visitUs: "Visit Us",
      address: "123 Event Plaza, New York, NY",
      whyChoose: "Why Choose Eventique",
      freeConsultation: "Free Consultation",
      dedicatedPlanner: "Dedicated Planner",
      transparentPricing: "Transparent Pricing",
      support24_7: "24/7 Support",
      startYourJourney: "Start Your Journey",
      fullName: "Full Name",
      emailAddress: "Email",
      phoneNumber: "Phone",
      eventType: "Event Type",
      preferredDate: "Preferred Date",
      tellUsAboutVision: "Tell Us About Your Vision",
      visionPlaceholder:
        "Describe your dream event, guest count, budget range, and any special requests...",
      sendInquiry: "Send My Inquiry",
      freeConsultationNote: "Free consultation · No commitment required · Response within 24 hours",
      successTitle: "We'll Be In Touch!",
      successMessage:
        "Thank you for reaching out. Our team will contact you within 24 hours to discuss your event.",
      submitAnother: "Submit Another Inquiry",
      selectType: "Select type...",
    },
    // Footer
    footer: {
      tagline: "Crafting extraordinary events with precision, passion, and an eye for detail.",
      services: "Services",
      company: "Company",
      support: "Support",
      weddingPlanning: "Wedding Planning",
      corporateEvents: "Corporate Events",
      birthdayParties: "Birthday Parties",
      galasAndConcerts: "Galas & Concerts",
      photography: "Photography",
      aboutUs: "About Us",
      ourTeam: "Our Team",
      careers: "Careers",
      press: "Press",
      blog: "Blog",
      faq: "FAQ",
      pricing: "Pricing",
      contactUs: "Contact",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      copyright: "© 2025 Eventique. All rights reserved.",
      craftedWithCare: "Crafted with care for unforgettable moments.",
      featureComingSoon: "Feature coming soon",
    },
    // Chatbot
    chatbot: {
      title: "Event Assistant",
      placeholder: "Ask me anything about our services...",
      sendButton: "Send",
      close: "Close",
      greeting: "Hello! 👋 How can I help you today?",
      askAboutServices: "Ask about our services",
      askAboutPricing: "Ask about pricing",
      askAboutAvailability: "Ask about availability",
    },
  },
  ar: {
    // Navigation
    nav: {
      services: "الخدمات",
      howItWorks: "كيف يعمل",
      portfolio: "معرض الأعمال",
      testimonials: "شهادات العملاء",
      contact: "اتصل بنا",
      planEvent: "خطط حدثك",
    },
    // Hero Section
    hero: {
      badge: "تخطيط الأحداث المميزة",
      headline1: "نحن نصنع",
      headline2: "أحداث لا تُنسى",
      headline3: "لا تُنسى",
      description:
        "من التجمعات الحميمة إلى الاحتفالات الكبرى — نحن نصمم وننسق وننفذ الأحداث التي تترك انطباعات دائمة.",
      startPlanning: "ابدأ التخطيط",
      viewPortfolio: "عرض المعرض",
      eventsPlanned: "أحداث منظمة",
      clientSatisfaction: "رضا العملاء",
      yearsExperience: "سنوات الخبرة",
      liveBooking: "حجز مباشر",
      summerGala: "حفل الصيف 2025",
      grandBallroom: "قاعة الرقص الكبرى",
      reviews: "تقييمات",
    },
    // Stats Section
    stats: {
      eventsPlanned: "أحداث منظمة",
      across15Cities: "في 15 مدينة",
      clientSatisfaction: "رضا العملاء",
      based1200Reviews: "بناءً على 1200+ تقييم",
      yearsExperience: "سنوات من الخبرة",
      since2012: "منذ عام 2012",
      trustedVendors: "موردون موثوقون",
      curatedNetwork: "شبكة منتقاة",
    },
    // Services Section
    services: {
      badge: "خدماتنا",
      headline: "كل ما تحتاجه، مخطط بعناية",
      description:
        "من العشاء الحميمي إلى الحفلات الكبرى، مجموعة خدماتنا الكاملة تضمن أن كل لحظة استثنائية.",
      weddingPlanning: "تخطيط الزفاف",
      fromProposalToForever: "من الخطوبة إلى الأبد",
      weddingDescription:
        "تنسيق زفاف كامل يشمل اختيار المكان والتصميم الزهري والطعام والتصوير وإدارة اليوم. كل تفصيل مصنوع بحب.",
      mostPopular: "الأكثر شهرة",
      weddingFeatures: ["البحث عن الأماكن", "التصميم الزهري", "تنسيق الطعام", "إدارة اليوم"],
      weddingPrice: "من 2500 دولار",
      corporateEvents: "الأحداث الشركية",
      impressInspireConnect: "أثر. ألهم. تواصل.",
      corporateDescription:
        "المؤتمرات والإطلاقات والتجمعات والحفلات. نحن نتولى اللوجستيات حتى يتمكن فريقك من التركيز على ما يهم.",
      enterprise: "مؤسسة",
      corporateFeatures: ["إعداد AV والتكنولوجيا", "تجارب مخصصة", "إدارة الضيوف", "إدارة الخطاب الرئيسي"],
      corporatePrice: "من 1800 دولار",
      birthdayMilestones: "أعياد الميلاد والمناسبات",
      celebrateEveryChapter: "احتفل بكل فصل",
      birthdayDescription:
        "أعياد ميلاد مهمة وذكريات وحفلات الحياة. نحن ننشئ تجارب شخصية تعكس من أنت.",
      personal: "شخصي",
      birthdayFeatures: ["تصميم الموضوع", "الترفيه", "ديكور مخصص", "تخطيط المفاجآت"],
      birthdayPrice: "من 800 دولار",
      concertsGalas: "الحفلات الموسيقية والحفلات الراقصة",
      grandScaleFlawlessExecution: "نطاق واسع، تنفيذ بلا عيوب",
      concertDescription:
        "حفلات موسيقية واسعة النطاق وحفلات خيرية وأحداث جمع التبرعات مع إدارة الإنتاج الكاملة وتنسيق الفنانين.",
      premium: "مميز",
      concertFeatures: ["إنتاج المسرح", "تنسيق الفنانين", "بيع التذاكر", "الأمان واللوجستيات"],
      photoFilm: "حزم الصور والأفلام",
      memoriesThatLastForever: "ذكريات تدوم للأبد",
      photoDescription:
        "حزم التصوير الفوتوغرافي والفيديو الاحترافية لأي حدث. تغطية الطائرات بدون طيار والتعديلات الفورية والمقاطع الترويجية السينمائية.",
      addOn: "إضافة",
      photoFeatures: ["التصوير الفوتوغرافي الاحترافي", "الفيديو السينمائي", "تغطية الطائرات بدون طيار", "التعديلات الفورية"],
      photoPrice: "من 600 دولار",
      cateringTastings: "الطعام والتذوق",
      cuisineThatDelights: "طعام يسعد",
      cateringDescription:
        "قوائم منتقاة وتجارب الشيف الخاص والتنسيق الكامل للطعام مع الموردين الموثوقين لكل تفضيل غذائي.",
      exclusive: "حصري",
      cateringFeatures: ["تنسيق القائمة", "الشيف الخاص", "خيارات غذائية", "خدمة البار"],
      cateringPrice: "من 45 دولار/شخص",
      bookNow: "احجز الآن",
    },
    // How It Works
    howItWorks: {
      badge: "العملية",
      headline: "كيف يعمل",
      description: "أربع خطوات بسيطة من فكرتك الأولى إلى حدث لا ينسى.",
      step1: "أخبرنا برؤيتك",
      step1Description:
        "شارك فكرة حدثك والميزانية والتفاصيل من خلال نموذج استشارة بسيط. لا توجد رؤية كبيرة جداً أو صغيرة جداً.",
      step2: "نحن نصمم خطتك",
      step2Description:
        "يصمم مخططونا الخبراء مخطط حدث مخصص — الأماكن والموردون والجداول الزمنية وكل تفصيل مخصص لك.",
      step3: "نحن نتولى كل شيء",
      step3Description:
        "استرخ بينما ننسق الموردين وندير اللوجستيات ونضمن أن كل عنصر في مكانه الصحيح.",
      step4: "استمتع باللحظة",
      step4Description:
        "في اليوم، فريقنا موجود في الموقع يدير كل التفاصيل حتى تتمكن من الحضور الكامل والاستمتاع بحدثك.",
    },
    // Portfolio
    portfolio: {
      badge: "أعمالنا",
      headline: "أحداث تلهم",
      description: "لمحة عن اللحظات التي صنعناها لعملائنا.",
      startYourStory: "ابدأ قصتك",
      hartleyWedding: "زفاف هارتلي",
      wedding: "زفاف",
      hartleyGuests: "280 ضيف",
      hartleyLocation: "قاعة الرقص الكبرى، نيويورك",
      techVisionSummit: "قمة تكنولوجيا الرؤية 2024",
      corporate: "شركة",
      techVisionGuests: "600 حاضر",
      techVisionLocation: "مركز المؤتمرات، لوس أنجلوس",
      sofiaSweet30: "حفلة صوفيا الثلاثين",
      birthday: "عيد ميلاد",
      sofiaGuests: "120 ضيف",
      sofiaLocation: "مكان على السطح، ميامي",
      lavenderGala: "حفل اللافندر",
      gala: "حفل",
      galaGuests: "350 ضيف",
      galaLocation: "فندق الريتز، شيكاغو",
    },
    // Testimonials
    testimonials: {
      badge: "شهادات العملاء",
      headline: "قصص من عملائنا",
      description: "كلمات حقيقية من أشخاص حقيقيين وثقوا بنا في أهم لحظاتهم.",
      sarahJames: "سارة وجيمس هارتلي",
      weddingClients: "عملاء الزفاف",
      sarahTestimonial:
        "حولت Eventique حلم زفافنا إلى واقع. كل تفصيل كان مثالياً — من الزهور إلى الإضاءة. ضيوفنا لا يزالون يتحدثون عنها بعد أشهر.",
      sarahEvent: "زفاف · قاعة الرقص الكبرى، نيويورك",
      marcus: "ماركوس تشن",
      ceo: "الرئيس التنفيذي، شركة تكنولوجيا الرؤية",
      marcusTestimonial:
        "تم تنفيذ إطلاق منتجنا بشكل مثالي. تعامل الفريق مع 600 حاضر والبث المباشر ومتطلبات AV المعقدة دون أي خطأ. احترافي حقاً.",
      marcusEvent: "حدث شركي · مركز المؤتمرات، لوس أنجلوس",
      isabella: "إيزابيلا مورينو",
      birthdayClient: "عميل عيد الميلاد",
      isabellaTestimonial:
        "كانت حفلة عيد ميلادي الثلاثين سحرية تماماً. عنصر المفاجأة الذي خططوه جعلني أبكي. الديكور والطعام والترفيه — كل شيء تجاوز توقعاتي.",
      isabellaEvent: "عيد ميلاد · مكان على السطح، ميامي",
      williams: "مؤسسة ويليامز",
      charityClient: "عميل حفل خيري",
      williamsTestimonial:
        "جمع حفل الخير السنوي لدينا 40% أموال أكثر هذا العام، وننسب الكثير من ذلك إلى الأجواء المذهلة التي خلقتها Eventique.",
      williamsEvent: "حفل خيري · فندق الريتز، شيكاغو",
      priya: "بريا شارما",
      hrDirector: "مدير الموارد البشرية الشركية",
      priyaTestimonial:
        "تم تحويل تجمع شركتنا إلى تجربة لن ينساها فريقنا أبداً. الاهتمام بالتفاصيل ودفء فريق Eventique أحدثا فرقاً كبيراً.",
      priyaEvent: "تجمع الفريق · وادي نابا",
    },
    // Contact
    contact: {
      badge: "تواصل معنا",
      headline: "دعنا نخطط حدثك المثالي",
      description:
        "هل أنت مستعد لإنشاء شيء استثنائي؟ أخبرنا برؤيتك وسننشئ خطة شخصية خاصة بك.",
      emailUs: "أرسل لنا بريداً",
      email: "hello@eventique.co",
      callUs: "اتصل بنا",
      phone: "+1 (555) 123-4567",
      visitUs: "زرنا",
      address: "123 ساحة الأحداث، نيويورك، نيويورك",
      whyChoose: "لماذا تختار Eventique",
      freeConsultation: "استشارة مجانية",
      dedicatedPlanner: "مخطط مخصص",
      transparentPricing: "تسعير شفاف",
      support24_7: "دعم 24/7",
      startYourJourney: "ابدأ رحلتك",
      fullName: "الاسم الكامل",
      emailAddress: "البريد الإلكتروني",
      phoneNumber: "الهاتف",
      eventType: "نوع الحدث",
      preferredDate: "التاريخ المفضل",
      tellUsAboutVision: "أخبرنا عن رؤيتك",
      visionPlaceholder:
        "صف حدثك الحلم وعدد الضيوف ونطاق الميزانية وأي طلبات خاصة...",
      sendInquiry: "أرسل استفساري",
      freeConsultationNote: "استشارة مجانية · بدون التزام · الرد خلال 24 ساعة",
      successTitle: "سنتواصل معك!",
      successMessage:
        "شكراً لتواصلك معنا. سيتصل بك فريقنا خلال 24 ساعة لمناقشة حدثك.",
      submitAnother: "أرسل استفسار آخر",
      selectType: "اختر النوع...",
    },
    // Footer
    footer: {
      tagline: "صنع الأحداث الاستثنائية بدقة وشغف واهتمام بالتفاصيل.",
      services: "الخدمات",
      company: "الشركة",
      support: "الدعم",
      weddingPlanning: "تخطيط الزفاف",
      corporateEvents: "الأحداث الشركية",
      birthdayParties: "حفلات أعياد الميلاد",
      galasAndConcerts: "الحفلات والحفلات الموسيقية",
      photography: "التصوير الفوتوغرافي",
      aboutUs: "من نحن",
      ourTeam: "فريقنا",
      careers: "الوظائف",
      press: "الصحافة",
      blog: "المدونة",
      faq: "الأسئلة الشائعة",
      pricing: "التسعير",
      contactUs: "اتصل بنا",
      privacyPolicy: "سياسة الخصوصية",
      termsOfService: "شروط الخدمة",
      copyright: "© 2025 Eventique. جميع الحقوق محفوظة.",
      craftedWithCare: "صنع بعناية لحظات لا تُنسى.",
      featureComingSoon: "الميزة قريباً",
    },
    // Chatbot
    chatbot: {
      title: "مساعد الأحداث",
      placeholder: "اسأل عن خدماتنا...",
      sendButton: "إرسال",
      close: "إغلاق",
      greeting: "مرحباً! 👋 كيف يمكنني مساعدتك اليوم؟",
      askAboutServices: "اسأل عن الخدمات",
      askAboutPricing: "اسأل عن التسعير",
      askAboutAvailability: "اسأل عن التوفر",
    },
  },
};

export function t(key: string, lang: Language): string {
  const keys = key.split(".");
  let value: any = translations[lang];

  for (const k of keys) {
    value = value?.[k];
    if (!value) return key; // Fallback to key if translation not found
  }

  return value || key;
}
