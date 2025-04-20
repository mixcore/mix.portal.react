'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Automation } from '../types/automation';

// Mock automation data - would come from an API in production
const mockAutomations: Automation[] = [
  {
    id: '1',
    name: 'Morning Routine',
    description: 'Turn on lights and adjust thermostat in the morning',
    trigger: {
      deviceId: 'timer',
      condition: 'time',
      value: '07:00',
      timeCondition: {
        days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        recurrence: 'weekly'
      }
    },
    actions: [
      {
        deviceId: 'light-1',
        action: 'turn_on',
        value: 'brightness:80',
        delay: 0
      },
      {
        deviceId: '1', // Thermostat
        action: 'set_temperature',
        value: '22',
        delay: 300000 // 5 minutes
      }
    ],
    isActive: true,
    createdAt: new Date('2023-09-15'),
    updatedAt: new Date('2023-10-20'),
    lastTriggered: new Date('2023-10-24T07:00:00'),
    priority: 'medium'
  },
  // Additional mock automations would be here
];

type AutomationContextType = {
  automations: Automation[];
  loading: boolean;
  error: string | null;
  selectedAutomation: Automation | null;
  setSelectedAutomation: (automation: Automation | null) => void;
  addAutomation: (automation: Automation) => void;
  updateAutomation: (automation: Automation) => void;
  removeAutomation: (id: string) => void;
  toggleAutomationStatus: (id: string) => void;
};

const AutomationContext = createContext<AutomationContextType | undefined>(undefined);

export function AutomationProvider({ children }: { children: ReactNode }) {
  const [automations, setAutomations] = useState<Automation[]>(mockAutomations);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedAutomation, setSelectedAutomation] = useState<Automation | null>(null);

  const addAutomation = (automation: Automation) => {
    setAutomations((prev) => [...prev, automation]);
  };

  const updateAutomation = (updatedAutomation: Automation) => {
    setAutomations((prev) =>
      prev.map((automation) => (automation.id === updatedAutomation.id ? updatedAutomation : automation))
    );
  };

  const removeAutomation = (id: string) => {
    setAutomations((prev) => prev.filter((automation) => automation.id !== id));
  };

  const toggleAutomationStatus = (id: string) => {
    setAutomations((prev) =>
      prev.map((automation) =>
        automation.id === id ? { ...automation, isActive: !automation.isActive } : automation
      )
    );
  };

  const value = {
    automations,
    loading,
    error,
    selectedAutomation,
    setSelectedAutomation,
    addAutomation,
    updateAutomation,
    removeAutomation,
    toggleAutomationStatus
  };

  return <AutomationContext.Provider value={value}>{children}</AutomationContext.Provider>;
}

export function useAutomations() {
  const context = useContext(AutomationContext);
  if (context === undefined) {
    throw new Error('useAutomations must be used within an AutomationProvider');
  }
  return context;
} 