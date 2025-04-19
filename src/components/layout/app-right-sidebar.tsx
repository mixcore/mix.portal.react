'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export default function MicroAppsIconBar() {
  const pathname = usePathname();
  
  // Define micro-apps with their icons and routes
  const microApps = [
    {
      name: 'Chat',
      icon: Icons.help,
      href: '/dashboard/apps/chat',
    },
    {
      name: 'Tasks',
      icon: Icons.kanban,
      href: '/dashboard/apps/tasks',
    },
    {
      name: 'Notes',
      icon: Icons.fileText,
      href: '/dashboard/apps/notes',
    },
    {
      name: 'Database',
      icon: Icons.database,
      href: '/dashboard/apps/mixdb',
    },
  ];

  return (
    <div className="flex flex-col items-center gap-2 py-4 border-l">
      <TooltipProvider delayDuration={200}>
        {microApps.map((app) => (
          <Tooltip key={app.name}>
            <TooltipTrigger asChild>
              <Link 
                href={app.href}
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-md",
                  "hover:bg-muted transition-colors",
                  pathname.startsWith(app.href) && "bg-muted text-primary"
                )}
              >
                <app.icon className="h-5 w-5" />
                <span className="sr-only">{app.name}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="left">{app.name}</TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </div>
  );
}