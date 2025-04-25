import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function SettingsView() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Settings</CardTitle>
        <CardDescription>
          Configure the application settings
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">Settings content will be available soon.</p>
      </CardContent>
    </Card>
  );
} 