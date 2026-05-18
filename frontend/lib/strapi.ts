const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

interface StrapiResponse<T> {
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

interface StrapiImage {
  id: number;
  documentId?: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats?: {
    large?: { url: string };
    medium?: { url: string };
    small?: { url: string };
    thumbnail?: { url: string };
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: unknown | null;
  createdAt: string;
  updatedAt: string;
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

/**
 * Get full image URL from Strapi
 * Handles both absolute URLs and relative paths
 */
export function getStrapiImageUrl(image: StrapiImage | null | undefined): string | null {
  if (!image?.url) return null;

  if (image.url.startsWith('http://') || image.url.startsWith('https://')) {
    return image.url;
  }

  return `${BASE_URL}${image.url}`;
}

/**
 * Fetch all published brands with their logos
 */
export async function getBrands(): Promise<BrandType[]> {
  try {
    const response = await fetch(
      `${BASE_URL}/api/brands?populate=logo&filters[publishedAt][$notNull]=true`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        next: { revalidate: 60 }, // ISR: revalidate every 60 seconds
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch brands: ${response.statusText}`);
    }

    const result: StrapiResponse<BrandType[]> = await response.json();
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
    const response = await fetch(`${BASE_URL}/api/brands/${id}?populate=logo`, {
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch brand: ${response.statusText}`);
    }

    const result: StrapiResponse<BrandType> = await response.json();
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
      `${BASE_URL}/api/tech-stacks?populate=icon&filters[publishedAt][$notNull]=true`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch tech stacks: ${response.statusText}`);
    }

    const result: StrapiResponse<TechStackType[]> = await response.json();
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
    const response = await fetch(`${BASE_URL}/api/tech-stacks/${id}?populate=icon`, {
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch tech stack: ${response.statusText}`);
    }

    const result: StrapiResponse<TechStackType> = await response.json();
    return result.data || null;
  } catch (error) {
    console.error('Error fetching tech stack:', error);
    return null;
  }
}
