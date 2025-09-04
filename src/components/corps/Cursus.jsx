import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Cursus() {
  const itemsRef = useRef([]);
  const [filter, setFilter] = useState("all");

  const cursus = [
    {
      date: "2023 - 2024",
      title: "Master Développement Web",
      school: "Université de Kinshasa",
      description:
        "Spécialisation en développement full-stack, optimisation des systèmes et sécurité web.",
      type: "académique",
    },
    {
      date: "2020 - 2023",
      title: "Licence Informatique",
      school: "Institut Supérieur des Techniques Appliquées",
      description:
        "Bases solides en programmation, bases de données et architecture logicielle.",
      type: "académique",
    },
    {
      date: "2018 - 2020",
      title: "BTS Marketing Digital",
      school: "Académie Digitale",
      description:
        "Stratégies de communication digitale, SEO, campagnes publicitaires et réseaux sociaux.",
      type: "académique",
    },
    {
      date: "2024",
      title: "Certification React Avancé",
      school: "Udemy",
      description:
        "Hooks, Context API, performance et bonnes pratiques pour projets réels.",
      type: "certification",
    },
    {
      date: "2023",
      title: "Formation Next.js & TypeScript",
      school: "OpenClassrooms",
      description:
        "Développement d'applications fullstack performantes et maintenables.",
      type: "certification",
    },
    {
      date: "2022",
      title: "Node.js & NestJS Backend",
      school: "Udemy",
      description:
        "Construction d'APIs REST et GraphQL robustes avec NestJS et TypeORM.",
      type: "certification",
    },
    {
      date: "2021",
      title: "Introduction à l’Intelligence Artificielle",
      school: "Coursera",
      description:
        "Bases de l’IA, apprentissage supervisé et non supervisé, cas d’usage concrets.",
      type: "certification",
    },
  ];

  const filteredCursus =
    filter === "all" ? cursus : cursus.filter((item) => item.type === filter);

  useEffect(() => {
    if (itemsRef.current.length > 0) {
      gsap.fromTo(
        itemsRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#cursus",
            start: "top 80%",
          },
        }
      );
    }
  }, [filter]);

  return (
    <section
      id="cursus"
      className="min-h-screen bg-black text-white py-20 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-indigo-400 text-center">
          Mon Cursus & Certifications
        </h2>

        {/* Filtres */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-lg border ${
              filter === "all"
                ? "bg-indigo-500 text-white border-indigo-500"
                : "bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700"
            }`}
          >
            🌍 Tout
          </button>
          <button
            onClick={() => setFilter("académique")}
            className={`px-4 py-2 rounded-lg border ${
              filter === "académique"
                ? "bg-indigo-500 text-white border-indigo-500"
                : "bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700"
            }`}
          >
            🎓 Académique
          </button>
          <button
            onClick={() => setFilter("certification")}
            className={`px-4 py-2 rounded-lg border ${
              filter === "certification"
                ? "bg-indigo-500 text-white border-indigo-500"
                : "bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700"
            }`}
          >
            📜 Certifications
          </button>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-gray-700 pl-6">
          {filteredCursus.map((item, i) => (
            <div
              key={i}
              ref={(el) => (itemsRef.current[i] = el)}
              className="mb-12 relative"
            >
              <div
                className={`absolute -left-3 top-1 w-6 h-6 rounded-full border-4 border-black ${
                  item.type === "académique" ? "bg-indigo-500" : "bg-green-500"
                }`}
              />
              <h3 className="text-2xl font-semibold text-indigo-300">
                {item.title}
              </h3>
              <span className="text-sm text-gray-400">
                {item.date} • {item.school}
              </span>
              <p className="text-gray-300 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}