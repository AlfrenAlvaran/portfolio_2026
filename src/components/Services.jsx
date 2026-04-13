import React from "react";
import CardSwap, { Card } from "./Card";

const Services = () => {
  const splitText = (text) =>
    text.split(" ").map((word, i) => (
      <span key={i} className="word inline-block mr-2 will-change-transform">
        {word}
      </span>
    ));

  return (
    <section id="services" className="relative z-10 bg-white py-24">
      {/* ================= BOTTOM SECTION (SERVICES) ================= */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-16 mt-30">
        {/* LEFT TEXT */}
        <div className="flex-1 max-w-2xl">
          <p className="text-xs tracking-[0.25em] uppercase text-gray-500 font-semibold mb-6">
            Services
          </p>

          <h2 className="text-2xl md:text-3xl font-bold">Scalable Systems</h2>

          <p className="text-gray-500 mt-2 max-w-sm">
            Clean architecture, performance-first design, and production-ready
            apps.
          </p>
        </div>

        {/* RIGHT CARD SWAP */}
        <div className="flex-1 flex justify-end items-center">
          <CardSwap>
            {/* CARD 1 */}
            <Card>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 bg-gray-50">
                  <div className="ml-4 text-xs text-gray-400">#1</div>
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <h3 className="text-xl font-bold">Web Applications</h3>
                <p className="text-sm text-gray-500">
                  Scalable full-stack apps using modern frameworks.
                </p>
              </div>
            </Card>

            {/* CARD 2 */}
            <Card>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 bg-gray-50">
                  <div className="ml-4 text-xs text-gray-400">#2</div>
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <h3 className="text-xl font-bold">UI / UX Design</h3>
                <p className="text-sm text-gray-500">
                  Clean and modern interfaces focused on user experience.
                </p>
              </div>
            </Card>

            {/* CARD 3 (YOUR REQUEST) */}
            <Card>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 bg-gray-50">
                  <div className="ml-4 text-xs text-gray-400">#13</div>
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <h3 className="text-xl font-bold">Arduino Projects</h3>
                <p className="text-sm text-gray-500">
                  I can do basic Arduino projects and simple hardware
                  automation.
                </p>
              </div>
            </Card>

            {/* CARD 4 */}
            <Card>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 bg-gray-50">
                  <div className="ml-4 text-xs text-gray-400">#4</div>
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <h3 className="text-xl font-bold">API Development</h3>
                <p className="text-sm text-gray-500">
                  REST APIs with secure and scalable architecture.
                </p>
              </div>
            </Card>

            {/* CARD 5 */}
            <Card>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 bg-gray-50">
                  <div className="ml-4 text-xs text-gray-400">#5</div>
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <h3 className="text-xl font-bold">Deployment</h3>
                <p className="text-sm text-gray-500">
                  Fast and optimized deployment using modern platforms.
                </p>
              </div>
            </Card>
          </CardSwap>
        </div>
      </div>
    </section>
  );
};

export default Services;
