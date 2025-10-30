import React from "react";
import videoSrc from "../../public/stayAbroadvideo.mp4";

const CommitmentSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Video Section */}
        <div className="w-full lg:w-1/2 rounded-xl overflow-hidden shadow-lg">
          <video
            // controls
            autoPlay
            muted
            loop
            className="w-full h-auto rounded-xl"
            poster="https://via.placeholder.com/800x450" // optional preview image
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <h3 className="text-blue-700 font-semibold text-lg mb-2">
            Committed!
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Always deliver more than expected.
          </h2>
          <p className="text-gray-600 leading-relaxed">
            At our immigration services, we are committed to exceeding your
            expectations by providing more than just the standard support. We
            understand that navigating the immigration process can be complex
            and stressful, which is why our dedicated team goes above and beyond
            to ensure a seamless experience. From personalized consultations and
            expert advice to timely updates and comprehensive support, our goal
            is to deliver exceptional service that not only meets but surpasses
            your needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;
