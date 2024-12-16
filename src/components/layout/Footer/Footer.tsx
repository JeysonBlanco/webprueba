import React from 'react';
import { Ship, Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';
import FooterSection from './FooterSection';
import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <FooterSection>
            <div className="flex items-center gap-2 mb-4">
              <Ship className="w-8 h-8 text-accent" />
              <span className="text-2xl font-bold">Segucargo</span>
            </div>
            <p className="text-neutral/80">
              Soluciones logísticas integrales para el transporte marítimo internacional
            </p>
          </FooterSection>

          <FooterSection title="Enlaces Rápidos">
            <a href="#inicio" className="block hover:text-accent transition-colors">Inicio</a>
            <a href="#contenedores" className="block hover:text-accent transition-colors">Contenedores</a>
            <a href="#servicios" className="block hover:text-accent transition-colors">Servicios</a>
            <a href="#contacto" className="block hover:text-accent transition-colors">Contacto</a>
          </FooterSection>

          <FooterSection title="Contacto">
            <div className="space-y-3">
              <a href="mailto:info@segucargo.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="w-5 h-5" />
                <span>info@segucargo.com</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="w-5 h-5" />
                <span>+1 234 567 890</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Ciudad, País</span>
              </div>
            </div>
          </FooterSection>

          <FooterSection title="Síguenos">
            <SocialLinks />
          </FooterSection>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-neutral/60">
          <p>&copy; {new Date().getFullYear()} Segucargo. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}