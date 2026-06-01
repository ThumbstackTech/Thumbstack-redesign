"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { WorkInteractiveListData } from "../../types/strapi";
import { getStrapiImageUrl } from "@/lib/strapi";

interface WorkInteractiveListProps {
  data?: WorkInteractiveListData;
}

export default function WorkInteractiveList({ data }: WorkInteractiveListProps) {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [hoveringImage, setHoveringImage] = useState<boolean>(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Motion values for smooth cursor tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring configuration
  const springConfig = { damping: 25, stiffness: 200 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  if (!data) return null;

  const items = data.items || [];
  const heading = data.heading || "Articles Backed by Real Work";
  const subheading = data.subheading || "We write from experience — explore the work behind our thinking.";
  const ctaText = data.ctaText || "Explore More";
  const ctaLink = data.ctaLink || "/our-work";

  const handleMouseEnter = (id: number) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveItem(id);
    }, 50);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  // Find the active item to render its image and overlay details
  const activeListItem = items.find((item) => item.id === activeItem);
  const activeImageUrl = activeListItem ? getStrapiImageUrl(activeListItem.image) : null;
  const activeTags = activeListItem?.tags
    ? activeListItem.tags.split(",").map((t) => t.trim()).filter(Boolean)
    : [];

  return (
    <section
      id="work-insights-list"
      onMouseLeave={() => setActiveItem(null)}
      className="min-h-fit lg:min-h-[1257px] w-full flex flex-col items-center bg-white overflow-hidden relative py-12 md:py-20 lg:py-0"
    >
      {/* ==========================================
          MOBILE UI (Responsive layout for mobile/tablet)
          ========================================== */}
      <div className="lg:hidden w-full px-6 flex flex-col">
        {/* Top: Subheading / Description */}
        <div className="mb-4">
          <p className="text-[#0F1D07] font-normal text-[16px] leading-[28px] font-satoshi max-w-xs">
            {subheading}
          </p>
        </div>

        {/* Separator Line */}
        <div className="w-[calc(100%+48px)] -ml-6 h-[1px] bg-black/25 mb-8" />

        {/* Header Block */}
        <div className="mb-8 flex flex-col gap-6">
          <h2 className="text-[#0F1D07] font-medium text-[40px] md:text-[60px] leading-[1.2] font-delight text-left pr-8 lg:pr-0">
            {heading}
          </h2>

          {/* Explore More Mobile CTA */}
          <Link href={ctaLink} className="flex flex-row items-center gap-[10px] w-fit px-4 py-2 border border-[#0F1D07] rounded-[18px] hover:bg-[#0F1D07] hover:text-white transition-all duration-300">
            <span className="text-[#0F1D07] hover:text-inherit font-bold text-[14px] font-satoshi uppercase tracking-wider">{ctaText}</span>
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="stroke-current">
              <path d="M5 15L15 5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6.875 5H15V13.125" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* Separator Line */}
        <div className="w-[calc(100%+48px)] -ml-6 h-[1px] bg-black/25 mb-0" />

        {/* List */}
        <div className="flex flex-col">
          {items.map((item) => (
            <Link key={item.id} href={item.link || "#"} className="w-full py-8 border-b border-black/10 relative flex flex-col gap-2 group">
              <h3 className="text-[#0F1D07] font-semibold text-[24px] tracking-[-0.01em] leading-tight font-delight group-hover:text-blue-600 transition-colors duration-200 pr-12">
                {item.title}
              </h3>
              <p className="text-black/60 text-[14px] leading-relaxed font-satoshi pr-10">
                {item.description}
              </p>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 group-hover:translate-x-1 group-hover:-translate-y-2 transition-transform duration-200">
                <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
                  <path d="M5 15L15 5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6.875 5H15V13.125" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ==========================================
          DESKTOP UI (Premium Interactive Grid)
          ========================================== */}
      <div className="hidden lg:block w-full max-w-[1602px] h-[1257px] relative mx-auto">
        {/* Left Subheading */}
        <div className="absolute left-[106px] top-[267px] w-[259px]">
          <p
            className="text-[#0F1D07] font-normal font-satoshi text-[16px] leading-[28px]"
            style={{ letterSpacing: "0%" }}
          >
            {subheading}
          </p>
        </div>

        {/* Right Heading */}
        <div className="absolute left-[754px] right-[104px] top-[148px] text-right">
          <h2
            className="text-[#0F1D07] font-medium font-delight text-[80px] leading-[104px] text-right capitalize select-none"
            style={{ letterSpacing: "-0.02em", whiteSpace: "normal" }}
          >
            {heading}
          </h2>
        </div>

        {/* CTA Button Component 143 */}
        <div className="absolute left-[939px] top-[294px]">
          <Link
            href={ctaLink}
            className="flex flex-row items-center justify-center py-[10px] px-0 gap-[10px] w-[129px] h-[58px] rounded-[18px] hover:opacity-60 transition-opacity"
          >
            <span
              className="text-[#0F1D07] font-bold font-satoshi text-[16px] text-center"
              style={{ lineHeight: "90px" }}
            >
              {ctaText}
            </span>
            <div className="w-[20px] h-[20px] flex items-center justify-center relative">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 15L15 5" stroke="#0F1D07" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.875 5H15V13.125" stroke="#0F1D07" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </Link>
        </div>

        {/* Horizontal Line Vector 215 */}
        <div
          className="absolute top-[128px] border-t border-black/10"
          style={{ left: "1105px", width: "493px" }}
        />

        {/* List Frame 627064 */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-[420px] w-[1391px] flex flex-col isolation-isolate"
          style={{ gap: "33px" }}
        >
          {items.map((item, index) => {
            const isActive = activeItem === item.id;

            return (
              <div key={item.id} className="relative w-full">
                {/* Horizontal Divider Line */}
                <div className={`w-full h-0 border-t transition-colors duration-300 ${isActive ? "border-transparent" : "border-black"}`} />

                <motion.div
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={handleMouseLeave}
                  animate={{
                    height: isActive ? "187px" : "77px",
                  }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className={`w-full group cursor-pointer relative flex items-center overflow-hidden transition-all duration-300 ${isActive
                    ? 'before:content-[""] before:absolute before:inset-0 before:bg-[#0F1D07] before:w-[100vw] before:left-1/2 before:-translate-x-1/2 before:z-[-1] z-20'
                    : 'bg-transparent'
                    }`}
                >
                  <div className="flex flex-col justify-center w-[50%] h-full pl-[5px]">
                    <h3
                      className={`transition-colors duration-300 ${isActive ? 'text-white font-medium' : 'text-[#0F1D07] font-normal'}`}
                      style={{
                        fontFamily: "var(--font-delight)",
                        fontSize: "28px",
                        lineHeight: "44px",
                        letterSpacing: "-0.02em"
                      }}
                    >
                      {item.title}
                    </h3>

                    <AnimatePresence>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="text-white font-normal font-satoshi text-[16px] leading-[39px] mt-1 overflow-hidden max-w-[580px]"
                        >
                          {item.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </div>
            );
          })}

          {/* Bottom line of the entire list */}
          <div className="w-full h-0 border-t border-black" />

          {/* ==========================================
              ABSOLUTELY POSITIONED INTERACTIVE IMAGE CARD
              ========================================== */}
          <AnimatePresence>
            {activeItem && activeImageUrl && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute z-30 pointer-events-auto rounded-[16px] overflow-hidden shadow-2xl"
                style={{
                  left: "828px",
                  top: "-3px",
                  width: "491px",
                  height: "610px"
                }}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setHoveringImage(true)}
                onMouseLeave={() => setHoveringImage(false)}
              >
                {/* Hover Reveal Image */}
                <Image
                  src={activeImageUrl}
                  alt={activeListItem?.title || "Work Preview"}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  priority
                  unoptimized
                />

                {/* Visual Dark Overlay (Matches Figma V2 gradients) */}
                <div className="absolute inset-0 bg-black/40 z-10 transition-opacity duration-300" />

                {/* Centered Glassmorphic Text Card (Frame 626980) */}
                <div className="absolute left-1/2 -translate-x-1/2 top-[177px] w-[342px] height-[368px] flex flex-col justify-between items-center z-20 text-center gap-[118px]">

                  {/* Title & Description Container (Frame 626978) */}
                  <div className="flex flex-col items-center w-[240px] gap-2">
                    <h4 className="text-white font-medium font-delight text-[82px] leading-[82px] tracking-[-0.02em]">
                      {activeListItem?.title}
                    </h4>
                    <p className="text-white font-medium font-satoshi text-[12px] leading-[20px] max-w-[240px]">
                      {activeListItem?.description}
                    </p>
                  </div>

                  {/* Badges/Tags Container (Frame 626943) */}
                  <div className="flex flex-row items-center justify-center gap-[8.29px] w-[342px] h-[33px]">
                    {activeTags.map((tagText, idx) => (
                      <div
                        key={idx}
                        className="box-sizing flex flex-row justify-center items-center py-[5.9px] px-[11.8px] bg-white/28 backdrop-blur-[8px] rounded-[118.38px] border border-white/10"
                      >
                        <span className="text-white font-medium font-satoshi text-[12px] leading-[13px] text-center whitespace-nowrap">
                          {tagText}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Custom pointer cursor tracking over image (Frame 2087326360) */}
                <AnimatePresence>
                  {hoveringImage && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      className="absolute w-[89px] h-[89px] bg-[#95E7D3]/87 rounded-full flex items-center justify-center pointer-events-none z-45"
                      style={{
                        x: smoothX,
                        y: smoothY,
                        left: 0,
                        top: 0,
                        translateX: "-50%",
                        translateY: "-50%",
                        fontFamily: "var(--font-nohemi)",
                        color: "#0F1D07",
                        boxShadow: "-32px -22px 16px rgba(0, 0, 0, 0.01), -18px -13px 13px rgba(0, 0, 0, 0.03), -8px -6px 10px rgba(0, 0, 0, 0.06), -2px -1px 5px rgba(0, 0, 0, 0.06)"
                      }}
                    >
                      <span className="text-[16.4px] font-normal leading-[16px] font-nohemi select-none">View</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
