import { useState } from "react";
import { motion } from "framer-motion";
import studentsimg from "../../public/boyandGIrlimg.png";

const images = [
  "/public/denmark.jpg",
  "/public/germany.jpg",
  "/public/turkey.jpg",
  "/public/greece.jpg",
  "/public/italy.jpg",
  "/public/luxembourg.jpg",
];

const OverseasEducation = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const openModal = (index: number) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const closeModal = () => setSelectedImage(null);

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(images[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(images[prevIndex]);
  };

  return (
    <section className="w-full px-6 py-16 md:px-16 bg-white">
      {/* Content Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left Side Text */}
        <div className="flex-1">
          <h3 className="text-indigo-700 font-semibold text-lg mb-3">
            Overseas Education
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Looking for Quality Abroad Education?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Are you seeking quality education abroad? Discover top-tier academic
            programs and institutions that can elevate your educational journey.
            Our expert advisors provide personalized guidance to help you choose
            the right program, navigate application processes, and secure
            scholarships, ensuring you receive an exceptional education
            experience tailored to your goals.
          </p>
        </div>

        {/* Right Side Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={studentsimg}
            alt="Students"
            className="w-[80%] md:w-[70%] object-contain"
          />
        </div>
      </div>

      {/* Image Scroller */}
      <div className="mt-10">
        <h3 className="text-indigo-700 font-semibold text-lg mb-4">
          Overseas Education
        </h3>

        <div className="overflow-hidden relative">
          <motion.div
            className="flex gap-4"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 20,
            }}
          >f
            {[...images, ...images].map((img, index) => (
              <img
                key={index}
                src={img}
                alt="country"
                className="w-40 h-24 md:w-56 md:h-36 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform"
                onClick={() => openModal(index % images.length)}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="relative w-[90%] md:w-[70%] lg:w-[50%]">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-3xl font-bold"
            >
              &times;
            </button>

            {/* Prev Button */}
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-2 -translate-y-1/2 text-white text-3xl font-bold"
            >
              &#8249;
            </button>

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-2 -translate-y-1/2 text-white text-3xl font-bold"
            >
              &#8250;
            </button>

            {/* Image */}
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default OverseasEducation;
