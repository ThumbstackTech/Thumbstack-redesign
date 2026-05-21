import { fetchStrapi, getPagesQueryString } from "@/lib/strapi";
import SectionRenderer from "../components/SectionRenderer";
import HeroNewsAndInsights from "../components/all/HeroNewsAndInsights";
import NewsAndInsightsGrid from "../components/all/NewsAndInsightsGrid";
import CTASection from "../components/all/CTASection";
import LetsTalk from "../components/all/LetsTalk";
import Footer from "../components/all/Footer";

export default async function NewsAndInsightsPage() {
  // Fetch from Strapi CMS
  let sections: any[] = [];
  try {
    const pageRes = await fetchStrapi("pages", getPagesQueryString("news-and-insights"));
    const pageData = (pageRes?.data as any[])?.[0]?.attributes || (pageRes?.data as any[])?.[0];
    sections = pageData?.content || [];
  } catch (err) {
    console.error("Error fetching news-and-insights page from CMS:", err);
  }

  // Fallback to default static layout if page has no CMS components in its dynamic zone
  if (sections.length === 0) {
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

  // Render components dynamically from CMS dynamic zone
  return (
    <div className="w-full relative animate-fadeIn">
      <SectionRenderer sections={sections} />
    </div>
  );
}
