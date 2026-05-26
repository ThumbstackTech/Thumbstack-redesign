import React from "react";
import Link from "next/link";

interface ServiceHeroDetailProps {
  data: {
    tagline?: string;
    title?: string;
    description?: string;
    primaryCtaText?: string;
    primaryCtaLink?: string;
    secondaryCtaText?: string;
    secondaryCtaLink?: string;
  };
}

export default function ServiceHeroDetail({ data }: ServiceHeroDetailProps) {
  const tagline = data?.tagline || "Strategise";
  const title = data?.title || "Make The Right Decisions Before The Work Begins.";
  const description = data?.description || "Most digital projects do not fail because of design or code alone. They fail because the wrong thing was defined at the start. We help brands, founders, and teams understand what needs to be built, what needs to be fixed, what should be prioritised, and what direction will create the strongest business outcome.";
  const primaryCtaText = data?.primaryCtaText || "Start With Strategy";
  const primaryCtaLink = data?.primaryCtaLink || "#";
  const secondaryCtaText = data?.secondaryCtaText || "View Our Work";
  const secondaryCtaLink = data?.secondaryCtaLink || "#";

  const titleLines = title.split(/\r?\n|\\n/);

  return (
    <section className="w-full flex items-center justify-center bg-white min-h-screen px-6 md:px-[100px] pt-28 pb-20 md:pt-32 md:pb-28">
      <div className="w-full max-w-[1400px] flex flex-col items-start gap-8 relative">
        <div className="flex flex-col items-start gap-4 w-full">
          <span
            className="font-medium text-[18px] sm:text-[20px] md:text-[24px] leading-[36px] text-[#0F1D07]"
            style={{ fontFamily: "var(--font-satoshi)" }}
          >
            {tagline}
          </span>
          <h1
            className="font-medium text-[#0F1D07] tracking-[-0.01em] w-full max-w-[1033px]"
            style={{
              fontFamily: "var(--font-delight)",
              fontSize: "clamp(32px, 5vw, 64px)",
              lineHeight: "clamp(42px, 6vw, 84px)",
              fontWeight: 500,
            }}
          >
            {titleLines.map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < titleLines.length - 1 && <br />}
              </React.Fragment>
            ))}
          </h1>
          <p
            className="font-normal text-[#0F1D07] max-w-[759px] w-full"
            style={{
              fontFamily: "var(--font-satoshi)",
              fontWeight: 400,
              fontSize: "clamp(16px, 1.5vw, 18px)",
              lineHeight: "clamp(28px, 2.5vw, 34px)",
            }}
          >
            {description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 mt-4 w-full sm:w-auto">
          {/* Primary CTA */}
          <Link
            href={primaryCtaLink}
            className="flex flex-row justify-center items-center px-6 h-[59px] bg-[#0F1D07] text-white rounded-[18px] hover:bg-[#1a2d0d] transition-colors"
          >
            <span
              className="font-bold text-[16px] text-white"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              {primaryCtaText}
            </span>
          </Link>

          {/* Secondary CTA */}
          <Link
            href={secondaryCtaLink}
            className="group flex flex-row justify-center items-center px-6 h-[59px] gap-2 rounded-[18px] text-[#0F1D07] hover:opacity-80 transition-opacity"
          >
            <span
              className="font-bold text-[16px] text-[#0F1D07]"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              {secondaryCtaText}
            </span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-300 group-hover:translate-x-[6px]"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="#0F1D07"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
