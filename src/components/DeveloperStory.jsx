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
    { year: "Start", title: "Curiosity Begins", desc: "I started exploring how websites work." },
    { year: "Learning", title: "First Code", desc: "Learned HTML, CSS, JS." },
    { year: "Growth", title: "Frontend Dev", desc: "Built apps using React." },
    { year: "Backend", title: "Full Stack", desc: "Worked with APIs & DB." },
    { year: "Now", title: "Web Developer", desc: "Building scalable systems." },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const activateDot = (index) => {
        dotsRef.current.forEach((dot, i) => {
          if (!dot) return;

          gsap.to(dot, {
            scale: i === index ? 1.6 : 1,
            backgroundColor: i === index ? "#2563eb" : "#d1d5db",
            duration: 0.3,
          });
        });
      };

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          setProgress(Math.round(self.progress * 100));
        },
      });

      // line animation
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

      // items
      itemsRef.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );

        ScrollTrigger.create({
          trigger: el,
          start: "top center",
          onEnter: () => activateDot(i),
          onEnterBack: () => activateDot(i),
        });
      });

      // 🌌 PARTICLES (optimized)
      const canvas = particlesRef.current;
      const ctx2 = canvas.getContext("2d");

      let particles = [];
      const isMobile = window.innerWidth < 768;

      const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };

      resize();
      window.addEventListener("resize", resize);

      const count = isMobile ? 25 : 60;

      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2,
          speedY: Math.random() * 0.5 + 0.2,
        });
      }

      const animate = () => {
        ctx2.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((p) => {
          p.y -= p.speedY;
          if (p.y < 0) p.y = canvas.height;

          ctx2.beginPath();
          ctx2.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx2.fillStyle = "rgba(37,99,235,0.25)";
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
      className="relative py-20 md:py-32 bg-white overflow-hidden"
    >
      {/* 🌌 PARTICLES */}
      <canvas ref={particlesRef} className="absolute inset-0 z-0" />

      {/* 🎯 PROGRESS */}
      <div className="hidden md:block fixed top-24 right-10 text-sm text-gray-400 z-50">
        {progress}%
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 md:mb-24 text-center md:text-left">
          Developer Journey
        </h2>

        <div className="relative">
          
          {/* LINE */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-[2px] bg-gray-300 h-full"></div>

          {/* ANIMATED LINE */}
          <div
            ref={lineRef}
            className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-[2px] bg-blue-500 h-0"
          />

          <div className="space-y-16 md:space-y-32">
            {story.map((item, i) => {
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={i}
                  ref={(el) => (itemsRef.current[i] = el)}
                  className={`flex ${
                    // 📱 mobile = always left
                    "justify-start md:" + (isLeft ? "justify-start" : "justify-end")
                  }`}
                >
                  {/* CARD */}
                  <div className="
                    ml-10 md:ml-0
                    w-full md:w-[45%]
                    bg-white shadow-md md:shadow-xl
                    p-4 sm:p-6
                    rounded-xl md:rounded-2xl
                  ">
                    <span className="text-blue-500 text-xs sm:text-sm">
                      {item.year}
                    </span>

                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mt-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-500 text-sm sm:text-base mt-2">
                      {item.desc}
                    </p>
                  </div>

                  {/* DOT */}
                  <div
                    ref={(el) => (dotsRef.current[i] = el)}
                    className="
                      absolute 
                      left-4 md:left-1/2 
                      md:-translate-x-1/2 
                      w-3 h-3 md:w-4 md:h-4 
                      bg-gray-400 
                      rounded-full 
                      border-2 md:border-4 border-white
                    "
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