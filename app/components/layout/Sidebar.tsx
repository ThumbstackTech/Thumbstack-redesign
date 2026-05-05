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
        className={`hidden sm:flex fixed top-0 left-0 h-full w-[53px] hover:w-[75px] transition-all duration-300 ease-out z-40 flex-col justify-between items-center py-8 group/sidebar cursor-pointer ${menuOpen ? 'bg-transparent border-none' : 'bg-[#0F1D07] border-r border-[rgba(82,80,80,0.32)] hover:bg-[#3145DD]'
          }`}
      >
        <div className={`flex-1 flex flex-col items-center justify-start mt-8 gap-[300px] w-full pointer-events-none transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}>
          <Link href="/" className="mt-8 pointer-events-auto">
            <h1
              className="text-[#95E7D3] tracking-[-0.02em] rotate-90 whitespace-nowrap cursor-pointer hover:text-white transition-colors duration-300 flex items-end text-center"
              style={{
                fontFamily: "var(--font-nohemi)",
                fontWeight: 500,
                fontSize: "23.3867px",
                lineHeight: "23px"
              }}
            >
              Thumbstack.
            </h1>
          </Link>

          <a href="mailto:hello@thumbstack.co"
            className="text-white rotate-90 whitespace-nowrap opacity-0 group-hover/sidebar:opacity-100 transition-opacity duration-300 underline pointer-events-auto"
            style={{
              fontFamily: "var(--font-satoshi)",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "24px"
            }}
          >
            hey@thumbstack.co
          </a>
        </div>

        <div className={`flex-none mb-8 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}>
          <button
            onClick={(e) => { e.stopPropagation(); setMenuOpen(true); }}
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
      <header className="fixed top-0 left-0 w-full h-[64px] bg-[#0F1D07] sm:hidden flex items-center justify-between px-6 z-50 border-b border-white/10">
        <Link href="/">
          <h1
            className="text-[#95E7D3] tracking-[-0.02em]"
            style={{
              fontFamily: "var(--font-nohemi)",
              fontWeight: 500,
              fontSize: "20px",
              lineHeight: "1"
            }}
          >
            Thumbstack.
          </h1>
        </Link>
        
        <button
          onClick={() => setMenuOpen(true)}
          className="flex flex-col gap-[5px] cursor-pointer focus:outline-none group items-end p-2"
          suppressHydrationWarning
        >
          <span className="block w-6 h-[1.5px] bg-white transition-all duration-300"></span>
          <span className="block w-6 h-[1.5px] bg-white transition-all duration-300"></span>
          <span className="block w-4 h-[1.5px] bg-white transition-all duration-300"></span>
        </button>
      </header>

      {/* Menu Overlay */}
      <div
        className={`fixed inset-0 z-[100] grid grid-cols-1 md:grid-cols-[1.8fr_1fr] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
        onClick={() => setMenuOpen(false)}
      >

        {/* Left Pane - Navigation */}
        <div className="bg-sidebar h-full w-full flex flex-col p-4 sm:p-6 md:p-8 lg:p-10 relative overflow-y-auto scrollbar-hide" onClick={(e) => e.stopPropagation()}>

          {/* Close Button - Matches the open buttons' zones */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 sm:top-auto sm:bottom-12 left-4 sm:left-4 text-white hover:text-mint p-2 transition-colors cursor-pointer z-50"
            suppressHydrationWarning
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Top Logo */}
          <div className="absolute top-6 sm:top-10 left-4 sm:left-10">
            <Link href="/">
              <h2 className="text-mint font-bold text-lg sm:text-xl tracking-tight cursor-pointer hover:text-white transition-colors">
                Thumbstack.
              </h2>
            </Link>
          </div>

          {/* Center Links - Typography matching Nohemi spec */}
          <nav className="flex flex-col gap-2 mt-20 sm:mt-24 mb-auto pl-4 sm:pl-8 md:pl-24">
            {[
              { name: "Fields Of Play", href: "/#fields-of-play" },
              { name: "Our Work", href: "/our-work" },
              { name: "News & Insights", href: "/news-and-insights" },
              { name: "Service", href: "/#service" },
              { name: "About Us", href: "/about-us" }
            ].map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="text-white font-medium tracking-normal hover:text-mint transition-colors w-fit leading-[1.33]"
                style={{
                  fontSize: 'clamp(32px, 8vw, 84px)',
                  fontWeight: 500
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Bottom Controls */}
          <div className="flex justify-end items-end w-full mt-auto relative h-12 gap-4">

            {/* Socials - Pushed to bottom-right corner */}
            <div className="flex gap-2 sm:gap-4 text-white absolute bottom-2 right-2">
              {/* Instagram */}
              <a href="#" className="hover:text-mint transition-colors opacity-80 hover:opacity-100">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              </a>
              {/* YouTube */}
              <a href="#" className="hover:text-mint transition-colors opacity-80 hover:opacity-100">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2 10 10 0 0 1 15 0 2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2 10 10 0 0 1-15 0 2 2 0 0 1-2-2z" /><path d="m10 15 5-3-5-3z" /></svg>
              </a>
              {/* Facebook */}
              <a href="#" className="hover:text-mint transition-colors opacity-80 hover:opacity-100">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="hover:text-mint transition-colors opacity-80 hover:opacity-100">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Pane - Marquee */}
        <div className="bg-[#7A73E4] h-full w-full hidden md:flex items-center justify-center overflow-hidden relative border-l border-white/5 scrollbar-hide">
          <div className="flex gap-2 h-full">
            {/* Vertical Marquee 1 (Moving Up) */}
            <div className="flex flex-col gap-2 animate-[marquee-y-up_50s_linear_infinite] w-[220px]">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-2xl shrink-0">
                  <Image src={i % 2 === 0 ? "/Frame 2085663160.png" : "/Home.png"} alt="UI App" fill sizes="(max-width: 768px) 220px, 220px" className="object-cover" />
                </div>
              ))}
            </div>

            {/* Vertical Marquee 2 (Moving Down) */}
            <div className="flex flex-col gap-2 animate-[marquee-y-down_50s_linear_infinite] w-[220px] mt-[-500px]">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-2xl shrink-0">
                  <Image src={i % 2 === 0 ? "/Store 1.png" : "/Onboarding 7 (1) 1.png"} alt="UI App" fill sizes="(max-width: 768px) 220px, 220px" className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
