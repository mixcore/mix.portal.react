'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { X, Send, User, Users, Bot, MessageSquare, Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

// Mock data for online users
const onlineUsers = [
  { 
    id: '1', 
    name: 'John Doe', 
    avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=Brown&facialHairType=BeardLight&facialHairColor=Brown&clotheType=Hoodie&clotheColor=Gray&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Light', 
    status: 'online' 
  },
  { 
    id: '2', 
    name: 'Jane Smith', 
    avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=Blonde&facialHairType=Blank&clotheType=BlazerShirt&clotheColor=PastelBlue&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light', 
    status: 'online' 
  },
  { 
    id: '3', 
    name: 'Alex Johnson', 
    avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesar&accessoriesType=Prescription02&hairColor=Black&facialHairType=BeardMedium&facialHairColor=Black&clotheType=GraphicShirt&clotheColor=Red&graphicType=Skull&eyeType=Surprised&eyebrowType=RaisedExcited&mouthType=Twinkle&skinColor=DarkBrown', 
    status: 'away' 
  },
  { 
    id: '4', 
    name: 'Sarah Williams', 
    avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurly&accessoriesType=Round&hairColor=Red&facialHairType=Blank&clotheType=Overall&clotheColor=Blue&eyeType=Wink&eyebrowType=UnibrowNatural&mouthType=Tongue&skinColor=Tanned', 
    status: 'busy' 
  },
];

// Mock data for chats
const mockChats = {
  direct: [
    { id: '1', user: onlineUsers[0], messages: [
      { id: '1', content: 'Hey there!', sender: 'them', time: '10:30 AM' },
      { id: '2', content: 'Hi! How are you?', sender: 'me', time: '10:35 AM' },
    ]},
    { id: '2', user: onlineUsers[1], messages: [
      { id: '1', content: 'Can you help me with the project?', sender: 'them', time: '9:15 AM' },
    ]},
  ],
  groups: [
    { id: '1', name: 'Project Team', members: [onlineUsers[0], onlineUsers[1], onlineUsers[2]], messages: [
      { id: '1', content: 'Team meeting at 3PM', sender: onlineUsers[0], time: '8:30 AM' },
      { id: '2', content: "I'll be there", sender: onlineUsers[1], time: '8:32 AM' },
    ]},
    { id: '2', name: 'Marketing', members: [onlineUsers[1], onlineUsers[3]], messages: [
      { id: '1', content: 'New campaign draft is ready', sender: onlineUsers[3], time: '11:45 AM' },
    ]},
  ],
  ai: [
    { 
      id: '1', 
      name: 'General Assistant', 
      avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=WinterHat4&accessoriesType=Round&hatColor=Blue&facialHairType=Blank&clotheType=GraphicShirt&clotheColor=Gray&graphicType=Cumbia&eyeType=Surprised&eyebrowType=RaisedExcitedNatural&mouthType=Serious&skinColor=Pale',
      lastActive: '12:05 PM',
      topic: 'Project planning assistance',
      messages: [
        { id: '1', content: 'Hello! How can I help you today?', sender: 'ai', time: '9:00 AM' },
        { id: '2', content: 'I need help with setting up a new project', sender: 'me', time: '9:05 AM' },
        { id: '3', content: 'I can help with that! What kind of project are you setting up?', sender: 'ai', time: '9:06 AM' },
      ]
    },
    {
      id: '2',
      name: 'Code Assistant',
      avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Prescription02&facialHairType=BeardMajestic&facialHairColor=BrownDark&clotheType=Hoodie&clotheColor=Black&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Light',
      lastActive: 'Yesterday',
      topic: 'Debugging React components',
      messages: [
        { id: '1', content: 'Hi there! I can help with your code questions.', sender: 'ai', time: '10:30 AM' },
        { id: '2', content: 'I have a bug in my React component. The state is not updating correctly.', sender: 'me', time: '10:32 AM' },
        { id: '3', content: 'Let\'s take a look. Can you share the component code?', sender: 'ai', time: '10:33 AM' },
      ]
    },
    {
      id: '3',
      name: 'Research Assistant',
      avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Prescription01&hairColor=Blonde&facialHairType=Blank&clotheType=CollarSweater&clotheColor=PastelRed&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Pale',
      lastActive: '3 days ago',
      topic: 'Market research for new product',
      messages: [
        { id: '1', content: 'How can I assist with your research today?', sender: 'ai', time: '2:15 PM' },
        { id: '2', content: 'I need to find market statistics for our new product launch', sender: 'me', time: '2:20 PM' },
        { id: '3', content: 'I can help gather that information. What industry and region are you targeting?', sender: 'ai', time: '2:22 PM' },
      ]
    }
  ]
};

type ChatType = 'direct' | 'groups' | 'ai';

interface ChatPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ChatPanel({ isOpen, onClose }: ChatPanelProps) {
  const [activeTab, setActiveTab] = useState<ChatType>('direct');
  const [activeChatId, setActiveChatId] = useState<string | null>(null);
  const [messageInput, setMessageInput] = useState('');

  // Get current active chat based on type and ID
  const getActiveChat = () => {
    if (!activeChatId) return null;
    
    switch (activeTab) {
      case 'direct':
        return mockChats.direct.find(chat => chat.id === activeChatId);
      case 'groups':
        return mockChats.groups.find(chat => chat.id === activeChatId);
      case 'ai':
        return mockChats.ai.find(chat => chat.id === activeChatId);
      default:
        return null;
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageInput.trim()) return;
    
    // In a real app, you would send this message to your backend
    console.log('Sending message:', messageInput);
    setMessageInput('');
  };

  // Select a chat conversation
  const selectChat = (chatId: string) => {
    setActiveChatId(chatId);
  };

  const activeChat = getActiveChat();

  if (!isOpen) return null;

  return (
    <div className="h-[calc(100vh-7.5rem)] flex flex-col border-l bg-background w-72 md:w-80 overflow-hidden">
      <div className="p-2 border-b flex justify-between items-center shrink-0">
        <h3 className="font-semibold text-sm flex items-center">
          <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
          Chat
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="ml-1.5 cursor-help">
                  <Info className="h-3 w-3 text-muted-foreground" />
                </div>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="w-80 p-2">
                <p className="text-xs">
                    ...
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </h3>
        <Button variant="ghost" size="icon" className="h-7 w-7" onClick={onClose}>
          <X className="h-3.5 w-3.5" />
        </Button>
      </div>
      
      <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as ChatType)} className="flex-1 flex flex-col overflow-hidden">
        <div className="px-4 pt-2 pb-0 shrink-0">
          <TabsList className="grid grid-cols-3 w-full h-9 bg-muted rounded-md">
            <TabsTrigger 
              value="direct" 
              className="rounded-sm data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm flex items-center justify-center relative"
              aria-label="Direct messages"
            >
              <User className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Direct</span>
              {mockChats.direct.some(chat => chat.messages.some(m => m.sender === 'them')) && (
                <span className="absolute -top-1.5 -right-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-destructive text-[10px] font-medium text-destructive-foreground">
                  {mockChats.direct.filter(chat => chat.messages.some(m => m.sender === 'them')).length}
                </span>
              )}
            </TabsTrigger>
            <TabsTrigger 
              value="groups" 
              className="rounded-sm data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm flex items-center justify-center relative"
              aria-label="Group chats"
            >
              <Users className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Groups</span>
              {mockChats.groups.some(group => group.messages.length > 0) && (
                <span className="absolute -top-1.5 -right-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                  {mockChats.groups.filter(group => group.messages.length > 0).length}
                </span>
              )}
            </TabsTrigger>
            <TabsTrigger 
              value="ai" 
              className="rounded-sm data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm flex items-center justify-center"
              aria-label="AI assistant chat"
            >
              <Bot className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">AI</span>
            </TabsTrigger>
          </TabsList>
        </div>
      
        <div className="flex-1 flex flex-col">
          {!activeChatId ? (
            <TabsContent value={activeTab} className="flex-1 p-0 mt-2 mb-0 border-0 data-[state=active]:block data-[state=inactive]:hidden focus-visible:outline-none">
              <ScrollArea className="h-full">
                <div className="p-4">
                  {activeTab === 'direct' && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between px-2 py-1.5">
                        <p className="text-xs font-medium text-muted-foreground">Online Users</p>
                        <p className="text-xs text-muted-foreground">{onlineUsers.filter(u => u.status === 'online').length} online</p>
                      </div>
                      {onlineUsers.length > 0 ? (
                        <div className="space-y-1">
                          {onlineUsers.map(user => (
                            <div
                              key={user.id}
                              className="flex items-center gap-3 py-2 px-3 rounded-md hover:bg-accent/50 cursor-pointer transition-colors"
                              onClick={() => {
                                const chat = mockChats.direct.find(chat => chat.user.id === user.id);
                                if (chat) selectChat(chat.id);
                              }}
                            >
                              <div className="relative">
                                <Avatar className="h-9 w-9 border border-border">
                                  <div className="flex h-full w-full items-center justify-center bg-muted overflow-hidden">
                                    {user.avatar ? (
                                      <img src={user.avatar} alt={user.name} className="h-full w-full object-cover" />
                                    ) : (
                                      user.name.charAt(0)
                                    )}
                                  </div>
                                </Avatar>
                                <span className={`absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full ${
                                  user.status === 'online' ? 'bg-green-500' : 
                                  user.status === 'away' ? 'bg-yellow-500' : 'bg-red-500'
                                } ring-1 ring-background`}></span>
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                  <p className="text-sm font-medium truncate">{user.name}</p>
                                  <p className="text-xs text-muted-foreground">
                                    {(() => {
                                      const userChat = mockChats.direct.find(chat => chat.user.id === user.id);
                                      const messageCount = userChat?.messages.length || 0;
                                      return messageCount > 0 ? (
                                        <span className="inline-flex items-center justify-center h-4 w-4 rounded-full bg-primary/10 text-primary text-[10px]">
                                          {messageCount}
                                        </span>
                                      ) : null;
                                    })()}
                                  </p>
                                </div>
                                <p className="text-xs text-muted-foreground truncate">
                                  {user.status === 'online' ? 'Online' : 
                                   user.status === 'away' ? 'Away' : 'Busy'}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
                          <div className="h-12 w-12 rounded-full bg-muted/50 flex items-center justify-center mb-3">
                            <User className="h-6 w-6 text-muted-foreground" />
                          </div>
                          <h3 className="text-sm font-medium">No online users</h3>
                          <p className="text-xs text-muted-foreground mt-1 mb-4">Looks like no one is online right now.</p>
                        </div>
                      )}
                    </div>
                  )}
                  
                  {activeTab === 'groups' && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between px-2 py-1.5">
                        <p className="text-xs font-medium text-muted-foreground">Group Chats</p>
                        <Button variant="ghost" size="icon" className="h-5 w-5 rounded-full">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                          <span className="sr-only">Create Group</span>
                        </Button>
                      </div>
                      {mockChats.groups.length > 0 ? (
                        <div className="space-y-1">
                          {mockChats.groups.map(group => (
                            <div
                              key={group.id}
                              className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent/50 cursor-pointer transition-colors"
                              onClick={() => selectChat(group.id)}
                            >
                              <div className="relative flex items-center justify-center h-9 w-9">
                                {group.members.slice(0, 2).map((member, index) => (
                                  <Avatar 
                                    key={member.id} 
                                    className={`border-2 border-background ${
                                      index === 0 
                                        ? 'h-6 w-6 absolute left-0.5 bottom-0.5' 
                                        : 'h-6 w-6 absolute right-0.5 top-0.5'
                                    }`}
                                  >
                                    <div className="flex h-full w-full items-center justify-center bg-muted text-xs overflow-hidden">
                                      {member.avatar ? (
                                        <img src={member.avatar} alt={member.name} className="h-full w-full object-cover" />
                                      ) : (
                                        member.name.charAt(0)
                                      )}
                                    </div>
                                  </Avatar>
                                ))}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                  <p className="text-sm font-medium truncate">{group.name}</p>
                                  <p className="text-xs text-muted-foreground">
                                    {group.messages.length > 0 && (
                                      <span className="inline-flex items-center justify-center h-4 w-4 rounded-full bg-primary/10 text-primary text-[10px]">
                                        {group.messages.length}
                                      </span>
                                    )}
                                  </p>
                                </div>
                                <p className="text-xs text-muted-foreground truncate">
                                  {group.members.length} members
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
                          <div className="h-12 w-12 rounded-full bg-muted/50 flex items-center justify-center mb-3">
                            <Users className="h-6 w-6 text-muted-foreground" />
                          </div>
                          <h3 className="text-sm font-medium">No group chats</h3>
                          <p className="text-xs text-muted-foreground mt-1 mb-4">Create a group to start chatting with multiple people.</p>
                          <Button variant="outline" size="sm" className="gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                            Create Group
                          </Button>
                        </div>
                      )}
                    </div>
                  )}
                  
                  {activeTab === 'ai' && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between px-2 py-1.5">
                        <p className="text-xs font-medium text-muted-foreground">AI Assistants</p>
                        <Button variant="ghost" size="icon" className="h-5 w-5 rounded-full">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                          <span className="sr-only">New AI Chat</span>
                        </Button>
                      </div>
                      {mockChats.ai.length > 0 ? (
                        <div className="space-y-1">
                          {mockChats.ai.map(ai => (
                            <div
                              key={ai.id}
                              className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent/50 cursor-pointer transition-colors"
                              onClick={() => selectChat(ai.id)}
                            >
                              <Avatar className="h-9 w-9 border border-primary/20">
                                <div className="flex h-full w-full items-center justify-center bg-primary/10 text-primary overflow-hidden">
                                  {ai.avatar ? (
                                    <img src={ai.avatar} alt={ai.name} className="h-full w-full object-cover" />
                                  ) : (
                                    <Bot className="h-5 w-5" />
                                  )}
                                </div>
                              </Avatar>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                  <p className="text-sm font-medium truncate">{ai.name}</p>
                                  <p className="text-xs text-muted-foreground">{ai.lastActive}</p>
                                </div>
                                <p className="text-xs text-muted-foreground truncate">
                                  {ai.topic}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
                          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                            <Bot className="h-6 w-6 text-primary" />
                          </div>
                          <h3 className="text-sm font-medium">No AI conversations</h3>
                          <p className="text-xs text-muted-foreground mt-1 mb-4">
                            Start a new conversation with an AI assistant.
                          </p>
                          <Button variant="outline" size="sm" className="gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                            New AI Chat
                          </Button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </ScrollArea>
            </TabsContent>
          ) : (
            <div className="flex flex-col h-full overflow-hidden">
              <div className="py-2 px-3 border-b flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2">
                  {activeTab === 'direct' && activeChat && (
                    <>
                      <div className="relative">
                        <Avatar className="h-7 w-7">
                          <div className="flex h-full w-full items-center justify-center bg-muted overflow-hidden">
                            {(activeChat as any).user.avatar ? (
                              <img src={(activeChat as any).user.avatar} alt={(activeChat as any).user.name} className="h-full w-full object-cover" />
                            ) : (
                              (activeChat as any).user.name.charAt(0)
                            )}
                          </div>
                        </Avatar>
                        <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-green-500 ring-1 ring-background"></span>
                      </div>
                      <div>
                        <p className="text-sm font-medium leading-none">{(activeChat as any).user.name}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">Online</p>
                      </div>
                    </>
                  )}
                  {activeTab === 'groups' && activeChat && (
                    <>
                      <div className="relative h-7 w-7 flex items-center justify-center">
                        {(activeChat as any).members.slice(0, 2).map((member: any, index: number) => (
                          <Avatar 
                            key={member.id} 
                            className={`border border-background ${
                              index === 0 
                                ? 'h-5 w-5 absolute left-0 bottom-0' 
                                : 'h-5 w-5 absolute right-0 top-0'
                            }`}
                          >
                            <div className="flex h-full w-full items-center justify-center bg-muted text-xs overflow-hidden">
                              {member.avatar ? (
                                <img src={member.avatar} alt={member.name} className="h-full w-full object-cover" />
                              ) : (
                                member.name.charAt(0)
                              )}
                            </div>
                          </Avatar>
                        ))}
                      </div>
                      <div>
                        <p className="text-sm font-medium leading-none">{(activeChat as any).name}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{(activeChat as any).members.length} members</p>
                      </div>
                    </>
                  )}
                  {activeTab === 'ai' && activeChat && (
                    <>
                      <Avatar className="h-7 w-7">
                        <div className="flex h-full w-full items-center justify-center bg-primary/10 text-primary overflow-hidden">
                          {(activeChat as any).avatar ? (
                            <img src={(activeChat as any).avatar} alt={(activeChat as any).name} className="h-full w-full object-cover" />
                          ) : (
                            <Bot className="h-3.5 w-3.5" />
                          )}
                        </div>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium leading-none">{(activeChat as any).name}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{(activeChat as any).topic}</p>
                      </div>
                    </>
                  )}
                </div>
                <div className="flex items-center gap-1">
                  {activeTab !== 'ai' && (
                    <Button variant="ghost" size="icon" className="h-7 w-7">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                      <span className="sr-only">Call</span>
                    </Button>
                  )}
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="h-7 w-7" 
                    onClick={() => setActiveChatId(null)}
                  >
                    <X className="h-3.5 w-3.5" />
                    <span className="sr-only">Close chat</span>
                  </Button>
                </div>
              </div>
            
              <ScrollArea className="flex-1 overflow-y-auto">
                <div className="space-y-4 p-3">
                  {activeChat?.messages.map((message: any) => (
                    <div 
                      key={message.id} 
                      className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                    >
                      {message.sender !== 'me' && message.sender !== 'ai' && activeTab === 'groups' && (
                        <div className="flex-shrink-0 mr-2 mt-1">
                          <Avatar className="h-6 w-6">
                            <div className="flex h-full w-full items-center justify-center bg-muted overflow-hidden">
                              {typeof message.sender === 'object' && message.sender.avatar ? (
                                <img src={message.sender.avatar} alt={message.sender.name} className="h-full w-full object-cover" />
                              ) : (
                                <span className="text-xs">
                                  {typeof message.sender === 'object' ? message.sender.name.charAt(0) : '?'}
                                </span>
                              )}
                            </div>
                          </Avatar>
                        </div>
                      )}
                      <div 
                        className={`max-w-[85%] px-4 py-2.5 rounded-2xl ${
                          message.sender === 'me' 
                            ? 'bg-primary text-primary-foreground rounded-tr-none' 
                            : message.sender === 'ai'
                              ? 'bg-secondary text-secondary-foreground rounded-tl-none border border-border'
                              : 'bg-muted text-muted-foreground rounded-tl-none'
                        }`}
                      >
                        {activeTab === 'groups' && message.sender !== 'me' && (
                          <p className="text-xs font-medium mb-1 opacity-80">
                            {typeof message.sender === 'object' ? message.sender.name : ''}
                          </p>
                        )}
                        <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">{message.content}</p>
                        <p className="text-[10px] opacity-60 text-right mt-1">{message.time}</p>
                      </div>
                      {message.sender === 'me' && (
                        <div className="flex items-center ml-2 text-muted-foreground">
                          <div className="h-2 w-2 rounded-full bg-primary/25"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            
              <form onSubmit={handleSendMessage} className="p-4 border-t shrink-0">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-1.5">
                    <Button type="button" size="icon" variant="ghost" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                      <span className="sr-only">Add attachment</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-paperclip"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>
                    </Button>
                    <Button type="button" size="icon" variant="ghost" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                      <span className="sr-only">Add emoji</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-smile"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>
                    </Button>
                    <div className="relative flex-1">
                      <Input 
                        placeholder="Type a message..." 
                        value={messageInput}
                        onChange={e => setMessageInput(e.target.value)}
                        className="pl-3 pr-12 py-5 h-10 bg-background border-input"
                      />
                      <Button 
                        size="sm" 
                        type="submit" 
                        disabled={!messageInput.trim()} 
                        className="absolute right-1 top-1 h-8 px-2.5"
                      >
                        <Send className="h-4 w-4" />
                        <span className="sr-only">Send message</span>
                      </Button>
                    </div>
                  </div>
                  {activeTab === 'ai' && (
                    <div className="text-[10px] text-muted-foreground text-center">
                      AI responses are generated and may not always be accurate.
                    </div>
                  )}
                </div>
              </form>
            </div>
          )}
        </div>
      </Tabs>
    </div>
  );
}

export default ChatPanel; 