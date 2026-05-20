# Headless Strapi Dynamic Component Implementation Guide 🚀

This comprehensive guide details the step-by-step implementation to make **`HeroWork`** and **`BestFit`** 100% dynamic using Strapi 5. Follow the steps below to create the schemas in the backend and apply the dynamic code in the frontend.

---

## 1. BACKEND: Create the Strapi Component Schemas 📁

Create these two JSON schema files in your backend directory under `backend/src/components/shared/`:

### A. Create `backend/src/components/shared/hero-work.json`
```json
{
  "collectionName": "components_shared_hero_works",
  "info": {
    "displayName": "Hero Work",
    "icon": "briefcase",
    "description": "Dynamic Hero Work section with customizable images, backgrounds, and badges"
  },
  "options": {},
  "attributes": {
    "headingLine1": {
      "type": "string",
      "required": true,
      "default": "Work That Moves"
    },
    "headingLine2": {
      "type": "string",
      "default": "Businesses Forward"
    },
    "description": {
      "type": "text",
      "default": "A curated collection of digital products, brand systems, and platforms we've built across real estate, e-commerce, enterprise systems, and emerging startups."
    },
    "bgColor": {
      "type": "string",
      "default": "#3145DD"
    },
    "textColor": {
      "type": "string",
      "default": "#FFFFFF"
    },
    "ctaText": {
      "type": "string",
      "default": "Let's Build Together"
    },
    "ctaLink": {
      "type": "string",
      "default": "#"
    },
    "card1Image": {
      "type": "media",
      "multiple": false,
      "allowedTypes": ["images"],
      "required": true
    },
    "card1BgColor": {
      "type": "string",
      "default": "#7FABA2"
    },
    "card1BadgeText": {
      "type": "string",
      "default": "BFT"
    },
    "card1BadgeSubtext": {
      "type": "string",
      "default": "Read"
    },
    "card2Image": {
      "type": "media",
      "multiple": false,
      "allowedTypes": ["images"],
      "required": true
    },
    "card2BgColor": {
      "type": "string",
      "default": "#9EA3F1"
    }
  }
}
```

### B. Create `backend/src/components/shared/best-fit.json`
```json
{
  "collectionName": "components_shared_best_fits",
  "info": {
    "displayName": "Best Fit",
    "icon": "thumbs-up",
    "description": "Best Fit section listing customizable scenario lines"
  },
  "options": {},
  "attributes": {
    "heading": {
      "type": "string",
      "required": true,
      "default": "Best fit for businesses that need more than a basic website."
    },
    "description": {
      "type": "text",
      "default": "This is best suited for businesses that need a website to carry serious brand, content, SEO, lead generation, or operational value."
    },
    "bgColor": {
      "type": "string",
      "default": "#95E7D3"
    },
    "textColor": {
      "type": "string",
      "default": "#0F1D07"
    },
    "scenarios": {
      "type": "text",
      "description": "Enter each scenario on a new line"
    }
  }
}
```

---

## 2. BACKEND: Allow Components in Page Dynamic Zone 🚀

Update your Page content type schema file `backend/src/api/page/content-types/page/schema.json` to allow these components inside your Page content list:

```json
      "components": [
        ...
        "shared.hero-work",
        "shared.best-fit"
      ]
```

---

## 3. FRONTEND: Define TypeScript Interfaces 💡

Add these definitions to `frontend/app/types/strapi.ts` so that Next.js understands the new Strapi data structures:

```typescript
export interface HeroWorkData {
  id: number;
  __component: "shared.hero-work";
  headingLine1: string;
  headingLine2?: string;
  description?: string;
  bgColor?: string;
  textColor?: string;
  ctaText?: string;
  ctaLink?: string;
  card1Image?: { data?: { attributes?: StrapiImage } };
  card1BgColor?: string;
  card1BadgeText?: string;
  card1BadgeSubtext?: string;
  card2Image?: { data?: { attributes?: StrapiImage } };
  card2BgColor?: string;
}

export interface BestFitData {
  id: number;
  __component: "shared.best-fit";
  heading: string;
  description: string;
  bgColor?: string;
  textColor?: string;
  scenarios?: string;
}
```

---

## 4. FRONTEND: Dynamic React Component Source Code 🎨

Copy and replace the respective frontend components with the following dynamic source code:

### A. Dynamic Component: `frontend/app/components/all/HeroWork.tsx`
```tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { HeroWorkData } from "../../types/strapi";
import { getStrapiImageUrl } from "../../lib/strapi";

export default function HeroWork({ data }: { data?: HeroWorkData }) {
  // Extract Dynamic fields with Fallbacks
  const headingLine1 = data?.headingLine1 || "Work That Moves";
  const headingLine2 = data?.headingLine2 || "Businesses Forward";
  const description = data?.description || "A curated collection of digital products, brand systems, and platforms we've built across real estate, e-commerce, enterprise systems, and emerging startups.";
  
  const bgColor = data?.bgColor || "#3145DD";
  const textColor = data?.textColor || "#FFFFFF";
  const ctaText = data?.ctaText || "Let's Build Together";
  const ctaLink = data?.ctaLink || "#";

  // Card 1
  const card1Bg = data?.card1BgColor || "#7FABA2";
  const card1Badge = data?.card1BadgeText || "BFT";
  const card1Sub = data?.card1BadgeSubtext || "Read";
  const card1ImgUrl = getStrapiImageUrl(data?.card1Image) || "/BFT2.jpg";

  // Card 2
  const card2Bg = data?.card2BgColor || "#9EA3F1";
  const card2ImgUrl = getStrapiImageUrl(data?.card2Image) || "/Home.png";

  return (
    <section 
      className="min-h-[120vh] w-full flex flex-col justify-start py-12 px-6 md:px-12 lg:px-24 snap-start relative md:pl-[90px] md:pr-[90px] overflow-hidden pt-[240px] md:pt-[45vh] transition-colors duration-500"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-white/10 to-transparent pointer-events-none z-0" />
      
      {/* Background Decoration - Glowing Oval behind images */}
      <div className="absolute top-[40%] -translate-y-1/2 right-[-10%] w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-white opacity-40 blur-[160px] rounded-full pointer-events-none z-0"></div>

      <div className="w-full max-w-[1600px] mx-auto flex flex-col lg:flex-row items-center justify-between h-full relative z-10 gap-12 lg:gap-8">

        {/* Left Content */}
        <div className="flex flex-col w-full lg:w-[65%]">
          <div className="mb-12 lg:mb-20">
            {ctaText && (
              <Link 
                href={ctaLink} 
                className="font-medium flex items-center gap-2 hover:opacity-75 transition-opacity" 
                style={{ color: textColor, fontFamily: "var(--font-satoshi)", fontSize: "clamp(14px, 1.2vw, 16px)" }}
              >
                {ctaText}
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_6227_88259)">
                    <path d="M5 15L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.875 5H15V13.125" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_6227_88259">
                      <rect width="20" height="20" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            )}
          </div>

          <div className="flex flex-col">
            <h1
              className="flex flex-col"
              style={{
                color: textColor,
                fontFamily: "var(--font-delight)",
                fontSize: "clamp(2.5rem, 6.5vw, 92px)",
                fontWeight: 500,
                lineHeight: "1.1",
                letterSpacing: "-0.02em",
              }}
            >
              <span className="whitespace-normal sm:whitespace-nowrap">{headingLine1}</span>
              {headingLine2 && <span className="whitespace-normal sm:whitespace-nowrap">{headingLine2}</span>}
            </h1>

            {description && (
              <p
                className="max-w-[553px] mt-8 md:mt-12"
                style={{ 
                  color: textColor,
                  opacity: 0.9,
                  fontFamily: "var(--font-satoshi)", 
                  fontWeight: 500,
                  fontSize: "clamp(14px, 1.2vw, 16px)",
                  lineHeight: "1.6",
                  letterSpacing: "0.01em",
                }}
              >
                {description}
              </p>
            )}
          </div>
        </div>

        {/* Right Content - Dynamic Image Stack */}
        <div className="w-full lg:w-[30%] flex flex-col items-end gap-16 lg:translate-x-4 xl:translate-x-8">

          {/* Top Card */}
          <div className="relative group lg:-mt-64">
            {/* Dynamic Floating Badge */}
            {card1Badge && (
              <div
                className="absolute left-[-35px] top-[20%] w-[75px] h-[75px] bg-white/20 backdrop-blur-xl rounded-full flex flex-col items-center justify-center text-white border border-white/30 shadow-2xl z-20"
              >
                <span className="text-[12px] font-bold" style={{ fontFamily: "var(--font-satoshi)" }}>{card1Badge}</span>
                {card1Sub && <span className="text-[11px]" style={{ fontFamily: "var(--font-satoshi)" }}>{card1Sub}</span>}
              </div>
            )}

            <div
              className="relative w-[280px] sm:w-[340px] lg:w-[420px] aspect-[4/3] rounded-[12px] p-6 shadow-2xl transition-colors duration-500"
              style={{ backgroundColor: card1Bg }}
            >
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <Image
                  src={card1ImgUrl}
                  alt="Bharat Flooring / Work Image 1"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Bottom Card */}
          <div
            className="relative w-[280px] sm:w-[340px] lg:w-[420px] aspect-[4/3] rounded-[12px] p-6 shadow-2xl lg:mt-8 transition-colors duration-500"
            style={{ backgroundColor: card2Bg }}
          >
            <div className="relative w-full h-full rounded-lg overflow-hidden bg-white">
              <Image
                src={card2ImgUrl}
                alt="Dashboard UI / Work Image 2"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
```

### B. Dynamic Component: `frontend/app/components/all/BestFit.tsx`
```tsx
"use client";

import { motion } from "framer-motion";
import { BestFitData } from "../../types/strapi";

export default function BestFit({ data }: { data?: BestFitData }) {
  // Extract Dynamic fields with Fallbacks
  const heading = data?.heading || "Best fit for businesses that need more than a basic website.";
  const description = data?.description || "This is best suited for businesses that need a website to carry serious brand, content, SEO, lead generation, or operational value.";
  const bgColor = data?.bgColor || "#95E7D3";
  const textColor = data?.textColor || "#0F1D07";

  // Parse list of scenarios split by newlines
  const defaultScenarios = [
    "A brand website that needs to look more premium",
    "A corporate website that needs clearer structure",
    "A website redesign for a business that has outgrown its old site",
    "A CMS website where internal teams need content control",
    "A multi region or international website",
    "A real estate or luxury website that needs stronger storytelling",
    "A lead generation website with better forms and conversion paths",
    "A content heavy website with blogs, insights, or resources"
  ];
  
  const scenariosList = data?.scenarios 
    ? data.scenarios.split("\n").map(s => s.trim()).filter(Boolean)
    : defaultScenarios;

  return (
    <section 
      className="w-full py-[100px] px-6 md:px-[100px] transition-colors duration-500"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="max-w-[1401px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-[96px] items-start">
          
          {/* Left: Text Content */}
          <div className="w-full lg:w-[674px] flex flex-col gap-6">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{
                fontFamily: "var(--font-delight)",
                fontSize: "clamp(32px, 5vw, 60px)",
                lineHeight: "clamp(42px, 6vw, 80px)",
                fontWeight: 500,
                letterSpacing: "-0.01em",
                color: textColor
              }}
            >
              {heading}
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-[674px]"
              style={{
                fontFamily: "var(--font-satoshi)",
                fontSize: "22px",
                lineHeight: "34px",
                fontWeight: 400,
                color: textColor
              }}
            >
              {description}
            </motion.p>
          </div>

          {/* Right: Scenarios List */}
          <div className="w-full lg:w-[631px] flex flex-col">
            {scenariosList.map((scenario, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex flex-col"
              >
                <div 
                  className="py-4.5 min-h-[50px] flex items-center"
                  style={{
                    fontFamily: "var(--font-satoshi)",
                    fontSize: "18px",
                    lineHeight: "36px",
                    fontWeight: 500,
                    letterSpacing: "-0.01em",
                    color: textColor
                  }}
                >
                  {scenario}
                </div>
                {/* Vector Separator */}
                <div className="w-full h-[0.5px] bg-[#929292] opacity-30" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

## 5. FRONTEND: Register Components inside SectionRenderer 🌐

Ensure `frontend/app/components/SectionRenderer.tsx` imports and registers these keys inside `componentMap`:

```tsx
import HeroWork from "./all/HeroWork";
import BestFit from "./all/BestFit";

const componentMap: { [key: string]: any } = {
  ...
  "shared.hero-work": HeroWork,
  "shared.best-fit": BestFit,
};
```

---

## 6. FRONTEND: Fetch Dynamic Image Assets 🔍

Make sure that your fetch queries inside your root slug files `frontend/app/[...slug]/page.tsx` and `frontend/app/page.tsx` explicitly request these dynamic assets so that they load instantly:

```
&populate[content][on][shared.hero-work][populate][card1Image]=true&populate[content][on][shared.hero-work][populate][card2Image]=true
```
