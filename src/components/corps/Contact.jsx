import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const formRef = useRef();
  const sectionRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // remplace par ton Service ID EmailJS
        "YOUR_TEMPLATE_ID", // remplace par ton Template ID EmailJS
        formRef.current,
        "YOUR_PUBLIC_KEY" // remplace par ton Public Key EmailJS
      )
      .then(
        () => {
          setLoading(false);
          setStatus("✅ Message envoyé avec succès !");
          formRef.current.reset();
        },
        (error) => {
          console.error(error);
          setLoading(false);
          setStatus("❌ Une erreur est survenue, réessaye.");
        }
      );
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen bg-black text-white py-20 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-indigo-400">Contact</h2>
        <p className="text-gray-300 mb-12">
          N’hésite pas à me contacter pour discuter d’un projet, d’une
          collaboration ou simplement échanger 👋
        </p>

        {/* Formulaire */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="bg-gray-900 p-8 rounded-2xl shadow-lg text-left space-y-6"
        >
          <div>
            <label className="block mb-2 text-sm text-gray-400">Nom</label>
            <input
              type="text"
              name="from_name"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm text-gray-400">Email</label>
            <input
              type="email"
              name="from_email"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm text-gray-400">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 transition-colors font-semibold"
          >
            {loading ? "Envoi en cours..." : "Envoyer"}
          </button>

          {status && (
            <p className="mt-4 text-center text-sm text-gray-400">{status}</p>
          )}
        </form>

        {/* Réseaux sociaux */}
        <div className="flex justify-center space-x-6 mt-10">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-indigo-400 hover:text-indigo-300 text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-indigo-400 hover:text-indigo-300 text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="text-indigo-400 hover:text-indigo-300 text-2xl"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </section>
  );
}
