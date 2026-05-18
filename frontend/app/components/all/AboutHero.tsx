"use client";

import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="min-h-screen w-full bg-white relative flex flex-col items-center justify-center pt-20 px-6 md:px-12 lg:px-[100px] snap-start overflow-hidden">

      <div className="w-full max-w-[1600px] mx-auto relative">

        {/* Subtext - Top Right aligned on desktop, left on mobile */}
        <div className="flex justify-start md:justify-end mb-4">
          <div
            className="w-full max-w-[465px] text-left md:text-right"
            style={{
              fontFamily: "var(--font-satoshi)",
              fontWeight: 700,
              fontSize: "14px",
              lineHeight: "28px",
              color: "#0F1D07",
            }}
          >
            We&apos;re a design and technology studio from India, working closely with teams around the world to build thoughtful digital products.
          </div>
        </div>

        {/* Main Heading - Large and Right aligned on desktop */}
        <div className="w-full flex justify-start md:justify-end mb-12 md:mb-24">
          <h1
            className="text-left md:text-right max-w-[1098px]"
            style={{
              fontFamily: "var(--font-delight)",
              fontWeight: 500,
              fontSize: "clamp(48px, 10vw, 120px)",
              lineHeight: "1.1",
              letterSpacing: "-0.02em",
              color: "#0F1D07",
            }}
          >
            A tight team, doing deliberate work.
          </h1>
        </div>

        {/* Images Grid - Matching the screenshot collage style */}
        <div className="flex flex-col gap-6 w-full mt-12">
          {/* Main Image - img1 */}
          <div className="relative w-full aspect-[16/10] overflow-hidden rounded-[20px]">
            <Image
              src="/img3.jpg"
              alt="Team at work"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Secondary Images - img2 and img3 below */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[20px]">
              <Image
                src="/img2.jpg"
                alt="Studio space"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-[20px]">
              <Image
                src="/img1.jpg"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
