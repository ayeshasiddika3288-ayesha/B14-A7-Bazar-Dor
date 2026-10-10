"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import SocialButtons from "@/components/SocialButtons";

export default function SignUpPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const password = String(form.get("password") || "");
    const confirm = String(form.get("confirm") || "");

    if (!name || !email || !password) return toast.error("সব ঘর পূরণ করুন");
    if (password.length < 8) return toast.error("পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে");
    if (password !== confirm) return toast.error("পাসওয়ার্ড দুটি মিলছে না");

    setLoading(true);
    const { error } = await authClient.signUp.email({ name, email, password });
    setLoading(false);

    if (error) return toast.error(error.message || "অ্যাকাউন্ট তৈরি করা যায়নি");
    toast.success("অ্যাকাউন্ট তৈরি হয়েছে, এবার সাইন ইন করুন");
    router.push("/signin");
  }

  return (
    <div className="mx-auto max-w-md py-8">
      <h1 className="text-center text-2xl font-bold">অ্যাকাউন্ট তৈরি করুন</h1>
      <p className="mb-5 mt-1 text-center text-sm text-gray-500">বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।</p>
      <div className="rounded-2xl border border-gray-200 bg-[#fafcfa] p-5">
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium">নাম</label>
            <input name="name" placeholder="যেমন: রহিম উদ্দিন" className="input input-bordered w-full bg-white" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">ইমেইল</label>
            <input name="email" type="email" placeholder="you@example.com" className="input input-bordered w-full bg-white" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">পাসওয়ার্ড</label>
            <input name="password" type="password" placeholder="কমপক্ষে ৮ অক্ষর" className="input input-bordered w-full bg-white" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">পাসওয়ার্ড নিশ্চিত করুন</label>
            <input name="confirm" type="password" placeholder="আবার লিখুন" className="input input-bordered w-full bg-white" />
          </div>
          <button disabled={loading} className="btn w-full border-none bg-[#058a41] text-white hover:bg-[#047a3a]">
            {loading ? <span className="loading loading-spinner loading-sm" /> : "অ্যাকাউন্ট তৈরি করুন"}
          </button>
        </form>
        <div className="divider text-xs text-gray-500">অথবা</div>
        <SocialButtons />
        <p className="mt-4 text-center text-sm">
          অ্যাকাউন্ট আছে?{" "}
          <Link href="/signin" className="font-medium text-[#058a41]">
            সাইন ইন করুন
          </Link>
        </p>
      </div>
      <p className="mt-4 text-center text-sm text-gray-500">
        <Link href="/">← হোম পেজে ফিরে যান</Link>
      </p>
    </div>
  );
}