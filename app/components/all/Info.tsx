"use client";

import Image from "next/image";

export default function Info() {
  return (
    <section className="relative w-full min-h-[auto] md:min-h-[551px] bg-[#3145DD] overflow-hidden flex items-center snap-start py-16 md:py-0">

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

      {/* Atmospheric Blur Layer */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: "rgba(255, 255, 255, 0.02)",
          backdropFilter: "blur(249px)",
          WebkitBackdropFilter: "blur(249px)",
        }}
      />

      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 relative z-10 flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-0 py-4 md:py-0">
        {/* Text Container */}
        <div className="flex flex-col items-start gap-3 w-full md:max-w-[899px]">
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
              fontSize: "clamp(26px, 4.5vw, 40px)",
              lineHeight: "clamp(38px, 6vw, 60px)",
              maxWidth: "868px",
              textTransform: "capitalize",
            }}
          >
            We Work In Small Teams.<br className="hidden sm:block" />
            We Ask The Uncomfortable Questions Early.<br className="hidden sm:block" />
            We Care Deeply About How Things Feel — Not Just How They Function.
          </h2>
        </div>

        {/* Decorative Image — shown only on large screens, sits in flow on the right */}
        <div
          className="hidden lg:block absolute pointer-events-none z-20"
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
              left: "calc(30% - 367.15px/2 - 37.62px)",
              top: "calc(50% - 537.37px/2 - 37.98px)",
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
      </div>
    </section>
  );
}