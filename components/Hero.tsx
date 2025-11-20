"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-background-pure pt-40 pb-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div
          className={	ext-center maxæž-4xl mx-auto transition-all duration-1000 }
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-tight text-primary">
            A technology partner across every stage of your enterprise journey
          </h1>
        </div>
      </div>
    </section>
  );
}
