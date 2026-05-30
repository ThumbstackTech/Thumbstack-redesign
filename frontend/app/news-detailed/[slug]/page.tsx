import { getNewsDetailedBySlug, getStrapiImageUrl, fetchStrapi } from "@/lib/strapi";
import { notFound } from "next/navigation";
import NewsAndInsightsArticle from "../../components/all/NewsAndInsightsArticle";
import SectionRenderer from "../../components/SectionRenderer";
import { ProjectData } from "../../types/strapi";

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

  // Fetch article from Strapi CMS with all sections populated
  const article = await getNewsDetailedBySlug(slug).catch((err) => {
    console.error("DEBUG: Fetch error for news-detailed:", err);
    return null;
  });

  if (!article) {
    return notFound();
  }

  const attrs = article.attributes || article;

  // Map CMS data into structured object for the article template
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
    accentColor: attrs.accentColor || "#3145DD",
    galleryImages: attrs.galleryImages || [],
    subHeader1: attrs.subHeader1,
    subContent1: attrs.subContent1,
    subHeader2: attrs.subHeader2,
    subContent2: attrs.subContent2,
    col1Header: attrs.col1Header,
    col1Content: attrs.col1Content,
    col2Header: attrs.col2Header,
    col2Content: attrs.col2Content,
  };

  // Sections dynamic zone — added via Strapi CMS for full editorial control
  const sections: any[] = attrs.sections || [];

  // Fetch projects in case projects section is added in the sections array
  const projectsRes = await fetchStrapi("projects", "populate[case_study]=true&populate[mainImage]=true&populate[sideImages]=true").catch(() => null);
  const projectsData = (projectsRes?.data as any[])?.map(item => ({
    id: item.id,
    ...(item.attributes || item),
  })) as ProjectData[];

  return (
    <div className="w-full relative">
      <NewsAndInsightsArticle data={mappedData} />

      {/* Dynamic sections added via Strapi — add Footer, LetsTalk, CTASection, etc. here */}
      {sections.length > 0 && (
        <SectionRenderer sections={sections} projects={projectsData} />
      )}
    </div>
  );
}
