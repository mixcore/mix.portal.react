'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';

export default function BlogApp() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex-grow p-4 md:p-6 space-y-6 overflow-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">Settings</Button>
          </div>
        </div>
        
        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList>
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="posts">Posts</TabsTrigger>
            <TabsTrigger value="categories">Categories</TabsTrigger>
            <TabsTrigger value="tags">Tags</TabsTrigger>
            <TabsTrigger value="comments">Comments</TabsTrigger>
          </TabsList>
          <TabsContent value="dashboard" className="mt-4">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Total Posts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">34</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Published Posts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">28</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Draft Posts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">6</p>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Recent Posts</CardTitle>
                  <CardDescription>Your latest blog posts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-b pb-2">
                      <p className="font-medium">Getting Started with Next.js</p>
                      <p className="text-sm text-muted-foreground">Published 2 hours ago</p>
                    </div>
                    <div className="border-b pb-2">
                      <p className="font-medium">Top 10 React Hooks</p>
                      <p className="text-sm text-muted-foreground">Published 2 days ago</p>
                    </div>
                    <div className="border-b pb-2">
                      <p className="font-medium">Building Modern UIs with Tailwind</p>
                      <p className="text-sm text-muted-foreground">Published 5 days ago</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="posts" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Posts</CardTitle>
                <CardDescription>Manage your blog posts</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Post management content will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="categories" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Categories</CardTitle>
                <CardDescription>Manage your blog categories</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Category management content will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="tags" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Tags</CardTitle>
                <CardDescription>Manage your blog tags</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Tag management content will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="comments" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Comments</CardTitle>
                <CardDescription>Manage your blog comments</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Comment management content will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}