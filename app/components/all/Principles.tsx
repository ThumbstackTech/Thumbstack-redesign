"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Principles() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  const principles = [
    {
      title: "Strategise",
      desc: "We define what needs to be built, fixed, prioritised, or planned.",
      icon: (
        <svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_bulb)">
            <path opacity="0.2" d="M9.8375 20.875C8.64872 19.9463 7.68583 18.7604 7.02118 17.4062C6.35653 16.052 6.00739 14.5648 6 13.0563C5.97 7.63625 10.34 3.125 15.7588 3C17.8588 2.94914 19.9215 3.56088 21.6542 4.74843C23.3869 5.93598 24.7017 7.63903 25.412 9.61594C26.1222 11.5929 26.1919 13.7432 25.6111 15.762C25.0303 17.7807 23.8285 19.5653 22.1763 20.8625C21.8118 21.1451 21.5165 21.5069 21.3127 21.9206C21.1089 22.3342 21.002 22.7889 21 23.25V24C21 24.2652 20.8946 24.5196 20.7071 24.7071C20.5196 24.8946 20.2652 25 20 25H12C11.7348 25 11.4804 24.8946 11.2929 24.7071C11.1054 24.5196 11 24.2652 11 24V23.25C10.9995 22.7918 10.8946 22.3397 10.6931 21.9282C10.4917 21.5167 10.1991 21.1565 9.8375 20.875Z" fill="white" />
            <path d="M11 29H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.8375 20.875C8.64872 19.9463 7.68583 18.7604 7.02118 17.4062C6.35653 16.052 6.00739 14.5648 6 13.0563C5.97 7.63625 10.34 3.125 15.7588 3C17.8588 2.94914 19.9215 3.56088 21.6542 4.74843C23.3869 5.93598 24.7017 7.63903 25.412 9.61594C26.1222 11.5929 26.1919 13.7432 25.6111 15.762C25.0303 17.7807 23.8285 19.5653 22.1763 20.8625C21.8118 21.1451 21.5165 21.5069 21.3127 21.9206C21.1089 22.3342 21.002 22.7889 21 23.25V24C21 24.2652 20.8946 24.5196 20.7071 24.7071C20.5196 24.8946 20.2652 25 20 25H12C11.7348 25 11.4804 24.8946 11.2929 24.7071C11.1054 24.5196 11 24.2652 11 24V23.25C10.9995 22.7918 10.8946 22.3397 10.6931 21.9282C10.4917 21.5167 10.1991 21.1565 9.8375 20.875Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17 7C19.5 7.42125 21.5762 9.5 22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_bulb">
              <rect width="32" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )
    },
    {
      title: "Design",
      desc: "We shape the experience, interface, user journeys, and visual system.",
      icon: (
        <svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_design)">
            <path opacity="0.2" d="M25 7H6C5.44772 7 5 7.44772 5 8V16C5 16.5523 5.44772 17 6 17H25C25.5523 17 26 16.5523 26 16V8C26 7.44772 25.5523 7 25 7Z" fill="white" />
            <path d="M25 7H6C5.44772 7 5 7.44772 5 8V16C5 16.5523 5.44772 17 6 17H25C25.5523 17 26 16.5523 26 16V8C26 7.44772 25.5523 7 25 7Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M26 12H29C29.2652 12 29.5196 12.1054 29.7071 12.2929C29.8946 12.4804 30 12.7348 30 13V19.25C30 19.4672 29.9292 19.6785 29.7984 19.852C29.6676 20.0254 29.4839 20.1515 29.275 20.2113L16.725 23.7925C16.5168 23.8521 16.3335 23.9776 16.2027 24.1503C16.072 24.323 16.0009 24.5334 16 24.75V29" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5 12H2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_design">
              <rect width="32" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )
    },
    {
      title: "Build",
      desc: "We develop the website, store, app, platform, CMS, integrations, or backend system.",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      )
    },
    {
      title: "Grow",
      desc: "We maintain, improve, optimise, and support the product after launch.",
      icon: (
        <svg width="34" height="34" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_6495_1189)">
            <path opacity="0.2" d="M10.5337 21.4662L3.64749 18.9287C3.45761 18.8587 3.29377 18.732 3.17806 18.566C3.06234 18.3999 3.00031 18.2024 3.00031 18C3.00031 17.7976 3.06234 17.6 3.17806 17.434C3.29377 17.2679 3.45761 17.1413 3.64749 17.0712L10.5337 14.5337L13.0712 7.64749C13.1413 7.45761 13.2679 7.29377 13.434 7.17806C13.6 7.06234 13.7976 7.00031 14 7.00031C14.2024 7.00031 14.3999 7.06234 14.566 7.17806C14.732 7.29377 14.8587 7.45761 14.9287 7.64749L17.4662 14.5337L24.3525 17.0712C24.5424 17.1413 24.7062 17.2679 24.8219 17.434C24.9376 17.6 24.9997 17.7976 24.9997 18C24.9997 18.2024 24.9376 18.3999 24.8219 18.566C24.7062 18.732 24.5424 18.8587 24.3525 18.9287L17.4662 21.4662L14.9287 28.3525C14.8587 28.5424 14.732 28.7062 14.566 28.8219C14.3999 28.9376 14.2024 28.9997 14 28.9997C13.7976 28.9997 13.6 28.9376 13.434 28.8219C13.2679 28.7062 13.1413 28.5424 13.0712 28.3525L10.5337 21.4662Z" fill="white" />
            <path d="M10.5337 21.4662L3.64749 18.9287C3.45761 18.8587 3.29377 18.732 3.17806 18.566C3.06234 18.3999 3.00031 18.2024 3.00031 18C3.00031 17.7976 3.06234 17.6 3.17806 17.434C3.29377 17.2679 3.45761 17.1413 3.64749 17.0712L10.5337 14.5337L13.0712 7.64749C13.1413 7.45761 13.2679 7.29377 13.434 7.17806C13.6 7.06234 13.7976 7.00031 14 7.00031C14.2024 7.00031 14.3999 7.06234 14.566 7.17806C14.732 7.29377 14.8587 7.45761 14.9287 7.64749L17.4662 14.5337L24.3525 17.0712C24.5424 17.1413 24.7062 17.2679 24.8219 17.434C24.9376 17.6 24.9997 17.7976 24.9997 18C24.9997 18.2024 24.9376 18.3999 24.8219 18.566C24.7062 18.732 24.5424 18.8587 24.3525 18.9287L17.4662 21.4662L14.9287 28.3525C14.8587 28.5424 14.732 28.7062 14.566 28.8219C14.3999 28.9376 14.2024 28.9997 14 28.9997C13.7976 28.9997 13.6 28.9376 13.434 28.8219C13.2679 28.7062 13.1413 28.5424 13.0712 28.3525L10.5337 21.4662Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22 2V8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M28 9V13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M19 5H25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M26 11H30" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_6495_1189">
              <rect width="32" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )
    }
  ];

  const marqueeItems = [
    { text: "MOBILE APPS", color: "#95E7D3" },
    { text: "HUMAN-CENTERED PRODUCTS", color: "#FFFFFF" },
    { text: "END-TO-END OWNERSHIP", color: "#95E7D3" },
    { text: "ECOMMERCE", color: "#FFFFFF" }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section
      ref={containerRef}
      className="w-full flex flex-col items-center justify-start snap-start relative bg-[#0F1D07] text-white overflow-hidden pt-16 sm:pt-20 pb-0"
    >
      <div className="w-full max-w-[1600px] px-4 sm:px-6 md:px-8 lg:pl-24 lg:pr-24 flex flex-col z-10 relative">

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

        {/* Header */}
        <div className="flex flex-col justify-start items-start w-full relative mb-16 lg:mb-24 gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="capitalize"
            style={{
              fontFamily: "var(--font-delight)",
              fontWeight: 500,
              fontSize: "clamp(24px, 5vw, 54px)",
              lineHeight: "1.1",
              color: "#FFFFFF",
              maxWidth: "800px"
            }}
          >
            Every Capability Runs Through The Same System.
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
            Whether we are building a Shopify store, a custom website, a CMS platform, or a mobile app ecosystem, the process stays connected.
          </motion.p>
        </div>

        {/* Principles Grid - 2x2 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 lg:gap-y-16 mb-12"
        >
          {principles.map((p, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.04)" }}
              whileTap={{ scale: 0.98 }}
              className="flex flex-col items-start gap-4 p-8 rounded-2xl transition-colors duration-300 cursor-pointer"
            >
              {/* Icon Container */}
              <div className="w-[32px] h-[32px] flex items-center justify-center text-white mb-4">
                {p.icon}
              </div>
              {/* Text */}
              <div className="flex flex-col gap-3">
                <h3
                  className="text-white"
                  style={{
                    fontFamily: "var(--font-satoshi)",
                    fontWeight: 700,
                    fontSize: "34px",
                    lineHeight: "46px"
                  }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-white opacity-60"
                  style={{
                    fontFamily: "var(--font-satoshi)",
                    fontWeight: 700,
                    fontSize: "14px",
                    lineHeight: "26px",
                    maxWidth: "625.5px"
                  }}
                >
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Enhanced Marquee Banner */}
      <div className="mt-0 w-full py-4 lg:py-6 bg-transparent relative z-20 overflow-hidden">
        <div className="flex overflow-hidden w-full">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex whitespace-nowrap items-center shrink-0 gap-[37px]"
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex shrink-0 gap-[37px]">
                {marqueeItems.map((item, k) => (
                  <span
                    key={k}
                    className="font-medium text-center uppercase"
                    style={{
                      fontFamily: "var(--font-nohemi)",
                      fontSize: "33.8824px",
                      lineHeight: "34px",
                      color: item.color,
                      padding: "0 10px"
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