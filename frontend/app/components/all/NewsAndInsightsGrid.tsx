"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { getNewsDetailed, getStrapiImageUrl } from "@/lib/strapi";

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
  slug?: string;
};

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

// ── Purple Clarity Visual ──
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

// ── Blue Speed Visual ──
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

// ── Green Strategy Visual ──
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

// ── Photo with Logo Visual ──
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

// ── Plain Photo Visual ──
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
        {card.visual === "photo-logo" && card.image && <PhotoWithLogoVisual image={card.image} logo={card.logo} />}
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
          href={`/news-detailed/${card.slug || ""}`}
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
export default function NewsAndInsightsGrid({ data }: { data?: any }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [dbCards, setDbCards] = useState<CardType[]>([]);

  useEffect(() => {
    async function loadArticles() {
      // Check if we have articles directly passed via Strapi dynamic page content relation
      const rawItems = data?.news_detaileds?.data || data?.news_detaileds;
      if (Array.isArray(rawItems) && rawItems.length > 0) {
        const mapped = rawItems.map((art: any) => {
          const attrs = art.attributes || art;
          return {
            id: art.id,
            title: attrs.title || "",
            description: attrs.description || "",
            category: attrs.category || "Inside Thumbstack",
            tag: attrs.tag || "Article",
            cta: attrs.ctaText || "Read Article",
            visual: attrs.visual || "photo-logo",
            image: getStrapiImageUrl(attrs.heroImage) || undefined,
            logo: getStrapiImageUrl(attrs.logo) || undefined,
            bg: attrs.bgColor || undefined,
            slug: attrs.slug || ""
          };
        });
        setDbCards(mapped);
        return;
      }

      // Otherwise fallback to loading all published news-detaileds from CMS
      try {
        const fetched = await getNewsDetailed();
        if (fetched && fetched.length > 0) {
          const mapped = fetched.map((art: any) => {
            const attrs = art.attributes || art;
            return {
              id: art.id,
              title: attrs.title || "",
              description: attrs.description || "",
              category: attrs.category || "Inside Thumbstack",
              tag: attrs.tag || "Article",
              cta: attrs.ctaText || "Read Article",
              visual: attrs.visual || "photo-logo",
              image: getStrapiImageUrl(attrs.heroImage) || undefined,
              logo: getStrapiImageUrl(attrs.logo) || undefined,
              bg: attrs.bgColor || undefined,
              slug: attrs.slug || ""
            };
          });
          setDbCards(mapped);
        }
      } catch (err) {
        console.error("Error loading articles from CMS:", err);
      }
    }
    loadArticles();
  }, [data]);

  const cardsToRender = dbCards;

  const categories = ["All", ...Array.from(new Set(dbCards.map((c) => c.category).filter(Boolean)))];

  let filtered = activeCategory === "All"
    ? cardsToRender
    : cardsToRender.filter((c) => c.category === activeCategory);

  if (typeof data?.limit === "number" && data.limit > 0) {
    filtered = filtered.slice(0, data.limit);
  }

  if (cardsToRender.length === 0) {
    return null;
  }

  return (
    <section className="w-full bg-white py-24 px-6 md:px-12 lg:px-[105px]">
      <div className="max-w-[1600px] mx-auto flex flex-col gap-[68px]">
        
        {/* Header Block */}
        {(data?.title || data?.subtitle) && (
          <div className="flex flex-col gap-4">
            {data.title && (
              <h2
                className="text-[#0F1D07]"
                style={{
                  fontFamily: "var(--font-delight)",
                  fontWeight: 500,
                  fontSize: "clamp(36px, 6vw, 64px)",
                  lineHeight: "1.1",
                  letterSpacing: "-0.02em",
                }}
              >
                {data.title}
              </h2>
            )}
            {data.subtitle && (
              <p
                className="text-[#0F1D07]/60 max-w-[600px]"
                style={{
                  fontFamily: "var(--font-satoshi)",
                  fontWeight: 400,
                  fontSize: "clamp(16px, 3vw, 20px)",
                  lineHeight: "1.5",
                }}
              >
                {data.subtitle}
              </p>
            )}
          </div>
        )}

        {/* Filter Tabs */}
        {data?.showFilters !== false && categories.length > 1 && (
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
        )}

        {/* Cards Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-6 gap-y-12 md:gap-y-[80px]">
          <AnimatePresence>
            {filtered.map((card) => (
              <Card key={card.id} card={card} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Section CTA - e.g. "View All Stories" */}
        {data?.ctaText && data?.ctaLink && (
          <div className="flex justify-center mt-4">
            <Link
              href={data.ctaLink}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-bold text-sm hover:opacity-90 transition-opacity"
              style={{
                backgroundColor: "#0F1D07",
                fontFamily: "var(--font-satoshi)",
              }}
            >
              {data.ctaText}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M5 19L19 5M19 5V19M19 5H5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
