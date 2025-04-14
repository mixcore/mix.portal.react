'use client';

import React from 'react';
import { PageLayout } from '@/components/layouts/PageLayout';

export default function WorkflowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PageLayout>
      <main className="app-container">
        {children}
      </main>
    </PageLayout>
  );
} 