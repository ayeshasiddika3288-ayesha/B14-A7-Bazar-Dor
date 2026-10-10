"use client";

export type SortKey = "default" | "asc" | "desc";

export default function SortDropdown({
  value,
  onChange,
}: {
  value: SortKey;
  onChange: (v: SortKey) => void;
}) {
  return (
    <div className="flex items-center justify-end gap-2 text-sm">
      <label htmlFor="sort" className="text-gray-600">
        সাজান
      </label>
      <select
        id="sort"
        value={value}
        onChange={(e) => onChange(e.target.value as SortKey)}
        className="select select-sm w-auto bg-white"
      >
        <option value="default">ডিফল্ট</option>
        <option value="asc">দাম: কম থেকে বেশি</option>
        <option value="desc">দাম: বেশি থেকে কম</option>
      </select>
    </div>
  );
}