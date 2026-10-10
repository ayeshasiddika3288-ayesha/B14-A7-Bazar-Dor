import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import UpdateProfileForm from "@/components/UpdateProfileForm";

export default async function UpdateProfilePage() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) redirect("/signin?redirect=/profile/update&reason=protected");

  return (
    <div className="mx-auto max-w-md py-4">
      <h1 className="text-2xl font-bold">তথ্য আপডেট করুন</h1>
      <p className="mb-5 text-sm text-gray-500">আপনার নাম পরিবর্তন করুন।</p>
      <div className="rounded-2xl border border-gray-200 bg-[#fafcfa] p-5">
        <UpdateProfileForm defaultName={session.user.name ?? ""} />
      </div>
    </div>
  );
}