'use client';
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
  SidebarRail
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
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import * as React from 'react';
import { Icons } from '../icons';
import { OrgSwitcher } from '../org-switcher';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import Image from 'next/image';

export default function AppSidebar() {
  const pathname = usePathname();
  const { isOpen } = useMediaQuery();
  const router = useRouter();

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

  // Group navigation items by category
  const navCategories = {
    content: navItems.filter((item) =>
      ['Posts', 'Pages', 'Media'].includes(item.title)
    ),
    management: navItems.filter((item) =>
      ['Users', 'Roles', 'Settings'].includes(item.title)
    ),
    other: navItems.filter(
      (item) =>
        !['Posts', 'Pages', 'Media', 'Users', 'Roles', 'Settings'].includes(
          item.title
        )
    )
  };

  return (
    <Sidebar collapsible='icon'>
      <SidebarHeader className='pb-2'>
        <div className='flex items-center gap-2 px-2 py-1'>
          <div className='bg-primary/10 text-primary flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md font-semibold'>
            M
          </div>
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
                <DropdownMenuItem className='cursor-pointer'>
                  <IconPlus className='mr-2 h-4 w-4' />
                  Add new tenant
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className='overflow-x-hidden'>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                tooltip='Dashboard'
                isActive={pathname === '/dashboard'}
              >
                <Link href='/dashboard'>
                  <IconDashboard className='h-4 w-4' />
                  <span>Dashboard</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        {/* Content Management */}
        <SidebarGroup>
          <SidebarGroupLabel>Content</SidebarGroupLabel>
          <SidebarMenu>
            {navCategories.content.map((item) => {
              const Icon = item.icon ? Icons[item.icon] : Icons.logo;
              return item?.items && item?.items?.length > 0 ? (
                <Collapsible
                  key={item.title}
                  asChild
                  defaultOpen={pathname?.includes(item.url)}
                  className='group/collapsible'
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton
                        tooltip={item.title}
                        isActive={
                          pathname === item.url || pathname?.includes(item.url)
                        }
                      >
                        {item.icon && <Icon />}
                        <span>{item.title}</span>
                        <IconChevronRight className='ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90' />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items?.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton
                              asChild
                              isActive={pathname === subItem.url}
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
              ) : (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    tooltip={item.title}
                    isActive={
                      pathname === item.url || pathname?.includes(item.url)
                    }
                  >
                    <Link href={item.url}>
                      <Icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>

        {/* Recently Viewed */}
        <SidebarGroup>
          <SidebarGroupLabel>Recent</SidebarGroupLabel>
          <div className='text-muted-foreground px-2 pb-2 text-xs'>
            Recently viewed content
          </div>
          <SidebarMenu>
            {recentItems.map((item) => (
              <SidebarMenuItem key={item.id}>
                <SidebarMenuButton asChild tooltip={item.title}>
                  <Link href={item.url} className='group'>
                    <div className='bg-primary/10 text-primary flex h-4 w-4 items-center justify-center rounded text-[10px] uppercase'>
                      {item.type === 'post' ? 'P' : 'G'}
                    </div>
                    <span className='truncate'>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        {/* Admin & Settings */}
        <SidebarGroup>
          <SidebarGroupLabel>Management</SidebarGroupLabel>
          <SidebarMenu>
            {navCategories.management.map((item) => {
              const Icon = item.icon ? Icons[item.icon] : Icons.logo;
              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    tooltip={item.title}
                    isActive={
                      pathname === item.url || pathname?.includes(item.url)
                    }
                  >
                    <Link href={item.url}>
                      <Icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>

        {/* Usage Stats */}
        <SidebarGroup className='group-has-data-[collapsible=icon]:hidden'>
          <SidebarGroupLabel>Storage</SidebarGroupLabel>
          <div className='px-3 py-2'>
            <div className='space-y-1'>
              <div className='flex justify-between text-xs'>
                <span className='text-muted-foreground'>Storage usage</span>
                <span className='font-medium'>65%</span>
              </div>
              <Progress value={65} className='h-1.5' />
              <p className='text-muted-foreground text-xs'>
                45.5 GB of 70 GB used
              </p>
            </div>
          </div>
        </SidebarGroup>
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
                    showInfo
                    user={mockUser}
                  />
                  <IconChevronsDown className='ml-auto size-4' />
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
