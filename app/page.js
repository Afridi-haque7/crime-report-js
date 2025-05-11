"use client";
import Link from "next/link";
import AnimatedNumbers from "react-animated-numbers";

export default function Home() {
  // const [num, setNum] = useState(331331);

  return (
    <main className="relative px-6 pt-20 pb-10">
      <div className="mx-auto ">
        {/* hero section */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex h-9 rounded-full gap-2 border border-sky-500/20 bg-sky-500/10 px-4 text-sm text-sky-500 items-center justify-center">
            <svg
              className="h-5 w-5 text-sky-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <p>Secure & Anonymous Reporting</p>
          </div>

          <h1 className="mt-8 bg-gradient-to-b from-white to-white/80 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl">
            Report Incident
            <span className="block bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              Protect Identity
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            Make your community safer without compromising your safety. Our
            advanced encryption ensures your identity remains completely
            anonymous.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href={"/submit-report"}>
              <button className="group w-[270px] relative flex h-12 items-center justify-center gap-2 rounded-xl bg-sky-500 px-8 text-sm font-medium text-white transition-all hover:bg-sky-400">
                Make Anonymous Report
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M12 5l7 7-7 7"
                  />
                </svg>
              </button>
            </Link>
            <Link href={"/how-it-works"}>
              <button className="group w-[270px] relative flex h-12 items-center justify-center gap-2 rounded-xl bg-white/5 px-8 text-sm font-medium ring-1 ring-inset ring-white/10 text-white transition-all hover:bg-white/10">
                How It Works
              </button>
            </Link>
          </div>
        </div>

        {/* features grid */}
        <div className="mt-40 grid gap-6 sm:grid-cols-3">
          {[
            {
              title: "Military-Grade Encryption",
              description:
                "Your identity is protected with state-of-the-art encryption protocols",
              icon: (
                <svg
                  className="h-6 w-6 text-sky-400"
                  fill="none"
                  viewBox="0 0 24
                  24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              ),
            },
            {
              title: "Real-time Processing",
              description:
                "Instant verification and secure routing of all reports",
              icon: (
                <svg
                  className="h-6 w-6 text-sky-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              ),
            },
            {
              title: "Secure Communication",
              description: "Two-way anonymous channel with law enforcement",
              icon: (
                <svg
                  className="h-6 w-6 text-sky-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              ),
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl bg-zinc-900 p-8 transition-all hover:bg-zinc-800/80"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-sky-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-5 inline-flex rounded-xl bg-sky-500/10 p-3">
                  {feature.icon}
                </div>
                <h3 className="mb-3 text-lg font-medium text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* stats */}
        <div className="mt-40 rounded-2xl bg-zinc-900 p-8">
          <div className="grid gap-y-8 sm:grid-cols-3 ">
            {[
              { value: 1000, label: "Reports Filed", postfix: "+" },
              { value: 100, label: "Anonymity Rate", postfix: "%" },
              { value: 24, label: "Support Available", postfix: "/ 7" },
            ].map((stat, i) => (
              <div
                key={i}
                className="flex flex-col gap-2 justify-center items-center"
              >
                <div className="flex gap-1">
                  <AnimatedNumbers
                    transitions={(index) => ({
                      type: "spring",
                      duration: index + 0.3,
                    })}
                    animateToNumber={stat.value}
                    fontStyle={{
                      fontSize: 36,
                      color: "white",
                      fontWeight: "semibold",
                    }}
                  />
                  <div className="text-4xl font-semibold flex items-center justify-center">
                    {stat.postfix}
                  </div>
                </div>
                <div>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-40 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-zinc-900 px-5 py-2 text-sm text-zinc-400">
            <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
            Trusted by Law Enforcement Nationwide
          </div>
        </div>
      </div>
    </main>
  );
}
