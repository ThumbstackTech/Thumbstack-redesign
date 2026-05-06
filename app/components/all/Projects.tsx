"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { projects } from "../../data/projects";

interface SideImage {
  src: string;
  alt: string;
}

interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  bg: string;
  barBg: string;
  barBorder: string;
  accentColor: string;
  cursorColor: string;
  websiteUrl: string;
  caseStudyUrl: string;
  layout: "mobile" | "desktop";
  images: {
    main: string;
    mainAlt: string;
    sideTop?: SideImage;
    sideBot?: SideImage;
    sideImages?: SideImage[];
  };
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const [hovering, setHovering] = useState(false);
  const [modal, setModal] = useState(false);
  const isDesktop = project.layout === "desktop";

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 200 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <div
      className="sticky top-0 h-[100svh] w-full overflow-hidden will-change-transform"
      style={{
        zIndex: index + 1,
        marginTop: index === 0 ? "0" : "-5vh",
        backgroundColor: project.bg,
      }}
    >
      <div
        className="relative h-full w-full flex flex-col"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        onClick={() => {
          if (!modal) setModal(true);
        }}
      >
        <AnimatePresence>
          {modal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 z-[200] flex items-center justify-center p-4 cursor-auto"
              onClick={(e) => {
                e.stopPropagation();
                setModal(false);
              }}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="rounded-3xl p-8 md:p-12 w-full max-w-2xl shadow-2xl relative border border-white/10"
                style={{ backgroundColor: project.bg }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  suppressHydrationWarning
                  className="absolute top-5 left-6 text-2xl leading-none hover:opacity-40 transition-opacity"
                  style={{ color: project.accentColor }}
                  onClick={() => setModal(false)}
                >
                  &times;
                </button>
                <p className="text-xs font-bold tracking-widest uppercase mb-3 text-white/60">{project.name}</p>
                <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight mb-5 text-white">{project.tagline}</h2>

                <div className="mb-8 rounded-[28px] border border-white/20 bg-white/10 p-5 md:p-6">
                  <p className="text-base text-white/85 leading-relaxed">{project.description}</p>
                </div>

                <div className="flex gap-2 flex-wrap mb-8">
                  {project.tags.map((t) => (
                    <span key={t} className="px-4 py-2 rounded-lg text-sm font-semibold bg-white/10 text-white border border-white/10">{t}</span>
                  ))}
                </div>
                <div className="border-t border-white/10 pt-6 flex justify-end">
                  <Link
                    href={project.caseStudyUrl}
                    className="px-8 py-3 bg-white text-black text-sm font-bold rounded-xl hover:opacity-90 transition-opacity"
                  >
                    Full Case Study
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div
          className={`flex-1 min-h-0 relative flex flex-col md:flex-row gap-6 md:gap-12 px-4 md:px-8 lg:pl-[110px] lg:pr-12 pt-4 md:pt-8 pb-4 overflow-hidden w-full max-w-[1600px] mx-auto ${hovering && !modal ? "cursor-none" : ""}`}
        >
          {/* Main Mockup Container - Scales better for all screens */}
          <div className="relative w-full md:w-[50%] lg:w-[55%] h-[45vh] md:h-full lg:h-[110%] flex-shrink-0 rounded-2xl overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)] border border-white/5 z-20 pointer-events-none self-center md:self-auto">
            <Image
              src={project.images.main}
              alt={project.images.mainAlt}
              fill
              priority
              unoptimized
              className={isDesktop ? "object-cover object-top" : "object-cover object-center"}
            />
          </div>

          {/* Side Mockups Container - Better scaling and alignment */}
          <div className="flex gap-4 md:gap-6 flex-1 min-w-0 h-[30vh] md:h-full lg:h-[110%] relative overflow-hidden pointer-events-none justify-center">
            {(() => {
              const displayImages = project.images.sideImages ||
                [project.images.sideTop, project.images.sideBot].filter((img): img is SideImage => !!img);

              if (project.images.sideImages && project.images.sideImages.length >= 2) {
                const mid = Math.ceil(project.images.sideImages.length / 2);
                const col1 = project.images.sideImages.slice(0, mid);
                const col2 = project.images.sideImages.slice(mid);

                return (
                  <>
                    <div className="flex flex-col gap-4 md:gap-6 animate-[marquee-y-up_30s_linear_infinite] w-1/2">
                      {col1.concat(col1).map((img, idx) => (
                        <div key={`col1-${idx}`} className="relative w-full aspect-[4/5] flex-shrink-0">
                          <Image src={img.src} alt={img.alt} fill unoptimized className="object-contain" />
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col gap-4 md:gap-6 animate-[marquee-y-down_30s_linear_infinite] w-1/2 mt-[-100px] md:mt-[-150px]">
                      {col2.concat(col2).map((img, idx) => (
                        <div key={`col2-${idx}`} className="relative w-full aspect-[4/5] flex-shrink-0">
                          <Image src={img.src} alt={img.alt} fill unoptimized className="object-contain" />
                        </div>
                      ))}
                    </div>
                  </>
                );
              }

              return (
                <div className="flex flex-col gap-4 md:gap-6 animate-[marquee-y-up_30s_linear_infinite] w-full max-w-[400px]">
                  {displayImages.concat(displayImages).map((img, idx) => (
                    <div key={idx} className="relative w-full aspect-[4/5] md:aspect-square flex-shrink-0 pointer-events-none">
                      <Image src={img.src} alt={img.alt} fill unoptimized className="object-contain" />
                    </div>
                  ))}
                </div>
              );
            })()}
          </div>

          <AnimatePresence>
            {hovering && !modal && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                className="fixed pointer-events-none z-[100] md:w-24 md:h-24 rounded-full flex items-center justify-center font-medium text-[16px] shadow-2xl select-none will-change-transform hidden md:flex"
                style={{
                  left: smoothX,
                  top: smoothY,
                  translateX: "-50%",
                  translateY: "-50%",
                  backgroundColor: "#95E7D3",
                  color: "#0F1D07",
                  fontFamily: "var(--font-nohemi)",
                }}
              >
                Read
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Info Bar - Optimized for ALL screen sizes */}
        <div
          className="flex-shrink-0 z-40 cursor-auto mx-4 md:ml-[90px] md:mr-8 lg:mr-12 mb-6 md:mb-10 px-4 md:px-8 py-5 md:py-8 md:h-auto min-h-[140px] md:min-h-[160px] w-[calc(100%-2rem)] md:w-[calc(100%-120px)] lg:w-[calc(100%-150px)] max-w-[1600px] rounded-2xl md:rounded-t-[32px] md:rounded-b-none border border-white/10 flex items-center justify-center overflow-hidden self-center md:mx-auto"
          style={{
            backgroundColor:
              project.id === "bft"
                ? "#68807B"
                : project.id === "squlio"
                  ? "#665EE3"
                  : project.bg,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-full max-w-[1300px] flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-12">
            <div className="flex flex-col items-start gap-2 md:gap-4">
              <div className="flex flex-wrap items-start gap-2 md:gap-4">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="h-[32px] md:h-[40px] px-3 md:px-5 border border-white/40 rounded-[12px] text-white text-[11px] md:text-[14px] font-medium flex items-center justify-center whitespace-nowrap"
                    style={{ fontFamily: "var(--font-satoshi)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <h3
                className="text-white tracking-[-0.01em] text-[24px] md:text-[32px] lg:text-[40px] leading-tight font-medium"
                style={{ fontFamily: "var(--font-delight)" }}
              >
                {project.name}
              </h3>
            </div>

            <div className="flex items-center gap-3 md:gap-4 w-full md:w-auto">
              <Link
                href={project.caseStudyUrl}
                className="flex-1 md:flex-none h-[48px] md:h-[56px] md:w-[180px] bg-white rounded-xl flex items-center justify-center text-[13px] md:text-[14px] font-bold text-[#0F1D07] hover:bg-white/90 transition-all"
              >
                Read Case Study
              </Link>

              <Link
                href={project.websiteUrl}
                target="_blank"
                className="flex-1 md:flex-none h-[48px] md:h-[56px] md:w-[180px] rounded-xl flex items-center justify-center gap-2 text-white text-[13px] md:text-[14px] font-bold hover:bg-white/10 transition-all"
              >
                Visit Website
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 19L19 5M19 5V19M19 5H5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div style={{ height: `${projects.length * 100}svh` }}>
      {(projects as Project[]).map((p, i) => (
        <ProjectCard key={p.id} project={p} index={i} />
      ))}
    </div>
  );
}
