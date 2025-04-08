'use client';

import React, { useState } from 'react';
import AppShell from './layouts/AppShell';
import ProjectList from './components/ProjectList';
import Task from './components/Task';
import GanttView from './components/GanttView';
import { mockProjects, mockTasks, mockGanttTasks, ganttStartDate, ganttEndDate } from './lib/mockData';

type ViewType = 'projects' | 'tasks' | 'gantt' | 'calendar' | 'board';

export interface ProjectsAppProps {
  // Define app-specific props
}

export function ProjectsApp(props: ProjectsAppProps) {
  const [activeView, setActiveView] = useState<ViewType>('projects');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  
  // Handle project selection
  const handleProjectClick = (projectId: string) => {
    setSelectedProjectId(projectId);
    setActiveView('tasks');
  };
  
  // Handle view change
  const handleViewChange = (viewType: ViewType) => {
    setActiveView(viewType);
  };
  
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
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700">
                  + New Project
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-auto">
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
                  ← Projects
                </button>
                <h2 className="text-xl font-semibold">{selectedProject?.name || 'Project Tasks'}</h2>
              </div>
              
              <div className="flex justify-between items-center mb-6">
                <div className="text-sm text-gray-600">
                  {mockTasks.length} tasks · Due {selectedProject?.dueDate}
                </div>
                <div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700">
                    + Add Task
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
            <h2 className="text-xl font-semibold p-6 mb-2">Task Board</h2>
            <div className="flex-1 overflow-auto">
              <div className="flex gap-4 overflow-x-auto pb-4 px-6">
                {/* Not Started column */}
                <div className="board-column min-w-[320px] bg-white rounded-lg shadow max-h-full flex flex-col">
                  <div className="p-3 bg-gray-100 border-b font-medium sticky top-0">Not Started</div>
                  <div className="p-2 overflow-auto">
                    {mockTasks.filter(task => task.status === 'notStarted').map(task => (
                      <div key={task.id} className="bg-white p-3 mb-2 rounded border shadow-sm">
                        <div className="font-medium mb-2">{task.name}</div>
                        <div className="text-sm text-gray-600 mb-2">Due: {task.dueDate}</div>
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
                  <div className="p-3 bg-blue-50 border-b font-medium text-blue-800 sticky top-0">In Progress</div>
                  <div className="p-2 overflow-auto">
                    {mockTasks.filter(task => task.status === 'inProgress').map(task => (
                      <div key={task.id} className="bg-white p-3 mb-2 rounded border shadow-sm">
                        <div className="font-medium mb-2">{task.name}</div>
                        <div className="text-sm text-gray-600 mb-2">Due: {task.dueDate}</div>
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
                
                {/* Completed column */}
                <div className="board-column min-w-[320px] bg-white rounded-lg shadow max-h-full flex flex-col">
                  <div className="p-3 bg-green-50 border-b font-medium text-green-800 sticky top-0">Completed</div>
                  <div className="p-2 overflow-auto">
                    {mockTasks.filter(task => task.status === 'completed').map(task => (
                      <div key={task.id} className="bg-white p-3 mb-2 rounded border shadow-sm">
                        <div className="font-medium mb-2">{task.name}</div>
                        <div className="text-sm text-gray-600 mb-2">Due: {task.dueDate}</div>
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
              </div>
            </div>
          </div>
        );
        
      case 'calendar':
        return (
          <div className="calendar-view h-full overflow-hidden flex flex-col">
            <h2 className="text-xl font-semibold p-6 mb-4">Calendar View</h2>
            <div className="flex-1 flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <p className="text-gray-500">Calendar view is under development</p>
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
      {/* Navigation tabs */}
      <div className="projects-app-tabs px-6 py-3 bg-gray-50 border-b flex space-x-4">
        <button
          className={`px-3 py-1 rounded-md text-sm flex items-center ${activeView === 'projects' ? 'bg-white shadow text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`}
          onClick={() => handleViewChange('projects')}
        >
          <span className="material-icons-outlined text-sm mr-1">dashboard</span>
          Projects
        </button>
        <button
          className={`px-3 py-1 rounded-md text-sm flex items-center ${activeView === 'tasks' ? 'bg-white shadow text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`}
          onClick={() => selectedProjectId && handleViewChange('tasks')}
          disabled={!selectedProjectId}
        >
          <span className="material-icons-outlined text-sm mr-1">assignment</span>
          Tasks
        </button>
        <button
          className={`px-3 py-1 rounded-md text-sm flex items-center ${activeView === 'board' ? 'bg-white shadow text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`}
          onClick={() => handleViewChange('board')}
        >
          <span className="material-icons-outlined text-sm mr-1">view_kanban</span>
          Board
        </button>
        <button
          className={`px-3 py-1 rounded-md text-sm flex items-center ${activeView === 'gantt' ? 'bg-white shadow text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`}
          onClick={() => handleViewChange('gantt')}
        >
          <span className="material-icons-outlined text-sm mr-1">stacked_bar_chart</span>
          Gantt
        </button>
        <button
          className={`px-3 py-1 rounded-md text-sm flex items-center ${activeView === 'calendar' ? 'bg-white shadow text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`}
          onClick={() => handleViewChange('calendar')}
        >
          <span className="material-icons-outlined text-sm mr-1">calendar_today</span>
          Calendar
        </button>
      </div>
      
      {/* Main content area */}
      <div className="projects-app-main">
        {renderView()}
      </div>
    </AppShell>
  );
}

// Default export for dynamic import
export default ProjectsApp; 