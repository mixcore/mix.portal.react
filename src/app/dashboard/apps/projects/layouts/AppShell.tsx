'use client';

import React, { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import useContainerStatus from '../hooks/useContainerStatus';
import { getAppConfig } from '../app-loader';
import { useBreadcrumb } from '../hooks/useBreadcrumb';

interface AppShellProps {
  children: React.ReactNode;
  activeView?: 'projects' | 'tasks' | 'gantt' | 'calendar' | 'board';
  onViewChange?: (view: 'projects' | 'tasks' | 'gantt' | 'calendar' | 'board') => void;
  selectedProjectId?: string | null;
  selectedProjectTitle?: string | null;
}

export function AppShell({ 
  children, 
  activeView = 'projects', 
  onViewChange,
  selectedProjectId,
  selectedProjectTitle
}: AppShellProps) {
  const isFluidLayout = useContainerStatus();
  const [activeRibbonTab, setActiveRibbonTab] = useState('file');
  const [appHeight, setAppHeight] = useState(0);
  const appConfig = getAppConfig();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [shareTooltip, setShareTooltip] = useState('');
  const { setBreadcrumbs } = useBreadcrumb();
  
  // Update breadcrumbs when view or project changes
  useEffect(() => {
    const breadcrumbs = [
      { label: 'Dashboard', href: '/dashboard' },
      { label: 'Apps', href: '/dashboard/apps' },
      { label: 'Projects', href: '/dashboard/apps/projects' }
    ];

    if (activeView !== 'projects') {
      // Add view-specific breadcrumb
      const viewLabel = activeView.charAt(0).toUpperCase() + activeView.slice(1);
      const viewPath = `/dashboard/apps/projects?view=${activeView}`;
      breadcrumbs.push({ label: viewLabel, href: viewPath });
    }

    if (selectedProjectId && selectedProjectTitle && activeView === 'tasks') {
      // Add project-specific breadcrumb
      const projectPath = `/dashboard/apps/projects?view=tasks&projectId=${selectedProjectId}`;
      breadcrumbs.push({ label: selectedProjectTitle, href: projectPath });
    }

    // Update the dashboard breadcrumbs
    setBreadcrumbs(breadcrumbs);
  }, [activeView, selectedProjectId, selectedProjectTitle, setBreadcrumbs]);
  
  const handleViewChange = (view: 'projects' | 'tasks' | 'gantt' | 'calendar' | 'board') => {
    if (onViewChange) {
      onViewChange(view);
    }
  };
  
  // Toggle container class on parent dashboard layout
  const toggleContainerClass = () => {
    const dashboardContent = document.querySelector('.dashboard-content');
    const mainContent = document.querySelector('main.flex-1');
    
    if (dashboardContent) {
      if (isFluidLayout) {
        // Switch to contained view
        dashboardContent.classList.add('container', 'mx-auto', 'max-w-7xl', 'p-4', 'md:p-6');
        if (mainContent) {
          mainContent.classList.add('overflow-auto');
          mainContent.classList.remove('overflow-hidden');
          mainContent.setAttribute('data-app-view', 'default');
        }
      } else {
        // Switch to fluid view
        dashboardContent.classList.remove('container', 'mx-auto', 'max-w-7xl', 'p-4', 'md:p-6');
        if (mainContent) {
          mainContent.classList.remove('overflow-auto');
          mainContent.classList.add('overflow-hidden');
          mainContent.setAttribute('data-app-view', 'projects-app');
        }
      }
    }
  };
  
  // Calculate and set the app height dynamically
  const calculateAppHeight = () => {
    const mainContent = document.querySelector('main.flex-1');
    if (mainContent) {
      const mainHeight = mainContent.clientHeight;
      // Subtract header height (ribbon + tabs - around 172px)
      const availableHeight = mainHeight - 172;
      setAppHeight(Math.max(availableHeight, 300)); // Set minimum height
    }
  };
  
  // Set initial layout when component mounts or activeView changes
  useEffect(() => {
    // Get full-screen setting from config
    const shouldUseFullScreen = appConfig.settings.enableFullScreenByDefault;
    const shouldUseFluidLayout = appConfig.ui.layout.fluid;
    
    // Enable full width if configured to use fluid layout by default
    if ((activeView === 'gantt' || shouldUseFullScreen || shouldUseFluidLayout) && !isFluidLayout) {
      toggleContainerClass();
    }
    
    // Set attribute on main content to help with styling
    const mainContent = document.querySelector('main.flex-1');
    if (mainContent && !isFluidLayout) {
      mainContent.setAttribute('data-app-view', 'default');
    } else if (mainContent && isFluidLayout) {
      mainContent.setAttribute('data-app-view', 'projects-app');
    }
    
    // Calculate initial height
    calculateAppHeight();
    
    // Add resize listener
    window.addEventListener('resize', calculateAppHeight);
    
    return () => {
      window.removeEventListener('resize', calculateAppHeight);
    };
  }, [activeView, isFluidLayout]);
  
  // Generate deep link for current state
  const getDeepLink = (): string => {
    // Create a new URLSearchParams with the current parameters
    const params = new URLSearchParams(searchParams.toString());
    
    // Always include the current view
    params.set('view', activeView);
    
    // Include projectId if we're in tasks view
    const projectId = params.get('projectId');
    if (activeView !== 'tasks' && projectId) {
      params.delete('projectId');
    }
    
    // Build the full URL
    return `${window.location.origin}${pathname}?${params.toString()}`;
  };
  
  // Copy current URL to clipboard
  const copyDeepLink = () => {
    const url = getDeepLink();
    navigator.clipboard.writeText(url).then(
      () => {
        setShareTooltip('Link copied!');
        setTimeout(() => setShareTooltip(''), 2000);
      },
      () => {
        setShareTooltip('Failed to copy');
        setTimeout(() => setShareTooltip(''), 2000);
      }
    );
  };
  
  return (
    <div className={`projects-app-shell flex flex-col ${isFluidLayout ? 'h-full overflow-hidden' : ''}`}>
      {/* MS Project-like header with app title and quick actions */}
      <div className="projects-app-header bg-white border-b flex flex-col">
        {/* Ribbon tabs */}
        <div className="ribbon-tabs flex text-sm border-b">
          <button 
            className={`px-4 py-2 ${activeRibbonTab === 'file' ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-600' : 'hover:bg-gray-50'}`}
            onClick={() => setActiveRibbonTab('file')}
          >
            File
          </button>
          <button 
            className={`px-4 py-2 ${activeRibbonTab === 'task' ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-600' : 'hover:bg-gray-50'}`}
            onClick={() => setActiveRibbonTab('task')}
          >
            Task
          </button>
          <button 
            className={`px-4 py-2 ${activeRibbonTab === 'resource' ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-600' : 'hover:bg-gray-50'}`}
            onClick={() => setActiveRibbonTab('resource')}
          >
            Resource
          </button>
          <button 
            className={`px-4 py-2 ${activeRibbonTab === 'report' ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-600' : 'hover:bg-gray-50'}`}
            onClick={() => setActiveRibbonTab('report')}
          >
            Report
          </button>
          <button 
            className={`px-4 py-2 ${activeRibbonTab === 'view' ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-600' : 'hover:bg-gray-50'}`}
            onClick={() => setActiveRibbonTab('view')}
          >
            View
          </button>
        </div>
        
        {/* Ribbon content based on active tab */}
        <div className="ribbon-content p-1 border-b flex items-center bg-gray-50">
          {activeRibbonTab === 'file' && (
            <div className="flex items-center space-x-4">
              <div className="ribbon-group px-2 border-r">
                <button className="flex flex-col items-center p-1 text-sm hover:bg-gray-200 rounded">
                  <span className="material-icons-outlined">add</span>
                  <span className="text-xs">New</span>
                </button>
              </div>
              <div className="ribbon-group px-2 border-r flex space-x-1">
                <button className="flex flex-col items-center p-1 text-sm hover:bg-gray-200 rounded">
                  <span className="material-icons-outlined">save</span>
                  <span className="text-xs">Save</span>
                </button>
                <button className="flex flex-col items-center p-1 text-sm hover:bg-gray-200 rounded">
                  <span className="material-icons-outlined">print</span>
                  <span className="text-xs">Print</span>
                </button>
              </div>
              <div className="ribbon-group px-2 border-r flex space-x-1">
                <button className="flex flex-col items-center p-1 text-sm hover:bg-gray-200 rounded">
                  <span className="material-icons-outlined">share</span>
                  <span className="text-xs">Share</span>
                </button>
                <button className="flex flex-col items-center p-1 text-sm hover:bg-gray-200 rounded" onClick={copyDeepLink}>
                  <span className="material-icons-outlined">link</span>
                  <span className="text-xs">Copy Link</span>
                </button>
              </div>
              <div className="ribbon-group px-2 flex space-x-1">
                <button className="flex flex-col items-center p-1 text-sm hover:bg-gray-200 rounded">
                  <span className="material-icons-outlined">undo</span>
                  <span className="text-xs">Undo</span>
                </button>
                <button className="flex flex-col items-center p-1 text-sm hover:bg-gray-200 rounded">
                  <span className="material-icons-outlined">redo</span>
                  <span className="text-xs">Redo</span>
                </button>
              </div>
            </div>
          )}
          
          {activeRibbonTab === 'task' && (
            <div className="flex items-center space-x-4">
              <div className="ribbon-group px-2 border-r flex space-x-1">
                <button className="flex flex-col items-center p-1 text-sm hover:bg-gray-200 rounded">
                  <span className="material-icons-outlined">add_task</span>
                  <span className="text-xs">Add Task</span>
                </button>
                <button className="flex flex-col items-center p-1 text-sm hover:bg-gray-200 rounded">
                  <span className="material-icons-outlined">link</span>
                  <span className="text-xs">Link</span>
                </button>
              </div>
              <div className="ribbon-group px-2 border-r flex space-x-1">
                <button className="flex flex-col items-center p-1 text-sm hover:bg-gray-200 rounded">
                  <span className="material-icons-outlined">check_circle</span>
                  <span className="text-xs">Mark Complete</span>
                </button>
                <button className="flex flex-col items-center p-1 text-sm hover:bg-gray-200 rounded">
                  <span className="material-icons-outlined">schedule</span>
                  <span className="text-xs">Reschedule</span>
                </button>
              </div>
            </div>
          )}
          
          {activeRibbonTab === 'view' && (
            <div className="flex items-center space-x-4">
              <div className="ribbon-group px-2 border-r flex space-x-1">
                <button 
                  className={`flex flex-col items-center p-1 text-sm rounded ${activeView === 'projects' ? 'bg-blue-100' : 'hover:bg-gray-200'}`}
                  onClick={() => handleViewChange('projects')}
                >
                  <span className="material-icons-outlined">dashboard</span>
                  <span className="text-xs">Projects</span>
                </button>
                <button 
                  className={`flex flex-col items-center p-1 text-sm rounded ${activeView === 'tasks' ? 'bg-blue-100' : 'hover:bg-gray-200'}`}
                  onClick={() => handleViewChange('tasks')}
                >
                  <span className="material-icons-outlined">assignment</span>
                  <span className="text-xs">Tasks</span>
                </button>
                <button 
                  className={`flex flex-col items-center p-1 text-sm rounded ${activeView === 'gantt' ? 'bg-blue-100' : 'hover:bg-gray-200'}`}
                  onClick={() => handleViewChange('gantt')}
                >
                  <span className="material-icons-outlined">stacked_bar_chart</span>
                  <span className="text-xs">Gantt</span>
                </button>
                <button 
                  className={`flex flex-col items-center p-1 text-sm rounded ${activeView === 'board' ? 'bg-blue-100' : 'hover:bg-gray-200'}`}
                  onClick={() => handleViewChange('board')}
                >
                  <span className="material-icons-outlined">view_kanban</span>
                  <span className="text-xs">Board</span>
                </button>
                <button 
                  className={`flex flex-col items-center p-1 text-sm rounded ${activeView === 'calendar' ? 'bg-blue-100' : 'hover:bg-gray-200'}`}
                  onClick={() => handleViewChange('calendar')}
                >
                  <span className="material-icons-outlined">calendar_today</span>
                  <span className="text-xs">Calendar</span>
                </button>
              </div>
              <div className="ribbon-group px-2 border-r flex space-x-1">
                <button className="flex flex-col items-center p-1 text-sm hover:bg-gray-200 rounded">
                  <span className="material-icons-outlined">zoom_in</span>
                  <span className="text-xs">Zoom In</span>
                </button>
                <button className="flex flex-col items-center p-1 text-sm hover:bg-gray-200 rounded">
                  <span className="material-icons-outlined">zoom_out</span>
                  <span className="text-xs">Zoom Out</span>
                </button>
              </div>
            </div>
          )}
          
          {(activeRibbonTab === 'resource' || activeRibbonTab === 'report') && (
            <div className="p-2 text-sm text-gray-500">
              Features coming soon...
            </div>
          )}
        </div>
        
      </div>
      
      {/* App content area with dynamic height calculation */}
      <div 
        className={`projects-app-content ${isFluidLayout ? 'overflow-hidden' : 'flex-1 overflow-auto'}`}
        style={isFluidLayout ? { height: 'calc(100vh - 172px)' } : { height: appHeight ? `${appHeight}px` : 'auto' }}
      >
        {children}
      </div>
    </div>
  );
}

export default AppShell; 