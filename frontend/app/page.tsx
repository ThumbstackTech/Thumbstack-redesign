import { fetchStrapi, getPagesQueryString } from "./lib/strapi";
import SectionRenderer from "./components/SectionRenderer";
import Projects from "./components/all/Projects";
import Footer from "./components/all/Footer";
import { ProjectData } from "./types/strapi";

export async function generateMetadata() {
  return {
    title: "Thumbstack | Digital Design & Development",
    description: "We build the remarkable, not the routine. Thoughtfully crafted. Bold in execution.",
  };
}

export default async function Home() {
  const pageRes = await fetchStrapi("pages", getPagesQueryString("home")).catch((err) => {
    console.error("DEBUG: Fetch error for root home page", err);
    return null;
  });
  console.log("DEBUG: Home page data received:", !!pageRes?.data);

  // Strapi 5 returns flat objects (no .attributes wrapper)
  const pageData = (pageRes?.data as any[])?.[0]?.attributes || (pageRes?.data as any[])?.[0];

  if (!pageData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Page Content Not Found</h1>
        <p className="mb-4">We couldn&apos;t fetch the home page data from Strapi.</p>
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

  const hasProjectsSection = (pageData.content as any[])?.some((c: any) => c.__component === "shared.projects-section");

  return (
    <div className="w-full relative">
      <SectionRenderer sections={pageData.content || []} projects={projectsData} />
      {!hasProjectsSection && <Projects data={projectsData} />}
      <Footer />
    </div>
  );
}
