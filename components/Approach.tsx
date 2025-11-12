"use client";

import { useEffect, useRef, useState } from "react";

const approaches = [
  {
    number: "01",
    title: "Discovery",
    description: "We begin by understanding your vision, challenges, and objectives through deep collaboration and strategic analysis.",
  },
  {
    number: "02",
    title: "Architecture",
    description: "Designing scalable, future-proof solutions that align with your business goals and technical requirements.",
  },
  {
    number: "03",
    title: "Development",
    description: "Building with precision, using modern methodologies and best practices to deliver exceptional quality.",
  },
  {
    number: "04",
    title: "Evolution",
    description: "Continuous improvement and optimization to ensure your solutions remain cutting-edge and performant.",
  },
];

export default function Approach() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="Approach"
      ref={sectionRef}
      className="py-32 bg-gradient-to-b from-white via-slate-50/30 to-white"
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-light mb-4 text-slate-900 tracking-tight">
            Our Approach
          </h2>
          <div className="w-24 h-px bg-slate-300 mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {approaches.map((approach, index) => (
            <div
              key={index}
              className={`group relative bg-white border border-slate-200 p-10 hover:border-slate-300 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <div className="mb-6">
                <span className="text-4xl font-light text-slate-400 font-mono tracking-tight">
                  {approach.number}
                </span>
              </div>

              <h3 className="text-xl font-light mb-4 text-slate-900 tracking-tight">
                {approach.title}
              </h3>

              <p className="text-slate-600 leading-relaxed text-sm font-light">
                {approach.description}
              </p>

              <div className="absolute bottom-0 left-0 w-0 h-px bg-slate-900 group-hover:w-full transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

