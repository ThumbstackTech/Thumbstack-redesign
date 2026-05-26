"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion } from "framer-motion";
import type { CaseStudyData } from "../../data/types";
import SectionRenderer from "../SectionRenderer";

interface CaseStudyTemplateProps {
  data: CaseStudyData;
}

/* ── Fade-in-up wrapper ─────────────────────────────────────────────── */
const FadeUp = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ── Main Component ──────────────────────────────────────────────────── */
export default function CaseStudyTemplate({ data }: CaseStudyTemplateProps) {
  const accent = data.accentColor ?? "#3145DD";
  const bg = data.backgroundColor ?? "#141417";
  // Add 80% opacity to the hex color (CC is 80% in hex alpha)
  const subtleBg = data.backgroundColor ? `${bg}CC` : "#212124";
  const experienceRef = useRef<HTMLDivElement>(null);

  return (
    <main className="bg-white text-[#0F1D07] antialiased">

      {/* ════════════════════════════════════════════════════════════════
          1. HERO — #141417 dark block
      ════════════════════════════════════════════════════════════════ */}
      <section
        className="relative w-full overflow-hidden"
        style={{ background: bg }}
      >
        {/* Inner container — centred 1400px */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 pt-12 pb-16 md:pt-16 md:pb-20 flex flex-col gap-[54px]">

          {/* ── Breadcrumbs ── */}
          <FadeUp>
            <nav
              className="flex items-center gap-0 text-white"
              style={{
                fontFamily: "var(--font-satoshi)",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "24px",
              }}
            >
              <Link href="/" className="px-2.5 py-2.5 hover:text-[#95E7D3] transition-colors">
                Home
              </Link>
              <span className="px-2.5 py-2.5 opacity-50">/</span>
              <Link href="/our-work" className="px-2.5 py-2.5 hover:text-[#95E7D3] transition-colors">
                Our Work
              </Link>
              <span className="px-2.5 py-2.5 opacity-50">/</span>
              <span
                className="px-2.5 py-2.5"
                style={{ fontWeight: 700, color: "#95E7D3" }}
              >
                {data.clientName}
              </span>
            </nav>
          </FadeUp>

          {/* ── Title + Subtitle ── */}
          <div className="flex flex-col gap-[15px] max-w-[1356px]">
            <FadeUp delay={0.05}>
              <h1
                className="text-white capitalize"
                style={{
                  fontFamily: "var(--font-delight)",
                  fontWeight: 500,
                  fontSize: "clamp(32px, 5vw, 72px)",
                  lineHeight: "clamp(42px, 6.4vw, 92px)",
                  letterSpacing: "-0.02em",
                }}
              >
                {data.title}{" "}
                {data.clientName && !data.title.toLowerCase().includes(data.clientName.toLowerCase()) && (
                  <span style={{ color: accent }}>{data.clientName}</span>
                )}
              </h1>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p
                className="text-white max-w-[1356px]"
                style={{
                  fontFamily: "var(--font-satoshi)",
                  fontWeight: 300,
                  fontSize: "16px",
                  lineHeight: "32px",
                }}
              >
                {data.subtitle}
              </p>
            </FadeUp>
          </div>

          {/* ── Tags row + Meta ── */}
          <FadeUp delay={0.15}>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 max-w-[1400px]">
              {/* Tags */}
              <div className="flex flex-wrap items-center gap-2.5">
                {data.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-2.5 border border-white rounded-xl text-white whitespace-nowrap"
                    style={{
                      fontFamily: "var(--font-satoshi)",
                      fontWeight: 400,
                      fontSize: "10px",
                      lineHeight: "30px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Read time + Date */}
              <div
                className="flex items-center gap-10 text-white shrink-0"
                style={{
                  fontFamily: "var(--font-satoshi)",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "40px",
                }}
              >
                <span>{data.readTime}</span>
                <span className="w-[5px] h-[5px] rounded-full bg-white" />
                <span>{data.date}</span>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          2. HERO IMAGE — #212124 dark panel
      ════════════════════════════════════════════════════════════════ */}
      <section style={{ background: subtleBg }}>
        <FadeUp>
          <div className="max-w-[1600px] mx-auto relative w-full aspect-[2/1] overflow-hidden">
            <Image
              src={data.heroImage.url}
              alt={data.heroImage.alt ?? `${data.clientName} hero`}
              fill
              priority
              unoptimized
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </FadeUp>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          3. THE CHALLENGE — White section
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1408px] mx-auto px-6 md:px-16 lg:px-24">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-[141px]">
            {/* Left: Title */}
            <FadeUp>
              <h2
                className="text-[#0F1D07] shrink-0"
                style={{
                  fontFamily: "var(--font-delight)",
                  fontWeight: 500,
                  fontSize: "clamp(40px, 5.5vw, 64px)",
                  lineHeight: "1.1",
                  letterSpacing: "-0.02em",
                }}
              >
                The Challenge
              </h2>
            </FadeUp>

            {/* Right: Body text */}
            <FadeUp delay={0.1}>
              <p
                className="text-[#0F1D07] max-w-[670px]"
                style={{
                  fontFamily: "var(--font-satoshi)",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "28px",
                }}
              >
                {data.challengeText}
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          3.5. CHALLENGE IMAGES — Dark section
      ════════════════════════════════════════════════════════════════ */}
      {data.challengeImages && data.challengeImages.length > 0 && (
        <section className="py-20 md:py-28" style={{ background: subtleBg }}>
          <div className="max-w-[1408px] mx-auto px-6 md:px-16 lg:px-24">
            <FadeUp>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {data.challengeImages.map((img, idx) => (
                  <div
                    key={idx}
                    className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-lg"
                  >
                    <Image
                      src={img.url}
                      alt={img.alt ?? "Challenge image"}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </section>
      )}

      {/* ════════════════════════════════════════════════════════════════
          4. OUR APPROACH — White section
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20 md:py-28 border-t border-black/5">
        <div className="max-w-[1408px] mx-auto px-6 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
            
            {/* Left: Text & Principles */}
            <div className="flex flex-col gap-10">
              <FadeUp>
                <h2
                  className="text-[#0F1D07] mb-6"
                  style={{
                    fontFamily: "var(--font-delight)",
                    fontWeight: 500,
                    fontSize: "clamp(40px, 5.5vw, 64px)",
                    lineHeight: "1.1",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Our Approach
                </h2>
                <p
                  className="text-[#0F1D07]"
                  style={{
                    fontFamily: "var(--font-satoshi)",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "28px",
                  }}
                >
                  {data.approachText}
                </p>
              </FadeUp>

              {/* Principles */}
              {data.approachPrinciples && data.approachPrinciples.length > 0 && (
                <FadeUp delay={0.1}>
                  <div className="flex flex-col gap-4">
                    <span 
                      className="text-[#0F1D07] opacity-60"
                      style={{
                        fontFamily: "var(--font-satoshi)",
                        fontSize: "14px",
                      }}
                    >
                      Key principles:
                    </span>
                    <div className="flex flex-wrap gap-3">
                      {data.approachPrinciples.map((principle, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 rounded-lg bg-[#F5F5F5] text-[#0F1D07]"
                          style={{
                            fontFamily: "var(--font-satoshi)",
                            fontSize: "12px",
                            fontWeight: 500,
                          }}
                        >
                          {principle}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeUp>
              )}
            </div>

            {/* Right: Brand logo block */}
            {data.approachBrandText && (
              <FadeUp delay={0.15}>
                <div className="flex items-center justify-center rounded-xl aspect-square w-full max-w-[500px] ml-auto" style={{ background: bg }}>
                  <span
                    className="tracking-[0.15em] uppercase"
                    style={{
                      fontFamily: "var(--font-delight)",
                      fontWeight: 600,
                      fontSize: "clamp(28px, 4vw, 48px)",
                      color: accent,
                    }}
                  >
                    {data.approachBrandText}
                  </span>
                </div>
              </FadeUp>
            )}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          5. QUOTE BLOCK — Light grey
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28" style={{ background: data.backgroundColor ? bg : "#F7F7F7" }}>
        <div className="max-w-[1408px] mx-auto px-6 md:px-16 lg:px-24">
          <FadeUp>
            <span
              className="block mb-2 leading-none select-none"
              style={{
                fontFamily: "var(--font-delight)",
                fontSize: "clamp(64px, 8vw, 96px)",
                fontWeight: 700,
                color: data.backgroundColor ? "#FFFFFF" : accent,
                opacity: 0.8,
              }}
            >
              &ldquo;
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <blockquote
              className="max-w-[900px]"
              style={{
                fontFamily: "var(--font-delight)",
                fontWeight: 500,
                fontSize: "clamp(24px, 3.2vw, 44px)",
                lineHeight: "1.3",
                letterSpacing: "-0.02em",
                color: data.backgroundColor ? "#FFFFFF" : "#0F1D07",
              }}
            >
              {data.quote}
            </blockquote>
          </FadeUp>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          6. THE EXPERIENCE — Sticky + Scroll Gallery
      ════════════════════════════════════════════════════════════════ */}
      <section
        ref={experienceRef}
        className="bg-white py-20 md:py-28 border-t border-black/5"
      >
        <div className="max-w-[1408px] mx-auto px-6 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
            {/* Sticky left */}
            <div className="md:col-span-4 md:sticky md:top-28">
              <FadeUp>
                <h2
                  className="text-[#0F1D07] mb-8"
                  style={{
                    fontFamily: "var(--font-delight)",
                    fontWeight: 500,
                    fontSize: "clamp(36px, 5vw, 72px)",
                    lineHeight: "1.15",
                    letterSpacing: "-0.02em",
                  }}
                >
                  The<br />Experience
                </h2>
                <ul className="flex flex-col gap-4">
                  {data.features.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span
                        className="mt-2 w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: accent }}
                      />
                      <span
                        className="text-[#0F1D07]/70 leading-relaxed"
                        style={{
                          fontFamily: "var(--font-satoshi)",
                          fontSize: "15px",
                          lineHeight: "26px",
                        }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </FadeUp>
            </div>

            {/* Scrolling gallery */}
            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {data.gallery.map((img, idx) => (
                <FadeUp key={idx} delay={idx * 0.07}>
                  <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-xl group">
                    <Image
                      src={img.url}
                      alt={img.alt ?? `Gallery ${idx + 1}`}
                      fill
                      unoptimized
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          7. CTA — Dark section
      ════════════════════════════════════════════════════════════════ */}
      <section
        className="py-28 md:py-36 px-6 text-center relative overflow-hidden"
        style={{ background: bg }}
      >
        {/* Subtle glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
          style={{ background: accent, filter: "blur(160px)", opacity: 0.1 }}
        />

        <FadeUp className="relative z-10">
          <h2
            className="text-white max-w-[760px] mx-auto mb-10"
            style={{
              fontFamily: "var(--font-nohemi)",
              fontWeight: 500,
              fontSize: "clamp(24px, 3.5vw, 44px)",
              lineHeight: "1.3",
              letterSpacing: "-0.02em",
            }}
          >
            The Best Way To Understand {data.clientName} Is
            <br className="hidden md:block" />
            To Experience It Firsthand.
          </h2>

          <Link
            href={data.projectUrl}
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-white text-white hover:bg-white hover:text-[#0F1D07]"
          >
            Visit {data.clientName}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </FadeUp>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          6.5. DYNAMIC SECTIONS — Rendered from Strapi
      ════════════════════════════════════════════════════════════════ */}
      {data.dynamicContent && data.dynamicContent.length > 0 && (
        <SectionRenderer sections={data.dynamicContent} />
      )}
      
    </main>
  );
}
