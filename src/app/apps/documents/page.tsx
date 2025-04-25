'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Plus, 
  File, 
  FileText, 
  FileImage, 
  FileSpreadsheet,
  FolderPlus, 
  Upload, 
  Download,
  Share,
  Trash,
  Search,
  Grid,
  List
} from 'lucide-react';

export default function DocumentsApp() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  return (
    <div className="h-full flex flex-col">
      <div className="flex-grow p-6 space-y-6 overflow-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Documents</h1>
          <div className="flex gap-2">
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Upload Document
            </Button>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search documents..." className="pl-8" />
          </div>
          
          <div className="flex border rounded-md">
            <Button 
              variant={viewMode === 'grid' ? 'secondary' : 'ghost'} 
              size="sm"
              onClick={() => setViewMode('grid')}
              className="flex gap-1"
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button 
              variant={viewMode === 'list' ? 'secondary' : 'ghost'} 
              size="sm"
              onClick={() => setViewMode('list')}
              className="flex gap-1"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList>
            <TabsTrigger value="all">All Documents</TabsTrigger>
            <TabsTrigger value="recent">Recent</TabsTrigger>
            <TabsTrigger value="shared">Shared with me</TabsTrigger>
            <TabsTrigger value="starred">Starred</TabsTrigger>
            <TabsTrigger value="trash">Trash</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-6">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex flex-col items-center mb-4">
                      <FileText className="h-16 w-16 text-red-500 mb-2" />
                      <p className="font-medium text-center">Annual Report.pdf</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-xs text-muted-foreground">2 days ago</p>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Share className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex flex-col items-center mb-4">
                      <FileText className="h-16 w-16 text-blue-500 mb-2" />
                      <p className="font-medium text-center">Meeting Notes.docx</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-xs text-muted-foreground">Yesterday</p>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Share className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex flex-col items-center mb-4">
                      <FileImage className="h-16 w-16 text-purple-500 mb-2" />
                      <p className="font-medium text-center">Product Mockup.png</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-xs text-muted-foreground">3 days ago</p>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Share className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex flex-col items-center mb-4">
                      <FileSpreadsheet className="h-16 w-16 text-green-500 mb-2" />
                      <p className="font-medium text-center">Financial Data.xlsx</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-xs text-muted-foreground">1 week ago</p>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Share className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-md transition-shadow border-dashed flex items-center justify-center p-6">
                  <div className="text-center">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="font-medium">Upload Document</p>
                    <p className="text-xs text-muted-foreground mt-1">Drag & drop or click to browse</p>
                    <Button variant="outline" className="mt-4">
                      <Plus className="h-4 w-4 mr-2" />
                      Upload
                    </Button>
                  </div>
                </Card>
              </div>
            ) : (
              <div className="border rounded-md">
                <div className="grid grid-cols-6 py-3 px-4 text-sm font-medium border-b bg-muted/50">
                  <div className="col-span-3">Name</div>
                  <div>Owner</div>
                  <div>Last Modified</div>
                  <div>Actions</div>
                </div>
                
                {[
                  { name: 'Annual Report.pdf', type: 'pdf', owner: 'You' },
                  { name: 'Meeting Notes.docx', type: 'docx', owner: 'Alex Smith' },
                  { name: 'Product Mockup.png', type: 'image', owner: 'You' },
                  { name: 'Financial Data.xlsx', type: 'spreadsheet', owner: 'Emma Wilson' },
                  { name: 'Project Timeline.pptx', type: 'presentation', owner: 'You' }
                ].map((file, index) => (
                  <div key={index} className="grid grid-cols-6 py-3 px-4 text-sm border-b last:border-b-0 hover:bg-accent/20">
                    <div className="col-span-3 flex items-center">
                      {file.type === 'pdf' && <FileText className="h-4 w-4 mr-2 text-red-500" />}
                      {file.type === 'docx' && <FileText className="h-4 w-4 mr-2 text-blue-500" />}
                      {file.type === 'image' && <FileImage className="h-4 w-4 mr-2 text-purple-500" />}
                      {file.type === 'spreadsheet' && <FileSpreadsheet className="h-4 w-4 mr-2 text-green-500" />}
                      {file.type === 'presentation' && <File className="h-4 w-4 mr-2 text-orange-500" />}
                      {file.name}
                    </div>
                    <div>{file.owner}</div>
                    <div>{index % 2 === 0 ? 'Yesterday' : `${index + 1} days ago`}</div>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Share className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="recent" className="mt-6">
            <div className="border p-8 text-center rounded-md bg-muted/30">
              <p className="text-muted-foreground">Your recent documents will appear here</p>
            </div>
          </TabsContent>
          
          <TabsContent value="shared" className="mt-6">
            <div className="border p-8 text-center rounded-md bg-muted/30">
              <p className="text-muted-foreground">Documents shared with you will appear here</p>
            </div>
          </TabsContent>
          
          <TabsContent value="starred" className="mt-6">
            <div className="border p-8 text-center rounded-md bg-muted/30">
              <p className="text-muted-foreground">Your starred documents will appear here</p>
            </div>
          </TabsContent>
          
          <TabsContent value="trash" className="mt-6">
            <div className="border p-8 text-center rounded-md bg-muted/30">
              <p className="text-muted-foreground">Your trash is empty</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
} 