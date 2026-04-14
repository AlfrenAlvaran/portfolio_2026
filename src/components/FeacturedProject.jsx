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
  ];

  return (
    <section
      className="py-16 md:py-20 bg-gray-100 overflow-hidden"
      id="work"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        
        {/* TEXT */}
        <p className="text-xs tracking-widest text-gray-500 mb-2">
          FEATURED PROJECTS
        </p>

        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold max-w-2xl mb-10 md:mb-16 leading-tight">
          Crafting digital experiences that run seamlessly.
        </h1>

        {/* SLIDER */}
        <div className="relative overflow-hidden">
          <div className="flex w-max animate-scroll">
            {[...images, ...images].map((img, i) => (
              <div
                key={i}
                className="
                  w-[220px] 
                  sm:w-[260px] 
                  md:w-[320px] 
                  mr-4 sm:mr-6
                  bg-white 
                  rounded-xl md:rounded-2xl 
                  shadow-md md:shadow-lg 
                  p-3 sm:p-4 
                  flex-shrink-0
                "
              >
                <img
                  src={img}
                  alt="project"
                  className="
                    w-full 
                    h-[140px] 
                    sm:h-[160px] 
                    md:h-[200px] 
                    object-cover 
                    rounded-lg md:rounded-xl
                  "
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ANIMATION */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll {
          animation: scroll 60s linear infinite;
        }

        /* Slower on mobile for smoother feel */
        @media (max-width: 640px) {
          .animate-scroll {
            animation: scroll 90s linear infinite;
          }
        }
      `}</style>
    </section>
  );
}