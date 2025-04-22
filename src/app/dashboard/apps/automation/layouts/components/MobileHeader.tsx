import React from 'react';
import { 
  LayoutDashboard, 
  ListTodo, 
  Settings, 
  Menu, 
  Share, 
  Maximize2, 
  Minimize2 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

// Define view types for type safety
type ViewType = 'dashboard' | 'list' | 'detail' | 'settings';

interface MobileHeaderProps { 
  appConfig: any; 
  activeView: ViewType;
  isFluidLayout: boolean;
  handleViewChange: (view: ViewType) => void;
  toggleContainerClass: () => void;
  copyDeepLink: () => void;
  shareTooltip: string;
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({ 
  appConfig, 
  activeView, 
  isFluidLayout, 
  handleViewChange, 
  toggleContainerClass,
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
      <span className="text-lg font-medium ml-2">{appConfig.displayName}</span>
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