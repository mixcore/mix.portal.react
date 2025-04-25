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
import { useTenants } from '@/hooks/use-tenants';
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
  IconDashboard,
  IconDatabase,
  IconGlobe
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
// import { RecentItems } from '@/components/recent-items';
import { ContextSelector } from '@/components/layout/context-selector';
import { useNavigationContext } from '@/providers/navigation-context-provider';
import { TenantData } from '@/app/dashboard/apps/tenants/types/tenants';
import { AuthService } from '@/services/auth';
import { User } from '@/types';
import { useEffect, useState } from 'react';

export default function AppSidebar() {
  const pathname = usePathname();
  const { isOpen } = useMediaQuery();
  const { state } = useSidebar();
  const isCollapsed = state === 'collapsed';
  const router = useRouter();
  const { 
    filteredNavItems, 
    activeContextId, 
    availableContexts,
    setActiveContextId 
  } = useNavigationContext();
  
  // Get active context
  const activeContext = availableContexts.find(c => c.id === activeContextId);

  // User state
  const [user, setUser] = React.useState<User | null>(null);
  const [isLoadingUser, setIsLoadingUser] = React.useState<boolean>(true);

  // Load user data on component mount
  React.useEffect(() => {
    const loadUser = async () => {
      try {
        setIsLoadingUser(true);
        
        // Get API base URL from environment variables with fallback
        const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || '';
        
        // Remove trailing slash if present to avoid double slash in the URL
        const baseUrl = apiBaseUrl.endsWith('/') ? apiBaseUrl.slice(0, -1) : apiBaseUrl;
        
        // Use the specific my-profile endpoint with environment variable for domain
        const response = await fetch(`${baseUrl}/api/v2/rest/auth/user/my-profile`, {
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`
          }
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch user profile');
        }
        
        const userData = await response.json();
        
        // Map the response to our User type
        const userProfile: User = {
          id: userData.id,
          name: userData.userName,
          email: userData.email,
          username: userData.userName,
          // Extract other fields as needed from the response
          avatar: userData.avatarUrl || userData.avatar || '/mix-app/assets/img/user.png',
        };
        
        // Store roles separately if needed for permission checks
        const userRoles = userData.roles?.map((r: any) => r.roleId) || [];
        
        setUser(userProfile);
      } catch (error) {
        console.error('Error loading user data:', error);
        // Fallback to existing method if our direct call fails
        try {
          const currentUser = await AuthService.getCurrentUser();
          setUser(currentUser);
        } catch (fallbackError) {
          console.error('Fallback user fetch also failed:', fallbackError);
        }
      } finally {
        setIsLoadingUser(false);
      }
    };

    // Only run on the client side
    if (typeof window !== 'undefined' && AuthService.isAuthenticated()) {
      loadUser();
    }
  }, []);

  // Load tenants from API using our hook
  const { 
    tenants, 
    isLoading: isLoadingTenants, 
    error: tenantsError,
    activeTenant,
    setActiveTenant,
    refreshTenants
  } = useTenants();

  // Tenant dropdown menu state
  const [tenantMenuOpen, setTenantMenuOpen] = React.useState(false);

  // Switch tenant handler
  const handleSwitchTenant = (tenantId: string) => {
    const tenant = tenants.find(t => t.id.toString() === tenantId);
    if (tenant) {
      setActiveTenant(tenant);
    }
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

  // Helper function to check if an item or any of its children is active
  const isItemActive = (item: (typeof filteredNavItems)[0], exactMatch: boolean = false): boolean => {
    // If the item doesn't have a URL, it can't be active directly
    if (!item.url || item.url === '#') {
      // But its children might be
      if (item.items && item.items.length > 0) {
        return item.items.some(subItem => isItemActive(subItem, false));
      }
      return false;
    }
    
    // For non-exact match, check if the pathname includes the item's URL
    // This works better for nested routes
    if (!exactMatch) {
      // Handle special case for dashboard which could match many routes
      if (item.url === '/dashboard/overview' || item.url === '/dashboard') {
        return pathname === item.url;
      }
      return pathname.includes(item.url);
    }
    
    // For exact match, the pathname must exactly match the item's URL
    return pathname === item.url;
  };

  // Helper function to render a navigation item
  const renderNavItem = (item: (typeof filteredNavItems)[0]) => {
    const Icon = item.icon ? Icons[item.icon] : Icons.dashboard;
    
    // If it has child items, render as a collapsible menu
    if (item.items && item.items.length > 0) {
      // Check if any child item is active
      const isActive = isItemActive(item);
      
      return (
        <Collapsible
          key={item.title}
          asChild
          defaultOpen={isActive || !isCollapsed}
          className='group/collapsible'
        >
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton 
                isActive={isActive} 
                className='w-full justify-between'
                tooltip={isCollapsed ? item.title : undefined}
              >
                <div className='flex items-center'>
                  <Icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </div>
                <Icons.chevronRight className='ml-auto h-4 w-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90' />
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarMenuSub>
                {item.items.map(subItem => {
                  const SubIcon = subItem.icon ? Icons[subItem.icon] : Icons.dashboard;
                  
                  // Check if this subitem has further items
                  if (subItem.items && subItem.items.length > 0) {
                    // Nested collapsible for third level navigation
                    const isSubActive = isItemActive(subItem);
                    
                    return (
                      <Collapsible
                        key={subItem.title}
                        asChild
                        defaultOpen={isSubActive}
                        className='group/subcollapsible w-full'
                      >
                        <SidebarMenuSubItem>
                          <CollapsibleTrigger asChild>
                            <SidebarMenuSubButton
                              isActive={isSubActive}
                              className='w-full justify-between'
                            >
                              <div className='flex items-center'>
                                <SubIcon className="h-4 w-4" />
                                <span>{subItem.title}</span>
                              </div>
                              <Icons.chevronRight className='ml-auto h-3 w-3 transition-transform duration-200 group-data-[state=open]/subcollapsible:rotate-90' />
                            </SidebarMenuSubButton>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <SidebarMenuSub className='pl-4'>
                              {subItem.items.map(grandchildItem => (
                                <SidebarMenuSubItem key={grandchildItem.title}>
                                  <SidebarMenuSubButton
                                    asChild
                                    isActive={isItemActive(grandchildItem, true)}
                                  >
                                    <Link href={grandchildItem.url || '#'}>
                                      <span>{grandchildItem.title}</span>
                                    </Link>
                                  </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                              ))}
                            </SidebarMenuSub>
                          </CollapsibleContent>
                        </SidebarMenuSubItem>
                      </Collapsible>
                    );
                  }
                  
                  // Otherwise render as a simple menu sub-item
                  return (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton
                        asChild
                        isActive={isItemActive(subItem, true)}
                      >
                        <Link href={subItem.url || '#'}>
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
          tooltip={isCollapsed ? item.title : undefined}
          isActive={isItemActive(item, true)}
        >
          <Link href={item.url || '#'}>
            <Icon className="h-4 w-4" />
            <span>{item.title}</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  };

  // Helper function to render category groups
  const renderNavCategory = (categoryId: string, items: typeof filteredNavItems) => {
    if (!items || items.length === 0) return null;
    
    // Get category display name based on our new structure
    let categoryName = categoryId;
    
    // Map context IDs to display names
    const categoryDisplayNames: Record<string, string> = {
      'general': 'General',
      'website': 'Website',
      'sales': 'Sales',
      'finance': 'Finance',
      'inventory': 'Inventory & Manufacturing',
      'hr': 'Human Resources',
      'marketing': 'Marketing',
      'services': 'Services',
      'productivity': 'Productivity',
      'customization': 'Customization'
    };
    
    // Get the display name or use the ID if not found
    categoryName = categoryDisplayNames[categoryId] || categoryId;
    
    return (
      <SidebarGroup key={categoryId}>
        <SidebarGroupLabel>{categoryName}</SidebarGroupLabel>
        <SidebarMenu>
          {items.map(renderNavItem)}
        </SidebarMenu>
      </SidebarGroup>
    );
  };

  // Helper to get tenant initials for the icon
  const getTenantInitial = (tenant: TenantData) => {
    return tenant.displayName.charAt(0).toUpperCase();
  };

  // Helper to get user display name
  const getUserDisplayName = () => {
    if (!user) return '';
    
    if (user.firstName && user.lastName) {
      return `${user.firstName} ${user.lastName}`;
    } else if (user.name) {
      return user.name;
    } else if (user.username) {
      return user.username;
    } else if (user.email) {
      return user.email.split('@')[0];
    }
    
    return 'User';
  };

  // User object for avatar component
  const userForAvatar = user ? {
    fullName: getUserDisplayName(),
    avatarUrl: user.avatarUrl || user.avatar || '',
    email: user.email || ''
  } : null;

  return (
    <Sidebar collapsible='icon'>
      <SidebarHeader className='pb-0'>
        <div className='flex items-center gap-2 p-2'>
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
                  {isLoadingTenants ? (
                    <span className="truncate">Loading tenants...</span>
                  ) : activeTenant ? (
                    <span className="truncate">{activeTenant.displayName}</span>
                  ) : (
                    <span className="truncate">Select Tenant</span>
                  )}
                  <IconChevronRight
                    className={`ml-auto h-4 w-4 transition-transform duration-200 ${tenantMenuOpen ? 'rotate-90' : ''}`}
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='start' className='w-60 p-2'>
                <DropdownMenuLabel>Switch tenant</DropdownMenuLabel>
                <DropdownMenuSeparator />
                
                {isLoadingTenants ? (
                  <div className="py-2 px-1 text-sm text-muted-foreground">
                    Loading tenants...
                  </div>
                ) : tenantsError ? (
                  <div className="py-2 px-1 text-sm text-destructive">
                    Error loading tenants: {tenantsError}
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="w-full mt-2"
                      onClick={() => refreshTenants()}
                    >
                      Retry
                    </Button>
                  </div>
                ) : tenants.length === 0 ? (
                  <div className="py-2 px-1 text-sm text-muted-foreground">
                    No tenants found
                  </div>
                ) : (
                  tenants.map((tenant) => (
                    <DropdownMenuItem
                      key={tenant.id}
                      className='cursor-pointer py-2'
                      onClick={() => handleSwitchTenant(tenant.id.toString())}
                    >
                      <div className='flex w-full flex-col'>
                        <div className='flex items-center gap-2'>
                          <div className='bg-primary/10 text-primary flex h-6 w-6 items-center justify-center rounded-md'>
                            {getTenantInitial(tenant)}
                          </div>
                          <span className='flex-1 truncate font-medium' title={tenant.displayName}>
                            {tenant.displayName}
                          </span>
                          {activeTenant && tenant.id === activeTenant.id && (
                            <Badge variant='outline' className='ml-auto'>
                              Active
                            </Badge>
                          )}
                          {tenant.status === 'Published' ? (
                            <Badge className="bg-green-500 hover:bg-green-600 ml-auto" variant="default">Active</Badge>
                          ) : tenant.status === 'Draft' ? (
                            <Badge variant="secondary" className="ml-auto">Draft</Badge>
                          ) : tenant.status === 'Deleted' ? (
                            <Badge variant="destructive" className="ml-auto">Deleted</Badge>
                          ) : null}
                        </div>
                        
                        {tenant.primaryDomain && (
                          <div className="ml-8 text-xs text-muted-foreground mt-1 flex items-center">
                            <Icons.link className="h-3 w-3 mr-1" />
                            {tenant.primaryDomain}
                          </div>
                        )}
                        
                        {tenant.systemName && tenant.systemName !== tenant.displayName && (
                          <div className="ml-8 text-xs text-muted-foreground mt-0.5">
                            System: {tenant.systemName}
                          </div>
                        )}
                      </div>
                    </DropdownMenuItem>
                  ))
                )}
                
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
      </SidebarHeader>

      <SidebarContent className='p-2'>
        {!isCollapsed && activeContext && (
          <div className="flex items-center space-x-2 mb-4 border-b">
          </div>
        )}

        {/* Display second level menu items directly */}
        {Object.entries(navCategories)
          .flatMap(([categoryId, items]) => {
            // Skip if no items
            if (!items || items.length === 0) {
              return [];
            }
            
            // Only show items for active context or general items
            const shouldShow = categoryId === 'general' || 
                               (activeContextId && (categoryId === activeContextId || categoryId === 'all'));
            
            if (!shouldShow) {
              return [];
            }
            
            // Map context IDs to display names
            const categoryDisplayNames: Record<string, string> = {
              'general': 'General',
              'website': 'Website',
              'sales': 'Sales',
              'finance': 'Finance',
              'inventory': 'Inventory & Manufacturing',
              'hr': 'Human Resources',
              'marketing': 'Marketing',
              'services': 'Services',
              'productivity': 'Productivity',
              'customization': 'Customization'
            };
            
            // Group items by their category
            return [
              <SidebarGroup key={categoryId}>
                <SidebarGroupLabel>
                  {categoryDisplayNames[categoryId] || categoryId}
                </SidebarGroupLabel>
                <SidebarMenu>
                  {items.map(item => {
                    const Icon = item.icon ? Icons[item.icon] : Icons.dashboard;
                    
                    // If item has children
                    if (item.items && item.items.length > 0) {
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
                                tooltip={isCollapsed ? item.title : undefined}
                              >
                                <Icon className="h-4 w-4" />
                                <span>{item.title}</span>
                                <Icons.chevronRight className='ml-auto h-4 w-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90' />
                              </SidebarMenuButton>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                              <SidebarMenuSub>
                                {item.items.map(subItem => (
                                  <SidebarMenuSubItem key={subItem.title}>
                                    <SidebarMenuSubButton
                                      asChild
                                      isActive={pathname?.includes(subItem.url)}
                                    >
                                      <Link href={subItem.url}>
                                        <span>{subItem.title}</span>
                                      </Link>
                                    </SidebarMenuSubButton>
                                  </SidebarMenuSubItem>
                                ))}
                              </SidebarMenuSub>
                            </CollapsibleContent>
                          </SidebarMenuItem>
                        </Collapsible>
                      );
                    }
                    
                    // Simple item without children
                    return (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                          asChild
                          tooltip={isCollapsed ? item.title : undefined}
                          isActive={pathname === item.url}
                        >
                          <Link href={item.url || '#'}>
                            <Icon className="h-4 w-4" />
                            <span>{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>
              </SidebarGroup>
            ];
          })}

        {/* Third level child menu example - Now follows Ghost structure */}
        <SidebarGroup className="mt-4">
          <SidebarGroupLabel>MANAGE</SidebarGroupLabel>
          <SidebarMenu>
            {/* Posts with subitems */}
            <Collapsible
              asChild
              defaultOpen={false}
              className='group/collapsible'
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton 
                    tooltip={isCollapsed ? "Posts" : undefined}
                    isActive={pathname?.includes('/dashboard/posts')}
                  >
                    <Icons.file className="h-4 w-4" />
                    <span>Posts</span>
                    <Icons.chevronRight className='ml-auto h-4 w-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90' />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton
                        asChild
                        isActive={pathname === '/dashboard/posts/drafts'}
                      >
                        <Link href="/dashboard/posts/drafts">
                          <Icons.pencil className="h-4 w-4" />
                          <span>Drafts</span>
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton
                        asChild
                        isActive={pathname === '/dashboard/posts/scheduled'}
                      >
                        <Link href="/dashboard/posts/scheduled">
                          <Icons.fileText className="h-4 w-4" />
                          <span>Scheduled</span>
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton
                        asChild
                        isActive={pathname === '/dashboard/posts/published'}
                      >
                        <Link href="/dashboard/posts/published">
                          <Icons.check className="h-4 w-4" />
                          <span>Published</span>
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>

            {/* Pages */}
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                tooltip={isCollapsed ? "Pages" : undefined}
                isActive={pathname?.includes('/dashboard/pages')}
              >
                <Link href="/dashboard/pages">
                  <Icons.file className="h-4 w-4" />
                  <span>Pages</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            {/* Tags */}
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                tooltip={isCollapsed ? "Tags" : undefined}
                isActive={pathname?.includes('/dashboard/tags')}
              >
                <Link href="/dashboard/tags">
                  <Icons.tag className="h-4 w-4" />
                  <span>Tags</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            {/* Members */}
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                tooltip={isCollapsed ? "Members" : undefined}
                isActive={pathname?.includes('/dashboard/members')}
              >
                <Link href="/dashboard/members">
                  <Icons.user className="h-4 w-4" />
                  <span>Members</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            {/* Staff */}
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                tooltip={isCollapsed ? "Staff" : undefined}
                isActive={pathname?.includes('/dashboard/staff')}
              >
                <Link href="/dashboard/staff">
                  <Icons.user className="h-4 w-4" />
                  <span>Staff</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        {/* SETTINGS section */}
        <SidebarGroup className="mt-4">
          <SidebarGroupLabel>SETTINGS</SidebarGroupLabel>
          <SidebarMenu>
            {/* General */}
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                tooltip={isCollapsed ? "General" : undefined}
                isActive={pathname === '/dashboard/settings/general'}
              >
                <Link href="/dashboard/settings/general">
                  <Icons.settings className="h-4 w-4" />
                  <span>General</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            {/* Design */}
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                tooltip={isCollapsed ? "Design" : undefined}
                isActive={pathname === '/dashboard/settings/design'}
              >
                <Link href="/dashboard/settings/design">
                  <Icons.palette className="h-4 w-4" />
                  <span>Design</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            {/* Code injection */}
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                tooltip={isCollapsed ? "Code injection" : undefined}
                isActive={pathname === '/dashboard/settings/code-injection'}
              >
                <Link href="/dashboard/settings/code-injection">
                  <Icons.code className="h-4 w-4" />
                  <span>Code injection</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            {/* Integrations */}
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                tooltip={isCollapsed ? "Integrations" : undefined}
                isActive={pathname === '/dashboard/settings/integrations'}
              >
                <Link href="/dashboard/settings/integrations">
                  <Icons.link className="h-4 w-4" />
                  <span>Integrations</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            {/* Databases */}
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                tooltip={isCollapsed ? "Databases" : undefined}
                isActive={pathname === '/dashboard/apps/mixdb'}
              >
                <Link href="/dashboard/apps/mixdb">
                  <Icons.database className="h-4 w-4" />
                  <span>Databases</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t">
        <div className='p-3'>
          {/*<div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-muted-foreground">
              Categories
            </span>
          </div>*/}
          <div className="flex items-center gap-1.5 w-full overflow-hidden">
            <div className="flex items-center gap-1.5 flex-1 overflow-hidden">
              {availableContexts.map((context) => {
                const isActive = context.id === activeContextId;
                // Safely handle icon lookup
                let ContextIcon = Icons.dashboard;
                if (context.icon && typeof context.icon === 'string' && context.icon in Icons) {
                  ContextIcon = Icons[context.icon as keyof typeof Icons];
                }
                return (
                  <TooltipProvider key={context.id}>
                    <Tooltip delayDuration={200}>
                      <TooltipTrigger asChild>
                        <Button
                          variant={isActive ? 'default' : 'ghost'}
                          size="icon"
                          className={cn(
                            'h-7 w-7 rounded-md flex-shrink-0',
                            isActive ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                          )}
                          onClick={() => setActiveContextId(context.id)}
                        >
                          <ContextIcon className="h-3.5 w-3.5" />
                          <span className="sr-only">{context.name}</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="top" className="text-xs">
                        <p className="font-medium">{context.name}</p>
                        {/* {context.description && (
                          <p className="text-xs text-muted-foreground">{context.description}</p>
                        )} */}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                );
              })}
            </div>
            <TooltipProvider>
              <Tooltip delayDuration={200}>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7 rounded-md text-muted-foreground hover:text-foreground flex-shrink-0"
                    onClick={() => router.push('/dashboard/settings/app-contexts')}
                  >
                    <IconSettings className="h-3.5 w-3.5" />
                    <span className="sr-only">Settings</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right" className="text-xs">
                  <p>Manage app contexts</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        
        <SidebarMenu className="border-t px-2 py-2">
          <SidebarMenuItem>
            <SidebarMenuButton
              size='lg'
              onClick={() => router.push('/dashboard/profile')}
              className="rounded-md"
            >
              <UserAvatarProfile
                className='h-7 w-7 rounded-md'
                showInfo={!isCollapsed}
                user={userForAvatar || { fullName: 'Loading...', avatarUrl: '', email: '' }}
              />
              {!isCollapsed && (
                <IconUserCircle className='ml-auto h-4 w-4 text-muted-foreground' />
              )}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
