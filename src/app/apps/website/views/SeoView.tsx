'use client';

import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  ArrowUpRight, 
  Gauge, 
  Globe, 
  Search, 
  Share2, 
  Smartphone, 
  TagIcon
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export default function SeoView() {
  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold tracking-tight">SEO Settings</h2>
        <p className="text-muted-foreground">Manage your website search engine optimization</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">SEO Score</CardTitle>
              <Gauge className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Overall</span>
                <span className="text-sm font-medium">82/100</span>
              </div>
              <Progress value={82} className="h-2" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Indexed Pages</CardTitle>
              <Globe className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">38/42</p>
            <p className="text-sm text-muted-foreground">90% of pages indexed</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Mobile Optimized</CardTitle>
              <Smartphone className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">95%</p>
            <p className="text-sm text-muted-foreground">40/42 pages mobile-friendly</p>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="general" className="w-full">
        <TabsList>
          <TabsTrigger value="general" className="flex items-center gap-1">
            <Globe className="h-4 w-4" />
            <span>General</span>
          </TabsTrigger>
          <TabsTrigger value="social" className="flex items-center gap-1">
            <Share2 className="h-4 w-4" />
            <span>Social Media</span>
          </TabsTrigger>
          <TabsTrigger value="sitemap" className="flex items-center gap-1">
            <TagIcon className="h-4 w-4" />
            <span>Sitemap & Schema</span>
          </TabsTrigger>
          <TabsTrigger value="analytics" className="flex items-center gap-1">
            <ArrowUpRight className="h-4 w-4" />
            <span>Analytics</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="general" className="mt-4 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Global SEO Settings</CardTitle>
              <CardDescription>Setup default metadata for your website</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="site-title">Site Title</Label>
                <Input id="site-title" placeholder="Your Website Name" />
                <p className="text-sm text-muted-foreground">
                  This will be used as the default title for your website.
                </p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="meta-description">Meta Description</Label>
                <Textarea id="meta-description" placeholder="Enter a description of your website (150-160 characters)" />
                <p className="text-sm text-muted-foreground">
                  This will be used as the default description for your website.
                </p>
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="noindex">Discourage Search Engines</Label>
                  <p className="text-sm text-muted-foreground">
                    This will add a noindex tag to your website.
                  </p>
                </div>
                <Switch id="noindex" />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="sitemaps">Auto-generate Sitemaps</Label>
                  <p className="text-sm text-muted-foreground">
                    Automatically create and update XML sitemaps.
                  </p>
                </div>
                <Switch id="sitemaps" defaultChecked />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>SEO Preview</CardTitle>
              <CardDescription>See how your website appears in search results</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border rounded-md p-4 space-y-2">
                <div className="text-blue-600 text-xl font-medium">Your Website Name</div>
                <div className="text-green-700 text-sm">https://yourwebsite.com</div>
                <p className="text-sm text-gray-600">
                  Your website description appears here. Make sure it's compelling and includes relevant keywords...
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="social" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Social Media Settings</CardTitle>
              <CardDescription>Configure how your site appears when shared on social media</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Social media settings will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="sitemap" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Sitemap & Schema Settings</CardTitle>
              <CardDescription>Configure XML sitemaps and structured data markup</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Sitemap and schema settings will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="analytics" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Analytics Integration</CardTitle>
              <CardDescription>Configure analytics tracking and reporting</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Analytics integration settings will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
} 