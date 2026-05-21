"use client";

import Link from "next/link";
import { CtaSectionComponent } from "@/lib/strapi";

export default function CTASection({ data }: { data?: CtaSectionComponent }) {
  // Extract Dynamic fields with Fallbacks
  const subtitle = data?.subtitle || "Let's chat about your project and see how we can help.";
  const mainHeading = data?.mainHeading || "Ready to build something remarkable?";
  const primaryButtonText = data?.primaryButtonText || "Get In Touch";
  const primaryButtonLink = data?.primaryButtonLink || "/contact";
  const secondaryButtonText = data?.secondaryButtonText || "Let's Build Together";
  const secondaryButtonLink = data?.secondaryButtonLink || "/build";

  return (
    <section className="w-full bg-[#0F1D07] py-[150px] px-6 flex flex-col items-center justify-center text-center relative overflow-hidden min-h-[750px]">

      {/* Ellipse 455 - Specific Greenish Glow from CSS */}
      <div
        className="absolute pointer-events-none opacity-100"
        style={{
          width: '626px',
          height: '660px',
          left: '50%',
          top: '97px',
          transform: 'translateX(-50%)',
          background: 'rgba(149, 231, 211, 0.1)',
          filter: 'blur(124.522px)',
          zIndex: 0
        }}
      />

      <div className="flex flex-col items-center justify-center gap-[50px] relative z-10 w-full max-w-[1600px]">

        {/* Frame 2087326366 - Text Wrapper */}
        <div className="flex flex-col items-center gap-[18px] max-w-[1302px]">

          {/* Let's chat... */}
          <p
            className="text-white flex items-center justify-center"
            style={{
              fontFamily: "var(--font-satoshi)",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "30px",
              maxWidth: '426px',
              width: '100%'
            }}
          >
            {subtitle}
          </p>

          {/* Main Heading - Based on your Figma 'Delight' 80px/120px */}
          <h2
            className="text-white flex items-center justify-center text-center capitalize"
            style={{
              fontFamily: "var(--font-delight)",
              fontWeight: 500,
              fontSize: "80px",
              lineHeight: "120px", // 150% as per your CSS
              width: '100%',
              maxWidth: '1302px'
            }}
          >
            {mainHeading}
          </h2>
        </div>

        {/* Frame 2087326472 - Buttons Wrapper */}
        <div className="flex flex-row justify-center items-center gap-[24px]">

          {/* Get In Touch - Component 144 */}
          <Link
            href={primaryButtonLink}
            className="flex flex-row justify-center items-center gap-[10px] border border-white hover:bg-white/5 transition-colors"
            style={{
              width: '175px',
              height: '58px',
              borderRadius: '18px',
              boxSizing: 'border-box'
            }}
          >
            <span style={{
              fontFamily: "var(--font-satoshi)",
              fontWeight: 700,
              fontSize: "16px",
              color: "#FFFFFF"
            }}>
              {primaryButtonText}
            </span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          {/* Let's Build Together - Component 143 */}
          <Link
            href={secondaryButtonLink}
            className="flex flex-row justify-center items-center gap-[10px] bg-white border border-white hover:bg-opacity-90 transition-opacity"
            style={{
              width: '226px',
              height: '58px',
              borderRadius: '18px',
              boxSizing: 'border-box'
            }}
          >
            <span style={{
              fontFamily: "var(--font-satoshi)",
              fontWeight: 700,
              fontSize: "16px",
              color: "#120321"
            }}>
              {secondaryButtonText}
            </span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#120321" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}