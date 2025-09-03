import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    if (footerRef.current) {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
          },
        }
      );
    }
  }, []);

  return (
    <footer ref={footerRef} className="bg-black text-gray-400 py-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold text-indigo-400">R.</h2>
          <p className="mt-2 text-sm">
            Développeur Full Stack | Marketing & Communication Digitale
          </p>
        </div>

        {/* Liens rapides */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Navigation</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#hero"
                className="hover:text-indigo-400 transition-colors"
              >
                Accueil
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-indigo-400 transition-colors"
              >
                À propos
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-indigo-400 transition-colors"
              >
                Compétences
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-indigo-400 transition-colors"
              >
                Projets
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-indigo-400 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Suivez-moi</h3>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="https://github.com/ton-github"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/ton-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/ton-twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 text-2xl"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Ligne en bas */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        © {new Date().getFullYear()} RovertNet. Tous droits réservés.
      </div>
    </footer>
  );
}
