"use client";

import Link from "next/link";
import Image from "next/image";
import Sidebar from "../layout/Sidebar";

export default function Hero() {
  return (
    <section className="min-h-screen w-full flex flex-col justify-between pt-40 pb-12 px-6 md:px-12 lg:px-24 snap-start relative bg-white md:pl-[90px] overflow-hidden">
      <Sidebar />

      {/* Top row */}
      <div className="flex justify-between items-start w-full max-w-[1400px] mx-auto pt-0 relative z-10">
        <Link
          href="/services"
          className="text-[#0F1D07] font-semibold text-[14px] md:text-[18px] flex items-center gap-2 hover:opacity-70 transition-opacity"
          style={{ fontFamily: "var(--font-satoshi)" }}
        >
          Our Services
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_6227_82053)">
              <path d="M7.49985 22.5L22.4998 7.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10.3123 7.5H22.4998V19.6875" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_6227_82053">
                <rect width="30" height="30" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Link>
      </div>

      {/* Main typography */}
      <div className="w-full max-w-[1400px] mx-auto flex-1 flex flex-col justify-start relative py-6 mt-4">
        <h1
          className="leading-[1.1] max-w-[1300px] select-none"
          style={{
            fontFamily: "var(--font-delight)",
            fontWeight: 600,
            fontSize: "clamp(2.5rem, 8.5vw, 8rem)",
            letterSpacing: "-0.01em", // -1% spacing as requested
            color: "#3145DD"
          }}
        >
          {/* Locked row for "Designing and building" */}
          <span className="flex items-center gap-x-3 md:gap-x-6 whitespace-nowrap">
            <span className="bg-mint px-3 pb-1 md:px-6 md:pb-3 inline-block">Designing</span>
            <span>and</span>
            <span className="bg-[#3145DD] text-mint px-3 pb-1 md:px-6 md:pb-3 inline-block">building</span>
          </span>

          <span className="block mt-2 md:mt-4">meaningful digital</span>
          <span className="block">experiences.</span>
        </h1>

        {/* Sub-text and Decorative Circle */}
        <div className="-mt-8 md:-mt-16 flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-8">
          <div className="flex flex-col max-w-[650px]">
            <p
              className="capitalize"
              style={{
                fontFamily: "var(--font-satoshi)",
                fontWeight: 500,
                fontSize: "20px",
                lineHeight: "1.6",
                color: "#0F1D07",
              }}
            >
              We Build The Remarkable, Not The Routine.
            </p>
            <p
              className="capitalize"
              style={{
                fontFamily: "var(--font-satoshi)",
                fontWeight: 500,
                fontSize: "20px",
                lineHeight: "1.6",
                color: "#0F1D07",
              }}
            >
              Thoughtfully Crafted. <span className="text-[#3145DD]">Bold In Execution.</span>
            </p>
          </div>

          {/* Spinning Decorative Circle */}
          <div className="mr-0 md:mr-12 lg:mr-24 hidden sm:block">
            <div className="relative w-32 h-32 md:w-44 md:h-44">
              <Image
                src="/circle.png"
                alt="Decorative spinning circle"
                fill
                sizes="(max-width: 768px) 128px, 176px"
                className="object-contain animate-[spin_20s_linear_infinite]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA (View Our Work) */}
      <div className="w-full max-w-[1400px] mx-auto flex justify-center pb-8 md:pb-12 relative z-10">
        <a
          href="#work"
          className="text-[#0F1D07] flex items-center gap-4 hover:opacity-70 transition-opacity"
          style={{
            fontFamily: "var(--font-satoshi)",
            fontWeight: 500,
            fontSize: "20px",
            lineHeight: "54px",
            textAlign: "center"
          }}
        >
          View Our Work
          <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_6227_82077)">
              <path d="M21.2124 10.6068V31.82" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M29.8307 23.2017L21.2128 31.8195L12.595 23.2017" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_6227_82077">
                <rect width="30" height="30" fill="white" transform="translate(42.4264 21.2134) rotate(135)" />
              </clipPath>
            </defs>
          </svg>
        </a>
      </div>
    </section>
  );
}