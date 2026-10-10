import Link from "next/link";
import { formatPrice, unitLabel } from "@/lib/format";
import type { Product } from "@/types";
import ChangeBadge from "./ChangeBadge";

export default function ProductCard({ product: p }: { product: Product }) {
  return (
    <Link
      href={`/product/${p.slug}`}
      className="block rounded-xl border border-gray-200 bg-[#fafcfa] p-4 transition hover:shadow-md"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-green-50 text-2xl">
          {p.image}
        </div>
        <div className="min-w-0">
          <h3 className="truncate font-semibold leading-tight">{p.nameBn}</h3>
          <p className="text-xs text-gray-500">{unitLabel(p.unit)}</p>
        </div>
      </div>
      <p className="mt-3 text-xs text-gray-500">আজকের দাম</p>
      <div className="flex items-end justify-between gap-2">
        <p className="text-lg font-bold">{formatPrice(p.today)}</p>
        <ChangeBadge change={p.change} />
      </div>
    </Link>
  );
}