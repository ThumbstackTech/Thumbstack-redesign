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
        className="relative w-full overflow-hidden min-h-[528px] flex flex-col justify-between"
        style={{ background: "#141417" }}
      >
        {/* Inner container — centred 1400px */}
        <div className="max-w-[1400px] w-full mx-auto px-6 md:px-16 lg:px-24 pt-[45px] pb-[40px] flex flex-col justify-end flex-grow gap-[20px]">

          {/* ── Breadcrumbs (Frame 335) ── */}
          <FadeUp>
            <nav
              className="flex items-center gap-0 text-white"
              style={{
                fontFamily: "'Satoshi Variable', 'Satoshi', sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "24px",
              }}
            >
              <Link href="/" className="hover:text-[#95E7D3] transition-colors py-2" style={{ color: "#FFFFFF" }}>
                Home
              </Link>
              <span className="px-2 py-2" style={{ color: "#FFFFFF" }}>/</span>
              <Link href="/our-work" className="hover:text-[#95E7D3] transition-colors py-2" style={{ color: "#FFFFFF" }}>
                Our Work
              </Link>
              <span className="px-2 py-2" style={{ color: "#FFFFFF" }}>/</span>
              <span
                className="py-2"
                style={{ fontWeight: 700, color: "#95E7D3" }}
              >
                {data.clientName}
              </span>
            </nav>
          </FadeUp>

          {/* Inner Content wrapper (Frame 2087326515 equivalent) */}
          <div className="flex flex-col gap-[54px] w-full">
            {/* ── Title + Subtitle (Frame 2085663518) ── */}
            <div className="flex flex-col gap-[15px] max-w-[1384px] w-full">
              <FadeUp delay={0.05}>
                <h1
                  className="text-white m-0 max-w-[1384px]"
                  style={{
                    fontFamily: "var(--font-delight), sans-serif",
                    fontWeight: 500,
                    fontSize: "clamp(32px, 4.2vw, 64px)",
                    lineHeight: "clamp(42px, 5.2vw, 80px)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {data.title}{" "}
                  {data.clientName && !data.title.toLowerCase().includes(data.clientName.toLowerCase()) && (
                    <span style={{ textDecoration: "underline", textUnderlineOffset: "8px" }}>{data.clientName}</span>
                  )}
                </h1>
              </FadeUp>

              <FadeUp delay={0.1}>
                <p
                  className="text-white m-0 max-w-[1356px] w-full"
                  style={{
                    fontFamily: "'Satoshi Variable', 'Satoshi', sans-serif",
                    fontWeight: 300,
                    fontSize: "16px",
                    lineHeight: "32px",
                  }}
                >
                  {data.subtitle}
                </p>
              </FadeUp>
            </div>

            {/* ── Tags row + Meta (Frame 2087326500) ── */}
            <FadeUp delay={0.15}>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 w-full">
                {/* Tags (Frame 2087326499) */}
                <div className="flex flex-wrap items-center gap-[10px]">
                  {data.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 h-[37px] border border-white rounded-[12px] text-white flex items-center justify-center whitespace-nowrap"
                      style={{
                        fontFamily: "'Satoshi Variable', 'Satoshi', sans-serif",
                        fontWeight: 400,
                        fontSize: "10px",
                        lineHeight: "30px",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read time + Date (Frame 2085662985) */}
                <div
                  className="flex items-center gap-[40px] text-white shrink-0"
                  style={{
                    fontFamily: "'Satoshi Variable', 'Satoshi', sans-serif",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "40px",
                  }}
                >
                  <span>{data.readTime}</span>
                  <span className="w-[5px] h-[5px] rounded-full bg-white shrink-0" />
                  <span>{data.date}</span>
                </div>
              </div>
            </FadeUp>
          </div>
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
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-[190px]">

            {/* Left: Text & Principles (Frame 2087326510) */}
            <div className="flex flex-col gap-[62px] w-full lg:max-w-[729px]">
              {/* Frame 2087326504 */}
              <div className="flex flex-col gap-[52px] w-full lg:max-w-[665px]">
                <FadeUp>
                  <h2
                    className="text-[#0F1D07] m-0"
                    style={{
                      fontFamily: "var(--font-delight)",
                      fontWeight: 500,
                      fontSize: "clamp(48px, 6vw, 80px)",
                      lineHeight: "clamp(60px, 8vw, 102px)",
                      letterSpacing: "-0.02em",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Our Approach
                  </h2>
                </FadeUp>
                <FadeUp delay={0.05}>
                  <p
                    className="text-[#0F1D07] m-0 lg:max-w-[670px]"
                    style={{
                      fontFamily: "'Satoshi Variable', 'Satoshi', sans-serif",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "30px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {data.approachText}
                  </p>
                </FadeUp>
              </div>

              {/* Principles (Frame 2087326509) */}
              {data.approachPrinciples && data.approachPrinciples.length > 0 && (
                <FadeUp delay={0.1}>
                  <div className="flex flex-col gap-[20px] w-full lg:max-w-[729px]">
                    <span
                      className="text-[#0F1D07]"
                      style={{
                        fontFamily: "'Satoshi Variable', 'Satoshi', sans-serif",
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "30px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      Key principles:
                    </span>
                    <div className="flex flex-wrap gap-[10px]">
                      {data.approachPrinciples.map((principle, idx) => (
                        <span
                          key={idx}
                          className="px-[18px] py-[10px] bg-[#F2F2F2] rounded-[12px] text-[#0F1D07]"
                          style={{
                            fontFamily: "'Satoshi Variable', 'Satoshi', sans-serif",
                            fontSize: "16px",
                            fontWeight: 400,
                            lineHeight: "30px",
                            display: "flex",
                            alignItems: "center",
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

            {/* Right: Brand logo block (Frame 2087326508) */}
            {data.approachBrandText && (
              <FadeUp delay={0.15} className="w-full lg:w-[481px] shrink-0">
                <div
                  className="flex items-center justify-center w-full lg:w-[481px] h-[464px] rounded-[24px]"
                  style={{
                    background: "#18181A",
                    border: "1px solid rgba(110, 110, 110, 0.25)"
                  }}
                >
                  <span
                    className="tracking-[0.15em] uppercase"
                    style={{
                      fontFamily: "var(--font-delight), sans-serif",
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
            <svg
              width="88"
              height="60"
              viewBox="0 0 88 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="block mb-8 select-none"
              style={{ color: data.backgroundColor ? "#FFFFFF" : accent }}
            >
              <path
                d="M24.4956 28.6633C32.5733 28.6633 37.7848 34.917 37.7848 42.9948C37.7848 51.8542 31.2705 59.1502 20.0659 59.1502C8.86134 59.1502 0.00191091 50.0302 0.00191091 35.9593C0.00191091 21.3673 9.38248 7.03591 32.5733 0.000474845V6.77534C17.9813 10.6839 9.90363 19.8039 9.90363 28.1422C9.90363 31.269 11.2065 33.0931 13.0305 33.0931C15.8968 33.0931 17.4602 28.6633 24.4956 28.6633ZM74.5253 28.6633C82.603 28.6633 87.8145 34.917 87.8145 42.9948C87.8145 51.8542 81.3002 59.1502 70.0956 59.1502C58.8911 59.1502 50.0316 50.0302 50.0316 35.9593C50.0316 21.3673 59.4122 7.03591 82.603 0.000474845V6.77534C68.0111 10.6839 59.9333 19.8039 59.9333 28.1422C59.9333 31.269 61.2362 33.0931 63.0602 33.0931C66.1871 33.0931 67.4899 28.6633 74.5253 28.6633Z"
                fill="currentColor"
              />
            </svg>
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
