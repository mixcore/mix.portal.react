'use client';

import React, { useState, useEffect } from 'react';
import AppShell from './layouts/AppShell';
import ProjectList from './components/ProjectList';
import Task from './components/Task';
import GanttView from './components/GanttView';
import { mockProjects, mockTasks, mockGanttTasks, ganttStartDate, ganttEndDate } from './lib/mockData';
import useContainerStatus from './hooks/useContainerStatus';
import './app-globals.css'; // Import app-specific styles
import { initializeApp, getAppConfig } from './app-loader';

type ViewType = 'projects' | 'tasks' | 'gantt' | 'calendar' | 'board';

export interface ProjectsAppProps {
  // Define app-specific props
}

export function ProjectsApp(props: ProjectsAppProps) {
  // Get app config
  const appConfig = getAppConfig();
  
  // Set initial view from config
  const initialView = appConfig.settings.enableFullScreenByDefault ? 'gantt' : 'projects';
  
  const [activeView, setActiveView] = useState<ViewType>(initialView as ViewType);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const isFluidLayout = useContainerStatus();
  const [isInitialized, setIsInitialized] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  
  // Initialize app if needed
  useEffect(() => {
    const appInitKey = 'mixcore_projects_initialized';
    const isAppInitialized = localStorage.getItem(appInitKey) === 'true';
    
    const handleInitialization = async () => {
      // If already initialized or currently initializing, skip
      if (isAppInitialized || isLoading) return;
      
      try {
        setIsLoading(true);
        const success = await initializeApp();
        
        if (success) {
          localStorage.setItem(appInitKey, 'true');
          setIsInitialized(true);
        } else {
          setIsInitialized(false);
          // Only clear initialization flag in development to allow retries
          if (process.env.NODE_ENV === 'development') {
            localStorage.removeItem(appInitKey);
          }
        }
      } catch (error) {
        console.error('Error during app initialization:', error);
        setIsInitialized(false);
        // Only clear initialization flag in development to allow retries
        if (process.env.NODE_ENV === 'development') {
          localStorage.removeItem(appInitKey);
        }
      } finally {
        setIsLoading(false);
      }
    };
    
    // Handle initial load
    handleInitialization();
    
    // Clean up (if the component unmounts during initialization)
    return () => {
      if (isLoading) {
        console.log('Initialization interrupted: component unmounted');
      }
    };
  }, [isLoading]);
  
  // Handle project selection
  const handleProjectClick = (projectId: string) => {
    setSelectedProjectId(projectId);
    setActiveView('tasks');
  };
  
  // Handle view change
  const handleViewChange = (viewType: ViewType) => {
    setActiveView(viewType);
  };
  
  // Set body class for fluid layout when this app is active
  useEffect(() => {
    const body = document.body;
    const shouldUseFluidLayout = appConfig.ui.layout.fluid || isFluidLayout;
    
    if (shouldUseFluidLayout) {
      body.classList.add('projects-app-active');
    } else {
      body.classList.remove('projects-app-active');
    }
    
    return () => {
      body.classList.remove('projects-app-active');
    };
  }, [isFluidLayout, appConfig.ui.layout.fluid]);
  
  // Handle retry initialization
  const handleRetryInitialization = () => {
    localStorage.removeItem('mixcore_projects_initialized');
    setIsLoading(true);
    setIsInitialized(true);
  };
  
  // Show loading state while app is initializing
  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center bg-white p-4">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-gray-300 border-t-blue-600 mb-4"></div>
          <p className="text-gray-600">Initializing Projects app...</p>
        </div>
      </div>
    );
  }
  
  // Show error state if initialization failed
  if (!isInitialized) {
    return (
      <div className="h-full flex items-center justify-center bg-white p-4">
        <div className="text-center max-w-md">
          <div className="text-red-500 mb-4">
            <span className="material-icons-outlined text-4xl">error_outline</span>
          </div>
          <h3 className="text-lg font-medium text-red-800 mb-2">Initialization Error</h3>
          <p className="text-gray-600 mb-4">
            Failed to initialize the Projects app. This could be because the API endpoints are not yet available.
            {process.env.NODE_ENV === 'development' && (
              <span className="block mt-2 text-sm">
                Note: In development mode, we're simulating initialization. The actual API endpoints will be implemented soon.
              </span>
            )}
          </p>
          <button 
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={handleRetryInitialization}
          >
            Retry
          </button>
          {process.env.NODE_ENV === 'development' && (
            <button 
              className="px-4 py-2 ml-2 bg-green-600 text-white rounded hover:bg-green-700"
              onClick={() => {
                localStorage.setItem('mixcore_projects_initialized', 'true');
                setIsInitialized(true);
              }}
            >
              Continue Anyway
            </button>
          )}
        </div>
      </div>
    );
  }
  
  // Render the currently selected view
  const renderView = () => {
    switch (activeView) {
      case 'projects':
        return (
          <div className="projects-view h-full overflow-hidden flex flex-col">
            <h2 className="text-xl font-semibold p-6 pb-2">All Projects</h2>
            <div className="flex justify-between items-center px-6 mb-4">
              <div className="text-sm text-gray-600">
                Showing {mockProjects.length} projects
              </div>
              <div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 flex items-center">
                  <span className="material-icons-outlined text-sm mr-1">add</span>
                  New Project
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-auto px-0">
              <ProjectList 
                projects={mockProjects} 
                onProjectClick={handleProjectClick} 
              />
            </div>
          </div>
        );
        
      case 'tasks':
        const selectedProject = mockProjects.find(p => p.id === selectedProjectId);
        return (
          <div className="tasks-view h-full overflow-hidden flex flex-col">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <button 
                  className="text-blue-600 mr-2" 
                  onClick={() => setActiveView('projects')}
                >
                  <span className="material-icons-outlined">arrow_back</span>
                </button>
                <h2 className="text-xl font-semibold">{selectedProject?.name || 'Project Tasks'}</h2>
              </div>
              
              <div className="flex justify-between items-center mb-6">
                <div className="text-sm text-gray-600">
                  {mockTasks.length} tasks · Due {selectedProject?.dueDate}
                </div>
                <div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 flex items-center">
                    <span className="material-icons-outlined text-sm mr-1">add_task</span>
                    Add Task
                  </button>
                </div>
              </div>
            </div>
            
            <div className="flex-1 overflow-auto">
              <div className="bg-white shadow overflow-hidden mx-6">
                <div className="px-4 py-2 bg-gray-50 border-b text-sm font-medium text-gray-600 flex justify-between">
                  <span>Task</span>
                  <span>Details</span>
                </div>
                <div className="task-list divide-y">
                  {mockTasks.map(task => (
                    <Task key={task.id} {...task} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
        
      case 'gantt':
        return (
          <div className="gantt-view-container h-full overflow-hidden">
            <div className="bg-white h-full overflow-hidden">
              <GanttView 
                tasks={mockGanttTasks}
                startDate={ganttStartDate}
                endDate={ganttEndDate}
              />
            </div>
          </div>
        );
        
      case 'board':
        return (
          <div className="board-view h-full overflow-hidden flex flex-col">
            <div className="p-6 flex justify-between items-center">
              <h2 className="text-xl font-semibold">Task Board</h2>
              <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-700 flex items-center">
                <span className="material-icons-outlined text-sm mr-1">add</span>
                New Task
              </button>
            </div>
            <div className="flex-1 overflow-auto">
              <div className="flex gap-4 overflow-x-auto pb-4 px-6 h-full">
                {/* Not Started column */}
                <div className="board-column min-w-[320px] bg-white rounded-lg shadow max-h-full flex flex-col">
                  <div className="p-3 bg-gray-50 border-b font-medium sticky top-0 flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="h-3 w-3 bg-gray-300 rounded-full mr-2"></span>
                      <span>Not Started</span>
                    </div>
                    <span className="text-xs text-gray-500 px-2 py-1 bg-gray-100 rounded">
                      {mockTasks.filter(task => task.status === 'notStarted').length}
                    </span>
                  </div>
                  <div className="p-2 overflow-auto flex-1">
                    {mockTasks.filter(task => task.status === 'notStarted').map(task => (
                      <div key={task.id} className="bg-white p-3 mb-2 rounded border shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                        <div className="font-medium mb-2 flex items-center">
                          {task.name}
                          {task.priority === 'high' && <span className="ml-2 text-red-500 material-icons-outlined text-sm">priority_high</span>}
                        </div>
                        <div className="text-sm text-gray-600 mb-2 flex items-center">
                          <span className="material-icons-outlined text-xs mr-1">event</span>
                          {task.dueDate}
                        </div>
                        <div className="flex justify-between items-center">
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            task.priority === 'high' ? 'bg-red-100 text-red-800' : 
                            task.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' : 
                            'bg-green-100 text-green-800'
                          }`}>
                            {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                          </span>
                          {task.assignedTo && (
                            <div className="h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold">
                              {task.assignedTo.slice(0, 2).toUpperCase()}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* In Progress column */}
                <div className="board-column min-w-[320px] bg-white rounded-lg shadow max-h-full flex flex-col">
                  <div className="p-3 bg-blue-50 border-b font-medium text-blue-800 sticky top-0 flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="h-3 w-3 bg-blue-500 rounded-full mr-2"></span>
                      <span>In Progress</span>
                    </div>
                    <span className="text-xs text-blue-700 px-2 py-1 bg-blue-100 rounded">
                      {mockTasks.filter(task => task.status === 'inProgress').length}
                    </span>
                  </div>
                  <div className="p-2 overflow-auto flex-1">
                    {mockTasks.filter(task => task.status === 'inProgress').map(task => (
                      <div key={task.id} className="bg-white p-3 mb-2 rounded border shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                        <div className="font-medium mb-2 flex items-center">
                          {task.name}
                          {task.priority === 'high' && <span className="ml-2 text-red-500 material-icons-outlined text-sm">priority_high</span>}
                        </div>
                        <div className="text-sm text-gray-600 mb-2 flex items-center">
                          <span className="material-icons-outlined text-xs mr-1">event</span>
                          {task.dueDate}
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-xs text-gray-500">
                            {task.progress}% complete
                          </div>
                          {task.assignedTo && (
                            <div className="h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold">
                              {task.assignedTo.slice(0, 2).toUpperCase()}
                            </div>
                          )}
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1 mt-2">
                          <div 
                            className="bg-blue-600 h-1 rounded-full" 
                            style={{ width: `${task.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Completed column */}
                <div className="board-column min-w-[320px] bg-white rounded-lg shadow max-h-full flex flex-col">
                  <div className="p-3 bg-green-50 border-b font-medium text-green-800 sticky top-0 flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="h-3 w-3 bg-green-500 rounded-full mr-2"></span>
                      <span>Completed</span>
                    </div>
                    <span className="text-xs text-green-700 px-2 py-1 bg-green-100 rounded">
                      {mockTasks.filter(task => task.status === 'completed').length}
                    </span>
                  </div>
                  <div className="p-2 overflow-auto flex-1">
                    {mockTasks.filter(task => task.status === 'completed').map(task => (
                      <div key={task.id} className="bg-white p-3 mb-2 rounded border shadow-sm hover:shadow-md transition-shadow cursor-pointer opacity-80">
                        <div className="font-medium mb-2 flex items-center line-through text-gray-500">
                          {task.name}
                        </div>
                        <div className="text-sm text-gray-400 mb-2 flex items-center">
                          <span className="material-icons-outlined text-xs mr-1">event</span>
                          {task.dueDate}
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-800">
                            100% Complete
                          </span>
                          {task.assignedTo && (
                            <div className="h-6 w-6 rounded-full bg-gray-400 text-white flex items-center justify-center text-xs font-bold">
                              {task.assignedTo.slice(0, 2).toUpperCase()}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 'calendar':
        return (
          <div className="calendar-view h-full overflow-hidden flex flex-col">
            <div className="p-6 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Calendar View</h2>
              <div className="flex items-center space-x-2">
                <button className="border bg-white p-1 rounded hover:bg-gray-100">
                  <span className="material-icons-outlined">chevron_left</span>
                </button>
                <span className="text-sm font-medium">October 2023</span>
                <button className="border bg-white p-1 rounded hover:bg-gray-100">
                  <span className="material-icons-outlined">chevron_right</span>
                </button>
                <button className="border bg-white px-3 py-1 rounded text-sm hover:bg-gray-100 ml-2">
                  Today
                </button>
              </div>
            </div>
            <div className="flex-1 px-6 pb-6 overflow-auto">
              <div className="bg-white rounded-lg shadow h-full p-4 flex flex-col">
                <div className="grid grid-cols-7 gap-px bg-gray-200">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="bg-gray-50 font-medium text-sm p-2 text-center">
                      {day}
                    </div>
                  ))}
                </div>
                <div className="flex-1 grid grid-cols-7 grid-rows-5 gap-px bg-gray-200">
                  {Array.from({ length: 35 }).map((_, i) => {
                    // Simplified calendar logic
                    const dayNum = i - 6; // Offset for the month
                    const isCurrentMonth = dayNum > 0 && dayNum <= 31;
                    const isToday = dayNum === 15; // Just for demonstration
                    
                    return (
                      <div 
                        key={i} 
                        className={`bg-white p-1 ${isCurrentMonth ? '' : 'text-gray-400'} ${isToday ? 'ring-2 ring-blue-500 ring-inset' : ''}`}
                      >
                        <div className="text-xs p-1">{isCurrentMonth ? dayNum : (dayNum <= 0 ? 30 + dayNum : dayNum - 31)}</div>
                        {/* Task indicators for demo */}
                        {isCurrentMonth && dayNum >= 10 && dayNum <= 20 && i % 3 === 0 && (
                          <div className="text-xs p-1 bg-blue-50 border border-blue-200 rounded mt-1 truncate">
                            <div className="font-medium">Task {dayNum}</div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };
  
  return (
    <AppShell
      activeView={activeView}
      onViewChange={handleViewChange}
    >
      <div className="projects-app-main h-full">
        {renderView()}
      </div>
    </AppShell>
  );
}

// Default export for dynamic import
export default ProjectsApp; 