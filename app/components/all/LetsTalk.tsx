"use client";

export default function LetsTalk() {
  return (
    <section className="min-h-[100svh] w-full snap-start relative overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/talk.jpg')" }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-24 py-12 sm:py-16 md:py-20 flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-24 items-start">

        {/* Left Side - Headline */}
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 lg:w-2/5 pt-4 sm:pt-6 md:pt-8">
          <span className="text-gray-400 text-xs sm:text-sm font-medium tracking-wide uppercase">Get in touch</span>
          <h2
            className="text-white font-medium tracking-tighter capitalize"
            style={{
              fontFamily: "Nohemi, sans-serif",
              fontSize: "clamp(2.5rem, 8vw, 100.37px)",
              lineHeight: "102px",
              letterSpacing: "0%"
            }}
          >
            Lets<br />Create
          </h2>
          <p
            className="text-gray-400 text-xs sm:text-[13px] leading-relaxed max-w-sm"
            style={{ fontFamily: "var(--font-satoshi)" }}
          >
            Great products begin with simple conversations. Tell us what you&apos;re envisioning — the goals, the gaps, the sparks — and we&apos;ll come back with ideas, clarity, and a way forward that actually moves the needle.
          </p>
        </div>

        {/* Right Side - Form */}
        <div className="flex flex-col gap-10 md:gap-12 w-full lg:w-3/5 pt-4 sm:pt-6 md:pt-8">
          {/* Row 1: First Name + Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            <div className="flex flex-col gap-3">
              <label className="text-gray-500 text-[10px] font-medium uppercase tracking-wider">First Name</label>
              <input
                type="text"
                placeholder="Anna"
                className="bg-transparent border-b border-gray-600 text-white text-sm md:text-base pb-2 md:pb-3 focus:outline-none focus:border-white transition-colors placeholder:text-gray-500"
                suppressHydrationWarning
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-gray-500 text-[10px] font-medium uppercase tracking-wider">Last Name</label>
              <input
                type="text"
                placeholder="Louis"
                className="bg-transparent border-b border-gray-600 text-white text-sm md:text-base pb-2 md:pb-3 focus:outline-none focus:border-white transition-colors placeholder:text-gray-500"
                suppressHydrationWarning
              />
            </div>
          </div>

          {/* Row 2: Email + Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            <div className="flex flex-col gap-3">
              <label className="text-gray-500 text-[10px] font-medium uppercase tracking-wider">Email Address</label>
              <input
                type="email"
                placeholder="Anna.Louis@Email.Com"
                className="bg-transparent border-b border-gray-600 text-white text-sm md:text-base pb-2 md:pb-3 focus:outline-none focus:border-white transition-colors placeholder:text-gray-500"
                suppressHydrationWarning
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-gray-500 text-[10px] font-medium uppercase tracking-wider">Phone Number</label>
              <input
                type="tel"
                placeholder="+91"
                className="bg-transparent border-b border-gray-600 text-white text-sm md:text-base pb-2 md:pb-3 focus:outline-none focus:border-white transition-colors placeholder:text-gray-500"
                suppressHydrationWarning
              />
            </div>
          </div>

          {/* Row 3: Project Details */}
          <div className="flex flex-col gap-3">
            <label className="text-gray-500 text-[10px] font-medium uppercase tracking-wider">Project Details</label>
            <input
              type="text"
              placeholder="Tell Us About Your Project..."
              className="bg-transparent border-b border-gray-600 text-white text-sm md:text-base pb-2 md:pb-3 focus:outline-none focus:border-white transition-colors placeholder:text-gray-500"
              suppressHydrationWarning
            />
          </div>

          {/* Submit Button */}
          <button
            className="self-start mt-2 md:mt-4 px-5 sm:px-6 py-2.5 sm:py-3 bg-blue hover:bg-blue/90 text-white rounded-full font-semibold flex items-center gap-2 sm:gap-3 transition-all hover:scale-105 shadow-lg text-xs sm:text-sm"
            suppressHydrationWarning
          >
            Talk to us
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_6227_81996)">
                <path d="M5 15L15 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.875 5H15V13.125" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs>
                <clipPath id="clip0_6227_81996">
                  <rect width="20" height="20" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
