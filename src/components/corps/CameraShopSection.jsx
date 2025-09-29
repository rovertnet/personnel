import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CameraShopSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    // Animation d'apparition
    gsap.fromTo(
      el.querySelectorAll(".fade-up"),
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.3, ease: "power3.out" }
    );

    // Animation hover sur les boutons
    const buttons = el.querySelectorAll(".btn-animate");
    buttons.forEach((btn) => {
      btn.addEventListener("mouseenter", () => {
        gsap.to(btn, { scale: 1.05, duration: 0.3, ease: "power2.out" });
      });
      btn.addEventListener("mouseleave", () => {
        gsap.to(btn, { scale: 1, duration: 0.3, ease: "power2.out" });
      });
    });

    // Nettoyage des events
    return () => {
      buttons.forEach((btn) => {
        btn.removeEventListener("mouseenter", () => {});
        btn.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full flex flex-col md:flex-row items-center justify-center gap-6 px-20 py-12 bg-black"
    >
      {/* Images */}
      <div className="flex gap-4 md:w-1/2">
        <img
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
          alt="Person with phone"
          className="fade-up w-1/2 h-[350px] object-cover rounded-lg shadow-lg"
        />
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
          alt="Nature canyon"
          className="fade-up w-1/2 h-[350px] object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Texte + Boutons */}
      <div className="fade-up md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4 leading-snug text-white">
          Point your camera <br /> find products online.
        </h2>
        <p className="text-gray-300 mb-6">
          Using test items of real content and data in designs will help, but
          there's no guarantee that every oddity will be found and corrected. Do
          you want to be sure or beta.
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
          <button className="btn-animate px-6 py-2 bg-red-500 text-white rounded-md shadow">
            TO SHOP
          </button>
          <button className="btn-animate px-6 py-2 border border-gray-400 rounded-md shadow text-gray-200">
            VIEW MORE
          </button>
        </div>
      </div>
    </section>
  );
}
