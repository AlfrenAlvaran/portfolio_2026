import React from "react";

const Expertise = () => {
  const splitText = (text) =>
    text.split(" ").map((word, i) => (
      <span key={i} className="inline-block mr-2">
        {word}
      </span>
    ));

  return (
    <section
      id="services"
      className="relative z-10 bg-white py-16 md:py-24 mt-10 md:mt-20 px-4 sm:px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
        
        {/* LEFT TEXT */}
        <div className="flex-1 max-w-2xl text-center md:text-left">
          <p className="text-xs tracking-[0.25em] uppercase text-gray-500 font-semibold mb-6 md:mb-10">
            Expertise
          </p>

          <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 sm:gap-6">
            
            {/* LINE */}
            <div className="hidden sm:block w-1 h-16 sm:h-20 bg-blue-600 rounded-full"></div>

            <div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-[-0.04em] leading-tight md:leading-[1.05]">
                {splitText("Web Solutions,")}
                <span className="block font-light">
                  {splitText("Built to Scale.")}
                </span>
              </h2>

              <p className="mt-6 md:mt-8 text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
                {splitText(
                  "I build scalable, modern, and high-performance web applications focused on user experience, clean architecture, and business growth. From dashboards to full-stack platforms, I create systems that are reliable, responsive, and production-ready."
                )}
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="flex-1 w-full flex justify-center items-center">
          <div className="w-full max-w-md sm:max-w-lg md:max-w-xl rounded-2xl md:rounded-3xl bg-white shadow-xl md:shadow-2xl border border-gray-200 overflow-hidden">
            
            {/* HEADER */}
            <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 border-b border-gray-100 bg-gray-50">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <div className="ml-2 sm:ml-4 text-[10px] sm:text-xs text-gray-400 truncate">
                alfren-dev.vercel.app
              </div>
            </div>

            {/* BODY */}
            <div className="p-4 sm:p-6 space-y-4">
              <div className="h-3 sm:h-4 w-32 sm:w-40 bg-gray-200 rounded"></div>

              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                <div className="h-16 sm:h-20 md:h-24 bg-blue-100 rounded-xl md:rounded-2xl"></div>
                <div className="h-16 sm:h-20 md:h-24 bg-purple-100 rounded-xl md:rounded-2xl"></div>
                <div className="h-16 sm:h-20 md:h-24 bg-pink-100 rounded-xl md:rounded-2xl"></div>
              </div>

              <div className="h-28 sm:h-32 md:h-40 bg-gray-100 rounded-xl md:rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;