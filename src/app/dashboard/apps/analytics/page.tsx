'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const websiteTrafficData = [
  { date: '2023-07-01', visitors: 1200, pageviews: 3500 },
  { date: '2023-07-02', visitors: 1300, pageviews: 3800 },
  { date: '2023-07-03', visitors: 1400, pageviews: 4100 },
  { date: '2023-07-04', visitors: 1150, pageviews: 3400 },
  { date: '2023-07-05', visitors: 1550, pageviews: 4300 },
  { date: '2023-07-06', visitors: 1650, pageviews: 4500 },
  { date: '2023-07-07', visitors: 1450, pageviews: 4000 },
];

const channelData = [
  { name: 'Organic', value: 35 },
  { name: 'Direct', value: 25 },
  { name: 'Social', value: 20 },
  { name: 'Referral', value: 15 },
  { name: 'Email', value: 5 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

const topPages = [
  { path: '/', pageviews: 1250, uniqueViews: 980, bounceRate: '32%', avgTime: '2m 15s' },
  { path: '/products', pageviews: 950, uniqueViews: 720, bounceRate: '28%', avgTime: '3m 05s' },
  { path: '/about', pageviews: 680, uniqueViews: 540, bounceRate: '45%', avgTime: '1m 50s' },
  { path: '/blog', pageviews: 520, uniqueViews: 450, bounceRate: '35%', avgTime: '4m 25s' },
  { path: '/contact', pageviews: 420, uniqueViews: 380, bounceRate: '48%', avgTime: '1m 30s' },
];

export default function AnalyticsApp() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex-grow p-4 md:p-6 space-y-6 overflow-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">Export Report</Button>
            <Button size="sm">Date Range</Button>
          </div>
        </div>
        
        <Tabs defaultValue="overview" className="w-full">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="audience">Audience</TabsTrigger>
            <TabsTrigger value="acquisition">Acquisition</TabsTrigger>
            <TabsTrigger value="behavior">Behavior</TabsTrigger>
            <TabsTrigger value="conversions">Conversions</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="mt-4">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Total Visitors</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">9,700</p>
                    <p className="text-xs text-muted-foreground">+12.5% from last week</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Page Views</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">27,600</p>
                    <p className="text-xs text-muted-foreground">+8.2% from last week</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Avg. Session Duration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">2m 35s</p>
                    <p className="text-xs text-muted-foreground">+3.1% from last week</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Bounce Rate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">36.8%</p>
                    <p className="text-xs text-muted-foreground">-2.4% from last week</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Website Traffic</CardTitle>
                    <CardDescription>Daily visitors and page views</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                          data={websiteTrafficData}
                          margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="date" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Area type="monotone" dataKey="visitors" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} name="Visitors" />
                          <Area type="monotone" dataKey="pageviews" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} name="Page Views" />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Traffic Source</CardTitle>
                    <CardDescription>Visitors by channel</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80 flex items-center justify-center">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={channelData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {channelData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Top Pages</CardTitle>
                  <CardDescription>Most visited pages on your site</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Page</TableHead>
                        <TableHead>Page Views</TableHead>
                        <TableHead>Unique Views</TableHead>
                        <TableHead>Bounce Rate</TableHead>
                        <TableHead>Avg. Time</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {topPages.map((page, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{page.path}</TableCell>
                          <TableCell>{page.pageviews}</TableCell>
                          <TableCell>{page.uniqueViews}</TableCell>
                          <TableCell>{page.bounceRate}</TableCell>
                          <TableCell>{page.avgTime}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="ml-auto">View All Pages</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="audience" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Audience Overview</CardTitle>
                <CardDescription>Detailed information about your audience</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Audience analytics content will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="acquisition" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Acquisition Overview</CardTitle>
                <CardDescription>Learn how users find your website</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Acquisition analytics content will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="behavior" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Behavior Overview</CardTitle>
                <CardDescription>How users interact with your website</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Behavior analytics content will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="conversions" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Conversions Overview</CardTitle>
                <CardDescription>Track goal completions and conversions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Conversion analytics content will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
} 