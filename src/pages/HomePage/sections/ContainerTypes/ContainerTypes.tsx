import React from 'react';
import { Container, PackageCheck, Scale } from 'lucide-react';
import ContainerCard from './components/ContainerCard';
import ContainerViewer from './components/ContainerViewer';

const containerTypes = [
  {
    id: '20st',
    name: "Contenedor 20' Dry",
    description: "Ideal para cargas generales y consolidadas",
    specs: {
      dimensions: "6.06 x 2.44 x 2.59m",
      capacity: "33.2m³",
      maxWeight: "28,200kg"
    }
  },
  {
    id: '40st',
    name: "Contenedor 40' Dry",
    description: "Perfecto para cargas voluminosas",
    specs: {
      dimensions: "12.19 x 2.44 x 2.59m",
      capacity: "67.7m³",
      maxWeight: "28,800kg"
    }
  },
  {
    id: '40hc',
    name: "Contenedor 40' High Cube",
    description: "Mayor altura para cargas especiales",
    specs: {
      dimensions: "12.19 x 2.44 x 2.89m",
      capacity: "76.3m³",
      maxWeight: "28,800kg"
    }
  }
];

export default function ContainerTypes() {
  const [selectedContainer, setSelectedContainer] = React.useState(containerTypes[0]);

  return (
    <section className="py-20 bg-white" id="contenedores">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-dark">
            Tipos de Contenedores
          </h2>
          <p className="text-primary-dark/80 mt-4">
            Encuentra el contenedor perfecto para tu carga
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {containerTypes.map((container) => (
              <ContainerCard
                key={container.id}
                container={container}
                isSelected={selectedContainer.id === container.id}
                onClick={() => setSelectedContainer(container)}
              />
            ))}
          </div>

          <div className="h-[500px] bg-neutral rounded-lg overflow-hidden">
            <ContainerViewer selectedType={selectedContainer.id} />
          </div>
        </div>
      </div>
    </section>
  );
}