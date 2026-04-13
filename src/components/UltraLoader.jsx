import React, { useEffect, useState } from "react";
import gsap from "gsap";

const UltraLoader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let count = 0;

    const interval = setInterval(() => {
      count += Math.floor(Math.random() * 8) + 2; // smooth fake loading
      if (count >= 100) {
        count = 100;
        clearInterval(interval);
      }
      setProgress(count);
    }, 60);

    const tl = gsap.timeline({
      delay: 0.3,
      onComplete: onFinish,
    });

    tl.fromTo(
      ".loader-logo",
      { opacity: 0, y: 40, filter: "blur(10px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.2 }
    )
      .fromTo(
        ".loader-bar",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 2,
          ease: "power3.out",
        },
        "-=0.8"
      )
      .to(".loader",
        {
          opacity: 0,
          duration: 0.8,
          delay: 0.5,
        }
      );

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="loader fixed inset-0 z-[9999] bg-[#f5f5f5] flex items-center justify-center overflow-hidden">
      
      {/* Glow background */}
      <div className="absolute w-[400px] h-[400px] bg-blue-500/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-3xl rounded-full animate-pulse translate-x-20"></div>

      <div className="relative flex flex-col items-center gap-6">
        
        {/* Logo */}
        <h1 className="loader-logo text-4xl md:text-6xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%] animate-[gradientMove_3s_linear_infinite] bg-clip-text text-transparent">
            Alfren.dev
          </span>
        </h1>

        {/* Status text */}
        <p className="text-gray-500 text-sm tracking-wide">
          Crafting experience...
        </p>

        {/* Progress bar */}
        <div className="w-64 h-[4px] bg-gray-200 rounded-full overflow-hidden">
          <div className="loader-bar h-full bg-gradient-to-r from-blue-600 to-purple-600 origin-left"></div>
        </div>

        {/* Percentage */}
        <span className="text-xs text-gray-400 tracking-widest">
          {progress}%
        </span>
      </div>
    </div>
  );
};

export default UltraLoader;