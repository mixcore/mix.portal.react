'use client';

import { Header } from '@/components/layout/header';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Icons } from '@/components/icons';
import {
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarHeaderTitle,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSection,
  SidebarSectionTitle,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User } from '@/types';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { AuthService } from '@/services/auth';

interface EnhancedShellProps {
  children: React.ReactNode;
  showSidebar?: boolean;
  sidebarDefaultOpen?: boolean;
  pageTitle?: string;
}

export function EnhancedShell({
  children,
  showSidebar = true,
  sidebarDefaultOpen = true,
  pageTitle
}: EnhancedShellProps) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(sidebarDefaultOpen);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  // Update title from pathname if not provided
  const [title, setTitle] = useState<string | undefined>(pageTitle);
  useEffect(() => {
    if (!pageTitle) {
      const path = pathname.split('/');
      const segment = path[path.length - 1];
      if (segment) {
        setTitle(segment.charAt(0).toUpperCase() + segment.slice(1));
      }
    } else {
      setTitle(pageTitle);
    }
  }, [pathname, pageTitle]);

  // Check authentication on mount
  useEffect(() => {
    const auth = AuthService.isAuthenticated();
    setIsAuthenticated(auth);

    if (auth) {
      AuthService.getCurrentUser().then(setUser);
    }
  }, []);

  const handleLogout = () => {
    AuthService.logout();
  };

  // Sidebar navigation items
  const contentItems = [
    {
      title: 'Pages',
      href: '/admin/pages',
      icon: <Icons.file className="h-5 w-5" />,
    },
    {
      title: 'Posts',
      href: '/admin/posts',
      icon: <Icons.post className="h-5 w-5" />,
    },
    {
      title: 'Media',
      href: '/admin/media',
      icon: <Icons.media className="h-5 w-5" />,
    },
  ];

  const userItems = [
    {
      title: 'Users',
      href: '/admin/users',
      icon: <Icons.users className="h-5 w-5" />,
    },
    {
      title: 'Roles',
      href: '/admin/roles',
      icon: <Icons.settings className="h-5 w-5" />,
    },
  ];

  const systemItems = [
    {
      title: 'Settings',
      href: '/admin/settings',
      icon: <Icons.settings className="h-5 w-5" />,
    },
    {
      title: 'Plugins',
      href: '/admin/plugins',
      icon: <Icons.folder className="h-5 w-5" />,
    },
  ];

  // Sidebar component
  function Sidebar({ isOpen }: { isOpen: boolean }) {
    return (
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r bg-background transition-transform duration-300 lg:static lg:transition-none",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
          isOpen ? "lg:w-64" : "lg:w-20"
        )}
        data-state={isOpen ? "open" : "collapsed"}
      >
        <SidebarHeader>
          <Link href="/admin/dashboard" className="flex items-center">
            <Icons.logo className="h-6 w-6" />
            <SidebarHeaderTitle>Mixcore CMS</SidebarHeaderTitle>
          </Link>
        </SidebarHeader>
          
        <SidebarContent>
          <SidebarSection>
            <SidebarSectionTitle>Content</SidebarSectionTitle>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  active={pathname === '/admin/dashboard'}
                  icon={<Icons.dashboard className="h-5 w-5" />}
                  asChild
                >
                  <Link href="/admin/dashboard">Dashboard</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              {contentItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    active={pathname === item.href || pathname?.startsWith(`${item.href}/`)}
                    icon={item.icon}
                    asChild
                  >
                    <Link href={item.href}>{item.title}</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarSection>
          
          <SidebarSection>
            <SidebarSectionTitle>Users</SidebarSectionTitle>
            <SidebarMenu>
              {userItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    active={pathname === item.href || pathname?.startsWith(`${item.href}/`)}
                    icon={item.icon}
                    asChild
                  >
                    <Link href={item.href}>{item.title}</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarSection>
          
          <SidebarSection>
            <SidebarSectionTitle>System</SidebarSectionTitle>
            <SidebarMenu>
              {systemItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    active={pathname === item.href || pathname?.startsWith(`${item.href}/`)}
                    icon={item.icon}
                    asChild
                  >
                    <Link href={item.href}>{item.title}</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarSection>
        </SidebarContent>
        
        <SidebarFooter>
          {user && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex w-full items-center gap-2 px-2">
                  <Avatar className="h-8 w-8">
                    {user.avatarUrl ? (
                      <AvatarImage src={user.avatarUrl} alt={user.username} />
                    ) : (
                      <AvatarFallback>
                        {user.firstName ? user.firstName.charAt(0) : user.username.charAt(0)}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <div className="flex flex-col items-start text-left">
                    <span className="text-sm font-medium group-data-[state=collapsed]:hidden">
                      {user.firstName && user.lastName
                        ? `${user.firstName} ${user.lastName}`
                        : user.username}
                    </span>
                    <span className="text-xs text-muted-foreground group-data-[state=collapsed]:hidden">
                      {user.email}
                    </span>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/admin/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/admin/settings">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <Icons.logout className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </SidebarFooter>
      </div>
    );
  }

  // SidebarToggle component
  function SidebarToggle({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClick}
            className="h-9 w-9"
          >
            <Icons.chevronLeft className={cn("h-5 w-5 transition-all", isOpen ? "rotate-0" : "rotate-180")} />
            <span className="sr-only">
              {isOpen ? "Close sidebar" : "Open sidebar"}
            </span>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          {isOpen ? "Close sidebar" : "Open sidebar"}
        </TooltipContent>
      </Tooltip>
    );
  }

  return (
    <div className="relative flex min-h-screen flex-col">
      <div className="flex flex-1">
        {showSidebar && (
          <>
            <Sidebar isOpen={sidebarOpen} />
            <div 
              className={cn(
                "fixed inset-0 z-40 bg-background/80 backdrop-blur-sm transition-all duration-100 lg:hidden",
                sidebarOpen ? "block" : "hidden"
              )}
              onClick={() => setSidebarOpen(false)}
            />
          </>
        )}
        <div className="flex-1">
          <div className="flex h-16 items-center gap-4 border-b px-6">
            {showSidebar && <SidebarToggle isOpen={sidebarOpen} onClick={() => setSidebarOpen(!sidebarOpen)} />}
            <Header title={title} />
          </div>
          <main className="flex-1 p-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
} 