import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { X, Menu } from "lucide-react"; // icons library (install via: npm i lucide-react)

interface HeroSectionProps {
  variant?: "video" | "image";
  mediaSrc: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ variant = "video", mediaSrc }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative h-screen w-full overflow-hidden flex flex-col">
      {/* ===== Background ===== */}
      <div className="absolute inset-0 z-0">
        {variant === "video" ? (
          <video
            className="w-full h-full object-cover"
            src={mediaSrc}
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <img src={mediaSrc} alt="Background" className="w-full h-full object-cover" />
        )}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* ===== Navbar ===== */}
      <nav className="relative z-10 flex justify-between items-center px-6 md:px-16 py-4 text-white">
        <div className="text-2xl font-bold">My LOGO</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg">
          {["Home", "About Us", "Services", "Contact"].map((name) => (
            <li key={name}>
              <NavLink
                to={name === "Home" ? "/" : `/${name.toLowerCase().replace(" ", "")}`}
                className={({ isActive }) =>
                  `hover:text-blue-400 ${
                    isActive ? "text-blue-400 font-semibold" : ""
                  }`
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>

        <NavLink to="/contact" className="hidden md:block">
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-semibold transition">
            Contact Us
          </button>
        </NavLink>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* ===== Hero Content ===== */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center text-white flex-grow px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Stay Abroad</h1>
        <p className="text-lg md:text-2xl max-w-2xl">
          We are your path finder at each step of Abroad Education Process
        </p>
      </div>

      {/* ===== Mobile Slide Menu ===== */}
      <div
        className={`fixed top-0 right-0 h-full bg-white text-black z-50 transform transition-transform duration-500 ease-in-out
        ${menuOpen ? "translate-x-0" : "translate-x-full"} w-[50vw] sm:w-[60vw]`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">Menu</h2>
          <button
            className="text-gray-700 hover:text-red-600"
            onClick={() => setMenuOpen(false)}
          >
            <X size={28} />
          </button>
        </div>

        <ul className="flex flex-col gap-6 mt-8 px-6 text-lg">
          {["Home", "About Us", "Services", "Contact"].map((name) => (
            <li key={name}>
              <NavLink
                to={name === "Home" ? "/" : `/${name.toLowerCase().replace(" ", "")}`}
                className={({ isActive }) =>
                  `block py-2 hover:text-blue-500 ${
                    isActive ? "text-blue-600 font-semibold" : ""
                  }`
                }
                onClick={() => setMenuOpen(false)} // close menu on link click
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="px-6 mt-8">
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            <button className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2 rounded-lg font-semibold transition">
              Contact Us
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
