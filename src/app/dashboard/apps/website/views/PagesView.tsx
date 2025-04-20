'use client';

import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { 
  MoreHorizontal, 
  FileText, 
  Eye, 
  Edit, 
  Trash2, 
  Plus
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

// Sample page data
const samplePages = [
  { id: '1', title: 'Homepage', slug: 'home', status: 'published', author: 'Admin', updatedAt: '2023-10-15' },
  { id: '2', title: 'About Us', slug: 'about-us', status: 'published', author: 'Editor', updatedAt: '2023-10-10' },
  { id: '3', title: 'Contact', slug: 'contact', status: 'published', author: 'Admin', updatedAt: '2023-10-08' },
  { id: '4', title: 'Services', slug: 'services', status: 'published', author: 'Admin', updatedAt: '2023-10-05' },
  { id: '5', title: 'Blog', slug: 'blog', status: 'published', author: 'Editor', updatedAt: '2023-10-01' },
  { id: '6', title: 'FAQ', slug: 'faq', status: 'draft', author: 'Admin', updatedAt: '2023-09-28' },
  { id: '7', title: 'Privacy Policy', slug: 'privacy-policy', status: 'draft', author: 'Admin', updatedAt: '2023-09-25' },
];

interface PagesViewProps {
  selectedItemId: string | null;
  onSelectItem: (id: string, title: string) => void;
}

export default function PagesView({ selectedItemId, onSelectItem }: PagesViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter pages based on search query
  const filteredPages = samplePages.filter(page => 
    page.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    page.slug.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Get the selected page for detail view
  const selectedPage = samplePages.find(page => page.id === selectedItemId);
  
  if (selectedItemId && selectedPage) {
    return (
      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Edit Page</CardTitle>
            <CardDescription>Edit the details for {selectedPage.title}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="title" className="text-sm font-medium">Title</label>
                  <Input id="title" defaultValue={selectedPage.title} />
                </div>
                <div className="space-y-2">
                  <label htmlFor="slug" className="text-sm font-medium">Slug</label>
                  <Input id="slug" defaultValue={selectedPage.slug} />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="content" className="text-sm font-medium">Content</label>
                <div className="border rounded-md p-4 h-[400px] bg-muted/20 flex items-center justify-center">
                  <p className="text-muted-foreground">Page editor will be displayed here</p>
                </div>
              </div>
              
              <div className="flex gap-2 justify-end">
                <Button variant="outline" onClick={() => onSelectItem('', '')}>Cancel</Button>
                <Button>Save Changes</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
  
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold tracking-tight">Pages</h2>
          <p className="text-muted-foreground">Manage your website pages</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <Input
            placeholder="Search pages..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="sm:w-[200px]"
          />
          <Button className="flex items-center gap-1">
            <Plus className="h-4 w-4" />
            <span>Add Page</span>
          </Button>
        </div>
      </div>
      
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead className="hidden md:table-cell">Slug</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="hidden md:table-cell">Author</TableHead>
                  <TableHead className="hidden md:table-cell">Last Updated</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPages.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-6 text-muted-foreground">
                      No pages found matching your search criteria.
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredPages.map((page) => (
                    <TableRow key={page.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center space-x-2">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <span>{page.title}</span>
                        </div>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">/{page.slug}</TableCell>
                      <TableCell>
                        <Badge variant={page.status === 'published' ? 'default' : 'secondary'}>
                          {page.status.charAt(0).toUpperCase() + page.status.slice(1)}
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">{page.author}</TableCell>
                      <TableCell className="hidden md:table-cell">{page.updatedAt}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem onClick={() => window.open(`/${page.slug}`, '_blank')}>
                              <Eye className="h-4 w-4 mr-2" />
                              View
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => onSelectItem(page.id, page.title)}>
                              <Edit className="h-4 w-4 mr-2" />
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive">
                              <Trash2 className="h-4 w-4 mr-2" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 