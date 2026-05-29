"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface CapabilityCardData {
  id: string | number;
  title: string;
  description: string;
  iconType: string;
  buttonText: string;
  buttonLink?: string;
}

interface CapabilitiesProps {
  data?: {
    enableSection?: boolean;
    capabilities?: CapabilityCardData[];
  };
}

/* ─── Constants ──────────────────────────────────────────────────────────── */
const CARD_WIDTH = 407;
const CARD_GAP = 24;
const CARD_STEP = CARD_WIDTH + CARD_GAP;

export default function Capabilities({ data }: CapabilitiesProps) {
  if (data?.enableSection === false) return null;

  // Normalise Strapi nested format if present
  let capabilities: CapabilityCardData[] = data?.capabilities || [];
  if (Array.isArray(capabilities) && (capabilities as any)[0]?.data) {
    capabilities = (capabilities as any).map((item: any) => item.data || item);
  }
  if (!capabilities.length) return null;

  return <CapabilitiesInner capabilities={capabilities} />;
}


function CapabilitiesInner({ capabilities }: { capabilities: CapabilityCardData[] }) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Total track width minus one visible "viewport" (≈ 1400 px)
  const totalTrackWidth = capabilities.length * CARD_STEP - CARD_GAP;
  const visibleWidth = 1400; // matches Figma's content area
  const maxDrag = -(Math.max(totalTrackWidth - visibleWidth, 0));

  return (
    <div className="w-full bg-white overflow-hidden">
      {/* ── Outer frame: 1600 × 1004 per Figma ─────────────────────── */}
      <div className="relative w-full max-w-[1600px] mx-auto min-h-[600px] md:min-h-[1004px]">

        {/* ── Header block (top: 132px, left: 100px) ─────────────────── */}
        <div
          className="
            absolute
            top-8 md:top-[132px]
            left-4 md:left-[100px]
            w-[calc(100%-32px)] md:w-[1400px]
            flex flex-col
          "
        >
          {/* "Let's Build Together" pill */}
          <motion.button
            suppressHydrationWarning
            whileHover={{ scale: 1.05 }}
            className="
              mb-6 md:mb-0 self-start
              flex items-center gap-2
              px-4 py-3
              rounded-[18px]
              border border-transparent
              hover:border-[#0F1D07]/10
              transition-all duration-300
              cursor-pointer
            "
          >
            <span
              className="font-bold text-[16px] text-[#0F1D07]"
              style={{ fontFamily: "var(--font-satoshi, 'Satoshi Variable', sans-serif)" }}
            >
              Let's Build Together
            </span>
            <ArrowUpRightIcon />
          </motion.button>

          {/* Title + "Explore Capabilities" button */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mt-4 md:mt-0">
            <h2
              className="text-[#0F1D07] capitalize"
              style={{
                fontFamily: "var(--font-delight, 'Delight', serif)",
                fontWeight: 500,
                fontSize: "clamp(48px, 8vw, 100.369px)",
                lineHeight: "1.47",
              }}
            >
              Capabilities
            </h2>

            <motion.button
              suppressHydrationWarning
              whileHover={{ scale: 1.05 }}
              className="
                flex items-center gap-2
                px-6 py-3
                bg-[#0F1D07] text-white
                rounded-[18px]
                border border-white
                hover:bg-white hover:text-[#0F1D07] hover:border-[#0F1D07]
                transition-all duration-300
                cursor-pointer
              "
            >
              <span
                className="font-bold text-[16px]"
                style={{ fontFamily: "var(--font-satoshi, 'Satoshi Variable', sans-serif)" }}
              >
                Explore Capabilities
              </span>
            </motion.button>
          </div>
        </div>

        {/* ── Draggable cards track (top: 290px, left: 100px) ────────── */}
        <div
          className="
            absolute
            top-[220px] md:top-[290px]
            left-4 md:left-[100px]
            w-[calc(100%-32px)] md:w-[1498px]
            h-[580px] md:h-[560px]
            overflow-hidden
          "
        >
          <motion.div
            drag="x"
            dragConstraints={{ left: maxDrag, right: 0 }}
            dragElastic={0.08}
            dragMomentum={true}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
            className={`
              flex items-start
              ${isDragging ? "cursor-grabbing" : "cursor-grab"}
            `}
            style={{ gap: `${CARD_GAP}px`, width: "max-content" }}
          >
            {capabilities.map((cap, idx) => (
              <CapabilityCard
                key={cap.id}
                capability={cap}
                isHovered={hoveredIdx === idx}
                onHover={() => setHoveredIdx(idx)}
                onHoverEnd={() => setHoveredIdx(null)}
              />
            ))}
          </motion.div>
        </div>

      </div>
    </div>
  );
}

interface CardProps {
  capability: CapabilityCardData;
  isHovered: boolean;
  onHover: () => void;
  onHoverEnd: () => void;
}

function CapabilityCard({ capability, isHovered, onHover, onHoverEnd }: CardProps) {
  const darkBg = isHovered;

  return (
    <div
      className="relative flex-shrink-0 flex flex-col items-center select-none"
      style={{ width: `${CARD_WIDTH}px`, height: "542.43px" }}
      onMouseEnter={onHover}
      onMouseLeave={onHoverEnd}
    >
      {/* Pill body (317 × 542.43, rounded top) */}
      <div
        className="relative flex flex-col items-center transition-colors duration-300"
        style={{
          width: "317px",
          height: "542.43px",
          borderRadius: "179px 179px 0 0",
          backgroundColor: darkBg ? "#0F1D07" : "#FFFFFF",
          padding: "80px 15px 80px 14px",
          boxSizing: "border-box",
        }}
      >
        <div className="flex flex-col items-center gap-[31px]" style={{ width: "259px" }}>

          {/* Icon circle */}
          <div
            className="flex items-center justify-center flex-shrink-0 transition-colors duration-300"
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "72px",
              backgroundColor: darkBg ? "#1e3310" : "#F0F8EB",
            }}
          >
            <div
              className="w-10 h-10"
              style={{ color: darkBg ? "#ffffff" : "#0F1D07" }}
            >
              {getIconComponent(capability.iconType, darkBg)}
            </div>
          </div>

          {/* Title + description + link */}
          <div className="flex flex-col items-center gap-[6px] w-full">
            <h3
              className="text-center transition-colors duration-300"
              style={{
                fontFamily: "var(--font-delight, 'Delight', serif)",
                fontWeight: 500,
                fontSize: "28px",
                lineHeight: "46px",
                color: darkBg ? "#ffffff" : "#0F1D07",
                width: "243px",
              }}
            >
              {capability.title}
            </h3>

            <p
              className="text-center transition-colors duration-300 line-clamp-4"
              style={{
                fontFamily: "var(--font-satoshi, 'Satoshi Variable', sans-serif)",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "29px",
                color: darkBg ? "rgba(255,255,255,0.7)" : "rgba(15,29,7,0.6)",
                width: "242px",
              }}
            >
              {capability.description}
            </p>

            {/* Explore link */}
            <a
              href={capability.buttonLink || "#"}
              className="flex items-center gap-[15px] mt-5 transition-colors duration-300 pointer-events-auto"
              style={{ color: darkBg ? "#ffffff" : "#0F1D07" }}
              onClick={(e) => e.stopPropagation()}
              draggable={false}
            >
              <span
                style={{
                  fontFamily: "var(--font-satoshi, 'Satoshi Variable', sans-serif)",
                  fontWeight: 700,
                  fontSize: "16px",
                  lineHeight: "30px",
                }}
              >
                {capability.buttonText}
              </span>
              <ArrowDiagIcon color={darkBg ? "#ffffff" : "#0F1D07"} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider line + centre dot */}
      <div className="absolute" style={{ bottom: "10px", left: 0, width: "100%", height: "10px" }}>
        <div
          style={{
            position: "absolute",
            width: "407px",
            left: 0,
            top: 0,
            borderTop: `1px solid ${darkBg ? "rgba(255,255,255,0.15)" : "#D0D0D0"}`,
          }}
        />
        <div
          className="absolute rounded-full transition-colors duration-300"
          style={{
            width: "10px",
            height: "10px",
            left: "199px",
            top: "-5px",
            backgroundColor: darkBg ? "#ffffff" : "#0F1D07",
          }}
        />
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   Icons
══════════════════════════════════════════════════════════════════════════ */
function getIconComponent(type: string, inverted = false) {
  const stroke = inverted ? "#ffffff" : "#0F1D07";
  const map: Record<string, React.ReactNode> = {
    "server-stack": <ServerStackIcon stroke={stroke} />,
    "globe": <GlobeIcon stroke={stroke} />,
    "ai-brain": <AIBrainIcon stroke={stroke} />,
    "mobile": <MobileIcon stroke={stroke} />,
    "code-xml": <CodeXMLIcon stroke={stroke} />,
    "computer-programming": <ComputerProgrammingIcon stroke={stroke} />,
    "web-design": <WebDesignIcon stroke={stroke} />,
    "shopify": <ShopifyIcon stroke={stroke} />,
    "shopping-cart": <ShoppingCartIcon stroke={stroke} />,
    "user-group": <UserGroupIcon stroke={stroke} />,
    "mentoring": <MentoringIcon stroke={stroke} />,
  };
  return map[type] ?? <ServerStackIcon stroke={stroke} />;
}

/* Shared SVG prop helper */
const sv = (stroke: string) =>
  ({ stroke, strokeWidth: 2, fill: "none" } as const);

const ServerStackIcon = ({ stroke }: { stroke: string }) => (
  <svg viewBox="0 0 40 40" className="w-full h-full" fill="none">
    <rect x="5" y="5" width="30" height="7" rx="1" {...sv(stroke)} />
    <rect x="5" y="17" width="30" height="7" rx="1" {...sv(stroke)} />
    <rect x="5" y="29" width="30" height="7" rx="1" {...sv(stroke)} />
    <circle cx="10" cy="8.5" r="1.5" fill={stroke} />
    <circle cx="10" cy="20.5" r="1.5" fill={stroke} />
    <circle cx="10" cy="32.5" r="1.5" fill={stroke} />
  </svg>
);

const GlobeIcon = ({ stroke }: { stroke: string }) => (
  <svg viewBox="0 0 40 40" className="w-full h-full" fill="none">
    <circle cx="20" cy="20" r="14" {...sv(stroke)} />
    <ellipse cx="20" cy="20" rx="7" ry="14" {...sv(stroke)} />
    <line x1="6" y1="15" x2="34" y2="15" stroke={stroke} strokeWidth="2" />
    <line x1="6" y1="25" x2="34" y2="25" stroke={stroke} strokeWidth="2" />
  </svg>
);

const AIBrainIcon = ({ stroke }: { stroke: string }) => (
  <svg viewBox="0 0 40 40" className="w-full h-full" fill="none">
    <path d="M6 14 C6 8 14 6 18 10 C18 6 26 6 26 12 C30 12 34 16 32 20 C34 24 30 28 26 28 C26 34 18 34 18 30 C14 34 6 32 6 26 C2 24 2 16 6 14Z" {...sv(stroke)} />
    <line x1="18" y1="16" x2="18" y2="24" stroke={stroke} strokeWidth="2" />
    <line x1="14" y1="20" x2="22" y2="20" stroke={stroke} strokeWidth="2" />
  </svg>
);

const MobileIcon = ({ stroke }: { stroke: string }) => (
  <svg viewBox="0 0 40 40" className="w-full h-full" fill="none">
    <rect x="11" y="4" width="18" height="32" rx="3" {...sv(stroke)} />
    <line x1="11" y1="10" x2="29" y2="10" stroke={stroke} strokeWidth="2" />
    <line x1="11" y1="30" x2="29" y2="30" stroke={stroke} strokeWidth="2" />
    <circle cx="20" cy="34" r="1.5" fill={stroke} />
    <line x1="17" y1="7" x2="23" y2="7" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const CodeXMLIcon = ({ stroke }: { stroke: string }) => (
  <svg viewBox="0 0 40 40" className="w-full h-full" fill="none">
    <polyline points="14,13 6,20 14,27" stroke={stroke} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <polyline points="26,13 34,20 26,27" stroke={stroke} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="22" y1="8" x2="18" y2="32" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const ComputerProgrammingIcon = ({ stroke }: { stroke: string }) => (
  <svg viewBox="0 0 40 40" className="w-full h-full" fill="none">
    <rect x="4" y="7" width="32" height="22" rx="2" {...sv(stroke)} />
    <line x1="20" y1="29" x2="20" y2="34" stroke={stroke} strokeWidth="2" />
    <line x1="12" y1="34" x2="28" y2="34" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
    <polyline points="11,16 15,19 11,22" stroke={stroke} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="18" y1="22" x2="26" y2="22" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const WebDesignIcon = ({ stroke }: { stroke: string }) => (
  <svg viewBox="0 0 40 40" className="w-full h-full" fill="none">
    <rect x="4" y="7" width="32" height="26" rx="2" {...sv(stroke)} />
    <line x1="4" y1="14" x2="36" y2="14" stroke={stroke} strokeWidth="2" />
    <circle cx="9" cy="10.5" r="1.5" fill={stroke} />
    <circle cx="15" cy="10.5" r="1.5" fill={stroke} />
    <rect x="8" y="18" width="10" height="10" rx="1" {...sv(stroke)} />
    <line x1="22" y1="20" x2="32" y2="20" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
    <line x1="22" y1="24" x2="30" y2="24" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
    <line x1="22" y1="28" x2="28" y2="28" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const ShopifyIcon = ({ stroke }: { stroke: string }) => (
  <svg viewBox="0 0 40 40" className="w-full h-full" fill="none">
    <path d="M27 9 C27 9 26 8 24 8 C22 8 21 9.5 21 9.5" stroke={stroke} strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M13 10 L10 36 L30 36 L27 10" stroke={stroke} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17 10 C17 10 17 7 20 7 C23 7 23 10 23 10" stroke={stroke} strokeWidth="2" fill="none" strokeLinecap="round" />
    <line x1="10" y1="18" x2="30" y2="18" stroke={stroke} strokeWidth="2" />
  </svg>
);

const ShoppingCartIcon = ({ stroke }: { stroke: string }) => (
  <svg viewBox="0 0 40 40" className="w-full h-full" fill="none">
    <path d="M5 8 L9 8 L14 26 L30 26 L34 14 L12 14" stroke={stroke} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="16" cy="32" r="2.5" stroke={stroke} strokeWidth="2" fill="none" />
    <circle cx="28" cy="32" r="2.5" stroke={stroke} strokeWidth="2" fill="none" />
  </svg>
);

const UserGroupIcon = ({ stroke }: { stroke: string }) => (
  <svg viewBox="0 0 40 40" className="w-full h-full" fill="none">
    <circle cx="20" cy="14" r="5" stroke={stroke} strokeWidth="2" fill="none" />
    <path d="M10 34 C10 27 14 24 20 24 C26 24 30 27 30 34" stroke={stroke} strokeWidth="2" fill="none" strokeLinecap="round" />
    <circle cx="8" cy="16" r="3.5" stroke={stroke} strokeWidth="2" fill="none" />
    <path d="M2 32 C2 27 5 25 8 25" stroke={stroke} strokeWidth="2" fill="none" strokeLinecap="round" />
    <circle cx="32" cy="16" r="3.5" stroke={stroke} strokeWidth="2" fill="none" />
    <path d="M38 32 C38 27 35 25 32 25" stroke={stroke} strokeWidth="2" fill="none" strokeLinecap="round" />
  </svg>
);

const MentoringIcon = ({ stroke }: { stroke: string }) => (
  <svg viewBox="0 0 40 40" className="w-full h-full" fill="none">
    <circle cx="14" cy="12" r="4" stroke={stroke} strokeWidth="2" fill="none" />
    <path d="M6 32 C6 25 10 22 14 22 C18 22 22 25 22 32" stroke={stroke} strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M26 18 L34 18 M30 14 L34 18 L30 22" stroke={stroke} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M26 24 L34 24" stroke={stroke} strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M26 30 L32 30" stroke={stroke} strokeWidth="2" fill="none" strokeLinecap="round" />
  </svg>
);

/* Flat right-pointing arrow inside each card → */
const ArrowDiagIcon = ({ color }: { color: string }) => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
    {/* Shaft */}
    <line x1="4" y1="15" x2="24" y2="15" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    {/* Arrowhead */}
    <polyline points="17,8 24,15 17,22" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* Header "Let's Build Together" arrow */
const ArrowUpRightIcon = () => (
  <svg viewBox="0 0 20 20" className="w-5 h-5 text-[#0F1D07]" fill="none">
    <line x1="4" y1="16" x2="16" y2="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="16" y1="4" x2="16" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="16" y1="4" x2="7" y2="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
