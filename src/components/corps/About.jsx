import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Enregistrement du plugin
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Photo */}
        <div ref={imgRef} className="flex justify-center">
          <img
            src="https://via.placeholder.com/300x300.png?text=Photo+Profil" // ⚡ Mets ton image dans /public/profile.jpg
            alt="Photo de profil"
            className="w-64 h-64 object-cover rounded-2xl shadow-lg border-2 border-indigo-500"
          />
        </div>

        {/* Texte */}
        <div ref={textRef} className="text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-indigo-400 mb-6">
            À propos de moi
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Je suis{" "}
            <span className="font-semibold text-white">
              Développeur Full Stack
            </span>
            , passionné par la création d’applications web modernes et
            performantes. En parallèle, j’ai développé une expertise en{" "}
            <span className="text-indigo-400 font-semibold">
              Marketing Digital
            </span>{" "}
            et en{" "}
            <span className="text-indigo-400 font-semibold">
              Communication Digitale
            </span>
            , ce qui me permet de concevoir des solutions techniques tout en
            tenant compte des stratégies de visibilité et de croissance en
            ligne.
          </p>
          <p className="mt-4 text-gray-400">
            Mon objectif : allier technologie et stratégie digitale pour aider
            les entreprises et entrepreneurs à développer leur présence sur le
            web de manière efficace.
          </p>
        </div>
      </div>
    </section>
  );
}
