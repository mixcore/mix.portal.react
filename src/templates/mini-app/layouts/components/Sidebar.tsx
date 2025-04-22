import React from 'react';
import { LayoutDashboard, ListTodo, Settings, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

// Define view types for type safety
type ViewType = 'dashboard' | 'list' | 'detail' | 'settings';

interface SidebarProps { 
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  activeView: ViewType;
  handleViewChange: (view: ViewType) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  sidebarOpen, 
  setSidebarOpen, 
  activeView, 
  handleViewChange 
}) => (
  <div className={`hidden md:block app-sidebar bg-background border-r transition-all duration-300 ${sidebarOpen ? 'w-[240px]' : 'w-[60px]'}`}>
    <nav className="p-3 flex flex-col gap-1">
      <Button
        variant={activeView === 'dashboard' ? 'secondary' : 'ghost'}
        size="sm"
        className="justify-start"
        onClick={() => handleViewChange('dashboard')}
      >
        <LayoutDashboard className="h-5 w-5 mr-2" />
        {sidebarOpen && <span>Dashboard</span>}
      </Button>
      <Button
        variant={activeView === 'list' ? 'secondary' : 'ghost'}
        size="sm"
        className="justify-start"
        onClick={() => handleViewChange('list')}
      >
        <ListTodo className="h-5 w-5 mr-2" />
        {sidebarOpen && <span>Items</span>}
      </Button>
      <Separator className="my-2" />
      <Button
        variant={activeView === 'settings' ? 'secondary' : 'ghost'}
        size="sm"
        className="justify-start"
        onClick={() => handleViewChange('settings')}
      >
        <Settings className="h-5 w-5 mr-2" />
        {sidebarOpen && <span>Settings</span>}
      </Button>
    </nav>
  </div>
);

export default Sidebar; 