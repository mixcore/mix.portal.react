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
  Menu,
  Filter,
  Check,
  MoreVertical,
  Users
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

// Define view types for type safety
type ViewType = 'dashboard' | 'list' | 'detail' | 'settings';

// Sample online users data - in a real app, this would come from a real-time source
const onlineUsers = [
  { id: '1', name: 'Alex Smith', avatar: '/avatars/01.png', status: 'active', lastActive: 'now' },
  { id: '2', name: 'Maria Garcia', avatar: '/avatars/02.png', status: 'active', lastActive: 'now' },
  { id: '3', name: 'John Doe', avatar: '/avatars/03.png', status: 'active', lastActive: '5m ago' },
  { id: '4', name: 'Sarah Wilson', avatar: '/avatars/04.png', status: 'idle', lastActive: '15m ago' },
];

// Online users avatar group component
const OnlineUsersGroup = () => {
  const displayedUsers = onlineUsers.slice(0, 3);
  const remainingCount = Math.max(0, onlineUsers.length - 3);

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="flex items-center cursor-pointer">
          <div className="flex -space-x-2 overflow-hidden">
            {displayedUsers.map((user) => (
              <Avatar key={user.id} className="border-2 border-background h-7 w-7 ring-0">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="text-xs">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
            ))}
            {remainingCount > 0 && (
              <div className="relative flex h-7 w-7 items-center justify-center rounded-full border-2 border-background bg-muted text-xs font-medium">
                +{remainingCount}
              </div>
            )}
          </div>
          <div className="ml-2 flex items-center text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500 mr-1.5"></span>
            <span className="hidden md:inline-block">{onlineUsers.filter(u => u.status === 'active').length} online</span>
          </div>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 p-4" align="start" side="bottom">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold">Online Users</h4>
            <span className="text-xs text-muted-foreground">{onlineUsers.filter(u => u.status === 'active').length} active</span>
          </div>
          <div className="space-y-3">
            {onlineUsers.map((user) => (
              <div key={user.id} className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">{user.name}</p>
                    {user.status === 'active' && (
                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {user.status === 'active' 
                      ? 'Currently online'
                      : `Last seen ${user.lastActive}`
                    }
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

// Collapsible search component
const CollapsibleSearch = ({ searchQuery, setSearchQuery }: { searchQuery: string, setSearchQuery: (query: string) => void }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const searchInputRef = React.useRef<HTMLInputElement>(null);
  
  // Focus input when expanded
  React.useEffect(() => {
    if (isExpanded && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isExpanded]);
  
  // Close on escape key
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsExpanded(false);
    }
  };
  
  // Close on click outside
  const handleClickOutside = (e: MouseEvent) => {
    if (isExpanded && searchInputRef.current && !searchInputRef.current.contains(e.target as Node)) {
      setIsExpanded(false);
    }
  };
  
  React.useEffect(() => {
    if (isExpanded) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isExpanded]);
  
  return (
    <div className="relative mx-1">
      {isExpanded ? (
        <div className="relative animate-in fade-in-0 zoom-in-95 duration-200">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            ref={searchInputRef}
            type="search" 
            placeholder="Search..." 
            className="w-[200px] pl-8 h-9 rounded-md"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
      ) : (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-9 w-9" 
                onClick={() => setIsExpanded(true)}
              >
                <Search className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">Search</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </div>
  );
};

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
  <div className="flex items-center px-4 py-2 border-b">
    <div className="flex items-center mr-3">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" onClick={toggleSidebar}>
              <Menu className="h-5 w-5" />
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
    
    <div className="flex items-center">
      <div className="flex items-center space-x-1">
        <OnlineUsersGroup />
        
        <CollapsibleSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        
        <div className="flex items-center space-x-1">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9" onClick={toggleContainerClass}>
                  {isFluidLayout ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">{isFluidLayout ? 'Exit fullscreen' : 'Fullscreen'}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Filter className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              <DropdownMenuLabel>Filter Options</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Check className="mr-2 h-4 w-4" />
                  <span>Active items</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Check className="mr-2 h-4 w-4 opacity-0" />
                  <span>Draft items</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Check className="mr-2 h-4 w-4 opacity-0" />
                  <span>Archived items</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <span>Reset filters</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon" className="h-9 w-9">
                  <Plus className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">Create New</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-9 w-9">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <Eye className="mr-2 h-4 w-4" />
                        <span>Preview App</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Copy className="mr-2 h-4 w-4" />
                        <span>Duplicate</span>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <Plus className="mr-2 h-4 w-4" />
                        <span>Create New Item</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Plus className="mr-2 h-4 w-4" />
                        <span>Import Items...</span>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TooltipTrigger>
              <TooltipContent side="bottom">More Options</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  </div>
);

export default MenubarHeader; 