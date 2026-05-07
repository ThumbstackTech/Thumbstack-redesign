"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";

const articles = [
  {
    id: 0,
    title: "SICA",
    subtitle: "",
    image: "/siorai.png",
    tags: ["Brand Identity", "Web Design"],
    active: false,
  },
  {
    id: 1,
    title: "Stackables",
    subtitle: "An AR try-on for StudioWest, swipe through lipsticks in real time, right on your face.",
    image: "/Custom product pages.png",
    tags: ["Experience Design", "Digital Strategy", "API Builds"],
    active: true,
  },
  {
    id: 2,
    title: "Westside",
    subtitle: "A reimagined e-commerce experience built to convert and retain.",
    image: "/Store 1.png",
    tags: ["E-Commerce", "Shopify"],
    active: false,
  },
  {
    id: 3,
    title: "Bharat Flooring Tiles",
    subtitle: "An AI-assisted showroom that lets you visualise tiles in your own space.",
    image: "/BFT2.jpg",
    tags: ["AI Integration", "3D Viz"],
    active: false,
  },
  {
    id: 4,
    title: "Emaance",
    subtitle: "Luxury jewellery meets digital precision — a brand experience for the modern collector.",
    image: "/Campaign.png",
    tags: ["Luxury", "Brand Design"],
    active: false,
  },
];

export default function ArticlesList() {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [hoveringImageId, setHoveringImageId] = useState<number | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 200 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseEnter = (id: number) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => setActiveItem(id), 50);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  // activeArticle used for future extensions

  return (
    <section onMouseLeave={() => setActiveItem(null)} className="w-full bg-white py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full mb-16 relative gap-6">
          {/* Left: subtext */}
          <p
            className="text-[#0F1D07] max-w-[260px]"
            style={{
              fontFamily: "var(--font-satoshi)",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "28px",
            }}
          >
            We write from experience — explore the work behind our thinking.
          </p>

          {/* Right: heading + explore button */}
          <div className="flex flex-col items-end md:ml-auto">
            <h2
              className="text-[#0F1D07] text-right capitalize"
              style={{
                fontFamily: "var(--font-delight)",
                fontWeight: 500,
                fontSize: "clamp(40px, 5.5vw, 80px)",
                lineHeight: "1.1",
              }}
            >
              Articles Backed By
            </h2>
            <div className="flex items-center gap-8">
              {/* Explore More button */}
              <Link
                href="/our-work"
                className="flex items-center gap-2 text-[#0F1D07] hover:opacity-60 transition-opacity translate-y-2"
                style={{ fontFamily: "var(--font-satoshi)", fontWeight: 700, fontSize: "16px" }}
              >
                Explore More
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#0F1D07" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <h2
                className="text-[#0F1D07] text-right capitalize"
                style={{
                  fontFamily: "var(--font-delight)",
                  fontWeight: 500,
                  fontSize: "clamp(40px, 5.5vw, 80px)",
                  lineHeight: "1.1",
                }}
              >
                Real Work
              </h2>
            </div>
          </div>

          {/* Top decorative line */}
          <div className="absolute -top-10 right-0 w-[35%] h-[1px] bg-black hidden lg:block" />
        </div>

        {/* ── Interactive List + Image (Desktop) ── */}
        {/* Top line matching Fields of Play style */}
        <div 
          style={{ width: "calc(100% - 100px)", marginLeft: "50px", height: 0, borderTop: "1px solid #000000" }} 
          className="hidden lg:block mb-[-1px]"
        />

        <div className="relative w-full hidden lg:flex flex-col gap-[55px] isolation-isolate">
          {articles.map((article) => (
            <motion.div
              key={`desktop-${article.id}`}
              onMouseEnter={() => handleMouseEnter(article.id)}
              onMouseLeave={handleMouseLeave}
              onClick={() => setActiveItem(article.id)}
              animate={{
                paddingTop: activeItem === article.id ? "21.5px" : "16.5px",
                paddingBottom: activeItem === article.id ? "21.5px" : "16.5px",
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`w-full group cursor-pointer relative ${
                activeItem === article.id
                  ? "before:content-[''] before:absolute before:inset-0 before:bg-[#0F1D07] before:w-[100vw] before:left-1/2 before:-translate-x-1/2 before:z-[-1] border-none shadow-2xl z-20"
                  : "bg-transparent"
              }`}
            >
              <div className="flex flex-col items-start w-full md:w-1/2 gap-1 pl-[50px]">
                {/* Title */}
                <h3
                  className={`transition-colors duration-300 ${
                    activeItem === article.id ? "text-white" : "text-[#0F1D07]"
                  }`}
                  style={{
                    fontFamily: "var(--font-delight)",
                    fontWeight: activeItem === article.id ? 500 : 400,
                    fontSize: "28px",
                    lineHeight: "44px",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {article.title}
                </h3>

                {/* Subtitle — only visible when active */}
                <AnimatePresence mode="wait">
                  {activeItem === article.id && article.subtitle && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-white/70 overflow-hidden"
                      style={{
                        fontFamily: "var(--font-satoshi)",
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "39px",
                      }}
                    >
                      {article.subtitle}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Floating Image Card (right side, shown when active) */}
              <AnimatePresence mode="popLayout">
                {activeItem === article.id && (
                  <motion.div
                    key={`article-image-${article.id}`}
                    initial={{ x: 50, opacity: 0, scale: 0.9 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    exit={{ x: 30, opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="md:absolute right-8 top-1/2 md:-translate-y-1/2 w-full md:w-[35%] flex justify-end mt-8 md:mt-0 pointer-events-none"
                  >
                    <div
                      className="relative w-full md:w-[491px] aspect-[4/5] md:h-[400px] flex-shrink-0 pointer-events-auto rounded-2xl overflow-hidden"
                      onMouseMove={handleMouseMove}
                      onMouseEnter={() => setHoveringImageId(article.id)}
                      onMouseLeave={() => setHoveringImageId(null)}
                    >
                      {/* Image */}
                      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 z-20">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 491px"
                          className="object-cover"
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-black/29 rounded-2xl" />

                        {/* Tags at bottom */}
                        <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 z-30">
                          {article.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 text-white text-xs font-medium rounded-full"
                              style={{
                                background: "rgba(255,255,255,0.28)",
                                backdropFilter: "blur(8px)",
                                fontFamily: "var(--font-satoshi)",
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Delight brand title overlay */}
                        <div className="absolute top-8 left-0 right-0 flex flex-col items-center gap-3 z-30 px-4">
                          <span
                            className="text-white text-center"
                            style={{
                              fontFamily: "var(--font-delight)",
                              fontWeight: 500,
                              fontSize: "clamp(48px, 8vw, 82px)",
                              lineHeight: "82px",
                              letterSpacing: "-0.02em",
                            }}
                          >
                            {article.title}
                          </span>
                          {article.subtitle && (
                            <p
                              className="text-white text-center max-w-[240px]"
                              style={{
                                fontFamily: "var(--font-satoshi)",
                                fontWeight: 500,
                                fontSize: "12px",
                                lineHeight: "20px",
                              }}
                            >
                              {article.subtitle}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* View Badge — mouse follow */}
                      <AnimatePresence>
                        {hoveringImageId === article.id && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            className="absolute left-0 top-0 w-[89px] h-[89px] rounded-full flex justify-center items-center font-bold text-[#0F1D07] text-base cursor-pointer shadow-2xl z-50 pointer-events-none will-change-transform"
                            style={{
                              fontFamily: "var(--font-nohemi)",
                              background: "rgba(149, 231, 211, 0.87)",
                              boxShadow: "-32px -22px 16px rgba(0,0,0,0.01), -18px -13px 13px rgba(0,0,0,0.03), -8px -6px 10px rgba(0,0,0,0.06), -2px -1px 5px rgba(0,0,0,0.06)",
                              x: smoothX,
                              y: smoothY,
                              translateX: "-50%",
                              translateY: "-50%",
                            }}
                          >
                            View
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                )}
                </AnimatePresence>

                {/* Separator line matching Fields of Play style */}
                <div
                  style={{ width: "calc(100% - 100px)", marginLeft: "50px", height: 0, borderTop: "2px solid #000000", flexShrink: 0 }}
                  className={`absolute bottom-[-28px] left-0 transition-opacity ${activeItem === article.id ? 'opacity-0' : 'opacity-100'}`}
                />
              </motion.div>
          ))}
        </div>

        {/* ── Static List (Mobile) ── */}
        <div className="relative w-full flex lg:hidden flex-col gap-12 mt-8">
          {articles.map((article) => (
            <div key={`mobile-${article.id}`} className="flex flex-col gap-6">
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100 shadow-lg">
                <Image src={article.image} alt={article.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/20" />
                
                {/* Delight brand title overlay */}
                <div className="absolute top-8 left-0 right-0 flex flex-col items-center gap-3 z-30 px-4">
                  <span
                    className="text-white text-center"
                    style={{
                      fontFamily: "var(--font-delight)",
                      fontWeight: 500,
                      fontSize: "48px",
                      lineHeight: "1.2",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {article.title}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <h3
                  className="text-[#0F1D07]"
                  style={{
                    fontFamily: "var(--font-delight)",
                    fontWeight: 500,
                    fontSize: "28px",
                    lineHeight: "1.2",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {article.title}
                </h3>
                {article.subtitle && (
                  <p
                    className="text-[#0F1D07]/70"
                    style={{
                      fontFamily: "var(--font-satoshi)",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "1.6",
                    }}
                  >
                    {article.subtitle}
                  </p>
                )}
                <div className="flex flex-wrap gap-2 mt-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-[#0F1D07] rounded-full text-xs font-medium"
                      style={{ fontFamily: "var(--font-satoshi)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
