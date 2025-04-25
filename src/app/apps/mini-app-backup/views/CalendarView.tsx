import React from 'react';
import { CalendarView as CalendarComponent } from '../components/CalendarView';

export interface CalendarViewProps {
  onEventClick: (itemId: string) => void;
}

export default function CalendarView({ onEventClick }: CalendarViewProps) {
  return <CalendarComponent onEventClick={onEventClick} />;
} 