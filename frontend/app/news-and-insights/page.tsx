import HeroNewsAndInsights from "../components/all/HeroNewsAndInsights";
import NewsAndInsightsGrid from "../components/all/NewsAndInsightsGrid";

import CTASection from "../components/all/CTASection";
import LetsTalk from "../components/all/LetsTalk";
import Footer from "../components/all/Footer";

export default function NewsAndInsightsPage() {
  return (
    <div className="w-full relative">
      <HeroNewsAndInsights />
      <NewsAndInsightsGrid />
      <CTASection />

      <LetsTalk />
      <Footer />
    </div>
  );
}
