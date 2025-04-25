import React from 'react';
import { ItemList } from '../components/ItemList';

export interface ListViewProps {
  standalone?: boolean;
  onItemClick: (itemId: string) => void;
}

export default function ListView({ standalone, onItemClick }: ListViewProps) {
  return standalone ? <ItemList onItemClick={onItemClick} /> : <ItemList onItemClick={onItemClick} />;
} 