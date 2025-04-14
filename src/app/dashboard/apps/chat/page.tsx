'use client';

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';

type Message = {
  id: string;
  content: string;
  sender: string;
  timestamp: string;
  isUser: boolean;
};

type Contact = {
  id: string;
  name: string;
  status: 'online' | 'offline' | 'away';
  avatar: string;
  lastMessage: string;
  unread: number;
  timestamp: string;
};

const contacts: Contact[] = [
  {
    id: '1',
    name: 'Emma Wilson',
    status: 'online',
    avatar: '/avatars/emma.png',
    lastMessage: 'Are we still meeting today?',
    unread: 2,
    timestamp: '10:42 AM'
  },
  {
    id: '2',
    name: 'James Rodriguez',
    status: 'online',
    avatar: '/avatars/james.png',
    lastMessage: 'I\'ve sent the files you requested',
    unread: 0,
    timestamp: '9:30 AM'
  },
  {
    id: '3',
    name: 'Olivia Chen',
    status: 'offline',
    avatar: '/avatars/olivia.png',
    lastMessage: 'Let\'s catch up soon!',
    unread: 0,
    timestamp: 'Yesterday'
  },
  {
    id: '4',
    name: 'Michael Turner',
    status: 'away',
    avatar: '/avatars/michael.png',
    lastMessage: 'Thanks for your help',
    unread: 1,
    timestamp: '2 days ago'
  },
  {
    id: '5',
    name: 'Olivia Martinez',
    status: 'online',
    avatar: '/avatars/olivia.png',
    lastMessage: 'Looking forward to our meeting',
    unread: 0,
    timestamp: 'Monday'
  },
  {
    id: '6',
    name: 'David Kim',
    status: 'offline',
    avatar: '/avatars/david.png',
    lastMessage: 'Can you review my proposal?',
    unread: 0,
    timestamp: 'Sunday'
  },
  {
    id: '7',
    name: 'Marketing Team',
    status: 'online',
    avatar: '/avatars/team.png',
    lastMessage: 'Lisa: We need to finalize the campaign',
    unread: 3,
    timestamp: 'Friday'
  }
];

const initialMessages: Message[] = [
  {
    id: '1',
    content: 'Hey there! How are you?',
    sender: 'Emma Wilson',
    timestamp: '10:30 AM',
    isUser: false
  },
  {
    id: '2',
    content: 'I\'m good, thanks! Just working on the project.',
    sender: 'You',
    timestamp: '10:32 AM',
    isUser: true
  },
  {
    id: '3',
    content: 'Are we still meeting today at 2pm?',
    sender: 'Emma Wilson',
    timestamp: '10:35 AM',
    isUser: false
  },
  {
    id: '4',
    content: 'Yes, I\'ll be there. We need to discuss the new features.',
    sender: 'You',
    timestamp: '10:36 AM',
    isUser: true
  },
  {
    id: '5',
    content: 'Great! Should we invite the product team too?',
    sender: 'Emma Wilson',
    timestamp: '10:40 AM',
    isUser: false
  },
  {
    id: '6',
    content: 'Yes, that would be helpful. I\'ll send them an invite.',
    sender: 'You',
    timestamp: '10:41 AM',
    isUser: true
  },
  {
    id: '7',
    content: 'Are we still meeting today?',
    sender: 'Emma Wilson',
    timestamp: '10:42 AM',
    isUser: false
  }
];

export default function ChatApp() {
  const [activeContact, setActiveContact] = useState<Contact>(contacts[0]);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    
    const newMsg: Message = {
      id: Date.now().toString(),
      content: newMessage,
      sender: 'You',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isUser: true
    };
    
    setMessages([...messages, newMsg]);
    setNewMessage('');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'offline': return 'bg-gray-500';
      case 'away': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex flex-1 overflow-hidden">
        <Tabs defaultValue="chats" className="flex flex-1 overflow-hidden">
          <div className="w-80 border-r flex flex-col">
            <div className="p-4 border-b">
              <h2 className="text-xl font-semibold mb-4">Messages</h2>
              <TabsList className="w-full grid grid-cols-2">
                <TabsTrigger value="chats">Chats</TabsTrigger>
                <TabsTrigger value="contacts">Contacts</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="chats" className="flex-1 overflow-hidden flex flex-col">
              <div className="p-4">
                <Input placeholder="Search messages..." className="mb-2" />
              </div>
              
              <ScrollArea className="flex-1">
                <div className="px-2">
                  {contacts.map((contact) => (
                    <div 
                      key={contact.id} 
                      className={`flex items-center p-3 mb-1 rounded-lg cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 ${activeContact.id === contact.id ? 'bg-slate-100 dark:bg-slate-800' : ''}`}
                      onClick={() => setActiveContact(contact)}
                    >
                      <div className="relative">
                        <Avatar>
                          <AvatarImage src={contact.avatar} alt={contact.name} />
                          <AvatarFallback>{contact.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${getStatusColor(contact.status)}`}></span>
                      </div>
                      <div className="ml-3 flex-1 overflow-hidden">
                        <div className="flex justify-between items-center">
                          <h3 className="font-medium truncate">{contact.name}</h3>
                          <span className="text-xs text-muted-foreground">{contact.timestamp}</span>
                        </div>
                        <p className="text-sm text-muted-foreground truncate">{contact.lastMessage}</p>
                      </div>
                      {contact.unread > 0 && (
                        <Badge variant="destructive" className="ml-2">{contact.unread}</Badge>
                      )}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>
            
            <TabsContent value="contacts" className="flex-1 overflow-hidden flex flex-col">
              <div className="p-4">
                <Input placeholder="Search contacts..." className="mb-2" />
              </div>
              
              <ScrollArea className="flex-1">
                <div className="p-2">
                  {contacts.sort((a, b) => a.name.localeCompare(b.name)).map((contact) => (
                    <div 
                      key={contact.id} 
                      className="flex items-center p-3 rounded-lg cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800"
                      onClick={() => setActiveContact(contact)}
                    >
                      <div className="relative">
                        <Avatar>
                          <AvatarImage src={contact.avatar} alt={contact.name} />
                          <AvatarFallback>{contact.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${getStatusColor(contact.status)}`}></span>
                      </div>
                      <div className="ml-3">
                        <h3 className="font-medium">{contact.name}</h3>
                        <p className="text-xs text-muted-foreground capitalize">{contact.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>
          </div>
          
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="p-4 border-b flex items-center justify-between">
              <div className="flex items-center">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={activeContact.avatar} alt={activeContact.name} />
                  <AvatarFallback>{activeContact.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="ml-3">
                  <h2 className="font-semibold">{activeContact.name}</h2>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <span className={`inline-block w-2 h-2 rounded-full mr-1 ${getStatusColor(activeContact.status)}`}></span>
                    <span className="capitalize">{activeContact.status}</span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <Button variant="ghost" size="icon">
                  <PhoneIcon className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <VideoIcon className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <InfoIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div 
                    key={message.id} 
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    {!message.isUser && (
                      <Avatar className="h-8 w-8 mr-2 mt-1">
                        <AvatarImage src={activeContact.avatar} alt={activeContact.name} />
                        <AvatarFallback>{activeContact.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                    )}
                    <div className={`max-w-[70%] ${message.isUser ? 'bg-primary text-primary-foreground' : 'bg-muted'} rounded-lg px-4 py-2`}>
                      <p>{message.content}</p>
                      <p className={`text-xs mt-1 ${message.isUser ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>{message.timestamp}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            
            <div className="p-4 border-t">
              <div className="flex items-center">
                <Button variant="ghost" size="icon">
                  <PlusIcon className="h-5 w-5" />
                </Button>
                <Input 
                  placeholder="Type a message..." 
                  className="flex-1 mx-2" 
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleSendMessage();
                    }
                  }}
                />
                <Button variant="ghost" size="icon">
                  <SmileIcon className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" onClick={handleSendMessage}>
                  <SendIcon className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
}

// Icons
function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function VideoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 8-6 4 6 4V8Z" />
      <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
    </svg>
  );
}

function InfoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function SmileIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  );
}

function SendIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
} 