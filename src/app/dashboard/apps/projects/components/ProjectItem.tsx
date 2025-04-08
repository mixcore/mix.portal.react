import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, Users, Tag, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// User type for project owner and collaborators
export interface User {
  id: string;
  name: string;
  avatar: string;
}

// Project type definition 
export interface Project {
  id: string;
  title: string;
  description: string;
  status: 'active' | 'completed' | 'on_hold' | 'canceled';
  createdAt: string;
  updatedAt: string;
  dueDate: string | null;
  owner: User;
  collaborators: User[];
  tags: string[];
}

const statusColors = {
  active: 'bg-green-100 text-green-800',
  completed: 'bg-blue-100 text-blue-800',
  on_hold: 'bg-yellow-100 text-yellow-800',
  canceled: 'bg-red-100 text-red-800',
};

const statusLabels = {
  active: 'Active',
  completed: 'Completed',
  on_hold: 'On Hold',
  canceled: 'Canceled',
};

interface ProjectItemProps {
  project: Project;
  onClick?: (id: string) => void;
}

// Helper function to get status badge color
const getStatusColor = (status: Project['status']) => {
  switch (status) {
    case 'active':
      return 'bg-green-100 text-green-800';
    case 'completed':
      return 'bg-blue-100 text-blue-800';
    case 'on_hold':
      return 'bg-yellow-100 text-yellow-800';
    case 'canceled':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

// Format date to display in a user-friendly way
const formatDate = (dateString: string | null) => {
  if (!dateString) return 'No due date';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });
};

export const ProjectItem: React.FC<ProjectItemProps> = ({ project, onClick }) => {
  const handleClick = () => {
    if (onClick) onClick(project.id);
  };

  return (
    <Card 
      className="h-full cursor-pointer hover:shadow-md transition-shadow"
      onClick={handleClick}
    >
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900 truncate">{project.title}</h3>
          <Badge className={`${getStatusColor(project.status)}`}>
            {project.status.replace('_', ' ')}
          </Badge>
        </div>
        
        <p className="text-sm text-gray-500 mb-4 line-clamp-2">{project.description}</p>
        
        <div className="flex items-center mb-3">
          <Avatar className="h-8 w-8 mr-2">
            <AvatarImage src={project.owner.avatar} alt={project.owner.name} />
            <AvatarFallback>{project.owner.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium">{project.owner.name}</span>
        </div>
        
        {project.collaborators.length > 0 && (
          <div className="flex items-center mb-3">
            <Users className="h-4 w-4 text-gray-400 mr-2" />
            <div className="flex -space-x-2">
              {project.collaborators.slice(0, 3).map((collaborator) => (
                <Avatar key={collaborator.id} className="h-6 w-6 border-2 border-white">
                  <AvatarImage src={collaborator.avatar} alt={collaborator.name} />
                  <AvatarFallback>{collaborator.name.charAt(0)}</AvatarFallback>
                </Avatar>
              ))}
              {project.collaborators.length > 3 && (
                <div className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-600 border-2 border-white">
                  +{project.collaborators.length - 3}
                </div>
              )}
            </div>
          </div>
        )}
        
        {project.tags.length > 0 && (
          <div className="flex items-center flex-wrap gap-1 mb-3">
            <Tag className="h-4 w-4 text-gray-400 mr-1" />
            {project.tags.slice(0, 3).map((tag) => (
              <span 
                key={tag} 
                className="text-xs bg-gray-100 text-gray-600 rounded-full px-2 py-0.5"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="text-xs text-gray-500">+{project.tags.length - 3} more</span>
            )}
          </div>
        )}
      </CardContent>
      
      <CardFooter className="p-4 pt-0 border-t border-gray-100">
        <div className="flex items-center text-xs text-gray-500">
          <Calendar className="h-4 w-4 text-gray-400 mr-1" />
          Due: {formatDate(project.dueDate)}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectItem; 