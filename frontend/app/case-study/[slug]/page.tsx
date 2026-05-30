import { fetchStrapi, getStrapiImageUrl } from "@/lib/strapi";
import { notFound } from "next/navigation";
import { caseStudies } from "../../data/case-studies";
import CaseStudyTemplate from "../../components/all/CaseStudyTemplate";

// Helper to parse arrays from JSON or string
function parseArrayField(value: any): string[] {
  if (!value) return [];
  if (Array.isArray(value)) return value;
  if (typeof value === "object") {
    if (Array.isArray(value.tags)) return value.tags;
    if (Array.isArray(value.data)) return value.data;
    if (Array.isArray(value.value)) return value.value;
  }
  if (typeof value === "string") {
    try {
      const parsed = JSON.parse(value);
      if (Array.isArray(parsed)) return parsed;
      if (parsed && typeof parsed === "object") {
        if (Array.isArray(parsed.tags)) return parsed.tags;
        if (Array.isArray(parsed.data)) return parsed.data;
      }
    } catch {
      return value.split(",").map((t: string) => t.trim());
    }
  }
  return [];
}

// Helper to safely extract list of images from Strapi v4/v5 response
function getStrapiImageArray(imageField: any): any[] | null {
  if (!imageField) return null;
  let list = imageField;
  if (imageField.data !== undefined) list = imageField.data;
  if (!list) return null;
  if (!Array.isArray(list)) list = [list];
  return list.filter(Boolean);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const staticCaseStudy = caseStudies[slug];

  // Fetch case study directly by slug from case-studies endpoint
  const csRes = await fetchStrapi("case-studies", `filters[slug][$eq]=${slug}&populate[project]=true`).catch(() => null);
  const caseStudy = (csRes?.data as any[])?.[0]?.attributes || (csRes?.data as any[])?.[0];
  const project = caseStudy?.project?.data?.attributes || caseStudy?.project;

  if (!caseStudy && !staticCaseStudy) return {};

  return {
    title: `${caseStudy?.clientName || project?.name || staticCaseStudy?.clientName} | Case Study | Thumbstack`,
    description: caseStudy?.subtitle || caseStudy?.tagline || staticCaseStudy?.subtitle,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const staticCaseStudy = caseStudies[slug];

  // ── 1. Fetch case study DIRECTLY by its own slug from case-studies endpoint ──
  // This is the correct approach because the case study slug lives on the
  // case-study record itself, not on the project record.
  const csQueryString =
    `filters[slug][$eq]=${slug}` +
    `&populate[project][populate][mainImage]=true` +
    `&populate[mainImage]=true` +
    `&populate[challengeImages]=true` +
    `&populate[gallery]=true` +
    `&populate[approachPrinciples]=true` +
    `&populate[features]=true` +
    `&populate[content][populate]=*`;

  const csRes = await fetchStrapi("case-studies", csQueryString).catch((err) => {
    console.error("DEBUG: Fetch error for case-studies by slug:", err);
    return null;
  });

  const caseStudy = (csRes?.data as any[])?.[0]?.attributes || (csRes?.data as any[])?.[0];
  const project = caseStudy?.project?.data?.attributes || caseStudy?.project;

  console.log("DEBUG: caseStudy slug", slug, "→", caseStudy ? "FOUND" : "NOT FOUND");

  // ── 2. Fallback to static case study data if not found in CMS ──
  if (!caseStudy && !staticCaseStudy) {
    return notFound();
  }

  // Clean Client Name
  const cleanClientName = caseStudy?.clientName || staticCaseStudy?.clientName || project?.name || "";

  // Clean Title
  const cleanTitle = caseStudy?.heading || staticCaseStudy?.title || "";

  // Clean Subtitle
  const cleanSubtitle = caseStudy?.subtitle || caseStudy?.tagline || staticCaseStudy?.subtitle || project?.tagline || "";

  // Clean Hero Image
  const cleanHeroImageUrl =
    getStrapiImageUrl(caseStudy?.mainImage || project?.mainImage) ||
    staticCaseStudy?.heroImage?.url ||
    "/siorai.png";

  // Map CMS fields into CaseStudyData, falling back to static data
  const mappedData = {
    slug,
    title: cleanTitle,
    subtitle: cleanSubtitle,
    clientName: cleanClientName,
    tags: parseArrayField(caseStudy?.tags || project?.tags || staticCaseStudy?.tags),
    readTime: caseStudy?.readTime || staticCaseStudy?.readTime || "8 min read",
    date: caseStudy?.date || staticCaseStudy?.date || "Sept 22 2025",

    heroImage: {
      url: cleanHeroImageUrl,
      alt: cleanTitle || cleanClientName,
    },

    challengeText: caseStudy?.challengeText || staticCaseStudy?.challengeText || "",

    challengeImages: (() => {
      const list = getStrapiImageArray(caseStudy?.challengeImages);
      if (!list || list.length === 0) return staticCaseStudy?.challengeImages || [];
      return list.map((img: any) => ({
        url: getStrapiImageUrl(img) || "/placeholder.png",
        alt: img.attributes?.alternativeText || img.alternativeText || "",
      }));
    })(),

    approachText: caseStudy?.approachText || staticCaseStudy?.approachText || "",
    approachBrandText: caseStudy?.approachBrandText || staticCaseStudy?.approachBrandText || "",

    approachPrinciples:
      caseStudy?.approachPrinciples?.length > 0
        ? caseStudy.approachPrinciples.map((item: any) => {
            const val = item.text || item;
            return typeof val === "string" ? val.trim() : val;
          })
        : parseArrayField(staticCaseStudy?.approachPrinciples),

    quote: caseStudy?.quote || staticCaseStudy?.quote || "",

    features:
      caseStudy?.features?.length > 0
        ? caseStudy.features.map((item: any) => {
            const val = item.text || item;
            return typeof val === "string" ? val.trim() : val;
          })
        : parseArrayField(staticCaseStudy?.features),

    gallery: (() => {
      const list = getStrapiImageArray(caseStudy?.gallery);
      if (!list || list.length === 0) return staticCaseStudy?.gallery || [];
      return list.map((img: any) => ({
        url: getStrapiImageUrl(img) || "/placeholder.png",
        alt: img.attributes?.alternativeText || img.alternativeText || "",
      }));
    })(),

    projectUrl: caseStudy?.projectUrl || project?.websiteUrl || staticCaseStudy?.projectUrl || "#",
    accentColor: caseStudy?.accentColor || project?.accentColor || staticCaseStudy?.accentColor || "#95E7D3",
    backgroundColor: caseStudy?.backgroundColor || project?.bg || staticCaseStudy?.backgroundColor || "#141417",

    dynamicContent: caseStudy?.content || [],
  };

  return <CaseStudyTemplate data={mappedData} />;
}
