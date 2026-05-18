import { fetchStrapi } from "./lib/strapi";
import SectionRenderer from "./components/SectionRenderer";
import Projects from "./components/all/Projects";
import Footer from "./components/all/Footer";
import { ProjectData } from "./types/strapi";
import { notFound } from "next/navigation";

export async function generateMetadata() {
  const pageRes = await fetchStrapi("pages", "filters[slug][$eq]=home&populate[seo][populate]=*&publicationState=preview").catch(() => null);
  const pageData = (pageRes?.data as any[])?.[0]?.attributes || (pageRes?.data as any[])?.[0];

  if (!pageData) return {};

  const seo = pageData.seo;
  return {
    title: seo?.metaTitle || "Thumbstack | Digital Design & Development",
    description: seo?.metaDescription,
  };
}

export default async function Home() {
  let fetchError = null;
  const queryString = "filters[slug][$eq]=home&populate[content][populate]=*";
  const fullUrl = `http://localhost:1337/api/pages?${queryString}`;

  const pageRes = await fetchStrapi("pages", queryString).catch((err) => {
    console.error("DEBUG: Fetch error for root home page", err);
    fetchError = err.message;
    return null;
  });
  console.log("DEBUG: Home page data received:", !!pageRes?.data);
  const pageData = (pageRes?.data as any[])?.[0]?.attributes || (pageRes?.data as any[])?.[0];

  if (!pageData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Page Content Not Found</h1>
        <p className="mb-4 text-red-500 font-mono text-sm">{fetchError ? `Error: ${fetchError}` : "No data returned from Strapi"}</p>
        <div className="mb-6 p-2 bg-gray-200 rounded text-xs break-all font-mono">
          <strong>API URL:</strong><br />
          <a href={fullUrl} target="_blank" className="text-blue-600 underline">{fullUrl}</a>
        </div>
        <p className="mb-4">We couldn't fetch the page data for the <strong>'home'</strong> slug from Strapi.</p>
        <ul className="text-left bg-gray-100 p-4 rounded-md">
          <li>1. Check if a Page with slug <code>home</code> exists in Strapi.</li>
          <li>2. Ensure the page is <strong>Published</strong>.</li>
          <li>3. Verify <strong>Public Permissions</strong> for the <code>Page</code> API (find/findOne).</li>
        </ul>
      </div>
    );
  }

  const projectsRes = await fetchStrapi("projects", "populate=*&publicationState=preview").catch(() => null);
  const projectsData = (projectsRes?.data as any[])?.map(item => ({
    id: item.id,
    ...(item.attributes || item)
  })) as ProjectData[];

  return (
    <div className="w-full relative">
      <SectionRenderer sections={pageData.content || []} />
      <Projects data={projectsData} />
      <Footer />
    </div>
  );
}





