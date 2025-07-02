import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Projects from './components/project';
import Skills from './components/skills';
import Experience from './components/experience';
import Contact from './components/contact';
import Footer from './components/footer';


import './App.css'; // Global styles
import { Element } from 'react-scroll'; // Not strictly needed if using IDs directly

function App() {
  return (
    <>
      <Navbar />
      {/* Element wrapper for react-scroll, or just use id on the section components directly */}
      <Element name="hero"><Hero /></Element>
      <Element name="about"><About /></Element>
      <Element name="projects"><Projects /></Element>
      <Element name="skills"><Skills /></Element>
      <Element name="experience"><Experience /></Element>
      <Element name="contact"><Contact /></Element>
      <Footer />
    </>
  );
}

export default App;