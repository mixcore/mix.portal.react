import type { Metadata } from 'next';
import { SiteHeader } from '@/components/layout/site-header';

export const metadata: Metadata = {
  title: 'Mixcore Admin - Next.js',
  description: 'Mixcore Admin Dashboard with Tailwind CSS and shadcn/ui',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <div className="flex-1">{children}</div>
    </div>
  );
} 