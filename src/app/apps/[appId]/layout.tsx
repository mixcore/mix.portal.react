import React from 'react';
import ClientPageLayout from '@/components/client/ClientPageLayout';

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientPageLayout>{children}</ClientPageLayout>;
}