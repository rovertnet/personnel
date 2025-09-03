import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaReact, FaNodeJs, FaLaravel } from "react-icons/fa";
import {
  SiNestjs,
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiMysql,
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const iconsRef = useRef([]);

  const skills = [
    { name: "React", icon: <FaReact size={40} />, level: 90 },
    { name: "Node.js", icon: <FaNodeJs size={40} />, level: 80 },
    { name: "Laravel", icon: <FaLaravel size={40} />, level: 75 },
    { name: "NestJS", icon: <SiNestjs size={40} />, level: 70 },
    { name: "Next.js", icon: <SiNextdotjs size={40} />, level: 85 },
    { name: "TypeScript", icon: <SiTypescript size={40} />, level: 80 },
    { name: "MySQL", icon: <SiMysql size={40} />, level: 75 },
    { name: "PostgreSQL", icon: <SiPostgresql size={40} />, level: 70 },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation des icônes
      gsap.fromTo(
        iconsRef.current.filter(Boolean),
        { opacity: 0, scale: 0.5, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.2,
          scrollTrigger: {
            trigger: "#skills",
            start: "top 80%",
          },
        }
      );

      // Sélectionner barres et compteurs de manière sécurisée
      const bars = gsap.utils.toArray(".skill-bar");
      const counters = gsap.utils.toArray(".skill-counter");

      bars.forEach((bar, i) => {
        const targetValue = parseInt(bar.dataset.level || "0");

        // Animation de la barre
        gsap.fromTo(
          bar,
          { width: "0%" },
          {
            width: targetValue + "%",
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: bar,
              start: "top 85%",
            },
          }
        );

        // Animation du compteur lié
        let counterObj = { val: 0 };
        gsap.to(counterObj, {
          val: targetValue,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 85%",
          },
          onUpdate: () => {
            if (counters[i]) {
              counters[i].textContent = Math.round(counterObj.val) + "%";
            }
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      className="min-h-screen bg-black text-white py-20 px-6"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-indigo-400">
          Compétences
        </h2>

        {/* Icônes */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 mb-16">
          {skills.map((skill, i) => (
            <div
              key={i}
              ref={(el) => (iconsRef.current[i] = el)}
              className="flex flex-col items-center"
            >
              <div className="text-indigo-400">{skill.icon}</div>
              <p className="mt-2">{skill.name}</p>
            </div>
          ))}
        </div>

        {/* Barres de progression */}
        <div className="space-y-6">
          {skills.map((skill, i) => (
            <div key={i}>
              <div className="flex justify-between mb-2">
                <span>{skill.name}</span>
                <span className="skill-counter text-sm text-gray-400">0%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-lg h-3">
                <div
                  data-level={skill.level}
                  className="skill-bar h-3 bg-indigo-500 rounded-lg"
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
