"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useCallback } from "react";
import Link from "next/link";

import { PrinciplesData } from "../../types/strapi";
import { getStrapiImageUrl } from "@/lib/strapi";

export default function Principles({ data }: { data?: PrinciplesData }) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "0px" });

  const heading = data?.heading || "Every Capability Runs Through The Same System.";
  const description = data?.description || "Whether we are building a Shopify store, a custom website, a CMS platform, or a mobile app ecosystem, the process stays connected.";
  const ctaText = data?.ctaText || "Explore Our Services";
  const ctaLink = data?.ctaLink || "#";

  // Helper to map default icons or dynamic SVG image icons
  const getIcon = useCallback((iconName: string, iconUrl?: string | null) => {
    if (iconUrl) {
      return <img src={iconUrl} alt={iconName} className="w-[32px] h-[32px] object-contain invert" />;
    }

    switch (iconName) {
      case "strategise":
        return (
          <svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 29H21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.8375 20.875C8.64872 19.9463 7.68583 18.7604 7.02118 17.4062C6.35653 16.052 6.00739 14.5648 6 13.0563C5.97 7.63625 10.34 3.125 15.7588 3C17.8588 2.94914 19.9215 3.56088 21.6542 4.74843C23.3869 5.93598 24.7017 7.63903 25.412 9.61594C26.1222 11.5929 26.1919 13.7432 25.6111 15.762C25.0303 17.7807 23.8285 19.5653 22.1763 20.8625C21.8118 21.1451 21.5165 21.5069 21.3127 21.9206C21.1089 22.3342 21.002 22.7889 21 23.25V24C21 24.2652 20.8946 24.5196 20.7071 24.7071C20.5196 24.8946 20.2652 25 20 25H12C11.7348 25 11.4804 24.8946 11.2929 24.7071C11.1054 24.5196 11 24.2652 11 24V23.25C10.9995 22.7918 10.8946 22.3397 10.6931 21.9282C10.4917 21.5167 10.1991 21.1565 9.8375 20.875Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17 7C19.5 7.42125 21.5762 9.5 22 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case "design":
        return (
          <svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25 7H6C5.44772 7 5 7.44772 5 8V16C5 16.5523 5.44772 17 6 17H25C25.5523 17 26 16.5523 26 16V8C26 7.44772 25.5523 7 25 7Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M26 12H29C29.2652 12 29.5196 12.1054 29.7071 12.2929C29.8946 12.4804 30 12.7348 30 13V19.25C30 19.4672 29.9292 19.6785 29.7984 19.852C29.6676 20.0254 29.4839 20.1515 29.275 20.2113L16.725 23.7925C16.5168 23.8521 16.3335 23.9776 16.2027 24.1503C16.072 24.323 16.0009 24.5334 16 24.75V29" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5 12H2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case "build":
        return (
          <svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12.5 12.5L9.5 16L12.5 19.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M19.5 12.5L22.5 16L19.5 19.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case "grow":
        return (
          <svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5337 21.4662L3.64749 18.9287C3.45761 18.8587 3.29377 18.732 3.17806 18.566C3.06234 18.3999 3.00031 18.2024 3.00031 18C3.00031 17.7976 3.06234 17.6 3.17806 17.434C3.29377 17.2679 3.45761 17.1413 3.64749 17.0712L10.5337 14.5337L13.0712 7.64749C13.1413 7.45761 13.2679 7.29377 13.434 7.17806C13.6 7.06234 13.7976 7.00031 14 7.00031C14.2024 7.00031 14.3999 7.06234 14.566 7.17806C14.732 7.29377 14.8587 7.45761 14.9287 7.64749L17.4662 14.5337L24.3525 17.0712C24.5424 17.1413 24.7062 17.2679 24.8219 17.434C24.9376 17.6 24.9997 17.7976 24.9997 18C24.9997 18.2024 24.9376 18.3999 24.8219 18.566C24.7062 18.732 24.5424 18.8587 24.3525 18.9287L17.4662 21.4662L14.9287 28.3525C14.8587 28.5424 14.732 28.7062 14.566 28.8219C14.3999 28.9376 14.2024 28.9997 14 28.9997C13.7976 28.9997 13.6 28.9376 13.434 28.8219C13.2679 28.7062 13.1413 28.5424 13.0712 28.3525L10.5337 21.4662Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22 2V8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M28 9V13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M19 5H25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M26 11H30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      default:
        return null;
    }
  }, []);

  const finalPrinciples = data?.items?.map(item => {
    const lowerTitle = item.title?.toLowerCase() || "";
    let iconName = "strategise";
    if (lowerTitle.includes("design")) iconName = "design";
    else if (lowerTitle.includes("build") || lowerTitle.includes("develop")) iconName = "build";
    else if (lowerTitle.includes("grow") || lowerTitle.includes("maintain")) iconName = "grow";

    return {
      title: item.title,
      desc: item.description,
      linkText: item.linkText || `Explore ${item.title}`,
      linkUrl: item.linkUrl || "#",
      iconName,
      iconUrl: item.icon?.data?.attributes?.url ? getStrapiImageUrl(item.icon.data.attributes) : null
    };
  }) || [];

  const defaultMarqueeItems = [
    { text: "MOBILE APPS", color: "#95E7D3" },
    { text: "HUMAN-CENTERED PRODUCTS", color: "#FFFFFF" },
    { text: "END-TO-END OWNERSHIP", color: "#95E7D3" },
    { text: "ECOMMERCE", color: "#FFFFFF" }
  ];

  const marqueeItems = data?.marqueeItems ? data.marqueeItems.split(',').map((text, i) => ({
    text: text.trim(),
    color: i % 2 === 0 ? "#95E7D3" : "#FFFFFF"
  })) : defaultMarqueeItems;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const arrowVariants = {
    initial: { x: 0 },
    hover: { x: 6 }
  };

  return (
    <section
      ref={containerRef}
      className="w-full flex flex-col items-center justify-start snap-start relative bg-[#0F1D07] text-white overflow-hidden pt-20 sm:pt-24 pb-0 px-[10px] sm:pl-[63px] sm:pr-[10px]"
    >
      <div className="w-full max-w-[1407px] flex flex-col z-10 relative px-4 sm:px-6">

        {/* Label */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-white/60 font-medium mb-6 tracking-normal"
          style={{ fontFamily: "var(--font-satoshi)", fontSize: "14px" }}
        >
          Our Process
        </motion.span>

        {/* Header containing CTA Explore Our Services on right */}
        <div className="flex flex-col md:flex-row md:items-center justify-between w-full relative mb-16 lg:mb-24 gap-8">
          <div className="flex flex-col gap-6 max-w-[900px]">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="capitalize text-white"
              style={{
                fontFamily: "var(--font-delight)",
                fontWeight: 500,
                fontSize: "clamp(34px, 5vw, 60px)",
                lineHeight: "1.25",
              }}
            >
              {heading}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/60"
              style={{
                fontFamily: "var(--font-satoshi)",
                fontWeight: 400,
                fontSize: "clamp(14px, 1.2vw, 16px)",
                lineHeight: "1.6",
                maxWidth: "600px"
              }}
            >
              {description}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="shrink-0"
          >
            <Link
              href={ctaLink}
              className="w-[218px] h-[55px] bg-white border border-white rounded-[18px] text-[#0F1D07] text-[16px] font-bold flex items-center justify-center transition-all hover:bg-white/95 hover:scale-[1.02] active:scale-[0.98] shadow-md"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              {ctaText}
            </Link>
          </motion.div>
        </div>

        {/* Principles 2x2 Floating Outline Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-24 gap-y-12 lg:gap-y-16 mb-20"
        >
          {finalPrinciples.map((p, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover="hover"
              initial="initial"
              className="group flex flex-col items-start gap-4 p-0 w-full"
            >
              {/* Icon Container */}
              <div className="w-[36px] h-[36px] flex items-center justify-center text-white/70 mb-2 transition-colors duration-300 group-hover:text-[#95E7D3]">
                {getIcon(p.iconName, p.iconUrl)}
              </div>
              
              {/* Text Area */}
              <div className="flex flex-col gap-3 w-full">
                <h3
                  className="text-white transition-colors duration-300 group-hover:text-[#95E7D3]"
                  style={{
                    fontFamily: "var(--font-satoshi)",
                    fontWeight: 700,
                    fontSize: "clamp(24px, 2.5vw, 32px)",
                    lineHeight: "1.2"
                  }}
                >
                  {p.title}
                </h3>
                
                <p
                  className="text-white opacity-60 font-medium transition-opacity duration-300 group-hover:opacity-95"
                  style={{
                    fontFamily: "var(--font-satoshi)",
                    fontSize: "14px",
                    lineHeight: "24px",
                    maxWidth: "500px"
                  }}
                >
                  {p.desc}
                </p>

                {/* Explore [Title] -> Link */}
                <Link
                  href={p.linkUrl}
                  className="flex items-center gap-2 text-white/70 text-[14px] font-bold mt-4 group/link transition-colors duration-300 group-hover:text-white"
                  style={{ fontFamily: "var(--font-satoshi)" }}
                >
                  <span>{p.linkText}</span>
                  <motion.svg 
                    variants={arrowVariants}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    aria-hidden="true"
                  >
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </motion.svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Marquee Banner */}
      <div className="w-full py-6 bg-transparent relative z-20 overflow-hidden">
        <div className="flex overflow-hidden w-full">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex whitespace-nowrap items-center shrink-0 gap-[48px]"
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex shrink-0 gap-[48px]">
                {marqueeItems.map((item, k) => (
                  <span
                    key={k}
                    className="font-medium text-center uppercase"
                    style={{
                      fontFamily: "var(--font-nohemi)",
                      fontSize: "32px",
                      lineHeight: "1",
                      color: item.color,
                      letterSpacing: "0.02em"
                    }}
                  >
                    {item.text}
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}