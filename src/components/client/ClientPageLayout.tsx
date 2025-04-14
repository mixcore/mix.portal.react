'use client';

import * as React from 'react';
import { PageLayout } from '@/components/layouts/PageLayout';

export default function ClientPageLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <PageLayout>
      {children}
    </PageLayout>
  );
}