"use client";

import { useEffect, useRef, useState } from "react";

export default function Global() {
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
      ref={sectionRef}
      className="py-32 bg-background-pure relative overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-light mb-4 text-primary tracking-tight">
            Serving customers globally
          </h2>
          <div className="w-24 h-px bg-primary-muted mx-auto mt-8 mb-16"></div>
          
          {/* Radar rings representing global reach */}
          <div className="relative w-full h-64 md:h-80 flex items-center justify-center">
            {/* Radar-style ripple rings */}
            {[0, 1, 2].map((ring) => (
              <div
                key={ring}
                className="absolute rounded-full border border-primary-muted"
                style={{
                  width: "180px",
                  height: "180px",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  opacity: 0,
                  animation: isVisible
                    ? "globalRipple 3s ease-out infinite"
                    : "none",
                  animationDelay: `${ring * 0.9}s`,
                }}
              />
            ))}
            
            {/* Center network icon */}
            <div
              className={`absolute transition-all duration-1000 ${
                isVisible ? "opacity-40 scale-100" : "opacity-0 scale-50"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-primary-muted"
              >
                <circle cx="40" cy="40" r="2" fill="currentColor" />
                <circle cx="20" cy="20" r="1.5" fill="currentColor" opacity="0.6" />
                <circle cx="60" cy="20" r="1.5" fill="currentColor" opacity="0.6" />
                <circle cx="20" cy="60" r="1.5" fill="currentColor" opacity="0.6" />
                <circle cx="60" cy="60" r="1.5" fill="currentColor" opacity="0.6" />
                <circle cx="40" cy="10" r="1.5" fill="currentColor" opacity="0.6" />
                <circle cx="40" cy="70" r="1.5" fill="currentColor" opacity="0.6" />
                <circle cx="10" cy="40" r="1.5" fill="currentColor" opacity="0.6" />
                <circle cx="70" cy="40" r="1.5" fill="currentColor" opacity="0.6" />
                <line x1="40" y1="40" x2="20" y2="20" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
                <line x1="40" y1="40" x2="60" y2="20" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
                <line x1="40" y1="40" x2="20" y2="60" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
                <line x1="40" y1="40" x2="60" y2="60" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
                <line x1="40" y1="40" x2="40" y2="10" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
                <line x1="40" y1="40" x2="40" y2="70" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
                <line x1="40" y1="40" x2="10" y2="40" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
                <line x1="40" y1="40" x2="70" y2="40" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

