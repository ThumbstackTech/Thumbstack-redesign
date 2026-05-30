"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ServiceHeroComponent } from "@/lib/strapi";

export default function ServiceHero({ data }: { data?: ServiceHeroComponent }) {
  // Extract Dynamic fields with Fallbacks
  const mainHeading = data?.mainHeading || "Strategise. Design. Build. Grow.";
  const description = data?.description || "We help brands, founders, and teams turn digital ideas into clear, usable, and scalable products.\nFrom websites and e-commerce platforms to mobile apps, CMS systems, AI led tools, and long term support,\nwe work across the full lifecycle of digital experience.";
  const primaryButtonText = data?.primaryButtonText || "Start Building";
  const primaryButtonLink = data?.primaryButtonLink || "/contact";
  const secondaryButtonText = data?.secondaryButtonText || "View Our Work";
  const secondaryButtonLink = data?.secondaryButtonLink || "/work";

  // Format description into exactly 3 lines on desktop if it contains the targets
  let formattedDescription: React.ReactNode = description;
  if (typeof description === "string") {
    // Normalise spaces to ensure easy matching
    const cleanDesc = description.replace(/\s+/g, " ").trim();
    const target1 = "scalable products.";
    const target2 = "long term support,";
    
    if (cleanDesc.includes(target1) && cleanDesc.includes(target2)) {
      const idx1 = cleanDesc.indexOf(target1) + target1.length;
      const part1 = cleanDesc.substring(0, idx1).trim();
      const rest1 = cleanDesc.substring(idx1).trim();
      
      const idx2 = rest1.indexOf(target2) + target2.length;
      if (idx2 > target2.length) {
        const part2 = rest1.substring(0, idx2).trim();
        const part3 = rest1.substring(idx2).trim();
        
        formattedDescription = (
          <>
            {part1}
            <br className="hidden md:inline" />
            {part2}
            <br className="hidden md:inline" />
            {part3}
          </>
        );
      }
    }
  }

  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col justify-center pt-24 pb-16 px-6 md:px-12 lg:px-20 xl:px-24 md:pl-[100px] md:pr-[100px]">
      {/* 
        Main Hero Content Container
        Responsive layout: Clean flex alignment, avoiding absolute offset issues.
      */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col justify-center items-start gap-[40px] md:gap-[75px] w-full max-w-[1048px]"
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
            {mainHeading}
          </h1>

          {/* Description Paragraph - Updated to match Figma 18px */}
          <p 
            className="text-[#0D1C06] max-w-[1048px] opacity-90"
            style={{
              fontFamily: "var(--font-satoshi)",
              fontWeight: 500,
              fontSize: "18px",
              lineHeight: "32px",
              whiteSpace: "pre-line",
            }}
          >
            {formattedDescription}
          </p>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-12 w-full sm:w-auto">
          {/* Primary Button: Start Building */}
          <Link
            href={primaryButtonLink}
            className="w-full sm:w-auto bg-[#0D1C06] text-white px-8 md:px-10 py-4 md:py-5 rounded-[18px] text-[16px] md:text-[18px] font-medium hover:bg-black transition-all duration-300 active:scale-95 shadow-sm text-center"
            style={{ fontFamily: "var(--font-satoshi)", borderRadius: "18px" }}
          >
            {primaryButtonText}
          </Link>

          {/* Secondary Link: View Our Work */}
          <Link
            href={secondaryButtonLink}
            className="flex items-center gap-4 text-[#0D1C06] text-[18px] md:text-[20px] font-medium group transition-all duration-300"
            style={{ fontFamily: "var(--font-satoshi)" }}
          >
            {secondaryButtonText}
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
