'use client';

import React, { useState, useEffect } from 'react';
import useContainerStatus from '../hooks/useContainerStatus';
import { getAppConfig } from '../app-loader';

interface AppShellProps {
  children: React.ReactNode;
  activeView?: 'projects' | 'tasks' | 'gantt' | 'calendar' | 'board';
  onViewChange?: (view: 'projects' | 'tasks' | 'gantt' | 'calendar' | 'board') => void;
}

export function AppShell({ 
  children, 
  activeView = 'projects', 
  onViewChange 
}: AppShellProps) {
  const isFluidLayout = useContainerStatus();
  const [activeRibbonTab, setActiveRibbonTab] = useState('file');
  const [appHeight, setAppHeight] = useState(0);
  const appConfig = getAppConfig();
  
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
  
  return (
    <div className={`projects-app-shell flex flex-col ${isFluidLayout ? 'h-full overflow-hidden' : ''}`}>
      {/* MS Project-like header with app title and quick actions */}
      <div className="projects-app-header bg-white border-b flex flex-col">
        {/* Title bar with app name and controls */}
        <div className="flex items-center justify-between p-2 border-b">
          <div className="flex items-center">
            <span className="material-icons-outlined mr-2 text-blue-600">space_dashboard</span>
            <h1 className="text-lg font-semibold">Mixcore Projects</h1>
          </div>
          <div className="flex items-center space-x-2">
            <button 
              className={`text-sm px-3 py-1 rounded-md flex items-center ${isFluidLayout ? 'bg-amber-100 text-amber-800 hover:bg-amber-200' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              onClick={toggleContainerClass}
            >
              <span className="material-icons-outlined text-sm mr-1">{isFluidLayout ? 'width_normal' : 'width_full'}</span>
              {isFluidLayout ? 'Normal View' : 'Full Screen'}
            </button>
          </div>
        </div>
        
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
        
        {/* View selector tabs - making them smaller and more integrated with the ribbon */}
        <div className="view-tabs bg-white text-sm flex">
          {activeView !== 'projects' && (
            <button 
              className="px-3 py-1 border-r border-b text-blue-700 hover:bg-blue-50 flex items-center"
              onClick={() => handleViewChange('projects')}
            >
              <span className="material-icons-outlined text-sm mr-1">arrow_back</span>
              All Projects
            </button>
          )}
          <div className="px-3 py-1 border-r border-b text-gray-500 flex items-center">
            <span className="material-icons-outlined text-sm mr-1">folder</span>
            {activeView === 'projects' ? 'All Projects' : activeView === 'tasks' ? 'Task List' : activeView === 'gantt' ? 'Timeline' : activeView === 'board' ? 'Board View' : 'Calendar'}
          </div>
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