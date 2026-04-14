import React from "react";

const Certificate = () => {
  const images = [
    "/certificates/C1.jpg",
    "/certificates/C2.jpg",
    "/certificates/C3.jpg",
    "/certificates/C4.jpg",
    "/certificates/C5.jpg",
    "/certificates/C6.jpg",
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        
        {/* TITLE */}
        <p className="text-xs tracking-widest text-gray-500 mb-6">
          MY CERTIFICATES
        </p>

        {/* SLIDER */}
        <div className="relative overflow-hidden">
          <div className="flex w-max animate-scroll-reverse">
            {[...images, ...images].map((img, i) => (
              <div
                key={i}
                className="
                  w-[200px] 
                  sm:w-[240px] 
                  md:w-[300px] 
                  mr-4 sm:mr-6 
                  bg-white 
                  rounded-xl md:rounded-2xl 
                  shadow-md md:shadow-lg 
                  p-2 sm:p-3 md:p-4 
                  flex-shrink-0
                "
              >
                <img
                  src={img}
                  alt="certificate"
                  className="
                    w-full 
                    h-[120px] 
                    sm:h-[150px] 
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
        @keyframes scrollReverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .animate-scroll-reverse {
          animation: scrollReverse 50s linear infinite;
        }

        /* slower on mobile */
        @media (max-width: 640px) {
          .animate-scroll-reverse {
            animation: scrollReverse 80s linear infinite;
          }
        }
      `}</style>
    </section>
  );
};

export default Certificate;