import { notFound } from "next/navigation";
import CategoryView from "@/components/CategoryView";
import { getCategories, getProducts } from "@/lib/api";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [categories, products] = await Promise.all([getCategories(), getProducts()]);

  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound(); // invalid slug -> 404 page

  const items = products.filter((p) => p.category === slug);
  return <CategoryView category={category} products={items} />;
}