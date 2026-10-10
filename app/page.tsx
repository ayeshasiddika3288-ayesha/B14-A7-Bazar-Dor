import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import { getProducts } from "@/lib/api";
import { toBn } from "@/lib/format";

export default async function Home() {
  const products = await getProducts();

  const risers = products
    .filter((p) => p.change.dir === "up")
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);
  const fallers = products
    .filter((p) => p.change.dir === "down")
    .sort((a, b) => a.change.pct - b.change.pct)
    .slice(0, 6);

  return (
    <div className="space-y-10">
      <Hero />

      <section>
        <h2 className="mb-4 text-xl font-bold">
          <span className="text-red-600">▲</span> আজ দাম বেড়েছে
        </h2>
        <ProductGrid products={risers} />
      </section>

      <section>
        <h2 className="mb-4 text-xl font-bold">
          <span className="text-green-700">▼</span> আজ দাম কমেছে
        </h2>
        <ProductGrid products={fallers} />
      </section>

      <section id="সব-পণ্য" className="scroll-mt-4">
        <h2 className="text-xl font-bold">সব পণ্য</h2>
        <p className="mb-4 text-sm text-gray-500">মোট {toBn(products.length)}টি পণ্য দেখানো হচ্ছে</p>
        {products.length ? (
          <ProductGrid products={products} />
        ) : (
          <p className="text-gray-500">ডেটা লোড করা যায়নি। একটু পরে আবার চেষ্টা করুন।</p>
        )}
      </section>
    </div>
  );
}