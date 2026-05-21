"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { AboutHeroData } from "../../types/strapi";
import { getStrapiImageUrl } from "@/lib/strapi";

export default function AboutHero({ data }: { data?: AboutHeroData }) {
  const containerRef = useRef(null);

  const heading = data?.heading || "A tight team, doing deliberate work.";
  const subheading = data?.subheading || "We're a design and technology studio from India, working closely with teams around the world to build thoughtful digital products.";
  const bgColor = data?.bgColor || "#FFFFFF";
  const textColor = data?.textColor || "#0F1D07";

  const img1Url = getStrapiImageUrl(data?.image1);
  const img2Url = getStrapiImageUrl(data?.image2);
  const img3Url = getStrapiImageUrl(data?.image3);

  return (
    <section
      ref={containerRef}
      className="w-full flex flex-col items-center justify-start relative pt-24 md:pt-32 pb-20 md:pb-28 overflow-hidden transition-colors duration-500"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="w-full max-w-[1600px] px-6 md:px-12 lg:px-[100px] flex flex-col gap-12 md:gap-16 z-10">
        
        {/* Right-Aligned Text Section exactly matching Figma layout */}
        <div className="flex flex-col items-end text-right w-full gap-6 md:gap-8">
          
          {/* Subheading: Small, right-aligned, dynamic */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[480px] font-medium leading-relaxed opacity-95 text-right self-end"
            style={{
              fontFamily: "var(--font-satoshi)",
              fontSize: "clamp(13px, 1.2vw, 15px)",
              lineHeight: "1.6",
            }}
          >
            {subheading}
          </motion.p>

          {/* Huge Main Heading: Right-aligned, Delight font */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="tracking-tight text-right w-full max-w-[1100px] self-end"
            style={{
              fontFamily: "var(--font-delight)",
              fontSize: "clamp(38px, 6.5vw, 92px)",
              lineHeight: "1.08",
              fontWeight: 500,
            }}
          >
            {heading}
          </motion.h1>
        </div>

        {/* Dynamic workspace image collage grid */}
        <div className="w-full flex flex-col gap-6 md:gap-8">
          
          {/* Image 1: Top Wide Banner */}
          {img1Url && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-[360px] md:h-[500px] lg:h-[620px] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-sm relative group"
            >
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500 z-10 pointer-events-none" />
              <motion.img
                src={img1Url}
                alt="Workspace Core Image"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
              />
            </motion.div>
          )}

          {/* Bottom Split Images Grid */}
          {(img2Url || img3Url) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
              
              {/* Image 2: Bottom Left Column */}
              {img2Url && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-[260px] md:h-[380px] lg:h-[480px] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-sm relative group"
                >
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500 z-10 pointer-events-none" />
                  <motion.img
                    src={img2Url}
                    alt="Workspace Collaborative Image"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  />
                </motion.div>
              )}

              {/* Image 3: Bottom Right Column */}
              {img3Url && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-[260px] md:h-[380px] lg:h-[480px] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-sm relative group"
                >
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500 z-10 pointer-events-none" />
                  <motion.img
                    src={img3Url}
                    alt="Workspace Collaborative Scene"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  />
                </motion.div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
