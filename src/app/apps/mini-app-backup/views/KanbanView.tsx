import React from 'react';
import { KanbanBoard } from '../components/KanbanBoard';

export interface KanbanViewProps {
  onCardClick: (itemId: string) => void;
}

export default function KanbanView({ onCardClick }: KanbanViewProps) {
  return <KanbanBoard onCardClick={onCardClick} />;
} 