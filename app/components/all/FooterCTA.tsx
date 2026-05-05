"use client";

export default function FooterCTA() {
  return (
    <footer className="min-h-[100svh] w-full flex flex-col snap-start relative">
      {/* Top Half: Mint Green */}
      <div className="flex-1 w-full bg-mint flex items-center justify-center py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-24">
        <div className="w-full max-w-[1600px] flex flex-col items-center">
          <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-[8.5vw] font-bold tracking-tighter text-sidebar text-center leading-[0.9]">
            Build Your Stack.
          </h2>
          <p className="mt-4 sm:mt-6 md:mt-8 text-sidebar/80 font-medium text-xs sm:text-sm md:text-base lg:text-lg text-center max-w-xs sm:max-w-sm md:max-w-lg">
            The final element to tie your entire brand architecture down to the tee.
          </p>
          <a href="#contact" className="mt-8 sm:mt-12 md:mt-16 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-sidebar text-white rounded-full font-bold shadow-2xl hover:scale-105 transition-transform flex items-center gap-2 text-xs sm:text-sm md:text-base">
            Start A Project
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom Half: Dark Green */}
      <div className="flex-1 w-full bg-sidebar flex flex-col items-center justify-center py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-24 relative overflow-hidden">
        {/* Subtle decorative background shapes */}
        <div className="absolute w-[60vw] h-[60vw] rounded-full bg-white/[0.02] -bottom-[30vw] -right-[20vw] pointer-events-none"></div>
        <div className="absolute w-[40vw] h-[40vw] rounded-full bg-white/[0.02] -top-[20vw] -left-[10vw] pointer-events-none"></div>

        <div className="w-full max-w-[1600px] flex flex-col items-center z-10">
          <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-[10vw] font-bold tracking-tighter text-white text-center leading-[0.9]">
            Lets Create<span className="text-mint">.</span>
          </h2>
          
          <div className="mt-12 sm:mt-16 md:mt-24 w-full flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm font-medium text-gray-500 border-t border-gray-800 pt-6 sm:pt-8 gap-3 sm:gap-4">
            <div className="flex gap-4 sm:gap-6 md:gap-8 text-center sm:text-left">
              <a href="#" className="hover:text-mint transition-colors">Instagram</a>
              <a href="#" className="hover:text-mint transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-mint transition-colors">Twitter</a>
            </div>
            
            <p className="text-center sm:text-right">© {new Date().getFullYear()} Thumbstack. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
