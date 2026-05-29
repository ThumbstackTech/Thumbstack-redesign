export interface StrapiImage {
  id: number;
  url: string;
  alternativeText: string | null;
  name?: string;
  caption?: string | null;
  width?: number;
  height?: number;
  formats?: {
    thumbnail?: { url: string };
    small?: { url: string };
    medium?: { url: string };
    large?: { url: string };
  };
  hash?: string;
  ext?: string;
  mime?: string;
  size?: number;
  previewUrl?: string | null;
  provider?: string;
  provider_metadata?: unknown | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface BrandType {
  id: number;
  documentId?: string;
  name: string;
  logo: StrapiImage | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
}

export interface TechStackType {
  id: number;
  documentId?: string;
  name: string;
  icon: StrapiImage | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
}

export interface CtaSectionComponent {
  subtitle: string;
  mainHeading: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
}

export interface ServiceHeroComponent {
  mainHeading: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
}

export interface StackItemComponent {
  id: number;
  title: string;
  description: string;
  image: StrapiImage | null;
  logo: StrapiImage | null;
  tag: "Blog" | "Article" | "Case Study" | "News" | "Tutorial";
  link?: string;
}

export interface FromTheStackData {
  id: number;
  __component: "shared.stack-item";
  heading: string;
  subheading: string;
  ctaText: string;
  ctaLink: string;
  items: StackItemComponent[];
}

export interface WorkItemComponent {
  title: string;
  subtitle: string;
  tags: Array<{ label: string }>;
  featuredImage: StrapiImage | null;
  video: StrapiImage | null;
  playButtonColor: string;
  quote: string;
  clientName: string;
  clientTitle: string;
  clientCompany: string;
  companyLogo: string;
  companyLogoColor: string;
  ctaText: string;
  ctaLink: string;
  slug: string;
}

export interface StrapiResponse<T> {
  data: {
    id: number;
    attributes: T;
  } | {
    id: number;
    attributes: T;
  }[];
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface HeroData {
  titlePrefix: string;
  titleMiddle: string;
  titleSuffix: string;
  mainHeadingLine1: string;
  mainHeadingLine2: string;
  subtext1: string;
  subtext2: string;
  ctaText: string;
  ctaLink: string;
}

export interface ProjectData {
  id: number;
  name: string;
  tagline: string;
  description: string;
  tags: any;
  bg: string;
  barBg: string;
  barBorder: string;
  accentColor: string;
  cursorColor: string;
  websiteUrl: string;
  caseStudyUrl: string;
  layout: "mobile" | "desktop";
  slug: string;
  mainImage: StrapiImage | null;
  sideImages: { data: { attributes: StrapiImage }[] } | null;
}

export interface CapabilitiesSectionData {
  label: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  viewWorkText: string;
  viewWorkLink: string;
}

export interface CapabilityCard {
  id?: number;
  title: string;
  description: string;
  iconType: 
    | "server-stack"
    | "globe"
    | "ai-brain"
    | "mobile"
    | "code-xml"
    | "computer-programming"
    | "web-design"
    | "shopify"
    | "shopping-cart"
    | "user-group"
    | "mentoring";
  buttonText: string;
  buttonLink?: string;
}

export interface CapabilitiesComponentData {
  id?: number;
  __component: "shared.capabilities";
  enableSection?: boolean;
  capabilities?: CapabilityCard[];
}

export interface CapabilitiesHeroDetailData {
  id: number;
  __component: "shared.capabilities-hero-detail";
  label: string;
  title: string;
  description: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
}

export interface CapabilitiesInfoData {
  id: number;
  __component: "shared.capabilities-info";
  backgroundColor: string;
  accentColor: string;
  headingLine1: string;
  headingLine2: string;
  headingLine3: string;
  paragraphs?: FeatureItem[];
}

export interface FeatureItem {
  id: number;
  text: string;
}

export interface FeatureGroup {
  id: number;
  title: string;
  items: FeatureItem[];
}

export interface CapabilitiesFeaturesData {
  id: number;
  __component: "shared.capabilities-features";
  title: string;
  description: string;
  groups: FeatureGroup[];
}

export interface ListItem {
  id: number;
  title: string;
  description: string;
  image: { data: { attributes: StrapiImage } } | StrapiImage;
  tags?: string;
  link: string;
}

export interface InteractiveListData {
  id: number;
  __component: "shared.interactive-list";
  heading: string;
  subheading: string;
  ctaText: string;
  ctaLink: string;
  items: ListItem[];
}

export interface CapabilityItem {
  id: number;
  label: string;
  title: string;
  description: string;
  tags?: string;
  link: string;
  linkText?: string;
}

export interface CapabilitiesListingData {
  id: number;
  __component: "shared.capabilities-listing";
  heading: string;
  subheading: string;
  items: CapabilityItem[];
}

export interface ProcessStage {
  id: number;
  title: string;
  tagline: string;
  description: string;
  icon: "lightbulb" | "paintroller" | "code-circle" | "sparkle";
  features?: string;
  link: string;
  linkText?: string;
}

export interface HowWeWorkData {
  id: number;
  __component: "shared.how-we-work";
  heading: string;
  subheading: string;
  stages: ProcessStage[];
}

export interface WorkInteractiveListData {
  id: number;
  __component: "shared.work-interactive-list";
  heading: string;
  subheading: string;
  ctaText: string;
  ctaLink: string;
  items: ListItem[];
}

export interface PartnerBrandsData {
  id: number;
  __component: "shared.partner-brands";
  heading: string;
  logos: { data: { attributes: StrapiImage }[] };
}

export interface GridItem {
  id: number;
  title: string;
  description: string;
  icon: { data: { attributes: StrapiImage } };
  linkText?: string;
  linkUrl?: string;
}

export interface PrinciplesData {
  id: number;
  __component: "shared.principles";
  heading: string;
  description: string;
  items: GridItem[];
  marqueeItems?: string;
  ctaText?: string;
  ctaLink?: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface FAQSectionData {
  id: number;
  __component: "shared.faq-section";
  heading: string;
  faqs: FAQItem[];
}

export interface AboutHeroData {
  id: number;
  __component: "shared.about-hero";
  heading: string;
  subheading: string;
  bgColor: string;
  textColor: string;
  image1?: { data?: { attributes?: StrapiImage } };
  image2?: { data?: { attributes?: StrapiImage } };
  image3?: { data?: { attributes?: StrapiImage } };
}

export interface NewsHeroData {
  id: number;
  __component: "shared.news-hero";
  heading: string;
  description: string;
  bgColor: string;
  textColor: string;
  ctaText?: string;
  ctaLink?: string;
}



export interface ProductDrivenData {
  id: number;
  __component: "shared.product-driven";
  headingLine1: string;
  headingLine2: string;
  bgColor: string;
  logos?: { data?: { attributes?: StrapiImage }[] };
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: { data: { attributes: StrapiImage } };
}

export interface TeamSectionData {
  id: number;
  __component: "shared.team-section";
  heading: string;
  description?: string;
  members: TeamMember[];
}
export interface HeroWorkData {
  id: number;
  __component: "shared.hero-work";
  headingLine1: string;
  headingLine2?: string;
  description?: string;
  bgColor?: string;
  textColor?: string;
  ctaText?: string;
  ctaLink?: string;
  card1Image?: { data?: { attributes?: StrapiImage } };
  card1BgColor?: string;
  card1BadgeText?: string;
  card1BadgeSubtext?: string;
  card2Image?: { data?: { attributes?: StrapiImage } };
  card2BgColor?: string;
}

export interface BestFitData {
  id: number;
  __component: "shared.best-fit";
  heading: string;
  description: string;
  bgColor?: string;
  textColor?: string;
  scenarios?: string;
}

export interface SidebarLink {
  id: number;
  label?: string;
  url?: string;
  page?: {
    data?: {
      attributes?: {
        slug: string;
        title: string;
      }
    } | null;
  } | null;
}

export interface SidebarData {
  id: number;
  __component: "shared.sidebar";
  logoText?: string;
  email?: string;
  links?: SidebarLink[];
}

export interface ServiceInfoItem {
  id: number;
  title: string;
  description: string;
  tags?: string;
  outcomeTitle?: string;
  outcomeDescription?: string;
}

export interface ServiceInfoData {
  id: number;
  __component: "shared.service-info";
  tagline?: string;
  items: ServiceInfoItem[];
}

