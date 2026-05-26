import { getServiceDetailedBySlug } from "@/lib/strapi";
import { notFound } from "next/navigation";
import SectionRenderer from "../../components/SectionRenderer";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const page = await getServiceDetailedBySlug(slug).catch(() => null);
  if (!page) return {};

  const attrs = page.attributes || page;
  return {
    title: `${attrs.title} | Services | Thumbstack`,
    description: attrs.description || "",
  };
}

export default async function ServiceDetailedPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const page = await getServiceDetailedBySlug(slug).catch((err) => {
    console.error("DEBUG: Fetch error for service-detailed:", err);
    return null;
  });

  if (!page) {
    return notFound();
  }

  const attrs = page.attributes || page;
  const content: any[] = attrs.content || [];

  return (
    <div className="w-full relative">
      {/* Dynamic sections added via Strapi */}
      {content.length > 0 && (
        <SectionRenderer sections={content} />
      )}
    </div>
  );
}
