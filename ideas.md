# Eventique — Design Brainstorm

## Three Design Approaches

<response>
<idea>
**Design Movement:** Neo-Brutalist Glassmorphism
**Core Principles:**
- Heavy typographic contrast (ultra-bold display vs. light body)
- Glass cards floating over a textured dotted purple background
- Raw, honest structure with editorial flair
- Strong black-and-white CTA buttons against soft lavender tones

**Color Philosophy:** Lavender mist (#EDE9FE, #DDD6FE) as the ambient background, pure white glass cards with 40% opacity blur, jet black (#0A0A0A) for headlines and CTAs. The contrast between the soft purple haze and the stark black creates editorial tension — elegant yet assertive.

**Layout Paradigm:** Asymmetric editorial grid — hero section uses a 60/40 split with a large typographic block left and a floating glass card right. Services grid uses a masonry-style staggered layout.

**Signature Elements:**
- Dotted SVG background pattern in soft purple
- Frosted glass cards with `backdrop-filter: blur(20px)` and subtle white border
- Black pill buttons with white text and hover lift animation

**Interaction Philosophy:** Every interaction should feel deliberate — hover states reveal depth, scroll triggers GSAP fade-ins from below, and CTA buttons have a satisfying press-down micro-interaction.

**Animation:** GSAP ScrollTrigger for section reveals (y: 60 → 0, opacity: 0 → 1). Header fades in on load. Service cards stagger in with 0.1s delay each.

**Typography System:** Playfair Display (bold, 700) for headlines + DM Sans (400/500) for body. Headline sizes: 72px hero, 48px section, 24px card titles.
</idea>
<probability>0.08</probability>
</response>

<response>
<idea>
**Design Movement:** Soft Minimalism with Kinetic Accents
**Core Principles:**
- Breathing whitespace as the primary design element
- Micro-animations that guide attention without distraction
- Monochromatic purple palette with single black accent
- Card-based information architecture with rounded corners

**Color Philosophy:** Near-white background (#FAFAFE) with a subtle purple dot grid, white cards with soft box-shadow, and a single accent purple (#7C3AED) used sparingly for highlights only. Black (#111) for all CTAs.

**Layout Paradigm:** Centered column layout with generous vertical rhythm. Hero is full-viewport with centered text. Services use a 3-column card grid with hover elevation.

**Signature Elements:**
- Animated dot grid background (CSS radial-gradient dots)
- Glass morphism navigation bar
- Floating badge elements on service cards

**Interaction Philosophy:** Hover reveals hidden information. Scroll animations are gentle and purposeful. The site breathes — nothing feels rushed.

**Animation:** Framer Motion for page transitions, GSAP for hero text split animation (each word slides up). Service cards scale 1.02 on hover.

**Typography System:** Cormorant Garamond (italic, display) for hero + Inter (400/600) for UI. Creates a luxury editorial feel.
</idea>
<probability>0.07</probability>
</response>

<response>
<idea>
**Design Movement:** Contemporary Luxury Glassmorphism (CHOSEN)
**Core Principles:**
- Light purple dotted background as the atmospheric foundation
- Glass-effect cards and header with backdrop blur
- Black buttons with white text as the primary action style
- Minimal, refined typography with generous spacing

**Color Philosophy:** Background: soft lavender-white (#F5F3FF to #EEF2FF gradient with purple dots). Cards: white/95 with glass blur. Primary CTA: #0A0A0A (near-black). Accent: #7C3AED (violet). The palette evokes sophistication — like a high-end event venue's branding.

**Layout Paradigm:** Asymmetric hero (text-left, visual-right) transitioning to centered sections. Services in a 3-column responsive grid. Testimonials in a horizontal scroll strip.

**Signature Elements:**
- Radial dot pattern background (CSS, purple tones)
- Glass morphism header with white/80 backdrop blur
- Staggered GSAP entrance animations per section

**Interaction Philosophy:** Smooth, confident interactions. Buttons have a subtle scale-down on press. Cards lift on hover. Navigation links have an underline slide animation.

**Animation:** GSAP ScrollTrigger — sections animate in from y:50 with stagger. Hero headline uses SplitText-style character animation. Floating decorative elements drift slowly.

**Typography System:** Fraunces (serif, variable) for headlines + Outfit (sans-serif) for body. Creates warmth and modernity simultaneously.
</idea>
<probability>0.09</probability>
</response>

---

## Selected Approach: Contemporary Luxury Glassmorphism

The third approach is chosen. It directly matches the user's brief: light purple dotted background, glass effects, clean white rounded header, black buttons, GSAP animations, and minimal elegant typography.
