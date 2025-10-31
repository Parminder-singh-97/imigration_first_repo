// import React, { useState, useEffect, useRef } from "react";
// import { NavLink } from "react-router-dom";
// import { X, Menu } from "lucide-react"; // npm install lucide-react

// interface HeroSectionProps {
//   variant?: "video" | "image";
//   mediaSrc: string;
// }

// const HeroSection: React.FC<HeroSectionProps> = ({ variant = "video", mediaSrc }) => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const menuRef = useRef<HTMLDivElement | null>(null); // ref for slider container

//   // Close menu when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         menuRef.current &&
//         !menuRef.current.contains(event.target as Node)
//       ) {
//         setMenuOpen(false);
//       }
//     };

//     if (menuOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [menuOpen]);

//   return (
//     <div className="relative h-[70vh] w-full overflow-hidden flex flex-col">
//       {/* ===== Background ===== */}
//       <div className="absolute inset-0 z-0">
//         {variant === "video" ? (
//           <video
//             className="w-full h-full object-cover"
//             src={mediaSrc}
//             autoPlay
//             loop
//             muted
//             playsInline
//           />
//         ) : (
//           <img src={mediaSrc} alt="Background" className="w-full h-full object-cover" />
//         )}
//         <div className="absolute inset-0 bg-black/50" />
//       </div>

//       {/* ===== Navbar ===== */}
//       <nav className="relative z-10 flex justify-between items-center px-6 md:px-16 py-4 text-white">
//         <div className="text-2xl font-bold">My LOGO</div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex gap-8 text-lg">
//           {["Home", "About Us", "Services", "Contact"].map((name) => (
//             <li key={name}>
//               <NavLink
//                 to={name === "Home" ? "/" : `/${name.toLowerCase().replace(" ", "")}`}
//                 className={({ isActive }) =>
//                   `hover:text-blue-400 ${
//                     isActive ? "text-blue-400 font-semibold" : ""
//                   }`
//                 }
//               >
//                 {name}
//               </NavLink>
//             </li>
//           ))}
//         </ul>

//         <NavLink to="/contact" className="hidden md:block">
//           <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-semibold transition">
//             Contact Us
//           </button>
//         </NavLink>

//         {/* Mobile Menu Icon */}
//         <button
//           className="md:hidden text-white focus:outline-none"
//           onClick={() => setMenuOpen(true)}
//         >
//           <Menu size={28} />
//         </button>
//       </nav>

//       {/* ===== Hero Content ===== */}
//       <div className="relative z-10 flex flex-col justify-center items-center text-center text-white flex-grow px-4">
//         <h1 className="text-4xl md:text-6xl font-bold mb-4">Stay Abroad</h1>
//         <p className="text-lg md:text-2xl max-w-2xl">
//           We are your path finder at each step of Abroad Education Process
//         </p>
//       </div>

//       {/* ===== Mobile Slide Menu ===== */}
//       {menuOpen && (
//         <div className="fixed inset-0 z-40 bg-black/50 md:hidden transition-opacity duration-500"></div>
//       )}

//       <div
//         ref={menuRef}
//         className={`fixed top-0 right-0 h-full bg-white text-black z-50 transform transition-transform duration-500 ease-in-out
//         ${menuOpen ? "translate-x-0" : "translate-x-full"} w-[65vw] sm:w-[60vw]`}
//       >
//         <div className="flex justify-between items-center p-4 border-b border-gray-200">
//           <h2 className="text-xl font-semibold text-gray-800">Menu</h2>
//           <button
//             className="text-gray-700 hover:text-red-600"
//             onClick={() => setMenuOpen(false)}
//           >
//             <X size={28} />
//           </button>
//         </div>

//         <ul className="flex flex-col gap-6 mt-8 px-6 text-lg">
//           {["Home", "About Us", "Services", "Contact"].map((name) => (
//             <li key={name}>
//               <NavLink
//                 to={name === "Home" ? "/" : `/${name.toLowerCase().replace(" ", "")}`}
//                 className={({ isActive }) =>
//                   `block py-2 hover:text-blue-500 ${
//                     isActive ? "text-blue-600 font-semibold" : ""
//                   }`
//                 }
//                 onClick={() => setMenuOpen(false)}
//               >
//                 {name}
//               </NavLink>
//             </li>
//           ))}
//         </ul>

//         <div className="px-6 mt-8">
//           <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
//             <button className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2 rounded-lg font-semibold transition">
//               Contact Us
//             </button>
//           </NavLink>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;



// import React, { useState, useEffect, useRef } from "react";
// import { NavLink } from "react-router-dom";
// import { X, Menu } from "lucide-react";
// import { motion } from "framer-motion";

// const countries = [
//   "/public/denmark.jpg",
//   "/public/germany.jpg",
//   "/public/turkey.jpg",
//   "/public/greece.jpg",
//   "/public/italy.jpg",
//   "/public/luxembourg.jpg",
// ];

// interface HeroSectionProps {
//   variant?: "video" | "image";
//   mediaSrc: string;
// }

// const HeroSection: React.FC<HeroSectionProps> = ({ variant = "video", mediaSrc }) => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [selectedImage, setSelectedImage] = useState<string | null>(null);
//   const [currentIndex, setCurrentIndex] = useState<number>(0);
//   const menuRef = useRef<HTMLDivElement | null>(null);

//   // Handle outside click for menu close
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
//         setMenuOpen(false);
//       }
//     };
//     if (menuOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [menuOpen]);

//   // Modal handlers
//   const openModal = (index: number) => {
//     setSelectedImage(countries[index]);
//     setCurrentIndex(index);
//   };
//   const closeModal = () => setSelectedImage(null);
//   const nextImage = () => {
//     const nextIndex = (currentIndex + 1) % countries.length;
//     setCurrentIndex(nextIndex);
//     setSelectedImage(countries[nextIndex]);
//   };
//   const prevImage = () => {
//     const prevIndex = (currentIndex - 1 + countries.length) % countries.length;
//     setCurrentIndex(prevIndex);
//     setSelectedImage(countries[prevIndex]);
//   };

//   return (
//     <div className="relative w-full overflow-hidden flex flex-col">
//       {/* ===== Background ===== */}
//       <div className="absolute inset-0 z-0 h-[80vh]">
//         {variant === "video" ? (
//           <video
//             className="w-full h-[80vh] object-cover"
//             src={mediaSrc}
//             autoPlay
//             loop
//             muted
//             playsInline
//           />
//         ) : (
//           <img src={mediaSrc} alt="Background" className="w-full h-[80vh] object-cover" />
//         )}
//         <div className="absolute inset-0 bg-black/50" />
//       </div>

//       {/* ===== Navbar ===== */}
//       <nav className="relative z-10 flex justify-between items-center px-6 md:px-16 py-4 text-white">
//         <div className="text-2xl font-bold">My LOGO</div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex gap-8 text-lg">
//           {["Home", "About Us", "Services", "Contact"].map((name) => (
//             <li key={name}>
//               <NavLink
//                 to={name === "Home" ? "/" : `/${name.toLowerCase().replace(" ", "")}`}
//                 className={({ isActive }) =>
//                   `hover:text-blue-400 ${
//                     isActive ? "text-blue-400 font-semibold" : ""
//                   }`
//                 }
//               >
//                 {name}
//               </NavLink>
//             </li>
//           ))}
//         </ul>

//         {/* Contact Button */}
//         <NavLink to="/contact" className="hidden md:block">
//           <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-semibold transition">
//             Contact Us
//           </button>
//         </NavLink>

//         {/* Mobile Menu Icon */}
//         <button
//           className="md:hidden text-white focus:outline-none"
//           onClick={() => setMenuOpen(true)}
//         >
//           <Menu size={28} />
//         </button>
//       </nav>

//       {/* ===== Hero Content ===== */}
//       <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-[80vh] px-4">
//         <div>
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">Stay Abroad</h1>
//           <p className="text-lg md:text-2xl max-w-2xl mx-auto">
//             We are your path finder at each step of Abroad Education Process
//           </p>
//         </div>

//         {/* ===== Scrolling Flags (Inside Hero Section) ===== */}
//         <div className="mt-10 w-full overflow-hidden">
//           <motion.div
//             className="flex gap-4 justify-center"
//             animate={{ x: ["0%", "-100%"] }}
//             transition={{
//               repeat: Infinity,
//               ease: "linear",
//               duration: 20,
//             }}
//           >
//             {[...countries, ...countries].map((img, index) => (
//               <img
//                 key={index}
//                 src={img}
//                 alt="country flag"
//                 className="w-32 h-20 md:w-48 md:h-28 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform"
//                 onClick={() => openModal(index % countries.length)}
//               />
//             ))}
//           </motion.div>
//         </div>
//       </div>

//       {/* ===== Mobile Slide Menu ===== */}
//       {menuOpen && (
//         <div className="fixed inset-0 z-40 bg-black/50 md:hidden transition-opacity duration-500"></div>
//       )}

//       <div
//         ref={menuRef}
//         className={`fixed top-0 right-0 h-full bg-white text-black z-50 transform transition-transform duration-500 ease-in-out
//         ${menuOpen ? "translate-x-0" : "translate-x-full"} w-[65vw] sm:w-[60vw]`}
//       >
//         <div className="flex justify-between items-center p-4 border-b border-gray-200">
//           <h2 className="text-xl font-semibold text-gray-800">Menu</h2>
//           <button
//             className="text-gray-700 hover:text-red-600"
//             onClick={() => setMenuOpen(false)}
//           >
//             <X size={28} />
//           </button>
//         </div>

//         <ul className="flex flex-col gap-6 mt-8 px-6 text-lg">
//           {["Home", "About Us", "Services", "Contact"].map((name) => (
//             <li key={name}>
//               <NavLink
//                 to={name === "Home" ? "/" : `/${name.toLowerCase().replace(" ", "")}`}
//                 className={({ isActive }) =>
//                   `block py-2 hover:text-blue-500 ${
//                     isActive ? "text-blue-600 font-semibold" : ""
//                   }`
//                 }
//                 onClick={() => setMenuOpen(false)}
//               >
//                 {name}
//               </NavLink>
//             </li>
//           ))}
//         </ul>

//         <div className="px-6 mt-8">
//           <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
//             <button className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2 rounded-lg font-semibold transition">
//               Contact Us
//             </button>
//           </NavLink>
//         </div>
//       </div>

//       {/* ===== Modal (Image Viewer) ===== */}
//       {selectedImage && (
//         <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-[100]">
//           <div className="relative w-[90%] md:w-[70%] lg:w-[50%]">
//             <button
//               onClick={closeModal}
//               className="absolute top-2 right-2 text-white text-3xl font-bold"
//             >
//               &times;
//             </button>
//             <button
//               onClick={prevImage}
//               className="absolute top-1/2 left-2 -translate-y-1/2 text-white text-3xl font-bold"
//             >
//               &#8249;
//             </button>
//             <button
//               onClick={nextImage}
//               className="absolute top-1/2 right-2 -translate-y-1/2 text-white text-3xl font-bold"
//             >
//               &#8250;
//             </button>

//             <img
//               src={selectedImage}
//               alt="Selected Country"
//               className="w-full h-auto rounded-lg shadow-lg"
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HeroSection;


import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { X, Menu } from "lucide-react";
// import { motion } from "framer-motion";
import Logo from "../../public/Logo.png"
import { useLocation } from "react-router-dom";
import "./HeroSection.css"; // 👈 we’ll add a tiny CSS snippet for infinite scroll

const countries = [
  "../../public/denmark.jpg",
  "../../public/germany.jpg",
  "/public/turkey.jpg",
  "/public/greece.jpg",
  "/public/italy.jpg",
  "/public/luxembourg.jpg",
];

interface HeroSectionProps {
  variant?: "video" | "image";
  mediaSrc: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ variant = "video", mediaSrc }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const {pathname} = useLocation()

  // Handle outside click for menu close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  // Modal handlers
  const openModal = (index: number) => {
    setSelectedImage(countries[index]);
    setCurrentIndex(index);
  };
  const closeModal = () => setSelectedImage(null);
  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % countries.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(countries[nextIndex]);
  };
  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + countries.length) % countries.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(countries[prevIndex]);
  };

  return (
    <div className="relative w-full overflow-hidden flex flex-col">
      {/* ===== Background ===== */}
      <div className="absolute inset-0 z-0 h-[80vh]">
        {variant === "video" ? (
          <video
            className="w-full h-[80vh] object-cover"
            src={mediaSrc}
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <img src={mediaSrc} alt="Background" className="w-full h-[80vh] object-cover" />
        )}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* ===== Navbar ===== */}
      <nav className="relative z-10 flex justify-between items-center px-6 md:px-16 py-4 text-white">
        <div className="text-2xl font-bold w-[100px]">
          <img src={Logo} alt="Trust Bridge Logo" className="w-32 h-auto rounded-md"/>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg">
          {["Home", "About Us", "Services", "Contact"].map((name) => (
            <li key={name}>
              <NavLink
                to={name === "Home" ? "/" : `/${name.toLowerCase().replace(" ", "-")}`}
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

        {/* Contact Button */}
        <NavLink to="/contact#contact" className="hidden md:block">
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
      <div className="relative z-10 flex flex-col justify-center items-center text-center text-white px-1 py-[60px]">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{pathname == "/" && "Stay Abroad" }{pathname == "/about-us" && "About Us"}{pathname == "/services" && "Services"} {pathname == "/contact" && "Contact us"}</h1>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto">
            We are your path finder at each step of Abroad Education Process
          </p>
        </div>

        {/* ===== Smooth Infinite Scrolling Flags ===== */}
        <div className="mt-10 w-full overflow-hidden">
          <div className="flex gap-4 min-w-max animate-smooth-scroll">
            {[...countries, ...countries, ...countries].map((img, index) => (
              <img
                key={index}
                src={img}
                alt="country flag"
                className="w-32 h-20 md:w-48 md:h-28 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform"
                onClick={() => openModal(index % countries.length)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ===== Mobile Slide Menu ===== */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 md:hidden transition-opacity duration-500"></div>
      )}

      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full bg-white text-black z-50 transform transition-transform duration-500 ease-in-out
        ${menuOpen ? "translate-x-0" : "translate-x-full"} w-[65vw] sm:w-[60vw]`}
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
                to={name === "Home" ? "/" : `/${name.toLowerCase().replace(" ", "-")}`}
                className={({ isActive }) =>
                  `block py-2 hover:text-blue-500 ${
                    isActive ? "text-blue-600 font-semibold" : ""
                  }`
                }
                onClick={() => setMenuOpen(false)}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="px-6 mt-8">
          <NavLink to="/contact#contact" onClick={() => setMenuOpen(false)}>
            <button className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2 rounded-lg font-semibold transition">
              Contact Us
            </button>
          </NavLink>
        </div>
      </div>

      {/* ===== Modal (Image Viewer) ===== */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-[100]">
          <div className="relative w-[90%] md:w-[70%] lg:w-[50%]">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-3xl font-bold"
            >
              &times;
            </button>
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-2 -translate-y-1/2 text-white text-3xl font-bold"
            >
              &#8249;
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-2 -translate-y-1/2 text-white text-3xl font-bold"
            >
              &#8250;
            </button>

            <img
              src={selectedImage}
              alt="Selected Country"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
