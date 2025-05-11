"use client";

export default function Resources() {
  return (
    <div className="relative min-h-screen bg-black selection:bg-sky-500/20 overflow-hidden">
      {/* Gradient Background */}
      <div className="fixed inset-0 -z-10 min-h-screen">
        <div className="absolute inset-0 h-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.03),transparent_50%)]" />
        <div className="absolute inset-0 h-full bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.04),transparent_70%)]" />
      </div>

      <main className="relative px-4 md:px-12 pt-20 pb-20">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex h-9 items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 text-sm text-sky-400">
            <svg
              viewBox="0 0 1024 1024"
              className="h-4 w-4"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M916.918857 496.566857H70.509714v330.532572a36.571429 36.571429 0 0 0 36.571429 36.571428h699.977143a36.571429 36.571429 0 1 1 0 73.142857H73.142857a73.142857 73.142857 0 0 1-73.142857-73.142857V94.281143a73.142857 73.142857 0 0 1 73.142857-73.142857h251.611429a73.142857 73.142857 0 0 1 52.077714 21.796571l111.908571 113.590857a36.571429 36.571429 0 0 0 26.038858 10.898286H914.285714a73.142857 73.142857 0 0 1 73.142857 73.142857v521.508572a35.254857 35.254857 0 0 1-70.509714 0v-265.508572z m0-73.142857v-146.285714a36.571429 36.571429 0 0 0-36.571428-36.571429H501.321143a73.142857 73.142857 0 0 1-52.150857-21.796571l-111.908572-113.590857a36.571429 36.571429 0 0 0-25.965714-10.898286H107.081143a36.571429 36.571429 0 0 0-36.571429 36.571428v292.571429h846.409143z"
                  fill="#52d4f4"
                ></path>
              </g>
            </svg>
            Resources We Use
          </div>

          <h1 className="mt-8 bg-gradient-to-b from-white to-white/80 bg-clip-text text-5xl font-bold tracking-tight text-transparent">
            Resources SafeReport Uses
            <span className="block text-3xl mt-4 bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              Your Safety, Our Responsibility
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            Learn how we use technology to protect your identity while ensuring
            your report reaches the right authorities.
          </p>
        </div>

        {/* Resources Section */}
        <div className="mt-24 lg:mx-12 rounded-2xl bg-zinc-900 p-8">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Resources
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "AI Image Detection",
                description: "Advance AI technology to analyze Report image",
                icon: (
                  <svg
                    fill="#00bfff"
                    className="w-6 h-6"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                    stroke="#00bfff"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g>
                        {" "}
                        <g>
                          {" "}
                          <path d="M498.095,198.122c0-25.763-9.68-50.313-27.257-69.131c-13.197-14.129-29.915-24.039-48.274-28.848 c0.253-2.749,0.397-5.521,0.397-8.313C422.962,41.194,381.768,0,331.133,0C300.099,0,272.631,15.49,256,39.129 C239.369,15.49,211.901,0,180.867,0c-50.635,0-91.828,41.194-91.828,91.828c0,2.794,0.145,5.565,0.397,8.313 c-18.359,4.808-35.075,14.719-48.274,28.848c-17.578,18.819-27.257,43.37-27.257,69.132c0,21.486,6.731,41.427,18.185,57.837 c-11.804,16.895-18.185,37.001-18.185,57.919c0,46.95,32.11,86.538,75.522,97.967c-0.249,2.761-0.39,5.537-0.39,8.327 c0,50.635,41.194,91.828,91.828,91.828c31.035,0,58.503-15.49,75.133-39.129C272.631,496.51,300.099,512,331.133,512 c50.635,0,91.828-41.194,91.828-91.828c0-2.788-0.14-5.565-0.39-8.327c43.412-11.429,75.522-51.016,75.522-97.967 c0-20.919-6.382-41.025-18.185-57.919C491.365,239.549,498.095,219.608,498.095,198.122z M239.304,343.088v77.084 c0,32.221-26.216,58.437-58.437,58.437c-32.223,0-58.437-26.216-58.437-58.437c0-1.771,0.088-3.532,0.245-5.284 c25.807-1.92,50.123-13.714,67.616-33.029l-24.749-22.417c-12.857,14.195-31.206,22.337-50.343,22.337 c-37.442,0-67.902-30.461-67.902-67.901c0-11.892,3.075-23.392,8.834-33.519c16.639,11.985,37.042,19.055,59.068,19.055v-33.391 c-37.442,0-67.902-30.461-67.902-67.901c0-31.399,21.722-58.325,51.228-65.815c10.151,20.567,27.843,37.177,50.093,45.523 l11.728-31.264c-22.678-8.507-37.916-30.504-37.916-54.737c0-32.223,26.216-58.437,58.437-58.437s58.437,26.216,58.437,58.437 v77.084v23.211h-13.79v-23.211h-33.391v23.211h-23.211v33.391h23.211v13.79h-23.211v33.391h23.211v13.789h-23.211v33.391h23.211 v23.211h33.391v-23.211h13.79V343.088z M225.516,286.485v-60.969h60.969v60.969H225.516z M455.869,280.359 c5.759,10.128,8.834,21.628,8.834,33.519c0,37.442-30.461,67.901-67.902,67.901c-19.137,0-37.486-8.141-50.343-22.337 L321.71,381.86c17.494,19.314,41.809,31.107,67.616,33.029c0.157,1.751,0.245,3.513,0.245,5.284 c0,32.223-26.216,58.437-58.437,58.437s-58.438-26.214-58.438-58.437v-77.084v-23.211h13.789v23.211h33.391v-23.211h23.211 v-33.391h-23.211v-13.789h23.211v-33.391h-23.211v-13.79h23.211v-33.391h-23.211v-23.211h-33.391v23.211h-13.789v-23.211V91.828 c0-32.223,26.216-58.437,58.437-58.437s58.437,26.214,58.437,58.437c0,24.232-15.238,46.229-37.916,54.737l11.728,31.264 c22.251-8.347,39.942-24.957,50.094-45.523c29.506,7.491,51.228,34.416,51.228,65.815c0,37.441-30.461,67.901-67.902,67.901 v33.391C418.827,299.414,439.23,292.343,455.869,280.359z"></path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                ),
              },
              {
                title: "Autocomplete Maps",
                description:
                  "Accurate location detection and autocomplete address",
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#00bfff"
                    className="w-6 h-6"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M5.7 15C4.03377 15.6353 3 16.5205 3 17.4997C3 19.4329 7.02944 21 12 21C16.9706 21 21 19.4329 21 17.4997C21 16.5205 19.9662 15.6353 18.3 15M12 9H12.01M18 9C18 13.0637 13.5 15 12 18C10.5 15 6 13.0637 6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9ZM13 9C13 9.55228 12.5523 10 12 10C11.4477 10 11 9.55228 11 9C11 8.44772 11.4477 8 12 8C12.5523 8 13 8.44772 13 9Z"
                        stroke="#00bfff"
                        strokeWidth="1.608"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                ),
              },
              {
                title: "Regular Audits",
                description: "Independent security firms verify our systems",
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
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    />
                  </svg>
                ),
              },
            ].map((feature, i) => (
              <div key={i} className="text-center p-2 lg:p-6">
                <div className="flex justify-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg font-medium text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-zinc-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tips to Safety */}
        <div className="mt-24 lg:mx-12 rounded-2xl bg-zinc-900 p-8">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Tips to Stay Safe
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Personal Safety",
                description:
                  "Carry emergency contacts, avoid unlit areas at night, and stay alert in public spaces.",
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
                      d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                    />
                  </svg>
                ),
              },
              {
                title: "Home Safety",
                description:
                  "Install secure locks, use surveillance systems, and avoid sharing your travel plans publicly.",
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                ),
              },
              {
                title: "Online Safety",
                description:
                  "Use strong passwords, avoid sharing personal information online, and verify suspicious links or emails.",
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
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    />
                  </svg>
                ),
              },
            ].map((feature, i) => (
              <div key={i} className="text-center p-2 lg:p-6">
                <div className="flex justify-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg font-medium text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-zinc-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

/*
<svg viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M916.918857 496.566857H70.509714v330.532572a36.571429 36.571429 0 0 0 36.571429 36.571428h699.977143a36.571429 36.571429 0 1 1 0 73.142857H73.142857a73.142857 73.142857 0 0 1-73.142857-73.142857V94.281143a73.142857 73.142857 0 0 1 73.142857-73.142857h251.611429a73.142857 73.142857 0 0 1 52.077714 21.796571l111.908571 113.590857a36.571429 36.571429 0 0 0 26.038858 10.898286H914.285714a73.142857 73.142857 0 0 1 73.142857 73.142857v521.508572a35.254857 35.254857 0 0 1-70.509714 0v-265.508572z m0-73.142857v-146.285714a36.571429 36.571429 0 0 0-36.571428-36.571429H501.321143a73.142857 73.142857 0 0 1-52.150857-21.796571l-111.908572-113.590857a36.571429 36.571429 0 0 0-25.965714-10.898286H107.081143a36.571429 36.571429 0 0 0-36.571429 36.571428v292.571429h846.409143z" fill="#000000"></path></g></svg>
*/
