'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { 
  Search, 
  Bell, 
  MessageSquare, 
  ThumbsUp, 
  Bookmark, 
  Share2, 
  Filter, 
  Settings, 
  Tag,
  Globe,
  Layout,
  Server,
  Terminal,
  Briefcase,
  Palette,
} from 'lucide-react';
import { mockPosts, mockComments, mockCategories, mockTags, mockUsers, forumStats } from './mock-data';
import { Post } from './types';
import { NewPostDialog } from './components/new-post-dialog';

export default function ForumApp() {
  const [activePost, setActivePost] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const getIconComponent = (iconName: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      'Globe': <Globe className="h-4 w-4 mr-2" />,
      'Layout': <Layout className="h-4 w-4 mr-2" />,
      'Server': <Server className="h-4 w-4 mr-2" />,
      'Terminal': <Terminal className="h-4 w-4 mr-2" />,
      'Briefcase': <Briefcase className="h-4 w-4 mr-2" />,
      'Palette': <Palette className="h-4 w-4 mr-2" />,
    };
    
    return iconMap[iconName] || <Tag className="h-4 w-4 mr-2" />;
  };

  // Filter posts based on search term
  const filteredPosts = searchTerm 
    ? mockPosts.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : mockPosts;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  
  const renderPostList = (posts: Post[]) => {
    return posts.map(post => (
      <Card key={post.id} className="cursor-pointer hover:bg-muted/50 transition-colors" onClick={() => setActivePost(post.id)}>
        <CardHeader className="pb-3">
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src={post.author.avatar} />
                <AvatarFallback>{post.author.name.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{post.author.name}</p>
                <p className="text-sm text-muted-foreground">@{post.author.username} • {post.createdAt}</p>
              </div>
            </div>
            {post.isPinned && (
              <Badge variant="outline" className="text-xs">Pinned</Badge>
            )}
          </div>
          <CardTitle className="text-lg">{post.title}</CardTitle>
          <div className="flex flex-wrap gap-2 mt-2">
            {post.tags.map(tag => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
        </CardHeader>
        <CardContent className="pb-3">
          <p className="line-clamp-2">{post.content}</p>
        </CardContent>
        <CardFooter className="border-t pt-3 pb-3 flex justify-between">
          <div className="flex gap-4 text-sm">
            <div className="flex items-center">
              <ThumbsUp className="h-4 w-4 mr-1" />
              <span>{post.likes}</span>
            </div>
            <div className="flex items-center">
              <MessageSquare className="h-4 w-4 mr-1" />
              <span>{post.replies}</span>
            </div>
          </div>
          <Button variant="ghost" size="sm">
            <Bookmark className="h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    ));
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex-grow p-4 md:p-6 space-y-6 overflow-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Forum</h1>
          <div className="flex gap-2">
            <Button variant="outline" size="sm"><Bell className="h-4 w-4 mr-2" /> Notifications</Button>
            <Button variant="outline" size="sm"><Settings className="h-4 w-4 mr-2" /> Settings</Button>
            <NewPostDialog onPostCreated={() => {
              // Refresh or update the post list when a new post is created
              // For now, we'll just log a message
              console.log('New post created!');
            }} />
          </div>
        </div>
        
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search discussions..."
              className="pl-8"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" /> Filter
          </Button>
        </div>

        {activePost ? (
          <div className="space-y-6">
            <Button variant="ghost" onClick={() => setActivePost(null)}>
              ← Back to Discussions
            </Button>
            
            {mockPosts.filter(post => post.id === activePost).map(post => (
              <div key={post.id} className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2">
                        <Avatar>
                          <AvatarImage src={post.author.avatar} />
                          <AvatarFallback>{post.author.name.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{post.author.name}</p>
                          <p className="text-sm text-muted-foreground">
                            @{post.author.username} • {post.createdAt}
                            {post.viewCount && <span> • {post.viewCount} views</span>}
                          </p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">Follow</Button>
                    </div>
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-xl">{post.title}</CardTitle>
                      {post.isPinned && (
                        <Badge variant="outline" className="ml-2">Pinned</Badge>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {post.tags.map(tag => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="whitespace-pre-line">{post.content}</p>
                  </CardContent>
                  <CardFooter className="border-t pt-4 flex justify-between">
                    <div className="flex gap-4">
                      <Button variant="ghost" size="sm">
                        <ThumbsUp className="h-4 w-4 mr-2" /> {post.likes}
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MessageSquare className="h-4 w-4 mr-2" /> {post.replies}
                      </Button>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <Bookmark className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Replies</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {mockComments.filter(comment => comment.postId === post.id).map(comment => (
                      <div key={comment.id} className="border-b pb-4 last:border-0 last:pb-0">
                        <div className="flex items-center gap-2 mb-2">
                          <Avatar>
                            <AvatarImage src={comment.author.avatar} />
                            <AvatarFallback>{comment.author.name.substring(0, 2)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{comment.author.name}</p>
                            <p className="text-sm text-muted-foreground">@{comment.author.username} • {comment.createdAt}</p>
                          </div>
                        </div>
                        <p className="ml-10">{comment.content}</p>
                        <div className="ml-10 mt-2 flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <ThumbsUp className="h-3 w-3 mr-1" /> {comment.likes}
                          </Button>
                          <Button variant="ghost" size="sm">Reply</Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                  <CardFooter className="border-t pt-4">
                    <div className="w-full space-y-4">
                      <Textarea placeholder="Write a reply..." className="w-full" />
                      <div className="flex justify-end">
                        <Button>Post Reply</Button>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        ) : (
          <Tabs defaultValue="discussions" className="w-full">
            <TabsList>
              <TabsTrigger value="discussions">Discussions</TabsTrigger>
              <TabsTrigger value="popular">Popular</TabsTrigger>
              <TabsTrigger value="following">Following</TabsTrigger>
              <TabsTrigger value="latest">Latest</TabsTrigger>
            </TabsList>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
              <div className="md:col-span-3">
                <TabsContent value="discussions" className="mt-0 space-y-4">
                  {filteredPosts.length > 0 ? (
                    renderPostList(filteredPosts)
                  ) : (
                    <Card>
                      <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                        <p className="text-muted-foreground mb-4">No discussions found matching your search.</p>
                        <Button variant="outline" onClick={() => setSearchTerm('')}>Clear Search</Button>
                      </CardContent>
                    </Card>
                  )}
                </TabsContent>
                
                <TabsContent value="popular" className="mt-0 space-y-4">
                  {renderPostList(mockPosts.sort((a, b) => b.likes - a.likes))}
                </TabsContent>
                
                <TabsContent value="following" className="mt-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>Followed Topics & Users</CardTitle>
                      <CardDescription>Discussions from topics and users you follow</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">Sign in to see discussions from topics and users you follow.</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="latest" className="mt-0 space-y-4">
                  {renderPostList(mockPosts)}
                </TabsContent>
              </div>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-base">Forum Stats</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Posts</span>
                        <span className="font-medium">{forumStats.totalPosts}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Comments</span>
                        <span className="font-medium">{forumStats.totalComments}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Users</span>
                        <span className="font-medium">{forumStats.totalUsers}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Active Users</span>
                        <span className="font-medium">{forumStats.activeUsers}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Posts Today</span>
                        <span className="font-medium">{forumStats.postsToday}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base flex items-center">
                      <Tag className="h-4 w-4 mr-2" /> Categories
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {mockCategories.map(category => (
                        <div key={category.id} className="flex justify-between items-center">
                          <span className="text-sm flex items-center">
                            {category.icon && getIconComponent(category.icon)}
                            {category.name}
                          </span>
                          <Badge variant="secondary">{category.count}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Popular Tags</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {mockTags.map(tag => (
                        <Badge key={tag.id} variant="outline" className="cursor-pointer">
                          {tag.name} ({tag.count})
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Top Contributors</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {mockUsers.map(user => (
                        <div key={user.id} className="flex items-center gap-2">
                          <Avatar>
                            <AvatarImage src={user.avatar} />
                            <AvatarFallback>{user.name.substring(0, 2)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">{user.name}</p>
                            <p className="text-xs text-muted-foreground">@{user.username}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </Tabs>
        )}
      </div>
    </div>
  );
} 