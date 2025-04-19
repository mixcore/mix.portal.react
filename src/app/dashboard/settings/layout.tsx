'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';

export default function SettingsLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  const settingsNavItems = [
    {
      title: 'General',
      href: '/dashboard/settings/general',
      icon: Icons.settings
    },
    {
      title: 'Design',
      href: '/dashboard/settings/design',
      icon: Icons.palette
    },
    {
      title: 'App Contexts',
      href: '/dashboard/settings/app-contexts',
      icon: Icons.dashboard
    },
    {
      title: 'Code Injection',
      href: '/dashboard/settings/code-injection',
      icon: Icons.code
    },
    {
      title: 'Integrations',
      href: '/dashboard/settings/integrations',
      icon: Icons.link
    }
  ];

  return (
    <div className="container mx-auto py-6 flex flex-col space-y-8 lg:flex-row lg:space-y-0 lg:space-x-8">
      <aside className="lg:w-1/5">
        <Card>
          <div className="p-2">
            <nav className="space-y-1">
              {settingsNavItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link 
                    key={item.href} 
                    href={item.href}
                    className={cn(
                      "flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors",
                      pathname === item.href ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                    )}
                  >
                    {Icon && <Icon className="mr-2 h-4 w-4" />}
                    <span>{item.title}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </Card>
      </aside>
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
} 