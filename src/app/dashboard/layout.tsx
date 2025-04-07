import KBar from '@/components/kbar';
import Header from '@/components/layout/header';
import AppSidebar from '@/components/layout/app-sidebar';
import Footer from '@/components/layout/footer';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import type { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: 'Mixcore Portal',
  description: 'Modern content management system with Next.js and Shadcn UI'
};

export default async function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  // Persisting the sidebar state in the cookie.
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get('sidebar:state')?.value === 'true';
  return (
    <KBar>
      <SidebarProvider defaultOpen={defaultOpen}>
        <AppSidebar />
        <SidebarInset className='flex h-screen flex-col'>
          <Header />

          {/* Main content container */}
          <main className='flex-1 overflow-auto'>
            <div className='container mx-auto max-w-7xl p-4 md:p-6'>
              {children}
            </div>
          </main>

          <Footer />
        </SidebarInset>
      </SidebarProvider>
    </KBar>
  );
}
