'use client';

import React, { ReactNode } from 'react';

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="h-full flex flex-col bg-background">
      <main className="flex-1 overflow-auto p-4">
        {children}
      </main>
    </div>
  );
} 