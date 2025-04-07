'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  BookOpen,
  FileText,
  Home,
  Package,
  Settings,
  User,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

// Navigation items for the sidebar
const navItems = [
  {
    title: 'Dashboard',
    href: '/',
    icon: Home
  },
  {
    title: 'Pages',
    href: '/pages',
    icon: FileText
  },
  {
    title: 'Posts',
    href: '/posts',
    icon: BookOpen
  },
  {
    title: 'Products',
    href: '/products',
    icon: Package
  },
  {
    title: 'Profile',
    href: '/profile',
    icon: User
  },
  {
    title: 'Settings',
    href: '/settings',
    icon: Settings
  }
];

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = React.useState(true);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className='bg-background flex h-screen'>
      {/* Sidebar */}
      <div
        className={cn(
          'bg-card fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r transition-transform duration-300 ease-in-out md:relative md:translate-x-0',
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className='flex h-14 items-center border-b px-4'>
          <Link href='/' className='flex items-center font-semibold'>
            <span className='text-xl'>Mixcore</span>
          </Link>
          <Button
            variant='ghost'
            size='icon'
            className='ml-auto md:hidden'
            onClick={toggleSidebar}
          >
            <X className='h-5 w-5' />
          </Button>
        </div>
        <ScrollArea className='flex-1 py-2'>
          <nav className='space-y-1 px-2'>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center rounded-md px-3 py-2 text-sm font-medium',
                  pathname === item.href || pathname.startsWith(`${item.href}/`)
                    ? 'bg-accent text-accent-foreground'
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                )}
              >
                <item.icon className='mr-3 h-5 w-5' />
                {item.title}
              </Link>
            ))}
          </nav>
        </ScrollArea>
      </div>

      {/* Main content */}
      <div className='flex flex-1 flex-col overflow-hidden'>
        {/* Top navbar */}
        <header className='bg-card h-14 border-b'>
          <div className='flex h-full items-center px-4'>
            <Button
              variant='ghost'
              size='icon'
              className='md:hidden'
              onClick={toggleSidebar}
            >
              <Menu className='h-5 w-5' />
            </Button>
            <div className='ml-auto flex items-center space-x-2'>
              {/* Placeholder for user menu, notifications, etc. */}
              <Button variant='ghost' size='sm' className='rounded-full'>
                <User className='h-5 w-5' />
              </Button>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className='flex-1 overflow-auto'>{children}</main>
      </div>
    </div>
  );
}
