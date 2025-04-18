'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface PlaceholderAppProps {
  name: string;
}

const PlaceholderApp: React.FC<PlaceholderAppProps> = ({ name }) => {
  const formattedName = name.charAt(0).toUpperCase() + name.slice(1).replace(/-/g, ' ');
  
  return (
    <div className="h-full flex flex-col">
      <div className="flex-grow p-6 space-y-6 overflow-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">{formattedName}</h1>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>{formattedName} App</CardTitle>
            <CardDescription>This is a placeholder for the {formattedName} app</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center p-10 text-center">
            <svg
              className="h-20 w-20 text-muted-foreground mb-4"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <p className="text-lg text-muted-foreground mb-6">
              The {formattedName} feature is coming soon!
            </p>
            <Button>Get Started</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PlaceholderApp; 