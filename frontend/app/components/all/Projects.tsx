"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { ProjectData } from "../../types/strapi";
import { getStrapiImageUrl } from "@/lib/strapi";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";

interface SideImage {
  src: string;
  alt: string;
}

interface Project {
  id: string | number;
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
    sideImages?: SideImage[];
  };
}

export default function Projects({ data }: { data?: ProjectData[] }) {
  const displayProjects: Project[] = data ? data.map(p => {
    // Handle tags which might be JSON array, object containing array, or string
    let tagsArray: string[] = [];
    if (Array.isArray(p.tags)) {
      tagsArray = p.tags;
    } else if (p.tags && typeof p.tags === 'object') {
      if (Array.isArray((p.tags as any).tags)) {
        tagsArray = (p.tags as any).tags;
      } else {
        tagsArray = Object.values(p.tags).flat().filter(t => typeof t === 'string') as string[];
      }
    } else if (typeof p.tags === 'string' && p.tags.trim() !== '') {
      try {
        const parsed = JSON.parse(p.tags);
        if (Array.isArray(parsed)) {
          tagsArray = parsed;
        } else if (parsed && typeof parsed === 'object') {
          if (Array.isArray(parsed.tags)) {
            tagsArray = parsed.tags;
          } else {
            tagsArray = Object.values(parsed).flat().filter(t => typeof t === 'string') as string[];
          }
        }
      } catch (e) {
        tagsArray = p.tags.split(',').map(t => t.trim());
      }
    }

    // Handle sideImages (Strapi 5 returns array directly, Strapi 4 returns { data: [...] })
    const sideImagesData = Array.isArray(p.sideImages) 
      ? p.sideImages 
      : (p.sideImages as any)?.data?.map((item: any) => item.attributes) || [];

    return {
      id: p.id,
      name: p.name,
      tagline: p.tagline,
      description: p.description,
      tags: tagsArray,
      bg: p.bg || "#000000",
      barBg: p.barBg,
      barBorder: p.barBorder,
      accentColor: p.accentColor || "#FFFFFF",
      cursorColor: p.cursorColor || "#95E7D3",
      websiteUrl: p.websiteUrl || "#",
      caseStudyUrl: p.slug ? `/case-study/${p.slug}` : (p.caseStudyUrl || "#"),
      layout: p.layout || "desktop",
      images: {
        main: getStrapiImageUrl(p.mainImage) || "",
        mainAlt: p.mainImage?.alternativeText || p.name,
        sideImages: sideImagesData.map((img: any) => ({
          src: getStrapiImageUrl(img) || "",
          alt: img.alternativeText || ""
        }))
      }
    };
  }) : [];

  if (displayProjects.length === 0) return null;

  return (
    <section className="w-full bg-white py-24 px-6 md:pl-[53px] md:pr-[53px]">
      <div className="w-full">
        <ScrollStack
          useWindowScroll={true}
          itemDistance={350}
          itemScale={0.04}
          baseScale={0.88}
          itemStackDistance={20}
          stackPosition="0%"
          scaleEndPosition="-50%"
          blurAmount={0}
        >
          {displayProjects.map((p, i) => (
            <ScrollStackItem key={p.id} style={{ height: '850px', borderRadius: '0px 0px 40px 40px' }}>
              <ProjectCard project={p} index={i} />
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
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

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 200 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  // Use the premium Squilio mock up if the main image is not loaded or for high fidelity fallback
  const imageSrc = project.images.main || "/Squilio mock up.png";

  return (
    <div
      className="group relative w-full h-full flex flex-col justify-end overflow-hidden"
      style={{
        backgroundColor: project.bg,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onClick={() => {
        if (!modal) setModal(true);
      }}
    >
      {/* Full Bleed Whole Screen Mockup Image Container */}
      <div className="absolute inset-0 w-full h-full p-4 md:p-6 pb-[160px] md:pb-[210px] pointer-events-none z-10">
        <div className="relative w-full h-full rounded-[24px] overflow-hidden">
          <Image
            src={imageSrc}
            alt={project.images.mainAlt || project.name}
            fill
            priority
            unoptimized
            className="object-cover object-top transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
          />
        </div>
      </div>
      {/* Deep premium dark gradient fade for white text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-15 pointer-events-none" />

      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 z-[200] flex items-center justify-center p-4 cursor-auto"
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
        className={`flex-1 min-h-0 relative flex flex-col justify-end px-4 md:px-8 lg:px-12 pb-[140px] md:pb-[210px] overflow-hidden w-full z-20 ${hovering && !modal ? "cursor-none" : ""}`}
      >
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
                backgroundColor: project.cursorColor || "#95E7D3",
                color: "#0F1D07",
                fontFamily: "var(--font-nohemi)",
              }}
            >
              Read
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Info Bar styled to match Frame 2085663518 */}
      <div
        className="absolute bottom-0 left-0 right-0 z-40 cursor-auto px-6 md:px-12 h-[140px] md:h-[173px] flex items-center justify-center rounded-t-[24px] transition-all"
        style={{
          backgroundColor: project.barBg || "#665EE3",
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
  );
}
