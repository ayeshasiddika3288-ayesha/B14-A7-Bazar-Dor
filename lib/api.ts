import type { Category, Product } from "@/types";

const BASES = [
  "https://api.api-store.workers.dev/api/bazardor",
  "https://api.abcz.workers.dev/api/bazardor",
];

async function request<T>(path: string): Promise<T | null> {
  for (const base of BASES) {
    try {
      const res = await fetch(`${base}${path}`, { next: { revalidate: 300 } });
      if (res.ok) return (await res.json()) as T;
    } catch {
      // try next base url
    }
  }
  return null;
}

export async function getProducts(): Promise<Product[]> {
  return (await request<Product[]>("/products")) ?? [];
}

export async function getCategories(): Promise<Category[]> {
  return (await request<Category[]>("/categories")) ?? [];
}

export async function getProduct(slug: string): Promise<Product | null> {
  const products = await getProducts();
  return products.find((p) => p.slug === slug) ?? null;
}