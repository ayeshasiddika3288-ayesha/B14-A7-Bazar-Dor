import Image from "next/image";
import { banglaToday } from "@/lib/format";

export default function Hero() {
  return (
    <section className="rounded-2xl border border-gray-200 bg-[#fafcfa] p-5 md:p-6">
      <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
        <div className="flex-1 text-center md:text-left">
          <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
            {banglaToday()}
          </span>
          <h1 className="mt-3 text-2xl font-bold md:text-3xl">আজকের বাজারের দাম এক নজরে</h1>
          <p className="mt-2 max-w-xl text-sm text-gray-600 md:text-base">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং
            দামের পরিবর্তন এক জায়গায়।
          </p>
          <a
            href="#সব-পণ্য"
            className="btn btn-sm sm:btn-md mt-4 border-none bg-[#058a41] text-white hover:bg-[#047a3a]"
          >
            সব পণ্য দেখুন
          </a>
        </div>
        <Image
          src="/bazar-hero.png"
          alt="বাজার"
          width={320}
          height={240}
          priority
          className="h-auto w-40 md:w-60"
        />
      </div>
    </section>
  );
}