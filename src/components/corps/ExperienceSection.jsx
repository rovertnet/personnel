import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceTimelineParallax() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".exp-card");

    gsap.to(containerRef.current, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + containerRef.current.offsetWidth,
      },
    });

    // Animation fade-in des cartes
    sections.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: card,
            start: "left center",
            containerAnimation: gsap.to(containerRef.current),
          },
        }
      );
    });
  }, []);

  const experiences = [
    {
      role: "Développeur Frontend",
      company: "TechCorp",
      period: "2023 - Présent",
      description:
        "Conception et développement d'interfaces utilisateur modernes avec React, TailwindCSS et GSAP.",
    },
    {
      role: "Développeur Fullstack",
      company: "StartupX",
      period: "2021 - 2023",
      description:
        "Création d'applications web avec React et Node.js. Intégration API et optimisation des performances.",
    },
    {
      role: "Stage Développeur Web",
      company: "WebAgency",
      period: "2020 - 2021",
      description:
        "Participation à la réalisation de sites vitrines et e-commerce. Découverte des bonnes pratiques UI/UX.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden bg-black text-white"
    >
      <h2 className="absolute top-8 left-1/2 transform -translate-x-1/2 text-3xl md:text-4xl font-bold z-10">
        Expérience Professionnelle
      </h2>

      {/* Container horizontal */}
      <div
        ref={containerRef}
        className="flex h-full items-center space-x-8 px-16"
      >
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="exp-card flex-shrink-0 w-[300px] md:w-[400px] bg-gray-800 rounded-xl shadow-lg p-6 border-t-4 border-red-500"
          >
            <h3 className="text-xl font-semibold">
              {exp.role}{" "}
              <span className="text-red-400">@ {exp.company}</span>
            </h3>
            <p className="text-sm text-gray-400">{exp.period}</p>
            <p className="mt-3 text-gray-300">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
