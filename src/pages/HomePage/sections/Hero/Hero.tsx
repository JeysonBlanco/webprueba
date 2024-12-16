import React from 'react';
import { Ship, ArrowRight } from 'lucide-react';
import HeroImage from './components/HeroImage';
import CTAButton from '@/components/common/CTAButton';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] bg-gradient-to-br from-primary-dark to-primary overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4 py-20 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <div className="flex items-center gap-3 text-accent">
              <Ship className="w-8 h-8" />
              <span className="text-xl font-semibold">Segucargo</span>
            </div>
            
            <h1 className="text-5xl font-bold leading-tight">
              Soluciones Logísticas para el Comercio Internacional
            </h1>
            
            <p className="text-xl text-white/80">
              Optimiza tus envíos marítimos con nuestra experiencia en contenedores y logística global
            </p>
            
            <div className="flex gap-4">
              <CTAButton href="#contact">
                Cotizar Ahora
                <ArrowRight className="w-5 h-5" />
              </CTAButton>
            </div>
          </div>
          
          <HeroImage />
        </div>
      </div>
    </section>
  );
}