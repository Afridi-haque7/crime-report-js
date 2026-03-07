import { Suspense } from "react";
import SignInContent from "./SignInContent";

function SignInLoader() {
  return (
    <div className="min-h-screen bg-black flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="h-10 bg-gray-700 rounded animate-pulse mb-4"></div>
        <div className="h-4 bg-gray-700 rounded animate-pulse"></div>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-neutral-900/50 h-96 rounded-xl animate-pulse"></div>
      </div>
    </div>
  );
}

export default function SignInPage() {
  return (
    <Suspense fallback={<SignInLoader />}>
      <SignInContent />
    </Suspense>
  );
}
