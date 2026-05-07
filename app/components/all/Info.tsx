"use client";

import Image from "next/image";

export default function Info() {
  return (
    <section className="relative w-full min-h-[551px] bg-[#3145DD] overflow-hidden flex items-center snap-start py-16 md:py-0">

      {/* Ellipse 456 - The background glow effect */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "831px",
          height: "901px",
          left: "489px",
          top: "-58px",
          background: "rgba(228, 249, 244, 0.18)",
          filter: "blur(124.522px)",
        }}
      />

      {/* Atmospheric Blur Layer - Figma spec */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: "rgba(255, 255, 255, 0.02)",
          backdropFilter: "blur(249.04428100585938px)",
          WebkitBackdropFilter: "blur(249.04428100585938px)",
        }}
      />

      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 relative z-10 h-full flex items-center">
        {/* Text Container - Frame 2087326471 */}
        <div className="flex flex-col items-start gap-[12px] w-full max-w-[899px]">
          <p
            className="text-white opacity-90"
            style={{
              fontFamily: "var(--font-satoshi)",
              fontSize: "16px",
              lineHeight: "30px",
              fontWeight: 400,
            }}
          >
            This is how we keep our work sharp, human, and meaningful.
          </p>
          <h2
            className="text-white"
            style={{
              fontFamily: "var(--font-delight)",
              fontWeight: 500,
              fontSize: "40px",
              lineHeight: "60px",
              maxWidth: "868px",
              textTransform: "capitalize",
            }}
          >
            We Work In Small Teams.<br />
            We Ask The Uncomfortable Questions Early.<br />
            We Care Deeply About How Things Feel — Not Just How They Function.
          </h2>
        </div>
      </div>

      {/* Image Container - Component 141 */}
      <div
        className="absolute pointer-events-none z-20"
        style={{
          width: "520px",
          height: "520px",
          left: "calc(50% - 520px/2 + 484px)",
          top: "198px",
        }}
      >
        <div
          className="relative"
          style={{
            width: "367.15px",
            height: "366.37px",
            left: "calc(50% - 367.15px/2 - 37.62px)",
            top: "calc(50% - 237.37px/2 - 37.98px)",
            mixBlendMode: "plus-lighter",
            transform: "rotate(-0.48deg)",
          }}
        >
          <Image
            src="/Design.png"
            alt="Design graphic"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}