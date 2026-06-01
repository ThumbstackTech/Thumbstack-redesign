"use client";

import { motion } from "framer-motion";
import { ServiceListData, ServiceListItem } from "../../types/strapi";

export default function ServiceList({ data }: { data?: ServiceListData }) {
  const heading = data?.heading || "For Teams That Need Direction Before Execution.";
  const description = data?.description || "Strategise is built for businesses that need clarity before moving into design, development, or rebuild decisions.";
  const bgColor = data?.bgColor || "#3145DD";
  const textColor = data?.textColor || "#FFFFFF";

  const defaultItems: ServiceListItem[] = [
    { id: 1, text: "Businesses planning a new website, ecommerce store, app, or digital platform" },
    { id: 2, text: "Brands improving an existing website or product that is not performing well" },
    { id: 3, text: "Teams preparing for a redesign, rebuild, migration, or Shopify revamp" },
    { id: 4, text: "Companies that need a UX audit, SEO audit, AI search audit, or technical review" },
    { id: 5, text: "Founders defining the first version of a digital product" },
    { id: 6, text: "Larger teams that need a discovery phase before committing to build" }
  ];

  const itemsList = Array.isArray(data?.items) && data.items.length > 0
    ? data.items
    : defaultItems;

  const itemsWithIndex = itemsList.map((item, i) => ({
    ...item,
    displayNum: (i + 1).toString().padStart(2, "0")
  }));

  const half = Math.ceil(itemsWithIndex.length / 2);
  const leftColumn = itemsWithIndex.slice(0, half);
  const rightColumn = itemsWithIndex.slice(half);

  return (
    <section
      className="w-full py-[100px] px-6 md:px-[100px] transition-colors duration-500 overflow-hidden"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="max-w-[1401px] mx-auto flex flex-col gap-16 lg:gap-[104px]">
        {/* Top Row: Heading and Description */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[88px] items-center justify-between">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:max-w-[556px]"
            style={{
              fontFamily: "var(--font-delight)",
              fontSize: "clamp(32px, 5vw, 60px)",
              lineHeight: "clamp(42px, 6vw, 80px)",
              fontWeight: 500,
              letterSpacing: "-0.01em",
              color: textColor
            }}
          >
            {heading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:max-w-[582px]"
            style={{
              fontFamily: "var(--font-satoshi)",
              fontSize: "clamp(18px, 2.5vw, 24px)",
              lineHeight: "clamp(28px, 3.5vw, 36px)",
              fontWeight: 500,
              letterSpacing: "-0.01em",
              color: textColor
            }}
          >
            {description}
          </motion.p>
        </div>

        {/* Bottom Row: List items split in two columns */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-[56px] justify-between items-start">
          {/* Left Column */}
          <div className="flex-1 flex flex-col gap-[14px] max-w-[550px] w-full">
            {leftColumn.map((item, index) => (
              <motion.div
                key={item.id || `left-${index}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col gap-[14px]"
              >
                <div className="flex gap-5 items-start">
                  <span
                    className="w-[24px] shrink-0"
                    style={{
                      fontFamily: "var(--font-satoshi)",
                      fontSize: "18px",
                      lineHeight: "36px",
                      fontWeight: 500,
                      letterSpacing: "-0.01em",
                      color: textColor
                    }}
                  >
                    {item.displayNum}
                  </span>
                  <p
                    style={{
                      fontFamily: "var(--font-satoshi)",
                      fontSize: "18px",
                      lineHeight: "36px",
                      fontWeight: 500,
                      letterSpacing: "-0.01em",
                      color: textColor
                    }}
                  >
                    {item.text}
                  </p>
                </div>
                {index < leftColumn.length - 1 && (
                  <div className="w-full h-[0.5px] bg-[#929292] opacity-50" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex-1 flex flex-col gap-[14px] max-w-[550px] w-full">
            {rightColumn.map((item, index) => (
              <motion.div
                key={item.id || `right-${index}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index + half) * 0.1 }}
                className="flex flex-col gap-[14px]"
              >
                <div className="flex gap-5 items-start">
                  <span
                    className="w-[24px] shrink-0"
                    style={{
                      fontFamily: "var(--font-satoshi)",
                      fontSize: "18px",
                      lineHeight: "36px",
                      fontWeight: 500,
                      letterSpacing: "-0.01em",
                      color: textColor
                    }}
                  >
                    {item.displayNum}
                  </span>
                  <p
                    style={{
                      fontFamily: "var(--font-satoshi)",
                      fontSize: "18px",
                      lineHeight: "36px",
                      fontWeight: 500,
                      letterSpacing: "-0.01em",
                      color: textColor
                    }}
                  >
                    {item.text}
                  </p>
                </div>
                {index < rightColumn.length - 1 && (
                  <div className="w-full h-[0.5px] bg-[#929292] opacity-50" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
