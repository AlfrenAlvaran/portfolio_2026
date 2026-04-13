export default function InfiniteSlider() {
  const images = [
   "/featured/F1.png",
   "/featured/F2.png",
   "/featured/F3.png",
   "/featured/F4.png",
   "/featured/F5.png",
   "/featured/F6.png",
   "/featured/F7.png",
   "/featured/F8.png",

    "/featured/F1.png",
   "/featured/F2.png",
   "/featured/F3.png",
   "/featured/F4.png",
   "/featured/F5.png",
   "/featured/F6.png",
   "/featured/F7.png",
   "/featured/F8.png",

    "/featured/F1.png",
   "/featured/F2.png",
   "/featured/F3.png",
   "/featured/F4.png",
   "/featured/F5.png",
   "/featured/F6.png",
   "/featured/F7.png",
   "/featured/F8.png",
  ];

  return (
    <section className="py-20 bg-gray-100 overflow-hidden" id="work">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs tracking-widest text-gray-500 mb-2">
          FEATURED PROJECTS
        </p>

        <h1 className="text-4xl md:text-5xl font-bold max-w-2xl mb-16">
          Crafting digital experiences that run seamlessly.
        </h1>

        <div className="relative overflow-hidden">
          <div className="flex w-max animate-scroll">
            {[...images, ...images].map((img, i) => (
              <div
                key={i}
                className="w-[320px] mr-6 bg-white rounded-2xl shadow-lg p-4 flex-shrink-0"
              >
                <img
                  src={img}
                  alt="project"
                  className="w-full h-[200px] object-cover rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll {
          animation: scroll 90s linear infinite;
        }
      `}</style>
    </section>
  );
}