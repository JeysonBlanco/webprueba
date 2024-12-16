import React from 'react';

interface FooterSectionProps {
  title?: string;
  children: React.ReactNode;
}

export default function FooterSection({ title, children }: FooterSectionProps) {
  return (
    <div className="space-y-4">
      {title && <h3 className="font-semibold text-lg">{title}</h3>}
      {children}
    </div>
  );
}