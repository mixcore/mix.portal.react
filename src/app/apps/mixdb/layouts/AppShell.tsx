'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useDatabase } from '../contexts/DatabaseContext';
import { DbContextSelector } from '../components/DbContextSelector';

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const { activeDbContext } = useDatabase();
  
  return (
    <div className="flex flex-col h-full">
      {/* Database selector header */}
      <div className="bg-card border-b py-3 px-2 sm:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <DbContextSelector />
          </div>
        </div>
      </div>
      
      {/* Main content area */}
      <div className="flex-1 p-2 sm:p-6 overflow-auto">
        {children}
      </div>
    </div>
  );
}

export default AppShell; 