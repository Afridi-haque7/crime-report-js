"use client";

import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

async function verifyUser(token) {
  const res = await fetch(`/api/auth/verify/${token}`, {
    method: "PATCH",
  });

  if (!res.ok) {
    throw new Error("Verification failed");
  }

  return res.json();
}

const SuccessfullyVerified = () => {
  return (
    <div className="text-center space-y-6">
      <div className="flex flex-col items-center">
        <div className="bg-green-500/10 rounded-full p-3">
          <svg
            className="w-16 h-16 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="mt-4 text-xl font-medium text-white">
          Email Successfully Verified
        </h3>
      </div>

      <div className="pt-4">
        <button
          onClick={() => (window.location.href = "/auth/signin")}
          className="inline-flex items-center justify-center rounded-lg bg-sky-500 px-4 py-2 text-sm font-medium text-white hover:bg-sky-400"
        >
          Return to Signin
        </button>
      </div>
    </div>
  );
};

const VerificationFailed = () => {
  return (
    <div className="text-center space-y-6">
      <div className="flex flex-col items-center">
        <h1 className="mt-4 text-xl font-medium text-white">
          Verification Failed
        </h1>
      </div>
    </div>
  );
};

export default function VerifyPage({ params }) {
  const router = useRouter();
  const [verificationSuccess, setVerificationSuccess] = useState(false);

  useEffect(() => {
    const verify = async () => {
      const { token } = await params;

      if (!token) {
        console.error("No token found for verification");
        return;
      }
      try {
        await verifyUser(token);
        setVerificationSuccess;
        true;
        router.push("/auth/signin");
        return;
      } catch (error) {
        console.error("Verification failed due to: ", error.message);
      }
    };

    verify();
  }, [router]);

  return (
    <>
      {verificationSuccess ? <SuccessfullyVerified /> : <VerificationFailed />}
    </>
  );
}
