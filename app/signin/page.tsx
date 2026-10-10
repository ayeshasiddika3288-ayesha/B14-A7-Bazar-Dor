import { Suspense } from "react";
import SignInForm from "@/components/SignInForm";

export default function SignInPage() {
  return (
    <Suspense fallback={<div className="skeleton mx-auto mt-8 h-80 max-w-md rounded-2xl" />}>
      <SignInForm />
    </Suspense>
  );
}