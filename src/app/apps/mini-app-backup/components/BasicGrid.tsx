'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Search, Grid, List, Plus, Filter, ArrowDownUp } from 'lucide-react';

interface BasicGridProps {
  onItemClick: (itemId: string) => void;
}

export function BasicGrid({ onItemClick }: BasicGridProps) {
  const [layout, setLayout] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest' | 'name'>('newest');

  // Mock data for grid items
  const gridItems = [
    { id: '1', title: 'Project Alpha', category: 'Development', tags: ['React', 'TypeScript'], date: '2023-08-15' },
    { id: '2', title: 'Marketing Campaign', category: 'Marketing', tags: ['Email', 'Social Media'], date: '2023-07-22' },
    { id: '3', title: 'Budget Report', category: 'Finance', tags: ['Q3', '2023'], date: '2023-09-01' },
    { id: '4', title: 'New Feature Design', category: 'UX/UI', tags: ['Mobile', 'Web'], date: '2023-08-28' },
    { id: '5', title: 'Product Launch', category: 'Marketing', tags: ['Product', 'Launch'], date: '2023-10-15' },
    { id: '6', title: 'User Feedback', category: 'Research', tags: ['Survey', 'Analysis'], date: '2023-08-10' },
    { id: '7', title: 'Q4 Strategy', category: 'Planning', tags: ['Strategy', 'Goals'], date: '2023-09-12' },
    { id: '8', title: 'Infrastructure Upgrade', category: 'IT', tags: ['Cloud', 'Security'], date: '2023-08-05' }
  ];

  // Filter grid items based on search term
  const filteredItems = gridItems.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Sort items based on selected order
  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortOrder === 'newest') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else if (sortOrder === 'oldest') {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    } else {
      return a.title.localeCompare(b.title);
    }
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold tracking-tight">Basic Grid Layout</h1>
          <Button size="sm" onClick={() => console.log("Create new item")}>
            <Plus className="h-4 w-4 mr-2" />
            New Item
          </Button>
        </div>
        
        <p className="text-muted-foreground">
          A simple grid layout that can be toggled between grid and list views. Items can be filtered and sorted.
        </p>
      </div>

      <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 sm:items-center">
          <div className="relative flex-grow max-w-md">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by title, category, or tag..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex space-x-2">
            <Select value={sortOrder} onValueChange={(value) => setSortOrder(value as any)}>
              <SelectTrigger className="w-[180px]">
                <ArrowDownUp className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="name">Name (A-Z)</SelectItem>
              </SelectContent>
            </Select>
            
            <div className="flex space-x-2 items-center">
              <Button
                variant={layout === 'grid' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setLayout('grid')}
                aria-label="Grid view"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={layout === 'list' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setLayout('list')}
                aria-label="List view"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className={layout === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4' : 'space-y-4'}>
          {sortedItems.map((item) => (
            layout === 'grid' ? (
              <Card key={item.id} className="overflow-hidden h-full">
                <CardHeader className="space-y-1 p-4">
                  <div className="flex justify-between">
                    <Badge variant="outline">{item.category}</Badge>
                    <span className="text-xs text-muted-foreground">{new Date(item.date).toLocaleDateString()}</span>
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="flex flex-wrap gap-2 mt-2">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button 
                    variant="ghost" 
                    className="ml-auto"
                    onClick={() => onItemClick(item.id)}
                  >
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            ) : (
              <Card key={item.id} className="overflow-hidden">
                <div className="p-4 flex justify-between items-center">
                  <div className="flex flex-col space-y-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-medium">{item.title}</h3>
                      <Badge variant="outline">{item.category}</Badge>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {item.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-xs text-muted-foreground">{new Date(item.date).toLocaleDateString()}</span>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => onItemClick(item.id)}
                    >
                      View
                    </Button>
                  </div>
                </div>
              </Card>
            )
          ))}
        </div>
        
        {filteredItems.length === 0 && (
          <div className="text-center py-10">
            <p className="text-muted-foreground">No items match your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default BasicGrid; 