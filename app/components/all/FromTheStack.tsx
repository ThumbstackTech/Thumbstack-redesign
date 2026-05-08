"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";

function StackCard({ item, idx }: { item: any; idx: number }) {
  return (
    <div
      className="flex flex-col gap-4 sm:gap-6 shrink-0 relative transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group/item w-[280px] sm:w-[400px] md:w-[639px]"
    >
      {/* Card Image Container */}
      <div className="relative rounded-lg sm:rounded-2xl md:rounded-[2rem] overflow-hidden group/card shadow-lg w-[280px] sm:w-[400px] md:w-[639px] h-[200px] sm:h-[300px] md:h-[488px]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 240px, (max-width: 768px) 320px, 480px"
          className="object-cover transition-transform duration-700 group-hover/card:scale-110"
        />
        <div className="absolute inset-0 bg-black/10 group-hover/card:bg-black/0 transition-colors" />

        {/* Logo Overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 sm:w-24 md:w-32 lg:w-40 h-16 sm:h-24 md:h-32 lg:h-40 bg-white/95 rounded-lg sm:rounded-xl md:rounded-[1.5rem] shadow-2xl flex items-center justify-center p-3 sm:p-4 md:p-6 backdrop-blur-md">
          <div className="relative w-full h-full">
            <Image
              src={item.logo}
              alt="Brand Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-col gap-4 md:gap-5">
        <div className="flex justify-between items-start gap-2">
          <h3
            className="text-[10px] sm:text-xs md:text-[18px] lg:text-[20px] tracking-tight text-sidebar"
            style={{
              fontFamily: "var(--font-delight)",
              fontWeight: 400
            }}
          >
            {item.title}
          </h3>
          <span className="px-2 sm:px-3 md:px-5 py-0.5 sm:py-1 bg-blue/10 text-blue text-[10px] sm:text-xs md:text-xs font-medium rounded-full shrink-0">
            {item.tag}
          </span>
        </div>
        <p 
          className="text-black font-medium line-clamp-2"
          style={{ fontSize: "14px", letterSpacing: "0%" }}
        >
          {item.description}
        </p>
        <Link href="#" className="flex items-center gap-1 sm:gap-2 text-black font-medium text-[14px] hover:underline w-fit mt-1">
          Read Case Study
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_6227_81831)">
              <path d="M5 15L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6.875 5H15V13.125" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0_6227_81831">
                <rect width="20" height="20" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default function FromTheStack() {
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Motion values for smooth cursor tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring configuration
  const springConfig = { damping: 25, stiffness: 200 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const stackItems = [
    {
      id: 1,
      image: "/stack1.png",
      logo: "/TSP/logo 1.png",
      title: "Launch: Sunteck Realty Digital Showcase",
      description: "We transformed how a luxury real estate brand tells its story online — blending cinematic design with seamless performance.",
      tag: "Blog"
    },
    {
      id: 2,
      image: "/stack2.png",
      logo: "/TSP/Group.png",
      title: "Launch: Sunteck Realty Digital Showcase",
      description: "We transformed how a luxury real estate brand tells its story online — blending cinematic design with seamless performance.",
      tag: "Article"
    },
    {
      id: 3,
      image: "/stack3.jpg",
      logo: "/TSP/logo-3.png",
      title: "Launch: Sunteck Realty Digital Showcase",
      description: "We transformed how a luxury real estate brand tells its story online — blending cinematic design with seamless performance.",
      tag: "Blog"
    }
  ];

  return (
    <section
      className="min-h-screen w-full flex flex-col justify-center items-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-24 snap-start relative bg-white overflow-hidden"
    >
      <div className="w-full max-w-[1600px] flex flex-col mb-8 sm:mb-12">
        <div className="flex flex-col md:flex-row justify-between items-start w-full gap-6 sm:gap-8">
          <div className="flex flex-col gap-3 sm:gap-4">
            <h2
              className="text-[#0F1D07] font-medium"
              style={{
                fontFamily: "var(--font-delight)",
                fontSize: "clamp(48px, 8vw, 100.369px)",
                lineHeight: "134px",
                letterSpacing: "-2%",
                textTransform: "capitalize",
              }}
            >
              From The Stack
            </h2>
            <p
              className="text-sidebar max-w-5xl"
              style={{
                fontFamily: "var(--font-satoshi)",
                fontWeight: 700,
                fontSize: "16px",
                letterSpacing: "0%",
              }}
            >
              Our latest launches, experiments, and thoughts on what&apos;s shaping design and technology.
            </p>
          </div>
          <Link href="#" className="flex items-center gap-2 text-sidebar font-medium text-xs md:text-base hover:opacity-70 transition-opacity mt-8 md:mt-10 shrink-0 whitespace-nowrap">
            Explore More
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_6227_81744)">
                <path d="M5 15L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.875 5H15V13.125" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs>
                <clipPath id="clip0_6227_81744">
                  <rect width="20" height="20" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </Link>
        </div>
      </div>

      {/* Draggable Carousel */}
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="w-full relative flex overflow-hidden group cursor-none py-4"
      >
        <div className="flex animate-[marquee-x_30s_linear_infinite] group-hover:[animation-play-state:paused]">
          <motion.div 
            drag="x"
            dragConstraints={{ left: -1000, right: 1000 }}
            className="flex gap-4 sm:gap-6 md:gap-8 items-stretch w-max"
          >
            {[...stackItems, ...stackItems].map((item, idx) => (
              <StackCard key={`${item.id}-${idx}`} item={item} idx={idx} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Global Drag Indicator */}
      {isHovering && (
        <motion.div
          style={{
            x: smoothX,
            y: smoothY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          className="fixed top-0 left-0 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-[#A0E2D1]/90 rounded-full flex items-center justify-center text-sidebar font-bold text-xs sm:text-sm md:text-lg backdrop-blur-sm shadow-xl z-[100] pointer-events-none"
        >
          Drag
        </motion.div>
      )}
    </section>
  );
}