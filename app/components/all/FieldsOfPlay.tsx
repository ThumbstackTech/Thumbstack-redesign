"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";

export default function FieldsOfPlay() {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Motion values for smooth cursor tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring configuration
  const springConfig = { damping: 25, stiffness: 200 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const fields = [
    {
      id: 0,
      title: "E-Commerce Experiences",
      subtitle: "Scalable e-commerce solutions that drive conversions and build brand loyalty.",
      image: "/stack2.jpg"
    },
    {
      id: 1,
      title: "Custom Web Experiences",
      subtitle: "Custom-built platforms designed to scale with your brand’s ambition.",
      image: "/Campaign.png"
    },
    {
      id: 2,
      title: "Real Estate Expertise",
      subtitle: "High-end digital presentations for luxury real estate and developments.",
      image: "/BFT1.png"
    },
    {
      id: 3,
      title: "Enterprise Platforms",
      subtitle: "Internal tools and complex dashboards that simplify business operations.",
      image: "/BFT3.png"
    },
    {
      id: 4,
      title: "Mobile Apps",
      subtitle: "Performant iOS and Android applications built for modern users.",
      image: "/Campaign-1.png"
    }
  ];

  const handleMouseEnter = (id: number) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveItem(id);
    }, 100);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section id="fields-of-play" className="min-h-[1137px] w-full flex flex-col items-center bg-white overflow-hidden relative py-20 lg:py-0">
      {/* Design Frame (1602px width) */}
      <div className="w-full max-w-[1602px] h-full lg:h-[1137px] relative mx-auto px-6 lg:px-0">

        {/* We build the remarkable, not the routine */}
        <div className="lg:absolute lg:left-[104px] lg:top-[247px] mb-8 lg:mb-0">
          <p
            className="text-[#0F1D07] font-normal uppercase"
            style={{
              fontFamily: "var(--font-satoshi)",
              fontWeight: 700,
              fontSize: "11px",
              lineHeight: "16px",
              width: "179px",
              letterSpacing: "0.05em"
            }}
          >
            We build the <br />
            remarkable, not the <br />
            routine
          </p>
        </div>

        {/* Let's Build Together Link */}
        <div className="lg:absolute lg:left-[859px] lg:top-[164px] mb-8 lg:mb-0">
          <div
            className="flex flex-row items-center gap-[6px] cursor-pointer hover:opacity-60 transition-opacity"
          >
            <span
              className="text-[#0F1D07]"
              style={{
                fontFamily: "var(--font-satoshi)",
                fontWeight: 700,
                fontSize: "14px",
                lineHeight: "28px"
              }}
            >
              Let&apos;s Build Together
            </span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_6227_81067)">
                <path d="M5 15L15 5" stroke="#0F1D07" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.875 5H15V13.125" stroke="#0F1D07" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_6227_81067">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>

        {/* Vector 215 (Horizontal Line) */}
        <div
          className="hidden lg:block absolute left-[1105px] top-[128px] border-t border-black"
          style={{ width: "493px" }}
        />

        {/* Fields of Play Header */}
        <div className="lg:absolute lg:left-[859px] lg:top-[calc(50%_-_148px/2_-_272.5px)] mb-12 lg:mb-0">
          <h2
            className="text-[#0F1D07] capitalize"
            style={{
              fontFamily: "var(--font-delight)",
              fontWeight: 500,
              fontSize: "100px",
              lineHeight: "147px"
            }}
          >
            Fields Of Play
          </h2>
        </div>

        {/* Interactive List (Restored Layout Behavior) */}
        <div
          className="lg:absolute lg:left-[calc(50%_-_1391px/2_+_0.5px)] lg:top-[420px] w-full max-w-[1391px] flex flex-col isolation-isolate"
        >
          {/* Top border — Figma Vector 5 */}
          <div style={{ width: "100%", height: 0, borderTop: "1px solid #000000", flexShrink: 0 }} />

          {fields.map((field, index) => {
            return (
              <div key={field.id}>
                <div
                  onMouseEnter={() => handleMouseEnter(field.id)}
                  onMouseLeave={handleMouseLeave}
                  className={`w-full group cursor-pointer transition-all duration-500 ease-in-out relative flex flex-col md:flex-row items-center ${activeItem === field.id
                    ? 'py-8 sm:py-12 md:py-14 before:content-[""] before:absolute before:inset-0 before:bg-[#0F1D07] before:w-[100vw] before:left-1/2 before:-translate-x-1/2 before:z-[-1] border-none shadow-2xl z-20'
                    : 'bg-transparent py-6 md:py-8'
                    }`}
                >
                  <div className="flex flex-col gap-2 w-full md:w-1/2 md:pl-[104px]">
                    <h3
                      className={`transition-colors duration-300 ${activeItem === field.id ? 'text-white' : 'text-[#0F1D07]'}`}
                      style={{
                        fontFamily: activeItem === field.id ? "var(--font-nohemi)" : "var(--font-delight)",
                        fontWeight: 400,
                        fontSize: "28px",
                        lineHeight: "44px",
                        letterSpacing: "-0.02em"
                      }}
                    >
                      {field.title}
                    </h3>

                    <AnimatePresence>
                      {activeItem === field.id && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-white/70 overflow-hidden whitespace-nowrap"
                          style={{
                            fontFamily: "var(--font-satoshi)",
                            fontWeight: 400,
                            fontSize: "16px",
                            lineHeight: "39px"
                          }}
                        >
                          {field.subtitle}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Image Reveal */}
                  <AnimatePresence>
                    {activeItem === field.id && (
                      <motion.div
                        initial={{ opacity: 0, x: 50, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 30, scale: 0.95 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="md:absolute right-4 lg:right-0 top-1/2 md:-translate-y-1/2 w-full md:w-[45%] flex justify-end mt-8 md:mt-0 pointer-events-none"
                      >
                        <div
                          className="relative w-full aspect-[4/5] max-w-[491px] max-h-[610px] rounded-[16px] overflow-hidden shadow-2xl pointer-events-auto"
                          style={{ left: "-10px", top: "-3px" }}
                          onMouseMove={handleMouseMove}
                        >
                          <Image
                            src={field.image}
                            alt={field.title}
                            fill
                            className="object-cover"
                            priority
                          />

                          {/* View Badge */}
                          <motion.div
                            className="absolute w-[89px] h-[89px] bg-[#95E7D3]/87 rounded-full flex items-center justify-center shadow-lg pointer-events-none"
                            style={{
                              x: smoothX,
                              y: smoothY,
                              left: 0,
                              top: 0,
                              translateX: "-50%",
                              translateY: "-50%",
                              fontFamily: "var(--font-nohemi)",
                              color: "#0F1D07"
                            }}
                          >
                            <span style={{ fontSize: "16.4px", fontWeight: 400 }}>View</span>
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Bottom Line (Vector 5) */}
                  <div
                    style={{ width: "100%", height: 0, borderTop: "1px solid #000000", flexShrink: 0 }}
                    className={`absolute bottom-0 left-0 transition-opacity ${activeItem === field.id ? 'opacity-0' : 'opacity-100'}`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}