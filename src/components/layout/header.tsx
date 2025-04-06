'use client';

import { useState, useEffect } from 'react';
import { User } from '@/types';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { AuthService } from '@/services/auth';
import { ThemeToggle } from '@/components/theme-toggle';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';

interface HeaderProps {
  className?: string;
  title?: string;
}

export function Header({ className, title }: HeaderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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

  return (
    <header className={cn("flex h-16 items-center justify-between border-b px-6", className)}>
      {title && (
        <h1 className="text-lg font-semibold md:text-xl">{title}</h1>
      )}
      
      <div className="flex items-center gap-4">
        {/* Search button */}
        <Button variant="ghost" size="icon">
          <Icons.search className="h-5 w-5" />
          <span className="sr-only">Search</span>
        </Button>
        
        {/* Theme toggle */}
        <ThemeToggle />
        
        {/* User menu (mobile only) */}
        {isAuthenticated && user && (
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    {user.avatarUrl ? (
                      <AvatarImage src={user.avatarUrl} alt={user.username} />
                    ) : (
                      <AvatarFallback>
                        {user.firstName ? user.firstName.charAt(0) : user.username.charAt(0)}
                      </AvatarFallback>
                    )}
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {user.firstName && user.lastName
                        ? `${user.firstName} ${user.lastName}`
                        : user.username}
                    </p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
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
          </div>
        )}
      </div>
    </header>
  );
} 