'use client';

import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle,
  CardFooter
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  GridIcon,
  Edit,
  Copy,
  Trash2,
  Plus
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// Sample template data
const templates = [
  { id: 1, name: 'Default Page', type: 'page', usageCount: 24, lastUpdated: '2023-10-15' },
  { id: 2, name: 'Blog Post', type: 'post', usageCount: 18, lastUpdated: '2023-10-10' },
  { id: 3, name: 'Landing Page', type: 'page', usageCount: 5, lastUpdated: '2023-09-25' },
  { id: 4, name: 'Product Page', type: 'page', usageCount: 10, lastUpdated: '2023-09-20' },
  { id: 5, name: 'Contact Form', type: 'component', usageCount: 3, lastUpdated: '2023-09-15' },
  { id: 6, name: 'News Article', type: 'post', usageCount: 7, lastUpdated: '2023-08-30' },
];

export default function TemplatesView() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold tracking-tight">Templates</h2>
          <p className="text-muted-foreground">Manage your website templates</p>
        </div>
        <Button className="flex items-center gap-1">
          <Plus className="h-4 w-4" />
          <span>Create Template</span>
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {templates.map((template) => (
          <Card key={template.id} className="overflow-hidden">
            <div className="bg-muted h-40 flex items-center justify-center">
              <GridIcon className="h-16 w-16 text-muted-foreground/50" />
            </div>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{template.name}</CardTitle>
                  <CardDescription>
                    Used in {template.usageCount} {template.usageCount === 1 ? 'page' : 'pages'}
                  </CardDescription>
                </div>
                <Badge>{template.type}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Last updated on {template.lastUpdated}
              </p>
            </CardContent>
            <CardFooter className="border-t bg-muted/50 p-2 flex justify-end gap-1">
              <Button size="icon" variant="ghost" title="Edit">
                <Edit className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" title="Duplicate">
                <Copy className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" title="Delete">
                <Trash2 className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
} 