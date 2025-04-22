'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Plus, MoreHorizontal, Archive } from 'lucide-react';

interface KanbanCard {
  id: string;
  title: string;
  description?: string;
  priority: 'low' | 'medium' | 'high';
  assignee?: {
    id: string;
    name: string;
    avatar?: string;
  };
  dueDate?: string;
  tags: string[];
}

interface KanbanColumn {
  id: string;
  title: string;
  cards: KanbanCard[];
}

interface KanbanBoardProps {
  onCardClick: (cardId: string) => void;
}

export function KanbanBoard({ onCardClick }: KanbanBoardProps) {
  // Initial kanban data
  const [columns, setColumns] = useState<KanbanColumn[]>([
    {
      id: 'todo',
      title: 'To Do',
      cards: [
        {
          id: 'card-1',
          title: 'Research competitors',
          description: 'Analyze top 5 competitors in the market',
          priority: 'medium',
          assignee: { id: 'user-1', name: 'Alex', avatar: '/avatars/01.png' },
          dueDate: '2023-09-25',
          tags: ['Research', 'Marketing']
        },
        {
          id: 'card-2',
          title: 'Design new landing page',
          description: 'Create mockups for the new product landing page',
          priority: 'high',
          assignee: { id: 'user-2', name: 'Morgan', avatar: '/avatars/02.png' },
          dueDate: '2023-09-30',
          tags: ['Design', 'UI']
        },
        {
          id: 'card-3',
          title: 'Update documentation',
          priority: 'low',
          tags: ['Docs', 'Development']
        },
      ]
    },
    {
      id: 'in-progress',
      title: 'In Progress',
      cards: [
        {
          id: 'card-4',
          title: 'Setup CI/CD pipeline',
          description: 'Configure automated testing and deployment',
          priority: 'high',
          assignee: { id: 'user-3', name: 'Jordan', avatar: '/avatars/03.png' },
          dueDate: '2023-09-20',
          tags: ['DevOps', 'Automation']
        },
        {
          id: 'card-5',
          title: 'Implement authentication',
          description: 'Add OAuth2 support to the API',
          priority: 'medium',
          assignee: { id: 'user-1', name: 'Alex', avatar: '/avatars/01.png' },
          tags: ['API', 'Security']
        }
      ]
    },
    {
      id: 'review',
      title: 'Review',
      cards: [
        {
          id: 'card-6',
          title: 'Code review: API endpoints',
          description: 'Review new API endpoints for the user service',
          priority: 'medium',
          assignee: { id: 'user-4', name: 'Taylor', avatar: '/avatars/04.png' },
          dueDate: '2023-09-15',
          tags: ['API', 'Review']
        }
      ]
    },
    {
      id: 'done',
      title: 'Done',
      cards: [
        {
          id: 'card-7',
          title: 'Setup project repository',
          description: 'Create and configure git repository with initial structure',
          priority: 'high',
          assignee: { id: 'user-3', name: 'Jordan', avatar: '/avatars/03.png' },
          tags: ['Setup', 'Git']
        },
        {
          id: 'card-8',
          title: 'Define MVP requirements',
          description: 'Document core features for the MVP release',
          priority: 'high',
          assignee: { id: 'user-2', name: 'Morgan', avatar: '/avatars/02.png' },
          tags: ['Planning', 'Product']
        }
      ]
    }
  ]);

  // Function to handle card drag start
  const handleDragStart = (e: React.DragEvent, cardId: string, sourceColumnId: string) => {
    e.dataTransfer.setData('cardId', cardId);
    e.dataTransfer.setData('sourceColumnId', sourceColumnId);
  };

  // Function to handle drag over
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  // Function to handle card drop
  const handleDrop = (e: React.DragEvent, targetColumnId: string) => {
    e.preventDefault();
    
    const cardId = e.dataTransfer.getData('cardId');
    const sourceColumnId = e.dataTransfer.getData('sourceColumnId');
    
    // Return if dropping in the same column
    if (sourceColumnId === targetColumnId) return;
    
    // Find the source column and card
    const sourceColumnIndex = columns.findIndex(col => col.id === sourceColumnId);
    const cardIndex = columns[sourceColumnIndex].cards.findIndex(card => card.id === cardId);
    const card = columns[sourceColumnIndex].cards[cardIndex];
    
    // Create new state
    const newColumns = [...columns];
    
    // Remove card from source column
    newColumns[sourceColumnIndex].cards.splice(cardIndex, 1);
    
    // Add card to target column
    const targetColumnIndex = newColumns.findIndex(col => col.id === targetColumnId);
    newColumns[targetColumnIndex].cards.push(card);
    
    // Update state
    setColumns(newColumns);
  };

  // Function to add a new card to a column
  const addNewCard = (columnId: string) => {
    const newColumns = [...columns];
    const columnIndex = newColumns.findIndex(col => col.id === columnId);
    
    const newCard: KanbanCard = {
      id: `card-${Date.now()}`,
      title: 'New Task',
      description: 'Click to edit the description',
      priority: 'medium',
      tags: ['New']
    };
    
    newColumns[columnIndex].cards.push(newCard);
    setColumns(newColumns);
  };

  // Get priority color
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-500/10 text-red-500 border-red-500/20';
      case 'medium':
        return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
      case 'low':
        return 'bg-green-500/10 text-green-500 border-green-500/20';
      default:
        return 'bg-slate-500/10 text-slate-500 border-slate-500/20';
    }
  };

  return (
    <div className="space-y-6 h-full">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold tracking-tight">Kanban Board</h1>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Column
          </Button>
        </div>
        
        <p className="text-muted-foreground">
          Drag and drop cards between columns to update their status. Click on a card to view details.
        </p>
      </div>

      <div className="flex space-x-4 overflow-x-auto pb-4 h-[calc(100vh-12rem)]">
        {columns.map(column => (
          <div
            key={column.id}
            className="flex-shrink-0 w-80 bg-secondary/20 rounded-lg overflow-hidden flex flex-col"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, column.id)}
          >
            <div className="p-3 font-medium bg-secondary/30 flex items-center justify-between">
              <div className="flex items-center">
                <span>{column.title}</span>
                <span className="ml-2 bg-secondary text-secondary-foreground rounded-full text-xs px-2">
                  {column.cards.length}
                </span>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="p-2 flex-grow overflow-y-auto space-y-2">
              {column.cards.map(card => (
                <div
                  key={card.id}
                  className="cursor-move"
                  draggable
                  onDragStart={(e) => handleDragStart(e, card.id, column.id)}
                  onClick={() => onCardClick(card.id)}
                >
                  <Card className="bg-background hover:border-primary/50 transition-colors">
                    <CardContent className="p-3 space-y-3">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium text-sm line-clamp-2">{card.title}</h3>
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${getPriorityColor(card.priority)}`}
                        >
                          {card.priority}
                        </Badge>
                      </div>
                      
                      {card.description && (
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {card.description}
                        </p>
                      )}
                      
                      <div className="flex flex-wrap gap-1">
                        {card.tags.map(tag => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex justify-between items-center text-xs">
                        {card.assignee ? (
                          <div className="flex items-center">
                            <Avatar className="h-6 w-6 mr-1">
                              <AvatarImage src={card.assignee.avatar} alt={card.assignee.name} />
                              <AvatarFallback>{card.assignee.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <span className="text-muted-foreground">{card.assignee.name}</span>
                          </div>
                        ) : (
                          <span></span>
                        )}
                        
                        {card.dueDate && (
                          <span className="text-muted-foreground">
                            {new Date(card.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
              
              <Button 
                variant="ghost" 
                className="w-full justify-start border border-dashed border-primary/20 text-muted-foreground hover:text-primary hover:border-primary/50"
                onClick={() => addNewCard(column.id)}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Card
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KanbanBoard; 