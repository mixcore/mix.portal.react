import type { Metadata } from 'next';
import { ShellLayout } from '@/components/layout/shell-layout';

export const metadata: Metadata = {
  title: 'Mixcore Admin - Next.js',
  description: 'Mixcore Admin Dashboard with Tailwind CSS and shadcn/ui',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ShellLayout>{children}</ShellLayout>;
} 