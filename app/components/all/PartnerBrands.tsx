import Image from "next/image";

const BRAND_LOGOS = [
  "APURA.png",
  "Canton_SCHWYZ_logo_1-removebg-preview 1.png",
  "Frame 72.png",
  "Frame.png",
  "Group 1.png",
  "Group 1321314561-1.png",
  "Group 1321314561.png",
  "Group 1321314562.png",
  "Group 1321314564.png",
  "Group 1321314565.png",
  "Group 1321314566.png",
  "Group 1321314588.png",
  "Group 314-1.png",
  "Group 314.png",
  "Group 585.png",
  "Group.png",
  "Isolation_Mode.png",
  "Jwise logo 1 3.png",
  "WILDPOPPIES-black 1.png",
  "aa358d82ad17b2f6aa666d7fbf7adaec1a0b05cc 2.png",
  "jurassic-world-seeklogo 1.png",
  "logo 1.png",
  "logo 2-1.png",
  "logo 2.png",
  "logo-1.png",
  "logo-2.png",
  "logo-3.png",
  "logo.png",
  "main-logo (1).png",
];

export default function PartnerBrands() {
  return (
    <section className="w-full flex flex-col items-center py-[100px] px-8 lg:px-24 snap-start relative bg-white overflow-hidden">
      <div className="w-full max-w-[1602px] flex flex-col items-center">

        <h2
          className="text-center capitalize mb-[40px] md:mb-[64px]"
          style={{
            fontFamily: "var(--font-delight)",
            fontWeight: 500,
            fontSize: 'clamp(32px, 8vw, 100.37px)',
            letterSpacing: "-0.01em",
            lineHeight: '1.2',
            color: '#0F1D07',
          }}
        >
          Partnered Brands.
        </h2>

        {/* 6-column Grid (Desktop), 3-column Grid (Mobile) */}
        <div className="w-full grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-[16px] md:gap-[24px]">
          {BRAND_LOGOS.map((logo, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-center transition-all duration-300 hover:bg-[#EFEFEF] hover:scale-105 cursor-pointer"
                style={{
                  width: "100%",
                  height: "111px",
                  padding: "28px 26px",
                  background: "#F9F9F9",
                  borderRadius: "24px"
                }}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={`/TSP/${logo}`}
                    alt="Partner Brand Logo"
                    fill
                    className="object-contain"
                    priority={index < 12}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

