"use client";

import { motion } from "framer-motion";
import type { CapabilitiesInfoData } from "../../types/strapi";

interface CapabilitiesInfoProps {
  data?: CapabilitiesInfoData;
}

export default function CapabilitiesInfo({ data }: CapabilitiesInfoProps) {
    // Debug log to see what data structure is coming from Strapi
    console.log("CapabilitiesInfo received data:", data);

    // Default paragraphs when none provided from Strapi
    const defaultParagraphs = [
        { text: "Most websites fail when design, content, CMS, SEO, and development are treated as separate pieces. The site may look fine at launch, but becomes slow, hard to update, weak for search, or difficult to scale." },
        { text: "A custom website gives your business room to express the brand properly, organise content clearly, support SEO, connect the right tools, and give your team control through a CMS." },
        { text: "We build custom websites with the full system in mind: strategy, website design, frontend development, backend development, CMS integration, performance, analytics, SEO structure, and long term maintenance." }
    ];

    // Strapi provides defaults for these fields in the schema
    const displayData = {
        backgroundColor: data?.backgroundColor || "#95E7D3",
        accentColor: data?.accentColor || "#3145DD",
        headingLine1: data?.headingLine1 || "A Good Website Is",
        headingLine2: data?.headingLine2 || "Not Just Designed.",
        headingLine3: data?.headingLine3 || "It Is Structured Properly.",
        paragraphs: data?.paragraphs && data.paragraphs.length > 0 ? data.paragraphs : defaultParagraphs
    };

    console.log("CapabilitiesInfo displayData:", displayData);

    return (
        <section
            className="w-full flex flex-col items-center pb-[100px] px-6 md:px-[100px] pt-0"
            style={{ backgroundColor: displayData.backgroundColor }}
        >
            {/* Top Separator Line (Vector 235) */}
            <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="w-full max-w-[1400px] border-t-[0.5px] border-[#969696] mb-[104px] origin-left"
            />

            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-start gap-12 lg:gap-[24px] w-full max-w-[1400px]">

                {/* Headline Container (Frame 2087326768) */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col justify-center items-start w-full lg:w-[580px]"
                >
                    <h2
                        className="text-[#0F1D07] tracking-[-0.01em]"
                        style={{
                            fontFamily: "var(--font-delight)",
                            fontSize: "clamp(40px, 5vw, 60px)",
                            lineHeight: "clamp(50px, 6vw, 80px)",
                            fontWeight: 500
                        }}
                    >
                        {displayData.headingLine1} <br />
                        {displayData.headingLine2} <br />
                        <span style={{ color: displayData.accentColor }}>{displayData.headingLine3}</span>
                    </h2>
                </motion.div>

                {/* Description Text (Frame 2087326766 right side) */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full lg:w-[684px] flex flex-col gap-6"
                >
                    {displayData.paragraphs && displayData.paragraphs.length > 0 ? (
                        displayData.paragraphs.map((paragraph, index) => (
                            <p
                                key={index}
                                className="text-[#0F1D07]"
                                style={{
                                    fontFamily: "var(--font-satoshi)",
                                    fontSize: "18px",
                                    lineHeight: "34px",
                                    fontWeight: 400
                                }}
                            >
                                {paragraph.text}
                            </p>
                        ))
                    ) : null}
                </motion.div>
            </div>
        </section>
    );
}
