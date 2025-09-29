import React from 'react'
import NavBar from './tete/NavBar'
import Hero from './corps/Hero';
import About from './corps/About';
import Skills from './corps/Skills';
import Projects from './corps/Projects';
import Contact from './corps/Contact';
import Footer from './pieds/Footer';
import Temoignages from './corps/Temoignages';
import Cursus from './corps/Cursus';
import ExperienceSectionHorizontal from './corps/ExperienceSection';

export default function ParentComponent() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Cursus />
      <ExperienceSectionHorizontal />
      <Projects />
      <Temoignages />
      <Contact />
      <Footer />
    </>
  );
}
