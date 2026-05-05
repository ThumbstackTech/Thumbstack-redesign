"use client";

import Link from "next/link";

export default function HeroNewsAndInsights() {
  return (
    <section className="min-h-[100svh] w-full flex flex-col justify-start items-center pt-[200px] md:pt-[350px] pb-20 md:pb-32 px-8 lg:px-24 snap-start relative bg-[#3145DD] md:pl-[90px] md:pr-[90px] overflow-hidden">

      {/* Background Decoration - Glowing Oval */}
      <div className="absolute top-1/2 -translate-y-1/2 right-0 md:right-[5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-white opacity-40 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="w-full max-w-[1600px] mx-auto flex flex-col gap-12 sm:gap-16 relative z-10">
        {/* Main typography */}
        <div className="flex flex-col relative z-10 mt-20 md:mt-32">
          <Link
            href="#"
            className="text-white font-medium flex items-center gap-2 hover:opacity-75 transition-opacity mb-8 md:mb-12"
            style={{ fontFamily: "var(--font-satoshi)", fontSize: "clamp(14px, 1.2vw, 16px)" }}
          >
            Let&apos;s Build Together
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_6227_88259)">
                <path d="M5 15L15 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.875 5H15V13.125" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_6227_88259">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>

          <div className="flex flex-col gap-8 md:gap-12">
            <h1
              className="text-white tracking-[-0.04em] max-w-[1200px]"
              style={{
                fontFamily: "var(--font-delight)",
                fontWeight: 600,
                fontSize: "clamp(2.5rem, 8vw, 110px)",
                lineHeight: "1.1",
                verticalAlign: "middle"
              }}
            >
              Ideas, News & Notes<br />
              From The Studio.
            </h1>

            <p
              className="text-white/90"
              style={{
                fontFamily: "var(--font-satoshi)",
                fontWeight: 500,
                fontSize: "clamp(14px, 1.2vw, 16px)",
                lineHeight: "1.6",
                maxWidth: "600px"
              }}
            >
              We document what we learn — from design sprints to engineering breakthroughs,
              new project launches, experiments, and <br className="hidden md:block" /> small discoveries that move our work forward.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}