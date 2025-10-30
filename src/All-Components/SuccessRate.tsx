import React, { useEffect, useRef, useState } from "react";

interface StatItem {
  label: string;
  value: number;
  suffix?: string;
  bgColor: string;
}

const stats: StatItem[] = [
  { label: "Success Visa", value: 254, bgColor: "bg-[#1E3A8A]" }, // dark blue
  { label: "Study Visa", value: 76, suffix: "%", bgColor: "bg-[#38BDF8]" }, // sky blue
  { label: "Family / Spouse Visa", value: 84, suffix: "%", bgColor: "bg-[#1E3A8A]" }, // dark blue
];

const VisaStats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        let start = 0;
        const end = stat.value;
        const duration = 1500; // ms
        const increment = end / (duration / 20); // update every 20ms

        const counter = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(counter);
          }
          setCounts((prev) => {
            const updated = [...prev];
            updated[index] = Math.floor(start);
            return updated;
          });
        }, 20);
      });
    }
  }, [isVisible]);

  return (
    <div
      ref={ref}
      className="w-full flex flex-col md:flex-row justify-center items-center text-white text-center py-12 px-4 gap-4"
    >
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`flex-1 ${stat.bgColor} rounded-2xl p-6 md:p-8 flex flex-col justify-center items-center w-full max-w-[400px]`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            {counts[index]}
            {stat.suffix || ""}
          </h2>
          <p className="text-lg md:text-xl font-medium">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default VisaStats;
