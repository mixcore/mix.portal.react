'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Database, ExternalLink } from 'lucide-react';
import { Badge } from '../ui/badge';

interface MixdbIntegrationProps {
  appId: string;
  appTitle: string;
  dbContextId?: number;
  dbContextName?: string;
}

export function MixdbIntegration({ 
  appId, 
  appTitle, 
  dbContextId, 
  dbContextName = 'Default'
}: MixdbIntegrationProps) {
  const isConfigured = !!dbContextId;
  
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Database className="h-5 w-5 text-primary" />
            <CardTitle>MixDB Integration</CardTitle>
          </div>
          <Badge variant={isConfigured ? "outline" : "secondary"}>
            {isConfigured ? "Configured" : "Not Configured"}
          </Badge>
        </div>
        <CardDescription>
          Connect this app to a specific database context in MixDB for better data organization
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between items-center py-2 px-3 bg-muted/50 rounded-md">
            <div>
              <span className="text-sm font-medium">App ID:</span>
              <span className="ml-2 text-sm">{appId}</span>
            </div>
            <div>
              <span className="text-sm font-medium">Current DB Context:</span>
              <span className="ml-2 text-sm">{dbContextName}</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            MixDB allows you to organize your database tables by context. Link this app to a specific database context to keep your data organized.
          </p>
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <Button asChild className="w-full">
          <Link href={`/dashboard/apps/mixdb?view=settings`}>
            <span>Manage Database Contexts</span>
            <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
} 