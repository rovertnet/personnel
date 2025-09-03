import React from 'react'
import NavBar from './tete/NavBar'
import Hero from './corps/Hero';
import About from './corps/About';
import Skills from './corps/Skills';

export default function ParentComponent() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Skills />
    </>
  );
}
