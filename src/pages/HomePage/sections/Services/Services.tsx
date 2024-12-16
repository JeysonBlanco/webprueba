import React from 'react';
import { 
  Ship, 
  Truck, 
  Plane, 
  FileText, 
  Package, 
  Warehouse,
  Scale,
  Shield,
  Clock,
  Globe
} from 'lucide-react';
import ServiceCard from './components/ServiceCard';

const services = [
  {
    icon: <Ship className="w-12 h-12" />,
    title: 'Transporte Marítimo',
    description: 'FCL y LCL con las principales navieras. Rutas globales y tiempos competitivos.',
    features: [
      'Contenedores completos (FCL)',
      'Carga consolidada (LCL)',
      'Seguimiento en tiempo real',
      'Booking directo con navieras'
    ]
  },
  {
    icon: <Truck className="w-12 h-12" />,
    title: 'Transporte Terrestre',
    description: 'Servicios de transporte local e internacional por carretera.',
    features: [
      'Distribución nacional',
      'Cross-border',
      'Last-mile delivery',
      'Transporte especializado'
    ]
  },
  {
    icon: <Plane className="w-12 h-12" />,
    title: 'Transporte Aéreo',
    description: 'Soluciones express y carga aérea para envíos urgentes.',
    features: [
      'Carga general',
      'Express/Courier',
      'Carga perecedera',
      'Charters'
    ]
  },
  {
    icon: <FileText className="w-12 h-12" />,
    title: 'Gestión Aduanera',
    description: 'Trámites y documentación para importación y exportación.',
    features: [
      'Clasificación arancelaria',
      'Despacho aduanero',
      'Permisos especiales',
      'Asesoría en comercio exterior'
    ]
  },
  {
    icon: <Package className="w-12 h-12" />,
    title: 'Consolidación',
    description: 'Optimización de cargas y consolidación de mercancías.',
    features: [
      'Consolidación de contenedores',
      'Cross-docking',
      'Embalaje y etiquetado',
      'Optimización de espacio'
    ]
  },
  {
    icon: <Warehouse className="w-12 h-12" />,
    title: 'Almacenaje',
    description: 'Servicios de almacenamiento y distribución.',
    features: [
      'Almacén fiscal',
      'Control de inventario',
      'Pick & Pack',
      'Distribución'
    ]
  },
  {
    icon: <Scale className="w-12 h-12" />,
    title: 'Proyectos Especiales',
    description: 'Manejo de cargas proyecto y sobredimensionadas.',
    features: [
      'Cargas proyecto',
      'Mercancías peligrosas',
      'Carga sobredimensionada',
      'Servicios door-to-door'
    ]
  },
  {
    icon: <Shield className="w-12 h-12" />,
    title: 'Seguros',
    description: 'Protección integral para tu mercancía.',
    features: [
      'Seguro de carga',
      'Cobertura puerta a puerta',
      'Gestión de reclamos',
      'Asesoría en riesgos'
    ]
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-neutral" id="servicios">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-dark">
            Servicios Logísticos Integrales
          </h2>
          <p className="text-primary-dark/80 mt-4 max-w-2xl mx-auto">
            Ofrecemos soluciones completas de logística internacional, adaptadas a las necesidades específicas de tu negocio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}