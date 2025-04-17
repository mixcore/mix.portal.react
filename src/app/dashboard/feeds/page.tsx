'use client';

import React, { useState } from 'react';
import { Heading } from '@/components/ui/heading';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Icons } from '@/components/icons';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';

type FeedPost = {
  id: string;
  author: {
    name: string;
    avatar: string;
    department: string;
  };
  content: string;
  attachments?: {
    type: 'image' | 'document' | 'link';
    url: string;
    name?: string;
  }[];
  likes: number;
  comments: number;
  shares: number;
  timestamp: string;
  liked: boolean;
};

type Announcement = {
  id: string;
  title: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    department: string;
  };
  timestamp: string;
  important: boolean;
};

export default function FeedsPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [newPost, setNewPost] = useState('');

  // Mock data for feed posts
  const feedPosts: FeedPost[] = [
    {
      id: '1',
      author: {
        name: 'Jennifer Lee',
        avatar: '/avatars/jennifer.png',
        department: 'Marketing'
      },
      content: 'Just launched our new product campaign! 🚀 Check out the marketing materials in the shared folder.',
      attachments: [
        {
          type: 'image',
          url: '/images/campaign-preview.jpg'
        }
      ],
      likes: 24,
      comments: 5,
      shares: 2,
      timestamp: '35 minutes ago',
      liked: false
    },
    {
      id: '2',
      author: {
        name: 'Michael Torres',
        avatar: '/avatars/michael.png',
        department: 'Engineering'
      },
      content: "Excited to announce that we've reached 99.99% uptime this month for our core services. Great job, team!",
      likes: 42,
      comments: 8,
      shares: 5,
      timestamp: '2 hours ago',
      liked: true
    },
    {
      id: '3',
      author: {
        name: 'Sarah Johnson',
        avatar: '/avatars/sarah.png',
        department: 'HR'
      },
      content: 'Don\'t forget about the company picnic this Saturday! Please RSVP by end of day tomorrow.',
      attachments: [
        {
          type: 'document',
          url: '/docs/company-picnic-details.pdf',
          name: 'Company Picnic Details.pdf'
        }
      ],
      likes: 15,
      comments: 7,
      shares: 1,
      timestamp: '5 hours ago',
      liked: false
    },
    {
      id: '4',
      author: {
        name: 'David Kim',
        avatar: '/avatars/david.png',
        department: 'Sales'
      },
      content: 'Just closed our biggest deal of the quarter! 🎉 Thanks to everyone on the team who helped make this happen.',
      likes: 56,
      comments: 12,
      shares: 3,
      timestamp: '1 day ago',
      liked: true
    }
  ];

  // Mock data for announcements
  const announcements: Announcement[] = [
    {
      id: '1',
      title: 'New Office Location',
      content: 'We\'re excited to announce that we\'ll be moving to our new headquarters on May 15th. More details coming soon!',
      author: {
        name: 'Lisa Chang',
        avatar: '/avatars/lisa.png',
        department: 'Operations'
      },
      timestamp: '1 day ago',
      important: true
    },
    {
      id: '2',
      title: 'Quarterly All-Hands Meeting',
      content: 'Our Q2 all-hands meeting will be held next Friday at 2 PM in the main conference room. Remote employees can join via the usual video conference link.',
      author: {
        name: 'James Roberts',
        avatar: '/avatars/james.png',
        department: 'Executive'
      },
      timestamp: '2 days ago',
      important: false
    },
    {
      id: '3',
      title: 'New Health Benefits',
      content: 'Starting next month, we\'re enhancing our health benefits package to include mental health services and expanded family coverage.',
      author: {
        name: 'Maria Garcia',
        avatar: '/avatars/maria.png',
        department: 'HR'
      },
      timestamp: '3 days ago',
      important: true
    }
  ];

  // Function to handle post submission
  const handlePostSubmit = () => {
    if (newPost.trim() === '') return;
    
    // In a real app, you would submit to your API here
    console.log('Submitting post:', newPost);
    
    // Clear the input after submission
    setNewPost('');
  };

  // Function to handle liking a post
  const toggleLike = (postId: string) => {
    // In a real app, you would submit to your API here
    console.log('Toggling like for post:', postId);
  };

  return (
    <div className="space-y-6">
      <Heading 
        title="My Feeds" 
        description="Stay connected with internal company activities and announcements"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Feed Column */}
        <div className="md:col-span-2 space-y-6">
          {/* Post Creation Card */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex space-x-4">
                <Avatar>
                  <AvatarImage src="/avatars/user.png" alt="Your Avatar" />
                  <AvatarFallback>YA</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-3">
                  <Textarea 
                    placeholder="What's on your mind?" 
                    className="resize-none" 
                    value={newPost} 
                    onChange={(e) => setNewPost(e.target.value)}
                  />
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Icons.media className="h-4 w-4 mr-2" />
                        Photo
                      </Button>
                      <Button variant="outline" size="sm">
                        <Icons.file className="h-4 w-4 mr-2" />
                        File
                      </Button>
                    </div>
                    <Button onClick={handlePostSubmit} disabled={newPost.trim() === ''}>
                      Post
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Feed Tabs */}
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid grid-cols-3 mb-4">
              <TabsTrigger value="all">All Posts</TabsTrigger>
              <TabsTrigger value="team">Team Updates</TabsTrigger>
              <TabsTrigger value="company">Company News</TabsTrigger>
            </TabsList>
            
            {/* All Posts Tab */}
            <TabsContent value="all" className="space-y-4">
              {feedPosts.map((post) => (
                <Card key={post.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <Avatar>
                        <AvatarImage src={post.author.avatar} alt={post.author.name} />
                        <AvatarFallback>{post.author.name.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium">{post.author.name}</h3>
                            <p className="text-xs text-muted-foreground">
                              {post.author.department} • {post.timestamp}
                            </p>
                          </div>
                          <Button variant="ghost" size="sm">
                            <Icons.ellipsis className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-sm">{post.content}</p>
                    </div>
                    
                    {post.attachments && post.attachments.length > 0 && (
                      <div className="mb-4">
                        {post.attachments.map((attachment, i) => (
                          <div key={i} className="mt-2">
                            {attachment.type === 'image' && (
                              <div className="rounded-md overflow-hidden bg-accent h-48 flex items-center justify-center">
                                <div className="text-muted-foreground text-sm">[Image Placeholder]</div>
                              </div>
                            )}
                            {attachment.type === 'document' && (
                              <div className="border rounded-md p-3 flex items-center space-x-3">
                                <Icons.file className="h-5 w-5 text-muted-foreground" />
                                <span className="text-sm">{attachment.name}</span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <Separator className="my-4" />
                    
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-4">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => toggleLike(post.id)}
                          className={post.liked ? "text-primary" : ""}
                        >
                          <Icons.check className="h-4 w-4 mr-2" />
                          {post.likes} Likes
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Icons.post className="h-4 w-4 mr-2" />
                          {post.comments} Comments
                        </Button>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Icons.arrowRight className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="team" className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground">Team updates will appear here.</p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="company" className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground">Company news will appear here.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar Column */}
        <div className="space-y-6">
          {/* Announcements Card */}
          <Card>
            <CardHeader>
              <CardTitle>Announcements</CardTitle>
              <CardDescription>Important updates from leadership</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {announcements.map((announcement) => (
                <div key={announcement.id} className="pb-4 border-b last:border-b-0 last:pb-0">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-medium flex items-center">
                      {announcement.title}
                      {announcement.important && (
                        <Badge variant="destructive" className="ml-2">Important</Badge>
                      )}
                    </h3>
                    <span className="text-xs text-muted-foreground">{announcement.timestamp}</span>
                  </div>
                  <p className="text-sm mb-2">{announcement.content}</p>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Avatar className="h-5 w-5 mr-1">
                      <AvatarImage src={announcement.author.avatar} alt={announcement.author.name} />
                      <AvatarFallback>{announcement.author.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    {announcement.author.name}, {announcement.author.department}
                  </div>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full">
                View All Announcements
              </Button>
            </CardFooter>
          </Card>

          {/* Upcoming Events Card */}
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>Schedule for the coming weeks</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-primary/10 text-primary rounded-md h-12 w-12 flex flex-col items-center justify-center shrink-0">
                  <span className="text-xs font-medium">MAY</span>
                  <span className="text-lg font-bold">15</span>
                </div>
                <div>
                  <h4 className="font-medium text-sm">Office Relocation Day</h4>
                  <p className="text-xs text-muted-foreground">9:00 AM - 5:00 PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-primary/10 text-primary rounded-md h-12 w-12 flex flex-col items-center justify-center shrink-0">
                  <span className="text-xs font-medium">MAY</span>
                  <span className="text-lg font-bold">18</span>
                </div>
                <div>
                  <h4 className="font-medium text-sm">Q2 All-Hands Meeting</h4>
                  <p className="text-xs text-muted-foreground">2:00 PM - 4:00 PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-primary/10 text-primary rounded-md h-12 w-12 flex flex-col items-center justify-center shrink-0">
                  <span className="text-xs font-medium">MAY</span>
                  <span className="text-lg font-bold">20</span>
                </div>
                <div>
                  <h4 className="font-medium text-sm">Company Picnic</h4>
                  <p className="text-xs text-muted-foreground">12:00 PM - 5:00 PM</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full">
                View Calendar
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
} 