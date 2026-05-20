"use client";

import { motion } from "framer-motion";
import { BestFitData } from "../../types/strapi";

export default function BestFit({ data }: { data?: BestFitData }) {
  // Extract Dynamic fields with Fallbacks
  const heading = data?.heading || "Best fit for businesses that need more than a basic website.";
  const description = data?.description || "This is best suited for businesses that need a website to carry serious brand, content, SEO, lead generation, or operational value.";
  const bgColor = data?.bgColor || "#95E7D3";
  const textColor = data?.textColor || "#0F1D07";

  // Parse list of scenarios split by newlines
  const defaultScenarios = [
    "A brand website that needs to look more premium",
    "A corporate website that needs clearer structure",
    "A website redesign for a business that has outgrown its old site",
    "A CMS website where internal teams need content control",
    "A multi region or international website",
    "A real estate or luxury website that needs stronger storytelling",
    "A lead generation website with better forms and conversion paths",
    "A content heavy website with blogs, insights, or resources"
  ];

  const scenariosList = data?.scenarios
    ? data.scenarios.split("\n").map(s => s.trim()).filter(Boolean)
    : defaultScenarios;

  return (
    <section
      className="w-full py-[100px] px-6 md:px-[100px] transition-colors duration-500"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="max-w-[1401px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-[96px] items-start">

          {/* Left: Text Content */}
          <div className="w-full lg:w-[674px] flex flex-col gap-6">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
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
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-[674px]"
              style={{
                fontFamily: "var(--font-satoshi)",
                fontSize: "22px",
                lineHeight: "34px",
                fontWeight: 400,
                color: textColor
              }}
            >
              {description}
            </motion.p>
          </div>

          {/* Right: Scenarios List */}
          <div className="w-full lg:w-[631px] flex flex-col">
            {scenariosList.map((scenario, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex flex-col"
              >
                <div
                  className="py-4.5 min-h-[50px] flex items-center"
                  style={{
                    fontFamily: "var(--font-satoshi)",
                    fontSize: "18px",
                    lineHeight: "36px",
                    fontWeight: 500,
                    letterSpacing: "-0.01em",
                    color: textColor
                  }}
                >
                  {scenario}
                </div>
                {/* Vector Separator */}
                <div className="w-full h-[0.5px] bg-[#929292] opacity-30" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
