import { GridSkeleton } from "@/components/Skeletons";

export default function Loading() {
  return (
    <div className="space-y-8">
      <div className="skeleton h-56 w-full rounded-2xl" />
      <GridSkeleton count={6} />
    </div>
  );
}