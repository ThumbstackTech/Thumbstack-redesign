"use client";

import Image from "next/image";
import Link from "next/link";
import { getStrapiImageUrl, WorkItemComponent } from "@/lib/strapi";

interface WorkItemProps {
  data?: WorkItemComponent;
}

export default function WorkItem({ data }: WorkItemProps) {
  if (!data) return null;

  return (
    <section className="w-full bg-white overflow-hidden py-8 md:py-16 lg:py-0 lg:pl-[53px]">
      <div className="w-full max-w-[1502px] mx-auto flex flex-col lg:flex-row lg:items-stretch gap-8 lg:gap-[50px] px-4 md:px-8 lg:px-0">
        {/* Left Side: Featured Image (Frame 2085663066) */}
        <div className="relative w-full lg:w-[42%] xl:w-[640px] h-[300px] sm:h-[450px] md:h-[600px] lg:h-auto flex-shrink rounded-2xl lg:rounded-none overflow-hidden">
          <Image
            src={getStrapiImageUrl(data.featuredImage) || "/stack2.jpg"}
            alt="Case study featured project"
            fill
            priority
            unoptimized
            className="object-cover"
          />
          {/* Overlay effect from Figma specs */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Play Button (Frame 2085663067) - Centered */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[55px] h-[55px] sm:w-[72.95px] sm:h-[72.95px] rounded-full flex items-center justify-center cursor-pointer transition-transform hover:scale-105 shadow-xl"
            style={{ backgroundColor: data.playButtonColor || "#FDEBEB" }}
          >
            <svg width="24" height="24" className="sm:w-[33px] sm:h-[33px]" viewBox="0 0 24 24" fill="#000000" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5V19L19 12L8 5Z" />
            </svg>
          </div>
        </div>

        {/* Right Side: Content (Frame 2087326363) */}
        <div className="flex flex-col flex-1 items-start justify-center py-6 lg:py-12 lg:pr-8 xl:pr-0 w-full lg:w-[58%] xl:w-[812px]">
          <div className="flex flex-col w-full max-w-[664px] gap-8 sm:gap-12 lg:gap-[60px] xl:gap-[104px]">

            {/* Top Content (Frame 2087326716) */}
            <div className="flex flex-col gap-[20px]">
              {/* Tags (Frame 2087326541) */}
              <div className="flex flex-wrap gap-[10px] md:gap-[24px]">
                {(Array.isArray(data.tags) ? data.tags : []).map((tag: any) => {
                  const tagLabel = typeof tag === 'string' ? tag : tag?.label || '';
                  return (
                    <span
                      key={tagLabel}
                      className="px-[18px] py-[10px] border border-[#0F1D07] rounded-[12px] text-[14px] leading-[22px] font-medium tracking-[-0.02em] h-[42px] flex items-center justify-center"
                      style={{ fontFamily: "var(--font-delight)", color: "#0F1D07" }}
                    >
                      {tagLabel}
                    </span>
                  );
                })}
              </div>

              {/* Main Heading */}
              <h2
                className="font-medium capitalize text-[28px] leading-[36px] sm:text-[44px] sm:leading-[54px] lg:text-[56px] lg:leading-[72px]"
                style={{
                  fontFamily: "var(--font-nohemi)",
                  fontWeight: 500,
                  color: "#0F1D07",
                  maxWidth: "623px",
                  width: "100%",
                }}
              >
                {data.subtitle.split('\n').map((line: string, i: number) => (
                  <span key={i} className="block lg:inline">
                    {line}
                    {i < data.subtitle.split('\n').length - 1 && <br className="hidden lg:block" />}
                  </span>
                ))}
              </h2>
            </div>

            {/* Bottom Content (Frame 2087326651) */}
            <div className="flex flex-col gap-[32px] w-full">
              <div className="flex flex-col gap-[20px]">
                {/* Quote */}
                <p
                  className="text-[20px] leading-[30px] sm:text-[24px] sm:leading-[36px] lg:text-[28px] lg:leading-[42px] font-medium capitalize"
                  style={{ fontFamily: "var(--font-delight)", color: "#0F1D07" }}
                >
                  &ldquo;{data.quote}&rdquo;
                </p>

                {/* Client Info (Frame 2087326647) */}
                <div className="flex flex-col gap-[6px]">
                  <p className="text-[18px] leading-[24px] font-bold text-[#0F1D07]" style={{ fontFamily: "var(--font-satoshi)" }}>
                    {data.clientName}
                  </p>
                  <p className="text-[16px] leading-[22px] font-medium uppercase text-[#616161]" style={{ fontFamily: "var(--font-satoshi)" }}>
                    {data.clientTitle}, {data.clientCompany}
                  </p>
                </div>

                {/* Red Logo Text */}
                <div
                  className="text-[24px] sm:text-[28px] lg:text-[32px] font-bold tracking-[0.05em]"
                  style={{ fontFamily: "var(--font-nohemi)", color: data.companyLogoColor || "#D9443E" }}
                >
                  {data.companyLogo}
                </div>
              </div>

              {/* CTA Button (Component 44) */}
              <Link
                href={data.ctaLink || "#"}
                className="flex items-center justify-center gap-[10px] px-6 py-[10px] w-full sm:w-[239px] h-[59px] rounded-[18px] transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#0F1D07" }}
              >
                <span className="text-[21px] leading-[54px] font-bold text-white" style={{ fontFamily: "var(--font-satoshi)" }}>
                  {data.ctaText || "Start your story"}
                </span>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7V17M17 7H7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}