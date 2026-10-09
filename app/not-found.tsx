import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-center justify-center px-4 text-center">
      <div className="text-7xl">🛒</div>
      <h1 className="mt-4 text-5xl font-bold">৪০৪</h1>
      <p className="mt-2 text-lg text-gray-600">
        দুঃখিত, আপনি যে পাতাটি খুঁজছেন তা পাওয়া যায়নি।
      </p>
      <Link href="/" className="btn mt-6 bg-[#058a41] text-white hover:bg-[#047a3a]">
        হোম পেজে ফিরে যান
      </Link>
    </div>
  );
}