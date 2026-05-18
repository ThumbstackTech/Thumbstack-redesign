"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const categories = ["All", "Project Launches", "Inside Thumbstack", "Perspectives"];

type CardType = {
  id: number;
  title: string;
  description: string;
  category: string;
  tag: string;
  cta: string;
  visual: "red-design" | "photo-logo" | "purple-clarity" | "blue-speed" | "green-strategy" | "plain-photo";
  image?: string;
  logo?: string;
  bg?: string;
};

const cards: CardType[] = [
  {
    id: 1,
    title: "Design Is a Series of Decisions",
    description: "A look at how restraint, clarity, and intention shape products that actually last.",
    category: "Inside Thumbstack",
    tag: "Thumbstack News",
    cta: "Read News",
    visual: "red-design",
  },
  {
    id: 2,
    title: "Launch: Sunteck Realty Digital Showcase",
    description: "We transformed how a luxury real estate brand tells its story online — blending cinematic design with seamless performance.",
    category: "Project Launches",
    tag: "Launch",
    cta: "Read Case Study",
    visual: "photo-logo",
    image: "/stack2.jpg",
    logo: "/circle.png",
  },
  {
    id: 3,
    title: "Launch: Bharat Flooring Tiles",
    description: "An AI-powered showroom that lets you visualise any tile in your own space — before a single tile is laid.",
    category: "Project Launches",
    tag: "Launch",
    cta: "Read Case Study",
    visual: "photo-logo",
    image: "/BFT2.jpg",
    logo: "/footercircle.png",
  },
  {
    id: 4,
    title: "Growing the Thumbstack team",
    description: "New hires, new capabilities, and how our studio is evolving this year.",
    category: "Inside Thumbstack",
    tag: "Thumbstack News",
    cta: "Read News",
    visual: "plain-photo",
    image: "/Home.png",
    bg: "#4F46E5",
  },
  {
    id: 5,
    title: "Launch: Campaign Showcase",
    description: "A high-impact editorial launch that blended brand film, digital storytelling, and live events.",
    category: "Project Launches",
    tag: "Launch",
    cta: "Read Case Study",
    visual: "photo-logo",
    image: "/Campaign.png",
    logo: "/circle.png",
  },
  {
    id: 6,
    title: "Introducing enterprise-grade web and mobile platforms",
    description: "A few thoughtful additions to the team as we scale our work — not our chaos.",
    category: "Inside Thumbstack",
    tag: "Thumbstack News",
    cta: "Read News",
    visual: "purple-clarity",
  },
  {
    id: 7,
    title: "Why speed should feel calm, not chaotic",
    description: "How we balance momentum, craft, and decision-making in high-pressure builds.",
    category: "Perspectives",
    tag: "Article",
    cta: "Read Article",
    visual: "blue-speed",
  },
  {
    id: 8,
    title: "Launch: Store Redesign",
    description: "A reimagined retail-first e-commerce experience built to convert and retain at scale.",
    category: "Project Launches",
    tag: "Launch",
    cta: "Read Case Study",
    visual: "photo-logo",
    image: "/Store 1.png",
    logo: "/footercircle.png",
  },
  {
    id: 9,
    title: "Why design decisions are never just visual",
    description: "Every screen is a business decision, whether you treat it like one or not.",
    category: "Perspectives",
    tag: "Article",
    cta: "Read Article",
    visual: "green-strategy",
  },
];

// ── Arrow Icon ──────────────────────────────────────────
function Arrow() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ── Visual Zones ────────────────────────────────────────
function RedDesignVisual() {
  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden" style={{ background: "#D9443E" }}>
      <div
        className="absolute"
        style={{ width: 274, height: 273, left: 7, top: 74, background: "rgba(255,243,194,0.38)", filter: "blur(59.5px)", borderRadius: 200 }}
      />
      <p
        className="absolute text-white text-right"
        style={{
          fontFamily: "var(--font-nohemi)",
          fontWeight: 500,
          fontSize: "clamp(28px, 6vw, 79px)",
          lineHeight: "1.2",
          letterSpacing: "-0.02em",
          left: 38, top: 104, width: "80%",
        }}
      >
        Design<br />decides.
      </p>
    </div>
  );
}

function PurpleClarityVisual() {
  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden" style={{ background: "#A957F1" }}>
      <div
        className="absolute"
        style={{ width: 325, height: 410, left: 19, top: 0, background: "rgba(206,169,238,0.66)", filter: "blur(59.5px)", borderRadius: 200 }}
      />
      <p
        className="absolute text-white text-center"
        style={{
          fontFamily: "var(--font-nohemi)",
          fontWeight: 500,
          fontSize: "clamp(24px, 5vw, 62px)",
          lineHeight: "1.2",
          letterSpacing: "-0.02em",
          left: "50%", top: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
        }}
      >
        Clarity scales.<br />Chaos doesn&apos;t.
      </p>
    </div>
  );
}

function BlueSpeedVisual() {
  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden" style={{ background: "#9BC0FF" }}>
      <div
        className="absolute"
        style={{ width: 210, height: 505, left: 120, top: 0, background: "rgba(179,207,255,0.51)" }}
      />
      <p
        className="absolute text-[#145AD2]"
        style={{
          fontFamily: "var(--font-nohemi)",
          fontWeight: 400,
          fontSize: "clamp(48px, 10vw, 117px)",
          lineHeight: "1",
          letterSpacing: "-0.02em",
          left: 52, bottom: 0,
        }}
      >
        Speed
      </p>
    </div>
  );
}

function GreenStrategyVisual() {
  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden" style={{ background: "#8BFCDE" }}>
      <div
        className="absolute"
        style={{ width: 313, height: 330, left: 57, top: 71, background: "rgba(54,224,179,0.35)", filter: "blur(47.9px)", borderRadius: 161 }}
      />
      <p
        className="absolute text-white text-center"
        style={{
          fontFamily: "var(--font-nohemi)",
          fontWeight: 500,
          fontSize: "clamp(36px, 8vw, 83px)",
          lineHeight: "1.2",
          letterSpacing: "-0.02em",
          left: "50%", top: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
        }}
      >
        Strategy
      </p>
    </div>
  );
}

function PhotoWithLogoVisual({ image, logo }: { image: string; logo?: string }) {
  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden bg-gray-200">
      <Image src={image} alt="preview" fill className="object-cover" sizes="450px" />
      <div className="absolute inset-0 bg-black/20 rounded-xl" />
      {logo && (
        <div
          className="absolute flex items-center justify-center bg-white"
          style={{
            width: 114, height: 104,
            left: "50%", top: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: 18,
            boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
          }}
        >
          <Image src={logo} alt="logo" width={80} height={60} className="object-contain" />
        </div>
      )}
    </div>
  );
}

function PlainPhotoVisual({ image, bg }: { image?: string; bg?: string }) {
  return (
    <div
      className="relative w-full h-full rounded-xl overflow-hidden"
      style={{ background: bg ?? "#BDBDBD" }}
    >
      {image && <Image src={image} alt="preview" fill className="object-cover opacity-90" sizes="450px" />}
    </div>
  );
}

// ── Card ──────────────────────────────────────────────
function Card({ card }: { card: CardType }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px" }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35 }}
      className="flex flex-col gap-6 flex-1"
      style={{ minWidth: 0 }}
    >
      <div className="relative w-full rounded-xl overflow-hidden flex-shrink-0 h-[240px] md:h-[445px]">
        {card.visual === "red-design" && <RedDesignVisual />}
        {card.visual === "purple-clarity" && <PurpleClarityVisual />}
        {card.visual === "blue-speed" && <BlueSpeedVisual />}
        {card.visual === "green-strategy" && <GreenStrategyVisual />}
        {card.visual === "photo-logo" && <PhotoWithLogoVisual image={card.image!} logo={card.logo} />}
        {card.visual === "plain-photo" && <PlainPhotoVisual image={card.image} bg={card.bg} />}
      </div>

      {/* Card Info */}
      <div className="flex flex-col gap-5">
        {/* Title and Tag Row */}
        <div className="flex flex-row justify-between items-start gap-4">
          <h3
            className="text-black flex-1"
            style={{
              fontFamily: "var(--font-delight)",
              fontWeight: 400,
              fontSize: 18,
              lineHeight: "24px",
              letterSpacing: "-0.02em",
            }}
          >
            {card.title}
          </h3>
          <span
            className="flex items-center px-4 py-1 rounded-full shrink-0"
            style={{
              background: "rgba(49,69,221,0.08)",
              fontFamily: "var(--font-satoshi)",
              fontWeight: 700,
              fontSize: 10,
              color: "#3145DD",
              whiteSpace: "nowrap",
            }}
          >
            {card.tag}
          </span>
        </div>

        {/* Text block */}
        <div className="flex flex-col gap-2">
          <p
            className="text-black"
            style={{
              fontFamily: "var(--font-satoshi)",
              fontWeight: 500,
              fontSize: 14,
              lineHeight: "18px",
            }}
          >
            {card.description}
          </p>
        </div>

        {/* CTA */}
        <Link
          href="/news-and-insights/article"
          className="flex items-center gap-2 text-black hover:opacity-60 transition-opacity w-fit"
          suppressHydrationWarning
          style={{
            fontFamily: "var(--font-satoshi)",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "36px",
          }}
        >
          {card.cta} <Arrow />
        </Link>
      </div>
    </motion.div>
  );
}

// ── Main Grid Component ────────────────────────────────
export default function NewsAndInsightsGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? cards
    : cards.filter((c) => c.category === activeCategory);

  return (
    <section className="w-full bg-white py-24 px-6 md:px-12 lg:px-[105px]">
      <div className="max-w-[1600px] mx-auto flex flex-col gap-[68px]">

        {/* Filter Tabs */}
        <div className="flex flex-col gap-[45px]">
          <div className="flex flex-row items-center gap-6 md:gap-[47px] overflow-x-auto scrollbar-hide pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                suppressHydrationWarning
                className="transition-opacity whitespace-nowrap"
                style={{
                  fontFamily: "var(--font-nohemi)",
                  fontWeight: 500,
                  fontSize: "clamp(20px, 4vw, 30px)",
                  lineHeight: "1",
                  letterSpacing: "-0.02em",
                  color: "#0F1D07",
                  opacity: activeCategory === cat ? 1 : 0.4,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-6 gap-y-12 md:gap-y-[80px]">
          <AnimatePresence>
            {filtered.map((card) => (
              <Card key={card.id} card={card} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
