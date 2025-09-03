import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1 }
    )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.5"
      )
      .fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.6 },
        "-=0.3"
      );
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center px-6"
    >
      <h1
        ref={titleRef}
        className="text-4xl md:text-6xl font-extrabold text-indigo-400"
      >
        Salut, je suis <span className="text-white">Robert</span>
      </h1>
      <p
        ref={subtitleRef}
        className="mt-6 text-lg md:text-2xl text-gray-300 max-w-3xl"
      >
        Développeur{" "}
        <span className="text-indigo-400 font-semibold">Full Stack</span>{" "}
        passionné 🚀, spécialisé aussi en{" "}
        <span className="text-indigo-400 font-semibold">Marketing Digital</span>{" "}
        et{" "}
        <span className="text-indigo-400 font-semibold">
          Communication Digitale
        </span>
        . J’aide les entreprises à construire des solutions web performantes
        tout en valorisant leur présence en ligne.
      </p>
      <div ref={buttonRef} className="mt-8 flex flex-col md:flex-row gap-4">
        <a
          href="#projects"
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition"
        >
          Voir mes projets
        </a>
        <a
          href="#contact"
          className="border border-indigo-500 hover:bg-indigo-500 hover:text-white text-indigo-400 px-6 py-3 rounded-full font-semibold shadow-lg transition"
        >
          Me contacter
        </a>
      </div>
    </section>
  );
}
