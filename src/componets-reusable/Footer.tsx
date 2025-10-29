import { NavLink } from "react-router-dom";
import { Facebook, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0b2c83] text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section */}
        <div>
          <img
            src="/logo.png"
            alt="Stark Overseas"
            className="w-36 mb-4"
          />
          <p className="text-sm leading-relaxed text-gray-200">
            Our company specializes in providing comprehensive assistance with
            study visas, tourist visas, and a range of immigration-related
            matters.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4 border-b border-white/30 pb-2 inline-block">
            Useful Links
          </h2>
          <ul className="space-y-2 text-gray-200">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `transition-colors hover:text-sky-300 ${
                    isActive ? "text-sky-300 font-medium" : ""
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `transition-colors hover:text-sky-300 ${
                    isActive ? "text-sky-300 font-medium" : ""
                  }`
                }
              >
                About us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `transition-colors hover:text-sky-300 ${
                    isActive ? "text-sky-300 font-medium" : ""
                  }`
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `transition-colors hover:text-sky-300 ${
                    isActive ? "text-sky-300 font-medium" : ""
                  }`
                }
              >
                Contact us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-4 border-b border-white/30 pb-2 inline-block">
            Contact us
          </h2>
          <p className="text-gray-200 mb-3">Phone : +91 97798 45777</p>

          {/* Social Icons */}
          <div className="flex gap-4 mb-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition"
            >
              <Twitter size={18} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition"
            >
              <Youtube size={18} />
            </a>
          </div>

          <p className="text-gray-200 text-sm break-all">
            Email: overseasstark@gmail.com
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/20"></div>

      {/* Bottom Bar */}
      <div className="text-center text-sm py-4 text-gray-300">
        © Copyright starkoverseas {new Date().getFullYear()}. All Rights
        Reserved
      </div>
    </footer>
  );
};

export default Footer;

