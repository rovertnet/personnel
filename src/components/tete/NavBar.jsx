import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const navRef = useRef(null);
  const linksRef = useRef([]);
  const mobileLinksRef = useRef([]);
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Accueil", href: "#hero" },
    { name: "À propos", href: "#about" },
    { name: "Compétences", href: "#skills" },
    { name: "Projets", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    // Animation de la navbar (slide down)
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    // Animation des liens desktop
    gsap.fromTo(
      linksRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.3,
        stagger: 0.15,
      }
    );
  }, []);
  

  useEffect(() => {
    if (isOpen) {
      // Animation des liens mobile quand le menu s'ouvre
      gsap.fromTo(
        mobileLinksRef.current,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.15,
        }
      );
    }
  }, [isOpen]);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full bg-black text-white shadow-lg z-50"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-indigo-400">R.</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {links.map((link, i) => (
            <li key={i} ref={(el) => (linksRef.current[i] = el)}>
              <a
                href={link.href}
                className="hover:text-indigo-400 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-700">
          <ul className="flex flex-col space-y-4 p-4">
            {links.map((link, i) => (
              <li key={i} ref={(el) => (mobileLinksRef.current[i] = el)}>
                <a
                  href={link.href}
                  className="hover:text-indigo-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
