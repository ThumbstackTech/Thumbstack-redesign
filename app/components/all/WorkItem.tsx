"use client";

import Image from "next/image";

export default function WorkItem() {
  return (
    <section className="w-full min-h-[auto] lg:min-h-[967px] flex flex-col items-center justify-start lg:justify-center bg-white overflow-hidden md:pl-[52px] md:pr-[90px] py-12 lg:py-0">
      <div className="w-full max-w-[1600px] mx-auto flex flex-col lg:flex-row items-center">
        {/* Left Side: Featured Image (Frame 2085663066) */}
        <div className="relative w-full lg:w-[55%] h-[400px] md:h-[600px] lg:h-[967px] flex-shrink-0 rounded-none overflow-hidden">
          <Image
            src="/stack2.jpg" // Ensure this maps to your ASV06202-2.jpg
            alt="Case study featured project"
            fill
            priority
            className="object-cover"
          />
          {/* Overlay effect from Figma specs */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Play Button (Frame 2085663067) - Centered */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[72.95px] h-[72.95px] rounded-full flex items-center justify-center cursor-pointer transition-transform hover:scale-105 shadow-xl"
            style={{ backgroundColor: "#FDEBEB" }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#000000" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5V19L19 12L8 5Z" />
            </svg>
          </div>
        </div>

        {/* Right Side: Content (Frame 2087326363) */}
        <div className="flex flex-col flex-1 items-start justify-center px-8 lg:px-0 lg:pl-[50px] py-12 lg:py-0">
          <div className="flex flex-col max-w-[664px] gap-[104px]">

            {/* Top Content (Frame 2087326716) */}
            <div className="flex flex-col gap-5">
              {/* Tags (Frame 2087326541) */}
              <div className="flex flex-wrap gap-6">
                {["Design", "E-Commerce", "AI"].map((tag) => (
                  <span
                    key={tag}
                    className="px-[14px] py-[6px] border border-[#0F1D07] rounded-[10px] text-[12px] leading-[24px] font-medium tracking-tight"
                    style={{ fontFamily: "var(--font-delight)", color: "#0F1D07" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Main Heading */}
              <h2
                className="font-medium capitalize"
                style={{
                  fontFamily: "var(--font-nohemi)",
                  fontSize: "clamp(36px, 8vw, 52px)",
                  lineHeight: "1.2",
                  color: "#0F1D07",
                  maxWidth: "623px",
                  width: "100%",
                  display: "flex",
                  alignItems: "center"
                }}
              >
                Redefining How Luxury<br />
                Clothing Connects<br />
                With The World
              </h2>
            </div>

            {/* Bottom Content (Frame 2087326651) */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-5">
                {/* Quote */}
                <p
                  className="text-[22px] leading-[34px] font-medium capitalize"
                  style={{ fontFamily: "var(--font-delight)", color: "#0F1D07" }}
                >
                  &ldquo;They didn&apos;t just Design our brand they helped us understand who we truly are.&rdquo;
                </p>

                {/* Client Info */}
                <div className="flex flex-col gap-[4px]">
                  <p className="text-[16px] leading-[22px] font-bold text-[#0F1D07]" style={{ fontFamily: "var(--font-satoshi)" }}>
                    Ayesha N.
                  </p>
                  <p className="text-[14px] leading-[20px] font-medium uppercase text-[#616161]" style={{ fontFamily: "var(--font-satoshi)" }}>
                    HEAD OF ECOMM, SIORAI
                  </p>
                </div>

                {/* Red Logo Text (SIORAI) */}
                <div
                  className="text-[32px] font-bold tracking-[0.05em]"
                  style={{ fontFamily: "var(--font-nohemi)", color: "#D9443E" }}
                >
                  SIORAI
                </div>
              </div>

              {/* CTA Button (Component 44) */}
              <button
                className="flex items-center justify-center gap-[8px] px-5 py-[8px] w-fit rounded-[14px] transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#0F1D07" }}
                suppressHydrationWarning
              >
                <span className="text-[16px] leading-[32px] font-bold text-white" style={{ fontFamily: "var(--font-satoshi)" }}>
                  Start your story
                </span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7V17M17 7H7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}