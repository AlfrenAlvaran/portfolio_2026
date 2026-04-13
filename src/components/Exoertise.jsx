import React from "react";
import CardSwap, { Card } from "./Card";

const Expertise = () => {
  const splitText = (text) =>
    text.split(" ").map((word, i) => (
      <span key={i} className="word inline-block mr-2 will-change-transform">
        {word}
      </span>
    ));

  return (
    <section id="services" className="relative z-10 bg-white py-24 mt-20 px-20">
      {/* ================= TOP SECTION (EXPERTISE) ================= */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-16">
        {/* LEFT TEXT */}
        <div className="flex-1 max-w-2xl">
          <p className="text-xs tracking-[0.25em] uppercase text-gray-500 font-semibold mb-10">
            Expertise
          </p>

          <div className="flex items-start gap-6">
            <div className="w-1 h-20 bg-blue-600 mt-3 rounded-full"></div>

            <div>
              <h2 className="text-[2.2rem] md:text-[3.5rem] font-bold tracking-[-0.04em] leading-[1.05]">
                {splitText("Web Solutions,")}
                <span className="block font-light">
                  {splitText("Built to Scale.")}
                </span>
              </h2>

              <p className="mt-8 text-gray-500 text-lg leading-relaxed max-w-xl">
                {splitText(
                  "I build scalable, modern, and high-performance web applications focused on user experience, clean architecture, and business growth. From dashboards to full-stack platforms, I create systems that are reliable, responsive, and production-ready.",
                )}
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT STATIC CARD */}
        <div className="flex-1 flex justify-center items-center">
          <div className="floating-card w-full max-w-xl rounded-3xl bg-white shadow-2xl border border-gray-200 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 bg-gray-50">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <div className="ml-4 text-xs text-gray-400">
                alfren-dev.vercel.app
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div className="h-4 w-40 bg-gray-200 rounded"></div>

              <div className="grid grid-cols-3 gap-4">
                <div className="h-24 bg-blue-100 rounded-2xl"></div>
                <div className="h-24 bg-purple-100 rounded-2xl"></div>
                <div className="h-24 bg-pink-100 rounded-2xl"></div>
              </div>

              <div className="h-40 bg-gray-100 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>

     
     
    </section>
  );
};

export default Expertise;
