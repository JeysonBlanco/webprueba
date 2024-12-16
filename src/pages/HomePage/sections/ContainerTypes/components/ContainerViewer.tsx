import React from 'react';
import { ContainerViewer as Viewer } from '@/components/3d';

interface ContainerViewerProps {
  selectedType: string;
}

export default function ContainerViewer({ selectedType }: ContainerViewerProps) {
  return <Viewer selectedType={selectedType} />;
}