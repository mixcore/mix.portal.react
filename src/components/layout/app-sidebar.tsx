'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@/components/ui/collapsible';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
  useSidebar
} from '@/components/ui/sidebar';
import { UserAvatarProfile } from '@/components/user-avatar-profile';
import { navItems } from '@/constants/data';
import { useMediaQuery } from '@/hooks/use-media-query';
import {
  IconBell,
  IconChevronRight,
  IconChevronsDown,
  IconCreditCard,
  IconLogout,
  IconUserCircle,
  IconHome,
  IconSettings,
  IconPlus,
  IconDashboard
} from '@tabler/icons-react';
import { Icons } from '../icons';
import { OrgSwitcher } from '../org-switcher';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { RecentItems } from '@/components/recent-items';
import { ContextSelector } from '@/components/layout/context-selector';
import { useNavigationContext } from '@/providers/navigation-context-provider';

export default function AppSidebar() {
  const pathname = usePathname();
  const { isOpen } = useMediaQuery();
  const { state } = useSidebar();
  const isCollapsed = state === 'collapsed';
  const router = useRouter();
  const { filteredNavItems } = useNavigationContext();

  // Mock user data
  const mockUser = {
    fullName: 'Test User',
    avatarUrl: '',
    email: 'test@example.com'
  };

  // Mock tenants data
  const tenants = [
    { id: '1', name: 'Acme Inc', logo: '/acme-logo.png' },
    { id: '2', name: 'Beta Corp', logo: '/beta-logo.png' },
    { id: '3', name: 'Gamma Ltd', logo: '/gamma-logo.png' }
  ];

  // Mock recent items
  const recentItems = [
    {
      id: 1,
      title: 'Blog post draft',
      type: 'post',
      url: '/dashboard/posts/1'
    },
    { id: 2, title: 'Home page', type: 'page', url: '/dashboard/pages/2' },
    { id: 3, title: 'Product launch', type: 'post', url: '/dashboard/posts/3' }
  ];

  const activeTenant = tenants[0];
  const [tenantMenuOpen, setTenantMenuOpen] = React.useState(false);

  const handleSwitchTenant = (_tenantId: string) => {
    // Tenant switching functionality would be implemented here
    setTenantMenuOpen(false);
  };

  // Group navigation items by category for organization in the sidebar
  const navCategories = React.useMemo(() => {
    // Find all unique categories in the filtered navigation items
    const categories = new Set<string>();
    filteredNavItems.forEach(item => {
      if (item.contextId) {
        categories.add(item.contextId);
      } else {
        categories.add('general');
      }
    });

    // Group items by category
    const groupedNav: Record<string, typeof filteredNavItems> = {};
    
    // Initialize categories
    Array.from(categories).forEach(category => {
      groupedNav[category] = [];
    });
    
    // Add items to their respective categories
    filteredNavItems.forEach(item => {
      const category = item.contextId || 'general';
      if (!groupedNav[category]) {
        groupedNav[category] = [];
      }
      groupedNav[category].push(item);
    });
    
    return groupedNav;
  }, [filteredNavItems]);

  // Helper function to render a navigation item
  const renderNavItem = (item: (typeof filteredNavItems)[0]) => {
    const Icon = item.icon ? Icons[item.icon] : Icons.dashboard;
    
    // If it has child items, render as a collapsible menu
    if (item.items && item.items.length > 0) {
      // Check if any child item is active
      const isActive = item.items.some(subItem => 
        pathname?.includes(subItem.url)
      );
      
      return (
        <Collapsible
          key={item.title}
          asChild
          defaultOpen={isActive}
          className='group/collapsible'
        >
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton 
                isActive={isActive} 
                className='w-full justify-between'
              >
                <div className='flex items-center'>
                  <div className='relative'>
                    <Icon />
                    {isCollapsed && isActive && (
                      <div className='bg-primary absolute -top-1 -right-1 h-2 w-2 rounded-full'></div>
                    )}
                  </div>
                  <span>{item.title}</span>
                </div>
                <Icons.chevronRight className='group-data-[state=open]/collapsible:rotate-90 h-4 w-4 shrink-0 transition-transform duration-200' />
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent asChild>
              <SidebarMenuSub>
                {item.items.map(subItem => {
                  const SubIcon = subItem.icon ? Icons[subItem.icon] : Icons.dashboard;
                  return (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton
                        asChild
                        isActive={pathname?.includes(subItem.url)}
                      >
                        <Link href={subItem.url}>
                          <SubIcon />
                          <span>{subItem.title}</span>
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  );
                })}
              </SidebarMenuSub>
            </CollapsibleContent>
          </SidebarMenuItem>
        </Collapsible>
      );
    }
    
    // Otherwise render as a simple menu item
    return (
      <SidebarMenuItem key={item.title}>
        <SidebarMenuButton
          asChild
          tooltip={item.title}
          isActive={pathname === item.url}
        >
          <Link href={item.url || '#'}>
            <div className='relative'>
              <Icon />
              {isCollapsed && pathname === item.url && (
                <div className='bg-primary absolute -top-1 -right-1 h-2 w-2 rounded-full'></div>
              )}
            </div>
            <span>{item.title}</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  };

  // Helper function to render category groups
  const renderNavCategory = (categoryId: string, items: typeof filteredNavItems) => {
    if (!items || items.length === 0) return null;
    
    // Get category display name
    let categoryName = categoryId;
    if (categoryId === 'general') {
      categoryName = 'General';
    } else if (categoryId === 'cms') {
      categoryName = 'Content';
    } else if (categoryId === 'mixdb') {
      categoryName = 'MixDB';
    } else if (categoryId === 'design') {
      categoryName = 'Design';
    } else if (categoryId === 'admin') {
      categoryName = 'Management';
    }
    
    const shortLabel = categoryName.substring(0, 3);
    
    return (
      <SidebarGroup key={categoryId}>
        <div className='flex items-center'>
          <SidebarGroupLabel>{categoryName}</SidebarGroupLabel>
          {isCollapsed && (
            <span className='text-muted-foreground flex h-4 w-8 items-center justify-center text-[9px] font-bold uppercase'>
              {shortLabel}
            </span>
          )}
        </div>
        <SidebarMenu>
          {items.map(renderNavItem)}
        </SidebarMenu>
      </SidebarGroup>
    );
  };

  return (
    <Sidebar collapsible='icon'>
      <SidebarHeader className='pb-2'>
        <div className='flex items-center gap-2 px-2 py-1'>
          <TooltipProvider delayDuration={200}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className='bg-primary/10 text-primary flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md font-semibold'>
                  M
                </div>
              </TooltipTrigger>
              <TooltipContent side='right'>Mixcore CMS</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <div className='min-w-0 flex-1'>
            <DropdownMenu
              open={tenantMenuOpen}
              onOpenChange={setTenantMenuOpen}
            >
              <DropdownMenuTrigger asChild>
                <Button
                  variant='ghost'
                  size='sm'
                  className='h-auto w-full justify-start p-1 font-medium'
                >
                  <span className='truncate'>{activeTenant.name}</span>
                  <IconChevronRight
                    className={`ml-auto h-4 w-4 transition-transform duration-200 ${tenantMenuOpen ? 'rotate-90' : ''}`}
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='start' className='w-60 p-2'>
                <DropdownMenuLabel>Switch tenant</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {tenants.map((tenant) => (
                  <DropdownMenuItem
                    key={tenant.id}
                    className='cursor-pointer py-2'
                    onClick={() => handleSwitchTenant(tenant.id)}
                  >
                    <div className='flex w-full items-center gap-2'>
                      <div className='bg-primary/10 text-primary flex h-6 w-6 items-center justify-center rounded-md'>
                        {tenant.name.charAt(0)}
                      </div>
                      <span className='flex-1'>{tenant.name}</span>
                      {tenant.id === activeTenant.id && (
                        <Badge variant='outline' className='ml-auto'>
                          Active
                        </Badge>
                      )}
                    </div>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className='cursor-pointer'
                  onClick={() => router.push('/dashboard/tenants/new')}
                >
                  <IconPlus className='mr-2 h-4 w-4' />
                  Add new tenant
                </DropdownMenuItem>
                <DropdownMenuItem
                  className='cursor-pointer'
                  onClick={() => router.push('/dashboard/tenants')}
                >
                  <Icons.building className='mr-2 h-4 w-4' />
                  Manage tenants
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        
        {/* Add Context and Persona Selector */}
        {!isCollapsed && (
          <div className='px-4 py-2 mt-2'>
            <ContextSelector />
          </div>
        )}
      </SidebarHeader>

      <SidebarContent className='overflow-x-hidden'>
        {/* Render navigation categories */}
        {Object.entries(navCategories).map(([categoryId, items]) => 
          renderNavCategory(categoryId, items)
        )}
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size='lg'
                  className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'
                >
                  <UserAvatarProfile
                    className='h-8 w-8 rounded-lg'
                    showInfo={!isCollapsed}
                    user={mockUser}
                  />
                  {!isCollapsed && (
                    <IconChevronsDown className='ml-auto size-4' />
                  )}
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className='w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg'
                side='bottom'
                align='end'
                sideOffset={4}
              >
                <DropdownMenuLabel className='p-0 font-normal'>
                  <div className='px-1 py-1.5'>
                    <UserAvatarProfile
                      className='h-8 w-8 rounded-lg'
                      showInfo
                      user={mockUser}
                    />
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuGroup>
                  <DropdownMenuItem
                    onClick={() => router.push('/dashboard/profile')}
                  >
                    <IconUserCircle className='mr-2 h-4 w-4' />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <IconCreditCard className='mr-2 h-4 w-4' />
                    Billing
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <IconBell className='mr-2 h-4 w-4' />
                    Notifications
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => router.push('/security/login')}
                >
                  <IconLogout className='mr-2 h-4 w-4' />
                  <span>Sign Out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
