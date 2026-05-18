"use client";

import { motion } from "framer-motion";

const fitScenarios = [
  "A brand website that needs to look more premium",
  "A corporate website that needs clearer structure",
  "A website redesign for a business that has outgrown its old site",
  "A CMS website where internal teams need content control",
  "A multi region or international website",
  "A real estate or luxury website that needs stronger storytelling",
  "A lead generation website with better forms and conversion paths",
  "A content heavy website with blogs, insights, or resources"
];

export default function BestFit() {
  return (
    <section className="w-full bg-[#95E7D3] py-[100px] px-6 md:px-[100px]">
      <div className="max-w-[1401px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-[96px] items-start">
          
          {/* Left: Text Content */}
          <div className="w-full lg:w-[674px] flex flex-col gap-6">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-[#0F1D07]"
              style={{
                fontFamily: "var(--font-delight)",
                fontSize: "clamp(32px, 5vw, 60px)",
                lineHeight: "clamp(42px, 6vw, 80px)",
                fontWeight: 500,
                letterSpacing: "-0.01em"
              }}
            >
              Best fit for businesses that need more than a basic website.
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[#0F1D07] max-w-[674px]"
              style={{
                fontFamily: "var(--font-satoshi)",
                fontSize: "22px",
                lineHeight: "34px",
                fontWeight: 400
              }}
            >
              This is best suited for businesses that need a website to carry serious brand, content, SEO, lead generation, or operational value.
            </motion.p>
          </div>

          {/* Right: Scenarios List */}
          <div className="w-full lg:w-[631px] flex flex-col">
            {fitScenarios.map((scenario, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col"
              >
                <div 
                  className="text-[#0F1D07] py-4.5 min-h-[50px] flex items-center"
                  style={{
                    fontFamily: "var(--font-satoshi)",
                    fontSize: "18px",
                    lineHeight: "36px",
                    fontWeight: 500,
                    letterSpacing: "-0.01em"
                  }}
                >
                  {scenario}
                </div>
                {/* Vector 5 Separator */}
                <div className="w-full h-[0.5px] bg-[#929292]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
