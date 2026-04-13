import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaFacebookF, FaTiktok, FaGithub, FaLinkedinIn } from "react-icons/fa";

import NetworkBackground from "./components/NetworkBackground";
import Navbar from "./components/Navbar";
import Lanyard from "./components/Lanyard";
import FeaturedProject from "./components/FeacturedProject";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const counterRef = useRef([]);

  const splitText = (text) =>
    text.split(" ").map((word, i) => (
      <span key={i} className="word inline-block mr-2 will-change-transform">
        {word}
      </span>
    ));

  useEffect(() => {
    const ctx = gsap.context(() => {
      const blocks = gsap.utils.toArray(".animate-text");

      blocks.forEach((block) => {
        const words = block.querySelectorAll(".word");

        gsap.fromTo(
          words,
          {
            opacity: 0,
            y: 40,
            filter: "blur(8px)",
          },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            stagger: 0.04,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: block,
              start: "top 85%",
            },
          },
        );
      });

      // Hero visual animation
      gsap.from(".hero-visual", {
        opacity: 0,
        scale: 0.8,
        y: 40,
        duration: 1.2,
        ease: "power3.out",
      });

      // Floating dashboard card
      gsap.to(".floating-card", {
        y: -12,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      // Counter animation
      counterRef.current.forEach((el) => {
        const target = +el.dataset.target;

        gsap.fromTo(
          el,
          { innerText: 0 },
          {
            innerText: target,
            duration: 2,
            ease: "power2.out",
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
            },
          },
        );
      });
    });

    return () => ctx.revert();
  }, []);

  const stats = [
    { number: 30, label: "Projects" },
    { number: 10, label: "Clients" },
    { number: 3, label: "Years Experience" },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f5f5f5] text-gray-900">
      <NetworkBackground />
      <Navbar />

      {/* HERO */}
      <section
        id="home"
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-28 flex flex-col md:flex-row items-center justify-between gap-16"
      >
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="animate-text text-4xl md:text-6xl font-bold leading-tight">
            {splitText("Turning Ideas Into")}
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {splitText("Scalable Web Applications")}
            </span>
          </h1>

          <p className="animate-text mt-6 text-gray-600 text-lg md:text-xl leading-relaxed">
            {splitText(
              "Hi, I'm Alfren Alvaran — a Full-Stack Web Developer creating modern, scalable, and user-focused digital solutions.",
            )}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium shadow-lg hover:scale-105 hover:bg-blue-700 transition">
              View Projects
            </button>
            <button className="px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition">
              Contact Me
            </button>
          </div>

          {/* Counter Stats */}
          <div className="flex gap-14 pt-8 justify-center lg:justify-start">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col gap-[0.2rem]">
                <span
                  ref={(el) => (counterRef.current[i] = el)}
                  data-target={stat.number}
                  className="text-[2rem] font-semibold text-[#1d1d1f]"
                >
                  0
                </span>
                <span className="text-[0.8rem] text-[#86868b] font-semibold uppercase tracking-[0.05em]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-8 justify-center md:justify-start">
            <a
              href="https://web.facebook.com/alvaran.alfren/"
              target="_blank"
              className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.tiktok.com/@alfrenalvaran?is_from_webapp=1&sender_device=pc"
              target="_blank"
              className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 hover:scale-110"
            >
              <FaTiktok />
            </a>

            <a
              href="https://github.com/AlfrenAlvaran"
              target="_blank"
              className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <FaGithub />
            </a>

            <a
              href=""
              className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div className="hero-visual flex justify-center md:justify-end">
          <div className="scale-90 md:scale-100">
            <Lanyard
              position={[0, 0, 20]}
              gravity={[0, -40, 0]}
              dpr={[1, 1.5]}
            />
          </div>
        </div>
      </section>

      {/* WORK / SERVICES FULL WHITE */}
      <section id="work" className="relative z-10 bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="flex-1 max-w-2xl">
            <p className="animate-text text-xs tracking-[0.25em] uppercase text-gray-500 font-semibold mb-10">
              Expertise & Services
            </p>

            <div className="flex items-start gap-6">
              <div className="w-1 h-20 bg-blue-600 mt-3 rounded-full"></div>

              <div>
                <h2 className="animate-text text-[2.2rem] md:text-[3.5rem] font-bold tracking-[-0.04em] leading-[1.05]">
                  {splitText("Web Solutions,")}
                  <span className="block font-light">
                    {splitText("Built to Scale.")}
                  </span>
                </h2>

                <p className="animate-text mt-8 text-gray-500 text-lg leading-relaxed max-w-xl">
                  {splitText(
                    "I build scalable, modern, and high-performance web applications focused on user experience, clean architecture, and business growth. From dashboards to full-stack platforms, I create systems that are reliable, responsive, and production-ready.",
                  )}
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 flex justify-center items-center">
            <div className="floating-card w-full max-w-xl rounded-3xl bg-white shadow-2xl border border-gray-200 overflow-hidden">
              {/* Browser Top Bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 bg-gray-50">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <div className="ml-4 text-xs text-gray-400">
                  alfren-dev.vercel.app
                </div>
              </div>

              {/* Fake Dashboard UI */}
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

      {/* Projects */}
      <FeaturedProject />

    </div>
  );
};

export default App;
