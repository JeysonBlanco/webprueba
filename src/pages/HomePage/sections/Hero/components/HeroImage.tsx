import React from 'react';
import { ContainerViewer } from '@/components/3d';

export default function HeroImage() {
  return (
    <div className="relative h-[500px] rounded-lg overflow-hidden">
      <ContainerViewer selectedType="20st" />
    </div>
  );
}