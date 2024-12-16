import React from 'react';

interface TestimonialCardProps {
  name: string;
  company: string;
  text: string;
  image: string;
}

export default function TestimonialCard({ name, company, text, image }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h3 className="font-semibold text-primary-dark">{name}</h3>
          <p className="text-sm text-primary-dark/60">{company}</p>
        </div>
      </div>
      <p className="text-primary-dark/80 italic">"{text}"</p>
    </div>
  );
}