"use client";

export default function EmergencyList() {
  return (
    <div className="w-full mx-auto mt-12 px-0 md:px-6 lg:px-4 py-8 ">
      <main className="relative p-8 rounded-2xl bg-zinc-800/50 space-y-8">
        <div className="mx-auto max-w-5xl flex justify-center font-semibold text-2xl">
          <h1>Emergency Dialers</h1>
        </div>
        <div className="mx-auto grid gap-4">
          {[
            {
              title: "Police",
              number: "100",
            },
            {
              title: "Fire Brigade",
              number: "101",
            },
            {
              title: "Ambulance",
              number: "108",
            },
            {
              title: "Women Helpline",
              number: "181",
            },
            {
              title: "Child Helpline",
              number: "1098",
            },
            {
              title: "Disaster Management",
              number: "104",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="w-full flex justify-between px-4 py-2 
                    rounded-xl bg-black hover:bg-zinc-800/50 border-2 border-transparent hover:border-gray-700 
                    cursor-pointer transition-all duration-200"
            >
              <div>{item.title}</div>
              <div>{item.number}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
