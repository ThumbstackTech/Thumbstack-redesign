"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-blue snap-start">
      {/* Main Footer Content */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10 md:pb-12 flex flex-col gap-12 md:gap-16">

        {/* Main 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_0.8fr] gap-12 md:gap-16 lg:gap-24">
          
          {/* Column 1 - Say Hi + Socials + Newsletter */}
          <div className="flex flex-col gap-8">
            <h2 
              className="text-white flex flex-row items-center gap-4 whitespace-nowrap"
              style={{
                fontFamily: "var(--font-delight)",
                fontWeight: 600,
                fontSize: "clamp(3rem, 10vw, 152px)",
                lineHeight: "1",
                letterSpacing: "-2%",
              }}
            >
              Say hi!
              <span className="shrink-0 animate-spin-pause w-16 md:w-[120px] inline-block">
                <Image 
                  src="/footercircle.png" 
                  alt="Decorative spinning circle" 
                  width={152} 
                  height={152} 
                  className="w-full h-auto"
                />
              </span>
            </h2>

            <div className="flex flex-col gap-2" style={{ fontFamily: "var(--font-satoshi)" }}>
              <p className="text-white text-base font-medium">Let&apos;s make something amazing together.</p>
              <p className="text-white/60 text-xs max-w-md">Come chat with us — we&apos;ve got coffee (or tea) ready and are always up for a good conversation.</p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-5 text-white">
              {["instagram", "youtube", "facebook", "linkedin"].map((platform) => (
                <a key={platform} href="#" className="hover:text-mint transition-colors opacity-80 hover:opacity-100">
                  {platform === "instagram" && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>}
                  {platform === "youtube" && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2 10 10 0 0 1 15 0 2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2 10 10 0 0 1-15 0 2 2 0 0 1-2-2z" /><path d="m10 15 5-3-5-3z" /></svg>}
                  {platform === "facebook" && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>}
                  {platform === "linkedin" && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>}
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <button
              className="flex items-center justify-between w-full max-w-[320px] px-8 py-4 bg-white rounded-full text-blue text-sm font-bold hover:bg-mint transition-colors mt-4"
              style={{ fontFamily: "var(--font-satoshi)" }}
              suppressHydrationWarning
            >
              Sign up to our newsletter
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Bottom Links */}
            <div className="flex gap-8 mt-auto pt-12" style={{ fontFamily: "var(--font-satoshi)" }}>
              <Link href="#" className="text-white text-xs font-medium hover:underline underline-offset-4">Privacy Policies</Link>
              <Link href="#" className="text-white text-xs font-medium hover:underline underline-offset-4">Terms and Conditions</Link>
            </div>
          </div>

          {/* Column 2 - Contact Details */}
          <div className="flex flex-col gap-10" style={{ fontFamily: "var(--font-satoshi)" }}>
            <h3 className="text-white text-lg font-bold mb-2">Contact</h3>
            
            {[
              { city: "Mumbai (Worli)", phone: "+91 8374938493", address: "Building G and D-1, Zoo Media Pvt. Ltd, Worli, Mumbai, Maharashtra 400013", email: "thumbstack@gmail.com" },
              { city: "Budapest", phone: "+91 8374938493", address: "Building G and D-1, Zoo Media Pvt. Ltd, Worli, Mumbai, Maharashtra 400013", email: "thumbstack@gmail.com" },
              { city: "Dubai", phone: "+91 8374938493", address: "Building G and D-1, Zoo Media Pvt. Ltd, Worli, Mumbai, Maharashtra 400013", email: "thumbstack@gmail.com" }
            ].map((office) => (
              <div key={office.city} className="flex flex-col gap-2">
                <p className="text-white text-sm font-bold">{office.city}</p>
                <a href={`tel:${office.phone}`} className="text-white text-sm font-bold underline underline-offset-4 decoration-white/30 hover:decoration-white">{office.phone}</a>
                <p className="text-white text-[11px] leading-relaxed max-w-[280px] mt-1">{office.address}</p>
                <a href={`mailto:${office.email}`} className="text-white text-[11px] font-bold hover:text-white transition-colors">{office.email}</a>
              </div>
            ))}
          </div>

          {/* Column 3 - Quick Links */}
          <div className="flex flex-col gap-8" style={{ fontFamily: "var(--font-satoshi)" }}>
            <h3 className="text-white text-lg font-bold mb-2">Quick Links</h3>
            <div className="flex flex-col gap-5">
              <Link href="#" className="text-white/80 text-sm font-medium hover:text-mint transition-colors">Fields of play</Link>
              <Link href="#" className="text-white/80 text-sm font-medium hover:text-mint transition-colors">Our Work</Link>
              <Link href="#" className="text-white/80 text-sm font-medium hover:text-mint transition-colors">News & insights</Link>
              <Link href="#" className="text-white/80 text-sm font-medium hover:text-mint transition-colors">About us</Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
