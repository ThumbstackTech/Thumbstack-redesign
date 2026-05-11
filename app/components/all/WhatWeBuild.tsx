"use client";

import { motion } from "framer-motion";

const tags = [
  "Corporate websites",
  "Brand websites",
  "Brochure websites",
  "SEO focused websites",
  "Real estate websites",
  "CMS websites",
  "Content managed websites",
  "Luxury websites",
  "Multi page business websites",
  "International websites",
  "Multi region websites",
  "Lead generation websites",
  "Campaign websites",
  "Website redesigns",
  "Website rebuilds"
];

export default function WhatWeBuild() {
  return (
    <section 
      className="w-full bg-[#3145DD] py-[80px] md:py-[100px] px-6 md:px-[100px] overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header Content */}
        <div className="flex flex-col gap-6 mb-[60px] md:mb-[104px] max-w-[750px]">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white tracking-[-0.01em]"
            style={{
              fontFamily: "var(--font-delight)",
              fontSize: "clamp(40px, 5vw, 60px)",
              lineHeight: "clamp(44px, 5.5vw, 64px)",
              fontWeight: 500,
            }}
          >
            What We Build
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white opacity-90"
            style={{
              fontFamily: "var(--font-satoshi)",
              fontSize: "clamp(16px, 2vw, 18px)",
              lineHeight: "clamp(26px, 3vw, 34px)",
              fontWeight: 400,
            }}
          >
            We help you define what needs to be built, what needs to be fixed, and what direction makes the most sense before time goes into design or development.
          </motion.p>
        </div>

        {/* Tag Cloud */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-wrap gap-x-4 gap-y-5 md:gap-x-5 md:gap-y-6"
        >
          {tags.map((tag, index) => (
            <motion.div
              key={tag}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.05,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                transition: { duration: 0.2 }
              }}
              className="border border-white border-opacity-60 rounded-full px-6 py-3 md:px-8 md:py-4 flex items-center justify-center cursor-default group transition-colors"
            >
              <span 
                className="text-white whitespace-nowrap"
                style={{
                  fontFamily: "var(--font-delight)",
                  fontSize: "clamp(14px, 1.5vw, 16px)",
                  lineHeight: "1",
                  fontWeight: 500,
                  letterSpacing: "-0.02em"
                }}
              >
                {tag}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
