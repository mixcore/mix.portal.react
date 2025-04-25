import React from 'react';
import KBar from '@/components/kbar';
import Header from '@/components/layout/header';
import AppSidebar from '@/components/layout/app-sidebar';
import AppRightSidebar from '@/components/layout/app-right-sidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { NavigationContextProvider } from '@/providers/navigation-context-provider';
import { LayoutContextProvider } from '@/providers/layout-context-provider';
import LayoutContainer from '@/components/layout/layout-container';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mixcore Apps',
  description: 'Mixcore Apps Portal'
};

export default async function AppsLayout({
  children
}: {
  children: React.ReactNode;
}) {
  // Always set defaultOpen to true to prevent sidebar from collapsing by default
  return (
    <KBar>
      <NavigationContextProvider>
        <SidebarProvider defaultOpen={true}>
          <LayoutContextProvider>
            <AppSidebar />
            <SidebarInset className='flex h-screen flex-col'>
              <Header />

              {/* Main content container */}
              <main className='flex-1' data-app-view="default">
                <LayoutContainer>
                  {children}
                </LayoutContainer>
              </main>

            </SidebarInset>
            <AppRightSidebar />
          </LayoutContextProvider>
        </SidebarProvider>
      </NavigationContextProvider>
    </KBar>
  );
} 