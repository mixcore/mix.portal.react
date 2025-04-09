'use client';

import React from 'react';
import { WorkflowTemplate } from '../../lib/types';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface TemplateCardProps {
  template: WorkflowTemplate;
  onUse: (id: string) => void;
  onView?: (id: string) => void;
}

export function TemplateCard({ template, onUse, onView }: TemplateCardProps) {
  const { id, title, description, category, tags, image, author, nodes, connections } = template;

  return (
    <Card className="h-full flex flex-col overflow-hidden">
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={image || '/images/workflow-templates/default.png'} 
          alt={title}
          className="object-cover w-full h-full transition-transform hover:scale-105"
        />
        <div className="absolute top-2 right-2">
          <Badge variant="secondary">{category}</Badge>
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      
      <CardContent className="pb-2 flex-1">
        <p className="text-sm text-muted-foreground">{description}</p>
        
        <div className="flex flex-wrap gap-1 mt-3">
          {tags.slice(0, 3).map(tag => (
            <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
          ))}
          {tags.length > 3 && (
            <Badge variant="outline" className="text-xs">+{tags.length - 3}</Badge>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="pt-2 flex justify-between">
        <div className="text-xs text-muted-foreground">
          <span>{nodes} nodes</span>
          <span className="mx-1">•</span>
          <span>By {author}</span>
        </div>
        
        <Button size="sm" onClick={() => onUse(id)}>
          Use Template
        </Button>
      </CardFooter>
    </Card>
  );
}

export default TemplateCard; 