import { fetchStrapi, getPagesQueryString, getCapabilityDetailedBySlug, getServiceDetailedBySlug } from "@/lib/strapi";
import SectionRenderer from "../components/SectionRenderer";
import Projects from "../components/all/Projects";
import Footer from "../components/all/Footer";
import { ProjectData } from "../types/strapi";
import { redirect } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug?.join("/") || "";

  let pageData = null;

  const pageRes = await fetchStrapi(
    "pages",
    `filters[slug][$eq]=${slug}&publicationState=preview`
  ).catch(() => null);
  pageData = (pageRes?.data as any[])?.[0]?.attributes || (pageRes?.data as any[])?.[0];

  if (!pageData) {
    const capRes = await getCapabilityDetailedBySlug(slug);
    if (capRes) pageData = capRes.attributes || capRes;
  }

  if (!pageData) {
    const servRes = await getServiceDetailedBySlug(slug);
    if (servRes) pageData = servRes.attributes || servRes;
  }

  if (!pageData) return {};
  return {
    title: pageData.title ? `${pageData.title} | Thumbstack` : "Thumbstack",
  };
}

export default async function DynamicPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug?.join("/") || "";

  if (slug === "home") redirect("/");
  console.log("DEBUG: Rendering DynamicPage for slug:", slug);

  // Try standard page
  let pageRes = await fetchStrapi("pages", getPagesQueryString(slug)).catch((err) => {
    console.error("DEBUG: Fetch error for slug", slug, err);
    return null;
  });

  let pageData = (pageRes?.data as any[])?.[0]?.attributes || (pageRes?.data as any[])?.[0];

  // Fallback to capability
  if (!pageData) {
    const capRes = await getCapabilityDetailedBySlug(slug);
    if (capRes) pageData = capRes.attributes || capRes;
  }

  // Fallback to service
  if (!pageData) {
    const servRes = await getServiceDetailedBySlug(slug);
    if (servRes) pageData = servRes.attributes || servRes;
  }

  if (!pageData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Page Not Found: {slug}</h1>
        <p className="mb-4">We couldn&apos;t fetch the page data for <strong>&apos;{slug}&apos;</strong> from Strapi.</p>
        <ul className="text-left bg-gray-100 p-4 rounded-md">
          <li>1. Check if a Page with slug <code>{slug}</code> exists in Strapi.</li>
          <li>2. Ensure the page is <strong>Published</strong>.</li>
          <li>3. Verify <strong>Public Permissions</strong> for the <code>Page</code> API.</li>
        </ul>
      </div>
    );
  }

  const content: any[] = pageData.content || [];
  console.log("DEBUG: content zones for slug", slug, content.length, content.map((c: any) => c.__component));

  const projectsRes = await fetchStrapi("projects", "populate[case_study]=true&populate[mainImage]=true&populate[sideImages]=true").catch(() => null);
  const projectsData = (projectsRes?.data as any[])?.map(item => ({
    id: item.id,
    ...(item.attributes || item),
  })) as ProjectData[];

  const hasProjectsSection = content.some((c: any) => c.__component === "shared.projects-section");

  return (
    <div className="w-full relative">
      <SectionRenderer sections={content} projects={projectsData} />
      {slug === "home" && !hasProjectsSection && <Projects data={projectsData} />}
      <Footer />
    </div>
  );
}
