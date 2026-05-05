"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const TECH_TOOLS = [
  { name: "8th Wall", logo: "8b1802af-8th-Wall-Horizontal-Logo-Purple 1.png" },
  { name: "ReactJS", logo: "ReactJS.png" },
  { name: "WordPress", logo: "bi_wordpress.png" },
  { name: "Android", logo: "devicon_android.png" },
  { name: "Next.js", logo: "devicon_nextjs-wordmark.png" },
  { name: "Nuxt.js", logo: "devicon_nuxtjs.png" },
  { name: "Ghost", logo: "ghost-logo-dark 2.png" },
  { name: "Midjourney", logo: "logos_midjourney.png" },
  { name: "Python", logo: "logos_python.png" },
  { name: "Segment", logo: "logos_segment-icon.png" },
  { name: "Shopify", logo: "logos_shopify.png" },
  { name: "Node.js", logo: "material-icon-theme_nodejs.png" },
  { name: "Ollama", logo: "ollama 1.png" },
  { name: "Figma", logo: "skill-icons_figma-light.png" },
  { name: "Group 49", logo: "6808f9ca7883e7d17a64a7b8_Group 49 1.png" },
  { name: "Vector", logo: "Vector.png" },
  { name: "Vector 1", logo: "Vector-1.png" },
  { name: "Group", logo: "Group.png" },
  { name: "Group 1", logo: "Group-1.png" },
  { name: "Ellipse 456", logo: "Ellipse 456.png" },
  { name: "Ellipse 457", logo: "Ellipse 457.png" },
  { name: "Logo 53", logo: "image 53.png" },
  { name: "Group 594", logo: "Group 1321314594.png" },
  { name: "Group 597", logo: "Group 1321314597.png" },
  { name: "Group 598", logo: "Group 1321314598.png" },
];

export default function ProductDriven() {
  const [activeId, setActiveId] = useState<number | null>(null);

  // Positions arranged around the periphery, keeping center clear for text
  const positions = [
    // Top row
    { top: "4%", left: "3%" },       // Flutter (top-left corner)
    { top: "2%", left: "16%" },      // Shopify
    { top: "1%", left: "35%" },      // Meta
    { top: "8%", left: "55%" },      // 8thWall logo area
    { top: "3%", left: "73%" },      // Segment
    // Upper sides
    { top: "14%", left: "9%" },      // 8thWall
    { top: "12%", left: "25%" },     // Figma
    { top: "10%", right: "3%" },     // Android
    { top: "15%", right: "12%" },    // Group icon
    { top: "20%", right: "25%" },    // ReactJS
    // Middle sides (far left & right only)
    { top: "38%", left: "1%" },      // Apple
    { top: "32%", left: "10%" },     // Ollama
    { top: "42%", right: "2%" },     // Next.js
    { top: "28%", right: "5%" },     // Bitcoin/Group
    // Lower sides
    { top: "55%", left: "2%" },      // Ellipse
    { top: "60%", left: "15%" },     // Midjourney
    { top: "58%", right: "4%" },     // Nuxt
    { top: "52%", right: "15%" },    // Vue/Mint
    // Bottom row
    { top: "72%", left: "20%" },     // Python
    { top: "70%", left: "35%" },     // Segment alt
    { top: "75%", right: "30%" },    // Ghost
    { top: "78%", right: "15%" },    // Node
    { top: "85%", left: "5%" },      // WordPress
    { top: "82%", left: "28%" },     // Group 594
    { top: "88%", right: "3%" },     // Group 598
  ];

  return (
    <section className="min-h-screen w-full bg-white relative flex flex-col items-center justify-center overflow-hidden py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-24 snap-start">
      
      {/* Background Floating Logos */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {TECH_TOOLS.map((item, i) => {
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
              <div className={`w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 bg-white rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.08)] flex items-center justify-center p-2 sm:p-3 md:p-4 border border-gray-100 transition-all duration-300 ${isActive ? 'scale-125 shadow-2xl border-blue/20 ring-4 ring-blue/5' : 'hover:scale-110 hover:shadow-xl'}`}>
                <Image 
                  src={`/TSP/tools/${item.logo}`} 
                  alt={item.name} 
                  width={48} 
                  height={48} 
                  className="object-contain w-full h-full"
                />
              </div>
              
                {isActive && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ opacity: 1, y: 12, scale: 1 }}
                    className="absolute top-full mt-1 sm:mt-2 whitespace-nowrap z-30"
                  >
                    <span className="text-[8px] sm:text-xs font-bold text-sidebar bg-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-lg border border-gray-100">
                      {item.name}
                    </span>
                  </motion.div>
                )}
            </motion.div>
          );
        })}
      </div>

      {/* Center Text */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[#1A1A1A] flex flex-col text-center"
          style={{
            fontFamily: "var(--font-delight)",
            fontWeight: 500,
            fontSize: "clamp(2rem, 7vw, 100.37px)",
            lineHeight: "147.21px",
            letterSpacing: "0%",
            verticalAlign: "middle",
            textTransform: "capitalize",
          }}
        >
          <span>Product-Smart.</span>
          <span className="opacity-90">Progress-Driven.</span>
        </motion.h2>
      </div>

      {/* Decorative Blur Gradients */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-mint/10 blur-[120px] rounded-full" />
      </div>

    </section>
  );
}

