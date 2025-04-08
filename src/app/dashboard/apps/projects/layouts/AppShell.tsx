'use client';

import React, { useState, useEffect } from 'react';
import useContainerStatus from '../hooks/useContainerStatus';

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
  
  // Set initial layout when component mounts or activeView changes
  useEffect(() => {
    // Auto-enable full width for Gantt view
    if (activeView === 'gantt' && !isFluidLayout) {
      toggleContainerClass();
    }
    
    // Set attribute on main content to help with styling
    const mainContent = document.querySelector('main.flex-1');
    if (mainContent && !isFluidLayout) {
      mainContent.setAttribute('data-app-view', 'default');
    } else if (mainContent && isFluidLayout) {
      mainContent.setAttribute('data-app-view', 'projects-app');
    }
    
  }, [activeView, isFluidLayout]);
  
  return (
    <div className={`projects-app-shell flex flex-col ${isFluidLayout ? 'h-full overflow-hidden' : ''}`}>
      {/* Projects app-specific header elements */}
      <div className="projects-app-header border-b bg-white px-4 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl font-semibold text-blue-700">Projects</h1>
          <div className="ml-6 flex space-x-4">
            <button 
              className={`text-sm px-3 py-1 rounded ${activeView === 'tasks' ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-100'}`}
              onClick={() => handleViewChange('tasks')}
            >
              Timeline
            </button>
            <button 
              className={`text-sm px-3 py-1 rounded ${activeView === 'board' ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-100'}`}
              onClick={() => handleViewChange('board')}
            >
              Board
            </button>
            <button 
              className={`text-sm px-3 py-1 rounded ${activeView === 'gantt' ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-100'}`}
              onClick={() => handleViewChange('gantt')}
            >
              Gantt
            </button>
            <button 
              className={`text-sm px-3 py-1 rounded ${activeView === 'calendar' ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-100'}`}
              onClick={() => handleViewChange('calendar')}
            >
              Calendar
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button 
            className={`text-sm px-3 py-1 rounded-md flex items-center ${isFluidLayout ? 'bg-amber-100 text-amber-800 hover:bg-amber-200' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            onClick={toggleContainerClass}
          >
            <span className="material-icons-outlined text-sm mr-1">{isFluidLayout ? 'width_normal' : 'width_full'}</span>
            {isFluidLayout ? 'Contained View' : 'Full Width'}
          </button>
          <button className="text-sm px-3 py-1 bg-blue-50 text-blue-700 rounded-md hover:bg-blue-100 flex items-center">
            <span className="material-icons-outlined text-sm mr-1">share</span>
            Share
          </button>
          <button className="text-sm px-3 py-1 bg-blue-700 text-white rounded-md hover:bg-blue-800 flex items-center">
            <span className="material-icons-outlined text-sm mr-1">add</span>
            New Task
          </button>
        </div>
      </div>
      
      {/* App content area */}
      <div className={`projects-app-content ${isFluidLayout ? 'h-[calc(100vh-100px)]' : 'flex-1 overflow-auto'}`}>
        {children}
      </div>
    </div>
  );
}

export default AppShell; 