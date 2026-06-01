"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { CapabilitiesHeroDetailData } from "../../types/strapi";

interface CapabilitiesHeroDetailProps {
  data?: CapabilitiesHeroDetailData;
}

export default function CapabilitiesHeroDetail({ data }: CapabilitiesHeroDetailProps) {
  const label = data?.label || "Custom Website Development";
  const title = data?.title || "Custom Websites Built Around Your Brand, Content, And Growth.";
  const description = data?.description || "We design, develop, launch, and maintain custom websites for businesses that need more than a template.";
  const primaryCtaText = data?.primaryCtaText || "Start A Website Project";
  const primaryCtaLink = data?.primaryCtaLink || "#contact-form";
  const secondaryCtaText = data?.secondaryCtaText || "View Our Work";
  const secondaryCtaLink = data?.secondaryCtaLink || "/our-work";

  // Form states
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    projectDetails: ""
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className="w-full min-h-screen bg-white pt-[160px] pb-16 lg:py-24 px-6 md:px-[100px] flex items-center justify-center">
      <div className="w-full max-w-[1400px] flex flex-col xl:flex-row items-start justify-between gap-12 xl:gap-[80px]">
        
        {/* Left Column: Heading & Content (Frame 2087326579 / 2087326411) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start gap-8 max-w-[690px] w-full mt-0 xl:mt-24"
        >
          <div className="flex flex-col items-start gap-4 w-full">
            <span
              className="text-[#0F1D07] font-medium text-lg lg:text-[24px] leading-[36px]"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              {label}
            </span>
            <h1
              className="text-[#0F1D07] font-medium tracking-[-0.01em]"
              style={{
                fontFamily: "var(--font-delight)",
                fontSize: "clamp(36px, 5vw, 64px)",
                lineHeight: "clamp(46px, 6vw, 84px)"
              }}
            >
              {title}
            </h1>
            <p
              className="text-[#0F1D07] font-normal text-lg lg:text-[22px] lg:leading-[34px] mt-4"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              {description}
            </p>
          </div>

          {/* Action Row (Frame 2087326602) */}
          <div className="flex flex-wrap items-center gap-6 mt-4 w-full">
            {/* Primary Button */}
            <Link
              href={primaryCtaLink}
              className="px-6 h-[59px] bg-[#0F1D07] text-white rounded-[18px] font-bold text-sm lg:text-[16px] flex items-center justify-center hover:scale-105 hover:bg-[#1a330d] transition-all duration-300 select-none cursor-pointer"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              {primaryCtaText}
            </Link>

            {/* Secondary Link with right arrow */}
            <Link
              href={secondaryCtaLink}
              className="group flex items-center gap-2 text-[#0F1D07] font-bold text-sm lg:text-[16px] h-[59px] px-4 select-none cursor-pointer"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              <span>{secondaryCtaText}</span>
              <svg
                width="43"
                height="43"
                viewBox="0 0 43 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 group-hover:translate-x-[6px]"
              >
                <g clipPath="url(#clip-cap-hero-detail)">
                  <path d="M10.6082 21.214H31.8214" stroke="#0F1D07" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23.2031 12.5957L31.821 21.2136L23.2031 29.8314" stroke="#0F1D07" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs>
                  <clipPath id="clip-cap-hero-detail">
                    <rect width="30" height="30" fill="white" transform="translate(21.2148) rotate(45)"/>
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </div>
        </motion.div>

        {/* Right Column: Contact Form Card (Component 163) */}
        <motion.div
          id="contact-form"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="w-full max-w-[688px] bg-white rounded-[16px] shadow-[0px_4px_16px_rgba(0,0,0,0.04)] p-8 md:p-[52px_40px] flex flex-col justify-between items-stretch gap-8 min-h-[737px] border border-[#f0f0f0]"
        >
          <AnimatePresence mode="wait">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col justify-between h-full w-full gap-8">
                {/* Form fields grid */}
                <div className="flex flex-col gap-6 md:gap-8">
                  {/* Row 1: First Name & Last Name */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[40px]">
                    {/* First Name */}
                    <div className="flex flex-col items-start gap-2 w-full">
                      <label
                        className="text-[#120321] text-sm font-normal tracking-wide capitalize"
                        style={{ fontFamily: "var(--font-satoshi)" }}
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder="Name"
                        value={form.firstName}
                        onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                        required
                        className="w-full border-b border-[#120321]/40 py-2 text-[24px] text-[#120321] placeholder-[#B4B4B4] focus:outline-none focus:border-[#3145DD] bg-transparent transition-colors"
                        style={{ fontFamily: "var(--font-satoshi)" }}
                      />
                    </div>

                    {/* Last Name */}
                    <div className="flex flex-col items-start gap-2 w-full">
                      <label
                        className="text-[#120321] text-sm font-normal tracking-wide capitalize"
                        style={{ fontFamily: "var(--font-satoshi)" }}
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="Louis"
                        value={form.lastName}
                        onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                        required
                        className="w-full border-b border-[#120321]/40 py-2 text-[24px] text-[#120321] placeholder-[#B4B4B4] focus:outline-none focus:border-[#3145DD] bg-transparent transition-colors"
                        style={{ fontFamily: "var(--font-satoshi)" }}
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Phone Number */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[40px]">
                    {/* Email */}
                    <div className="flex flex-col items-start gap-2 w-full">
                      <label
                        className="text-[#120321] text-sm font-normal tracking-wide capitalize"
                        style={{ fontFamily: "var(--font-satoshi)" }}
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="Anna.louis@email.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        required
                        className="w-full border-b border-[#120321]/40 py-2 text-[24px] text-[#120321] placeholder-[#B4B4B4] focus:outline-none focus:border-[#3145DD] bg-transparent transition-colors"
                        style={{ fontFamily: "var(--font-satoshi)" }}
                      />
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col items-start gap-2 w-full">
                      <label
                        className="text-[#120321] text-sm font-normal tracking-wide capitalize"
                        style={{ fontFamily: "var(--font-satoshi)" }}
                      >
                        Phone number
                      </label>
                      <input
                        type="tel"
                        placeholder="+91"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full border-b border-[#120321]/40 py-2 text-[24px] text-[#120321] placeholder-[#B4B4B4] focus:outline-none focus:border-[#3145DD] bg-transparent transition-colors"
                        style={{ fontFamily: "var(--font-satoshi)" }}
                      />
                    </div>
                  </div>

                  {/* Row 3: Project Details */}
                  <div className="flex flex-col items-start gap-2 w-full">
                    <label
                      className="text-[#120321] text-sm font-normal tracking-wide capitalize"
                      style={{ fontFamily: "var(--font-satoshi)" }}
                    >
                      Project details
                    </label>
                    <textarea
                      placeholder="Tell us about your project..."
                      rows={1}
                      value={form.projectDetails}
                      onChange={(e) => setForm({ ...form, projectDetails: e.target.value })}
                      required
                      className="w-full border-b border-[#120321]/40 py-2 text-[24px] text-[#120321] placeholder-[#B4B4B4] focus:outline-none focus:border-[#3145DD] bg-transparent resize-none transition-colors"
                      style={{ fontFamily: "var(--font-satoshi)" }}
                    />
                  </div>
                </div>

                {/* Submit button (Component 44) */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full md:w-[207px] h-[59px] bg-[#3145DD] hover:bg-[#2536b8] text-white rounded-[18px] flex items-center justify-center gap-3 transition-all duration-300 font-bold text-sm lg:text-[16px] cursor-pointer disabled:opacity-50 select-none self-start mt-4"
                  style={{ fontFamily: "var(--font-satoshi)" }}
                >
                  <span>{loading ? "Sending..." : "Talk to us"}</span>
                  {!loading && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7M17 7H9M17 7V15" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center text-center h-full gap-6 py-12"
              >
                <div className="w-[80px] h-[80px] rounded-full bg-[#3145DD]/10 flex items-center justify-center text-[#3145DD] mb-2">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-[#0F1D07] text-[28px] font-medium" style={{ fontFamily: "var(--font-delight)" }}>
                  Thank you, {form.firstName}!
                </h3>
                <p className="text-[#0F1D07]/70 text-[18px] max-w-[400px] leading-relaxed" style={{ fontFamily: "var(--font-satoshi)" }}>
                  We have received your project details and our team will get back to you shortly.
                </p>
                <button
                  onClick={() => {
                    setForm({ firstName: "", lastName: "", email: "", phone: "", projectDetails: "" });
                    setSubmitted(false);
                  }}
                  className="text-[#3145DD] font-bold text-base hover:underline mt-4"
                  style={{ fontFamily: "var(--font-satoshi)" }}
                >
                  Submit another inquiry
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
