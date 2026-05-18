"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ServiceHero() {
  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden">
      {/* 
        Main Hero Content Container
        Responsive layout: Absolute on desktop (per Figma), relative/flex on mobile.
      */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col justify-end items-start gap-[40px] md:gap-[75px] relative md:absolute px-6 md:px-0 pt-[180px] md:pt-0 w-full max-w-[1048px] h-auto md:min-h-[543px] md:left-[100px] md:top-[280px]"
      >
        <div className="flex flex-col gap-6 md:gap-10">
          {/* Headline: Strategise. Design. Build. Grow. */}
          <h1
            className="text-[#0D1C06] tracking-[-0.01em]"
            style={{
              fontFamily: "var(--font-delight)",
              fontSize: "clamp(48px, 8vw, 100px)",
              lineHeight: "clamp(60px, 10vw, 134px)",
              fontWeight: 600,
            }}
          >
            Strategise. Design.<br className="hidden md:block" />
            Build. Grow.
          </h1>

          {/* Description Paragraph - Updated to match Figma 24px/40px */}
          <p 
            className="text-[#0D1C06] max-w-[1048px] opacity-90"
            style={{
              fontFamily: "var(--font-satoshi)",
              fontWeight: 500,
              fontSize: "clamp(16px, 2vw, 24px)",
              lineHeight: "clamp(26px, 3vw, 40px)",
            }}
          >
            We help brands, founders, and teams turn digital ideas into clear, usable, and scalable products. From websites and e-commerce platforms to mobile apps, CMS systems, AI led tools, and long term support, we work across the full lifecycle of digital experience.
          </p>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-12 w-full sm:w-auto">
          {/* Primary Button: Start Building */}
          <Link
            href="/contact"
            className="w-full sm:w-auto bg-[#0D1C06] text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-[16px] md:text-[18px] font-medium hover:bg-black transition-all duration-300 active:scale-95 shadow-sm text-center"
            style={{ fontFamily: "var(--font-satoshi)" }}
          >
            Start building
          </Link>

          {/* Secondary Link: View Our Work */}
          <Link
            href="/our-work"
            className="flex items-center gap-4 text-[#0D1C06] text-[18px] md:text-[20px] font-medium group transition-all duration-300"
            style={{ fontFamily: "var(--font-satoshi)" }}
          >
            View Our Work
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              className="group-hover:translate-x-2 transition-transform duration-300"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
