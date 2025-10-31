
import { Briefcase, Book, Plane, Users, GraduationCap, BadgeCheck } from "lucide-react";

const services = [
  {
    icon: <Book className="w-10 h-10 text-white" />,
    title: "Education Visa",
    description: "Are you an International Student looking to pursue your education.",
  },
  {
    icon: <GraduationCap className="w-10 h-10 text-white" />,
    title: "Study Visa",
    description: "Pursue your academic dreams and expand your horizons with study.",
  },
  {
    icon: <Briefcase className="w-10 h-10 text-white" />,
    title: "Business Visa",
    description: "Our Business Visa services are designed to streamline your journey.",
  },
  {
    icon: <Plane className="w-10 h-10 text-white" />,
    title: "Tourist Visa",
    description:
      "Whether you're planning a vacation or visiting family and friends, we’ve got you covered.",
  },
  {
    icon: <Users className="w-10 h-10 text-white" />,
    title: "Spouse/Family Visa",
    description: "Reuniting with your spouse or family members is significant to us.",
  },
  {
    icon: <BadgeCheck className="w-10 h-10 text-white" />,
    title: "Skilled Immigration",
    description: "Unlock career prospects and growth through skilled immigration.",
  },
];

const OurServices = () => {
  return (
    <section id="services" className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-12">
          Our Services
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col items-center text-center"
            >
              <div className="bg-blue-600 p-4 rounded-full mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;