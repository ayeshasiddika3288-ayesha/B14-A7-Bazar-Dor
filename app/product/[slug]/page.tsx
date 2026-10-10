import { headers } from "next/headers";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { getProduct } from "@/lib/api";
import { formatPrice, toBn, unitLabel, unitShort } from "@/lib/format";
import ChangeBadge from "@/components/ChangeBadge";

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) redirect(`/signin?redirect=/product/${slug}&reason=protected`);

  const p = await getProduct(slug);
  if (!p) notFound();

  const minPrice = Math.min(...p.markets.map((m) => m.min));
  const maxPrice = Math.max(...p.markets.map((m) => m.max));
  const diff = p.today - p.yesterday;
  const diffText =
    p.change.dir === "flat"
      ? "গতকালের মতোই আছে"
      : `গতকালের তুলনায় আজ দাম ${p.change.dir === "up" ? "বেড়েছে" : "কমেছে"} · ${toBn(Math.abs(diff))} টাকা`;

  return (
    <div className="space-y-5">
      <nav className="text-xs text-gray-500">
        <Link href="/">হোম</Link> › <Link href={`/category/${p.category}`}>{p.categoryNameBn}</Link> › {p.nameBn}
      </nav>

      <section className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-[#fafcfa] p-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-green-50 text-4xl">{p.image}</div>
          <div>
            <h1 className="text-2xl font-bold">{p.nameBn}</h1>
            <p className="text-sm text-gray-500">
              {unitLabel(p.unit)} ·{" "}
              <Link href={`/category/${p.category}`} className="badge badge-ghost">
                {p.categoryIcon} {p.categoryNameBn}
              </Link>
            </p>
            <p className="mt-1 text-sm text-gray-600">{diffText}</p>
          </div>
        </div>
        <div className="rounded-xl bg-green-50 px-6 py-3 text-center">
          <p className="text-xs text-gray-500">আজকের দাম</p>
          <p className="text-3xl font-bold">{toBn(p.today)}</p>
          <p className="text-xs text-gray-500">টাকা / {unitShort(p.unit)}</p>
          <div className="mt-1">
            <ChangeBadge change={p.change} />
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-[#fafcfa] p-5">
        <h2 className="mb-3 text-lg font-bold">দামের সারসংক্ষেপ</h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-gray-200 bg-white p-4">
            <p className="text-xs text-gray-500">সর্বনিম্ন দাম</p>
            <p className="text-xl font-bold text-green-700">{formatPrice(minPrice)}</p>
            <p className="text-xs text-gray-500">সবচেয়ে কম দামের বাজার</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-4">
            <p className="text-xs text-gray-500">সর্বাধিক দাম</p>
            <p className="text-xl font-bold text-red-600">{formatPrice(maxPrice)}</p>
            <p className="text-xs text-gray-500">সবচেয়ে বেশি দামের বাজার</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-4">
            <p className="text-xs text-gray-500">গড় দাম</p>
            <p className="text-xl font-bold text-green-700">{formatPrice(p.today)}</p>
            <p className="text-xs text-gray-500">{unitLabel(p.unit)}-এর হিসাবে</p>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-[#fafcfa] p-5">
        <h2 className="mb-3 text-lg font-bold">বাজারভিত্তিক আজকের দাম</h2>
        <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>বাজার</th>
                <th>বিভাগ</th>
                <th className="text-right">সর্বনিম্ন</th>
                <th className="text-right">সর্বাধিক</th>
                <th className="text-right">গড়</th>
              </tr>
            </thead>
            <tbody>
              {p.markets.map((m) => (
                <tr key={m.market}>
                  <td className="whitespace-nowrap">{m.market}</td>
                  <td className="whitespace-nowrap">{m.division}</td>
                  <td className="text-right">{formatPrice(m.min)}</td>
                  <td className="text-right">{formatPrice(m.max)}</td>
                  <td className="whitespace-nowrap text-right font-bold">{formatPrice((m.min + m.max) / 2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}