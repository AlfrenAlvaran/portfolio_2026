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
    <section className=" bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs tracking-widest text-gray-500 mb-2">
          MY CERTIFICATES
        </p>

      
        <div className="relative overflow-hidden">
          <div className="flex w-max animate-scroll-reverse">
            {[...images, ...images].map((img, i) => (
              <div
                key={i}
                className="w-[320px] mr-6 bg-white rounded-2xl shadow-lg p-4 flex-shrink-0"
              >
                <img
                  src={img}
                  alt="certificate"
                  className="w-full h-[200px] object-cover rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scrollReverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .animate-scroll-reverse {
          animation: scrollReverse 60s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Certificate;