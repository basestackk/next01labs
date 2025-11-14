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

  // Animated dots representing global presence
  const dots = Array.from({ length: 12 }, (_, i) => i);

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
          
          {/* Animated dots representing global reach */}
          <div className="relative w-full h-64 md:h-80 flex items-center justify-center">
            {dots.map((dot, index) => {
              const angle = (index * 360) / dots.length;
              const radius = 120;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;
              
              return (
                <div
                  key={index}
                  className={`absolute w-2 h-2 rounded-full bg-primary-muted transition-all duration-1000 ${
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
                  }`}
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: 'translate(-50%, -50%)',
                    transitionDelay: `${index * 100}ms`,
                    animation: isVisible ? `pulse 2s ease-in-out infinite` : 'none',
                    animationDelay: `${index * 0.2}s`,
                  }}
                />
              );
            })}
            
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

