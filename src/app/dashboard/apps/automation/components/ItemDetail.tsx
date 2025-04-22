'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { format } from 'date-fns';
import { 
  ArrowLeft, 
  Edit, 
  Trash, 
  Clock, 
  Tag,
  Check,
  X
} from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from '@/components/ui/alert-dialog';

// Mock item data for testing
const mockItem = {
  id: '1',
  title: 'Detailed Item View',
  description: 'This is a comprehensive description of the item that provides all the necessary details about what it is and what it does. It includes information about the item\'s purpose, features, and any other relevant details that might be useful to the user.',
  content: `
    <p>This is the rich content of the item with <strong>formatting</strong> and <em>style</em>.</p>
    <p>It can include multiple paragraphs and sections that provide in-depth information about the item.</p>
    <h3>Features</h3>
    <ul>
      <li>Feature one with detailed explanation</li>
      <li>Feature two with implementation details</li>
      <li>Feature three with usage examples</li>
    </ul>
    <p>Additional content can be included as needed to fully describe the item.</p>
  `,
  status: 'active',
  createdAt: '2023-06-01T10:00:00Z',
  updatedAt: '2023-06-15T14:30:00Z',
  createdBy: 'John Doe',
  updatedBy: 'Jane Smith',
  version: '1.2.3',
  tags: ['important', 'featured', 'primary'],
  metadata: {
    category: 'Main',
    priority: 'High',
    estimatedTime: '2 hours',
    relatedItems: ['2', '3']
  }
};

export interface ItemDetailProps {
  itemId: string;
  onBack: () => void;
}

export function ItemDetail({ itemId, onBack }: ItemDetailProps) {
  const [item, setItem] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('details');
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  
  // Load item data
  useEffect(() => {
    const loadItem = async () => {
      setLoading(true);
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 800));
        setItem(mockItem);
      } catch (error) {
        console.error('Failed to load item:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadItem();
  }, [itemId]);
  
  const handleDelete = async () => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      onBack(); // Navigate back after delete
    } catch (error) {
      console.error('Failed to delete item:', error);
    }
  };
  
  // Status badge component
  const StatusBadge = ({ status }: { status: string }) => {
    const variants: Record<string, "default" | "secondary" | "outline" | "destructive" | null | undefined> = {
      active: "default",
      draft: "secondary",
      archived: "outline"
    };
    
    return (
      <Badge variant={variants[status] || "default"}>
        {status}
      </Badge>
    );
  };
  
  if (loading) {
    return (
      <Card>
        <CardHeader>
          <Skeleton className="h-8 w-[250px] mb-2" />
          <Skeleton className="h-4 w-[350px]" />
        </CardHeader>
        <CardContent className="space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-[200px] w-full" />
        </CardContent>
      </Card>
    );
  }
  
  if (!item) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Item Not Found</CardTitle>
          <CardDescription>The requested item could not be found.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={onBack} variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Items
          </Button>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button onClick={onBack} variant="outline" size="sm">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        
        <div className="ml-auto flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Edit className="mr-2 h-4 w-4" />
            Edit
          </Button>
          <Button 
            variant="destructive" 
            size="sm"
            onClick={() => setIsDeleteDialogOpen(true)}
          >
            <Trash className="mr-2 h-4 w-4" />
            Delete
          </Button>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <CardTitle className="text-2xl">{item.title}</CardTitle>
                <StatusBadge status={item.status} />
              </div>
              <CardDescription>{item.description}</CardDescription>
            </div>
          </div>
        </CardHeader>
        
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-4">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="content">Content</TabsTrigger>
              <TabsTrigger value="metadata">Metadata</TabsTrigger>
              <TabsTrigger value="history">History</TabsTrigger>
            </TabsList>
            
            <TabsContent value="details" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Basic Information</h3>
                  <div className="space-y-2">
                    <div>
                      <p className="text-sm font-medium">ID</p>
                      <p className="text-sm text-muted-foreground">{item.id}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Status</p>
                      <StatusBadge status={item.status} />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Version</p>
                      <p className="text-sm text-muted-foreground">{item.version}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Timestamps</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">Created</p>
                        <p className="text-sm text-muted-foreground">
                          {format(new Date(item.createdAt), 'PPpp')} by {item.createdBy}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">Updated</p>
                        <p className="text-sm text-muted-foreground">
                          {format(new Date(item.updatedAt), 'PPpp')} by {item.updatedBy}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Tags</h3>
                <div className="flex flex-wrap gap-1">
                  {item.tags.map((tag: string) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Description</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            </TabsContent>
            
            <TabsContent value="content">
              <div className="prose prose-sm max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: item.content }} />
            </TabsContent>
            
            <TabsContent value="metadata" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(item.metadata).map(([key, value]: [string, any]) => (
                  <div key={key}>
                    <p className="text-sm font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}</p>
                    <p className="text-sm text-muted-foreground">
                      {Array.isArray(value) 
                        ? value.join(', ') 
                        : typeof value === 'object' 
                          ? JSON.stringify(value) 
                          : String(value)
                      }
                    </p>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="history">
              <div className="space-y-4">
                <div className="border rounded-md p-4">
                  <p className="text-sm font-medium">Version 1.2.3</p>
                  <p className="text-xs text-muted-foreground">Updated on {format(new Date(item.updatedAt), 'PPpp')} by {item.updatedBy}</p>
                  <p className="text-sm mt-2">Updated description and metadata fields</p>
                </div>
                <div className="border rounded-md p-4">
                  <p className="text-sm font-medium">Version 1.1.0</p>
                  <p className="text-xs text-muted-foreground">Updated on {format(new Date('2023-06-10T09:45:00Z'), 'PPpp')} by {item.updatedBy}</p>
                  <p className="text-sm mt-2">Added new content and tags</p>
                </div>
                <div className="border rounded-md p-4">
                  <p className="text-sm font-medium">Version 1.0.0</p>
                  <p className="text-xs text-muted-foreground">Created on {format(new Date(item.createdAt), 'PPpp')} by {item.createdBy}</p>
                  <p className="text-sm mt-2">Initial version created</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the item and remove it from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
} 