import Image from "next/image";
import { banglaToday } from "@/lib/format";

export default function Hero() {
  return (
    <section className="rounded-2xl border border-gray-200 bg-[#fafcfa] p-6 md:p-8">
      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
        <div className="flex-1 text-center md:text-left">
          <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
            {banglaToday()}
          </span>
          <h1 className="mt-3 text-3xl font-bold md:text-4xl">
            আজকের বাজারের দাম এক নজরে
          </h1>
          <p className="mt-3 max-w-xl text-gray-600">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত,
            গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>
          <a
            href="#সব-পণ্য"
            className="btn btn-sm sm:btn-md mt-5 border-none bg-[#058a41] text-white hover:bg-[#047a3a]"
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
          className="h-auto w-56 md:w-80"
        />
      </div>
    </section>
  );
}