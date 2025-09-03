import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const iconsRef = useRef([]);
  const barsRef = useRef([]);

  useEffect(() => {
    // Animation des icônes
    gsap.fromTo(
      iconsRef.current,
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

    // Animation des barres de progression
    barsRef.current.forEach((bar, i) => {
      gsap.fromTo(
        bar,
        { width: "0%" },
        {
          width: bar.dataset.level,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  const skills = [
    { name: "React", level: "90%", icon: <FaReact className="text-sky-400" /> },
    {
      name: "Node.js",
      level: "80%",
      icon: <FaNodeJs className="text-green-500" />,
    },
    {
      name: "JavaScript",
      level: "85%",
      icon: <FaJs className="text-yellow-400" />,
    },
    {
      name: "HTML5",
      level: "95%",
      icon: <FaHtml5 className="text-orange-500" />,
    },
    {
      name: "CSS3",
      level: "90%",
      icon: <FaCss3Alt className="text-blue-500" />,
    },
    {
      name: "Tailwind",
      level: "85%",
      icon: <SiTailwindcss className="text-cyan-400" />,
    },
    {
      name: "MongoDB",
      level: "75%",
      icon: <SiMongodb className="text-green-600" />,
    },
    { name: "Git", level: "80%", icon: <FaGitAlt className="text-red-500" /> },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-20"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-indigo-400 mb-12">
        Compétences
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl w-full">
        {skills.map((skill, i) => (
          <div key={i} className="flex flex-col space-y-2">
            {/* Icône + Nom */}
            <div
              ref={(el) => (iconsRef.current[i] = el)}
              className="flex items-center space-x-3"
            >
              <div className="text-4xl">{skill.icon}</div>
              <span className="font-semibold">{skill.name}</span>
            </div>

            {/* Barre de progression */}
            <div className="w-full bg-gray-700 h-3 rounded-lg overflow-hidden">
              <div
                ref={(el) => (barsRef.current[i] = el)}
                data-level={skill.level}
                className="h-3 bg-indigo-500 rounded-lg"
              ></div>
            </div>

            {/* Pourcentage */}
            <span className="text-sm text-gray-400">{skill.level}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
