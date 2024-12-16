import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

export default function SocialLinks() {
  return (
    <div className="flex gap-4">
      <a 
        href="https://facebook.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-accent transition-colors"
        aria-label="Facebook"
      >
        <Facebook className="w-6 h-6" />
      </a>
      <a 
        href="https://twitter.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-accent transition-colors"
        aria-label="Twitter"
      >
        <Twitter className="w-6 h-6" />
      </a>
      <a 
        href="https://linkedin.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-accent transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin className="w-6 h-6" />
      </a>
    </div>
  );
}