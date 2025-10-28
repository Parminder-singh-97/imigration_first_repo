import React from "react";
import { User, BookOpen, Users, Headphones } from "lucide-react";
import SuccessRate from "./SuccessRate";
import Passport from "../../public/passport.jpg";

const features = [
  {
    icon: <User size={40} />,
    title: "Expert Guidance Tailored to Your Needs",
    description:
      "Navigating the complexities of immigration law requires expert knowledge and personalized support. Our team of seasoned professionals brings a wealth of experience and a deep understanding of immigration policies to every case.",
  },
  {
    icon: <BookOpen size={40} />,
    title: "Reasonable Price",
    description:
      "Our proven track record speaks for itself. We have a history of successfully managing a wide range of immigration cases, achieving positive outcomes for our clients.",
  },
  {
    icon: <Users size={40} />,
    title: "Trusted by 5000 Clients",
    description:
      "At the heart of our services is a commitment to delivering exceptional customer service. We prioritize clear communication, responsiveness, and genuine care throughout your immigration journey.",
  },
  {
    icon: <Headphones size={40} />,
    title: "Comprehensive Support",
    description:
      "Immigration processes can be daunting, but you don’t have to face them alone. We offer comprehensive support that covers every aspect of your immigration journey.",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover bg-no-repeat py-16 px-4 md:px-10 lg:px-20"
      style={{
        backgroundImage: `url(${Passport})`,
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center mb-2.5">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2.5">
          Why Choose Us
        </h2>


      {/* Success Rate Positioned in the Center */}
      <div className="z-20">
        <SuccessRate />
      </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/90 rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-blue-600 text-white p-3 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
