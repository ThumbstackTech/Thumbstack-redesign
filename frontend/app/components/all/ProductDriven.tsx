"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { ProductDrivenData } from "../../types/strapi";
import { getStrapiImageUrl } from "../../lib/strapi";

export default function ProductDriven({ data }: { data?: ProductDrivenData }) {
  const [activeId, setActiveId] = useState<number | null>(null);
  const containerRef = useRef(null);

  const headingLine1 = data?.headingLine1 || "Product-Smart.";
  const headingLine2 = data?.headingLine2 || "Progress-Driven.";
  const bgColor = data?.bgColor || "#FFFFFF";

  const rawLogos = data?.logos?.data || (Array.isArray(data?.logos) ? data.logos : []);
  const logosList = rawLogos.map((item: any) => {
    const altText = item?.attributes?.alternativeText || item?.alternativeText || "Tech Partner";
    return {
      name: altText,
      logoUrl: getStrapiImageUrl(item)
    };
  }).filter((item: any) => !!item.logoUrl) || [];

  // Positions arranged around the periphery, keeping center clear for text
  const positions = [
    { top: "5%", left: "10%" },
    { top: "4%", left: "30%" },
    { top: "6%", right: "12%" },
    { top: "15%", left: "20%" },
    { top: "12%", right: "28%" },
    { top: "25%", left: "8%" },
    { top: "22%", right: "5%" },
    { top: "38%", left: "16%" },
    { top: "35%", right: "18%" },
    { top: "52%", left: "6%" },
    { top: "48%", right: "8%" },
    { top: "65%", left: "22%" },
    { top: "62%", right: "25%" },
    { top: "78%", left: "12%" },
    { top: "75%", right: "15%" },
    { top: "86%", left: "30%" },
    { top: "88%", right: "32%" },
    { top: "82%", left: "50%" }
  ];

  return (
    <section
      ref={containerRef}
      className="min-h-screen w-full relative flex flex-col items-center justify-center overflow-hidden py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-24 snap-start transition-colors duration-500"
      style={{ backgroundColor: bgColor }}
    >
      
      {/* Background Floating Logos */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {logosList.map((item: any, i: number) => {
          const pos = positions[i % positions.length];
          const isActive = activeId === i;

          return (
            <motion.div
              key={i}
              className="absolute pointer-events-auto cursor-pointer flex flex-col items-center z-20"
              style={pos}
              animate={{
                y: [0, -15, 0],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 5 + (i % 4),
                repeat: Infinity,
                ease: "easeInOut",
              }}
              onMouseEnter={() => setActiveId(i)}
              onMouseLeave={() => setActiveId(null)}
            >
              {/* High-Quality, Premium Sized Dynamic Logo Container */}
              <div className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white rounded-full shadow-[0_10px_35px_rgba(0,0,0,0.06)] flex items-center justify-center p-3 sm:p-4 border border-gray-100/50 transition-all duration-300 ${isActive ? 'scale-125 shadow-2xl ring-4 ring-black/5' : 'hover:scale-110 hover:shadow-xl'}`}>
                <img 
                  src={item.logoUrl} 
                  alt={item.name} 
                  className="object-contain w-full h-full max-w-full max-h-full"
                />
              </div>
              
              {isActive && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ opacity: 1, y: 12, scale: 1 }}
                  className="absolute top-full mt-1 sm:mt-2 whitespace-nowrap z-30"
                >
                  <span className="text-[10px] sm:text-xs font-bold text-gray-800 bg-white px-3 py-1.5 rounded-full shadow-lg border border-gray-100">
                    {item.name}
                  </span>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Center Text */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[#0F1D07] flex flex-col text-center"
          style={{
            fontFamily: "var(--font-delight)",
            fontWeight: 500,
            fontSize: "clamp(46px, 7.5vw, 96px)",
            lineHeight: "1.2",
            letterSpacing: "-0.01em",
            textTransform: "capitalize",
            textAlign: "center"
          }}
        >
          <span>{headingLine1}</span>
          <span className="opacity-90">{headingLine2}</span>
        </motion.h2>
      </div>

      {/* Subtle Premium BG Radial Blurs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#95E7D3]/10 blur-[130px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#0B1306]/5 blur-[130px] rounded-full" />
      </div>

    </section>
  );
}
