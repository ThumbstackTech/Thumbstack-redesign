"use client";

import React from "react";

const ArrowIcon = ({ color = "currentColor" }: { color?: string }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0"
  >
    <path
      d="M7 17L17 7M17 7H7M17 7V17"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function WorkInfo() {
  return (
    <section
      className="relative w-full h-[750px] bg-[#0F1D07] overflow-hidden flex flex-col justify-center items-center px-4 md:px-8 snap-start"
      style={{ isolation: "isolate" }}
    >
      {/* Ellipse 455 - Background Glow */}
      <div
        className="absolute pointer-events-none opacity-50"
        style={{
          width: "713px",
          height: "660px",
          left: "50%",
          top: "45px",
          transform: "translateX(-50%)",
          background: "rgba(149, 231, 211, 0.1)",
          filter: "blur(124.522px)",
          zIndex: 0,
        }}
      />

      {/* Main Content Container - Frame 2087326361 */}
      <div className="relative z-10 w-full max-w-[1600px] flex flex-col justify-center items-center gap-[50px]">
        
        {/* Text Group - Frame 2087326366 */}
        <div className="flex flex-col items-center gap-[24px] max-w-[978px]">
          <h2
            className="text-white text-center"
            style={{
              fontFamily: "var(--font-delight)",
              fontWeight: 500,
              fontSize: "clamp(38px, 8vw, 78px)",
              lineHeight: "1.2",
              textTransform: "capitalize",
            }}
          >
            Come build the work you want to be proud of
          </h2>
          
          <p
            className="text-white text-center max-w-[912px]"
            style={{
              fontFamily: "var(--font-satoshi)",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "30px",
            }}
          >
            Thumbstack is a small, close-knit team that values clarity, craft, and curiosity. 
            We work collaboratively, care deeply about the quality of what we build, 
            and believe great work comes from people who enjoy the process as much as the outcome.
          </p>
        </div>

        {/* Buttons Group - Frame 2087326472 */}
        <div className="flex flex-row justify-center items-center gap-[24px]">
          {/* Get In Touch - Component 144 */}
          <button
            suppressHydrationWarning
            className="group flex flex-row justify-center items-center px-8 py-[18px] gap-[10px] border border-white rounded-[18px] transition-all hover:bg-white/10"
          >
            <span
              className="text-white font-bold text-[14px]"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              Get In Touch
            </span>
            <ArrowIcon color="white" />
          </button>

          {/* Plan My Store - Component 143 */}
          <button
            suppressHydrationWarning
            className="group flex flex-row justify-center items-center px-8 py-[18px] gap-[10px] bg-white border border-white rounded-[18px] transition-all hover:bg-white/90"
          >
            <span
              className="text-[#120321] font-bold text-[14px]"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              Plan My Store
            </span>
            <ArrowIcon color="#120321" />
          </button>
        </div>
      </div>
    </section>
  );
}
