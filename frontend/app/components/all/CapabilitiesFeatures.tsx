"use client";

import { motion } from "framer-motion";
import { CapabilitiesFeaturesData } from "../../types/strapi";

const defaultFeatureGroups = [
  {
    title: "Strategy & structure",
    items: [
      { text: "Website strategy and discovery" },
      { text: "Sitemap and information architecture" },
      { text: "UX and UI website design" },
      { text: "Website wireframes" },
      { text: "Responsive website design" }
    ]
  },
  {
    title: "Development",
    items: [
      { text: "Custom frontend development" },
      { text: "Backend development" },
      { text: "CMS website development" },
      { text: "Headless CMS integration" },
      { text: "Page templates and reusable components" }
    ]
  },
  {
    title: "Systems & integrations",
    items: [
      { text: "Blog, news, and insight systems" },
      { text: "Forms and lead capture" },
      { text: "Analytics and tracking setup" },
      { text: "SEO friendly website development" }
    ]
  },
  {
    title: "Launch & support",
    items: [
      { text: "Structured for AI driven discovery" },
      { text: "Website performance basics" },
      { text: "QA and testing" },
      { text: "Launch support" },
      { text: "Website maintenance and improvements" }
    ]
  }
];

export default function CapabilitiesFeatures({ data }: { data?: CapabilitiesFeaturesData }) {
  const title = data?.title || "Custom Website Design, Development, CMS, And Support.";
  const description = data?.description || "A custom website needs more than pages. It needs the right structure, content system, technical foundation, and support path.";
  const groups = data?.groups || defaultFeatureGroups;

  return (
    <section className="w-full bg-white py-[80px] md:py-[120px] px-6 md:px-[100px]">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-[40px] md:gap-[60px]">

        {/* Header Text Block */}
        <div className="flex flex-col gap-6 max-w-[1108px] pr-4 lg:pr-12">
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
            {title}
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
            {description}
          </motion.p>
        </div>

        {/* 4-Column Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          {groups.map((group, groupIndex) => (
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
                    {item.text}
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
