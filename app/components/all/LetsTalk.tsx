"use client";

import { useState, FormEvent } from "react";

interface LetsTalkProps {
  data?: {
    title?: string;
    tagline?: string;
    description?: string;
    bgImage?: {
      url?: string;
      data?: {
        attributes?: {
          url?: string;
        };
      };
    };
  };
}

export default function LetsTalk({ data }: LetsTalkProps = {}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [projectDetails, setProjectDetails] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const title = data?.title || "Lets Create";
  const tagline = data?.tagline || "Get in touch";
  const description = data?.description || "Great products begin with simple conversations. Tell us what you're envisioning — the goals, the gaps, the sparks — and we'll come back with ideas, clarity, and a way forward that actually moves the needle.";
  
  // Resolve background image
  let bgImageUrl = "/talk.jpg";
  if (data?.bgImage) {
    const rawUrl = (data.bgImage as any).url || (data.bgImage as any).data?.attributes?.url;
    if (rawUrl) {
      bgImageUrl = rawUrl.startsWith("http") ? rawUrl : `http://localhost:1337${rawUrl}`;
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!firstName || !email) {
      setStatus("error");
      setErrorMessage("First Name and Email Address are required.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          projectDetails,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        // Reset form
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setProjectDetails("");
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage("Failed to send message. Please check your connection.");
    }
  };

  return (
    <section className="min-h-[100svh] w-full snap-start relative overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${bgImageUrl}')` }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-24 py-12 sm:py-16 md:py-20 flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-24 items-start">

        {/* Left Side - Headline */}
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 lg:w-2/5 pt-4 sm:pt-6 md:pt-8">
          <span className="text-white text-xs sm:text-sm font-medium tracking-wide">{tagline}</span>
          <h2
            className="text-white font-medium tracking-tighter capitalize"
            style={{
              fontFamily: "Nohemi, sans-serif",
              fontSize: "clamp(2.5rem, 8vw, 100.37px)",
              lineHeight: "102px",
              letterSpacing: "0%"
            }}
            dangerouslySetInnerHTML={{ __html: title.replace("\n", "<br />").replace("Lets ", "Lets<br />") }}
          />
          <p
            className="text-white text-xs sm:text-[13px] leading-relaxed max-w-sm"
            style={{ fontFamily: "var(--font-satoshi)" }}
          >
            {description}
          </p>
        </div>

        {/* Right Side - Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-10 md:gap-12 w-full lg:w-3/5 pt-4 sm:pt-6 md:pt-8">
          {/* Row 1: First Name + Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            <div className="flex flex-col gap-3">
              <label className="text-white text-[10px] font-medium uppercase tracking-wider">First Name *</label>
              <input
                type="text"
                placeholder="Anna"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="bg-transparent border-b border-gray-600 text-white text-sm md:text-base pb-2 md:pb-3 focus:outline-none focus:border-white transition-colors placeholder:text-gray-500"
                suppressHydrationWarning
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-white text-[10px] font-medium uppercase tracking-wider">Last Name</label>
              <input
                type="text"
                placeholder="Louis"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="bg-transparent border-b border-gray-600 text-white text-sm md:text-base pb-2 md:pb-3 focus:outline-none focus:border-white transition-colors placeholder:text-gray-500"
                suppressHydrationWarning
              />
            </div>
          </div>

          {/* Row 2: Email + Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            <div className="flex flex-col gap-3">
              <label className="text-white text-[10px] font-medium uppercase tracking-wider">Email Address *</label>
              <input
                type="email"
                placeholder="Anna.Louis@Email.Com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-transparent border-b border-gray-600 text-white text-sm md:text-base pb-2 md:pb-3 focus:outline-none focus:border-white transition-colors placeholder:text-gray-500"
                suppressHydrationWarning
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-white text-[10px] font-medium uppercase tracking-wider">Phone Number</label>
              <input
                type="tel"
                placeholder="+91"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-transparent border-b border-gray-600 text-white text-sm md:text-base pb-2 md:pb-3 focus:outline-none focus:border-white transition-colors placeholder:text-gray-500"
                suppressHydrationWarning
              />
            </div>
          </div>

          {/* Row 3: Project Details */}
          <div className="flex flex-col gap-3">
            <label className="text-white text-[10px] font-medium uppercase tracking-wider">Project Details</label>
            <input
              type="text"
              placeholder="Tell Us About Your Project..."
              value={projectDetails}
              onChange={(e) => setProjectDetails(e.target.value)}
              className="bg-transparent border-b border-gray-600 text-white text-sm md:text-base pb-2 md:pb-3 focus:outline-none focus:border-white transition-colors placeholder:text-gray-500"
              suppressHydrationWarning
            />
          </div>

          {/* Submit Button & Messages */}
          <div className="flex flex-col gap-4">
            <button
              type="submit"
              disabled={status === "loading"}
              className="self-start px-8 py-3.5 bg-[#3145DD] hover:bg-[#3145DD]/90 text-white rounded-full font-semibold flex items-center gap-3 transition-all hover:scale-105 shadow-lg text-sm disabled:opacity-50 disabled:hover:scale-100 disabled:scale-100"
              suppressHydrationWarning
            >
              {status === "loading" ? "Sending..." : "Talk to us"}
              {status !== "loading" && (
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
              )}
            </button>

            {status === "success" && (
              <p className="text-[#95E7D3] text-sm font-semibold mt-2" style={{ fontFamily: "var(--font-satoshi)" }}>
                Thank you! Your message has been sent successfully. We will get back to you shortly.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm font-semibold mt-2" style={{ fontFamily: "var(--font-satoshi)" }}>
                {errorMessage}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
