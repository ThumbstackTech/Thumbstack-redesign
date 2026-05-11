"use client";

import { motion } from "framer-motion";

const featureGroups = [
  {
    title: "Strategy & structure",
    items: [
      "Website strategy and discovery",
      "Sitemap and information architecture",
      "UX and UI website design",
      "Website wireframes",
      "Responsive website design"
    ]
  },
  {
    title: "Development",
    items: [
      "Custom frontend development",
      "Backend development",
      "CMS website development",
      "Headless CMS integration",
      "Page templates and reusable components"
    ]
  },
  {
    title: "Systems & integrations",
    items: [
      "Blog, news, and insight systems",
      "Forms and lead capture",
      "Analytics and tracking setup",
      "SEO friendly website development"
    ]
  },
  {
    title: "Launch & support",
    items: [
      "Structured for AI driven discovery",
      "Website performance basics",
      "QA and testing",
      "Launch support",
      "Website maintenance and improvements"
    ]
  }
];

export default function CapabilitiesFeatures() {
  return (
    <section className="w-full bg-white py-[80px] md:py-[120px] px-6 md:px-[100px]">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-[60px] md:gap-[104px]">
        
        {/* Header Text Block */}
        <div className="flex flex-col gap-6 max-w-[1108px]">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[#0F1D07]"
            style={{
              fontFamily: "var(--font-delight)",
              fontSize: "clamp(40px, 5vw, 60px)",
              lineHeight: "clamp(50px, 6vw, 80px)",
              fontWeight: 500,
              letterSpacing: "-0.01em"
            }}
          >
            Custom Website Design, Development, CMS, And Support.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#0F1D07] opacity-80 max-w-[691px]"
            style={{
              fontFamily: "var(--font-satoshi)",
              fontSize: "18px",
              lineHeight: "34px",
              fontWeight: 400
            }}
          >
            A custom website needs more than pages. It needs the right structure, content system, technical foundation, and support path.
          </motion.p>
        </div>

        {/* 4-Column Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          {featureGroups.map((group, groupIndex) => (
            <motion.div 
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
              className="flex flex-col gap-6 md:gap-8"
            >
              {/* Group Title with Underline */}
              <div className="flex flex-col gap-2">
                <h3 
                  className="text-[#0F1D07]"
                  style={{
                    fontFamily: "var(--font-delight)",
                    fontSize: "24px",
                    lineHeight: "40px",
                    fontWeight: 500,
                    letterSpacing: "-0.01em"
                  }}
                >
                  {group.title}
                </h3>
                <div className="w-full h-[1px] bg-[#0F1D07]" />
              </div>

              {/* List Items */}
              <ul className="flex flex-col gap-4 md:gap-5">
                {group.items.map((item, itemIndex) => (
                  <li 
                    key={itemIndex}
                    className="text-[#0F1D07] opacity-90"
                    style={{
                      fontFamily: "var(--font-satoshi)",
                      fontSize: "16px",
                      lineHeight: "24px",
                      fontWeight: 400
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
