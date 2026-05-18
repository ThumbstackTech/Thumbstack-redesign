"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { FAQSectionData } from "../../types/strapi";

const DEFAULT_FAQS = [
  {
    question: "What is custom website development?",
    answer: "Custom website development means designing and building a website around your brand, users, content, CMS needs, SEO goals, and technical requirements instead of using a fixed template."
  },
  {
    question: "How is a custom website different from a template website?",
    answer: "Unlike templates that force your content into a pre-defined box, custom development builds the technology around your business logic, ensuring better performance, unique design, and scalability."
  },
  {
    question: "Do you design and develop the website?",
    answer: "Yes, we handle the full end-to-end process from initial strategy and UI/UX design to custom frontend/backend development and CMS integration."
  },
  {
    question: "Will we be able to update the website ourselves?",
    answer: "Absolutely. We build with user-friendly CMS platforms like Strapi or Sanity, allowing your team to manage content, pages, and media without needing technical knowledge."
  }
];

export default function CapabilitiesFAQ({ data }: { data?: FAQSectionData }) {
  const heading = data?.heading || "Frequently asked questions.";
  const faqs = data?.faqs || DEFAULT_FAQS;

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-white py-[80px] md:py-[100px] px-6 md:px-[100px]">
      <div className="max-w-[1401px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-[96px] items-start">
          
          {/* Left: Title */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-24 w-full lg:w-[673px]"
          >
            <h2 
              className="text-[#0F1D07]"
              style={{
                fontFamily: "var(--font-delight)",
                fontSize: "clamp(32px, 5vw, 60px)",
                lineHeight: "clamp(42px, 6vw, 80px)",
                fontWeight: 500,
                letterSpacing: "-0.01em"
              }}
            >
              {heading}
            </h2>
          </motion.div>

          {/* Right: FAQ Accordion */}
          <div className="w-full lg:w-[631px] flex flex-col">
            {faqs.map((faq, index) => (
              <div key={index} className="flex flex-col">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  suppressHydrationWarning
                  className="w-full py-6 md:py-[30px] flex justify-between items-start text-left group transition-all"
                >
                  <span 
                    className="text-[#0F1D07] pr-8"
                    style={{
                      fontFamily: "var(--font-satoshi)",
                      fontSize: "18px",
                      lineHeight: "36px",
                      fontWeight: 500,
                      letterSpacing: "-0.01em"
                    }}
                  >
                    {faq.question}
                  </span>
                  
                  {/* Chevron Icon */}
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-1.5 shrink-0"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 9L12 15L6 9" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p 
                        className="text-[#6D6D6D] pb-8 max-w-[514px]"
                        style={{
                          fontFamily: "var(--font-satoshi)",
                          fontSize: "14px",
                          lineHeight: "24px",
                          fontWeight: 400,
                          letterSpacing: "-0.01em"
                        }}
                      >
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Bottom Separator Vector 5 */}
                <div className="w-full h-[0.5px] bg-[#929292]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
