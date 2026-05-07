import { notFound } from "next/navigation";
import { caseStudies } from "../../data/case-studies";
import CaseStudyTemplate from "../../components/all/CaseStudyTemplate";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const data = caseStudies[slug];

  if (!data) {
    notFound();
  }

  return <CaseStudyTemplate data={data} />;
}

// Generate static paths for all case studies
export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}
