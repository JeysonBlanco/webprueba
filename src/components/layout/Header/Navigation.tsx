import React from 'react';
import CTAButton from '@/components/common/CTAButton';

interface NavigationProps {
  className?: string;
}

export default function Navigation({ className = '' }: NavigationProps) {
  return (
    <nav className={`items-center gap-8 ${className}`}>
      <a href="#inicio" className="hover:text-accent transition-colors">Inicio</a>
      <a href="#contenedores" className="hover:text-accent transition-colors">Contenedores</a>
      <a href="#servicios" className="hover:text-accent transition-colors">Servicios</a>
      <a href="#contacto" className="hover:text-accent transition-colors">Contacto</a>
      <CTAButton href="#cotizar" variant="primary">
        Cotizar
      </CTAButton>
    </nav>
  );
}