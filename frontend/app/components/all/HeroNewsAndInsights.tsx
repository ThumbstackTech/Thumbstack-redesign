"use client";

import Link from "next/link";
import { NewsHeroData } from "../../types/strapi";

export default function HeroNewsAndInsights({ data }: { data?: NewsHeroData }) {
  const heading = data?.heading || "Ideas, News & Notes\nFrom The Studio.";
  const description = data?.description || "We document what we learn — from design sprints to engineering breakthroughs, new project launches, experiments, and small discoveries that move our work forward.";
  const bgColor = data?.bgColor || "#3145DD";
  const textColor = data?.textColor || "#FFFFFF";
  const ctaText = data?.ctaText || "Let's Build Together";
  const ctaLink = data?.ctaLink || "#";

  return (
    <section
      className="min-h-[100svh] w-full flex flex-col justify-start items-center pt-[200px] md:pt-[350px] pb-16 md:pb-32 px-6 md:px-12 lg:px-24 snap-start relative md:pl-[90px] md:pr-[90px] overflow-hidden transition-colors duration-500"
      style={{ backgroundColor: bgColor, color: textColor }}
    >

      {/* Background Decoration - Glowing Oval */}
      <div className="absolute top-1/2 -translate-y-1/2 right-0 md:right-[5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-white opacity-40 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="w-full max-w-[1600px] mx-auto flex flex-col gap-12 sm:gap-16 relative z-10">
        {/* Main typography */}
        <div className="flex flex-col relative z-10 mt-20 md:mt-32">
          
          {/* Dynamic CTA Link */}
          {ctaText && (
            <Link
              href={ctaLink}
              className="flex items-center gap-2 hover:opacity-75 transition-opacity mb-8 md:mb-12"
              style={{ 
                color: textColor,
                fontFamily: "var(--font-satoshi)", 
                fontWeight: 700,
                fontSize: "14px",
                lineHeight: "28px",
                letterSpacing: "0%"
              }}
            >
              {ctaText}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_6227_88259)">
                  <path d="M5 15L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6.875 5H15V13.125" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_6227_88259)">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
          )}

          {/* Heading and Description */}
          <div className="flex flex-col gap-8 md:gap-12">
            <h1
              className="tracking-[-0.04em] max-w-[1200px]"
              style={{
                color: textColor,
                fontFamily: "var(--font-delight)",
                fontWeight: 600,
                fontSize: "clamp(36px, 8vw, 114.45px)",
                lineHeight: "clamp(46px, 9vw, 143.07px)",
                letterSpacing: "-0.02em",
                verticalAlign: "middle",
                whiteSpace: "pre-line"
              }}
            >
              {heading}
            </h1>

            <p
              style={{
                color: textColor,
                opacity: 0.9,
                fontFamily: "var(--font-satoshi)",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "24px",
                letterSpacing: "0%",
                maxWidth: "600px"
              }}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
