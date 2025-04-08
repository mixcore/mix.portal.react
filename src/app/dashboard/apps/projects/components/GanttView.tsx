'use client';

import React, { useState, useEffect, useRef } from 'react';
import useContainerStatus from '../hooks/useContainerStatus';
import { getAppConfig } from '../app-loader';

export interface GanttTask {
  id: string;
  name: string;
  startDate: Date;
  endDate: Date;
  progress: number;
  dependencies?: string[];
  assignedTo?: string;
  isMilestone?: boolean;
  isCritical?: boolean;
}

interface GanttViewProps {
  tasks: GanttTask[];
  startDate: Date;
  endDate: Date;
}

const VIEW_MODES = ['Day', 'Week', 'Month'] as const;
type ViewMode = typeof VIEW_MODES[number];

export function GanttView({ tasks, startDate, endDate }: GanttViewProps) {
  const appConfig = getAppConfig();
  const defaultViewMode = appConfig.settings.ganttDefaultView as ViewMode || 'Day';
  
  // Get default fullscreen setting from config
  const defaultFullScreen = appConfig.settings.enableFullScreenByDefault || false;
  
  const [isFullScreen, setIsFullScreen] = useState(defaultFullScreen);
  const [zoomLevel, setZoomLevel] = useState(100); // Percentage zoom
  const isFluidLayout = useContainerStatus();
  const [viewMode, setViewMode] = useState<ViewMode>(defaultViewMode);
  const [showCriticalPath, setShowCriticalPath] = useState(false);
  const [showDependencies, setShowDependencies] = useState(true);
  const [splitView, setSplitView] = useState(false);
  const [containerHeight, setContainerHeight] = useState(0);
  const ganttContainerRef = useRef<HTMLDivElement>(null);
  
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
  
  // Generate week ranges for week mode
  const weekRanges = dateRange.reduce((acc: {start: Date, end: Date}[], date, index) => {
    if (index === 0 || date.getDay() === 0) { // Sunday or first day
      acc.push({ start: date, end: new Date(date) });
    } else {
      acc[acc.length - 1].end = date;
    }
    return acc;
  }, []);
  
  // Generate month ranges
  const monthRanges = dateRange.reduce((acc: {month: string, days: number}[], date) => {
    const monthYear = date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    const existingMonth = acc.find(m => m.month === monthYear);
    
    if (existingMonth) {
      existingMonth.days += 1;
    } else {
      acc.push({ month: monthYear, days: 1 });
    }
    
    return acc;
  }, []);
  
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
  
  // Calculate and update the container height
  const updateContainerHeight = () => {
    if (ganttContainerRef.current) {
      const parent = ganttContainerRef.current.parentElement;
      if (parent) {
        // Consider the toolbar height (~50px) when calculating available height
        const availableHeight = parent.clientHeight - 50;
        setContainerHeight(Math.max(availableHeight, 200)); // Set minimum height
      }
    }
  };
  
  // Draw dependency lines
  const renderDependencyLines = () => {
    if (!showDependencies) return null;
    
    return tasks.map(task => {
      if (!task.dependencies?.length) return null;
      
      return task.dependencies.map(depId => {
        const dependencyTask = tasks.find(t => t.id === depId);
        if (!dependencyTask) return null;
        
        // Find task positions
        const sourceTaskStyle = getTaskBarStyles(dependencyTask);
        const targetTaskStyle = getTaskBarStyles(task);
        
        // Calculate source and target points for the arrow
        const sourceRight = parseFloat(sourceTaskStyle.left) + parseFloat(sourceTaskStyle.width);
        const targetLeft = parseFloat(targetTaskStyle.left);
        
        if (sourceRight >= targetLeft) return null; // Ignore invalid dependencies
        
        // Draw an SVG path
        const path = `M${sourceRight}% 50% L${targetLeft}% 50%`;
        
        return (
          <svg 
            key={`${depId}-${task.id}`} 
            className="absolute inset-0 pointer-events-none" 
            style={{ zIndex: 1 }}
          >
            <path 
              d={path} 
              stroke={task.isCritical ? "red" : "#999"} 
              strokeWidth="1" 
              strokeDasharray={task.isCritical ? "0" : "4 2"} 
              fill="none" 
              markerEnd="url(#arrowhead)" 
            />
            {/* Arrow marker definition */}
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill={task.isCritical ? "red" : "#999"} />
              </marker>
            </defs>
          </svg>
        );
      });
    });
  };
  
  // Apply fullscreen effect and handle resize
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullScreen) {
        setIsFullScreen(false);
      }
    };
    
    const handleResize = () => {
      updateContainerHeight();
    };
    
    document.addEventListener('keydown', handleEsc);
    window.addEventListener('resize', handleResize);
    
    // Apply body styles when fullscreen
    if (isFullScreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    // Initial height calculation
    updateContainerHeight();
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = '';
    };
  }, [isFullScreen]);
  
  // Update container height when layout mode changes
  useEffect(() => {
    updateContainerHeight();
  }, [isFluidLayout]);
  
  // Update container when full-width default changes
  useEffect(() => {
    // Set isFullScreen based on config the first time
    if (defaultFullScreen && !isFullScreen) {
      setIsFullScreen(true);
    }
    updateContainerHeight();
  }, []);
  
  // Render task row
  const renderTaskRow = (task: GanttTask) => {
    const barStyles = getTaskBarStyles(task);
    const barClasses = task.isMilestone 
      ? "absolute top-3 h-4 w-4 bg-purple-600 rotate-45 transform -translate-x-2 -translate-y-2" 
      : task.isCritical && showCriticalPath
        ? "absolute top-1 h-8 bg-red-500 rounded opacity-90 task-bar"
        : "absolute top-1 h-8 bg-blue-500 rounded opacity-90 task-bar";
    
    return (
      <div key={task.id} className="task-row flex border-b hover:bg-gray-50">
        {/* Task details area */}
        <div className="task-name-column w-96 min-w-96 flex-shrink-0 p-2 border-r flex items-center">
          <div className="flex items-center w-full">
            <div className="w-5 flex justify-center mr-1">
              {task.isMilestone ? (
                <span className="material-icons-outlined text-purple-600 text-sm">diamond</span>
              ) : (
                <span className="w-3 h-3 block rounded-sm border border-gray-400"></span>
              )}
            </div>
            <div className="flex-1 flex items-center justify-between">
              <div className={`truncate ${task.isCritical && showCriticalPath ? 'text-red-600 font-medium' : ''}`}>
                {task.name}
              </div>
              <div className="flex items-center space-x-1">
                {task.assignedTo && (
                  <div className="h-5 w-5 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold">
                    {task.assignedTo.slice(0, 2).toUpperCase()}
                  </div>
                )}
                {task.dependencies?.length ? (
                  <span className="material-icons-outlined text-gray-400 text-sm">link</span>
                ) : null}
                {task.isCritical && (
                  <span className="material-icons-outlined text-red-500 text-sm" title="Critical Path">priority_high</span>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Timeline area */}
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
          
          {/* Timeline grid lines for weeks or months */}
          {viewMode === 'Week' && weekRanges.map((week, i) => {
            const startIdx = dateRange.findIndex(d => d.getTime() === week.start.getTime());
            const weekWidth = ((week.end.getTime() - week.start.getTime()) / (1000 * 60 * 60 * 24) + 1) / totalDays * 100;
            
            return (
              <div 
                key={`week-${i}`} 
                className="absolute h-full border-l border-gray-300"
                style={{
                  left: `${(startIdx / totalDays) * 100}%`,
                  width: `${weekWidth}%`,
                  borderRight: i === weekRanges.length - 1 ? '1px solid #d1d5db' : 'none'
                }}
              />
            );
          })}
          
          {/* Task visualization */}
          {task.isMilestone ? (
            <div 
              className={barClasses}
              style={{ left: barStyles.left }}
            />
          ) : (
            <div 
              className={barClasses}
              style={barStyles}
            >
              <div className="h-full flex items-center px-2 overflow-hidden text-white text-xs">
                <span className="truncate">{task.name}</span>
              </div>
              {/* Progress overlay */}
              <div 
                className="absolute top-0 left-0 h-full bg-opacity-70 rounded-l"
                style={{ 
                  width: `${task.progress}%`, 
                  backgroundColor: task.isCritical && showCriticalPath ? '#b91c1c' : '#1d4ed8' 
                }}
              />
            </div>
          )}
        </div>
      </div>
    );
  };
  
  return (
    <div 
      ref={ganttContainerRef}
      className={`gantt-view-wrapper ${isFullScreen ? 'fixed inset-0 z-50 bg-white' : 'h-full flex flex-col'}`}
    >
      {/* Enhanced MS Project-like toolbar */}
      <div className="gantt-toolbar flex items-center justify-between bg-gray-100 border-b p-2">
        <div className="left-controls flex items-center space-x-2">
          <button 
            onClick={toggleFullScreen}
            className="px-2 py-1 text-sm bg-white border rounded hover:bg-gray-50 flex items-center"
          >
            <span className="material-icons-outlined text-sm mr-1">
              {isFullScreen ? 'fullscreen_exit' : 'fullscreen'}
            </span>
            {isFullScreen ? 'Exit' : 'Full Screen'}
          </button>
          
          <div className="border-l h-6 mx-1"></div>
          
          {/* View mode selector */}
          <div className="flex items-center space-x-1 border rounded bg-white">
            {VIEW_MODES.map(mode => (
              <button
                key={mode}
                className={`px-2 py-1 text-xs ${viewMode === mode ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-100'}`}
                onClick={() => setViewMode(mode)}
              >
                {mode}
              </button>
            ))}
          </div>
          
          <div className="border-l h-6 mx-1"></div>
          
          {/* Zoom controls */}
          <div className="zoom-controls flex items-center space-x-1 bg-white border rounded px-1">
            <button 
              onClick={() => handleZoom(false)}
              className="p-1 rounded hover:bg-gray-200" 
              disabled={zoomLevel <= 50}
              title="Zoom Out"
            >
              <span className="material-icons-outlined text-sm">remove</span>
            </button>
            <span className="text-xs font-medium px-1">{zoomLevel}%</span>
            <button 
              onClick={() => handleZoom(true)}
              className="p-1 rounded hover:bg-gray-200" 
              disabled={zoomLevel >= 200}
              title="Zoom In"
            >
              <span className="material-icons-outlined text-sm">add</span>
            </button>
          </div>
          
          <div className="border-l h-6 mx-1"></div>
          
          {/* Visibility toggles */}
          <div className="flex items-center space-x-1">
            <button 
              className={`px-2 py-1 text-xs ${showCriticalPath ? 'bg-red-50 text-red-700 border border-red-200' : 'bg-white border'} rounded flex items-center`}
              onClick={() => setShowCriticalPath(!showCriticalPath)}
              title="Toggle Critical Path"
            >
              <span className="material-icons-outlined text-xs mr-1">priority_high</span>
              Critical Path
            </button>
            <button 
              className={`px-2 py-1 text-xs ${showDependencies ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'bg-white border'} rounded flex items-center`}
              onClick={() => setShowDependencies(!showDependencies)}
              title="Toggle Dependencies"
            >
              <span className="material-icons-outlined text-xs mr-1">timeline</span>
              Links
            </button>
            <button 
              className={`px-2 py-1 text-xs ${splitView ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'bg-white border'} rounded flex items-center`}
              onClick={() => setSplitView(!splitView)}
              title="Toggle Split View"
            >
              <span className="material-icons-outlined text-xs mr-1">vertical_split</span>
              Split
            </button>
          </div>
        </div>
        
        <div className="right-controls flex items-center space-x-2">
          <div className="date-selector bg-white border rounded flex items-center">
            <button className="p-1 hover:bg-gray-100">
              <span className="material-icons-outlined text-sm">chevron_left</span>
            </button>
            <span className="text-sm px-2">{startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}</span>
            <button className="p-1 hover:bg-gray-100">
              <span className="material-icons-outlined text-sm">chevron_right</span>
            </button>
          </div>
          <select className="text-xs border rounded py-1 px-2 bg-white">
            <option>Today</option>
            <option>This Week</option>
            <option>This Month</option>
            <option>Custom Range</option>
          </select>
          <button className="px-2 py-1 text-xs bg-white border rounded hover:bg-gray-50 flex items-center">
            <span className="material-icons-outlined text-xs mr-1">file_download</span>
            Export
          </button>
        </div>
      </div>
      
      <div 
        className="gantt-view overflow-x-auto flex-1"
        style={{ height: isFullScreen ? 'calc(100vh - 90px)' : containerHeight ? `${containerHeight}px` : '300px' }}
      >
        <div className="gantt-container min-w-full h-full" style={{ fontSize: `${zoomLevel}%` }}>
          {/* Enhanced timeline header with multiple levels (MS Project style) */}
          <div className="timeline-header sticky top-0 bg-white z-10 border-b">
            {/* Month header for Month view */}
            {viewMode !== 'Day' && (
              <div className="flex border-b">
                <div className="w-96 min-w-96 flex-shrink-0 border-r bg-gray-50">
                  <div className="px-3 py-1 font-medium text-xs">Task Name</div>
                </div>
                <div className="flex-grow flex">
                  {viewMode === 'Month' ? (
                    monthRanges.map((month, i) => (
                      <div 
                        key={`month-${i}`} 
                        className="border-r text-center font-medium text-xs py-1 bg-gray-50"
                        style={{ width: `${(month.days / totalDays) * 100}%` }}
                      >
                        {month.month}
                      </div>
                    ))
                  ) : (
                    weekRanges.map((week, i) => {
                      const startDate = week.start.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
                      const endDate = week.end.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
                      const weekWidth = ((week.end.getTime() - week.start.getTime()) / (1000 * 60 * 60 * 24) + 1) / totalDays * 100;
                      
                      return (
                        <div 
                          key={`week-header-${i}`} 
                          className="border-r text-center font-medium text-xs py-1 bg-gray-50"
                          style={{ width: `${weekWidth}%` }}
                        >
                          {`${startDate} - ${endDate}`}
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            )}
            
            {/* Day header always shown */}
            <div className="flex">
              <div className="w-96 min-w-96 flex-shrink-0 p-2 border-r bg-gray-50 flex items-center">
                <div className="w-5 mr-1"></div>
                <div className="text-xs text-gray-600 font-medium">Task</div>
              </div>
              <div className="timeline-column flex-grow overflow-hidden">
                <div className="flex">
                  {dateRange.map((date, index) => (
                    <div 
                      key={index} 
                      className={`date-header flex-1 text-center py-1 text-xs border-r ${date.getDay() === 0 || date.getDay() === 6 ? 'bg-gray-100' : 'bg-white'}`}
                    >
                      {date.getDate()}
                      {viewMode === 'Day' && (
                        <div className="text-gray-500 text-[10px]">{date.toLocaleDateString('en-US', { weekday: 'short' })}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Task rows with timeline */}
          <div 
            className="task-rows overflow-y-auto relative" 
            style={{ height: isFullScreen ? 'calc(100% - 70px)' : 'calc(100% - 70px)' }}
          >
            {/* Task grid with dependency lines */}
            <div className="relative">
              {showDependencies && renderDependencyLines()}
              {tasks.map(task => renderTaskRow(task))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Full screen mode footer status bar */}
      {isFullScreen && (
        <div className="gantt-footer border-t bg-gray-50 p-2 text-xs text-gray-600 flex justify-between">
          <div>Tasks: {tasks.length} • Critical Tasks: {tasks.filter(t => t.isCritical).length} • Date Range: {startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}</div>
          <div>Press ESC to exit full screen</div>
        </div>
      )}
    </div>
  );
}

export default GanttView; 