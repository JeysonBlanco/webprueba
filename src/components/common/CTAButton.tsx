import React from 'react';

interface CTAButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: 'primary' | 'secondary';
}

export default function CTAButton({ 
  children, 
  href, 
  variant = 'primary' 
}: CTAButtonProps) {
  const baseStyles = "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors";
  const variantStyles = {
    primary: "bg-accent text-primary-dark hover:bg-accent/90",
    secondary: "bg-white/10 text-white hover:bg-white/20"
  };

  return (
    <a 
      href={href}
      className={`${baseStyles} ${variantStyles[variant]}`}
    >
      {children}
    </a>
  );
}