'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { getAppConfig } from '../app-loader';
import { 
  ArrowLeftIcon, 
  LayoutDashboardIcon, 
  Smartphone, 
  GaugeIcon, 
  BrainCircuitIcon, 
  SettingsIcon,
  Wifi,
  ChevronRightIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbSeparator 
} from '@/components/ui/breadcrumb';

type ViewType = 'dashboard' | 'devices' | 'device-detail' | 'automation' | 'analytics' | 'settings';

interface AppShellProps {
  children: React.ReactNode;
  activeView: ViewType;
  onViewChange: (view: ViewType) => void;
  selectedDeviceId: string | null;
  standalone?: boolean;
}

const AppShell: React.FC<AppShellProps> = ({
  children,
  activeView,
  onViewChange,
  selectedDeviceId,
  standalone = false
}) => {
  const router = useRouter();
  const appConfig = getAppConfig();

  // Handle back navigation
  const handleBack = () => {
    router.push('/dashboard');
  };

  // Generate nav items
  const navItems = [
    { 
      id: 'dashboard', 
      label: 'Dashboard',
      icon: <LayoutDashboardIcon className="h-5 w-5" />,
      onClick: () => onViewChange('dashboard') 
    },
    { 
      id: 'devices', 
      label: 'Devices',
      icon: <Smartphone className="h-5 w-5" />,
      onClick: () => onViewChange('devices') 
    },
    { 
      id: 'automation', 
      label: 'Automation',
      icon: <BrainCircuitIcon className="h-5 w-5" />,
      onClick: () => onViewChange('automation') 
    },
    { 
      id: 'analytics', 
      label: 'Analytics',
      icon: <GaugeIcon className="h-5 w-5" />,
      onClick: () => onViewChange('analytics') 
    },
    { 
      id: 'settings', 
      label: 'Settings',
      icon: <SettingsIcon className="h-5 w-5" />,
      onClick: () => onViewChange('settings') 
    }
  ];

  // Breadcrumb generation
  const getBreadcrumbs = () => {
    const crumbs = [
      { 
        label: 'IoT Platform', 
        path: '/dashboard/apps/iot',
        onClick: () => onViewChange('dashboard') 
      }
    ];

    if (activeView !== 'dashboard') {
      const currentNav = navItems.find(item => item.id === activeView);
      if (currentNav) {
        crumbs.push({
          label: currentNav.label,
          path: `/dashboard/apps/iot?view=${activeView}`,
          onClick: () => onViewChange(activeView as ViewType)
        });
      }
    }

    if (activeView === 'device-detail' && selectedDeviceId) {
      crumbs.push({
        label: 'Devices',
        path: '/dashboard/apps/iot?view=devices',
        onClick: () => onViewChange('devices')
      });
      
      crumbs.push({
        label: `Device ${selectedDeviceId}`,
        path: `/dashboard/apps/iot?view=device-detail&deviceId=${selectedDeviceId}`,
        onClick: () => {}
      });
    }

    return crumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <div className="flex flex-col h-full">
      {/* App header with navigation */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          {!standalone && (
            <Button 
              variant="ghost" 
              className="mr-2"
              onClick={handleBack}
              type="button"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-1" />
              Back
            </Button>
          )}
          
          <div className="mr-4 hidden md:flex">
            <Wifi className="h-6 w-6 text-primary" />
            <span className="ml-2 text-xl font-semibold">{appConfig.displayName}</span>
          </div>
          
          <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <BreadcrumbSeparator />}
                  <BreadcrumbItem>
                    <BreadcrumbLink 
                      onClick={(e) => {
                        e.preventDefault();
                        if (crumb.onClick) crumb.onClick();
                      }}
                      className={`${index === breadcrumbs.length - 1 ? "font-semibold" : ""} cursor-pointer`}
                    >
                      {crumb.label}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </React.Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
          
          <div className="ml-auto flex items-center gap-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeView === item.id ? "secondary" : "ghost"}
                className="hidden md:flex"
                onClick={(e) => {
                  e.preventDefault();
                  item.onClick();
                }}
                type="button"
              >
                {item.icon}
                <span className="ml-2">{item.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </header>
      
      {/* Mobile navigation */}
      <div className="md:hidden flex overflow-auto border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex p-2 w-full overflow-x-auto">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant={activeView === item.id ? "secondary" : "ghost"}
              className="mr-1 flex-shrink-0"
              onClick={(e) => {
                e.preventDefault();
                item.onClick();
              }}
              type="button"
              size="sm"
            >
              {item.icon}
              <span className="ml-1 text-xs">{item.label}</span>
            </Button>
          ))}
        </div>
      </div>
      
      {/* Mobile breadcrumb */}
      <div className="md:hidden p-2 border-b flex items-center overflow-x-auto">
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                {index > 0 && <BreadcrumbSeparator><ChevronRightIcon className="h-4 w-4" /></BreadcrumbSeparator>}
                <BreadcrumbItem>
                  <BreadcrumbLink 
                    onClick={(e) => {
                      e.preventDefault();
                      if (crumb.onClick) crumb.onClick();
                    }}
                    className={`${index === breadcrumbs.length - 1 ? "font-semibold" : ""} cursor-pointer`}
                  >
                    {crumb.label}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      
      {/* Main content */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
};

export default AppShell; 