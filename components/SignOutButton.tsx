"use client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function SignOutButton() {
  const router = useRouter();
  return (
    <button
      onClick={() =>
        authClient.signOut({
          fetchOptions: {
            onSuccess: () => {
              toast.success("সাইন আউট হয়েছে");
              router.push("/");
              router.refresh();
            },
          },
        })
      }
      className="btn btn-sm btn-outline border-red-300 text-red-600 hover:border-red-500 hover:bg-red-50 hover:text-red-600"
    >
      ↩ সাইন আউট
    </button>
  );
}