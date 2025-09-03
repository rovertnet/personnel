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
            src="https://scontent.fbzv3-2.fna.fbcdn.net/v/t39.30808-6/461840239_1058180835913350_1832807611353982510_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGgiGWGDVybcdJjUgvT80nDQcRdczSQRC5BxF1zNJBELk-YL9GDXdbN9GlMPomp3baKYx6fxEiVqAPJ_W3M_ZhG&_nc_ohc=pJfXu7r2FUgQ7kNvwESWsPR&_nc_oc=AdkA2LTHpDIO3Ip3EwJbrYX5Jg3dAC70SsLg-64NwzvVCKIicdI1RXIra3KYAPmRXOQBqyl_Ef1Yqfn1twBYfbN0&_nc_zt=23&_nc_ht=scontent.fbzv3-2.fna&_nc_gid=cEjq5GmWAo5dLQCi5S0DGw&oh=00_AfYmqMaqS47deKTzm1NJNPeE7p42uzzzgw_-przWvTnCnQ&oe=68BE2F58" // ⚡ Mets ton image dans /public/profile.jpg
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
