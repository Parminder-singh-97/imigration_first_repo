import { useEffect, useRef, useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

// Example images — replace with your own URLs or imports
const images = [
  "/denmark.jpg",
  "/germany.jpg",
  "/turkey.jpg",
  "/greece.jpg",
  "/italy.jpg",
  "/luxembourg.jpg",
];

const ContactSection = () => {
  const [index, setIndex] = useState(0);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.style.transform = `translateX(-${index * 100}%)`;
      imgRef.current.style.transition = "transform 1s ease-in-out";
    }
  }, [index]);

  return (
    <section className="bg-gray-100 py-16 px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Top Info Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="bg-blue-900 text-white rounded-2xl p-6 text-center">
            <h3 className="font-semibold text-lg mb-2">Our Mission</h3>
            <p className="text-sm md:text-base">
              Our mission is to offer personalized support and reliable
              solutions, ensuring a smooth transition for our clients whether
              they’re seeking study, work, or permanent residency abroad.
            </p>
          </div>
          <div className="bg-sky-400 text-white rounded-2xl p-6 text-center">
            <h3 className="font-semibold text-lg mb-2">Who we are</h3>
            <p className="text-sm md:text-base">
              Trust Bridge Overseas is your trusted partner for all immigration
              needs. Our expert team helps you navigate the complex process of
              moving abroad.
            </p>
          </div>
          <div className="bg-blue-900 text-white rounded-2xl p-6 text-center">
            <h3 className="font-semibold text-lg mb-2">Expertise</h3>
            <p className="text-sm md:text-base">
              With years of experience, we have successfully assisted numerous
              individuals and families in achieving their immigration goals.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Carousel */}
          <div className="overflow-hidden rounded-xl w-full h-72 md:h-80 relative">
            <div
              ref={imgRef}
              className="flex w-full h-full"
              style={{ transition: "transform 1s ease-in-out" }}
            >
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`carousel-${i}`}
                  className="w-full h-full object-cover flex-shrink-0"
                />
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-center md:text-left">
              Contact Us
            </h3>
            <ul className="space-y-4 text-gray-700 text-base md:text-lg">
              <li className="flex items-center gap-3">
                <Phone className="text-blue-600" />
                <span>+91 7717354081</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-blue-600" />
                <span>trustbridgeoverseas@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-blue-600 mt-1" />
                <span>SCF 64 ,Sector 65 Phase 11 Mohali (Punjab) 160062</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
