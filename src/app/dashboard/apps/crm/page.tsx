'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const leadData = [
  { name: 'New', value: 25, color: '#8884d8' },
  { name: 'Qualified', value: 15, color: '#82ca9d' },
  { name: 'Proposal', value: 10, color: '#ffc658' },
  { name: 'Won', value: 8, color: '#0088FE' },
  { name: 'Lost', value: 12, color: '#FF8042' },
];

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#0088FE', '#FF8042'];

export default function CrmApp() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex-grow p-4 md:p-6 space-y-6 overflow-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">CRM</h1>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">Settings</Button>
            <Button size="sm">New Contact</Button>
          </div>
        </div>
        
        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList>
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="leads">Leads</TabsTrigger>
            <TabsTrigger value="contacts">Contacts</TabsTrigger>
            <TabsTrigger value="companies">Companies</TabsTrigger>
            <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
          </TabsList>
          <TabsContent value="dashboard" className="mt-4">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Total Leads</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">70</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Contacts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">235</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Companies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">48</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Opportunities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">18</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Lead Status</CardTitle>
                    <CardDescription>Distribution of leads by status</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80 flex items-center justify-center">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={leadData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          >
                            {leadData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                          <Legend />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Contacts</CardTitle>
                    <CardDescription>Recently added contacts</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>JD</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium leading-none">John Doe</p>
                            <p className="text-sm text-muted-foreground">john.doe@example.com</p>
                          </div>
                        </div>
                        <Badge>New Lead</Badge>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>JS</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium leading-none">Jane Smith</p>
                            <p className="text-sm text-muted-foreground">jane.smith@example.com</p>
                          </div>
                        </div>
                        <Badge>Qualified</Badge>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>RJ</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium leading-none">Robert Johnson</p>
                            <p className="text-sm text-muted-foreground">robert.johnson@example.com</p>
                          </div>
                        </div>
                        <Badge>Proposal</Badge>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>EW</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium leading-none">Emily Wilson</p>
                            <p className="text-sm text-muted-foreground">emily.wilson@example.com</p>
                          </div>
                        </div>
                        <Badge className="bg-green-500">Won</Badge>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">View All Contacts</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="leads" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Leads</CardTitle>
                <CardDescription>Manage your leads</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Lead management content will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="contacts" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Contacts</CardTitle>
                <CardDescription>Manage your contacts</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Contact management content will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="companies" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Companies</CardTitle>
                <CardDescription>Manage your companies</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Company management content will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="opportunities" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Opportunities</CardTitle>
                <CardDescription>Manage your sales opportunities</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Opportunity management content will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
