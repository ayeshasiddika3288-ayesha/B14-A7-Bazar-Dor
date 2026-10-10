"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Category } from "@/types";

export default function CategoryLinks({ categories }: { categories: Category[] }) {
  const pathname = usePathname();
  return (
    <nav className="mx-auto max-w-6xl overflow-x-auto px-4 pb-3">
      <ul className="flex w-max gap-2 text-sm">
        {categories.map((c) => {
          const active = pathname === `/category/${c.slug}`;
          return (
            <li key={c.id}>
              <Link
                href={`/category/${c.slug}`}
                className={`flex items-center gap-1 whitespace-nowrap rounded-lg px-3 py-1.5 transition ${
                  active ? "bg-[#058a41] text-white" : "text-gray-700 hover:bg-green-50"
                }`}
              >
                <span>{c.icon}</span>
                {c.nameBn}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}