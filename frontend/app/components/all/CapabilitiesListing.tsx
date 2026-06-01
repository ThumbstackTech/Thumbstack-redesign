"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CapabilitiesListingData } from "../../types/strapi";

interface CapabilitiesListingProps {
  data?: CapabilitiesListingData;
}

function getRowLabel(title: string, index: number): string {
  const t = title.toLowerCase();
  if (t.includes("website design") || t.includes("design that makes")) return "What we design";
  if (t.includes("custom website") || t.includes("look sharp")) return "What we build";
  if (t.includes("cms")) return "CMS Platforms";
  if (t.includes("shopify")) return "Shopify Stores";
  if (t.includes("e-commerce") || t.includes("ecommerce")) return "E-Commerce";
  if (t.includes("mobile app")) return "Mobile Apps";
  if (t.includes("platform") || t.includes("portal") || t.includes("dashboard")) return "Custom Web App Platforms";
  if (t.includes("connected product") || t.includes("across web")) return "Connected Products";
  if (t.includes("digital experience") || t.includes("interactive")) return "Interactive Web";
  if (t.includes("product team")) return "Product Team";
  if (t.includes("support team") || t.includes("maintenance")) return "Web Support";
  
  // Fallback to index-based defaults matching the Figma design order
  const defaults = [
    "What we build",
    "What we design",
    "CMS Platforms",
    "Shopify Stores",
    "E-Commerce",
    "Mobile Apps",
    "Custom Web App Platforms",
    "Connected Products",
    "Interactive Web",
    "Product Team",
    "Web Support"
  ];
  return defaults[index % defaults.length];
}

export default function CapabilitiesListing({ data }: CapabilitiesListingProps) {
  const heading = data?.heading || "Different Digital Needs. One Connected Team.";
  const subheading = data?.subheading || "Some clients come to us for a custom website. Some need a Shopify store, a CMS setup, a mobile app, a complex platform, or a team that can take over an existing product. Capabilities help you find the kind of work closest to what you are looking for.";
  const items = data?.items || [];

  return (
    <section className="w-full flex flex-col items-center bg-white py-16 px-6 md:px-[104px] pt-24 lg:pt-32">
      {/* Header Section */}
      <div className="w-full max-w-[1400px] flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 lg:gap-[24px]">
        {/* Left Side (Heading & Label) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start gap-4 max-w-[668px]"
        >
          <span 
            className="text-[#0F1D07] font-medium text-lg lg:text-[24px] leading-[36px]"
            style={{ fontFamily: "var(--font-satoshi)" }}
          >
            Where we work
          </span>
          <h2
            className="text-[#0F1D07] font-medium tracking-[-0.01em]"
            style={{
              fontFamily: "var(--font-delight)",
              fontSize: "clamp(36px, 5vw, 64px)",
              lineHeight: "clamp(46px, 6vw, 74px)",
            }}
          >
            {heading}
          </h2>
        </motion.div>

        {/* Right Side (Description text) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-[630px] text-[#0F1D07] font-normal text-lg lg:text-[22px] lg:leading-[34px] lg:mb-2"
          style={{ fontFamily: "var(--font-satoshi)" }}
        >
          {subheading}
        </motion.div>
      </div>

      {/* Thin Divider Line (Vector 224) */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full max-w-[1400px] border-t-[0.5px] border-[#969696] my-12 lg:my-[104px] origin-left"
      />

      {/* Dynamic Capability Rows (Frame 2087326754) */}
      <div className="w-full max-w-[1400px] flex flex-col gap-20 lg:gap-[104px]">
        {items.map((item, index) => {
          const rowLabel = getRowLabel(item.title, index);
          const tagsArray = item.tags 
            ? item.tags.split(",").map(t => t.trim()).filter(Boolean) 
            : [];

          return (
            <div
              key={item.id || index}
              className="w-full flex flex-col gap-6 border-b border-[#969696]/20 pb-16 lg:pb-[104px] last:border-none last:pb-0"
            >
              {/* Row Label (e.g. What we build) */}
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-[#0F1D07] font-medium text-lg lg:text-[24px] leading-[36px]"
                style={{ fontFamily: "var(--font-satoshi)" }}
              >
                {item.label || rowLabel}
              </motion.span>

              {/* Row Content (Frame 2087326751) */}
              <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-[154px] w-full">
                
                {/* Left Column: Title, Description, Explore Link (Frame 2087326595) */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col items-start gap-4 lg:gap-6 max-w-[736px] w-full"
                >
                  <h3
                    className="text-[#0F1D07] font-medium tracking-[-0.01em]"
                    style={{
                      fontFamily: "var(--font-delight)",
                      fontSize: "clamp(26px, 3.5vw, 42px)",
                      lineHeight: "clamp(36px, 4.5vw, 64px)",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-[#0F1D07] font-normal text-base lg:text-[22px] lg:leading-[34px]"
                    style={{ fontFamily: "var(--font-satoshi)" }}
                  >
                    {item.description}
                  </p>

                  {/* Explore Link with hover animation */}
                  <Link
                    href={item.link || "#"}
                    className="group/link flex items-center gap-3 text-[#3145DD] font-bold text-sm lg:text-[16px] leading-[30px] mt-4 self-start"
                    style={{ fontFamily: "var(--font-satoshi)" }}
                  >
                    <span className="underline decoration-[#3145DD] underline-offset-4 decoration-2">
                      {item.linkText || `Explore ${item.title.split(" ").slice(0, 2).join(" ")}`}
                    </span>
                    <svg
                      width="43"
                      height="43"
                      viewBox="0 0 43 43"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transition-transform duration-300 group-hover/link:translate-x-[6px]"
                    >
                      <g clipPath="url(#clip-capabilities-listing)">
                        <path d="M10.6082 21.214H31.8214" stroke="#3145DD" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M23.2031 12.5957L31.821 21.2136L23.2031 29.8314" stroke="#3145DD" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      </g>
                      <defs>
                        <clipPath id="clip-capabilities-listing">
                          <rect width="30" height="30" fill="white" transform="translate(21.2148) rotate(45)"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                </motion.div>

                {/* Right Column: Pill Tags (Frame 2087326749) */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex flex-wrap gap-x-5 gap-y-4 max-w-[509px] w-full lg:pt-4"
                >
                  {tagsArray.map((tag, tagIndex) => (
                    <motion.div
                      key={tagIndex}
                      className="px-[18px] py-[10px] border border-[#0F1D07] rounded-[44px] text-[#0F1D07] font-medium text-sm lg:text-[16px] leading-[30px] tracking-[-0.02em] select-none cursor-default"
                      style={{ fontFamily: "var(--font-delight)" }}
                      whileHover={{
                        backgroundColor: "#0F1D07",
                        color: "#FFFFFF",
                        borderColor: "#0F1D07",
                        scale: 1.03
                      }}
                      transition={{ duration: 0.15 }}
                    >
                      {tag}
                    </motion.div>
                  ))}
                </motion.div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
