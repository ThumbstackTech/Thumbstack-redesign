"use client";

import React from "react";
import { motion } from "framer-motion";
import { ServiceInfoData } from "../../types/strapi";

interface ServiceInfoProps {
  data?: ServiceInfoData;
}

export default function ServiceInfo({ data }: ServiceInfoProps) {
  const tagline = data?.tagline || "What we help with";

  const defaultItems = [
    {
      id: 1,
      title: "Product Strategy And Discovery",
      description: "We define the purpose, scope, users, features, and direction of a website, app, ecommerce store, or digital product before execution begins.",
      tags: "Business goals, User groups, Core journeys, Feature priorities, MVP definition, Content needs, Project risks, Build phases, Success metrics",
      outcomeTitle: "Outcome",
      outcomeDescription: "A clear product and project direction that explains what needs to be built first and why."
    },
    {
      id: 2,
      title: "UX And Experience Audits",
      description: "We review your current website, app, or ecommerce experience to identify what is confusing, unclear, slow, or stopping users from taking action.",
      tags: "Business goals, User groups, Core journeys, Feature priorities, MVP definition, Content needs, Project risks, Build phases, Success metrics",
      outcomeTitle: "Outcome",
      outcomeDescription: "A clear product and project direction that explains what needs to be built first and why."
    },
    {
      id: 3,
      title: "Custom Website Design",
      description: "We design websites that do not look like templates. We focus on clean layout structure, premium typography, micro-interactions, and visual storytelling.",
      tags: "Visual identity, UI components, Responsive grids, Interaction design, Asset libraries, SEO alignment, Style guides, User feedback",
      outcomeTitle: "Outcome",
      outcomeDescription: "High-fidelity Figma files and design systems that are completely ready for development handoff."
    }
  ];

  const items = data?.items && data.items.length > 0 ? data.items : defaultItems;

  return (
    <section className="w-full flex flex-col items-center justify-center bg-white px-6 md:px-[100px] py-16 md:py-[100px]">
      <div className="w-full max-w-[1400px] flex flex-col items-start gap-[24px] relative">
        
        {/* Section Header Tagline */}
        <div className="w-full flex flex-col items-start gap-4">
          <span 
            className="font-medium text-[#0F1D07]"
            style={{ fontFamily: "var(--font-satoshi)", fontSize: "24px", lineHeight: "36px", letterSpacing: "0%" }}
          >
            {tagline}
          </span>
        </div>

        {/* Info Rows Container */}
        <div className="w-full flex flex-col items-stretch">
          {items.map((item, index) => {
            const tagList = item.tags
              ? item.tags.split(",").map((tag) => tag.trim()).filter(Boolean)
              : [];

            return (
              <div key={item.id || index} className="w-full flex flex-col">
                {/* Horizontal rule separator */}
                {index > 0 && (
                  <div className="w-full border-t border-[#0F1D07]/10 my-12 md:my-16" />
                )}

                {/* Main Two-Column Row */}
                <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-[60px] items-start">
                  
                  {/* Left Column (Span 7) */}
                  <div className="lg:col-span-7 flex flex-col items-start gap-6">
                    <h3
                      className="font-normal text-[#0F1D07] tracking-[-0.01em] max-w-[580px]"
                      style={{
                        fontFamily: "var(--font-delight)",
                        fontSize: "clamp(22px, 3vw, 36px)",
                        lineHeight: "clamp(30px, 4vw, 48px)",
                        fontWeight: 500,
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="font-normal text-[#0F1D07]/80 max-w-[580px]"
                      style={{
                        fontFamily: "var(--font-satoshi)",
                        fontSize: "clamp(15px, 1.2vw, 18px)",
                        lineHeight: "clamp(26px, 2.2vw, 34px)",
                      }}
                    >
                      {item.description}
                    </p>
                  </div>

                  {/* Right Column (Span 5) */}
                  <div className="lg:col-span-5 flex flex-col items-start gap-8">
                    
                    {/* What we cover Section */}
                    {tagList.length > 0 && (
                      <div className="flex flex-col items-start gap-4 w-full">
                        <span 
                          className="text-[12px] md:text-[13px] font-bold tracking-[0.03em] text-[#0F1D07]"
                          style={{ fontFamily: "var(--font-satoshi)" }}
                        >
                          What we cover
                        </span>
                        <div className="flex flex-wrap gap-2.5">
                          {tagList.map((tag, tagIdx) => (
                            <div
                              key={tagIdx}
                              className="flex flex-row justify-center items-center px-[18px] py-[10px] gap-[10px] bg-[#F2F2F2] rounded-[12px] text-[13px] md:text-[15px] text-[#0F1D07] font-medium cursor-default"
                              style={{ fontFamily: "var(--font-satoshi)" }}
                            >
                              {tag}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Outcome Section */}
                    {(item.outcomeTitle || item.outcomeDescription) && (
                      <div className="flex flex-col items-start gap-3 w-full mt-2">
                        <span
                          className="text-[12px] md:text-[13px] font-bold tracking-[0.03em] text-[#0F1D07]"
                          style={{ fontFamily: "var(--font-satoshi)" }}
                        >
                          {item.outcomeTitle || "Outcome"}
                        </span>
                        <p
                          className="text-[#0F1D07]/90 text-[14px] md:text-[16px] leading-[26px] md:leading-[28px] max-w-[480px]"
                          style={{ fontFamily: "var(--font-satoshi)" }}
                        >
                          {item.outcomeDescription}
                        </p>
                      </div>
                    )}

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
