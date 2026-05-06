"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function BuildYourStack() {
  const [step, setStep] = useState(0);
  const [journey, setJourney] = useState<string | null>(null);
  const [product, setProduct] = useState<string | null>(null);
  const [features, setFeatures] = useState<string[]>([]);
  const [timeline, setTimeline] = useState<string | null>(null);
  const [quality, setQuality] = useState<string | null>(null);
  const [support, setSupport] = useState<string | null>(null);
  const [typedIdea, setTypedIdea] = useState("");

  const handleNext = () => setStep(s => Math.min(s + 1, 4));
  const handlePrev = () => setStep(s => Math.max(s - 1, 0));

  // Hide sidebar when form is open
  useEffect(() => {
    const sidebar = document.querySelector('aside') as HTMLElement;
    if (!sidebar) return;

    if (step === 5) {
      document.body.style.overflow = 'hidden';
      sidebar.style.zIndex = '-10';
    } else {
      document.body.style.overflow = 'auto';
      sidebar.style.zIndex = '40';
    }
  }, [step]);

  const toggleFeature = (f: string) => {
    setFeatures(prev =>
      prev.includes(f) ? prev.filter(x => x !== f) : [...prev, f]
    );
  };

  // Common UI components for Steps 1-4
  const renderProgressBar = () => {
    return (
      <div className="flex w-full gap-[15.42px] mb-12 md:mb-16">
        {[1, 2, 3, 4].map(s => (
          <div
            key={s}
            className="flex-1 h-1 transition-all duration-300"
            style={{
              height: "4px",
              borderRadius: "128.511px",
              backgroundColor: s <= step ? "#0F1D07" : "rgba(15, 29, 7, 0.2)",
              flexGrow: 1
            }}
          />
        ))}
      </div>
    );
  };

  const renderBottomNav = () => {
    return (
      <div className="mt-auto pt-8 sm:pt-10 md:pt-12 flex flex-col gap-4 sm:gap-5 md:gap-6">
        {step < 4 && (
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 px-4 py-3 border border-gray-200 rounded-xl bg-white shadow-sm">
              <input
                type="text"
                placeholder="Or just type it out — We want to redesign our e-commerce site and integrate loyalty rewards."
                className="flex-1 outline-none text-sm text-[#111] placeholder:text-gray-400"
                style={{ fontFamily: "var(--font-satoshi)" }}
                value={typedIdea}
                onChange={(e) => setTypedIdea(e.target.value)}
              />
              <button className="w-10 h-10 bg-[#3145DD] text-white rounded-lg flex items-center justify-center shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>
              </button>
            </div>
            <div className="text-xs text-[#111] bg-[#F0F4FF] px-4 py-3 rounded-xl flex items-center gap-2 border border-[#3145DD]/20" style={{ fontFamily: "var(--font-satoshi)", fontWeight: 400, fontSize: "14px" }}>
              <span className="text-[#3145DD] flex shrink-0 items-center justify-center w-4 h-4 border border-[#3145DD] rounded-full text-[9px] font-bold">i</span>
              Don&apos;t worry about the jargon — even &apos;I just need a cool website&apos; works great.
            </div>
          </div>
        )}

        <div className="flex gap-3">
          <button
            onClick={() => setStep(5)}
            className="flex-1 py-3 md:py-4 border-2 border-sidebar rounded-full font-semibold text-sidebar hover:bg-gray-50 transition-colors text-sm md:text-base"
            style={{ fontFamily: "var(--font-satoshi)" }}
          >
            Just want to talk?
          </button>
          <button
            onClick={() => step === 4 ? setStep(5) : handleNext()}
            className="flex-[2] py-3 md:py-4 bg-sidebar text-white rounded-full font-semibold hover:bg-black transition-colors text-sm md:text-base"
            style={{ fontFamily: "var(--font-satoshi)" }}
          >
            {step === 4 ? "Let's Build" : 'Great, Next'}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full relative overflow-hidden bg-[#95E7D3]">
      <AnimatePresence mode="wait">
        {step === 0 ? (
          <motion.section
            key="intro"
            exit={{ x: '-30%', opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="w-full min-h-[80vh] bg-[#95E7D3] flex flex-col items-center justify-center snap-start relative px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 lg:py-32 md:pl-[90px]"
          >
            <div className="flex flex-col items-center justify-center text-center gap-[18px]" style={{ width: "min(757px, 90vw)" }}>
              <h2
                className="text-[#0F1D07] capitalize tracking-tight"
                style={{
                  fontFamily: "var(--font-nohemi)",
                  fontWeight: 500,
                  fontSize: "clamp(48px, 5vw, 114px)",
                  lineHeight: "1",
                }}
              >
                Build Your Stack.
              </h2>
              <p
                className="text-[#0F1D07] max-w-[696px]"
                style={{
                  fontFamily: "var(--font-satoshi)",
                  fontWeight: 700,
                  fontSize: "14px",
                  lineHeight: "30px",
                }}
              >
                A fun little estimator to help you imagine what it&apos;ll take to bring your idea to life. One block at a time.
              </p>
              <button
                onClick={() => setStep(1)}
                suppressHydrationWarning
                className="group mt-6 sm:mt-8 px-5 sm:px-6 py-2.5 sm:py-3 bg-sidebar text-white rounded-xl sm:rounded-2xl flex items-center gap-3 hover:bg-black transition-colors font-medium text-[10px] sm:text-xs"
              >
                <span>Start Building</span>
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  <path
                    d="M7 17L17 7M17 7V16M17 7H8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </motion.section>
        ) : step === 5 ? (
          <motion.section
            key="contact"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-full min-h-screen bg-white flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-16 relative z-50 overflow-y-auto md:pl-[90px]"
          >
            {/* Logo/Icon */}
            <div className="mb-8 sm:mb-10 md:mb-12 relative w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24">
              <Image src="/path.png" alt="Thumbstack Logo" fill className="object-contain" />
            </div>

            <h2
              className="text-sidebar text-center mb-2 sm:mb-3 md:mb-4 tracking-tighter capitalize px-2"
              style={{
                fontFamily: "var(--font-delight)",
                fontWeight: 600,
                fontSize: "clamp(2rem, 6vw, 48px)",
                lineHeight: "1.1",
                letterSpacing: "-2%",
                color: "#0A110D"
              }}
            >
              Your stack is coming together
            </h2>
            <p className="text-center mb-12 sm:mb-16 md:mb-20 px-2" style={{ fontFamily: "var(--font-satoshi)", fontWeight: 400, fontSize: "18px", lineHeight: "39px", color: "#111" }}>Just a few details, and we&apos;ll turn this into something concrete.</p>

            <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-x-8 sm:gap-x-12 md:gap-x-16 gap-y-8 sm:gap-y-10 md:gap-y-12 px-2 sm:px-0">
              <div className="flex flex-col gap-2 sm:gap-3">
                <label className="text-[9px] sm:text-xs md:text-sm font-bold text-gray-400 uppercase tracking-wider" style={{ fontFamily: "var(--font-satoshi)" }}>First Name</label>
                <input type="text" placeholder="Anna" className="w-full border-b border-gray-200 py-3 sm:py-4 outline-none text-lg sm:text-2xl md:text-3xl font-medium text-sidebar placeholder:text-gray-100" style={{ fontFamily: "var(--font-satoshi)" }} />
              </div>
              <div className="flex flex-col gap-2 sm:gap-3">
                <label className="text-[9px] sm:text-xs md:text-sm font-bold text-gray-400 uppercase tracking-wider" style={{ fontFamily: "var(--font-satoshi)" }}>Last Name</label>
                <input type="text" placeholder="Louis" className="w-full border-b border-gray-200 py-3 sm:py-4 outline-none text-lg sm:text-2xl md:text-3xl font-medium text-sidebar placeholder:text-gray-100" style={{ fontFamily: "var(--font-satoshi)" }} />
              </div>
              <div className="flex flex-col gap-2 sm:gap-3">
                <label className="text-[9px] sm:text-xs md:text-sm font-bold text-gray-400 uppercase tracking-wider" style={{ fontFamily: "var(--font-satoshi)" }}>Email Address</label>
                <input type="email" placeholder="Anna.Louis@Email.Com" className="w-full border-b border-gray-200 py-3 sm:py-4 outline-none text-lg sm:text-2xl md:text-3xl font-medium text-sidebar placeholder:text-gray-100" style={{ fontFamily: "var(--font-satoshi)" }} />
              </div>
              <div className="flex flex-col gap-2 sm:gap-3">
                <label className="text-[9px] sm:text-xs md:text-sm font-bold text-gray-400 uppercase tracking-wider" style={{ fontFamily: "var(--font-satoshi)" }}>Phone Number</label>
                <input type="tel" placeholder="+91" className="w-full border-b border-gray-200 py-3 sm:py-4 outline-none text-lg sm:text-2xl md:text-3xl font-medium text-sidebar placeholder:text-gray-100" style={{ fontFamily: "var(--font-satoshi)" }} />
              </div>
              <div className="flex flex-col gap-2 sm:gap-3 md:col-span-2">
                <label className="text-[9px] sm:text-xs md:text-sm font-bold text-gray-400 uppercase tracking-wider" style={{ fontFamily: "var(--font-satoshi)" }}>Project Details</label>
                <input type="text" placeholder="Tell Us About Your Project..." className="w-full border-b border-gray-200 py-3 sm:py-4 outline-none text-lg sm:text-2xl md:text-3xl font-medium text-sidebar placeholder:text-gray-100" style={{ fontFamily: "var(--font-satoshi)" }} />
              </div>
            </div>

            <button className="mt-16 sm:mt-20 px-8 sm:px-12 py-4 sm:py-5 bg-[#0B1510] text-white rounded-full flex items-center gap-3 sm:gap-4 hover:bg-black transition-all font-medium text-xs sm:text-sm md:text-lg group">
              Let&apos;s Take This Forward <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
            </button>

            <button
              onClick={() => setStep(0)}
              className="absolute top-4 sm:top-6 md:top-10 right-4 sm:right-6 md:right-10 w-10 h-10 sm:w-12 sm:h-12 bg-blue/5 text-blue rounded-full flex items-center justify-center hover:bg-blue/10 transition-colors z-50"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
            </button>
          </motion.section>
        ) : (
          <motion.section
            key="form"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="w-full min-h-[80vh] flex flex-col lg:flex-row snap-start bg-[#95E7D3] relative z-10 shadow-2xl md:pl-[90px]"
          >
            {/* Left Column - Form */}
            <div className="w-full lg:w-1/2 min-h-[50vh] lg:min-h-screen bg-white p-4 sm:p-6 md:p-8 lg:p-16 flex flex-col overflow-y-auto">
              {renderProgressBar()}

              {step === 1 && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col flex-1">
                  <h2
                    className="mb-3"
                    style={{
                      fontFamily: "var(--font-delight)",
                      fontWeight: 500,
                      fontSize: "50px",
                      lineHeight: "68px",
                      color: "#0F1D07",
                      width: "550px",
                      display: "flex",
                      alignItems: "center"
                    }}
                  >
                    What kind of a<br />dreamer are you?
                  </h2>
                  <p style={{ fontFamily: "var(--font-satoshi)", fontWeight: 400, fontSize: "14px", lineHeight: "1.6", letterSpacing: "0%", color: "#111" }} className="mb-8">Tell us where you are in your journey — we&apos;ll shape the path around you.</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3 md:gap-4">
                    {[
                      { id: 'startup', title: 'Startup Journey', desc: 'For brands ready to launch or scale online.', icon: '🛍️' },
                      { id: 'ecommerce', title: 'E-Commerce Journey', desc: 'Showcase who you are and why you matter.', icon: '💻' },
                      { id: 'enterprise', title: 'Enterprise Journey', desc: 'Tools, SaaS, internal platforms — all cleanly built.', icon: '📱' },
                      { id: 'unsure', title: 'Not Sure Yet', desc: 'Not sure yet? No problem. We\'ll guide you through it.', icon: '❓' }
                    ].map(opt => (
                      <div
                        key={opt.id}
                        onClick={() => setJourney(opt.id)}
                        className={`p-4 md:p-5 rounded-2xl border cursor-pointer transition-all ${journey === opt.id ? 'border-sidebar bg-sidebar/5' : 'border-gray-200 bg-[#EFF0FC] hover:border-gray-300'}`}
                      >
                        <div className="flex justify-between items-start mb-3">
                          <span className="text-xl">{opt.icon}</span>
                          <button className={`w-6 h-6 rounded-md flex items-center justify-center border text-sm font-bold transition-colors ${journey === opt.id ? 'border-sidebar bg-sidebar text-white' : 'border-gray-300 bg-white text-gray-400'}`}>
                            {journey === opt.id ? '✓' : '+'}
                          </button>
                        </div>
                        <h3 className="font-semibold text-sm mb-1.5 text-sidebar" style={{ fontFamily: "var(--font-satoshi)" }}>{opt.title}</h3>
                        <p className="text-xs text-[#111] leading-relaxed" style={{ fontFamily: "var(--font-satoshi)" }}>{opt.desc}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col flex-1">
                  <h2
                    className="mb-3"
                    style={{
                      fontFamily: "var(--font-delight)",
                      fontWeight: 500,
                      fontSize: "50px",
                      lineHeight: "68px",
                      color: "#0F1D07",
                      width: "550px",
                      display: "flex",
                      alignItems: "center"
                    }}
                  >
                    What do you want<br />to build?
                  </h2>
                  <p style={{ fontFamily: "var(--font-satoshi)", fontWeight: 400, fontSize: "14px", lineHeight: "1.6", letterSpacing: "0%", color: "#111" }} className="mb-8">Every great build starts with a solid foundation. Tell us what you&apos;re building — we&apos;ll stack the rest from there.</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3 md:gap-4">
                    {[
                      { id: 'shopify', title: 'Shopify Store', desc: 'For brands ready to launch or scale online.', icon: '🛍️' },
                      { id: 'marketing', title: 'Marketing Website', desc: 'Showcase who you are and why you matter.', icon: '💻' },
                      { id: 'webapp', title: 'Web App / Dashboard', desc: 'Tools, SaaS, internal platforms — all cleanly built.', icon: '📱' },
                      { id: 'mobile', title: 'Mobile App', desc: 'For when your users live on their phones.', icon: '🌍' }
                    ].map(opt => (
                      <div
                        key={opt.id}
                        onClick={() => setProduct(opt.id)}
                        className={`p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl md:rounded-2xl border-2 cursor-pointer transition-all ${product === opt.id ? 'border-sidebar bg-blue/5' : 'border-gray-100 bg-[#EFF0FC] hover:bg-[#E2E4FF]'}`}
                      >
                        <div className="flex justify-between items-start mb-2 sm:mb-3 md:mb-4">
                          <span className="text-base sm:text-lg md:text-xl">{opt.icon}</span>
                          <button className="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-white shadow-sm flex items-center justify-center border border-gray-200 text-sidebar text-xs sm:text-sm md:text-lg pb-0.5">
                            {product === opt.id ? '✓' : '+'}
                          </button>
                        </div>
                        <h3 className="font-semibold text-xs sm:text-sm md:text-base mb-1 sm:mb-2 text-sidebar" style={{ fontFamily: "var(--font-satoshi)" }}>{opt.title}</h3>
                        <p className="text-[10px] sm:text-xs md:text-sm text-gray-500 leading-relaxed">{opt.desc}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col flex-1">
                  <h2
                    className="mb-3"
                    style={{
                      fontFamily: "var(--font-delight)",
                      fontWeight: 500,
                      fontSize: "50px",
                      lineHeight: "68px",
                      color: "#0F1D07",
                      width: "614px",
                      display: "flex",
                      alignItems: "center"
                    }}
                  >
                    Cool – now tell us what it<br />needs to do
                  </h2>
                  <p style={{ fontFamily: "var(--font-satoshi)", fontWeight: 400, fontSize: "18px", lineHeight: "39px", letterSpacing: "0%", color: "#0F1D07", width: "613px", display: "flex", alignItems: "center" }} className="mb-8">What&apos;s the job this product needs to accomplish?</p>

                  <div className="flex flex-wrap gap-2 sm:gap-2.5 md:gap-3">
                    {[
                      { id: 'design', label: '🧭 Custom Design' },
                      { id: 'payments', label: '🛒 Payments' },
                      { id: 'accounts', label: '👥 User Accounts' },
                      { id: 'admin', label: '📊 Admin Dashboard' },
                      { id: 'language', label: '🌍 Multi-language' },
                      { id: 'integrations', label: '📦 Integrations' },
                      { id: 'ai', label: '🤖 AI Features' },
                      { id: 'cms', label: '🧱 CMS' },
                      { id: 'experiential', label: '✨ Experiential' },
                    ].map(opt => (
                      <button
                        key={opt.id}
                        onClick={() => toggleFeature(opt.id)}
                        className={`px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl border transition-colors text-[10px] sm:text-xs md:text-sm font-medium flex items-center gap-1.5 ${features.includes(opt.id)
                          ? 'border-sidebar bg-sidebar text-white'
                          : 'border-gray-200 bg-white hover:bg-gray-50 text-sidebar'
                          }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col flex-1">
                  <h2
                    className="mb-3"
                    style={{
                      fontFamily: "var(--font-delight)",
                      fontWeight: 500,
                      fontSize: "50px",
                      lineHeight: "68px",
                      color: "#0F1D07",
                      width: "100%",
                      maxWidth: "700px",
                      display: "flex",
                      alignItems: "center"
                    }}
                  >
                    How fast and how fancy ?
                  </h2>
                  <p style={{ fontFamily: "var(--font-satoshi)", fontWeight: 400, fontSize: "14px", lineHeight: "1.6", letterSpacing: "0%", color: "#0F1D07" }} className="mb-8">Be honest — are we sprinting to launch or building to last?</p>

                  <div className="flex flex-col gap-6 sm:gap-7 md:gap-8">
                    {/* Timeline */}
                    <div className="flex flex-col gap-2.5 sm:gap-3 md:gap-4">
                      <h3 className="font-bold text-sidebar text-[10px] sm:text-xs md:text-sm uppercase tracking-wider">Timeline</h3>
                      <div className="flex flex-wrap gap-2 sm:gap-2.5 md:gap-3 border-b border-gray-100 pb-6 sm:pb-7 md:pb-8">
                        {['Quick Launch', 'Mid-range', 'Full Build'].map(opt => (
                          <button
                            key={opt}
                            onClick={() => setTimeline(opt)}
                            className={`px-2.5 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl border transition-colors text-[10px] sm:text-xs md:text-sm font-medium ${timeline === opt ? 'border-sidebar bg-sidebar text-white' : 'border-gray-200 bg-white hover:bg-gray-50 text-sidebar'}`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Quality */}
                    <div className="flex flex-col gap-2.5 sm:gap-3 md:gap-4">
                      <h3 className="font-bold text-sidebar text-[10px] sm:text-xs md:text-sm uppercase tracking-wider">Quality Level</h3>
                      <div className="flex flex-wrap gap-2 sm:gap-2.5 md:gap-3 border-b border-gray-100 pb-6 sm:pb-7 md:pb-8">
                        {['MVP', 'Production-grade', 'Premium Experience'].map(opt => (
                          <button
                            key={opt}
                            onClick={() => setQuality(opt)}
                            className={`px-2.5 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl border transition-colors text-[10px] sm:text-xs md:text-sm font-medium ${quality === opt ? 'border-sidebar bg-sidebar text-white' : 'border-gray-200 bg-white hover:bg-gray-50 text-sidebar'}`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Support */}
                    <div className="flex flex-col gap-2.5 sm:gap-3 md:gap-4">
                      <h3 className="font-bold text-sidebar text-[10px] sm:text-xs md:text-sm uppercase tracking-wider">Support</h3>
                      <div className="flex flex-wrap gap-2 sm:gap-2.5 md:gap-3">
                        {['One-time Project', 'Ongoing Partnership'].map(opt => (
                          <button
                            key={opt}
                            onClick={() => setSupport(opt)}
                            className={`px-2.5 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl border transition-colors text-[10px] sm:text-xs md:text-sm font-medium ${support === opt ? 'border-sidebar bg-sidebar text-white' : 'border-gray-200 bg-white hover:bg-gray-50 text-sidebar'}`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {renderBottomNav()}
            </div>

            {/* Right Column - Preview & Stack */}
            <div className="w-full lg:w-1/2 min-h-[50vh] lg:min-h-screen bg-[#95E7D3] p-8 md:p-12 lg:p-16 flex flex-col relative overflow-hidden">
              {/* Close Button */}
              <button
                onClick={() => setStep(0)}
                className="absolute top-8 right-8 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-sidebar transition-colors z-50 backdrop-blur-sm shadow-sm"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
              </button>

              {/* Preview Content */}
              <div className="flex flex-col items-center justify-center flex-1 z-10 w-full max-w-lg mx-auto pb-48">
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center text-center">
                  <h3 className="text-base md:text-lg font-medium mb-6 text-sidebar text-center" style={{ fontFamily: "var(--font-satoshi)" }}>Nice! We&apos;ve built something like this before 👀</h3>
                  <div className="relative w-full aspect-[16/10] bg-white rounded-lg shadow-2xl overflow-visible mb-6">
                    <Image src="/stack.png" alt="Project preview" fill className="object-cover rounded-lg" />
                    <motion.div
                      drag
                      dragConstraints={{ left: -30, right: 400, top: -30, bottom: 200 }}
                      whileDrag={{ scale: 1.1, cursor: "grabbing" }}
                      className="absolute -left-10 top-1/2 -translate-y-1/2 w-20 h-20 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl text-[13px] font-medium text-sidebar cursor-grab z-20 border border-white"
                      style={{ fontFamily: "var(--font-satoshi)" }}
                    >
                      Preview
                    </motion.div>
                  </div>
                  <p className="text-sidebar/70 text-sm leading-relaxed max-w-sm text-center" style={{ fontFamily: "var(--font-satoshi)", fontWeight: 500 }}>
                    Looks like you&apos;re thinking e-commerce. Here&apos;s how we transformed Siorai&apos;s Shopify store — from cluttered to conversion magic.
                  </p>
                </motion.div>
              </div>

              {/* Stack Visualizer */}
              <div className="absolute bottom-10 left-10 right-10 flex flex-col gap-3 z-20 max-w-lg mx-auto">

                {/* Add Layers Button */}
                <button
                  onClick={() => setStep(3)}
                  className="w-full py-4 px-6 rounded-xl bg-[#B4F1E2] border border-sidebar/10 flex justify-center items-center gap-3 text-sidebar/60 text-sm hover:bg-white/20 transition-colors"
                  style={{ fontFamily: "var(--font-satoshi)" }}
                >
                  <span className="font-medium text-xs tracking-tight uppercase">Add product layers</span>
                  <div className="w-5 h-5 border-2 border-dashed border-sidebar/40 rounded-full flex items-center justify-center text-xs">+</div>
                </button>

                {/* Features/Details Layer */}
                {(features.length > 0 || timeline || quality || support) && (
                  <div className="w-full py-3 px-4 rounded-xl bg-[#39B396] flex justify-between items-center text-white shadow-sm" style={{ fontFamily: "var(--font-satoshi)" }}>
                    <div className="flex flex-wrap gap-2 overflow-hidden">
                      {features.map(f => (
                        <div key={f} className="px-3 py-1.5 bg-[#7DDEC7] rounded-lg text-[10px] font-medium text-sidebar uppercase tracking-tight">
                          {f.replace('-', ' ')}
                        </div>
                      ))}
                      {timeline && <div className="px-3 py-1.5 bg-[#7DDEC7]/50 rounded-lg text-[10px] font-bold text-sidebar uppercase tracking-tight">{timeline}</div>}
                    </div>
                    <button onClick={() => setStep(3)} className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-white/10 shrink-0 ml-2">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                    </button>
                  </div>
                )}

                {/* Base Product Layer */}
                <div className="w-full py-4 px-6 rounded-xl bg-[#4FC9AD] flex justify-between items-center text-white shadow-sm" style={{ fontFamily: "var(--font-satoshi)" }}>
                  <span className="font-bold text-sm tracking-tight">{product ? product.charAt(0).toUpperCase() + product.slice(1).replace('-', ' ') : 'Shopify Store'}</span>
                  <button onClick={() => setStep(2)} className="w-5 h-5 flex items-center justify-center opacity-70 hover:opacity-100">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                  </button>
                </div>

                {/* Journey Layer */}
                <div className="w-full py-4 px-6 rounded-xl bg-[#4EADBA] flex justify-between items-center text-white shadow-sm" style={{ fontFamily: "var(--font-satoshi)" }}>
                  <span className="font-bold text-sm tracking-tight">{journey ? journey.charAt(0).toUpperCase() + journey.slice(1).replace('-', ' ') : 'Startup Journey'}</span>
                  <button onClick={() => setStep(1)} className="w-5 h-5 flex items-center justify-center opacity-70 hover:opacity-100">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                  </button>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
