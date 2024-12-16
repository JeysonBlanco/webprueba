import React from 'react';
import CTAButton from '@/components/common/CTAButton';

interface MobileMenuProps {
  isOpen: boolean;
}

export default function MobileMenu({ isOpen }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <nav className="md:hidden py-4 space-y-4">
      <a href="#inicio" className="block hover:text-accent transition-colors">Inicio</a>
      <a href="#contenedores" className="block hover:text-accent transition-colors">Contenedores</a>
      <a href="#servicios" className="block hover:text-accent transition-colors">Servicios</a>
      <a href="#contacto" className="block hover:text-accent transition-colors">Contacto</a>
      <CTAButton href="#cotizar" variant="primary" className="w-full">
        Cotizar
      </CTAButton>
    </nav>
  );
}