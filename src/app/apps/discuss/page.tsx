'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

type Channel = {
  id: string;
  name: string;
  description: string;
  members: number;
  unread: number;
  lastActivity: string;
  type: 'team' | 'project' | 'private';
};

const channels: Channel[] = [
  {
    id: '1',
    name: 'general',
    description: 'General discussion for the team',
    members: 24,
    unread: 5,
    lastActivity: '10 minutes ago',
    type: 'team'
  },
  {
    id: '2',
    name: 'marketing',
    description: 'Marketing team channel',
    members: 12,
    unread: 0,
    lastActivity: '1 hour ago',
    type: 'team'
  },
  {
    id: '3',
    name: 'design',
    description: 'Design team discussions',
    members: 8,
    unread: 3,
    lastActivity: '2 hours ago',
    type: 'team'
  },
  {
    id: '4',
    name: 'website-redesign',
    description: 'Project for redesigning the website',
    members: 15,
    unread: 12,
    lastActivity: '30 minutes ago',
    type: 'project'
  },
  {
    id: '5',
    name: 'product-launch',
    description: 'Upcoming product launch coordination',
    members: 18,
    unread: 0,
    lastActivity: '3 hours ago',
    type: 'project'
  },
  {
    id: '6',
    name: 'leadership',
    description: 'Private channel for leadership team',
    members: 5,
    unread: 2,
    lastActivity: '1 day ago',
    type: 'private'
  }
];

type Message = {
  id: string;
  content: string;
  sender: {
    id: string;
    name: string;
    avatar: string;
  };
  timestamp: string;
  reactions?: {
    emoji: string;
    count: number;
  }[];
  attachments?: {
    name: string;
    size: string;
    type: string;
  }[];
};

const messages: Message[] = [
  {
    id: '1',
    content: 'Hey team! I wanted to share the latest designs for the homepage.',
    sender: {
      id: '1',
      name: 'Emily Johnson',
      avatar: '/avatars/emily.png'
    },
    timestamp: '10:15 AM',
    reactions: [
      { emoji: '👍', count: 3 },
      { emoji: '❤️', count: 2 }
    ],
    attachments: [
      { name: 'Homepage_Design_v2.fig', size: '4.2 MB', type: 'Figma' }
    ]
  },
  {
    id: '2',
    content: 'These look great! The color scheme is much better than the previous version.',
    sender: {
      id: '2',
      name: 'David Wilson',
      avatar: '/avatars/david.png'
    },
    timestamp: '10:18 AM',
    reactions: [
      { emoji: '👍', count: 1 }
    ]
  },
  {
    id: '3',
    content: 'I agree with David. When do you think we can start implementation?',
    sender: {
      id: '3',
      name: 'Sarah Kim',
      avatar: '/avatars/sarah.png'
    },
    timestamp: '10:22 AM'
  },
  {
    id: '4',
    content: 'We can start next week after the final approval from the marketing team. @Michael can you confirm?',
    sender: {
      id: '1',
      name: 'Emily Johnson',
      avatar: '/avatars/emily.png'
    },
    timestamp: '10:25 AM'
  },
  {
    id: '5',
    content: 'Here are the specifications for developers:',
    sender: {
      id: '4',
      name: 'Michael Brown',
      avatar: '/avatars/michael.png'
    },
    timestamp: '10:30 AM',
    attachments: [
      { name: 'Implementation_Specs.pdf', size: '2.8 MB', type: 'PDF' }
    ]
  }
];

export default function DiscussApp() {
  const [activeTab, setActiveTab] = useState('channels');
  const [activeChannel, setActiveChannel] = useState(channels[0]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    // In a real implementation, this would send the message to the backend
    setNewMessage('');
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex-grow flex overflow-hidden">
        <div className="w-64 border-r flex flex-col">
          <div className="p-4 border-b">
            <h2 className="text-xl font-semibold">Discuss</h2>
          </div>
          
          <Tabs defaultValue="channels" onValueChange={setActiveTab} className="flex-1 flex flex-col">
            <div className="border-b">
              <TabsList className="w-full justify-start px-2">
                <TabsTrigger value="channels">Channels</TabsTrigger>
                <TabsTrigger value="direct">Direct Messages</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="channels" className="flex-1 flex flex-col p-0">
              <div className="p-3 border-b">
                <Input placeholder="Search channels..." size="sm" />
              </div>
              
              <ScrollArea className="flex-1">
                <div className="p-2">
                  {channels.map((channel) => (
                    <div
                      key={channel.id}
                      className={`flex items-center p-2 rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 ${activeChannel.id === channel.id ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                      onClick={() => setActiveChannel(channel)}
                    >
                      <div className="mr-2 text-lg">#</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="font-medium truncate">{channel.name}</span>
                          {channel.unread > 0 && (
                            <Badge variant="secondary" className="ml-2">{channel.unread}</Badge>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground truncate">{channel.members} members</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
              
              <div className="p-3 border-t">
                <Button variant="outline" size="sm" className="w-full">
                  <PlusIcon className="h-4 w-4 mr-2" />
                  Create Channel
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="direct" className="flex-1 p-0">
              <div className="p-3 border-b">
                <Input placeholder="Search users..." size="sm" />
              </div>
              
              <ScrollArea className="flex-1">
                <div className="p-2">
                  <div className="flex items-center p-2 rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarImage src="/avatars/david.png" alt="David Wilson" />
                      <AvatarFallback>DW</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">David Wilson</span>
                        <Badge variant="secondary" className="ml-2">3</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground truncate">Online</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-2 rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarImage src="/avatars/sarah.png" alt="Sarah Kim" />
                      <AvatarFallback>SK</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Sarah Kim</span>
                      </div>
                      <p className="text-xs text-muted-foreground truncate">Away</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-2 rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarImage src="/avatars/michael.png" alt="Michael Brown" />
                      <AvatarFallback>MB</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Michael Brown</span>
                        <Badge variant="secondary" className="ml-2">1</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground truncate">Online</p>
                    </div>
                  </div>
                </div>
              </ScrollArea>
              
              <div className="p-3 border-t">
                <Button variant="outline" size="sm" className="w-full">
                  <PlusIcon className="h-4 w-4 mr-2" />
                  New Message
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="flex-1 flex flex-col">
          <div className="p-4 border-b flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold flex items-center">
                {activeTab === 'channels' ? (
                  <>
                    <span className="mr-2">#</span>
                    {activeChannel.name}
                  </>
                ) : 'David Wilson'}
              </h2>
              <p className="text-sm text-muted-foreground">
                {activeTab === 'channels' ? 
                  `${activeChannel.description} • ${activeChannel.members} members` : 
                  'Online'}
              </p>
            </div>
            <div className="flex">
              <Button variant="ghost" size="icon">
                <PhoneIcon className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <VideoIcon className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <InfoIcon className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-6">
              {messages.map((message) => (
                <div key={message.id} className="flex">
                  <Avatar className="h-10 w-10 mt-1 mr-3">
                    <AvatarImage src={message.sender.avatar} alt={message.sender.name} />
                    <AvatarFallback>{message.sender.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-baseline">
                      <span className="font-semibold mr-2">{message.sender.name}</span>
                      <span className="text-xs text-muted-foreground">{message.timestamp}</span>
                    </div>
                    <p className="mt-1">{message.content}</p>
                    
                    {message.attachments && message.attachments.length > 0 && (
                      <div className="mt-2">
                        {message.attachments.map((attachment, index) => (
                          <div key={index} className="flex items-center p-2 border rounded-md w-fit">
                            <FileIcon className="h-4 w-4 mr-2" />
                            <div>
                              <p className="text-sm font-medium">{attachment.name}</p>
                              <p className="text-xs text-muted-foreground">{attachment.size} • {attachment.type}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {message.reactions && message.reactions.length > 0 && (
                      <div className="flex mt-2 gap-1">
                        {message.reactions.map((reaction, index) => (
                          <div key={index} className="flex items-center border rounded-full px-2 py-1 text-xs">
                            <span className="mr-1">{reaction.emoji}</span>
                            <span>{reaction.count}</span>
                          </div>
                        ))}
                        <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full">
                          <PlusIcon className="h-3 w-3" />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          
          <div className="p-4 border-t">
            <Textarea 
              placeholder="Type a message..." 
              className="w-full resize-none"
              rows={3}
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
            />
            <div className="flex justify-between mt-2">
              <div className="flex">
                <Button variant="ghost" size="icon">
                  <PaperclipIcon className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <SmileIcon className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <AtSignIcon className="h-5 w-5" />
                </Button>
              </div>
              <Button onClick={handleSendMessage}>Send</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Icons
function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function VideoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m22 8-6 4 6 4V8Z" />
      <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
    </svg>
  );
}

function InfoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function PaperclipIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
    </svg>
  );
}

function SmileIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  );
}

function AtSignIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" />
    </svg>
  );
}

function FileIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  );
}
