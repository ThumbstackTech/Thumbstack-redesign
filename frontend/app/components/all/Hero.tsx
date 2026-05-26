import Link from "next/link";
import Image from "next/image";
import { HeroData } from "../../types/strapi";

interface HeroProps {
  data?: HeroData;
}

export default function Hero({ data }: HeroProps) {
  // Use data from props or fall back to hardcoded defaults
  const titlePrefix = data?.titlePrefix || "Designing";
  const titleMiddle = data?.titleMiddle || "and";
  const titleSuffix = data?.titleSuffix || "building";
  const mainHeadingLine1 = data?.mainHeadingLine1 || "meaningful digital";
  const mainHeadingLine2 = data?.mainHeadingLine2 || "experiences";
  const subtext1 = data?.subtext1 || "We Build The Remarkable, Not The Routine.";
  const subtext2 = data?.subtext2 || "Thoughtfully Crafted. Bold In Execution.";
  const ctaText = data?.ctaText || "View Our Work";
  const ctaLink = data?.ctaLink || "#work";

  return (
    <section className="min-h-screen w-full flex flex-col justify-center pt-[70px] md:pt-[86px] lg:pt-[102px] pb-10 md:pb-12 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 snap-start relative bg-white md:pl-[90px] md:pr-[90px] overflow-x-clip gap-4 md:gap-6">

      {/* Top row */}
      <div className="flex justify-between items-start w-full max-w-[1600px] mx-auto pt-0.5 md:pt-[22px] pb-1 relative z-10">
        <Link
          href="/services"
          className="text-[#0F1D07] flex items-center hover:opacity-70 transition-opacity"
          style={{
            fontFamily: "var(--font-satoshi)",
            fontWeight: 700,
            fontSize: "21px",
            lineHeight: "54px",
            padding: "15px 0px",
            gap: "15px",
            borderRadius: "27px",
          }}
        >
          Our Services
          {/* ArrowRight → icon matching Figma spec */}
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ flexShrink: 0 }}
          >
            {/* Horizontal shaft */}
            <line
              x1="6"
              y1="15"
              x2="24"
              y2="15"
              stroke="#0F1D07"
              strokeWidth="3"
              strokeLinecap="round"
            />
            {/* Arrowhead top arm */}
            <line
              x1="24"
              y1="15"
              x2="16"
              y2="7"
              stroke="#0F1D07"
              strokeWidth="3"
              strokeLinecap="round"
            />
            {/* Arrowhead bottom arm */}
            <line
              x1="24"
              y1="15"
              x2="16"
              y2="23"
              stroke="#0F1D07"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </Link>
      </div>

      {/* Main typography */}
      <div className="w-full max-w-[1600px] mx-auto flex flex-col justify-center relative pb-4 md:pb-6">
        <h1
          className="leading-[1.1] md:leading-[1.15] max-w-full select-none"
          style={{
            fontFamily: "var(--font-delight)",
            fontWeight: 600,
            fontSize: "clamp(32px, 8vw, 135px)",
            letterSpacing: "-0.01em",
            color: "#3145DD",
          }}
        >
          <span className="flex flex-wrap lg:flex-nowrap lg:whitespace-nowrap items-baseline gap-x-2 md:gap-x-5 gap-y-1">
            <span className="bg-mint px-2 py-0.5 sm:py-0 md:px-6 md:pb-3 inline-block">{titlePrefix}</span>
            <span>{titleMiddle}</span>
            <span className="bg-[#3145DD] text-mint px-2 py-0.5 sm:py-0 md:px-6 md:pb-3 inline-block">{titleSuffix}</span>
          </span>

          <span className="block mt-1 md:mt-4">{mainHeadingLine1}</span>
          <span className="block mt-1 md:mt-4">{mainHeadingLine2}</span>
        </h1>

        {/* Sub-text and Decorative Circle */}
        <div className="mt-4 md:mt-6 lg:-mt-10 flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-6 md:gap-8">
          <div className="flex flex-col max-w-[650px] pr-0 md:pr-4">
            <p
              className="capitalize text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px]"
              style={{
                fontFamily: "var(--font-satoshi)",
                fontWeight: 600,
                lineHeight: "1.6",
                color: "#0F1D07",
              }}
            >
              {subtext1}
            </p>
            <p
              className="capitalize text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px]"
              style={{
                fontFamily: "var(--font-satoshi)",
                fontWeight: 600,
                lineHeight: "1.6",
                color: "#0F1D07",
              }}
            >
              {subtext2.split(". ")[0]}. <span className="text-[#3145DD]">{subtext2.split(". ")[1]}</span>
            </p>
          </div>

          {/* Spinning Decorative Circle */}
          <div className="mr-0 md:mr-8 lg:mr-24 hidden lg:block self-end md:self-auto">
            <div className="relative w-20 h-20 md:w-32 md:h-32 lg:w-44 lg:h-44">
              <Image
                src="/circle.png"
                alt="Decorative spinning circle"
                fill
                sizes="(max-width: 768px) 96px, 176px"
                className="object-contain animate-[spin_20s_linear_infinite]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA (View Our Work) */}
      <div className="w-full max-w-[1600px] mx-auto flex justify-center pt-6 md:pt-4 pb-2 md:pb-12 relative z-10">
        <a
          href={ctaLink}
          className="text-[#0F1D07] flex items-center gap-2 md:gap-4 hover:opacity-70 transition-opacity"
          style={{
            fontFamily: "var(--font-satoshi)",
            fontWeight: 500,
            fontSize: "clamp(15px, 2vw, 20px)",
            lineHeight: "1",
            textAlign: "center"
          }}
        >
          {ctaText}
          <svg width="32" height="32" className="w-[28px] h-[28px] md:w-[43px] md:h-[43px]" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_6227_82077)">
              <path d="M21.2124 10.6068V31.82" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M29.8307 23.2017L21.2128 31.8195L12.595 23.2017" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_6227_82077">
                <rect width="30" height="30" fill="white" transform="translate(42.4264 21.2134) rotate(135)" />
              </clipPath>
            </defs>
          </svg>
        </a>
      </div>
    </section>
  );
}