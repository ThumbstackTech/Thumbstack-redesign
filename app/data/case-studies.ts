import type { CaseStudyData } from "./types";

export const caseStudies: Record<string, CaseStudyData> = {
  siorai: {
    slug: "siorai",
    title: "Redefining how luxury clothing connects with",
    subtitle:
      "Designing a thoughtful luxury e-commerce experience that blends editorial storytelling, dark aesthetics, and seamless shopping into a premium digital presence.",
    clientName: "Siorai",
    tags: ["Product Strategy", "UX Design", "UI Design", "White Labeling"],
    readTime: "8 min read",
    date: "Sept 22 2025",
    heroImage: { url: "/siorai.png", alt: "Siorai — High-end Fashion Experience" },
    challengeText:
      "Siorai needed more than a website — they needed a digital stage that matched the intensity of their brand. The challenge was translating a deeply tactile, editorial fashion identity into a web experience that felt equally luxurious, without sacrificing performance or conversion. Every touchpoint had to exude premium quality while remaining intuitive for a global audience.",
    challengeImages: [
      { url: "/Campaign.png", alt: "Siorai Campaign Shoot" },
      { url: "/Campaign-1.png", alt: "Siorai Campaign Editorial" },
    ],
    approachText:
      "We started by immersing ourselves in the brand's world — understanding the textures, the mood, and the ambition behind every collection. From there, we crafted a dark editorial design system that prioritised visual storytelling. We treated the product catalogue as a gallery, built cinematic transitions between pages, and ensured every interaction felt intentional and refined.",
    approachBrandText: "SIORAI",
    quote: "Good fashion design doesn't shout. It earns presence.",
    features: [
      "Cinematic hero with auto-playing campaign video",
      "Dark editorial design system with custom typography",
      "Immersive product detail pages with zoom & gallery",
      "Seamless Shopify checkout integration",
      "Mobile-first responsive experience across all devices",
      "Performance-optimised imagery with lazy loading",
    ],
    gallery: [
      { url: "/siorai.png", alt: "Siorai Homepage" },
      { url: "/Campaign.png", alt: "Siorai Campaign" },
      { url: "/Campaign-1.png", alt: "Siorai Editorial" },
      { url: "/stack1.png", alt: "Siorai Collection Overview" },
    ],
    projectUrl: "#",
    accentColor: "#C4291C",
  },

  squlio: {
    slug: "squlio",
    title: "Designing a cashback platform that feels thoughtful, not transactional for",
    subtitle:
      "Designing a thoughtful cashback experience that blends saving, giving, and trust into a calm, everyday product.",
    clientName: "Squlio",
    tags: ["Product Strategy", "UX Design", "UI Design", "White Labeling"],
    readTime: "8 min read",
    date: "Sept 22 2025",
    heroImage: { url: "/Home.png", alt: "Squlio Dashboard" },
    challengeText:
      "Most cashback apps feel loud, cluttered, and transactional. Squilio wanted to be different — a platform where saving money feels thoughtful, calm, and intentional, with the option to donate cashback to climate and social causes without pressure.",
    challengeImages: [
      { url: "/Frame 2085663160.png", alt: "Squlio Mobile View" },
      { url: "/Custom product pages.png", alt: "Squlio Custom Pages" },
    ],
    approachText:
      "We focused on clarity over noise. Instead of pushing rewards, we designed Squlio around trust, restraint, and micro-delight — ensuring the product speaks only when it needs to.",
    approachBrandText: "SQULIO",
    approachPrinciples: [
      "Thoughtful by default",
      "Playful, never distracting",
      "Purpose as a choice, not an obligation",
    ],
    quote: "We didn't just redesign the app — we redesigned how people feel about their money.",
    features: [
      "Gamified onboarding flow with progress indicators",
      "Real-time cashback dashboard with animated counters",
      "Smart notification system for reward milestones",
      "Referral program with social sharing integration",
      "Vibrant, accessible color system across light and dark modes",
      "Custom illustration system for empty states and celebrations",
    ],
    gallery: [
      { url: "/Home.png", alt: "Squlio Home" },
      { url: "/Frame 2085663160.png", alt: "Squlio Mobile" },
      { url: "/Custom product pages.png", alt: "Squlio Products" },
      { url: "/Store 1.png", alt: "Squlio Store" },
    ],
    projectUrl: "#",
    accentColor: "#6462E7",
  },

  bft: {
    slug: "bft",
    title: "Crafting a digital experience worthy of 100 years of heritage for",
    subtitle:
      "Transforming a century-old tile legacy into a modern digital showroom with AI-powered visualisation and interactive catalogues.",
    clientName: "Bharat Flooring and Tiles",
    tags: ["Product Strategy", "UX Design", "UI Design", "AI Integration"],
    readTime: "6 min read",
    date: "Oct 15 2025",
    heroImage: { url: "/BFT2.jpg", alt: "Bharat Flooring and Tiles Homepage" },
    challengeText:
      "Bharat Flooring and Tiles carries a century of legacy — but their digital presence didn't reflect it. The challenge was building a web experience that honoured their heritage craftsmanship while introducing modern tools like AI-powered room visualisation and an interactive tile catalogue that could handle thousands of SKUs.",
    challengeImages: [
      { url: "/BFT1.png", alt: "BFT Tile Catalogue" },
      { url: "/BFT3.png", alt: "BFT Room Visualiser" },
    ],
    approachText:
      "We treated the website as a digital showroom. Every section was designed to mirror the experience of walking through a physical BFT store — from the cinematic homepage that showcases their flagship collections, to an AI-powered room visualiser that lets customers see tiles in their own space before purchasing.",
    approachBrandText: "BFT",
    quote: "A century of craft deserves a digital home that feels equally timeless.",
    features: [
      "Cinematic homepage with parallax tile showcase",
      "AI-powered room visualiser for try-before-you-buy",
      "Interactive tile catalogue with advanced filtering",
      "3D tile preview with texture mapping",
      "Heritage timeline celebrating 100 years of innovation",
      "Dealer locator with integrated maps",
    ],
    gallery: [
      { url: "/BFT2.jpg", alt: "BFT Homepage" },
      { url: "/BFT1.png", alt: "BFT Catalogue" },
      { url: "/BFT3.png", alt: "BFT Visualiser" },
      { url: "/stack1.png", alt: "BFT Detail" },
    ],
    projectUrl: "https://bharatflooringandtiles.com",
    accentColor: "#2C3E35",
  },
};
