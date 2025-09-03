import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const slidesRef = useRef([]);

  const projects = [
    {
      title: "Portfolio Personnel",
      image: "https://via.placeholder.com/600x400.png?text=Portfolio",
      description:
        "Un site moderne pour présenter mon parcours, mes compétences et mes projets.",
      stack: ["React", "TailwindCSS", "GSAP"],
    },
    {
      title: "Application E-commerce",
      image: "https://via.placeholder.com/600x400.png?text=E-commerce",
      description:
        "Une plateforme complète avec gestion des produits, panier et paiement.",
      stack: ["Node.js", "Express", "MongoDB", "React"],
    },
    {
      title: "Dashboard Analytics",
      image: "https://via.placeholder.com/600x400.png?text=Dashboard",
      description:
        "Un tableau de bord interactif pour suivre des métriques en temps réel.",
      stack: ["Next.js", "TypeScript", "PostgreSQL"],
    },
    {
      title: "Blog Tech",
      image: "https://via.placeholder.com/600x400.png?text=Blog+Tech",
      description:
        "Un blog pour partager des articles techniques et des tutoriels.",
      stack: ["Gatsby", "GraphQL", "Markdown"],
    },
    {
      title: "Réseau Social",
      image: "https://via.placeholder.com/600x400.png?text=Réseau+Social",
      description:
        "Une plateforme sociale avec profils utilisateurs, posts et messagerie.",
      stack: ["Laravel", "Vue.js", "MySQL"],
    },
    {
      title: "Application de Gestion de Projets",
      image: "https://via.placeholder.com/600x400.png?text=Gestion+de+Projets",
      description:
        "Un outil pour planifier, suivre et collaborer sur des projets.",
      stack: ["Django", "React", "SQLite"],
    },
    {
      title: "Site de Réservation de Voyages",
      image:
        "https://via.placeholder.com/600x400.png?text=Réservation+de+Voyages",
      description:
        "Une plateforme pour rechercher et réserver des voyages facilement.",
      stack: ["Ruby on Rails", "Bootstrap", "PostgreSQL"],
    },
    {
      title: "Application de Fitness",
      image: "https://via.placeholder.com/600x400.png?text=Fitness",
      description:
        "Une application pour suivre les entraînements et les progrès physiques.",
      stack: ["Flutter", "Firebase", "Dart"],
    },
    {
      title: "Système de Gestion de Contenu (CMS)",
      image: "https://via.placeholder.com/600x400.png?text=CMS",
      description:
        "Un CMS flexible pour créer et gérer du contenu web facilement.",
      stack: ["WordPress", "PHP", "MySQL"],
    },
  ];

  useEffect(() => {
    if (slidesRef.current.length > 0) {
      gsap.fromTo(
        slidesRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#projects",
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-indigo-400">Projets</h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: { slidesPerView: 1 }, // mobile
            768: { slidesPerView: 2 }, // tablette
            1024: { slidesPerView: 3 }, // desktop
          }}
          className="w-full"
        >
          {projects.map((project, i) => (
            <SwiperSlide key={i}>
              <div
                ref={(el) => (slidesRef.current[i] = el)}
                className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-indigo-500/50 transition-shadow duration-300 max-w-sm mx-auto"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6 text-left">
                  <h3 className="text-2xl font-semibold mb-2 text-indigo-400">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 text-sm bg-indigo-500/20 text-indigo-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
