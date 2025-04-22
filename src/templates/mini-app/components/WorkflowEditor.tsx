'use client';

import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Plus, 
  Trash, 
  Copy, 
  Save, 
  Play, 
  Database, 
  Mail, 
  Filter, 
  Code, 
  FileText, 
  Webhook, 
  Calendar, 
  Settings, 
  PanelLeft, 
  PanelRight,
  Search,
  Layers 
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Simple workflow node type
interface WorkflowNode {
  id: string;
  type: string;
  name: string;
  position: { x: number; y: number };
  category: 'trigger' | 'action' | 'transform';
}

export function WorkflowEditor() {
  // Sample nodes
  const [nodes, setNodes] = useState<WorkflowNode[]>([
    {
      id: 'node-1',
      type: 'webhook',
      name: 'Webhook',
      position: { x: 100, y: 100 },
      category: 'trigger'
    },
    {
      id: 'node-2',
      type: 'filter',
      name: 'Filter',
      position: { x: 400, y: 100 },
      category: 'transform'
    },
    {
      id: 'node-3',
      type: 'email',
      name: 'Send Email',
      position: { x: 700, y: 100 },
      category: 'action'
    }
  ]);
  
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [showLeftPanel, setShowLeftPanel] = useState(true);
  const [showRightPanel, setShowRightPanel] = useState(true);
  
  // Node categories
  const nodeCategories = [
    {
      name: 'Triggers',
      nodes: [
        { type: 'webhook', name: 'Webhook', icon: <Webhook className="h-4 w-4" /> },
        { type: 'schedule', name: 'Schedule', icon: <Calendar className="h-4 w-4" /> },
        { type: 'database', name: 'Database Trigger', icon: <Database className="h-4 w-4" /> }
      ]
    },
    {
      name: 'Actions',
      nodes: [
        { type: 'email', name: 'Send Email', icon: <Mail className="h-4 w-4" /> },
        { type: 'database', name: 'Database Action', icon: <Database className="h-4 w-4" /> },
        { type: 'http', name: 'HTTP Request', icon: <Webhook className="h-4 w-4" /> }
      ]
    },
    {
      name: 'Transformations',
      nodes: [
        { type: 'filter', name: 'Filter', icon: <Filter className="h-4 w-4" /> },
        { type: 'code', name: 'JavaScript', icon: <Code className="h-4 w-4" /> },
        { type: 'mapper', name: 'Data Mapper', icon: <FileText className="h-4 w-4" /> }
      ]
    }
  ];
  
  // Get selected node
  const selectedNode = selectedNodeId ? nodes.find(node => node.id === selectedNodeId) : null;
  
  // Create a new node
  const createNode = (type: string, name: string, category: 'trigger' | 'action' | 'transform') => {
    const newNode: WorkflowNode = {
      id: `node-${Date.now()}`,
      type,
      name,
      position: { x: 200, y: 200 },
      category
    };
    
    setNodes([...nodes, newNode]);
    setSelectedNodeId(newNode.id);
  };
  
  // Delete a node
  const deleteNode = (id: string) => {
    setNodes(nodes.filter(node => node.id !== id));
    if (selectedNodeId === id) {
      setSelectedNodeId(null);
    }
  };
  
  // Handle node selection
  const handleNodeSelect = (nodeId: string) => {
    setSelectedNodeId(nodeId);
  };
  
  // Get node color based on category
  const getNodeColor = (category: string): string => {
    switch (category) {
      case 'trigger': return 'bg-blue-100 border-blue-300';
      case 'action': return 'bg-green-100 border-green-300';
      case 'transform': return 'bg-amber-100 border-amber-300';
      default: return 'bg-gray-100 border-gray-300';
    }
  };
  
  // Get node icon based on type
  const getNodeIcon = (type: string) => {
    switch (type) {
      case 'webhook': return <Webhook className="h-4 w-4" />;
      case 'schedule': return <Calendar className="h-4 w-4" />;
      case 'database': return <Database className="h-4 w-4" />;
      case 'email': return <Mail className="h-4 w-4" />;
      case 'http': return <Webhook className="h-4 w-4" />;
      case 'filter': return <Filter className="h-4 w-4" />;
      case 'code': return <Code className="h-4 w-4" />;
      case 'mapper': return <FileText className="h-4 w-4" />;
      default: return null;
    }
  };
  
  return (
    <div className="flex h-[calc(100vh-10rem)] overflow-hidden">
      {/* Left panel - Node palette */}
      {showLeftPanel && (
        <div className="w-[260px] border-r h-full flex flex-col">
          <div className="p-2 border-b">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search nodes..."
                className="pl-8"
              />
            </div>
          </div>
          
          <ScrollArea className="flex-1">
            <div className="p-2 space-y-4">
              {nodeCategories.map((category, i) => (
                <div key={i} className="space-y-2">
                  <h3 className="text-sm font-medium text-muted-foreground">{category.name}</h3>
                  <div className="space-y-1">
                    {category.nodes.map((node, j) => (
                      <div 
                        key={j}
                        className="flex items-center p-2 rounded-md hover:bg-secondary/50 cursor-pointer"
                        onClick={() => createNode(
                          node.type, 
                          node.name, 
                          category.name === 'Triggers' ? 'trigger' : 
                          category.name === 'Actions' ? 'action' : 'transform'
                        )}
                      >
                        <div className="mr-2 h-8 w-8 flex items-center justify-center rounded-md bg-secondary/70">
                          {node.icon}
                        </div>
                        <span className="text-sm">{node.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      )}
      
      {/* Main canvas area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Toolbar */}
        <div className="border-b p-2 flex items-center">
          <Button 
            variant={showLeftPanel ? 'secondary' : 'ghost'} 
            size="icon"
            className="mr-2"
            onClick={() => setShowLeftPanel(!showLeftPanel)}
          >
            <PanelLeft className="h-4 w-4" />
          </Button>
          
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <Save className="h-4 w-4 mr-2" />
              Save
            </Button>
            <Button variant="outline" size="sm">
              <Play className="h-4 w-4 mr-2" />
              Execute
            </Button>
          </div>
          
          <div className="flex-1"></div>
          
          <Button 
            variant={showRightPanel ? 'secondary' : 'ghost'} 
            size="icon"
            className="ml-2"
            onClick={() => setShowRightPanel(!showRightPanel)}
          >
            <PanelRight className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Canvas */}
        <div className="flex-1 bg-[#f8f9fa] overflow-auto relative">
          {/* Connection lines */}
          <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
            {/* Simple connection from node-1 to node-2 */}
            <path 
              d="M250,120 C350,120 350,120 400,120" 
              stroke="#94a3b8" 
              strokeWidth="2" 
              fill="none" 
              markerEnd="url(#arrowhead)" 
            />
            {/* Simple connection from node-2 to node-3 */}
            <path 
              d="M550,120 C650,120 650,120 700,120" 
              stroke="#94a3b8" 
              strokeWidth="2" 
              fill="none" 
              markerEnd="url(#arrowhead)" 
            />
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="7"
                refX="10"
                refY="3.5"
                orient="auto"
              >
                <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
              </marker>
            </defs>
          </svg>
          
          {/* Nodes */}
          {nodes.map(node => (
            <div
              key={node.id}
              className={`absolute rounded-md shadow-sm border ${getNodeColor(node.category)} ${selectedNodeId === node.id ? 'ring-2 ring-primary' : ''}`}
              style={{
                left: node.position.x,
                top: node.position.y,
                width: 150,
                cursor: 'move',
              }}
              onClick={() => handleNodeSelect(node.id)}
            >
              <div className="p-2 border-b bg-white/50 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {getNodeIcon(node.type)}
                  <span className="font-medium text-sm truncate">{node.name}</span>
                </div>
                <div className="flex">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-5 w-5" 
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteNode(node.id);
                    }}
                  >
                    <Trash className="h-3 w-3" />
                  </Button>
                </div>
              </div>
              <div className="p-2 text-xs">
                {/* Simplified input/output indicators */}
                {node.category !== 'trigger' && (
                  <div className="mb-2 flex items-center space-x-2">
                    <div className="h-3 w-3 rounded-full bg-blue-500" />
                    <span>Input</span>
                  </div>
                )}
                
                {node.category !== 'action' && (
                  <div className="flex items-center justify-end space-x-2">
                    <span>Output</span>
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Right panel - Node configuration */}
      {showRightPanel && (
        <div className="w-[300px] border-l h-full flex flex-col">
          <div className="p-2 border-b flex items-center justify-between">
            <h2 className="font-medium text-sm">Node Configuration</h2>
            <Button variant="ghost" size="icon" className="h-7 w-7">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
          
          {selectedNode ? (
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-2">{selectedNode.name}</h3>
                  <p className="text-xs text-muted-foreground mb-2">Configure the settings for this node.</p>
                  
                  <Tabs defaultValue="settings">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="settings">Settings</TabsTrigger>
                      <TabsTrigger value="output">Output</TabsTrigger>
                    </TabsList>
                    <TabsContent value="settings" className="pt-4 space-y-4">
                      {/* Simplified settings based on node type */}
                      {selectedNode.type === 'webhook' && (
                        <div className="space-y-2">
                          <div className="space-y-1">
                            <label className="text-xs font-medium">Webhook URL</label>
                            <div className="p-2 bg-secondary/30 rounded text-xs font-mono break-all">
                              /webhook/endpoint
                            </div>
                          </div>
                          <div className="space-y-1">
                            <label className="text-xs font-medium">Method</label>
                            <select className="w-full h-8 text-sm rounded-md border border-input bg-transparent px-3">
                              <option>POST</option>
                              <option>GET</option>
                            </select>
                          </div>
                        </div>
                      )}
                      
                      {selectedNode.type === 'filter' && (
                        <div className="space-y-2">
                          <div className="space-y-1">
                            <label className="text-xs font-medium">Condition</label>
                            <textarea 
                              className="w-full min-h-[100px] text-sm rounded-md border border-input bg-transparent p-3 font-mono" 
                              defaultValue='data.status === "active"'
                            />
                          </div>
                        </div>
                      )}
                      
                      {selectedNode.type === 'email' && (
                        <div className="space-y-2">
                          <div className="space-y-1">
                            <label className="text-xs font-medium">To</label>
                            <input 
                              type="text" 
                              className="w-full h-8 text-sm rounded-md border border-input bg-transparent px-3" 
                              defaultValue="user@example.com"
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="text-xs font-medium">Subject</label>
                            <input 
                              type="text" 
                              className="w-full h-8 text-sm rounded-md border border-input bg-transparent px-3" 
                              defaultValue="New notification"
                            />
                          </div>
                        </div>
                      )}
                    </TabsContent>
                    <TabsContent value="output" className="pt-4">
                      <div className="rounded-md border bg-muted/50 p-4">
                        <pre className="text-xs text-muted-foreground whitespace-pre-wrap">
                          {`{
  "id": "sample-data-12345",
  "status": "active",
  "timestamp": "${new Date().toISOString()}"
}`}
                        </pre>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </ScrollArea>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center p-4 text-muted-foreground">
              <Layers className="h-12 w-12 mb-2 opacity-20" />
              <p>Select a node to configure its settings</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default WorkflowEditor; 