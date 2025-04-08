'use client';

import React, { useState, useEffect } from 'react';
import useContainerStatus from '../hooks/useContainerStatus';

export interface GanttTask {
  id: string;
  name: string;
  startDate: Date;
  endDate: Date;
  progress: number;
  dependencies?: string[];
  assignedTo?: string;
}

interface GanttViewProps {
  tasks: GanttTask[];
  startDate: Date;
  endDate: Date;
}

export function GanttView({ tasks, startDate, endDate }: GanttViewProps) {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(100); // Percentage zoom
  const isFluidLayout = useContainerStatus();
  
  // Calculate the total number of days in the view
  const totalDays = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
  
  // Generate array of dates for header
  const dateRange = Array.from({ length: totalDays }, (_, i) => {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);
    return date;
  });
  
  // Helper to format date for display
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };
  
  // Helper to calculate position and width for task bars
  const getTaskBarStyles = (task: GanttTask) => {
    const taskStartDiff = Math.max(0, (task.startDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    const taskDuration = Math.ceil((task.endDate.getTime() - task.startDate.getTime()) / (1000 * 60 * 60 * 24));
    
    return {
      left: `${(taskStartDiff / totalDays) * 100}%`,
      width: `${(taskDuration / totalDays) * 100}%`,
    };
  };
  
  // Handle fullscreen toggle
  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };
  
  // Handle zoom in/out
  const handleZoom = (zoomIn: boolean) => {
    setZoomLevel(prev => {
      const newZoom = zoomIn ? prev + 10 : prev - 10;
      return Math.min(Math.max(newZoom, 50), 200); // Limit zoom between 50% and 200%
    });
  };
  
  // Apply fullscreen effect
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullScreen) {
        setIsFullScreen(false);
      }
    };
    
    document.addEventListener('keydown', handleEsc);
    
    // Apply body styles when fullscreen
    if (isFullScreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    // Check if we're in a fluid container (parent toggled container class)
    const isContainerFluid = !document.querySelector('.dashboard-content')?.classList.contains('container');
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isFullScreen]);
  
  return (
    <div className={`gantt-view-wrapper h-full flex flex-col ${isFullScreen ? 'fixed inset-0 z-50 bg-white' : ''}`}>
      {/* Toolbar */}
      <div className="gantt-toolbar flex items-center justify-between bg-gray-100 border-b p-2">
        <div className="left-controls flex items-center space-x-2">
          <button 
            onClick={toggleFullScreen}
            className="px-2 py-1 text-sm bg-white border rounded hover:bg-gray-50 flex items-center"
          >
            <span className="material-icons-outlined text-sm mr-1">
              {isFullScreen ? 'fullscreen_exit' : 'fullscreen'}
            </span>
            {isFullScreen ? 'Exit Full Screen' : 'Full Screen'}
          </button>
          <div className="border-l h-6 mx-2"></div>
          <div className="zoom-controls flex items-center space-x-1">
            <button 
              onClick={() => handleZoom(false)}
              className="p-1 rounded hover:bg-gray-200" 
              disabled={zoomLevel <= 50}
            >
              <span className="material-icons-outlined text-sm">remove</span>
            </button>
            <span className="text-sm">{zoomLevel}%</span>
            <button 
              onClick={() => handleZoom(true)}
              className="p-1 rounded hover:bg-gray-200" 
              disabled={zoomLevel >= 200}
            >
              <span className="material-icons-outlined text-sm">add</span>
            </button>
          </div>
          
          {/* Container mode indicator */}
          {isFluidLayout && (
            <div className="ml-2 flex items-center">
              <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">Full Screen Mode</span>
            </div>
          )}
        </div>
        <div className="right-controls flex items-center space-x-2">
          <select className="text-sm border rounded p-1 bg-white">
            <option>Today</option>
            <option>This Week</option>
            <option>This Month</option>
            <option>This Quarter</option>
            <option>Custom Range</option>
          </select>
          <button className="px-2 py-1 text-sm bg-white border rounded hover:bg-gray-50">
            Export
          </button>
          <button className="px-2 py-1 text-sm bg-white border rounded hover:bg-gray-50">
            Print
          </button>
        </div>
      </div>
      
      <div className="gantt-view overflow-x-auto flex-1">
        <div className="gantt-container min-w-full h-full" style={{ fontSize: `${zoomLevel}%` }}>
          {/* Header with dates */}
          <div className="flex border-b sticky top-0 bg-white z-10">
            <div className="task-name-column w-64 min-w-64 flex-shrink-0 p-3 font-medium bg-gray-50 border-r">
              Task Name
            </div>
            <div className="timeline-column flex-grow overflow-hidden">
              <div className="flex">
                {dateRange.map((date, index) => (
                  <div 
                    key={index} 
                    className={`date-header flex-1 text-center py-2 text-xs border-r ${date.getDay() === 0 || date.getDay() === 6 ? 'bg-gray-100' : 'bg-white'}`}
                  >
                    {formatDate(date)}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Task rows */}
          <div className="task-rows overflow-y-auto" style={{ height: 'calc(100% - 40px)' }}>
            {tasks.map((task) => (
              <div key={task.id} className="task-row flex border-b hover:bg-gray-50">
                <div className="task-name-column w-64 min-w-64 flex-shrink-0 p-3 border-r truncate">
                  <div className="flex items-center">
                    <span>{task.name}</span>
                    {task.assignedTo && (
                      <div className="ml-2 h-5 w-5 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold">
                        {task.assignedTo.slice(0, 2).toUpperCase()}
                      </div>
                    )}
                  </div>
                </div>
                <div className="timeline-column flex-grow relative h-10">
                  {/* Timeline background */}
                  <div className="absolute inset-0 flex">
                    {dateRange.map((date, index) => (
                      <div 
                        key={index} 
                        className={`flex-1 border-r ${date.getDay() === 0 || date.getDay() === 6 ? 'bg-gray-100' : 'bg-white'}`}
                      />
                    ))}
                  </div>
                  
                  {/* Task bar */}
                  <div 
                    className="absolute top-1 h-8 bg-blue-500 rounded opacity-90 task-bar"
                    style={getTaskBarStyles(task)}
                  >
                    <div className="h-full flex items-center px-2 overflow-hidden text-white text-xs">
                      <span className="truncate">{task.name}</span>
                    </div>
                    {/* Progress overlay */}
                    <div 
                      className="absolute top-0 left-0 h-full bg-blue-700 rounded-l"
                      style={{ width: `${task.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Full screen mode footer status bar */}
      {isFullScreen && (
        <div className="gantt-footer border-t bg-gray-50 p-2 text-xs text-gray-600 flex justify-between">
          <div>Tasks: {tasks.length} • Date Range: {startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}</div>
          <div>Press ESC to exit full screen</div>
        </div>
      )}
    </div>
  );
}

export default GanttView; 