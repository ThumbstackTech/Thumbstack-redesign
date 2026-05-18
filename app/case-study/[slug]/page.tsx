import { fetchStrapi, getStrapiImageUrl } from "../../lib/strapi";
import { notFound } from "next/navigation";
import { caseStudies } from "../../data/case-studies";
import CaseStudyTemplate from "../../components/all/CaseStudyTemplate";

// Helper to parse arrays from JSON or string
function parseArrayField(value: any): string[] {
  if (!value) return [];
  if (Array.isArray(value)) return value;
  if (typeof value === "string") {
    try {
      const parsed = JSON.parse(value);
      if (Array.isArray(parsed)) return parsed;
    } catch {
      return value.split(",").map(t => t.trim());
    }
  }
  return [];
}

// Helper to safely extract list of images from Strapi v4/v5 response
function getStrapiImageArray(imageField: any): any[] | null {
  if (!imageField) return null;
  let list = imageField;
  if (imageField.data !== undefined) {
    list = imageField.data;
  }
  if (!list) return null;
  if (!Array.isArray(list)) {
    list = [list];
  }
  return list.filter(Boolean);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const staticCaseStudy = caseStudies[slug];

  const projectRes = await fetchStrapi("projects", `filters[slug][$eq]=${slug}&populate=*`).catch(() => null);
  const project = (projectRes?.data as any[])?.[0]?.attributes || (projectRes?.data as any[])?.[0];

  if (!project && !staticCaseStudy) return {};

  return {
    title: `${project?.name || staticCaseStudy?.clientName} | Case Study | Thumbstack`,
    description: project?.tagline || staticCaseStudy?.subtitle,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const staticCaseStudy = caseStudies[slug];

  // Fetch Project and Case Study data with deep population for repeatable components and media
  const queryString = `filters[slug][$eq]=${slug}` +
    `&populate[case_study][populate]=*` +
    `&populate[case_study][populate][approachPrinciples][populate]=*` +
    `&populate[case_study][populate][features][populate]=*` +
    `&populate[case_study][populate][challengeImages]=true` +
    `&populate[case_study][populate][gallery]=true` +
    `&populate[case_study][populate][mainImage]=true` +
    `&populate[mainImage]=true`;

  const projectRes = await fetchStrapi("projects", queryString).catch((err) => {
    console.error("DEBUG: Fetch error for case study", err);
    return null;
  });

  const project = (projectRes?.data as any[])?.[0]?.attributes || (projectRes?.data as any[])?.[0];
  const caseStudy = project?.case_study?.data?.attributes || project?.case_study;

  // Fallback to static case study if nothing matches in CMS
  if (!project && !staticCaseStudy) {
    return notFound();
  }

  // Clean Client Name: Use Strapi clientName as the brand name, falling back to static or project name
  const cleanClientName = caseStudy?.clientName || staticCaseStudy?.clientName || project?.name || "";

  // Clean Title Fallback: Use Strapi heading as the main sentence title, falling back to static title
  const cleanTitle = caseStudy?.heading || staticCaseStudy?.title || "";

  // Clean Subtitle: Use Strapi subtitle/tagline, falling back to static subtitle or project tagline
  const cleanSubtitle = caseStudy?.subtitle || caseStudy?.tagline || staticCaseStudy?.subtitle || project?.tagline || "";

  // Clean Hero Image: Use Strapi mainImage, falling back to project mainImage, then static
  const cleanHeroImageUrl = getStrapiImageUrl(caseStudy?.mainImage || project?.mainImage) ||
    staticCaseStudy?.heroImage?.url ||
    "/siorai.png";

  // Map Strapi CMS fields into CaseStudyData structure, falling back to static template data
  const mappedData = {
    slug: slug,
    title: cleanTitle,
    subtitle: cleanSubtitle,
    clientName: cleanClientName,
    tags: parseArrayField(caseStudy?.tags || project?.tags || staticCaseStudy?.tags),
    readTime: caseStudy?.readTime || staticCaseStudy?.readTime || "8 min read",
    date: caseStudy?.date || staticCaseStudy?.date || "Sept 22 2025",

    heroImage: {
      url: cleanHeroImageUrl,
      alt: cleanTitle || cleanClientName
    },

    challengeText: caseStudy?.challengeText || staticCaseStudy?.challengeText || "",

    challengeImages: (() => {
      const list = getStrapiImageArray(caseStudy?.challengeImages);
      if (!list || list.length === 0) return staticCaseStudy?.challengeImages || [];
      return list.map((img: any) => ({
        url: getStrapiImageUrl(img) || "/placeholder.png",
        alt: img.attributes?.alternativeText || img.alternativeText || ""
      }));
    })(),

    approachText: caseStudy?.approachText || staticCaseStudy?.approachText || "",
    approachBrandText: caseStudy?.approachBrandText || staticCaseStudy?.approachBrandText || "",

    // Map Repeatable elements.feature-item component for Principles
    approachPrinciples: (caseStudy?.approachPrinciples && Array.isArray(caseStudy.approachPrinciples))
      ? caseStudy.approachPrinciples.map((item: any) => item.text || item)
      : parseArrayField(staticCaseStudy?.approachPrinciples),

    quote: caseStudy?.quote || staticCaseStudy?.quote || "",

    // Map Repeatable elements.feature-item component for Features
    features: (caseStudy?.features && Array.isArray(caseStudy.features))
      ? caseStudy.features.map((item: any) => item.text || item)
      : parseArrayField(staticCaseStudy?.features),

    gallery: (() => {
      const list = getStrapiImageArray(caseStudy?.gallery);
      if (!list || list.length === 0) return staticCaseStudy?.gallery || [];
      return list.map((img: any) => ({
        url: getStrapiImageUrl(img) || "/placeholder.png",
        alt: img.attributes?.alternativeText || img.alternativeText || ""
      }));
    })(),

    projectUrl: caseStudy?.projectUrl || project?.websiteUrl || staticCaseStudy?.projectUrl || "#",
    accentColor: caseStudy?.accentColor || project?.accentColor || staticCaseStudy?.accentColor || "#95E7D3",
    backgroundColor: caseStudy?.backgroundColor || project?.bg || staticCaseStudy?.backgroundColor || "#141417"
  };

  return <CaseStudyTemplate data={mappedData} />;
}
