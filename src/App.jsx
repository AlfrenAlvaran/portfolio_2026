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
import Footer from "./components/Footer";

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

  useEffect(() => {
    if (loading) return;

    if (window.innerWidth < 768) {
      gsap.set(appRef.current, { opacity: 1 });
    } else {
      const tl = gsap.timeline();

      tl.fromTo(
        appRef.current,
        { opacity: 0, filter: "blur(12px)" },
        { opacity: 1, filter: "blur(0px)", duration: 1.2, ease: "power3.out" }
      );

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

      gsap.from(".hero-visual", {
        opacity: 0,
        scale: 0.7,
        y: 80,
        duration: 1.4,
        ease: "power4.out",
        delay: 0.5,
      });

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
    }

    // 🔥 Floating animation (mobile image)
    gsap.to(".floating-image", {
      y: -15,
      rotate: 2,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
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
      {loading && <UltraLoader onFinish={() => setLoading(false)} />}

      <div
        ref={appRef}
        className="relative min-h-screen overflow-x-hidden bg-[#f5f5f5] text-gray-900"
      >
        <NetworkBackground />
        <Navbar />

        {/* HERO */}
        <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-16 md:pt-20 pb-20 md:pb-28 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">

          {/* LEFT */}
          <div className="max-w-2xl text-center md:text-left">
            
            <h1 className="animate-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {splitText("Turning Ideas Into")}
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {splitText("Scalable Web Applications")}
              </span>
            </h1>

            <p className="animate-text mt-4 md:mt-6 text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
              {splitText(
                "Hi, I'm Alfren Alvaran — a Full-Stack Web Developer creating modern, scalable, and user-focused digital solutions."
              )}
            </p>

            {/* BUTTONS */}
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 text-white font-medium shadow-lg hover:scale-105 hover:bg-blue-700 transition">
                View Projects
              </button>
              <button className="w-full sm:w-auto px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition">
                Contact Me
              </button>
            </div>

            {/* STATS */}
            <div className="flex flex-wrap justify-center md:justify-start gap-8 sm:gap-10 md:gap-14 pt-8">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center md:items-start">
                  <span
                    ref={(el) => (counterRef.current[i] = el)}
                    data-target={stat.number}
                    className="text-2xl sm:text-3xl md:text-[2rem] font-semibold text-[#1d1d1f]"
                  >
                    0
                  </span>
                  <span className="text-[0.7rem] sm:text-[0.8rem] text-[#86868b] font-semibold uppercase tracking-[0.05em]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* SOCIALS */}
            <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 md:mt-8 justify-center md:justify-start">
              <a href="https://web.facebook.com/alvaran.alfren/" target="_blank"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-gray-300 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110">
                <FaFacebookF />
              </a>

              <a href="https://www.tiktok.com/@alfrenalvaran" target="_blank"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 hover:scale-110">
                <FaTiktok />
              </a>

              <a href="https://github.com/AlfrenAlvaran" target="_blank"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-110">
                <FaGithub />
              </a>

              <a href="#"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-gray-300 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-110">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hero-visual flex justify-center md:justify-end w-full">

            {/* 📱 MOBILE IMAGE */}
            <div className="block md:hidden relative">
              <div className="floating-image w-52 h-52 sm:w-64 sm:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/me.jpg"
                  alt="Alfren"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-2xl -z-10"></div>
            </div>

            {/* 💻 DESKTOP LANYARD */}
            <div className="hidden md:block scale-75 sm:scale-90 md:scale-100">
              <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} dpr={[1, 1.5]} />
            </div>

          </div>

        </section>

        {/* OTHER SECTIONS */}
        <Services />
        <Expertise />
        <FeaturedProject />
        <Certificate />
        <DeveloperStory />
        <FAQ />
        <Inquiry />
      </div>
      <Footer/>
    </>
  );
};

export default App;