"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function UserMenu() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  if (isPending) return <div className="skeleton h-9 w-28 rounded-lg" />;

  if (!session) {
    return (
      <div className="flex items-center gap-2">
        <Link href="/signin" className="btn btn-ghost btn-sm sm:btn-md">
          সাইন ইন
        </Link>
        <Link href="/signup" className="btn btn-sm sm:btn-md border-none bg-[#058a41] text-white hover:bg-[#047a3a]">
          সাইন আপ
        </Link>
      </div>
    );
  }

  const user = session.user;

  async function handleSignOut() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success("সাইন আউট হয়েছে");
          router.push("/");
          router.refresh();
        },
      },
    });
  }

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="flex items-center gap-2 rounded-lg px-2 py-1 hover:bg-green-50">
        {user.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={user.image} alt={user.name} className="h-8 w-8 rounded-full object-cover" />
        ) : (
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#058a41] text-sm font-bold text-white">
            {user.name?.charAt(0).toUpperCase()}
          </span>
        )}
        <span className="hidden text-sm font-medium sm:inline">{user.name?.split(" ")[0]}</span>
      </div>
      <ul tabIndex={0} className="dropdown-content menu z-50 mt-2 w-60 rounded-xl border border-gray-200 bg-white p-2 shadow-lg">
        <li className="menu-title normal-case">
          <span className="block font-semibold text-gray-900">{user.name}</span>
          <span className="block text-xs font-normal text-gray-500">{user.email}</span>
        </li>
        <li>
          <Link href="/profile">👤 আমার প্রোফাইল</Link>
        </li>
        <li>
          <button onClick={handleSignOut} className="text-red-600">
            ↩ সাইন আউট
          </button>
        </li>
      </ul>
    </div>
  );
}