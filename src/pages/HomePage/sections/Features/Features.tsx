import React from 'react';
import { Shield, Clock, Globe, HeartHandshake } from 'lucide-react';
import FeatureCard from './components/FeatureCard';

const features = [
  {
    icon: <Shield className="w-12 h-12" />,
    title: 'Seguridad Garantizada',
    description: 'Protección total para tu carga con seguimiento en tiempo real'
  },
  {
    icon: <Clock className="w-12 h-12" />,
    title: 'Entregas Puntuales',
    description: 'Optimización de rutas y tiempos de tránsito'
  },
  {
    icon: <Globe className="w-12 h-12" />,
    title: 'Cobertura Global',
    description: 'Presencia en los principales puertos del mundo'
  },
  {
    icon: <HeartHandshake className="w-12 h-12" />,
    title: 'Servicio Personalizado',
    description: 'Atención dedicada a tus necesidades específicas'
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-neutral">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-dark">
            ¿Por qué Elegirnos?
          </h2>
          <p className="text-primary-dark/80 mt-4">
            Descubre las ventajas de trabajar con nosotros
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}