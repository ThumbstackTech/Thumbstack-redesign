"use client";

import { motion } from "framer-motion";
import type { RightStackData } from "../../types/strapi";

const stackData = [
  {
    items: [
      "Next.js website development",
      "Strapi CMS development",
      "Headless CMS setup",
      "SEO metadata fields",
      "Responsive development"
    ]
  },
  {
    items: [
      "React frontend development",
      "Sanity CMS development",
      "Custom CMS workflows",
      "Schema ready structure",
      "Performance focused development"
    ]
  },
  {
    items: [
      "Node.js backend development",
      "Directus CMS development",
      "API integrations",
      "GA4 and tracking setup",
      "Hosting and deployment support"
    ]
  }
];

interface RightStackProps {
  data?: RightStackData;
}

export default function RightStack({ data }: RightStackProps) {
  const title = data?.title || "Built on the right stack for the website.";
  const description = data?.description || "We choose the technology based on the project. A simple marketing website, a content heavy website, and a multi region CMS website do not need the same build approach.";
  
  // Unpack dynamic columns, falling back to static schema if empty
  const displayColumns = data?.columns && data.columns.length > 0
    ? data.columns.map((col) => ({
        items: col.items?.map((item) => item.text) || []
      }))
    : stackData;

  return (
    <section className="w-full bg-white py-[100px] px-6 md:px-[100px]">
      <div className="max-w-[1401px] mx-auto flex flex-col gap-[80px] md:gap-[104px]">
        
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 lg:gap-24">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[#0F1D07] max-w-[665px]"
            style={{
              fontFamily: "var(--font-delight)",
              fontSize: "clamp(32px, 4vw, 60px)",
              lineHeight: "clamp(42px, 5vw, 80px)",
              fontWeight: 500,
              letterSpacing: "-0.01em"
            }}
          >
            {title}
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[#0F1D07] max-w-[582px]"
            style={{
              fontFamily: "var(--font-satoshi)",
              fontSize: "20px",
              lineHeight: "36px",
              fontWeight: 500,
              letterSpacing: "-0.01em"
            }}
          >
            {description}
          </motion.p>
        </div>

        {/* Stack Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {displayColumns.map((column, colIndex) => (
            <motion.div 
              key={colIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: colIndex * 0.15 }}
              className="box-border flex flex-col items-center p-5 md:p-8 border border-[#D7D7D7] rounded-[12px] min-h-[346px]"
            >
              <div className="w-full flex flex-col gap-[14px]">
                {column.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="w-full flex flex-col gap-[14px]">
                    <div 
                      className="text-[#0F1D07]"
                      style={{
                        fontFamily: "var(--font-satoshi)",
                        fontSize: "18px",
                        lineHeight: "36px",
                        fontWeight: 500,
                        letterSpacing: "-0.01em"
                      }}
                    >
                      {item}
                    </div>
                    {itemIndex < column.items.length - 1 && (
                      <div className="w-full h-[0.5px] bg-[#929292]" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
