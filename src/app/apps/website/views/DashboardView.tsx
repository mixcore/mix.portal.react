'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function DashboardView() {
  return (
    <div className="space-y-6">
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
      
      <Card>
        <CardHeader>
          <CardTitle>Website Performance</CardTitle>
          <CardDescription>Performance metrics for the last 30 days</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[200px] flex items-center justify-center text-muted-foreground">
            Performance chart will be displayed here
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 