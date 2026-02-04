const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

interface FetchOptions {
  populate?: string;
  filters?: Record<string, Record<string, string>>;
  sort?: string | string[];
  pagination?: {
    page?: number;
    pageSize?: number;
  };
  status?: "draft" | "published";
}

export async function fetchAPI<T>(
  path: string,
  options: FetchOptions = {}
): Promise<T> {
  const { populate, filters, sort, pagination, status } = options;

  const params = new URLSearchParams();

  // Use simple populate syntax for Strapi 5
  if (populate) {
    params.append("populate", populate);
  }

  if (filters) {
    Object.entries(filters).forEach(([key, value]) => {
      Object.entries(value).forEach(([op, val]) => {
        params.append(`filters[${key}][${op}]`, val);
      });
    });
  }

  if (sort) {
    const sortArray = Array.isArray(sort) ? sort : [sort];
    sortArray.forEach((s, i) => params.append(`sort[${i}]`, s));
  }

  if (pagination) {
    if (pagination.page) params.append("pagination[page]", String(pagination.page));
    if (pagination.pageSize) params.append("pagination[pageSize]", String(pagination.pageSize));
  }

  if (status) {
    params.append("status", status);
  }

  const url = `${STRAPI_URL}/api${path}?${params.toString()}`;

  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (STRAPI_API_TOKEN) {
    headers["Authorization"] = `Bearer ${STRAPI_API_TOKEN}`;
  }

  const res = await fetch(url, {
    headers,
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${path}: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

export function getStrapiMedia(url: string | null | undefined): string | null {
  if (!url) return null;
  if (url.startsWith("http") || url.startsWith("//")) return url;
  return `${STRAPI_URL}${url}`;
}

// Fetch all articles
export async function getArticles(page = 1, pageSize = 10) {
  return fetchAPI<StrapiResponse<Article[]>>("/articles", {
    populate: "*",
    sort: "createdAt:desc",
    pagination: { page, pageSize },
  });
}

// Fetch single article by slug
export async function getArticleBySlug(slug: string, preview = false) {
  const response = await fetchAPI<StrapiResponse<Article[]>>("/articles", {
    filters: { slug: { $eq: slug } },
    populate: "*",
    status: preview ? "draft" : "published",
  });

  return response.data?.[0] || null;
}

// Fetch all categories
export async function getCategories() {
  return fetchAPI<StrapiResponse<Category[]>>("/categories", {
    populate: "*",
  });
}

// Fetch category by slug with articles
export async function getCategoryBySlug(slug: string) {
  const response = await fetchAPI<StrapiResponse<Category[]>>("/categories", {
    filters: { slug: { $eq: slug } },
    populate: "*",
  });

  return response.data?.[0] || null;
}

// Fetch global settings
export async function getGlobal() {
  return fetchAPI<StrapiResponse<Global>>("/global", {
    populate: "*",
  });
}

// Fetch homepage
export async function getHomepage() {
  return fetchAPI<StrapiResponse<Homepage>>("/homepage", {
    populate: "*",
  });
}

// Fetch services
export async function getServices() {
  return fetchAPI<StrapiResponse<Service[]>>("/services", {
    populate: "*",
    sort: "order:asc",
  });
}

// Fetch features
export async function getFeatures() {
  return fetchAPI<StrapiResponse<Feature[]>>("/features", {
    populate: "*",
    sort: "order:asc",
  });
}

// Types
export interface StrapiResponse<T> {
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

export interface StrapiImage {
  url: string;
  alternativeText?: string;
  width?: number;
  height?: number;
}

export interface Author {
  id: number;
  documentId: string;
  name: string;
  email?: string;
  avatar?: StrapiImage;
}

export interface Category {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  description?: string;
  articles?: Article[];
}

export interface Article {
  id: number;
  documentId: string;
  title: string;
  description: string;
  slug: string;
  cover?: StrapiImage;
  author?: Author;
  category?: Category;
  blocks?: Block[];
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}

export interface Global {
  siteName: string;
  siteDescription: string;
  favicon?: StrapiImage;
  defaultSeo?: {
    metaTitle: string;
    metaDescription: string;
    shareImage?: StrapiImage;
  };
}

export type Block = RichTextBlock | MediaBlock | QuoteBlock | SliderBlock;

export interface RichTextBlock {
  __component: "shared.rich-text";
  id: number;
  body: string;
}

export interface MediaBlock {
  __component: "shared.media";
  id: number;
  file: StrapiImage;
}

export interface QuoteBlock {
  __component: "shared.quote";
  id: number;
  title?: string;
  body: string;
}

export interface SliderBlock {
  __component: "shared.slider";
  id: number;
  files: StrapiImage[];
}

export interface Homepage {
  heroTitle: string;
  heroSubtitle?: string;
  heroButtonText?: string;
  heroButtonLink?: string;
  heroImage?: StrapiImage;
  servicesTitle?: string;
  servicesSubtitle?: string;
  whyChooseUsTitle?: string;
  mediaTitle?: string;
  mediaSubtitle?: string;
  mediaDescription?: string;
  mediaVideoUrl?: string;
}

export interface Service {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  description?: string;
  shortDescription?: string;
  image?: StrapiImage;
  icon?: string;
  order: number;
  buttonText?: string;
  buttonLink?: string;
}

export interface Feature {
  id: number;
  documentId: string;
  title: string;
  description?: string;
  icon?: string;
  image?: StrapiImage;
  linkText?: string;
  linkUrl?: string;
  order: number;
}
