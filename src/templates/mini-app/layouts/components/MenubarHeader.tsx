import React from 'react';
import { 
  LayoutDashboard, 
  ListTodo, 
  Settings, 
  Plus, 
  Search, 
  Eye, 
  Copy,
  Maximize2, 
  Minimize2,
  PanelLeft,
  Menu
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";

// Define view types for type safety
type ViewType = 'dashboard' | 'list' | 'detail' | 'settings';

interface MenubarHeaderProps {
  appConfig: any;
  activeView: ViewType;
  isFluidLayout: boolean;
  isSidebarOpen: boolean;
  handleViewChange: (view: ViewType) => void;
  toggleContainerClass: () => void;
  toggleSidebar: () => void;
  copyDeepLink: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedItemId: string | null;
}

export const MenubarHeader: React.FC<MenubarHeaderProps> = ({
  appConfig,
  activeView,
  isFluidLayout,
  isSidebarOpen,
  handleViewChange,
  toggleContainerClass,
  toggleSidebar,
  copyDeepLink,
  searchQuery,
  setSearchQuery,
  selectedItemId
}) => (
  <div className="flex items-center px-4 py-1 border-b">
    <div className="flex items-center mr-2">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" onClick={toggleSidebar}>
            <Menu className="h-5 w-5 mr-2" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>{isSidebarOpen ? 'Hide sidebar' : 'Show sidebar'}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
    <div className="flex-1">
      <Menubar className="border-none shadow-none">
        <MenubarMenu>
          <MenubarTrigger className="font-semibold">
            {appConfig.displayName}
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem onClick={() => handleViewChange('dashboard')}>
              <LayoutDashboard className="mr-2 h-4 w-4" />
              Dashboard
            </MenubarItem>
            <MenubarItem onClick={() => handleViewChange('list')}>
              <ListTodo className="mr-2 h-4 w-4" />
              Items
            </MenubarItem>
            <MenubarItem onClick={() => handleViewChange('settings')}>
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem onClick={copyDeepLink}>
              <Copy className="mr-2 h-4 w-4" />
              Copy Link
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        
        <MenubarMenu>
          <MenubarTrigger className={activeView === 'dashboard' ? 'bg-accent text-accent-foreground' : ''}>
            <LayoutDashboard className="mr-2 h-4 w-4 inline-block" />
            Dashboard
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>View Dashboard Statistics</MenubarItem>
            <MenubarItem>Configure Widgets</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Refresh Data</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        
        <MenubarMenu>
          <MenubarTrigger className={activeView === 'list' ? 'bg-accent text-accent-foreground' : ''}>
            <ListTodo className="mr-2 h-4 w-4 inline-block" />
            Items
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem onClick={() => console.log('create new')}>
              <Plus className="mr-2 h-4 w-4" />
              Create New
            </MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>View Options</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>List View</MenubarItem>
                <MenubarItem>Grid View</MenubarItem>
                <MenubarItem>Table View</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem>
              <Eye className="mr-2 h-4 w-4" />
              Preview
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        
        <MenubarMenu>
          <MenubarTrigger 
            className={activeView === 'settings' ? 'bg-accent text-accent-foreground' : ''}
            disabled={activeView === 'detail' && !selectedItemId}
          >
            <Settings className="mr-2 h-4 w-4 inline-block" />
            Settings
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>General Settings</MenubarItem>
            <MenubarItem>User Preferences</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Advanced Configuration</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
    
    <div className="flex items-center gap-3">
      <div className="relative w-auto">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search" 
          placeholder="Search..." 
          className="w-[180px] pl-8 h-9"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon" onClick={toggleContainerClass}>
              {isFluidLayout ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
            </Button>
          </TooltipTrigger>
          <TooltipContent>{isFluidLayout ? 'Exit fullscreen' : 'Fullscreen'}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      
      <Button variant="default" size="sm" className="h-9 gap-1">
        <Plus className="h-4 w-4" />
        <span className="hidden sm:inline-block">Create</span>
      </Button>
    </div>
  </div>
);

export default MenubarHeader; 