export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="flex items-center gap-3 font-semibold text-gray-900 text-lg">
          <span className="px-2 py-1 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold">
            PA
          </span>
          Alfren
        </div>

        {/* NAV LINKS */}
        <nav className="hidden md:flex items-center gap-10 text-gray-600 font-medium">
          <a href="#home" className="hover:text-blue-600 transition">Home</a>
          <a href="#work" className="hover:text-blue-600 transition">Work</a>
          <a href="#services" className="hover:text-blue-600 transition">Services</a>
          <a href="#" className="hover:text-blue-600 transition">FAQ</a>
        </nav>

        {/* CTA BUTTON */}
        <button className="hidden md:block px-5 py-2 rounded-full bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition">
          Inquire
        </button>

        {/* MOBILE MENU ICON */}
        <div className="md:hidden">
          <button className="text-gray-700">
            ☰
          </button>
        </div>

      </div>
    </header>
  );
}