import React from 'react';
import { Quote } from 'lucide-react';
import TestimonialCard from './components/TestimonialCard';

const testimonials = [
  {
    name: "Carlos Rodríguez",
    company: "Importadora Global S.A.",
    text: "Esta herramienta nos ayudó a optimizar nuestros envíos y reducir costos en un 25%. La calculadora de contenedores es especialmente útil.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
  },
  {
    name: "Ana Martínez",
    company: "Logística Internacional",
    text: "La información detallada sobre dimensiones nos ha permitido planificar mejor nuestros envíos y evitar errores costosos.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    name: "Miguel Torres",
    company: "Exportadora del Pacífico",
    text: "Gracias a esta plataforma, nuestro equipo comprende mejor las opciones de contenedores disponibles para cada tipo de carga.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-neutral">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Quote className="w-10 h-10 text-accent" />
            <h2 className="text-3xl font-bold text-primary-dark">Casos de Éxito</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}