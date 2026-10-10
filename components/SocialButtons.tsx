"use client";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function SocialButtons({ callbackURL = "/" }: { callbackURL?: string }) {
  async function social(provider: "google" | "github") {
    const { error } = await authClient.signIn.social({ provider, callbackURL });
    if (error) toast.error(error.message || "সোশ্যাল লগইন ব্যর্থ হয়েছে");
  }

  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
      <button type="button" onClick={() => social("google")} className="btn btn-sm sm:btn-md border-gray-200 bg-white">
        <span className="font-bold text-blue-600">G</span> Google দিয়ে চালিয়ে যান
      </button>
      <button type="button" onClick={() => social("github")} className="btn btn-sm sm:btn-md border-gray-200 bg-white">
        <span>🐙</span> GitHub দিয়ে চালিয়ে যান
      </button>
    </div>
  );
} 