'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, FileSpreadsheet, FolderPlus, Upload, Download } from 'lucide-react';

export default function SpreadsheetApp() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex-grow p-6 space-y-6 overflow-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Spreadsheet</h1>
          <div className="flex gap-2">
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Spreadsheet
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg">
                <FileSpreadsheet className="h-5 w-5 mr-2 text-blue-500" />
                Financial Report
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Last edited: 2 days ago</p>
              <div className="flex justify-end mt-4">
                <Button variant="ghost" size="sm">Open</Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg">
                <FileSpreadsheet className="h-5 w-5 mr-2 text-green-500" />
                Sales Dashboard
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Last edited: 5 days ago</p>
              <div className="flex justify-end mt-4">
                <Button variant="ghost" size="sm">Open</Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow border-dashed flex items-center justify-center p-6">
            <div className="text-center">
              <FolderPlus className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
              <p className="font-medium">Create New Spreadsheet</p>
              <p className="text-sm text-muted-foreground mt-1">Start from scratch or use a template</p>
              <Button variant="outline" className="mt-4">
                <Plus className="h-4 w-4 mr-2" />
                Create
              </Button>
            </div>
          </Card>
        </div>
        
        <div className="space-y-4 mt-8">
          <h2 className="text-xl font-semibold">Recent Spreadsheets</h2>
          <div className="border rounded-md">
            <div className="grid grid-cols-4 py-3 px-4 text-sm font-medium border-b bg-muted/50">
              <div>Name</div>
              <div>Last Modified</div>
              <div>Size</div>
              <div>Actions</div>
            </div>
            
            {[1, 2, 3, 4, 5].map((_, index) => (
              <div key={index} className="grid grid-cols-4 py-3 px-4 text-sm border-b last:border-b-0 hover:bg-accent/20">
                <div className="flex items-center">
                  <FileSpreadsheet className="h-4 w-4 mr-2 text-blue-500" />
                  Spreadsheet {index + 1}
                </div>
                <div>{index % 2 === 0 ? 'Yesterday' : `${index + 1} days ago`}</div>
                <div>{Math.floor(Math.random() * 1000) + 100} KB</div>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Upload className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 