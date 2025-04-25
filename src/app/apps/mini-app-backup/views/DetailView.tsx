import React from 'react';
import { ItemDetail } from '../components/ItemDetail';

export interface DetailViewProps {
  itemId: string | null;
}

export default function DetailView({ itemId }: DetailViewProps) {
  // Show placeholder if no item is selected
  if (!itemId) {
    return <div>No item selected</div>;
  }
  
  return <ItemDetail itemId={itemId} onBack={() => {}} />;
} 