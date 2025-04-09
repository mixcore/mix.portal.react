'use client';

import React, { useState, useCallback, useEffect } from 'react';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  Connection,
  Edge,
  Node,
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  useReactFlow,
  Panel,
  addEdge
} from 'reactflow';
import 'reactflow/dist/style.css';
import { NodePalette } from './sidebar/NodePalette';
import { Properties } from './sidebar/Properties';
import { nodeTypes } from './nodes';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Play, Save, Undo, Redo, ZoomIn, ZoomOut, Maximize2, Download } from 'lucide-react';
import { useWorkflow } from '../../hooks/useWorkflow';
import { getNodeType } from '../../lib/nodeRegistry';
import { WorkflowNodeData } from '../../lib/types';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface WorkflowEditorProps {
  workflowId?: string;
}

function WorkflowEditorContent({ workflowId }: WorkflowEditorProps) {
  const { workflow, loading, error, saveWorkflow, executeWorkflow } = useWorkflow(workflowId);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [selectedNode, setSelectedNode] = useState<Node<WorkflowNodeData> | null>(null);
  const [workflowName, setWorkflowName] = useState('New Workflow');
  const [workflowDesc, setWorkflowDesc] = useState('');
  const [saveDialogOpen, setSaveDialogOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const reactFlowInstance = useReactFlow();
  
  // Load workflow data when available
  useEffect(() => {
    if (workflow) {
      setNodes(workflow.nodes);
      setEdges(workflow.edges);
      setWorkflowName(workflow.name);
      setWorkflowDesc(workflow.description || '');
    }
  }, [workflow, setNodes, setEdges]);
  
  const onConnect = useCallback((connection: Connection) => {
    setEdges(eds => addEdge(connection, eds));
  }, [setEdges]);

  const onNodeClick = useCallback((_: React.MouseEvent, node: Node) => {
    setSelectedNode(node as Node<WorkflowNodeData>);
  }, []);

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    
    const nodeType = event.dataTransfer.getData('application/reactflow');
    
    if (!nodeType || !reactFlowInstance) {
      return;
    }
    
    // Get the position where the node is dropped
    const position = reactFlowInstance.screenToFlowPosition({
      x: event.clientX,
      y: event.clientY,
    });
    
    const nodeTypeInfo = getNodeType(nodeType);
    if (!nodeTypeInfo) {
      console.error(`Unknown node type: ${nodeType}`);
      return;
    }
    
    // Create a new node
    const newNode: Node<WorkflowNodeData> = {
      id: `node_${Date.now()}`,
      type: 'default',
      position,
      data: {
        type: nodeType,
        label: nodeTypeInfo.label,
        properties: {}
      }
    };
    
    // Add default values for properties
    nodeTypeInfo.properties.forEach(prop => {
      if (prop.default !== undefined) {
        newNode.data.properties[prop.name] = prop.default;
      }
    });
    
    setNodes(nds => nds.concat(newNode));
  }, [reactFlowInstance, setNodes]);

  const handleNodeUpdate = useCallback((updatedNode: Node<WorkflowNodeData>) => {
    setNodes(nds => nds.map(node => (node.id === updatedNode.id ? updatedNode : node)));
    setSelectedNode(updatedNode);
  }, [setNodes]);

  const handleSave = useCallback(() => {
    setSaveDialogOpen(true);
  }, []);
  
  const handleSaveConfirm = useCallback(async () => {
    try {
      setIsSaving(true);
      
      // If nodes are empty, show at least an empty placeholder
      const nodesToSave = nodes.length === 0 
        ? [] 
        : nodes;
      
      await saveWorkflow({
        ...(workflow || {}),
        id: workflow?.id,
        name: workflowName,
        description: workflowDesc,
        nodes: nodesToSave,
        edges,
        active: workflow?.active || false
      });
      
      setSaveDialogOpen(false);
    } catch (err) {
      console.error('Failed to save workflow:', err);
    } finally {
      setIsSaving(false);
    }
  }, [workflow, workflowName, workflowDesc, nodes, edges, saveWorkflow]);

  const handleExecute = useCallback(() => {
    executeWorkflow();
  }, [executeWorkflow]);
  
  const handleZoomIn = useCallback(() => {
    reactFlowInstance.zoomIn();
  }, [reactFlowInstance]);
  
  const handleZoomOut = useCallback(() => {
    reactFlowInstance.zoomOut();
  }, [reactFlowInstance]);
  
  const handleFitView = useCallback(() => {
    reactFlowInstance.fitView();
  }, [reactFlowInstance]);
  
  if (loading) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="h-full flex flex-col items-center justify-center">
        <div className="text-destructive text-xl font-bold">Error</div>
        <p>{error}</p>
      </div>
    );
  }
  
  return (
    <div className="workflow-editor">
      <div className="workflow-editor-toolbar">
        <Button variant="outline" size="sm" onClick={handleSave}>
          <Save className="h-4 w-4 mr-1" />
          Save
        </Button>
        <Button variant="outline" size="sm" onClick={handleExecute}>
          <Play className="h-4 w-4 mr-1" />
          Run
        </Button>
        <div className="ml-auto flex items-center gap-1">
          <Button variant="ghost" size="icon" onClick={handleZoomIn} title="Zoom In">
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={handleZoomOut} title="Zoom Out">
            <ZoomOut className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={handleFitView} title="Fit View">
            <Maximize2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="flex flex-1 h-full overflow-hidden">
        <div className="workflow-sidebar">
          <Tabs defaultValue="nodes">
            <TabsList className="w-full">
              <TabsTrigger value="nodes" className="flex-1">Nodes</TabsTrigger>
              <TabsTrigger value="properties" className="flex-1">Properties</TabsTrigger>
            </TabsList>
            <TabsContent value="nodes" className="mt-2 overflow-auto h-[calc(100%-40px)]">
              <NodePalette />
            </TabsContent>
            <TabsContent value="properties" className="mt-2 overflow-auto h-[calc(100%-40px)]">
              <Properties 
                node={selectedNode} 
                onChange={handleNodeUpdate} 
              />
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="workflow-editor-canvas">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onNodeClick={onNodeClick}
            onDragOver={onDragOver}
            onDrop={onDrop}
            nodeTypes={nodeTypes}
            fitView
            deleteKeyCode="Delete"
          >
            <Background />
            <Controls showInteractive={false} />
            <MiniMap />
          </ReactFlow>
        </div>
      </div>
      
      <AlertDialog open={saveDialogOpen} onOpenChange={setSaveDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Save Workflow</AlertDialogTitle>
            <AlertDialogDescription>
              Enter a name and description for your workflow.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="workflow-name">Name</Label>
              <Input
                id="workflow-name"
                value={workflowName}
                onChange={(e) => setWorkflowName(e.target.value)}
                placeholder="Workflow name"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="workflow-desc">Description</Label>
              <Input
                id="workflow-desc"
                value={workflowDesc}
                onChange={(e) => setWorkflowDesc(e.target.value)}
                placeholder="Workflow description"
              />
            </div>
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleSaveConfirm}
              disabled={isSaving || !workflowName.trim()}
            >
              {isSaving ? 'Saving...' : 'Save'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export function WorkflowEditor(props: WorkflowEditorProps) {
  return (
    <ReactFlowProvider>
      <WorkflowEditorContent {...props} />
    </ReactFlowProvider>
  );
} 