'use client';

import React from 'react';

export interface Project {
  id: string;
  name: string;
  description: string;
  startDate: string;
  dueDate: string;
  progress: number;
  status: 'notStarted' | 'inProgress' | 'completed' | 'onHold';
  members: string[];
  tasksCount: {
    total: number;
    completed: number;
  };
}

interface ProjectListProps {
  projects: Project[];
  onProjectClick: (projectId: string) => void;
}

export function ProjectList({ projects, onProjectClick }: ProjectListProps) {
  // Status colors and labels
  const statusConfig = {
    notStarted: { color: 'bg-gray-100 text-gray-800', label: 'Not Started' },
    inProgress: { color: 'bg-blue-100 text-blue-800', label: 'In Progress' },
    completed: { color: 'bg-green-100 text-green-800', label: 'Completed' },
    onHold: { color: 'bg-yellow-100 text-yellow-800', label: 'On Hold' }
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 h-full overflow-auto">
      {projects.map(project => (
        <div
          key={project.id}
          className="project-card bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-200 cursor-pointer border flex flex-col"
          onClick={() => onProjectClick(project.id)}
        >
          <div className="p-4 border-b">
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-lg">{project.name}</h3>
              <span className={`text-xs px-2 py-1 rounded-full ${statusConfig[project.status].color}`}>
                {statusConfig[project.status].label}
              </span>
            </div>
            <p className="text-gray-600 text-sm mt-2">{project.description}</p>
          </div>
          
          <div className="p-4 flex-1 flex flex-col justify-between">
            <div>
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Progress</span>
                <span>{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full" 
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>
            
            <div className="flex justify-between items-center mt-4">
              <div className="text-sm text-gray-600">
                <div>Start: {project.startDate}</div>
                <div>Due: {project.dueDate}</div>
              </div>
              
              <div className="text-sm">
                <div className="text-gray-600">
                  Tasks: {project.tasksCount.completed}/{project.tasksCount.total}
                </div>
                <div className="flex -space-x-2 mt-1">
                  {project.members.slice(0, 3).map((member, index) => (
                    <div 
                      key={index} 
                      className="h-8 w-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold border-2 border-white"
                    >
                      {member.slice(0, 2).toUpperCase()}
                    </div>
                  ))}
                  {project.members.length > 3 && (
                    <div className="h-8 w-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-xs font-bold border-2 border-white">
                      +{project.members.length - 3}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectList; 