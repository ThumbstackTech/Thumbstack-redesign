/**
 * Mock data for all projects shown on the homepage.
 *
 * Image layout per card:
 *   mainImage    → large left panel (~60% width, full gallery height)
 *   sideTopImage → top-right panel  (~38% width, ~48% height)
 *   sideBotImage → bottom-right panel (~38% width, ~48% height)
 *
 * layout:
 *   "desktop" → screenshot-style cards (BFT style — contain + top-align)
 *   "mobile"  → phone/app mockup cards (Squlio/Siorai style — cover, rounded frames)
 */

export const projects = [
  {
    id: "squlio",
    name: "Squlio",
    tagline: "Transforming Fintech Engagement",
    description:
      "We partnered with Squlio to build a vibrant, gamified platform. From an intuitive onboarding flow to an engaging cashback dashboard, we transformed a complex fintech system into a delightful daily habit for users.",
    tags: ["Design", "Technology", "AI"],
    bg: "#A2A4F4",
    barBg: "#6462E7",
    barBorder: "#8482F6",
    accentColor: "#2C2BAA",
    cursorColor: "#A8F2D1",
    websiteUrl: "#",
    caseStudyUrl: "/case-study/squlio",
    layout: "mobile",
    images: {
      main: "/Home.png",
      mainAlt: "Squlio Dashboard",
      sideImages: [
        { src: "/Frame 2085663160.png", alt: "Squlio Mobile View" },
        { src: "/Custom product pages.png", alt: "Squlio Custom Pages" },
      ]
    },
  },
  {
    id: "bft",
    name: "Bharat Flooring and Tiles",
    tagline: "100 Years of Innovation",
    description:
      "We partnered with Bharat Flooring and Tiles to craft a digital experience worthy of a century-old legacy. From a cinematic homepage to an interactive tile catalogue, we translated their heritage craftsmanship into a premium web presence.",
    tags: ["Design", "Technology", "AI"],
    bg: "#748F82",
    barBg: "#1E2E26",
    barBorder: "rgba(255,255,255,0.12)",
    accentColor: "#2C3E35",
    cursorColor: "#7ECBB5",
    websiteUrl: "https://bharatflooringandtiles.com",
    caseStudyUrl: "/case-study/bft",
    layout: "desktop",
    images: {
      main: "/BFT2.jpg",
      mainAlt: "Bharat Flooring and Tiles — Homepage",
      sideImages: [
        { src: "/BFT1.png", alt: "BFT Tile Catalogue" },
        { src: "/BFT3.png", alt: "BFT Room Visualiser" },
      ]
    },
  },
  {
    id: "siorai",
    name: "Siorai",
    tagline: "Redefining Luxury Fashion Online",
    description:
      "We reimagined Siorai's digital presence — blending dark editorial aesthetics with a seamless e-commerce experience. Every screen was crafted to feel as premium as the brand itself.",
    tags: ["Design", "E-Commerce", "AI"],
    bg: "#111111",
    barBg: "#1A1A1A",
    barBorder: "rgba(255,255,255,0.08)",
    accentColor: "#C4291C",
    cursorColor: "#F5D5D0",
    websiteUrl: "#",
    caseStudyUrl: "/case-study/siorai",
    layout: "desktop",
    images: {
      main: "/siorai.png",
      mainAlt: "Siorai — High-end Fashion Experience",
      sideImages: [
        { src: "/Campaign.png", alt: "Siorai Campaign Shoot" },
        { src: "/Campaign-1.png", alt: "Siorai Campaign Editorial" },
        { src: "/stack1.png", alt: "Siorai Collection Overview" },
        { src: "/stack2.png", alt: "Siorai Detail View" },
      ]
    },
  },
];
