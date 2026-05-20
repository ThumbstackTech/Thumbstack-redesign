import { fetchStrapi, getPagesQueryString } from "../lib/strapi";
import SectionRenderer from "../components/SectionRenderer";
import Projects from "../components/all/Projects";
import Footer from "../components/all/Footer";
import { ProjectData } from "../types/strapi";
import { redirect } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug?.join("/") || "";
  // Simple metadata fetch — page schema has no seo field, just use the title
  const pageRes = await fetchStrapi(
    "pages",
    `filters[slug][$eq]=${slug}&publicationState=preview`
  ).catch(() => null);
  const pageData = (pageRes?.data as any[])?.[0]?.attributes || (pageRes?.data as any[])?.[0];
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

  // Use the correct Strapi 5 polymorphic populate — this is required for dynamic zones
  const pageRes = await fetchStrapi("pages", getPagesQueryString(slug)).catch((err) => {
    console.error("DEBUG: Fetch error for slug", slug, err);
    return null;
  });

  console.log("DEBUG: Page data received for slug", slug, !!pageRes?.data);

  // Strapi 5 flat response — no .attributes wrapper, but keep fallback for safety
  const pageData = (pageRes?.data as any[])?.[0]?.attributes || (pageRes?.data as any[])?.[0];

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

  const projectsRes = await fetchStrapi("projects", "populate=*&publicationState=preview").catch(() => null);
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
