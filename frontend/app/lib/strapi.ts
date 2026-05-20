const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://127.0.0.1:1337";
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;


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
    "populate[content][on][shared.sidebar][populate][links]=*",
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
