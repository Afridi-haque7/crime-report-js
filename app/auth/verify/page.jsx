"use client";

export default function VerificationPage() {
  return (
    <div className="min-h-screen bg-black flex justify-center sm:p-0 md:p-8 lg:p-12">
      <div
        className={`bg-neutral-900/80 backdrop-blur-sm max-w-xl max-h-60 flex flex-col justify-center gap-4 px-12 py-8 rounded-md shadow-sm`}
      >
        <h1 className={`text-4xl font-bold text-center`}>Verify Email</h1>
        <p className={`text-neutral-400 text-center`}>
          A verification email has been sent to your registered email address.
          Kindly verify it and proceed to sign in.
        </p>
      </div>
    </div>
  );
}
