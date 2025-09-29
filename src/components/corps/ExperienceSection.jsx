import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceSectionHorizontal() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll(".exp-card");

    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
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
      className="w-full px-6 md:px-16 py-16 bg-black text-white"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Expérience Professionnelle
      </h2>

      {/* Timeline horizontale */}
      <div className="flex overflow-x-auto gap-8 pb-4 scrollbar-thin scrollbar-thumb-red-500">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="exp-card min-w-[300px] md:min-w-[350px] bg-gray-800 rounded-xl shadow-lg p-6 relative border-t-4 border-red-500"
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
