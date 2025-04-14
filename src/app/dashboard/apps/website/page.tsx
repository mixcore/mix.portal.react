'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';

export default function WebsiteApp() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex-grow p-4 md:p-6 space-y-6 overflow-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Website</h1>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">Settings</Button>
          </div>
        </div>
        
        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList>
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="pages">Pages</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
            <TabsTrigger value="seo">SEO</TabsTrigger>
          </TabsList>
          <TabsContent value="dashboard" className="mt-4">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Total Pages</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">42</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Published Pages</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">35</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Draft Pages</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">7</p>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Latest activity in the Website app</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-b pb-2">
                      <p className="font-medium">Homepage Updated</p>
                      <p className="text-sm text-muted-foreground">Updated 2 hours ago by Admin</p>
                    </div>
                    <div className="border-b pb-2">
                      <p className="font-medium">About Us Page Published</p>
                      <p className="text-sm text-muted-foreground">Published 1 day ago by Editor</p>
                    </div>
                    <div className="border-b pb-2">
                      <p className="font-medium">Contact Page Created</p>
                      <p className="text-sm text-muted-foreground">Created 2 days ago by Admin</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="pages" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Pages</CardTitle>
                <CardDescription>Manage your website pages</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Page management content will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="templates" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Templates</CardTitle>
                <CardDescription>Manage your website templates</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Template management content will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="seo" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>SEO Settings</CardTitle>
                <CardDescription>Manage your website SEO settings</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">SEO settings content will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
} 