'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Edit, Play, MoreHorizontal, Trash2 } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/PageHeader';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

interface Workflow {
  id: string;
  name: string;
  description?: string;
  active: boolean;
  updatedAt?: string;
}

export default function WorkflowListPage() {
  const router = useRouter();
  const [workflows, setWorkflows] = useState<Workflow[]>([]);
  const [templates, setTemplates] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Load workflows from localStorage for demo
  useEffect(() => {
    setLoading(true);
    
    try {
      // Get workflows from localStorage
      const storedWorkflows = localStorage.getItem('mixcore_workflows');
      if (storedWorkflows) {
        const parsedWorkflows = JSON.parse(storedWorkflows);
        setWorkflows(parsedWorkflows);
      }
      
      // Get demo templates from localStorage or use empty array
      const storedTemplates = localStorage.getItem('mixcore_workflow_templates');
      if (storedTemplates) {
        setTemplates(JSON.parse(storedTemplates));
      } else {
        // Load demo templates from config
        fetch('/api/workflow/templates')
          .then(res => res.json())
          .then(data => {
            setTemplates(data);
            localStorage.setItem('mixcore_workflow_templates', JSON.stringify(data));
          })
          .catch(err => {
            console.error('Failed to load templates:', err);
            // Fallback to empty array
            setTemplates([]);
          });
      }
    } catch (err) {
      console.error('Error loading workflows:', err);
    } finally {
      setLoading(false);
    }
  }, []);
  
  const handleCreateWorkflow = () => {
    router.push('/dashboard/apps/workflow/editor');
  };
  
  const handleEditWorkflow = (id: string) => {
    router.push(`/dashboard/apps/workflow/editor?id=${id}`);
  };
  
  const handleDeleteWorkflow = (id: string) => {
    // Filter out the workflow with the given ID
    const updatedWorkflows = workflows.filter(workflow => workflow.id !== id);
    setWorkflows(updatedWorkflows);
    
    // Update localStorage
    localStorage.setItem('mixcore_workflows', JSON.stringify(updatedWorkflows));
  };
  
  const handleToggleActive = (id: string, active: boolean) => {
    // Update the active status of the workflow
    const updatedWorkflows = workflows.map(workflow => {
      if (workflow.id === id) {
        return { ...workflow, active };
      }
      return workflow;
    });
    
    setWorkflows(updatedWorkflows);
    
    // Update localStorage
    localStorage.setItem('mixcore_workflows', JSON.stringify(updatedWorkflows));
  };
  
  const handleExecuteWorkflow = (id: string) => {
    console.log(`Executing workflow: ${id}`);
    // In a real implementation, this would call an API
    alert(`Workflow ${id} executed successfully`);
  };
  
  const handleUseTemplate = (template: any) => {
    // Create a new workflow based on the template
    const newWorkflow = {
      id: `workflow_${Date.now()}`,
      name: `${template.name} Copy`,
      description: template.description,
      active: false,
      nodes: template.nodes || [],
      edges: template.edges || [],
      updatedAt: new Date().toISOString()
    };
    
    // Add to workflows
    const updatedWorkflows = [...workflows, newWorkflow];
    setWorkflows(updatedWorkflows);
    
    // Update localStorage
    localStorage.setItem('mixcore_workflows', JSON.stringify(updatedWorkflows));
    
    // Navigate to edit page
    router.push(`/dashboard/apps/workflow/editor?id=${newWorkflow.id}`);
  };
  
  return (
    <div>
      <PageHeader
        title="Workflow Automation"
        description="Create, manage, and automate workflows"
      />
      
      <div className="flex justify-end mb-4">
        <Button onClick={handleCreateWorkflow}>
          <Plus className="mr-2 h-4 w-4" />
          Create Workflow
        </Button>
      </div>
      
      <Tabs defaultValue="workflows" className="mt-6">
        <TabsList>
          <TabsTrigger value="workflows">My Workflows</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
        </TabsList>
        
        <TabsContent value="workflows" className="mt-4">
          {workflows.length === 0 ? (
            <Alert>
              <AlertTitle>No workflows found</AlertTitle>
              <AlertDescription>
                Create your first workflow to get started. You can create a new workflow from scratch or use one of our templates.
              </AlertDescription>
            </Alert>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {workflows.map(workflow => (
                <Card key={workflow.id}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{workflow.name}</CardTitle>
                        <CardDescription className="mt-1">
                          {workflow.description || 'No description'}
                        </CardDescription>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => handleEditWorkflow(workflow.id)}>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleExecuteWorkflow(workflow.id)}>
                            <Play className="mr-2 h-4 w-4" />
                            Run Now
                          </DropdownMenuItem>
                          <DropdownMenuItem 
                            onClick={() => handleDeleteWorkflow(workflow.id)}
                            className="text-destructive"
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex items-center justify-between">
                      <Badge variant={workflow.active ? 'default' : 'outline'}>
                        {workflow.active ? 'Active' : 'Inactive'}
                      </Badge>
                      {workflow.updatedAt && (
                        <span className="text-xs text-muted-foreground">
                          Updated {new Date(workflow.updatedAt).toLocaleDateString()}
                        </span>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-2">
                    <div className="flex items-center space-x-2">
                      <Switch
                        id={`active-${workflow.id}`}
                        checked={workflow.active}
                        onCheckedChange={(checked) => handleToggleActive(workflow.id, checked)}
                      />
                      <Label htmlFor={`active-${workflow.id}`}>
                        {workflow.active ? 'Enabled' : 'Disabled'}
                      </Label>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="ml-auto"
                      onClick={() => handleEditWorkflow(workflow.id)}
                    >
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="templates" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {templates.map((template, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{template.name}</CardTitle>
                  <CardDescription className="mt-1">
                    {template.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <Badge variant="outline">{template.category}</Badge>
                </CardContent>
                <CardFooter className="pt-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="ml-auto"
                    onClick={() => handleUseTemplate(template)}
                  >
                    Use Template
                  </Button>
                </CardFooter>
              </Card>
            ))}
            
            {templates.length === 0 && (
              <Alert>
                <AlertTitle>No templates available</AlertTitle>
                <AlertDescription>
                  Templates will appear here once they are available.
                </AlertDescription>
              </Alert>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
} 