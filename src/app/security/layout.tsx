import type { Metadata } from 'next';
import { ShellLayout } from '@/components/layout/shell-layout';

export const metadata: Metadata = {
  title: 'Mixcore Security - Next.js',
  description: 'Mixcore authentication and security pages',
};

export default function SecurityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ShellLayout showSidebar={false}>
      <div className="container mx-auto max-w-md py-10">
        {children}
      </div>
    </ShellLayout>
  );
} 