import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center">
      <div className="text-accent mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold text-primary-dark mb-2">{title}</h3>
      <p className="text-primary-dark/80">{description}</p>
    </div>
  );
}