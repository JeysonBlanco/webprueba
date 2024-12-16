import React from 'react';
import Hero from './sections/Hero';
import Services from './sections/Services';
import ContainerTypes from './sections/ContainerTypes';
import Features from './sections/Features';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Services />
      <ContainerTypes />
      <Features />
      <Testimonials />
      <Contact />
    </div>
  );
}