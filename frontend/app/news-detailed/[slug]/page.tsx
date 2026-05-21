import { getNewsDetailedBySlug, getStrapiImageUrl } from "@/lib/strapi";
import { notFound } from "next/navigation";
import NewsAndInsightsArticle from "../../components/all/NewsAndInsightsArticle";
import BuildYourStack from "../../components/all/BuildYourStack";
import LetsTalk from "../../components/all/LetsTalk";
import Footer from "../../components/all/Footer";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const article = await getNewsDetailedBySlug(slug).catch(() => null);
  if (!article) return {};

  const attrs = article.attributes || article;
  return {
    title: `${attrs.title} | News & Insights | Thumbstack`,
    description: attrs.description || attrs.subtitle,
  };
}

export default async function NewsAndInsightsArticleSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  // Fetch article from Strapi CMS
  const article = await getNewsDetailedBySlug(slug).catch((err) => {
    console.error("DEBUG: Fetch error for news-detailed:", err);
    return null;
  });

  if (!article) {
    return notFound();
  }

  const attrs = article.attributes || article;

  // Map CMS data into standard structured object for the template
  const mappedData = {
    slug: slug,
    title: attrs.title || "",
    subtitle: attrs.subtitle || attrs.description || "",
    readTime: attrs.readTime || "5 min read",
    date: attrs.date || "Mar 28, 2026",
    heroImage: getStrapiImageUrl(attrs.heroImage) || "/grid1.jpg",
    logo: getStrapiImageUrl(attrs.logo) || undefined,
    content: attrs.content || undefined,
    bgColor: attrs.bgColor || "#FFFFFF",
    accentColor: attrs.accentColor || "#3145DD"
  };

  return (
    <div className="w-full relative">
      <NewsAndInsightsArticle data={mappedData} />

      <BuildYourStack />
      <LetsTalk />
      <Footer />
    </div>
  );
}
