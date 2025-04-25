import React from 'react';
import { 
  LayoutDashboard, 
  ListTodo, 
  Settings, 
  Menu, 
  Share, 
  Maximize2, 
  Minimize2,
  PanelLeft,
  Grid,
  Trello,
  CalendarDays,
  Palette,
  Share2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ViewType } from './types';

interface MobileHeaderProps { 
  appConfig: any; 
  activeView: ViewType;
  isFluidLayout: boolean;
  isSidebarOpen: boolean;
  handleViewChange: (view: ViewType) => void;
  toggleContainerClass: () => void;
  toggleSidebar: () => void;
  copyDeepLink: () => void;
  shareTooltip: string;
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({ 
  appConfig, 
  activeView, 
  isFluidLayout, 
  isSidebarOpen,
  handleViewChange, 
  toggleContainerClass,
  toggleSidebar,
  copyDeepLink,
  shareTooltip
}) => (
  <div className="md:hidden flex items-center justify-between px-4 py-2 border-b">
    <div className="flex items-center">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[240px] sm:w-[300px]">
          <nav className="flex flex-col gap-4 mt-4">
            <Button
              variant={activeView === 'dashboard' ? 'default' : 'ghost'}
              className="justify-start"
              onClick={() => handleViewChange('dashboard')}
            >
              <LayoutDashboard className="mr-2 h-5 w-5" />
              Dashboard
            </Button>
            <Button
              variant={activeView === 'list' ? 'default' : 'ghost'}
              className="justify-start"
              onClick={() => handleViewChange('list')}
            >
              <ListTodo className="mr-2 h-5 w-5" />
              Items
            </Button>
            
            <div className="text-xs text-muted-foreground mt-4 mb-2 px-2">Layout Views</div>
            
            <Button
              variant={activeView === 'basicGrid' ? 'default' : 'ghost'}
              className="justify-start"
              onClick={() => handleViewChange('basicGrid')}
            >
              <Grid className="mr-2 h-5 w-5" />
              Basic Grid
            </Button>
            <Button
              variant={activeView === 'kanban' ? 'default' : 'ghost'}
              className="justify-start"
              onClick={() => handleViewChange('kanban')}
            >
              <Trello className="mr-2 h-5 w-5" />
              Kanban Board
            </Button>
            <Button
              variant={activeView === 'calendar' ? 'default' : 'ghost'}
              className="justify-start"
              onClick={() => handleViewChange('calendar')}
            >
              <CalendarDays className="mr-2 h-5 w-5" />
              Calendar
            </Button>
            
            <div className="text-xs text-muted-foreground mt-4 mb-2 px-2">Advanced Editors</div>
            
            <Button
              variant={activeView === 'canvas' ? 'default' : 'ghost'}
              className="justify-start"
              onClick={() => handleViewChange('canvas')}
            >
              <Palette className="mr-2 h-5 w-5" />
              Canvas Editor
            </Button>
            <Button
              variant={activeView === 'workflow' ? 'default' : 'ghost'}
              className="justify-start"
              onClick={() => handleViewChange('workflow')}
            >
              <Share2 className="mr-2 h-5 w-5" />
              Workflow
            </Button>
            
            <Button
              variant={activeView === 'settings' ? 'default' : 'ghost'}
              className="justify-start"
              onClick={() => handleViewChange('settings')}
            >
              <Settings className="mr-2 h-5 w-5" />
              Settings
            </Button>
          </nav>
        </SheetContent>
      </Sheet>
      <Button variant="ghost" size="icon" onClick={toggleSidebar} className="mr-1">
        <PanelLeft className="h-5 w-5" />
        <span className="sr-only">Toggle sidebar</span>
      </Button>
      <span className="text-lg font-medium ml-1">{appConfig.displayName}</span>
    </div>
    <div className="flex items-center gap-1">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" onClick={toggleContainerClass}>
              {isFluidLayout ? <Minimize2 className="h-5 w-5" /> : <Maximize2 className="h-5 w-5" />}
            </Button>
          </TooltipTrigger>
          <TooltipContent>{isFluidLayout ? 'Exit fullscreen' : 'Fullscreen'}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" onClick={copyDeepLink}>
              <Share className="h-5 w-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>{shareTooltip || 'Copy link'}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  </div>
);

export default MobileHeader; 