'use client';

import React from 'react';
import { Workflow } from '../../lib/types';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Eye, Edit, Play, MoreHorizontal, Trash2 } from 'lucide-react';
import WorkflowStatusBadge from './WorkflowStatusBadge';

interface WorkflowCardProps {
  workflow: Workflow;
  onView: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onToggleActive: (id: string, active: boolean) => void;
  onExecute: (id: string) => void;
}

export function WorkflowCard({ 
  workflow, 
  onView, 
  onEdit, 
  onDelete, 
  onToggleActive, 
  onExecute 
}: WorkflowCardProps) {
  const { id, name, description, active } = workflow;

  return (
    <div className="group relative flex items-center justify-between p-4 bg-card rounded-md border hover:shadow-md transition-shadow">
      <div 
        onClick={() => onView(id as string)} 
        className="cursor-pointer flex-1"
      >
        <div className="flex items-center">
          <h3 className="font-medium">{name}</h3>
          <WorkflowStatusBadge active={active} className="ml-2" />
        </div>
        {description && (
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        )}
      </div>
      
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          <Switch 
            checked={active} 
            onCheckedChange={(checked) => onToggleActive(id as string, checked)}
          />
        </div>
        
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => onExecute(id as string)}
          title="Run workflow"
        >
          <Play className="h-4 w-4" />
        </Button>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => onView(id as string)}>
              <Eye className="h-4 w-4 mr-2" />
              View Details
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onEdit(id as string)}>
              <Edit className="h-4 w-4 mr-2" />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onDelete(id as string)}>
              <Trash2 className="h-4 w-4 mr-2" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default WorkflowCard; 