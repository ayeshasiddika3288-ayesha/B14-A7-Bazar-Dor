"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import SocialButtons from "./SocialButtons";

export default function SignInForm() {
  const router = useRouter();
  const params = useSearchParams();
  const redirectParam = params.get("redirect");
  const redirectTo = redirectParam && redirectParam.startsWith("/") ? redirectParam : "/";
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (params.get("reason") === "protected") {
      toast.error("এই পাতাটি দেখতে আগে সাইন ইন করুন", { id: "protected" });
    }
  }, [params]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = String(form.get("email") || "").trim();
    const password = String(form.get("password") || "");

    if (!email || !password) return toast.error("ইমেইল ও পাসওয়ার্ড দিন");
    if (password.length < 8) return toast.error("পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে");

    setLoading(true);
    const { error } = await authClient.signIn.email({ email, password });
    setLoading(false);

    if (error) return toast.error(error.message || "সাইন ইন ব্যর্থ হয়েছে");
    toast.success("সফলভাবে সাইন ইন হয়েছে");
    router.push(redirectTo);
    router.refresh();
  }

  return (
    <div className="mx-auto max-w-md py-8">
      <h1 className="text-center text-2xl font-bold">সাইন ইন</h1>
      <p className="mb-5 mt-1 text-center text-sm text-gray-500">
        বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
      </p>
      <div className="rounded-2xl border border-gray-200 bg-[#fafcfa] p-5">
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium">ইমেইল</label>
            <input name="email" type="email" placeholder="you@example.com" className="input input-bordered w-full bg-white" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">পাসওয়ার্ড</label>
            <input name="password" type="password" placeholder="কমপক্ষে ৮ অক্ষর" className="input input-bordered w-full bg-white" />
          </div>
          <button disabled={loading} className="btn w-full border-none bg-[#058a41] text-white hover:bg-[#047a3a]">
            {loading ? <span className="loading loading-spinner loading-sm" /> : "সাইন ইন"}
          </button>
        </form>
        <div className="divider text-xs text-gray-500">অথবা</div>
        <SocialButtons callbackURL={redirectTo} />
        <p className="mt-4 text-center text-sm">
          অ্যাকাউন্ট নেই?{" "}
          <Link href="/signup" className="font-medium text-[#058a41]">
            সাইন আপ করুন
          </Link>
        </p>
      </div>
      <p className="mt-4 text-center text-sm text-gray-500">
        <Link href="/">← হোম পেজে ফিরে যান</Link>
      </p>
    </div>
  );
}