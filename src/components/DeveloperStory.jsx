import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaCode,
  FaRocket,
  FaDatabase,
  FaLaptopCode,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const DeveloperStory = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);
  const dotsRef = useRef([]);
  const lineRef = useRef(null);
  const glowRef = useRef(null);
  const particlesRef = useRef(null);

  const [progress, setProgress] = useState(0);

  const story = [
    {
      year: "Start",
      title: "Curiosity Begins",
      desc: "I started exploring how websites work and became obsessed with creating digital experiences.",
      icon: <FaCode />,
    },
    {
      year: "Learning",
      title: "First Code",
      desc: "Learned HTML, CSS, and JavaScript while experimenting with interactive UI designs.",
      icon: <FaLaptopCode />,
    },
    {
      year: "Growth",
      title: "Frontend Developer",
      desc: "Built modern applications with React, animations, and responsive interfaces.",
      icon: <FaRocket />,
    },
    {
      year: "Backend",
      title: "Full Stack Engineering",
      desc: "Integrated APIs, authentication systems, databases, and scalable architectures.",
      icon: <FaDatabase />,
    },
    {
      year: "Now",
      title: "Creative Web Developer",
      desc: "Crafting immersive digital experiences with performance, elegance, and innovation.",
      icon: <FaRocket />,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // =========================
      // PROGRESS
      // =========================
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          setProgress(Math.round(self.progress * 100));
        },
      });

      // =========================
      // LINE GROW
      // =========================
      gsap.fromTo(
        lineRef.current,
        { height: "0%" },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            scrub: true,
          },
        }
      );

      // =========================
      // GLOW FOLLOW
      // =========================
      gsap.to(glowRef.current, {
        yPercent: 400,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          scrub: true,
        },
      });

      // =========================
      // ITEMS
      // =========================
      itemsRef.current.forEach((el, i) => {
        const card = el.querySelector(".journey-card");

        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: 100,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );

        // floating hover animation
        gsap.to(card, {
          y: -8,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        // active dot
        ScrollTrigger.create({
          trigger: el,
          start: "top center",
          onEnter: () => activateDot(i),
          onEnterBack: () => activateDot(i),
        });
      });

      // =========================
      // DOT EFFECT
      // =========================
      const activateDot = (index) => {
        dotsRef.current.forEach((dot, i) => {
          if (!dot) return;

          gsap.to(dot, {
            scale: i === index ? 1.9 : 1,
            backgroundColor: i === index ? "#3b82f6" : "#6b7280",
            boxShadow:
              i === index
                ? "0 0 25px rgba(59,130,246,0.8)"
                : "0 0 0px rgba(0,0,0,0)",
            duration: 0.4,
          });
        });
      };

      // =========================
      // PARTICLES
      // =========================
      const canvas = particlesRef.current;
      const ctx2 = canvas.getContext("2d");

      let particles = [];

      const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };

      resize();
      window.addEventListener("resize", resize);

      const count = window.innerWidth < 768 ? 40 : 90;

      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2.2,
          speedY: Math.random() * 0.6 + 0.2,
          opacity: Math.random() * 0.5,
        });
      }

      const animate = () => {
        ctx2.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((p) => {
          p.y -= p.speedY;

          if (p.y < 0) {
            p.y = canvas.height;
            p.x = Math.random() * canvas.width;
          }

          ctx2.beginPath();
          ctx2.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx2.fillStyle = `rgba(59,130,246,${p.opacity})`;
          ctx2.fill();
        });

        requestAnimationFrame(animate);
      };

      animate();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#050816] py-32"
    >
      {/* PARTICLES */}
      <canvas
        ref={particlesRef}
        className="absolute inset-0 z-0 opacity-70"
      />

      {/* GRADIENT ORBS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-400/10 blur-[120px] rounded-full" />

      {/* PROGRESS */}
      <div className="hidden md:flex fixed top-10 right-10 z-50">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm text-blue-300 shadow-lg">
          {progress}%
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <div className="mb-28 text-center">
          <p className="uppercase tracking-[0.3em] text-blue-400 text-sm mb-4">
            Timeline
          </p>

          <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">
            My Developer
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Journey
            </span>
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            From curiosity to creating immersive full-stack experiences with
            modern technologies and elegant interfaces.
          </p>
        </div>

        <div className="relative">
          {/* MAIN LINE */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-[2px] h-full bg-white/10" />

          {/* ACTIVE LINE */}
          <div
            ref={lineRef}
            className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-[3px] h-0 bg-gradient-to-b from-blue-400 to-cyan-300"
          />

          {/* GLOW */}
          <div
            ref={glowRef}
            className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-6 h-6 rounded-full bg-blue-400 blur-xl"
          />

          <div className="space-y-28">
            {story.map((item, i) => {
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={i}
                  ref={(el) => (itemsRef.current[i] = el)}
                  className={`flex ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  } justify-start relative`}
                >
                  {/* DOT */}
                  <div
                    ref={(el) => (dotsRef.current[i] = el)}
                    className="
                      absolute
                      left-4
                      md:left-1/2
                      md:-translate-x-1/2
                      top-10
                      w-5 h-5
                      rounded-full
                      bg-gray-500
                      border-4 border-[#050816]
                      z-20
                    "
                  />

                  {/* CARD */}
                  <div
                    className="
                      journey-card
                      ml-12 md:ml-0
                      relative
                      w-full md:w-[43%]
                      p-8
                      rounded-[28px]
                      border border-white/10
                      backdrop-blur-xl
                      bg-white/5
                      shadow-[0_0_40px_rgba(59,130,246,0.12)]
                      overflow-hidden
                      group
                    "
                  >
                    {/* hover glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/10 to-cyan-400/10" />

                    <div className="relative z-10">
                      {/* ICON */}
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white text-xl shadow-lg mb-6">
                        {item.icon}
                      </div>

                      <span className="text-blue-300 uppercase tracking-widest text-xs">
                        {item.year}
                      </span>

                      <h3 className="text-2xl md:text-3xl font-bold text-white mt-3">
                        {item.title}
                      </h3>

                      <p className="text-gray-400 leading-relaxed mt-4">
                        {item.desc}
                      </p>
                    </div>
                  </div>
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