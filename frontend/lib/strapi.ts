import {
  StrapiImage,
  BrandType,
  TechStackType,
  CtaSectionComponent,
  ServiceHeroComponent,
  StackItemComponent,
  WorkItemComponent
} from "@/app/types/strapi";

export type {
  StrapiImage,
  BrandType,
  TechStackType,
  CtaSectionComponent,
  ServiceHeroComponent,
  StackItemComponent,
  WorkItemComponent
};

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://127.0.0.1:1337';
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

interface StrapiResponseWrapper<T> {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export async function fetchStrapi(
  endpoint: string,
  query?: string,
  options?: RequestInit
) {
  const url = `${STRAPI_URL}/api/${endpoint}${query ? `?${query}` : ""}`;
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      ...(STRAPI_TOKEN ? { "Authorization": `Bearer ${STRAPI_TOKEN}` } : {}),
    },
    ...options,
    cache: options?.cache || "no-store", // or next: { revalidate: 60 }
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch from Strapi: ${res.statusText}`);
  }

  return res.json();
}

/**
 * Builds the correct Strapi 5 query string for fetching a page by slug.
 * Strapi 5 dynamic zones require the polymorphic `populate[field][on][component]`
 * syntax — the simple `populate[content][populate]=*` returns an empty array.
 * NOTE: The Page schema has no `seo` field, so never add populate[seo] here.
 */
export function getPagesQueryString(slug: string): string {
  const params: string[] = [
    `filters[slug][$eq]=${slug}`,
    "publicationState=preview",
    // --- Dynamic zone components (polymorphic populate required for Strapi 5) ---
    "populate[content][on][shared.hero][populate]=*",
    "populate[content][on][shared.interactive-list][populate][items][populate][image]=true",
    "populate[content][on][shared.work-interactive-list][populate][items][populate][image]=true",
    "populate[content][on][shared.partner-brands][populate][logos]=true",
    "populate[content][on][shared.principles][populate]=*",
    "populate[content][on][shared.capabilities-features][populate][groups][populate][items]=*",
    "populate[content][on][shared.faq-section][populate][faqs]=*",
    "populate[content][on][shared.team-section][populate][members][populate][image]=true",
    "populate[content][on][shared.lets-talk][populate]=*",
    "populate[content][on][shared.build-your-stack][populate]=*",
    "populate[content][on][shared.footer][populate]=*",
    "populate[content][on][shared.info][populate]=*",
    "populate[content][on][shared.what-we-build][populate]=*",
    "populate[content][on][shared.projects-section][populate]=*",
    "populate[content][on][shared.about-hero][populate]=*",
    "populate[content][on][shared.news-hero][populate]=*",
    "populate[content][on][shared.product-driven][populate]=*",
    // hero-work has card1Image/card2Image media — use explicit fields to avoid related cascade
    "populate[content][on][shared.hero-work][populate][card1Image]=true",
    "populate[content][on][shared.hero-work][populate][card2Image]=true",
    "populate[content][on][shared.best-fit][populate]=*",
    "populate[content][on][shared.sidebar][populate][links][populate]=*",
    "populate[content][on][shared.capabilities-hero][populate]=*",
    // Explicit populate for the 4 newly added components if placed directly in dynamic zone
    "populate[content][on][shared.cta-section][populate]=*",
    "populate[content][on][shared.service-hero][populate]=*",
    "populate[content][on][shared.stack-item][populate][items][populate][image]=true",
    "populate[content][on][shared.stack-item][populate][items][populate][logo]=true",
    "populate[content][on][shared.work-item][populate][featuredImage]=true",
    "populate[content][on][shared.work-item][populate][video]=true",
    "populate[content][on][shared.work-item][populate][tags]=true",
    "populate[content][on][shared.news-and-insights-grid][populate][news_detaileds][populate][heroImage]=true",
    "populate[content][on][shared.news-and-insights-grid][populate][news_detaileds][populate][logo]=true",
    "populate[content][on][shared.news-and-insights-grid][populate][news_detaileds][populate][galleryImages]=true",
  ];
  return params.join("&");
}

export function getStrapiURL(path: string) {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  return `${STRAPI_URL}${path}`;
}

/**
 * Get optimized image URL - useful for Next.js Image component
 * Handles Strapi image URLs and returns full URL
 */
export function getStrapiImageUrl(image: any): string | null {
  if (!image) return null;

  // 1. Unpack wrapped "data" if present (common in Strapi v4/v5 queries)
  let imgObj = image;
  if (image.data !== undefined) {
    imgObj = image.data;
  }

  // 2. Handle array format (sometimes returned for media items)
  if (Array.isArray(imgObj)) {
    imgObj = imgObj[0];
  }

  if (!imgObj) return null;

  // 3. Extract attributes if nested, otherwise use raw object
  const attrs = imgObj.attributes || imgObj;

  // 4. Prioritize pre-resized optimized versions, falling back to original
  const imageUrl = attrs?.formats?.large?.url ||
    attrs?.formats?.medium?.url ||
    attrs?.url ||
    attrs?.formats?.small?.url ||
    attrs?.formats?.thumbnail?.url;

  if (!imageUrl) return null;
  return getStrapiURL(imageUrl);
}

/**
 * Fetch all published brands with their logos
 */
export async function getBrands(): Promise<BrandType[]> {
  try {
    const response = await fetch(
      `${STRAPI_URL}/api/brands?populate=logo&filters[publishedAt][$notNull]=true`,
      {
        headers: {
          'Content-Type': 'application/json',
          ...(STRAPI_TOKEN ? { "Authorization": `Bearer ${STRAPI_TOKEN}` } : {}),
        },
        next: { revalidate: 60 }, // ISR: revalidate every 60 seconds
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch brands: ${response.statusText}`);
    }

    const result: StrapiResponseWrapper<BrandType[]> = await response.json();
    return result.data || [];
  } catch (error) {
    console.error('Error fetching brands:', error);
    return [];
  }
}

/**
 * Fetch single brand by ID with logo
 */
export async function getBrandById(id: string | number): Promise<BrandType | null> {
  try {
    const response = await fetch(`${STRAPI_URL}/api/brands/${id}?populate=logo`, {
      headers: {
        'Content-Type': 'application/json',
        ...(STRAPI_TOKEN ? { "Authorization": `Bearer ${STRAPI_TOKEN}` } : {}),
      },
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch brand: ${response.statusText}`);
    }

    const result: StrapiResponseWrapper<BrandType> = await response.json();
    return result.data || null;
  } catch (error) {
    console.error('Error fetching brand:', error);
    return null;
  }
}

/**
 * Fetch all published tech stacks with their icons
 */
export async function getTechStacks(): Promise<TechStackType[]> {
  try {
    const response = await fetch(
      `${STRAPI_URL}/api/tech-stacks?populate=icon&filters[publishedAt][$notNull]=true`,
      {
        headers: {
          'Content-Type': 'application/json',
          ...(STRAPI_TOKEN ? { "Authorization": `Bearer ${STRAPI_TOKEN}` } : {}),
        },
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch tech stacks: ${response.statusText}`);
    }

    const result: StrapiResponseWrapper<TechStackType[]> = await response.json();
    return result.data || [];
  } catch (error) {
    console.error('Error fetching tech stacks:', error);
    return [];
  }
}

/**
 * Fetch single tech stack by ID with icon
 */
export async function getTechStackById(id: string | number): Promise<TechStackType | null> {
  try {
    const response = await fetch(`${STRAPI_URL}/api/tech-stacks/${id}?populate=icon`, {
      headers: {
        'Content-Type': 'application/json',
        ...(STRAPI_TOKEN ? { "Authorization": `Bearer ${STRAPI_TOKEN}` } : {}),
      },
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch tech stack: ${response.statusText}`);
    }

    const result: StrapiResponseWrapper<TechStackType> = await response.json();
    return result.data || null;
  } catch (error) {
    console.error('Error fetching tech stack:', error);
    return null;
  }
}

/**
 * Fetch CTA section component from a page
 */
export async function getCtaSectionComponent(pageSlug: string): Promise<CtaSectionComponent | null> {
  try {
    const response = await fetch(
      `${STRAPI_URL}/api/pages?filters[slug][$eq]=${pageSlug}&${getPagesQueryString(pageSlug)}`,
      {
        headers: {
          'Content-Type': 'application/json',
          ...(STRAPI_TOKEN ? { "Authorization": `Bearer ${STRAPI_TOKEN}` } : {}),
        },
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) throw new Error(`Failed to fetch page: ${response.statusText}`);

    const result: StrapiResponseWrapper<any[]> = await response.json();
    const pageData = result.data?.[0]?.attributes || result.data?.[0];
    const content = pageData?.content || [];
    return content.find((item: any) => item.__component === "shared.cta-section") || null;
  } catch (error) {
    console.error('Error fetching CTA section:', error);
    return null;
  }
}

/**
 * Fetch service hero component from a page
 */
export async function getServiceHeroComponent(pageSlug: string): Promise<ServiceHeroComponent | null> {
  try {
    const response = await fetch(
      `${STRAPI_URL}/api/pages?filters[slug][$eq]=${pageSlug}&${getPagesQueryString(pageSlug)}`,
      {
        headers: {
          'Content-Type': 'application/json',
          ...(STRAPI_TOKEN ? { "Authorization": `Bearer ${STRAPI_TOKEN}` } : {}),
        },
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) throw new Error(`Failed to fetch page: ${response.statusText}`);

    const result: StrapiResponseWrapper<any[]> = await response.json();
    const pageData = result.data?.[0]?.attributes || result.data?.[0];
    const content = pageData?.content || [];
    return content.find((item: any) => item.__component === "shared.service-hero") || null;
  } catch (error) {
    console.error('Error fetching service hero:', error);
    return null;
  }
}

/**
 * Fetch all stack items (From The Stack carousel)
 */
export async function getStackItems(): Promise<StackItemComponent[]> {
  try {
    const response = await fetch(
      `${STRAPI_URL}/api/pages?filters[slug][$eq]=home&${getPagesQueryString("home")}`,
      {
        headers: {
          'Content-Type': 'application/json',
          ...(STRAPI_TOKEN ? { "Authorization": `Bearer ${STRAPI_TOKEN}` } : {}),
        },
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) throw new Error(`Failed to fetch stack items: ${response.statusText}`);

    const result: StrapiResponseWrapper<any[]> = await response.json();
    const pageData = result.data?.[0]?.attributes || result.data?.[0];
    const content = pageData?.content || [];
    return content.filter((item: any) => item.__component === "shared.stack-item") || [];
  } catch (error) {
    console.error('Error fetching stack items:', error);
    return [];
  }
}

/**
 * Fetch all work items (case studies)
 */
export async function getWorkItems(): Promise<WorkItemComponent[]> {
  try {
    const response = await fetch(
      `${STRAPI_URL}/api/pages?filters[slug][$eq]=home&${getPagesQueryString("home")}`,
      {
        headers: {
          'Content-Type': 'application/json',
          ...(STRAPI_TOKEN ? { "Authorization": `Bearer ${STRAPI_TOKEN}` } : {}),
        },
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) throw new Error(`Failed to fetch work items: ${response.statusText}`);

    const result: StrapiResponseWrapper<any[]> = await response.json();
    const pageData = result.data?.[0]?.attributes || result.data?.[0];
    const content = pageData?.content || [];
    return content.filter((item: any) => item.__component === "shared.work-item") || [];
  } catch (error) {
    console.error('Error fetching work items:', error);
    return [];
  }
}

/**
 * Fetch single work item by slug
 */
export async function getWorkItemBySlug(slug: string): Promise<WorkItemComponent | null> {
  try {
    const response = await fetch(
      `${STRAPI_URL}/api/pages?filters[slug][$eq]=home&${getPagesQueryString("home")}`,
      {
        headers: {
          'Content-Type': 'application/json',
          ...(STRAPI_TOKEN ? { "Authorization": `Bearer ${STRAPI_TOKEN}` } : {}),
        },
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) throw new Error(`Failed to fetch work item: ${response.statusText}`);

    const result: StrapiResponseWrapper<any[]> = await response.json();
    const pageData = result.data?.[0]?.attributes || result.data?.[0];
    const content = pageData?.content || [];
    
    // Find matching work item component
    const workItem = content.find((item: any) => 
      item.__component === "shared.work-item" && 
      (item.slug === slug || (!item.slug && slug === "siorai"))
    );

    return workItem || null;
  } catch (error) {
    console.error('Error fetching work item:', error);
    return null;
  }
}

/**
 * Fetch all news detailed items
 */
export async function getNewsDetailed(): Promise<any[]> {
  try {
    const response = await fetch(
      `${STRAPI_URL}/api/news-detaileds?populate=*&filters[publishedAt][$notNull]=true`,
      {
        headers: {
          'Content-Type': 'application/json',
          ...(STRAPI_TOKEN ? { "Authorization": `Bearer ${STRAPI_TOKEN}` } : {}),
        },
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) throw new Error(`Failed to fetch news-detaileds: ${response.statusText}`);

    const result: StrapiResponseWrapper<any[]> = await response.json();
    return result.data || [];
  } catch (error) {
    console.error('Error fetching news-detaileds:', error);
    return [];
  }
}

/**
 * Fetch single news detailed by slug.
 * Primary query: fully populates media + the `sections` dynamic zone.
 * Fallback query: simple populate=* in case Strapi hasn't registered `sections` yet
 *   (e.g. backend hasn't restarted after schema change). Never throws; returns null on failure.
 */
export async function getNewsDetailedBySlug(slug: string): Promise<any | null> {
  const headers = {
    'Content-Type': 'application/json',
    ...(STRAPI_TOKEN ? { "Authorization": `Bearer ${STRAPI_TOKEN}` } : {}),
  };

  // --- Primary query: sections dynamic zone + media ---
  const primaryParams = [
    `filters[slug][$eq]=${slug}`,
    "populate[heroImage]=true",
    "populate[logo]=true",
    "populate[galleryImages]=true",
    "populate[sections][on][shared.build-your-stack][populate]=*",
    "populate[sections][on][shared.lets-talk][populate]=*",
    "populate[sections][on][shared.footer][populate]=*",
    "populate[sections][on][shared.work-interactive-list][populate][items][populate][image]=true",
    "populate[sections][on][shared.stack-item][populate][items][populate][image]=true",
    "populate[sections][on][shared.stack-item][populate][items][populate][logo]=true",
    "populate[sections][on][shared.cta-section][populate]=*",
    "populate[sections][on][shared.news-and-insights-grid][populate][news_detaileds][populate][heroImage]=true",
    "populate[sections][on][shared.news-and-insights-grid][populate][news_detaileds][populate][logo]=true",
    "populate[sections][on][shared.news-and-insights-grid][populate][news_detaileds][populate][galleryImages]=true",
    "populate[sections][on][shared.principles][populate]=*",
    "populate[sections][on][shared.faq-section][populate][faqs]=*",
    "populate[sections][on][shared.team-section][populate][members][populate][image]=true",
    "populate[sections][on][shared.partner-brands][populate][logos]=true",
    "populate[sections][on][shared.product-driven][populate]=*",
    "populate[sections][on][shared.best-fit][populate]=*",
    "populate[sections][on][shared.info][populate]=*",
    "populate[sections][on][shared.what-we-build][populate]=*",
  ].join("&");

  try {
    const res = await fetch(`${STRAPI_URL}/api/news-detaileds?${primaryParams}`, {
      headers,
      next: { revalidate: 60 },
    });

    if (res.ok) {
      const result: StrapiResponseWrapper<any[]> = await res.json();
      return result.data?.[0] || null;
    }

    // 400 usually means `sections` field not yet registered (backend needs restart)
    // Fall through to simple fallback query below
    console.warn(`Primary news-detailed query failed (${res.status}), falling back to simple populate. Restart the Strapi backend to enable dynamic sections.`);
  } catch (error) {
    console.warn("Primary news-detailed fetch threw, falling back:", error);
  }

  // --- Fallback query: basic media populate only (no sections) ---
  try {
    const fallbackParams = [
      `filters[slug][$eq]=${slug}`,
      "populate[heroImage]=true",
      "populate[logo]=true",
      "populate[galleryImages]=true",
    ].join("&");

    const res = await fetch(`${STRAPI_URL}/api/news-detaileds?${fallbackParams}`, {
      headers,
      next: { revalidate: 60 },
    });

    if (!res.ok) throw new Error(`Failed to fetch news-detailed: ${res.statusText}`);

    const result: StrapiResponseWrapper<any[]> = await res.json();
    return result.data?.[0] || null;
  } catch (error) {
    console.error("Error fetching news-detailed:", error);
    return null;
  }
}

