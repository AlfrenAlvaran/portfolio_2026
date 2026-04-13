import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaFacebookF, FaTiktok, FaGithub, FaLinkedinIn } from "react-icons/fa";

import NetworkBackground from "./components/NetworkBackground";
import Navbar from "./components/Navbar";
import Lanyard from "./components/Lanyard";
import FeaturedProject from "./components/FeacturedProject";
import Certificate from "./components/Certificate";
import DeveloperStory from "./components/DeveloperStory";
import FAQ from "./components/FAQ";
import Inquiry from "./components/Inquries";
import Services from "./components/Services";
import Expertise from "./components/Exoertise";
import UltraLoader from "./components/UltraLoader";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const enableLoader = import.meta.env.VITE_ENABLE_LOADER === "true";

  const [loading, setLoading] = useState(enableLoader);
  const counterRef = useRef([]);
  const appRef = useRef(null);

  const splitText = (text) =>
    text.split(" ").map((word, i) => (
      <span key={i} className="word inline-block mr-2 will-change-transform">
        {word}
      </span>
    ));

  // 🎬 CINEMATIC REVEAL AFTER LOADER
  useEffect(() => {
    if (loading) return;

    const tl = gsap.timeline();

    // Page reveal (blur → clear)
    tl.fromTo(
      appRef.current,
      { opacity: 0, filter: "blur(12px)" },
      { opacity: 1, filter: "blur(0px)", duration: 1.2, ease: "power3.out" }
    );

    // Hero text animation
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
          delay: 0.3,
        }
      );
    });

    // 🎯 Lanyard cinematic entrance
    gsap.from(".hero-visual", {
      opacity: 0,
      scale: 0.7,
      y: 80,
      duration: 1.4,
      ease: "power4.out",
      delay: 0.5,
    });

    // Floating card
    gsap.to(".floating-card", {
      y: -12,
      duration: 2,
      repeat: -1,
      yoyo: true,
      delay: 1,
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
          delay: 0.6,
        }
      );
    });

    ScrollTrigger.refresh();

  }, [loading]);

  const stats = [
    { number: 30, label: "Projects" },
    { number: 10, label: "Clients" },
    { number: 3, label: "Years Experience" },
  ];

  return (
    <>
      {loading && (
        <UltraLoader onFinish={() => setLoading(false)} />
      )}

      <div
        ref={appRef}
        className="relative min-h-screen overflow-hidden bg-[#f5f5f5] text-gray-900"
      >
        <NetworkBackground />
        <Navbar />

        {/* HERO */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-28 flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="max-w-2xl text-center md:text-left">
            <h1 className="animate-text text-4xl md:text-6xl font-bold leading-tight">
              {splitText("Turning Ideas Into")}
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {splitText("Scalable Web Applications")}
              </span>
            </h1>

            <p className="animate-text mt-6 text-gray-600 text-lg md:text-xl leading-relaxed">
              {splitText(
                "Hi, I'm Alfren Alvaran — a Full-Stack Web Developer creating modern, scalable, and user-focused digital solutions."
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

            {/* Stats */}
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

            {/* Socials */}
            <div className="flex gap-4 mt-8 justify-center md:justify-start">
              <a href="https://web.facebook.com/alvaran.alfren/" target="_blank" className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110">
                <FaFacebookF />
              </a>

              <a href="https://www.tiktok.com/@alfrenalvaran" target="_blank" className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 hover:scale-110">
                <FaTiktok />
              </a>

              <a href="https://github.com/AlfrenAlvaran" target="_blank" className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-110">
                <FaGithub />
              </a>

              <a href="#" className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-110">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          <div className="hero-visual flex justify-center md:justify-end">
            <div className="scale-90 md:scale-100">
              <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} dpr={[1, 1.5]} />
            </div>
          </div>
        </section>

        <Services />
        <Expertise />
        <FeaturedProject />
        <Certificate />
        <DeveloperStory />
        <FAQ />
        <Inquiry />
      </div>
    </>
  );
};

export default App;