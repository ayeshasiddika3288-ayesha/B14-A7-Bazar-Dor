import { getProducts } from "@/lib/api";
import { toBn, formatChange, unitShort } from "@/lib/format";

export default async function Ticker() {
  const products = await getProducts();
  if (!products.length) return null;
  const items = [...products, ...products]; // duplicate for seamless loop

  return (
    <div className="overflow-hidden border-b border-gray-200 bg-white">
      <div className="marquee-track py-2 text-sm">
        {items.map((p, i) => {
          const color =
            p.change.dir === "up" ? "text-red-600" : p.change.dir === "down" ? "text-green-700" : "text-gray-500";
          const icon = p.change.dir === "up" ? "▲" : p.change.dir === "down" ? "▼" : "—";
          return (
            <span key={`${p.id}-${i}`} className="flex items-center gap-2 whitespace-nowrap border-r border-gray-200 px-4">
              <span>{p.image}</span>
              <span className="font-medium">{p.nameBn}</span>
              <span className="text-gray-600">
                {toBn(p.today)} টাকা/{unitShort(p.unit)}
              </span>
              <span className={`font-semibold ${color}`}>
                {icon} {formatChange(p.change.pct)}
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
}