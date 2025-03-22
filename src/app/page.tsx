"use client";

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackgroundAnimation from '@/components/BackgroundAnimation';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <BackgroundAnimation />
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;