import { fetchStrapi } from "../lib/strapi";
import SectionRenderer from "../components/SectionRenderer";
import Projects from "../components/all/Projects";
import Footer from "../components/all/Footer";
import { ProjectData } from "../types/strapi";
import { notFound, redirect } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug?.join("/") || "";
  const pageRes = await fetchStrapi("pages", `filters[slug][$eq]=${slug}&populate[seo][populate]=*&publicationState=preview`).catch(() => null);
  const pageData = (pageRes?.data as any[])?.[0]?.attributes || (pageRes?.data as any[])?.[0];

  if (!pageData) return {};

  const seo = pageData.seo;
  return {
    title: seo?.metaTitle || pageData.title,
    description: seo?.metaDescription,
    // Add other SEO fields as needed
  };
}

export default async function DynamicPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug?.join("/") || "";

  if (slug === "home") redirect("/");
  console.log("DEBUG: Rendering DynamicPage for slug:", slug);

  const pageRes = await fetchStrapi("pages", `filters[slug][$eq]=${slug}&populate[content][populate]=*&publicationState=preview`).catch((err) => {
    console.error("DEBUG: Fetch error for slug", slug, err);
    return null;
  });
  console.log("DEBUG: Page data received for slug", slug, !!pageRes?.data);
  const pageData = (pageRes?.data as any[])?.[0]?.attributes;

  if (!pageData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Page Not Found: {slug}</h1>
        <p className="mb-4">We couldn't fetch the page data for <strong>'{slug}'</strong> from Strapi.</p>
        <ul className="text-left bg-gray-100 p-4 rounded-md">
          <li>1. Check if a Page with slug <code>{slug}</code> exists in Strapi.</li>
          <li>2. Ensure the page is <strong>Published</strong>.</li>
          <li>3. Verify <strong>Public Permissions</strong> for the <code>Page</code> API.</li>
        </ul>
      </div>
    );
  }

  const content = pageData.content || [];

  // Optionally fetch projects if needed globally or per section
  const projectsRes = await fetchStrapi("projects", "populate=*&publicationState=preview").catch(() => null);
  const projectsData = (projectsRes?.data as any[])?.map(item => ({
    id: item.id,
    ...item.attributes
  })) as ProjectData[];

  return (
    <div className="w-full relative">
      <SectionRenderer sections={content} />
      {/* 
        If some components are not in the dynamic zone yet, 
        we handle them here or better, move them to Strapi components 
      */}
      {slug === "home" && <Projects data={projectsData} />}
      <Footer />
    </div>
  );
}
