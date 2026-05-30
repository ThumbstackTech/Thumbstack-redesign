"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HowWeWorkData } from "../../types/strapi";

interface HowWeWorkProps {
  data?: HowWeWorkData;
}

function getIconSvg(icon: string) {
  switch (icon) {
    case "lightbulb":
      return (
        <svg width="46" height="46" viewBox="0 0 32 32" fill="none" className="text-[#0F1D07]">
          {/* SVG representation matching design notes: Component 22/Lightbulb */}
          <path d="M11 29H21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9.8375 20.875C8.64872 19.9463 7.68583 18.7604 7.02118 17.4062C6.35653 16.052 6.00739 14.5648 6 13.0563C5.97 7.63625 10.34 3.125 15.7588 3C17.8588 2.94914 19.9215 3.56088 21.6542 4.74843C23.3869 5.93598 24.7017 7.63903 25.412 9.61594C26.1222 11.5929 26.1919 13.7432 25.6111 15.762C25.0303 17.7807 23.8285 19.5653 22.1763 20.8625C21.8118 21.1451 21.5165 21.5069 21.3127 21.9206C21.1089 22.3342 21.002 22.7889 21 23.25V24C21 24.2652 20.8946 24.5196 20.7071 24.7071C20.5196 24.8946 20.2652 25 20 25H12C11.7348 25 11.4804 24.8946 11.2929 24.7071C11.1054 24.5196 11 24.2652 11 24V23.25C10.9995 22.7918 10.8946 22.3397 10.6931 21.9282C10.4917 21.5167 10.1991 21.1565 9.8375 20.875Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M17 7C19.5 7.42125 21.5762 9.5 22 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "paintroller":
      return (
        <svg width="46" height="46" viewBox="0 0 32 32" fill="none" className="text-[#0F1D07]">
          {/* PaintRoller */}
          <path d="M25 7H6C5.44772 7 5 7.44772 5 8V16C5 16.5523 5.44772 17 6 17H25C25.5523 17 26 16.5523 26 16V8C26 7.44772 25.5523 7 25 7Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M26 12H29C29.2652 12 29.5196 12.1054 29.7071 12.2929C29.8946 12.4804 30 12.7348 30 13V19.25C30 19.4672 29.9292 19.6785 29.7984 19.852C29.6676 20.0254 29.4839 20.1515 29.275 20.2113L16.725 23.7925C16.5168 23.8521 16.3335 23.9776 16.2027 24.1503C16.072 24.323 16.0009 24.5334 16 24.75V29" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 12H2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "code-circle":
      return (
        <svg width="46" height="46" viewBox="0 0 32 32" fill="none" className="text-[#0F1D07]">
          {/* code-circle */}
          <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12.5 12.5L9.5 16L12.5 19.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M19.5 12.5L22.5 16L19.5 19.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "sparkle":
      return (
        <svg width="46" height="46" viewBox="0 0 32 32" fill="none" className="text-[#0F1D07]">
          {/* Sparkle */}
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
}

export default function HowWeWork({ data }: HowWeWorkProps) {
  const heading = data?.heading || "Four Stages. One Connected Process.";
  const subheading = data?.subheading || "Good digital work does not happen in isolated parts. Strategy shapes design. Design guides build. Build creates the foundation for growth. Each stage is connected, so the final product is clearer, stronger, and easier to improve over time.";
  const stages = data?.stages || [];

  return (
    <section className="w-full flex flex-col items-center bg-white py-16 px-6 md:px-[104px] pt-24 lg:pt-32">
      {/* Top Separator Line */}
      <div className="w-full max-w-[1400px] border-t-[0.5px] border-[#969696] mb-10 lg:mb-14" />

      {/* Header Section (Frame 2087326579) */}
      <div className="w-full max-w-[1400px] flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 lg:gap-[24px]">
        {/* Left column (Label & Headline) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start gap-4 max-w-[720px]"
        >
          <span
            className="text-[#0F1D07] font-medium text-lg lg:text-[24px] leading-[36px]"
            style={{ fontFamily: "var(--font-satoshi)" }}
          >
            How we work
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

        {/* Right column (Description text) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-[630px] text-[#0F1D07] font-normal text-lg lg:text-[20px] lg:leading-[32px] lg:mb-2"
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
        className="w-full max-w-[1400px] border-t-[0.5px] border-[#969696] my-12 lg:my-[100px] origin-left"
      />

      {/* Stages 2x2 Grid Layout (Frame 2087326729) */}
      <div className="w-full max-w-[1400px] grid grid-cols-1 md:grid-cols-2 gap-x-[148px] gap-y-[100px]">
        {stages.map((stage, index) => {
          const featuresList = stage.features
            ? stage.features.split(",").map((f) => f.trim()).filter(Boolean)
            : [];

          return (
            <motion.div
              key={stage.id || index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
              className="flex flex-col items-start gap-12 max-w-[589px] w-full"
            >
              {/* Header block with icon & Stage Title */}
              <div className="flex flex-col items-start gap-8 w-full">

                {/* Title and Icon row (Frame 2087326834) */}
                <div className="flex items-center gap-3">
                  <div className="w-[46px] h-[46px] flex items-center justify-center">
                    {getIconSvg(stage.icon)}
                  </div>
                  <h3
                    className="text-[#0F1D07] font-medium tracking-[0.01em] uppercase"
                    style={{
                      fontFamily: "var(--font-delight)",
                      fontSize: "clamp(28px, 4vw, 42px)",
                      lineHeight: "70px",
                    }}
                  >
                    {stage.title}
                  </h3>
                </div>

                {/* Tagline & Short Paragraph Description */}
                <div className="flex flex-col items-start gap-4 w-full">
                  <span
                    className="text-[#0F1D07] font-medium text-lg lg:text-[22px] leading-[36px]"
                    style={{ fontFamily: "var(--font-satoshi)" }}
                  >
                    {stage.tagline}
                  </span>
                  <p
                    className="text-[#0F1D07] font-normal text-base lg:text-[20px] lg:leading-[32px]"
                    style={{ fontFamily: "var(--font-satoshi)" }}
                  >
                    {stage.description}
                  </p>
                </div>

              </div>

              {/* Stage Points list + Link (Frame 2087326723) */}
              <div className="flex flex-col items-start gap-6 w-full">

                {/* Features listing with bullet-arrows */}
                <div className="flex flex-col gap-2 w-full">
                  {featuresList.map((feature, fIndex) => (
                    <div
                      key={fIndex}
                      className="flex items-center gap-3 py-1 text-[#0F1D07]"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="rotate-180"
                      >
                        <path
                          d="M15 6L9 12L15 18"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span
                        className="text-[#0F1D07] font-normal text-[16px] leading-[30px]"
                        style={{ fontFamily: "var(--font-satoshi)" }}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Stage link */}
                <Link
                  href={stage.link || "#"}
                  className="text-[#3145DD] font-medium text-[16px] leading-[30px] underline underline-offset-4 decoration-2 hover:opacity-80 transition-opacity"
                  style={{ fontFamily: "var(--font-satoshi)" }}
                >
                  {stage.linkText || `Explore ${stage.title}`}
                </Link>

              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
