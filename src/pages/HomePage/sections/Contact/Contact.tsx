import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';

export default function Contact() {
  return (
    <section className="py-20 bg-white" id="contacto">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-dark">
              Contáctanos
            </h2>
            <p className="text-primary-dark/80 mt-4">
              Estamos aquí para ayudarte con tus necesidades logísticas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
}