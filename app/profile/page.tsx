import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import SignOutButton from "@/components/SignOutButton";

export default async function ProfilePage() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) redirect("/signin?redirect=/profile&reason=protected");
  const { user } = session;

  return (
    <div className="mx-auto max-w-2xl space-y-4">
      <div>
        <h1 className="text-2xl font-bold">আমার প্রোফাইল</h1>
        <p className="text-sm text-gray-500">আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
      </div>

      <div className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-[#fafcfa] p-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          {user.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={user.image} alt={user.name} className="h-16 w-16 rounded-xl object-cover" />
          ) : (
            <span className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#058a41] text-2xl font-bold text-white">
              {user.name?.charAt(0).toUpperCase()}
            </span>
          )}
          <div>
            <p className="text-lg font-semibold">{user.name}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        </div>
        <SignOutButton />
      </div>

      <div className="rounded-2xl border border-gray-200 bg-[#fafcfa] p-5">
        <h2 className="mb-3 font-semibold">তথ্য</h2>
        <dl className="mb-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <dt className="text-gray-500">নাম</dt>
            <dd className="font-medium">{user.name}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-gray-500">ইমেইল</dt>
            <dd className="font-medium">{user.email}</dd>
          </div>
        </dl>
        <Link href="/profile/update" className="btn w-full border-none bg-[#058a41] text-white hover:bg-[#047a3a]">
          তথ্য আপডেট করুন
        </Link>
      </div>
    </div>
  );
}