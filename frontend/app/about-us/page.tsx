

import AboutHero from "../components/all/AboutHero";
import Footer from "../components/all/Footer";
import Info from "../components/all/Info";
import WorkInfo from "../components/all/WorkInfo";
import Team from "../components/all/Team";

export default function AboutPage() {
  return (
    <div className="w-full relative">
      <AboutHero />
      <Info />
      <WorkInfo />
      <Team />
      <Footer />
    </div>
  );
}
