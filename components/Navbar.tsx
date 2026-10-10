import Link from "next/link";
import { getCategories } from "@/lib/api";
import { banglaToday } from "@/lib/format";
import CategoryLinks from "./CategoryLinks";
import UserMenu from "./UserMenu";

export default async function Navbar() {
  const categories = await getCategories();
  return (
    <header className="border-b border-gray-200 bg-[#fafcfa]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#058a41] text-xl">🛒</span>
          <div>
            <p className="text-lg font-bold leading-tight">বাজার দর</p>
            <p className="text-xs text-gray-500">{banglaToday()}</p>
          </div>
        </Link>
        <UserMenu />
      </div>
      <CategoryLinks categories={categories} />
    </header>
  );
}