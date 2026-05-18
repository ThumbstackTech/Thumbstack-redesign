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
};

export default function SectionRenderer({ sections }: { sections: any[] }) {
  return (
    <>
      {sections.map((section, index) => {
        const Component = componentMap[section.__component];
        if (!Component) {
          console.warn(`No component found for: ${section.__component}`);
          return null;
        }
        return <Component key={`${section.__component}-${index}`} data={section} />;
      })}
    </>
  );
}
