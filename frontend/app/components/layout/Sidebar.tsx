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
    { label: "Capabilities", url: "/#fields-of-play" },
    { label: "Our Work", url: "/our-work" },
    { label: "News & Insights", url: "/news-and-insights" },
    { label: "Service", url: "/#service" },
    { label: "About Us", url: "/about-us" },
  ];

  const links = data?.links && data.links.length > 0
    ? data.links.map(l => {
      let url = l.url || "";
      if (url && !url.startsWith("/") && !url.startsWith("#") && !url.startsWith("mailto:") && !url.startsWith("http") && !url.startsWith("https")) {
        url = `/${url}`;
      }
      return { label: l.label, url };
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
            <line x1="4" y1="12" x2="20" y2="12"></line>
            <line x1="4" y1="6" x2="20" y2="6"></line>
            <line x1="4" y1="18" x2="14" y2="18"></line>
          </svg>
        </button>
      </header>

      {/* Menu Overlay */}
      <div className={`fixed inset-0 z-[9999] grid grid-cols-1 md:grid-cols-[1.8fr_1fr] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${menuOpen ? "translate-x-0" : "-translate-x-full"}`} suppressHydrationWarning>
        {/* Left Pane - Navigation */}
        <div className="bg-[#0F1D07] h-full w-full flex flex-col relative overflow-y-auto scrollbar-hide px-8 py-8 sm:p-10" onClick={(e) => e.stopPropagation()}>
          {/* Top Row for Mobile: Logo and Close Button - Optimized for pixel-perfect alignment with the header */}
          <div className="flex justify-between items-center h-[70px] px-6 mb-12 sm:h-auto sm:px-0 sm:absolute sm:top-10 sm:left-10 sm:block -mx-8 sm:mx-0 w-[calc(100%+64px)] sm:w-full">
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
          <div className="mt-auto pt-10 flex flex-col gap-8">
            <div className="flex justify-end pr-4">
              <svg width="140" height="27" viewBox="0 0 140 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g style={{ mixBlendMode: 'luminosity' }}>
                  <g clipPath="url(#clip0_4628_4117)">
                    <path d="M6.6672 13.5C6.6672 11.6591 8.15912 10.1664 10 10.1664C11.8409 10.1664 13.3336 11.6591 13.3336 13.5C13.3336 15.3409 11.8409 16.8336 10 16.8336C8.15912 16.8336 6.6672 15.3409 6.6672 13.5ZM4.86512 13.5C4.86512 16.336 7.164 18.6349 10 18.6349C12.836 18.6349 15.1349 16.336 15.1349 13.5C15.1349 10.664 12.836 8.36512 10 8.36512C7.164 8.36512 4.86512 10.664 4.86512 13.5ZM14.1382 8.16152C14.1381 8.39886 14.2084 8.63089 14.3401 8.82829C14.4719 9.02568 14.6593 9.17956 14.8785 9.27047C15.0977 9.36138 15.339 9.38524 15.5718 9.33904C15.8046 9.29283 16.0185 9.17862 16.1863 9.01087C16.3542 8.84311 16.4686 8.62934 16.515 8.39658C16.5614 8.16382 16.5377 7.92253 16.447 7.70322C16.3563 7.48392 16.2025 7.29644 16.0052 7.1645C15.808 7.03257 15.576 6.9621 15.3386 6.962H15.3382C15.02 6.96215 14.715 7.08856 14.49 7.31347C14.265 7.53837 14.1384 7.84339 14.1382 8.16152ZM5.96 21.6398C4.98504 21.5954 4.45512 21.433 4.10296 21.2958C3.63608 21.114 3.30296 20.8975 2.95272 20.5478C2.60248 20.198 2.38568 19.8652 2.20472 19.3983C2.06744 19.0463 1.90504 18.5162 1.86072 17.5413C1.81224 16.4872 1.80256 16.1706 1.80256 13.5001C1.80256 10.8296 1.81304 10.5138 1.86072 9.45888C1.90512 8.48392 2.06872 7.95488 2.20472 7.60184C2.38648 7.13496 2.60296 6.80184 2.95272 6.4516C3.30248 6.10136 3.63528 5.88456 4.10296 5.7036C4.45496 5.56632 4.98504 5.40392 5.96 5.3596C7.01408 5.31112 7.33072 5.30144 10 5.30144C12.6693 5.30144 12.9862 5.31192 14.0412 5.3596C15.0162 5.404 15.5452 5.5676 15.8982 5.7036C16.3651 5.88456 16.6982 6.10184 17.0485 6.4516C17.3987 6.80136 17.6147 7.13496 17.7965 7.60184C17.9338 7.95384 18.0962 8.48392 18.1405 9.45888C18.189 10.5138 18.1986 10.8296 18.1986 13.5001C18.1986 16.1706 18.189 16.4863 18.1405 17.5413C18.0961 18.5162 17.9329 19.0462 17.7965 19.3983C17.6147 19.8652 17.3982 20.1983 17.0485 20.5478C16.6987 20.8972 16.3651 21.114 15.8982 21.2958C15.5462 21.433 15.0162 21.5954 14.0412 21.6398C12.9871 21.6882 12.6705 21.6979 10 21.6979C7.32952 21.6979 7.01376 21.6882 5.96 21.6398ZM5.8772 3.56056C4.81264 3.60904 4.0852 3.77784 3.44992 4.02504C2.792 4.28032 2.23504 4.6228 1.67848 5.17848C1.12192 5.73416 0.78032 6.292 0.52504 6.94992C0.27784 7.5856 0.10904 8.31264 0.06056 9.3772C0.01128 10.4434 0 10.7843 0 13.5C0 16.2157 0.01128 16.5566 0.06056 17.6228C0.10904 18.6874 0.27784 19.4144 0.52504 20.0501C0.78032 20.7076 1.122 21.2661 1.67848 21.8215C2.23496 22.377 2.792 22.719 3.44992 22.975C4.0864 23.2222 4.81264 23.391 5.8772 23.4394C6.944 23.4879 7.28432 23.5 10 23.5C12.7157 23.5 13.0566 23.4887 14.1228 23.4394C15.1874 23.391 15.9144 23.2222 16.5501 22.975C17.2076 22.719 17.765 22.3772 18.3215 21.8215C18.8781 21.2658 19.219 20.7076 19.475 20.0501C19.7222 19.4144 19.8918 18.6874 19.9394 17.6228C19.9879 16.5558 19.9992 16.2157 19.9992 13.5C19.9992 10.7843 19.9879 10.4434 19.9394 9.3772C19.891 8.31256 19.7222 7.5852 19.475 6.94992C19.219 6.2924 18.8772 5.73504 18.3215 5.17848C17.7658 4.62192 17.2076 4.28032 16.5509 4.02504C15.9144 3.77784 15.1874 3.60824 14.1236 3.56056C13.0574 3.51208 12.7165 3.5 10.0008 3.5C7.28512 3.5 6.944 3.51128 5.8772 3.56056Z" fill="#FEF7FF" />
                    <path d="M6.6672 13.5C6.6672 11.6591 8.15912 10.1664 10 10.1664C11.8409 10.1664 13.3336 11.6591 13.3336 13.5C13.3336 15.3409 11.8409 16.8336 10 16.8336C8.15912 16.8336 6.6672 15.3409 6.6672 13.5ZM4.86512 13.5C4.86512 16.336 7.164 18.6349 10 18.6349C12.836 18.6349 15.1349 16.336 15.1349 13.5C15.1349 10.664 12.836 8.36512 10 8.36512C7.164 8.36512 4.86512 10.664 4.86512 13.5ZM14.1382 8.16152C14.1381 8.39886 14.2084 8.63089 14.3401 8.82829C14.4719 9.02568 14.6593 9.17956 14.8785 9.27047C15.0977 9.36138 15.339 9.38524 15.5718 9.33904C15.8046 9.29283 16.0185 9.17862 16.1863 9.01087C16.3542 8.84311 16.4686 8.62934 16.515 8.39658C16.5614 8.16382 16.5377 7.92253 16.447 7.70322C16.3563 7.48392 16.2025 7.29644 16.0052 7.1645C15.808 7.03257 15.576 6.9621 15.3386 6.962H15.3382C15.02 6.96215 14.715 7.08856 14.49 7.31347C14.265 7.53837 14.1384 7.84339 14.1382 8.16152ZM5.96 21.6398C4.98504 21.5954 4.45512 21.433 4.10296 21.2958C3.63608 21.114 3.30296 20.8975 2.95272 20.5478C2.60248 20.198 2.38568 19.8652 2.20472 19.3983C2.06744 19.0463 1.90504 18.5162 1.86072 17.5413C1.81224 16.4872 1.80256 16.1706 1.80256 13.5001C1.80256 10.8296 1.81304 10.5138 1.86072 9.45888C1.90512 8.48392 2.06872 7.95488 2.20472 7.60184C2.38648 7.13496 2.60296 6.80184 2.95272 6.4516C3.30248 6.10136 3.63528 5.88456 4.10296 5.7036C4.45496 5.56632 4.98504 5.40392 5.96 5.3596C7.01408 5.31112 7.33072 5.30144 10 5.30144C12.6693 5.30144 12.9862 5.31192 14.0412 5.3596C15.0162 5.404 15.5452 5.5676 15.8982 5.7036C16.3651 5.88456 16.6982 6.10184 17.0485 6.4516C17.3987 6.80136 17.6147 7.13496 17.7965 7.60184C17.9338 7.95384 18.0962 8.48392 18.1405 9.45888C18.189 10.5138 18.1986 10.8296 18.1986 13.5001C18.1986 16.1706 18.189 16.4863 18.1405 17.5413C18.0961 18.5162 17.9329 19.0462 17.7965 19.3983C17.6147 19.8652 17.3982 20.1983 17.0485 20.5478C16.6987 20.8972 16.3651 21.114 15.8982 21.2958C15.5462 21.433 15.0162 21.5954 14.0412 21.6398C12.9871 21.6882 12.6705 21.6979 10 21.6979C7.32952 21.6979 7.01376 21.6882 5.96 21.6398ZM5.8772 3.56056C4.81264 3.60904 4.0852 3.77784 3.44992 4.02504C2.792 4.28032 2.23504 4.6228 1.67848 5.17848C1.12192 5.73416 0.78032 6.292 0.52504 6.94992C0.27784 7.5856 0.10904 8.31264 0.06056 9.3772C0.01128 10.4434 0 10.7843 0 13.5C0 16.2157 0.01128 16.5566 0.06056 17.6228C0.10904 18.6874 0.27784 19.4144 0.52504 20.0501C0.78032 20.7076 1.122 21.2661 1.67848 21.8215C2.23496 22.377 2.792 22.719 3.44992 22.975C4.0864 23.2222 4.81264 23.391 5.8772 23.4394C6.944 23.4879 7.28432 23.5 10 23.5C12.7157 23.5 13.0566 23.4887 14.1228 23.4394C15.1874 23.391 15.9144 23.2222 16.5501 22.975C17.2076 22.719 17.765 22.3772 18.3215 21.8215C18.8781 21.2658 19.219 20.7076 19.475 20.0501C19.7222 19.4144 19.8918 18.6874 19.9394 17.6228C19.9879 16.5558 19.9992 16.2157 19.9992 13.5C19.9992 10.7843 19.9879 10.4434 19.9394 9.3772C19.891 8.31256 19.7222 7.5852 19.475 6.94992C19.219 6.2924 18.8772 5.73504 18.3215 5.17848C17.7658 4.62192 17.2076 4.28032 16.5509 4.02504C15.9144 3.77784 15.1874 3.60824 14.1236 3.56056C13.0574 3.51208 12.7165 3.5 10.0008 3.5C7.28512 3.5 6.944 3.51128 5.8772 3.56056Z" fill="#FEF7FF" />
                  </g>
                  <g clipPath="url(#clip1_4628_4117)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M63.4733 7.26915C63.1831 6.1808 62.3245 5.32233 61.2322 5.02808C59.2572 4.5 51.3327 4.5 51.3327 4.5C51.3327 4.5 43.4123 4.5 41.4332 5.02808C40.345 5.31827 39.4864 6.17684 39.1921 7.26915C38.6641 9.2442 38.6641 13.3676 38.6641 13.3676C38.6641 13.3676 38.6641 17.4911 39.1921 19.4662C39.4823 20.5545 40.3409 21.413 41.4332 21.7072C43.4123 22.2353 51.3327 22.2353 51.3327 22.2353C51.3327 22.2353 59.2572 22.2353 61.2322 21.7072C62.3206 21.4171 63.179 20.5585 63.4733 19.4662C64.0014 17.4911 64.0014 13.3677 64.0014 13.3677C64.0014 13.3677 64.0014 9.2442 63.4733 7.26915Z" fill="#FEF7FF" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M48.8047 17.1684L55.3869 13.3673L48.8047 9.56641V17.1684Z" fill="#3145DD" />
                  </g>
                  <g clipPath="url(#clip2_4628_4117)">
                    <path d="M92 23.5C97.5228 23.5 102 19.0228 102 13.5C102 7.97715 97.5228 3.5 92 3.5C86.4772 3.5 82 7.97715 82 13.5C82 19.0228 86.4772 23.5 92 23.5Z" fill="white" />
                    <path d="M95.2511 6.57031H93.0359C91.7213 6.57031 90.2591 7.12322 90.2591 9.02878C90.2655 9.69276 90.2591 10.3286 90.2591 11.0443H88.7383V13.4644H90.3062V20.4313H93.1872V13.4184H95.0888L95.2609 11.0375H93.1376C93.1376 11.0375 93.1423 9.97839 93.1376 9.67082C93.1376 8.91778 93.9211 8.96091 93.9683 8.96091C94.3411 8.96091 95.0661 8.96199 95.2522 8.96091V6.57031H95.2511Z" fill="#3145DD" />
                  </g>
                  <g clipPath="url(#clip3_4628_4117)">
                    <path d="M120 4.9307C120 4.13992 120.662 3.49805 121.478 3.49805H138.522C139.338 3.49805 140 4.13992 140 4.9307V22.0656C140 22.8566 139.338 23.498 138.522 23.498H121.478C120.662 23.498 120 22.8567 120 22.0659V4.93047V4.9307Z" fill="white" />
                    <path d="M126.075 20.2371V11.233H123.083V20.2371H126.076H126.075ZM124.58 10.0039C125.623 10.0039 126.273 9.3125 126.273 8.44844C126.253 7.56469 125.623 6.89258 124.6 6.89258C123.575 6.89258 122.906 7.56469 122.906 8.44836C122.906 9.31242 123.556 10.0038 124.56 10.0038H124.579L124.58 10.0039ZM127.732 20.2371H130.725V15.2094C130.725 14.9406 130.744 14.6712 130.823 14.4792C131.039 13.9413 131.532 13.3845 132.359 13.3845C133.441 13.3845 133.875 14.2102 133.875 15.4207V20.2371H136.867V15.0745C136.867 12.3089 135.391 11.022 133.422 11.022C131.808 11.022 131.099 11.9242 130.705 12.5387H130.725V11.2334H127.732C127.771 12.078 127.732 20.2374 127.732 20.2374L127.732 20.2371Z" fill="#3145DD" />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_4628_4117">
                    <rect width="20" height="20" fill="white" transform="translate(0 3.5)" />
                  </clipPath>
                  <clipPath id="clip1_4628_4117">
                    <rect width="26" height="26" fill="white" transform="translate(38 0.5)" />
                  </clipPath>
                  <clipPath id="clip2_4628_4117">
                    <rect width="20" height="20" fill="white" transform="translate(82 3.5)" />
                  </clipPath>
                  <clipPath id="clip3_4628_4117">
                    <rect width="20" height="20.0803" fill="white" transform="translate(120 3.45898)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
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