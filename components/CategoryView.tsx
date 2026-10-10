"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import ProductGrid from "./ProductGrid";
import SortDropdown, { type SortKey } from "./SortDropdown";
import { toBn } from "@/lib/format";
import type { Category, Product } from "@/types";

export default function CategoryView({
  category,
  products,
}: {
  category: Category;
  products: Product[];
}) {
  const [sort, setSort] = useState<SortKey>("default");

  const sorted = useMemo(() => {
    const list = [...products];
    if (sort === "asc") list.sort((a, b) => a.today - b.today);
    if (sort === "desc") list.sort((a, b) => b.today - a.today);
    return list;
  }, [products, sort]);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-[#fafcfa] p-5">
        <span className="text-4xl">{category.icon}</span>
        <div>
          <h1 className="text-2xl font-bold">{category.nameBn}</h1>
          <p className="text-sm text-gray-500">{toBn(products.length)}টি পণ্যের আজকের দাম ও পরিবর্তন</p>
        </div>
      </div>

      {products.length === 0 ? (
        <div className="flex flex-col items-center py-16 text-center">
          <div className="text-6xl">🛒</div>
          <h2 className="mt-3 text-2xl font-bold">কোনো পণ্য পাওয়া যায়নি</h2>
          <Link href="/" className="btn mt-5 border-none bg-[#058a41] text-white hover:bg-[#047a3a]">
            হোম পেজে ফিরে যান
          </Link>
        </div>
      ) : (
        <>
          <div className="rounded-2xl border border-gray-200 bg-[#fafcfa] p-4">
            <SortDropdown value={sort} onChange={setSort} />
          </div>
          <p className="text-sm text-gray-500">মোট {toBn(sorted.length)}টি পণ্য দেখানো হচ্ছে</p>
          <ProductGrid products={sorted} />
        </>
      )}
    </div>
  );
}