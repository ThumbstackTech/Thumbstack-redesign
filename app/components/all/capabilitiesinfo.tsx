"use client";

import { motion } from "framer-motion";

export default function CapabilitiesInfo() {
    return (
        <section
            className="w-full flex flex-col items-center pb-[100px] px-6 md:px-[100px] pt-0"
            style={{ backgroundColor: "#95E7D3" }}
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
                        A Good Website Is <br />
                        Not Just Designed. <br />
                        <span className="text-[#3145DD]">It Is Structured Properly.</span>
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
                    <p
                        className="text-[#0F1D07]"
                        style={{
                            fontFamily: "var(--font-satoshi)",
                            fontSize: "18px",
                            lineHeight: "34px",
                            fontWeight: 400
                        }}
                    >
                        Most websites fail when design, content, CMS, SEO, and development are treated as separate pieces. The site may look fine at launch, but becomes slow, hard to update, weak for search, or difficult to scale.
                    </p>
                    <p
                        className="text-[#0F1D07]"
                        style={{
                            fontFamily: "var(--font-satoshi)",
                            fontSize: "18px",
                            lineHeight: "34px",
                            fontWeight: 400
                        }}
                    >
                        A custom website gives your business room to express the brand properly, organise content clearly, support SEO, connect the right tools, and give your team control through a CMS.
                    </p>
                    <p
                        className="text-[#0F1D07]"
                        style={{
                            fontFamily: "var(--font-satoshi)",
                            fontSize: "18px",
                            lineHeight: "34px",
                            fontWeight: 400
                        }}
                    >
                        We build custom websites with the full system in mind: strategy, website design, frontend development, backend development, CMS integration, performance, analytics, SEO structure, and long term maintenance.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
