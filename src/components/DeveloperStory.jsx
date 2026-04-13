import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DeveloperStory = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);
  const dotsRef = useRef([]);
  const lineRef = useRef(null);
  const particlesRef = useRef(null);

  const [progress, setProgress] = useState(0);

  const story = [
    {
      year: "Start",
      title: "Curiosity Begins",
      desc: "I started exploring how websites work.",
    },
    {
      year: "Learning",
      title: "First Code",
      desc: "Learned HTML, CSS, JS.",
    },
    {
      year: "Growth",
      title: "Frontend Dev",
      desc: "Built apps using React.",
    },
    {
      year: "Backend",
      title: "Full Stack",
      desc: "Worked with APIs & DB.",
    },
    {
      year: "Now",
      title: "Web Developer",
      desc: "Building scalable systems.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ✅ FIXED: Define first
      const activateDot = (index) => {
        dotsRef.current.forEach((dot, i) => {
          if (!dot) return;

          gsap.to(dot, {
            scale: i === index ? 1.6 : 1,
            backgroundColor: i === index ? "#2563eb" : "#d1d5db",
            boxShadow:
              i === index
                ? "0 0 20px rgba(37,99,235,0.6)"
                : "0 0 0px transparent",
            duration: 0.3,
          });
        });
      };

      // 🎯 Sticky timeline section
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: false,
      });

      // 🎯 Progress %
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          setProgress(Math.round(self.progress * 100));
        },
      });

      // 🔵 Animated line
      gsap.fromTo(
        lineRef.current,
        { height: "0%" },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );

      // 🧠 Timeline Items
      itemsRef.current.forEach((el, i) => {
        const isLeft = i % 2 === 0;

        // ✨ Entry animation
        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: 80,
            filter: "blur(10px)",
          },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );

        // 🧠 STRONG PARALLAX
        gsap.to(el, {
          y: isLeft ? -80 : 80,
          scrollTrigger: {
            trigger: el,
            scrub: true,
          },
        });

        // 🔥 Dot activation
        ScrollTrigger.create({
          trigger: el,
          start: "top center",
          end: "bottom center",
          onEnter: () => activateDot(i),
          onEnterBack: () => activateDot(i),
        });
      });

      // 🌌 FLOATING PARTICLES
      const canvas = particlesRef.current;
      const ctx2 = canvas.getContext("2d");

      let particles = [];

      const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };

      resize();
      window.addEventListener("resize", resize);

      for (let i = 0; i < 60; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2,
          speedY: Math.random() * 0.5 + 0.2,
        });
      }

      const animateParticles = () => {
        ctx2.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((p) => {
          p.y -= p.speedY;

          if (p.y < 0) {
            p.y = canvas.height;
          }

          ctx2.beginPath();
          ctx2.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx2.fillStyle = "rgba(37,99,235,0.3)";
          ctx2.fill();
        });

        requestAnimationFrame(animateParticles);
      };

      animateParticles();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-[#fff] text-gray overflow-hidden"
    >
      {/* 🌌 PARTICLES */}
      <canvas
        ref={particlesRef}
        className="absolute inset-0 z-0"
      />

        
      {/* 🎯 PROGRESS */}
      <div className="fixed top-24 right-10 text-sm text-gray-400 z-50">
        {progress}%
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold mb-24">
          Developer Journey
        </h2>

        <div className="relative">
          {/* Base line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-[2px] bg-gray-700 h-full"></div>

          {/* Animated line */}
          <div
            ref={lineRef}
            className="absolute left-1/2 -translate-x-1/2 w-[2px] bg-blue-500 h-0"
          />

          <div className="space-y-32">
            {story.map((item, i) => {
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={i}
                  ref={(el) => (itemsRef.current[i] = el)}
                  className={`flex ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* Card */}
                  <div className="w-[45%] bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
                    <span className="text-blue-400 text-sm">
                      {item.year}
                    </span>

                    <h3 className="text-2xl font-bold mt-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 mt-2">
                      {item.desc}
                    </p>
                  </div>

                  {/* Dot */}
                  <div
                    ref={(el) => (dotsRef.current[i] = el)}
                    className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-400 rounded-full border-4 border-black"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperStory;