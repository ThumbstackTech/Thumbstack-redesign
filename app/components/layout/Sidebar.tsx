"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
              Thumbstack.
            </h1>
          </Link>

          <a
            href="mailto:hello@thumbstack.co"
            className="text-white rotate-90 whitespace-nowrap opacity-0 group-hover/sidebar:opacity-100 transition-opacity duration-300 underline pointer-events-auto"
            style={{
              fontFamily: "var(--font-satoshi)",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "24px",
            }}
          >
            hey@thumbstack.co
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
          <h1 className="text-[#95E7D3] font-medium text-[22px] tracking-tight">Thumbstack.</h1>
        </Link>

        <button onClick={() => setMenuOpen(true)} className="p-2" aria-label="Open Menu">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <line x1="4" y1="12" x2="20" y2="12"></line>
            <line x1="4" y1="6" x2="20" y2="6"></line>
            <line x1="4" y1="18" x2="14" y2="18"></line>
          </svg>
        </button>
      </header>

      {/* Menu Overlay */}
      <div className={`fixed inset-0 z-[9999] grid grid-cols-1 md:grid-cols-[1.8fr_1fr] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        {/* Left Pane - Navigation */}
        <div className="bg-[#0F1D07] h-full w-full flex flex-col relative overflow-y-auto scrollbar-hide px-6 py-8 sm:p-10" onClick={(e) => e.stopPropagation()}>
          {/* Top Row for Mobile: Logo and Close Button */}
          <div className="flex justify-between items-center w-full mb-12 sm:absolute sm:top-10 sm:left-10 sm:block">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              <h2 className="text-[#95E7D3] font-bold text-xl tracking-tight">Thumbstack.</h2>
            </Link>

            {/* Close Button - Positioned top right on mobile, fixed bottom left on desktop */}
            <button
              onClick={() => setMenuOpen(false)}
              className="sm:fixed sm:bottom-[64px] sm:left-[10.5px] text-white hover:text-[#95E7D3] transition-colors z-[10000]"
              aria-label="Close Menu"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-4 sm:gap-2 mt-4 sm:mt-24 md:pl-24">
            {[
              { name: "Fields Of Play", href: "/#fields-of-play" },
              { name: "Our Work", href: "/our-work" },
              { name: "News & Insights", href: "/news-and-insights" },
              { name: "Service", href: "/#service" },
              { name: "About Us", href: "/about-us" },
            ].map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-white font-medium hover:text-[#95E7D3] transition-colors w-fit leading-[1.1]"
                style={{
                  fontSize: "clamp(38px, 9vw, 84px)",
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Socials & Email - Visible on mobile bottom */}
          <div className="mt-auto pt-10 flex flex-col gap-6 sm:hidden">
            <a href="mailto:hey@thumbstack.co" className="text-[#95E7D3] text-lg underline">
              hey@thumbstack.co
            </a>
            <div className="flex gap-6 text-white/60">
              <span className="hover:text-white cursor-pointer">Instagram</span>
              <span className="hover:text-white cursor-pointer">LinkedIn</span>
            </div>
          </div>
        </div>

        {/* Right Pane - Marquee (Desktop Only) */}
        <div className="bg-[#7A73E4] h-full w-full hidden md:flex items-center justify-center overflow-hidden relative border-l border-white/5">
          <div className="flex gap-2 h-full">
            <div className="flex flex-col gap-2 animate-[marquee-y-up_50s_linear_infinite] w-[220px]">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-2xl shrink-0">
                  <Image src={i % 2 === 0 ? "/Frame 2085663160.png" : "/Home.png"} alt="UI" fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}