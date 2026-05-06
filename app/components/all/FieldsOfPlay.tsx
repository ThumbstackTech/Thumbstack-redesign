"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";

export default function FieldsOfPlay() {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [hoveringImageId, setHoveringImageId] = useState<number | null>(null);
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

  return (
    <section id="fields-of-play" onMouseLeave={() => setActiveItem(null)} className="min-h-fit lg:min-h-[1137px] w-full flex flex-col items-center bg-white overflow-hidden relative py-12 md:py-20 lg:py-0">

      {/* ==========================================
          MOBILE UI (Matches Design Reference)
          ========================================== */}
      <div className="lg:hidden w-full px-6 flex flex-col">
        {/* Top: Let's Build Together */}
        <div className="flex justify-end w-full mb-4">
          <div className="flex flex-row items-center gap-[6px]">
            <span className="text-[#0F1D07] font-bold text-[14px] font-satoshi">Let&apos;s Build Together</span>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M5 15L15 5" stroke="#0F1D07" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6.875 5H15V13.125" stroke="#0F1D07" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Separator Line */}
        <div className="w-[110%] -ml-6 h-[1px] bg-black/20 mb-12" />

        {/* Header Block */}
        <div className="mb-8 flex flex-col gap-4">
          <h2 className="text-[#0F1D07] font-semibold text-[48px] leading-[1.1] font-delight">Fields Of Play</h2>
          <p className="text-[#0F1D07] font-medium text-[16px] font-satoshi">We build the remarkable, not the routine</p>
        </div>

        {/* Separator Line */}
        <div className="w-[110%] -ml-6 h-[1px] bg-black/20 mb-0" />

        {/* List */}
        <div className="flex flex-col">
          {fields.map((field) => (
            <div key={field.id} className="w-full py-8 border-b border-black/10 relative flex flex-col gap-2">
              <h3 className="text-[#0F1D07] font-semibold text-[24px] tracking-[-0.01em] leading-tight font-delight">{field.title}</h3>
              <p className="text-black/60 text-[14px] font-bold leading-relaxed font-satoshi pr-10">{field.subtitle}</p>
              <div className="absolute right-0 top-1/2 -translate-y-1/2">
                <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
                  <path d="M5 15L15 5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6.875 5H15V13.125" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ==========================================
          DESKTOP UI (Original Version)
          ========================================== */}
      <div className="hidden lg:block w-full max-w-[1602px] h-[1137px] relative mx-auto">
        <div className="absolute left-[104px] top-[247px]">
          <p
            className="text-[#0F1D07] font-normal"
            style={{
              fontFamily: "var(--font-satoshi)",
              fontWeight: 700,
              fontSize: "16px",
              lineHeight: "28px",
              width: "179px",
              letterSpacing: "0.05em"
            }}
          >
            We build the <br />
            remarkable, not the <br />
            routine
          </p>
        </div>

        <div className="absolute left-[859px] top-[164px]">
          <div className="flex flex-row items-center gap-[6px] cursor-pointer hover:opacity-60 transition-opacity">
            <span
              className="text-[#0F1D07]"
              style={{
                fontFamily: "var(--font-satoshi)",
                fontWeight: 700,
                fontSize: "16px",
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

        <div
          className="absolute top-[128px] border-t border-black"
          style={{ left: "730px", width: "872px" }}
        />

        <div className="absolute left-[859px] top-[222px]">
          <h2
            className="text-[#0F1D07] capitalize font-delight"
            style={{
              fontFamily: "var(--font-delight)",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "100.369px",
              lineHeight: "147px",
              width: "538px",
              height: "148px",
              display: "flex",
              alignItems: "center",
              textTransform: "capitalize",
              whiteSpace: "nowrap",
              color: "#0F1D07"
            }}
          >
            Capabilities
          </h2>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 top-[420px] w-full max-w-[1600px] flex flex-col gap-[55px] isolation-isolate">
          <div style={{ width: "100%", height: 0, borderTop: "2px solid #000000", flexShrink: 0 }} />

          {fields.map((field) => (
            <div key={field.id}>
              <motion.div
                onMouseEnter={() => handleMouseEnter(field.id)}
                onMouseLeave={handleMouseLeave}
                animate={{
                  paddingTop: activeItem === field.id ? "21.5px" : "16.5px",
                  paddingBottom: activeItem === field.id ? "21.5px" : "16.5px",
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={`w-full group cursor-pointer relative flex items-center ${activeItem === field.id
                  ? 'before:content-[""] before:absolute before:inset-0 before:bg-[#0F1D07] before:w-[100vw] before:left-1/2 before:-translate-x-1/2 before:z-[-1] border-none shadow-2xl z-20'
                  : 'bg-transparent'
                  }`}
              >
                <div className="flex flex-col gap-2 w-1/2 pl-[104px]">
                  <h3
                    className={`transition-colors duration-300 ${activeItem === field.id ? 'text-white' : 'text-[#0F1D07]'}`}
                    style={{
                      fontFamily: activeItem === field.id ? "var(--font-nohemi)" : "var(--font-delight)",
                      fontWeight: activeItem === field.id ? 500 : 400,
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
                          fontWeight: 700,
                          fontSize: "16px",
                          lineHeight: "39px"
                        }}
                      >
                        {field.subtitle}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <AnimatePresence>
                  {activeItem === field.id && (
                    <motion.div
                      initial={{ opacity: 0, x: 50, scale: 0.9 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: 30, scale: 0.95 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute right-0 top-1/2 -translate-y-1/2 w-[45%] flex justify-end pointer-events-none"
                    >
                      <div
                        className="relative w-full aspect-[4/5] max-w-[491px] max-h-[610px] rounded-[16px] overflow-hidden shadow-2xl pointer-events-auto"
                        style={{ left: "-10px", top: "-3px" }}
                        onMouseMove={handleMouseMove}
                        onMouseEnter={() => setHoveringImageId(field.id)}
                        onMouseLeave={() => setHoveringImageId(null)}
                      >
                        <Image src={field.image} alt={field.title} fill className="object-cover" priority />
                        <AnimatePresence>
                          {hoveringImageId === field.id && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.5 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.5 }}
                              className="absolute w-[89px] h-[89px] bg-[#95E7D3]/87 rounded-full flex items-center justify-center shadow-lg pointer-events-none z-50"
                              style={{ x: smoothX, y: smoothY, left: 0, top: 0, translateX: "-50%", translateY: "-50%", fontFamily: "var(--font-nohemi)", color: "#0F1D07" }}
                            >
                              <span style={{ fontSize: "16.4px", fontWeight: 400 }}>View</span>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div
                  style={{ width: "100%", height: 0, borderTop: "2px solid #000000", flexShrink: 0 }}
                  className={`absolute bottom-[-28px] left-0 transition-opacity ${activeItem === field.id ? 'opacity-0' : 'opacity-100'}`}
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}