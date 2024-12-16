import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

export default function ServiceCard({ icon, title, description, features }: ServiceCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all group">
      <div className="text-accent mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold text-primary-dark mb-2">
        {title}
      </h3>
      
      <p className="text-primary-dark/80 mb-4">
        {description}
      </p>
      
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li 
            key={index}
            className="text-sm text-primary-dark/70 flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}