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
      name: 'AI Assistant', 
      avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=WinterHat4&accessoriesType=Round&hatColor=Blue&facialHairType=Blank&clotheType=GraphicShirt&clotheColor=Gray&graphicType=Cumbia&eyeType=Surprised&eyebrowType=RaisedExcitedNatural&mouthType=Serious&skinColor=Pale',
      messages: [
        { id: '1', content: 'Hello! How can I help you today?', sender: 'ai', time: '9:00 AM' },
        { id: '2', content: 'I need help with setting up a new project', sender: 'me', time: '9:05 AM' },
        { id: '3', content: 'I can help with that! What kind of project are you setting up?', sender: 'ai', time: '9:06 AM' },
      ]
    },
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
    <div className="h-full flex flex-col border-l bg-background w-72 md:w-80">
      <div className="p-3 border-b flex justify-between items-center">
        <h3 className="font-semibold text-sm flex items-center">
          <MessageSquare className="w-4 h-4 mr-2" />
          Chat
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="ml-2 cursor-help">
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
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>
      
      <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as ChatType)} className="flex-1 flex flex-col">
        <div className="border-b">
          <TabsList className="grid grid-cols-3 w-full bg-transparent h-11 p-0">
            <TabsTrigger 
              value="direct" 
              className="flex items-center justify-center py-3 relative rounded-none border-b-2 data-[state=inactive]:border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              aria-label="Direct messages"
            >
              <User className={`h-4 w-4 mr-2 ${activeTab === 'direct' ? 'text-primary' : 'text-muted-foreground'}`} />
              <span className={`hidden sm:inline ${activeTab === 'direct' ? 'font-medium' : ''}`}>Direct</span>
              <div className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">
                2
              </div>
            </TabsTrigger>
            <TabsTrigger 
              value="groups" 
              className="flex items-center justify-center py-3 relative rounded-none border-b-2 data-[state=inactive]:border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              aria-label="Group chats"
            >
              <Users className={`h-4 w-4 mr-2 ${activeTab === 'groups' ? 'text-primary' : 'text-muted-foreground'}`} />
              <span className={`hidden sm:inline ${activeTab === 'groups' ? 'font-medium' : ''}`}>Groups</span>
              <div className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 text-[10px] font-medium text-white">
                1
              </div>
            </TabsTrigger>
            <TabsTrigger 
              value="ai" 
              className="flex items-center justify-center py-3 relative rounded-none border-b-2 data-[state=inactive]:border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              aria-label="AI assistant chat"
            >
              <Bot className={`h-4 w-4 mr-2 ${activeTab === 'ai' ? 'text-primary' : 'text-muted-foreground'}`} />
              <span className={`hidden sm:inline ${activeTab === 'ai' ? 'font-medium' : ''}`}>AI</span>
            </TabsTrigger>
          </TabsList>
        </div>
      
        <div className="flex-1 flex flex-col">
          {!activeChatId ? (
            <TabsContent value={activeTab} className="flex-1 p-0 m-0 border-0">
              <ScrollArea className="h-full">
                <div className="p-2">
                  {activeTab === 'direct' && (
                    <div className="space-y-2">
                      <p className="text-xs font-medium text-muted-foreground px-2 py-1">Online Users</p>
                      {onlineUsers.map(user => (
                        <div
                          key={user.id}
                          className="flex items-center gap-2 p-2 rounded-md hover:bg-accent cursor-pointer"
                          onClick={() => {
                            const chat = mockChats.direct.find(chat => chat.user.id === user.id);
                            if (chat) selectChat(chat.id);
                          }}
                        >
                          <div className="relative">
                            <Avatar className="h-8 w-8">
                              <div className="flex h-full w-full items-center justify-center bg-muted overflow-hidden">
                                {user.avatar ? (
                                  <img src={user.avatar} alt={user.name} className="h-full w-full object-cover" />
                                ) : (
                                  user.name.charAt(0)
                                )}
                              </div>
                            </Avatar>
                            <span className={`absolute bottom-0 right-0 h-2 w-2 rounded-full ${
                              user.status === 'online' ? 'bg-green-500' : 
                              user.status === 'away' ? 'bg-yellow-500' : 'bg-red-500'
                            } ring-1 ring-background`}></span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium truncate">{user.name}</p>
                            <p className="text-xs text-muted-foreground truncate">
                              {user.status === 'online' ? 'Online' : 
                               user.status === 'away' ? 'Away' : 'Busy'}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {activeTab === 'groups' && (
                    <div className="space-y-2">
                      <p className="text-xs font-medium text-muted-foreground px-2 py-1">Group Chats</p>
                      {mockChats.groups.map(group => (
                        <div
                          key={group.id}
                          className="flex items-center gap-2 p-2 rounded-md hover:bg-accent cursor-pointer"
                          onClick={() => selectChat(group.id)}
                        >
                          <div className="flex -space-x-2 h-8 w-8">
                            {group.members.slice(0, 2).map((member, index) => (
                              <Avatar key={member.id} className="h-6 w-6 border-2 border-background">
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
                            <p className="text-sm font-medium truncate">{group.name}</p>
                            <p className="text-xs text-muted-foreground truncate">
                              {group.members.length} members
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {activeTab === 'ai' && (
                    <div className="space-y-2">
                      <p className="text-xs font-medium text-muted-foreground px-2 py-1">AI Assistants</p>
                      {mockChats.ai.map(ai => (
                        <div
                          key={ai.id}
                          className="flex items-center gap-2 p-2 rounded-md hover:bg-accent cursor-pointer"
                          onClick={() => selectChat(ai.id)}
                        >
                          <Avatar className="h-8 w-8">
                            <div className="flex h-full w-full items-center justify-center bg-primary/10 text-primary overflow-hidden">
                              {ai.avatar ? (
                                <img src={ai.avatar} alt={ai.name} className="h-full w-full object-cover" />
                              ) : (
                                <Bot className="h-4 w-4" />
                              )}
                            </div>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium truncate">{ai.name}</p>
                            <p className="text-xs text-muted-foreground truncate">
                              AI Assistant
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </ScrollArea>
            </TabsContent>
          ) : (
            <div className="flex flex-col h-full">
              <div className="p-3 border-b flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {activeTab === 'direct' && activeChat && (
                    <>
                      <Avatar className="h-6 w-6">
                        <div className="flex h-full w-full items-center justify-center bg-muted overflow-hidden">
                          {(activeChat as any).user.avatar ? (
                            <img src={(activeChat as any).user.avatar} alt={(activeChat as any).user.name} className="h-full w-full object-cover" />
                          ) : (
                            (activeChat as any).user.name.charAt(0)
                          )}
                        </div>
                      </Avatar>
                      <span className="text-sm font-medium">{(activeChat as any).user.name}</span>
                    </>
                  )}
                  {activeTab === 'groups' && activeChat && (
                    <>
                      <div className="flex -space-x-1">
                        {(activeChat as any).members.slice(0, 2).map((member: any) => (
                          <Avatar key={member.id} className="h-5 w-5 border border-background">
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
                      <span className="text-sm font-medium">{(activeChat as any).name}</span>
                    </>
                  )}
                  {activeTab === 'ai' && activeChat && (
                    <>
                      <Avatar className="h-6 w-6">
                        <div className="flex h-full w-full items-center justify-center bg-primary/10 text-primary overflow-hidden">
                          {(activeChat as any).avatar ? (
                            <img src={(activeChat as any).avatar} alt={(activeChat as any).name} className="h-full w-full object-cover" />
                          ) : (
                            <Bot className="h-3 w-3" />
                          )}
                        </div>
                      </Avatar>
                      <span className="text-sm font-medium">{(activeChat as any).name}</span>
                    </>
                  )}
                </div>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="h-6 w-6" 
                  onClick={() => setActiveChatId(null)}
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            
              <ScrollArea className="flex-1 p-3">
                <div className="space-y-4">
                  {activeChat?.messages.map((message: any) => (
                    <div 
                      key={message.id} 
                      className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div 
                        className={`max-w-[80%] px-3 py-2 rounded-lg ${
                          message.sender === 'me' 
                            ? 'bg-primary text-primary-foreground' 
                            : message.sender === 'ai'
                              ? 'bg-primary/10 text-foreground'
                              : 'bg-muted text-muted-foreground'
                        }`}
                      >
                        {activeTab === 'groups' && message.sender !== 'me' && (
                          <p className="text-xs font-medium mb-1">
                            {typeof message.sender === 'object' ? message.sender.name : ''}
                          </p>
                        )}
                        <p className="text-sm">{message.content}</p>
                        <p className="text-xs opacity-70 text-right mt-1">{message.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            
              <form onSubmit={handleSendMessage} className="p-3 border-t">
                <div className="flex gap-2">
                  <Input 
                    placeholder="Type a message..." 
                    value={messageInput}
                    onChange={e => setMessageInput(e.target.value)}
                    className="flex-1"
                  />
                  <Button size="icon" type="submit" disabled={!messageInput.trim()}>
                    <Send className="h-4 w-4" />
                  </Button>
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