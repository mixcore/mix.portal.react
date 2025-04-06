'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { AuthService } from '@/services/auth';
import { User } from '@/types';
import { ThemeToggle } from '@/components/theme-toggle';

interface MainNavigationProps {
  className?: string;
}

export function MainNavigation({ className }: MainNavigationProps) {
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const auth = AuthService.isAuthenticated();
      setIsAuthenticated(auth);

      if (auth) {
        const currentUser = await AuthService.getCurrentUser();
        setUser(currentUser);
      }
    };

    checkAuth();
  }, []);

  const handleLogout = () => {
    AuthService.logout();
  };

  const navItems = [
    { label: 'Dashboard', href: '/admin/dashboard', icon: <Icons.dashboard className="mr-2 h-4 w-4" /> },
    { label: 'Posts', href: '/admin/post', icon: <Icons.post className="mr-2 h-4 w-4" /> },
    { label: 'Pages', href: '/admin/page', icon: <Icons.page className="mr-2 h-4 w-4" /> },
    { label: 'Media', href: '/admin/media', icon: <Icons.media className="mr-2 h-4 w-4" /> },
    { label: 'Users', href: '/admin/user', icon: <Icons.user className="mr-2 h-4 w-4" /> },
    { label: 'Settings', href: '/admin/settings', icon: <Icons.settings className="mr-2 h-4 w-4" /> },
  ];

  return (
    <nav className={`flex items-center justify-between p-4 ${className}`}>
      {/* Desktop Navigation */}
      <div className="flex items-center">
        <Link href="/admin/dashboard" className="flex items-center mr-6">
          <Icons.logo className="h-8 w-8 mr-2" />
          <span className="font-bold text-xl hidden md:inline">Mixcore CMS</span>
        </Link>

        <div className="hidden md:flex space-x-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname?.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium flex items-center ${
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                }`}
              >
                {item.icon}
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <ThemeToggle />
        
        {isAuthenticated && user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative w-8 h-8 rounded-full">
                {user.avatarUrl ? (
                  <img
                    src={user.avatarUrl}
                    alt={user.username}
                    className="w-8 h-8 rounded-full"
                  />
                ) : (
                  <Icons.user className="h-5 w-5" />
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>
                {user.firstName && user.lastName
                  ? `${user.firstName} ${user.lastName}`
                  : user.username}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/admin/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/admin/settings">Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button asChild variant="default" size="sm">
            <Link href="/security/login">Login</Link>
          </Button>
        )}

        {/* Mobile Menu Trigger */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Icons.menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[240px] sm:w-[300px]">
            <SheetHeader>
              <SheetTitle>
                <div className="flex items-center">
                  <Icons.logo className="h-6 w-6 mr-2" />
                  <span>Mixcore CMS</span>
                </div>
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col space-y-1 mt-6">
              {navItems.map((item) => {
                const isActive = pathname === item.href || pathname?.startsWith(`${item.href}/`);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium flex items-center ${
                      isActive
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
} 