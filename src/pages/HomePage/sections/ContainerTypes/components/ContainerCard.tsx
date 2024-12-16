import React from 'react';
import { Container, PackageCheck, Scale } from 'lucide-react';

interface ContainerCardProps {
  container: {
    id: string;
    name: string;
    description: string;
    specs: {
      dimensions: string;
      capacity: string;
      maxWeight: string;
    };
  };
  isSelected: boolean;
  onClick: () => void;
}

export default function ContainerCard({ container, isSelected, onClick }: ContainerCardProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-6 rounded-lg transition-all ${
        isSelected 
          ? 'bg-accent text-primary-dark shadow-lg' 
          : 'bg-neutral hover:bg-neutral/80'
      }`}
    >
      <div className="flex items-start gap-4">
        <Container className={`w-8 h-8 ${isSelected ? 'text-primary-dark' : 'text-accent'}`} />
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">{container.name}</h3>
          <p className={isSelected ? 'text-primary-dark/80' : 'text-primary-dark/60'}>
            {container.description}
          </p>
          
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="space-y-1">
              <div className="flex items-center gap-1 text-sm">
                <PackageCheck className="w-4 h-4" />
                <span>Dimensiones</span>
              </div>
              <p className="text-sm font-medium">{container.specs.dimensions}</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1 text-sm">
                <Container className="w-4 h-4" />
                <span>Capacidad</span>
              </div>
              <p className="text-sm font-medium">{container.specs.capacity}</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1 text-sm">
                <Scale className="w-4 h-4" />
                <span>Peso Máx.</span>
              </div>
              <p className="text-sm font-medium">{container.specs.maxWeight}</p>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}