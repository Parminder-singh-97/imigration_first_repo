// import React, { useEffect, useRef } from "react";

// const reviews = [
//   {
//     name: "Vanshika Garg",
//     visa: "UK Tourist Visa",
//     text: "The team at this immigration consultant office in Chandigarh is amazing. Very good staff and excellent behavior. Everyone is so helpful and professional.",
//     image: "https://randomuser.me/api/portraits/women/44.jpg",
//   },
//   {
//     name: "Dharminder Singh",
//     visa: "Singapore Visitor Visa",
//     text: "I had a great experience with this office. The team members are very polite and knowledgeable. They guided me throughout the process.",
//     image: "https://randomuser.me/api/portraits/men/33.jpg",
//   },
//   {
//     name: "Priya Sharma",
//     visa: "Canada Study Visa",
//     text: "They handled my study visa application very smoothly. Great service and timely communication!",
//     image: "https://randomuser.me/api/portraits/women/45.jpg",
//   },
//   {
//     name: "Aman Verma",
//     visa: "Australia PR Visa",
//     text: "Professional and supportive team. They explained each step clearly and helped me get my PR without stress.",
//     image: "https://randomuser.me/api/portraits/men/21.jpg",
//   },
// ];

// const ClientReviews: React.FC = () => {
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const cardWidthRef = useRef<number>(0);
//   const indexRef = useRef<number>(0);

//   useEffect(() => {
//     const container = scrollRef.current;
//     if (!container) return;

//     const firstCard = container.children[0] as HTMLElement;
//     cardWidthRef.current = firstCard.offsetWidth + 24; // gap between cards

//     const interval = setInterval(() => {
//       if (!container) return;

//       indexRef.current++;
//       if (indexRef.current >= reviews.length) {
//         indexRef.current = 0;
//         container.scrollTo({ left: 0, behavior: "smooth" });
//       } else {
//         container.scrollTo({
//           left: indexRef.current * cardWidthRef.current,
//           behavior: "smooth",
//         });
//       }
//     }, 8000); // 8 seconds per scroll

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="bg-[#5eb4e7] py-16 px-4 md:px-12">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl font-bold text-gray-800 mb-10">
//           Clients Love Reviews
//         </h2>

//         <div
//           ref={scrollRef}
//           className="flex overflow-x-auto gap-6 scroll-smooth no-scrollbar snap-x snap-mandatory"
//         >
//           {reviews.map((review, index) => (
//             <div
//               key={index}
//               className="min-w-full md:min-w-[60%] bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between snap-center"
//             >
//               <p className="text-gray-700 text-base mb-4 leading-relaxed">
//                 {review.text}
//               </p>
//               <div className="flex items-center gap-4 mt-auto">
//                 <img
//                   src={review.image}
//                   alt={review.name}
//                   className="w-12 h-12 rounded-full object-cover"
//                 />
//                 <div>
//                   <h4 className="font-semibold text-gray-800">{review.name}</h4>
//                   <p className="text-sm text-gray-500">{review.visa}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ClientReviews;

import React, { useEffect, useRef } from "react";

const reviews = [
  {
    name: "Vanshika Garg",
    visa: "UK Tourist Visa",
    text: "Trust Bridge Overseas Mohali di team bahut changi hai. Staff sab polite te professional ne. Bahut vadhiya experience si mera, sach much helpful log ne.",
    image: "/public/girlClient1.jpeg", // Indian-looking female
  },
  {
    name: "Dharminder Singh",
    visa: "Singapore Visitor Visa",
    text: "Mujhe Trust Bridge Overseas ke staff ka behavior bahut pasand aaya. Sab ne bahut pyaar se guide kiya, process smooth tha. Highly recommend karunga!",
    image: "/public/boyClient2.jpeg", // Indian-looking male
  },
  {
    name: "Priya Sharma",
    visa: "Canada Study Visa",
    text: "Mainu Canada study visa mil gaya Trust Bridge Overseas de through. Process clear te fast si. Bahut honest consultancy aa, thanks team!",
    image: "https://i.pravatar.cc/300?img=49", // Indian-looking female
  },
  {
    name: "Aman Verma",
    visa: "Australia PR Visa",
    text: "Trust Bridge Overseas Mohali wale bahut professional ne. Har step detail ch samjha ke help kiti. PR process tension-free ho gaya, shukriya ji!",
    image: "https://i.pravatar.cc/300?img=8", // Indian-looking male
  },
  {
    name: "Simran Kaur",
    visa: "New Zealand Study Visa",
    text: "Mainu lagda Mohali ch Trust Bridge Overseas best consultancy hai. Staff dil se help karda, service transparent te fast aa. Bohat changa experience si!",
    image: "/public/girlClient3.jpeg", // Indian-looking female
  },
];


const ClientReviews: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef<number>(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const updateScroll = () => {
      if (!container) return;

      const cardWidth = container.firstElementChild
        ? (container.firstElementChild as HTMLElement).offsetWidth + 24 // gap
        : 0;

      indexRef.current++;
      const maxIndex =
        window.innerWidth >= 1024
          ? Math.ceil(reviews.length / 2) - 1 // for 2 visible cards
          : reviews.length - 1;

      if (indexRef.current > maxIndex) {
        indexRef.current = 0;
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollTo({
          left: indexRef.current * cardWidth,
          behavior: "smooth",
        });
      }
    };

    const interval = setInterval(updateScroll, 8000); // 8 seconds interval

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#5eb4e7] py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Clients Love Reviews
        </h2>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 scroll-smooth no-scrollbar snap-x snap-mandatory"
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="min-w-full sm:min-w-[70%] lg:min-w-[45%] bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between snap-center"
            >
              <p className="text-gray-700 text-base mb-4 leading-relaxed">
                {review.text}
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.visa}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
