import React from 'react';
import { BasicGrid } from '../components/BasicGrid';

export interface BasicGridViewProps {
  onItemClick: (itemId: string) => void;
}

export default function BasicGridView({ onItemClick }: BasicGridViewProps) {
  return <BasicGrid onItemClick={onItemClick} />;
} 