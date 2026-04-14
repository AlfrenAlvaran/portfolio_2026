import React from "react";
import { FaFacebookF, FaTiktok, FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-gray-800">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3 text-white text-xl font-semibold">
              <span className="px-2 py-1 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold">
                PA
              </span>
              Alfren
            </div>

            <p className="text-gray-400 mt-4 text-sm leading-relaxed max-w-sm">
              Full-Stack Web Developer focused on building scalable, modern,
              and high-performance web applications.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="hover:text-white transition">Home</a></li>
              <li><a href="#work" className="hover:text-white transition">Work</a></li>
              <li><a href="#services" className="hover:text-white transition">Services</a></li>
              <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>

            <p className="text-sm text-gray-400">
              Quezon City, Philippines
            </p>

            <p className="text-sm text-gray-400 mt-2">
              alvaranalfren1@gmail.com
            </p>

            {/* SOCIALS */}
            <div className="flex gap-3 mt-5">
              <a href="https://facebook.com" target="_blank"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-700 hover:bg-blue-600 hover:text-white transition">
                <FaFacebookF />
              </a>

              <a href="https://tiktok.com" target="_blank"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-700 hover:bg-white hover:text-black transition">
                <FaTiktok />
              </a>

              <a href="https://github.com" target="_blank"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-700 hover:bg-gray-800 hover:text-white transition">
                <FaGithub />
              </a>

              <a href="https://linkedin.com" target="_blank"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-700 hover:bg-blue-500 hover:text-white transition">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 text-xs text-gray-500">

          <p>
            © {new Date().getFullYear()} Alfren Alvaran. All rights reserved.
          </p>

          <p className="text-gray-600">
            Built with React, Tailwind & GSAP ⚡
          </p>

        </div>
      </div>
    </footer>
  );
}