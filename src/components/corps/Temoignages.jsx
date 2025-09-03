import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

gsap.registerPlugin(ScrollTrigger);

export default function Temoignages() {
  const slidesRef = useRef([]);

  const testimonials = [
    {
      name: "Alice Dupont",
      role: "CEO - StartupX",
      text: "Travailler avec lui a été une expérience incroyable. Son professionnalisme et sa créativité ont vraiment fait la différence.",
    },
    {
      name: "Karim B.",
      role: "CTO - DevSolutions",
      text: "Un développeur polyvalent et efficace. Il sait transformer une idée en produit concret rapidement.",
    },
    {
      name: "Sophie L.",
      role: "Responsable Marketing",
      text: "Sa maîtrise du digital et sa vision stratégique nous ont permis de booster notre communication en ligne.",
    },
    {
      name: "Jean M.",
      role: "Entrepreneur",
      text: "Je recommande fortement ! Toujours disponible, à l'écoute et force de proposition.",
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
            trigger: "#testimonials",
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <section
      id="testimonials"
      className="min-h-screen bg-black text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-indigo-400">
          Témoignages
        </h2>

        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div
                ref={(el) => (slidesRef.current[i] = el)}
                className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-indigo-500/50 transition-shadow duration-300 h-full flex flex-col items-center text-center"
              >
                <h3 className="text-lg font-semibold text-indigo-400">
                  {t.name}
                </h3>
                <p className="text-sm text-gray-400 mb-4">{t.role}</p>
                <p className="text-gray-300 italic">“{t.text}”</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
