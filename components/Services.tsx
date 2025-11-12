"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "Technology Consulting",
    description: "Strategic technology guidance to align your business objectives with cutting-edge solutions. We analyze your current infrastructure, identify optimization opportunities, and design scalable architectures that drive innovation and competitive advantage.",
    niche: "Enterprise transformation through data-driven technology roadmaps",
    icon: "📊",
  },
  {
    title: "Software Architecture",
    description: "Designing robust, scalable, and maintainable software systems that stand the test of time. Our architectural approach emphasizes microservices, cloud-native patterns, and domain-driven design to ensure your applications evolve seamlessly with your business needs.",
    niche: "Microservices orchestration and event-driven architecture patterns",
    icon: "🏗️",
  },
  {
    title: "AI Product Development",
    description: "Transforming artificial intelligence concepts into production-ready products. From machine learning model development to MLOps pipelines, we build intelligent systems that learn, adapt, and deliver measurable business value through advanced AI capabilities.",
    niche: "Custom LLM integration and generative AI product development",
    icon: "🤖",
  },
  {
    title: "Hardware / IoT",
    description: "Bridging the physical and digital worlds through embedded systems and IoT solutions. We develop connected devices, sensor networks, and edge computing systems that enable real-time data collection, processing, and intelligent automation across industries.",
    niche: "Edge AI deployment and industrial IoT system integration",
    icon: "🔌",
  },
  {
    title: "Web Applications",
    description: "Crafting elegant, performant web experiences that engage users and drive conversions. Our full-stack expertise spans modern frameworks, serverless architectures, and progressive web applications that deliver exceptional user experiences across all devices.",
    niche: "Serverless-first architecture and real-time collaborative platforms",
    icon: "🌐",
  },
  {
    title: "Mobile Applications",
    description: "Native and cross-platform mobile solutions that leverage platform-specific capabilities while maintaining code efficiency. We build intuitive, high-performance mobile applications with offline-first architectures and seamless cloud synchronization.",
    niche: "Cross-platform frameworks with native performance optimization",
    icon: "📱",
  },
];

export default function Services() {
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
      id="Services"
      ref={sectionRef}
      className="py-32 bg-white"
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div
          className={`text-center mb-24 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-light mb-4 text-slate-900 tracking-tight">
            Our Services
          </h2>
          <div className="w-24 h-px bg-slate-300 mx-auto mt-8"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white border border-slate-200 p-10 hover:border-slate-300 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="mb-6 text-4xl opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-light mb-4 text-slate-900 tracking-tight">
                {service.title}
              </h3>
              
              <p className="text-slate-600 mb-6 leading-relaxed text-sm font-light">
                {service.description}
              </p>
              
              <div className="pt-6 border-t border-slate-100">
                <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">
                  {service.niche}
                </p>
              </div>
              
              <div className="absolute bottom-0 left-0 w-0 h-px bg-slate-900 group-hover:w-full transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
