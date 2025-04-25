import React from 'react';
import { Dashboard } from '../components/Dashboard';

export interface DashboardViewProps {
  onItemClick: (itemId: string) => void;
}

export default function DashboardView({ onItemClick }: DashboardViewProps) {
  return <Dashboard onItemClick={onItemClick} />;
} 