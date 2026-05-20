"use client";

import Hero from "./all/Hero";
import InteractiveList from "./all/InteractiveList";
import PartnerBrands from "./all/PartnerBrands";
import Principles from "./all/Principles";
import CapabilitiesFeatures from "./all/CapabilitiesFeatures";
import CapabilitiesFAQ from "./all/CapabilitiesFAQ";
import Team from "./all/Team";
import LetsTalk from "./all/LetsTalk";
import BuildYourStack from "./all/BuildYourStack";
import Footer from "./all/Footer";
import Info from "./all/Info";
import WhatWeBuild from "./all/WhatWeBuild";
import Projects from "./all/Projects";
import AboutHero from "./all/AboutHero";
import HeroNewsAndInsights from "./all/HeroNewsAndInsights";
import ProductDriven from "./all/ProductDriven";
import HeroWork from "./all/HeroWork";
import BestFit from "./all/BestFit";
import Sidebar from "./layout/Sidebar";


const componentMap: { [key: string]: any } = {
  "shared.hero": Hero,
  "shared.interactive-list": InteractiveList,
  "shared.partner-brands": PartnerBrands,
  "shared.principles": Principles,
  "shared.capabilities-features": CapabilitiesFeatures,
  "shared.faq-section": CapabilitiesFAQ,
  "shared.team-section": Team,
  "shared.lets-talk": LetsTalk,
  "shared.build-your-stack": BuildYourStack,
  "shared.footer": Footer,
  "shared.info": Info,
  "shared.what-we-build": WhatWeBuild,
  "shared.projects-section": Projects,
  "shared.about-hero": AboutHero,
  "shared.news-hero": HeroNewsAndInsights,
  "shared.product-driven": ProductDriven,
  "shared.hero-work": HeroWork,
  "shared.best-fit": BestFit,
  "shared.sidebar": Sidebar
};

export default function SectionRenderer({ sections, projects }: { sections: any[]; projects?: any[] }) {
  return (
    <>
      {sections.map((section, index) => {
        const Component = componentMap[section.__component];
        if (!Component) {
          console.warn(`No component found for: ${section.__component}`);
          return null;
        }

        // Pass the loaded projects array for the Projects Section slot
        const componentData = section.__component === "shared.projects-section" ? projects : section;
        return <Component key={`${section.__component}-${index}`} data={componentData} />;
      })}
    </>
  );
}
