export interface GalleryImage {
  url: string;
  alt?: string;
}

export interface CaseStudyData {
  slug: string;
  title: string;
  subtitle: string;
  clientName: string;
  tags: string[];
  readTime: string;
  date: string;
  heroImage: { url: string; alt?: string };
  challengeText: string;
  challengeImages?: GalleryImage[];
  approachText: string;
  approachBrandText?: string;
  approachPrinciples?: string[];
  quote: string;
  features: string[];
  gallery: GalleryImage[];
  projectUrl: string;
  accentColor?: string;
  backgroundColor?: string;
}
