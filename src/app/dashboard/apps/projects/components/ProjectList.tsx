'use client';

import React, { useState } from 'react';
import { ProjectData } from '../lib/types';

export interface ProjectListProps {
  projects: ProjectData[];
  onProjectClick: (projectId: string) => void;
}

const ProjectList: React.FC<ProjectListProps> = ({ projects, onProjectClick }) => {
  const [sortBy, setSortBy] = useState<'name' | 'dueDate' | 'progress' | 'status'>('dueDate');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [selectedRow, setSelectedRow] = useState<string | null>(null);
  
  // Handle sort toggle
  const handleSort = (column: 'name' | 'dueDate' | 'progress' | 'status') => {
    if (sortBy === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortDirection('asc');
    }
  };
  
  // Sort projects based on current sorting criteria
  const sortedProjects = [...projects].sort((a, b) => {
    let comparison = 0;
    
    switch (sortBy) {
      case 'name':
        comparison = a.name.localeCompare(b.name);
        break;
      case 'dueDate':
        comparison = new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
        break;
      case 'progress':
        comparison = a.progress - b.progress;
        break;
      case 'status':
        comparison = a.status.localeCompare(b.status);
        break;
    }
    
    return sortDirection === 'asc' ? comparison : -comparison;
  });
  
  // Calculate days remaining for a project
  const getDaysRemaining = (dueDate: string) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };
  
  // Get appropriate status colors and indicators
  const getStatusInfo = (status: string, daysRemaining: number) => {
    let statusColor = 'bg-gray-200 text-gray-800';
    let indicator = '';
    
    switch (status.toLowerCase()) {
      case 'on track':
        statusColor = 'bg-green-100 text-green-800';
        indicator = '●';
        break;
      case 'at risk':
        statusColor = 'bg-yellow-100 text-yellow-800';
        indicator = '▲';
        break;
      case 'delayed':
        statusColor = 'bg-red-100 text-red-800';
        indicator = '■';
        break;
      case 'completed':
        statusColor = 'bg-blue-100 text-blue-800';
        indicator = '✓';
        break;
    }
    
    // Override status color if due date is very close
    if (daysRemaining < 0 && status.toLowerCase() !== 'completed') {
      statusColor = 'bg-red-100 text-red-800';
    } else if (daysRemaining <= 3 && status.toLowerCase() !== 'completed') {
      statusColor = 'bg-yellow-100 text-yellow-800';
    }
    
    return { statusColor, indicator };
  };
  
  return (
    <div className="project-list-container bg-white shadow overflow-hidden mx-6">
      {/* Table header with sorting */}
      <div className="grid grid-cols-12 bg-gray-100 text-xs font-medium text-gray-600 border-b border-t">
        <div 
          className="col-span-4 p-3 cursor-pointer hover:bg-gray-200 flex items-center"
          onClick={() => handleSort('name')}
        >
          PROJECT NAME
          {sortBy === 'name' && (
            <span className="material-icons-outlined text-xs ml-1">
              {sortDirection === 'asc' ? 'arrow_upward' : 'arrow_downward'}
            </span>
          )}
        </div>
        <div 
          className="col-span-2 p-3 cursor-pointer hover:bg-gray-200 flex items-center"
          onClick={() => handleSort('dueDate')}
        >
          DUE DATE
          {sortBy === 'dueDate' && (
            <span className="material-icons-outlined text-xs ml-1">
              {sortDirection === 'asc' ? 'arrow_upward' : 'arrow_downward'}
            </span>
          )}
        </div>
        <div 
          className="col-span-2 p-3 cursor-pointer hover:bg-gray-200 flex items-center"
          onClick={() => handleSort('progress')}
        >
          PROGRESS
          {sortBy === 'progress' && (
            <span className="material-icons-outlined text-xs ml-1">
              {sortDirection === 'asc' ? 'arrow_upward' : 'arrow_downward'}
            </span>
          )}
        </div>
        <div 
          className="col-span-2 p-3 cursor-pointer hover:bg-gray-200 flex items-center"
          onClick={() => handleSort('status')}
        >
          STATUS
          {sortBy === 'status' && (
            <span className="material-icons-outlined text-xs ml-1">
              {sortDirection === 'asc' ? 'arrow_upward' : 'arrow_downward'}
            </span>
          )}
        </div>
        <div className="col-span-2 p-3">
          ACTIONS
        </div>
      </div>
      
      {/* Project rows */}
      <div className="divide-y">
        {sortedProjects.map(project => {
          const daysRemaining = getDaysRemaining(project.dueDate);
          const { statusColor, indicator } = getStatusInfo(project.status, daysRemaining);
          
          return (
            <div 
              key={project.id}
              className={`grid grid-cols-12 text-sm hover:bg-blue-50 transition-colors cursor-pointer ${selectedRow === project.id ? 'bg-blue-50 border-l-4 border-blue-500' : ''}`}
              onClick={() => {
                setSelectedRow(project.id);
                onProjectClick(project.id);
              }}
            >
              <div className="col-span-4 p-4 flex items-center">
                <div className="text-blue-800 font-medium flex items-center">
                  <span className="material-icons-outlined mr-3 text-gray-500">folder</span>
                  {project.name}
                </div>
              </div>
              <div className="col-span-2 p-4 flex items-center">
                <div className="flex flex-col">
                  <span>{project.dueDate}</span>
                  <span className={`text-xs mt-1 ${daysRemaining < 0 ? 'text-red-600 font-medium' : (daysRemaining <= 3 ? 'text-yellow-600' : 'text-gray-500')}`}>
                    {daysRemaining < 0 
                      ? `${Math.abs(daysRemaining)} days overdue` 
                      : daysRemaining === 0 
                        ? 'Due today'
                        : `${daysRemaining} days remaining`}
                  </span>
                </div>
              </div>
              <div className="col-span-2 p-4 flex items-center">
                <div className="w-full">
                  <div className="flex justify-between mb-1">
                    <span className="text-xs text-gray-600">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="col-span-2 p-4 flex items-center">
                <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColor}`}>
                  {indicator && <span className="mr-1">{indicator}</span>}
                  {project.status}
                </span>
              </div>
              <div className="col-span-2 p-4 flex items-center space-x-2">
                <button className="p-1 rounded-full hover:bg-gray-200" title="Edit project">
                  <span className="material-icons-outlined text-gray-500 text-sm">edit</span>
                </button>
                <button className="p-1 rounded-full hover:bg-gray-200" title="View tasks">
                  <span className="material-icons-outlined text-gray-500 text-sm">assignment</span>
                </button>
                <button className="p-1 rounded-full hover:bg-gray-200" title="View Gantt chart">
                  <span className="material-icons-outlined text-gray-500 text-sm">stacked_bar_chart</span>
                </button>
                <button className="p-1 rounded-full hover:bg-gray-200" title="More options">
                  <span className="material-icons-outlined text-gray-500 text-sm">more_vert</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Empty state */}
      {sortedProjects.length === 0 && (
        <div className="p-8 text-center">
          <div className="text-gray-400 material-icons-outlined text-4xl mb-2">folder_off</div>
          <p className="text-gray-500">No projects found</p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
            Create New Project
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectList; 