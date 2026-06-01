"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { SidebarData } from "../../types/strapi";

export default function Sidebar({ data }: { data?: SidebarData }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const logoText = data?.logoText || "Thumbstack.";
  const email = data?.email || "hey@thumbstack.co";

  const defaultLinks = [
    { label: "Fields Of Play", url: "/#fields-of-play" },
    { label: "Our Work", url: "/our-work" },
    { label: "News & Insights", url: "/news-and-insights" },
    { label: "About Us", url: "/about-us" },
  ];

  const links = data?.links && data.links.length > 0
    ? data.links.map(l => {
      const pageData: any = l.page?.data?.attributes || l.page; // handle both populated and direct formats
      let url = l.url || (pageData?.slug ? `/${pageData.slug}` : "");
      let label = l.label || pageData?.title || "";
      
      if (url && !url.startsWith("/") && !url.startsWith("#") && !url.startsWith("mailto:") && !url.startsWith("http") && !url.startsWith("https")) {
        url = `/${url}`;
      }
      return { label, url };
    })
    : defaultLinks;

  return (
    <>
      {/* Desktop Sidebar - Hidden on mobile */}
      <aside
        onClick={() => setMenuOpen(true)}
        className={`hidden sm:flex fixed top-0 left-0 h-full w-[53px] hover:w-[75px] transition-all duration-300 ease-out z-40 flex-col justify-between items-center py-8 group/sidebar cursor-pointer ${menuOpen ? "bg-transparent border-none" : "bg-[#0F1D07] border-r border-[rgba(82,80,80,0.32)] hover:bg-[#3145DD]"
          }`}
      >
        <div className={`flex-1 flex flex-col items-center justify-start mt-8 gap-[300px] w-full pointer-events-none transition-opacity duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`}>
          <Link href="/" className="mt-8 pointer-events-auto">
            <h1
              className="text-[#95E7D3] tracking-[-0.02em] rotate-90 whitespace-nowrap cursor-pointer hover:text-white transition-colors duration-300 flex items-end text-center"
              style={{
                fontFamily: "var(--font-nohemi)",
                fontWeight: 500,
                fontSize: "23.3867px",
                lineHeight: "23px",
              }}
            >
              {logoText}
            </h1>
          </Link>

          <a
            href={`mailto:${email}`}
            className="text-white rotate-90 whitespace-nowrap opacity-0 group-hover/sidebar:opacity-100 transition-opacity duration-300 underline pointer-events-auto"
            style={{
              fontFamily: "var(--font-satoshi)",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "24px",
            }}
          >
            {email}
          </a>
        </div>

        <div className={`flex-none mb-8 transition-opacity duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(true);
            }}
            className="relative w-[25px] h-[25px] cursor-pointer focus:outline-none group block"
            suppressHydrationWarning
          >
            <div className="absolute left-[15.62%] right-[31.25%] top-[50%] h-[1.5px] bg-white group-hover:bg-[#95E7D3] transition-colors"></div>
            <div className="absolute left-[15.62%] right-[15.62%] top-[25%] h-[1.5px] bg-white group-hover:bg-[#95E7D3] transition-colors"></div>
            <div className="absolute left-[15.62%] right-[15.62%] top-[75%] h-[1.5px] bg-white group-hover:bg-[#95E7D3] transition-colors"></div>
          </button>
        </div>
      </aside>

      {/* Mobile Top Header - Visible only on mobile */}
      <header className="fixed top-0 left-0 w-full h-[70px] bg-[#0F1D07] sm:hidden flex items-center justify-between px-6 z-[50] border-b border-white/5">
        <Link href="/">
          <h1 className="text-[#95E7D3] font-medium text-[22px] tracking-tight">{logoText}</h1>
        </Link>

        {/* Adjusted mr to align button better with right edge on mobile */}
        <button
          onClick={() => setMenuOpen(true)}
          className="p-2 mr-1 hover:opacity-70 transition-opacity"
          aria-label="Open Menu"
          suppressHydrationWarning
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <line x1="4" y1="12" x2="16" y2="12"></line>
            <line x1="4" y1="6" x2="20" y2="6"></line>
            <line x1="4" y1="18" x2="20" y2="18"></line>
          </svg>
        </button>
      </header>

      {/* Menu Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-auto md:inset-0 md:h-full z-[9999] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          menuOpen
            ? "translate-y-0 md:translate-x-0"
            : "-translate-y-full md:translate-y-0 md:-translate-x-full"
        } md:grid md:grid-cols-[1.8fr_1fr]`}
        suppressHydrationWarning
      >
        {/* Left Pane - Navigation */}
        <div className="bg-[#0F1D07] h-auto md:h-full w-full flex flex-col relative overflow-y-auto scrollbar-hide px-8 py-8 sm:p-10" onClick={(e) => e.stopPropagation()}>
          {/* Top Row for Mobile: Logo and Close Button - Optimized for pixel-perfect alignment with the header */}
          <div className="flex justify-between items-center h-[70px] px-6 mb-6 sm:h-auto sm:px-0 sm:absolute sm:top-10 sm:left-10 sm:block -mx-8 sm:mx-0 w-[calc(100%+64px)] sm:w-full">
            <Link href="/" onClick={() => setMenuOpen(false)} className="sm:inline-block">
              <h1 className="text-[#95E7D3] font-medium text-[22px] tracking-tight">{logoText}</h1>
            </Link>

            {/* Close Button - Positioned to exactly overlap the hamburger button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="sm:fixed sm:bottom-[60.5px] sm:left-[10.5px] text-white hover:text-[#95E7D3] transition-colors z-[10000] p-2 mr-1"
              aria-label="Close Menu"
              suppressHydrationWarning
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-4 sm:gap-4 mt-4 sm:mt-24 md:pl-24">
            {links.map((item, idx) => (
              <Link
                key={idx}
                href={item.url}
                onClick={() => setMenuOpen(false)}
                className="text-white font-medium hover:text-[#95E7D3] transition-colors w-fit leading-[1.1]"
                style={{
                  fontSize: "clamp(48px, 10vw, 84px)",
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Socials - Visible at the bottom of navigation */}
          <div className="mt-8 md:mt-auto pt-6 flex gap-6 text-white/70 justify-start">
            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#95E7D3] transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            {/* Youtube */}
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#95E7D3] transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </a>
            {/* Facebook */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#95E7D3] transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            {/* Linkedin */}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#95E7D3] transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>

        {/* Right Pane - Marquee (Desktop Only) */}
        <div className="bg-[#7A73E4] h-full w-full hidden md:flex items-center justify-center overflow-hidden relative border-l border-white/5">
          <div className="flex gap-4 lg:gap-6 h-full pt-10">
            {/* Column 1 - Moving Up */}
            <div className="flex flex-col gap-4 lg:gap-6 animate-[marquee-y-up_50s_linear_infinite] w-[180px] lg:w-[240px]">
              {[...Array(8)].map((_, i) => (
                <div key={`col1-${i}`} className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-2xl shrink-0">
                  <Image src={i % 2 === 0 ? "/Frame 2085663160.png" : "/Home.png"} alt="UI" fill className="object-cover" />
                </div>
              ))}
            </div>

            {/* Column 2 - Moving Down */}
            <div className="flex flex-col gap-4 lg:gap-6 animate-[marquee-y-down_50s_linear_infinite] w-[180px] lg:w-[240px]">
              {[...Array(8)].map((_, i) => (
                <div key={`col2-${i}`} className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-2xl shrink-0">
                  <Image src={i % 2 === 0 ? "/Home.png" : "/Frame 2085663160.png"} alt="UI" fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}