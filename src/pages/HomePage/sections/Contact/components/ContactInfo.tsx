import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold text-primary-dark mb-6">
          Información de Contacto
        </h3>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-accent" />
            <a href="mailto:info@segucargo.com" className="text-primary-dark/80 hover:text-accent">
              info@segucargo.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-accent" />
            <a href="tel:+1234567890" className="text-primary-dark/80 hover:text-accent">
              +1 234 567 890
            </a>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-accent" />
            <span className="text-primary-dark/80">
              Ciudad, País
            </span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-primary-dark mb-6">
          Horario de Atención
        </h3>
        <div className="space-y-2 text-primary-dark/80">
          <p>Lunes a Viernes: 9:00 - 18:00</p>
          <p>Sábados: 9:00 - 13:00</p>
          <p>Domingos: Cerrado</p>
        </div>
      </div>
    </div>
  );
}