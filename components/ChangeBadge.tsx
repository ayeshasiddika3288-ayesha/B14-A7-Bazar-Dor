import { formatChange } from "@/lib/format";
import type { Product } from "@/types";

export default function ChangeBadge({ change }: { change: Product["change"] }) {
  const style =
    change.dir === "up"
      ? "bg-red-50 text-red-600"
      : change.dir === "down"
      ? "bg-green-50 text-green-700"
      : "bg-gray-100 text-gray-600";
  const icon = change.dir === "up" ? "▲" : change.dir === "down" ? "▼" : "—";

  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold ${style}`}>
      {icon} {formatChange(change.pct)}
    </span>
  );
}