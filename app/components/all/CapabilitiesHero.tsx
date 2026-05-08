"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CapabilitiesHero() {
  return (
    <section className="w-full min-h-screen bg-[#3145DD] relative flex flex-col justify-start pt-[200px] md:pt-[280px] pb-12 px-4 sm:px-6 md:px-8 lg:px-[100px] xl:px-[120px] snap-start">
      {/* Container for content, aligned to the left */}
      <div className="flex flex-col items-start gap-10 md:gap-[50px] w-full max-w-[1048px] z-10 relative">
        
        {/* Text Block */}
        <div className="flex flex-col items-start gap-4 md:gap-5 w-full">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white font-medium text-[14px] md:text-[16px] leading-[40px]"
            style={{ fontFamily: "var(--font-satoshi)" }}
          >
            Capabilities
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="text-white font-medium"
            style={{
              fontFamily: "var(--font-delight)",
              fontSize: "clamp(48px, 8vw, 100px)",
              lineHeight: "clamp(56px, 9vw, 134px)",
              letterSpacing: "-0.01em",
            }}
          >
            Digital Work, Built<br />
            Across The Full Stack.
          </motion.div>

          {/* Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-white font-medium text-[16px] md:text-[24px] leading-relaxed md:leading-[40px] max-w-[859px] mt-2 md:mt-0"
            style={{ fontFamily: "var(--font-satoshi)" }}
          >
            We work across websites, e-commerce, mobile apps, CMS platforms, custom products, AI led experiences, and long term support teams. <br />
            Each capability is shaped through the same connected process: strategy, design, build, and growth.
          </motion.div>
        </div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-[48px]"
        >
          {/* Start Building Button */}
          <Link 
            href="/contact" 
            className="bg-white rounded-[18px] px-6 h-[59px] flex items-center justify-center hover:scale-105 transition-transform duration-300"
          >
            <span 
              className="text-[#0F1D07] font-bold text-[16px]"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              Start building
            </span>
          </Link>

          {/* View Our Work Button */}
          <Link 
            href="/our-work" 
            className="group flex items-center gap-4 hover:opacity-80 transition-opacity"
          >
            <span 
              className="text-white font-bold text-[16px]"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              View Our Work
            </span>
            <div className="w-[30px] h-[30px] relative flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 19L19 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 5H19V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
