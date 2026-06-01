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
        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip-hww-lightbulb)">
            <path opacity="0.2" d="M14.1416 30.0081C12.4328 28.6732 11.0486 26.9683 10.0932 25.0217C9.13773 23.075 8.63585 20.9371 8.62522 18.7687C8.5821 10.9774 14.864 4.4925 22.6534 4.31281C25.6722 4.23969 28.6373 5.11907 31.1281 6.82617C33.6189 8.53327 35.5089 10.9814 36.5299 13.8232C37.5509 16.665 37.651 19.7562 36.8161 22.6581C35.9812 25.5601 34.2537 28.1254 31.8786 29.9902C31.3547 30.3963 30.9302 30.9165 30.6372 31.5111C30.3443 32.1058 30.1906 32.7593 30.1877 33.4222V34.5003C30.1877 34.8816 30.0363 35.2472 29.7667 35.5168C29.4971 35.7864 29.1315 35.9378 28.7502 35.9378H17.2502C16.869 35.9378 16.5033 35.7864 16.2338 35.5168C15.9642 35.2472 15.8127 34.8816 15.8127 34.5003V33.4222C15.812 32.7635 15.6612 32.1137 15.3716 31.5221C15.082 30.9305 14.6614 30.4127 14.1416 30.0081Z" fill="#0F1D07"/>
            <path d="M15.8125 41.6875H30.1875" stroke="#0F1D07" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.1416 30.0081C12.4328 28.6732 11.0486 26.9683 10.0932 25.0217C9.13773 23.075 8.63585 20.9371 8.62522 18.7687C8.5821 10.9774 14.864 4.4925 22.6534 4.31281C25.6722 4.23969 28.6373 5.11907 31.1281 6.82617C33.6189 8.53327 35.5089 10.9814 36.5299 13.8232C37.5509 16.665 37.651 19.7562 36.8161 22.6581C35.9812 25.5601 34.2537 28.1254 31.8786 29.9902C31.3547 30.3963 30.9302 30.9165 30.6372 31.5111C30.3443 32.1058 30.1906 32.7593 30.1877 33.4222V34.5003C30.1877 34.8816 30.0363 35.2472 29.7667 35.5168C29.4971 35.7864 29.1315 35.9378 28.7502 35.9378H17.2502C16.869 35.9378 16.5033 35.7864 16.2338 35.5168C15.9642 35.2472 15.8127 34.8816 15.8127 34.5003V33.4222C15.812 32.7635 15.6612 32.1137 15.3716 31.5221C15.082 30.9305 14.6614 30.4127 14.1416 30.0081Z" stroke="#0F1D07" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M24.4375 10.0625C28.0312 10.668 31.0159 13.6562 31.625 17.25" stroke="#0F1D07" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip-hww-lightbulb">
              <rect width="46" height="46" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      );
    case "paintroller":
      return (
        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip-hww-paintroller)">
            <path opacity="0.2" d="M35.9375 10.0625H8.625C7.83109 10.0625 7.1875 10.7061 7.1875 11.5V23C7.1875 23.7939 7.83109 24.4375 8.625 24.4375H35.9375C36.7314 24.4375 37.375 23.7939 37.375 23V11.5C37.375 10.7061 36.7314 10.0625 35.9375 10.0625Z" fill="#0F1D07"/>
            <path d="M35.9375 10.0625H8.625C7.83109 10.0625 7.1875 10.7061 7.1875 11.5V23C7.1875 23.7939 7.83109 24.4375 8.625 24.4375H35.9375C36.7314 24.4375 37.375 23.7939 37.375 23V11.5C37.375 10.7061 36.7314 10.0625 35.9375 10.0625Z" stroke="#0F1D07" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M37.375 17.25H41.6875C42.0687 17.25 42.4344 17.4015 42.704 17.671C42.9736 17.9406 43.125 18.3063 43.125 18.6875V27.6719C43.1249 27.9841 43.0232 28.2879 42.8352 28.5372C42.6471 28.7865 42.383 28.9678 42.0828 29.0537L24.0422 34.2017C23.7428 34.2873 23.4794 34.4678 23.2914 34.716C23.1035 34.9643 23.0012 35.2668 23 35.5781V41.6875" stroke="#0F1D07" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.1875 17.25H2.875" stroke="#0F1D07" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip-hww-paintroller">
              <rect width="46" height="46" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      );
    case "code-circle":
      return (
        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.9987 42.1673C33.5842 42.1673 42.1654 33.5861 42.1654 23.0007C42.1654 12.4152 33.5842 3.83398 22.9987 3.83398C12.4132 3.83398 3.83203 12.4152 3.83203 23.0007C3.83203 33.5861 12.4132 42.1673 22.9987 42.1673Z" fill="#0F1D07" fillOpacity="0.2" stroke="#0F1D07" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18.2096 18.209L15.271 20.7419C14.0357 21.8066 13.418 22.339 13.418 23.0007C13.418 23.6623 14.0357 24.1947 15.271 25.2594L18.2096 27.7923" stroke="#0F1D07" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M27.793 18.209L30.7316 20.7419C31.9669 21.8066 32.5846 22.339 32.5846 23.0007C32.5846 23.6623 31.9669 24.1947 30.7316 25.2594L27.793 27.7923" stroke="#0F1D07" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case "sparkle":
      return (
        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip-hww-sparkle)">
            <path opacity="0.2" d="M15.1418 30.8573L5.24283 27.2096C4.96987 27.1089 4.73436 26.9269 4.56802 26.6882C4.40168 26.4495 4.3125 26.1655 4.3125 25.8745C4.3125 25.5836 4.40168 25.2996 4.56802 25.0609C4.73436 24.8222 4.96987 24.6402 5.24283 24.5395L15.1418 20.8918L18.7895 10.9928C18.8902 10.7199 19.0722 10.4844 19.3109 10.318C19.5496 10.1517 19.8336 10.0625 20.1245 10.0625C20.4155 10.0625 20.6995 10.1517 20.9382 10.318C21.1769 10.4844 21.3589 10.7199 21.4596 10.9928L25.1073 20.8918L35.0063 24.5395C35.2792 24.6402 35.5147 24.8222 35.6811 25.0609C35.8474 25.2996 35.9366 25.5836 35.9366 25.8745C35.9366 26.1655 35.8474 26.4495 35.6811 26.6882C35.5147 26.9269 35.2792 27.1089 35.0063 27.2096L25.1073 30.8573L21.4596 40.7563C21.3589 41.0292 21.1769 41.2647 20.9382 41.4311C20.6995 41.5974 20.4155 41.6866 20.1245 41.6866C19.8336 41.6866 19.5496 41.5974 19.3109 41.4311C19.0722 41.2647 18.8902 41.0292 18.7895 40.7563L15.1418 30.8573Z" fill="#0F1D07"/>
            <path d="M15.1418 30.8573L5.24283 27.2096C4.96987 27.1089 4.73436 26.9269 4.56802 26.6882C4.40168 26.4495 4.3125 26.1655 4.3125 25.8745C4.3125 25.5836 4.40168 25.2996 4.56802 25.0609C4.73436 24.8222 4.96987 24.6402 5.24283 24.5395L15.1418 20.8918L18.7895 10.9928C18.8902 10.7199 19.0722 10.4844 19.3109 10.318C19.5496 10.1517 19.8336 10.0625 20.1245 10.0625C20.4155 10.0625 20.6995 10.1517 20.9382 10.318C21.1769 10.4844 21.3589 10.7199 21.4596 10.9928L25.1073 20.8918L35.0063 24.5395C35.2792 24.6402 35.5147 24.8222 35.6811 25.0609C35.8474 25.2996 35.9366 25.5836 35.9366 25.8745C35.9366 26.1655 35.8474 26.4495 35.6811 26.6882C35.5147 26.9269 35.2792 27.1089 35.0063 27.2096L25.1073 30.8573L21.4596 40.7563C21.3589 41.0292 21.1769 41.2647 20.9382 41.4311C20.6995 41.5974 20.4155 41.6866 20.1245 41.6866C19.8336 41.6866 19.5496 41.5974 19.3109 41.4311C19.0722 41.2647 18.8902 41.0292 18.7895 40.7563L15.1418 30.8573Z" stroke="#0F1D07" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M31.625 2.875V11.5" stroke="#0F1D07" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M40.25 12.9375V18.6875" stroke="#0F1D07" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M27.3125 7.1875H35.9375" stroke="#0F1D07" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M37.375 15.8125H43.125" stroke="#0F1D07" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip-hww-sparkle">
              <rect width="46" height="46" fill="white"/>
            </clipPath>
          </defs>
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
