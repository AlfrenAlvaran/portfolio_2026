import React from "react";
import CardSwap, { Card } from "./Card";

const Services = () => {
  return (
    <section id="services" className="relative z-10 bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
        
        {/* LEFT TEXT */}
        <div className="flex-1 max-w-xl text-center md:text-left">
          <p className="text-xs tracking-[0.25em] uppercase text-gray-500 font-semibold mb-4 md:mb-6">
            Services
          </p>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Scalable Systems
          </h2>

          <p className="text-gray-500 mt-2 max-w-md mx-auto md:mx-0 text-sm sm:text-base">
            Clean architecture, performance-first design, and production-ready
            apps.
          </p>
        </div>

        {/* RIGHT CARD SWAP */}
        <div className="flex-1 w-full flex justify-center md:justify-end items-center">
          <div className="w-full max-w-sm sm:max-w-md">
            <CardSwap>
              
              {/* CARD 1 */}
              <Card>
                <div className="p-4 sm:p-6 space-y-3">
                  <Header number="#1" />
                  <h3 className="text-lg sm:text-xl font-bold">Web Applications</h3>
                  <p className="text-sm text-gray-500">
                    Scalable full-stack apps using modern frameworks.
                  </p>
                </div>
              </Card>

              {/* CARD 2 */}
              <Card>
                <div className="p-4 sm:p-6 space-y-3">
                  <Header number="#2" />
                  <h3 className="text-lg sm:text-xl font-bold">UI / UX Design</h3>
                  <p className="text-sm text-gray-500">
                    Clean and modern interfaces focused on user experience.
                  </p>
                </div>
              </Card>

              {/* CARD 3 */}
              <Card>
                <div className="p-4 sm:p-6 space-y-3">
                  <Header number="#3" />
                  <h3 className="text-lg sm:text-xl font-bold">Arduino Projects</h3>
                  <p className="text-sm text-gray-500">
                    Basic Arduino projects and simple automation systems.
                  </p>
                </div>
              </Card>

              {/* CARD 4 */}
              <Card>
                <div className="p-4 sm:p-6 space-y-3">
                  <Header number="#4" />
                  <h3 className="text-lg sm:text-xl font-bold">API Development</h3>
                  <p className="text-sm text-gray-500">
                    REST APIs with secure and scalable architecture.
                  </p>
                </div>
              </Card>

              {/* CARD 5 */}
              <Card>
                <div className="p-4 sm:p-6 space-y-3">
                  <Header number="#5" />
                  <h3 className="text-lg sm:text-xl font-bold">Deployment</h3>
                  <p className="text-sm text-gray-500">
                    Fast and optimized deployment using modern platforms.
                  </p>
                </div>
              </Card>

            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  );
};

/* 🔹 Reusable Header Component */
const Header = ({ number }) => (
  <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 border-b border-gray-100 bg-gray-50">
    <div className="text-xs text-gray-400 mr-2">{number}</div>
    <div className="w-3 h-3 rounded-full bg-red-400"></div>
    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
    <div className="w-3 h-3 rounded-full bg-green-400"></div>
  </div>
);

export default Services;