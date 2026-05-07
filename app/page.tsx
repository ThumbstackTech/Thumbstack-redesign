import Hero from "./components/all/Hero";
import FieldsOfPlay from "./components/all/FieldsOfPlay";
import PartnerBrands from "./components/all/PartnerBrands";
import ProductDriven from "./components/all/ProductDriven";
import Principles from "./components/all/Principles";
import BuildYourStack from "./components/all/BuildYourStack";
import Projects from "./components/all/Projects";
import WorkItem from "./components/all/WorkItem";
import FromTheStack from "./components/all/FromTheStack";
import LetsTalk from "./components/all/LetsTalk";
import Footer from "./components/all/Footer";
import Info from "./components/all/Info";
import HeroNewsAndInsights from "./components/all/HeroNewsAndInsights";
import NewsAndInsightsGrid from "./components/all/NewsAndInsightsGrid";
import ArticlesList from "./components/all/ArticlesList";
import HeroWork from "./components/all/HeroWork";
import AboutHero from "./components/all/AboutHero";
import WorkInfo from "./components/all/WorkInfo";
import Team from "./components/all/Team";

import { fetchStrapi } from "./lib/strapi";

export default async function Home() {
  return (
    <div className="w-full relative">
      <Hero />
      <Projects />
      <FieldsOfPlay />
      <PartnerBrands />
      <Principles />
      <WorkItem />
      <ProductDriven />
      <FromTheStack />
      <BuildYourStack />
      <HeroNewsAndInsights />
      <NewsAndInsightsGrid />
      <ArticlesList />
      <HeroWork />
      <Info />
      <WorkInfo />
      <AboutHero />
      <Team />
      <LetsTalk />
      <Footer />
    </div>
  );
}

