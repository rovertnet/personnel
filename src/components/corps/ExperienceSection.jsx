// ExperienceTimelineResponsive.jsx
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    id: 1,
    role: "Développeur Frontend",
    company: "TechCorp",
    period: "2023 - Présent",
    description:
      "Conception et développement d'interfaces utilisateur modernes avec React, TailwindCSS et GSAP.",
  },
  {
    id: 2,
    role: "Développeur Fullstack",
    company: "StartupX",
    period: "2021 - 2023",
    description:
      "Création d'applications web avec React et Node.js. Intégration API et optimisation.",
  },
  {
    id: 3,
    role: "Stagiaire Développement",
    company: "WebAgency",
    period: "2020 - 2021",
    description:
      "Participation à la réalisation de sites vitrines et e-commerce.",
  },
];

export default function ExperienceTimelineResponsive() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // matchMedia gère proprement le comportement par breakpoint
      ScrollTrigger.matchMedia({
        // -------------------------
        // Desktop / large screens
        // -------------------------
        "(min-width: 768px)": () => {
          const section = sectionRef.current;
          const container = containerRef.current;
          const cards = gsap.utils.toArray(".exp-card");

          if (!section || !container || cards.length === 0) return;

          // largeur à scroller horizontalement
          const totalScroll = Math.max(0, container.scrollWidth - section.clientWidth);

          // animation principale : translateX horizontal du container
          const horizTween = gsap.to(container, {
            x: -totalScroll,
            ease: "none",
            paused: false,
            // ScrollTrigger attaché à ce tween
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: () => "+=" + totalScroll,
              scrub: 1,
              pin: true,
              anticipatePin: 1,
            },
          });

          // animation d'apparition par carte liée à la timeline horizontale
          cards.forEach((card) => {
            gsap.fromTo(
              card,
              { opacity: 0, y: 40 },
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                scrollTrigger: {
                  trigger: card,
                  containerAnimation: horizTween,
                  start: "left center",
                },
              }
            );
          });

          // cleanup spécifique à ce media query
          return () => {
            horizTween.kill();
            ScrollTrigger.getAll().forEach((st) => st.kill());
          };
        },

        // -------------------------
        // Mobile / small screens
        // -------------------------
        "(max-width: 767px)": () => {
          // Sur mobile : pile verticalement (flex-col) + apparition classique
          const mobileCards = gsap.utils.toArray(".exp-card");
          mobileCards.forEach((card) => {
            gsap.fromTo(
              card,
              { opacity: 0, y: 30 },
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                scrollTrigger: {
                  trigger: card,
                  start: "top 85%",
                  toggleActions: "play none none reverse",
                },
              }
            );
          });

          return () => {
            ScrollTrigger.getAll().forEach((st) => st.kill());
          };
        },
      }); // end matchMedia
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black text-white md:h-screen overflow-hidden"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center pt-8 pb-6">
        Expérience Professionnelle
      </h2>

      <div className="relative">
        {/* Container : col on mobile, row on desktop. md:whitespace-nowrap + cards flex-shrink-0 => width dépasse écran */}
        <div
          ref={containerRef}
          className="flex flex-col md:flex-row md:items-center md:gap-8 px-6 md:px-20 pb-12 md:pb-0 will-change-transform"
        >
          {experiences.map((exp) => (
            <article
              key={exp.id}
              className="exp-card flex-shrink-0 w-full md:w-[360px] bg-gray-800 rounded-2xl p-6 shadow-lg border-t-4 border-red-500 mb-6 md:mb-0"
            >
              <h3 className="text-xl font-semibold">
                {exp.role}{" "}
                <span className="text-red-400 font-medium">@ {exp.company}</span>
              </h3>
              <p className="text-sm text-gray-400">{exp.period}</p>
              <p className="mt-3 text-gray-300 text-sm">{exp.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
