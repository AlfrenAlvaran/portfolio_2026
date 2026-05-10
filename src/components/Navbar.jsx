import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "home" },
    { name: "Work", href: "work" },
    { name: "Services", href: "services" },
    { name: "FAQ", href: "faq" },
    { name: "Inquire", href: "inquire" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setOpen(false);
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 w-full z-[99999] transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-md border-b border-gray-200"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-4 flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="relative group">
              <div className="h-12 w-12 rounded-2xl overflow-hidden bg-white shadow-lg ring-2 ring-cyan-200/60 border border-white/40 backdrop-blur-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-cyan-300/40">
                <img
                  src="/me2.png"
                  alt="Alfren Alvaran Logo"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-cyan-400/30 via-blue-500/20 to-teal-400/30 blur-md -z-10 group-hover:opacity-100 opacity-70 transition-all duration-300"></div>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold text-gray-900 tracking-tight">
                Alfren Alvaran
              </span>
              <span className="text-sm font-medium text-gray-500">
                Web Developer
              </span>
            </div>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="hover:text-blue-600 transition"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* CTA BUTTON */}
          <button
            onClick={() => scrollToSection("inquire")}
            className="hidden md:block px-5 py-2 rounded-full bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
          >
            Inquire
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-2xl text-gray-700"
          >
            ☰
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            {/* OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-md z-[99998]"
            />

            {/* MENU PANEL */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="fixed top-0 right-0 w-[75%] max-w-sm h-full bg-white z-[99999] shadow-2xl p-6 flex flex-col"
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setOpen(false)}
                className="text-2xl self-end mb-6"
              >
                ✕
              </button>

              {/* LINKS */}
              <div className="flex flex-col gap-6 text-lg font-medium text-gray-700">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="text-left hover:text-blue-600 transition"
                  >
                    {link.name}
                  </button>
                ))}
              </div>

              {/* CTA */}
              <button
                onClick={() => scrollToSection("inquire")}
                className="mt-auto w-full py-3 rounded-xl bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
              >
                Inquire
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
