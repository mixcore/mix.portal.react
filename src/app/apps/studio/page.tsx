'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Layout, 
  Image, 
  Type, 
  Square, 
  Circle, 
  Triangle, 
  Layers, 
  PanelLeft, 
  PanelRight, 
  Undo, 
  Redo, 
  Save,
  Download,
  Share,
  Sliders,
  Eye,
  Grid,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Bold,
  Italic,
  Underline
} from 'lucide-react';

// Types for design elements
type ElementType = 'text' | 'image' | 'shape';
type ShapeType = 'rectangle' | 'circle' | 'triangle';

interface DesignElement {
  id: string;
  type: ElementType;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  content?: string;
  color?: string;
  fontSize?: number;
  fontFamily?: string;
  imageUrl?: string;
  shapeType?: ShapeType;
}

// Sample design templates
const templates = [
  { id: '1', name: 'Social Media Post', thumbnail: '/templates/social-post.png', category: 'social' },
  { id: '2', name: 'Instagram Story', thumbnail: '/templates/instagram-story.png', category: 'social' },
  { id: '3', name: 'Facebook Cover', thumbnail: '/templates/facebook-cover.png', category: 'social' },
  { id: '4', name: 'Business Card', thumbnail: '/templates/business-card.png', category: 'print' },
  { id: '5', name: 'Flyer', thumbnail: '/templates/flyer.png', category: 'print' },
  { id: '6', name: 'Logo', thumbnail: '/templates/logo.png', category: 'branding' },
  { id: '7', name: 'Website Banner', thumbnail: '/templates/web-banner.png', category: 'web' },
  { id: '8', name: 'Presentation', thumbnail: '/templates/presentation.png', category: 'presentation' }
];

// Sample design elements
const initialElements: DesignElement[] = [
  { 
    id: '1', 
    type: 'text', 
    x: 100, 
    y: 100, 
    width: 200, 
    height: 50, 
    rotation: 0,
    content: 'Edit this text',
    color: '#000000',
    fontSize: 24,
    fontFamily: 'Arial'
  },
  { 
    id: '2', 
    type: 'shape', 
    x: 300, 
    y: 200, 
    width: 100, 
    height: 100, 
    rotation: 0,
    shapeType: 'rectangle',
    color: '#3b82f6'
  }
];

export default function StudioApp() {
  const [activeTab, setActiveTab] = useState<string>('editor');
  const [elements, setElements] = useState<DesignElement[]>(initialElements);
  const [selectedElement, setSelectedElement] = useState<DesignElement | null>(null);
  const [canvasWidth, setCanvasWidth] = useState<number>(1080);
  const [canvasHeight, setCanvasHeight] = useState<number>(1080);
  const [zoom, setZoom] = useState<number>(100);
  const [currentTemplate, setCurrentTemplate] = useState<string>('1');
  const [showGrid, setShowGrid] = useState<boolean>(true);
  
  // Handle element selection
  const handleSelectElement = (element: DesignElement) => {
    setSelectedElement(element);
  };
  
  // Handle element property change
  const handleElementChange = (property: keyof DesignElement, value: any) => {
    if (!selectedElement) return;
    
    const updatedElements = elements.map(el => 
      el.id === selectedElement.id ? { ...el, [property]: value } : el
    );
    
    setElements(updatedElements);
    setSelectedElement({ ...selectedElement, [property]: value });
  };
  
  // Add new element
  const addElement = (type: ElementType, shapeType?: ShapeType) => {
    const newElement: DesignElement = {
      id: Date.now().toString(),
      type,
      x: canvasWidth / 2 - 50,
      y: canvasHeight / 2 - 50,
      width: 100,
      height: 100,
      rotation: 0
    };
    
    if (type === 'text') {
      newElement.content = 'New Text';
      newElement.color = '#000000';
      newElement.fontSize = 16;
      newElement.fontFamily = 'Arial';
    } else if (type === 'shape' && shapeType) {
      newElement.shapeType = shapeType;
      newElement.color = '#3b82f6';
    }
    
    setElements([...elements, newElement]);
    setSelectedElement(newElement);
  };
  
  // Remove selected element
  const removeElement = () => {
    if (!selectedElement) return;
    
    const updatedElements = elements.filter(el => el.id !== selectedElement.id);
    setElements(updatedElements);
    setSelectedElement(null);
  };
  
  return (
    <div className="h-full flex flex-col">
      <div className="flex-grow flex overflow-hidden">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="flex flex-1 overflow-hidden">
          {/* Left Sidebar */}
          <div className="w-64 border-r flex flex-col bg-background">
            <div className="p-4 border-b">
              <TabsList className="w-full grid grid-cols-2">
                <TabsTrigger value="templates">Templates</TabsTrigger>
                <TabsTrigger value="elements">Elements</TabsTrigger>
              </TabsList>
            </div>
            
            <ScrollArea className="flex-1 p-4">
              <TabsContent value="templates" className="mt-0 space-y-4">
                <Input placeholder="Search templates..." />
                
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" className="rounded-full">All</Button>
                    <Button variant="outline" size="sm" className="rounded-full">Social Media</Button>
                    <Button variant="outline" size="sm" className="rounded-full">Print</Button>
                    <Button variant="outline" size="sm" className="rounded-full">Branding</Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  {templates.map(template => (
                    <Card 
                      key={template.id} 
                      className={`overflow-hidden cursor-pointer transition-all hover:ring-2 hover:ring-primary ${currentTemplate === template.id ? 'ring-2 ring-primary' : ''}`}
                      onClick={() => setCurrentTemplate(template.id)}
                    >
                      <div className="aspect-square bg-accent/50"></div>
                      <CardContent className="p-2">
                        <p className="text-xs truncate">{template.name}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="elements" className="mt-0 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Text</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" className="h-12 justify-start" onClick={() => addElement('text')}>
                      <Type className="h-4 w-4 mr-2" />
                      Text
                    </Button>
                    <Button variant="outline" className="h-12 justify-start" onClick={() => addElement('text')}>
                      <Type className="h-4 w-4 mr-2" />
                      Heading
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Shapes</h3>
                  <div className="grid grid-cols-3 gap-2">
                    <Button variant="outline" className="h-12 justify-start p-2" onClick={() => addElement('shape', 'rectangle')}>
                      <Square className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="h-12 justify-start p-2" onClick={() => addElement('shape', 'circle')}>
                      <Circle className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="h-12 justify-start p-2" onClick={() => addElement('shape', 'triangle')}>
                      <Triangle className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Images</h3>
                  <Button variant="outline" className="w-full justify-start" onClick={() => addElement('image')}>
                    <Image className="h-4 w-4 mr-2" />
                    Upload Image
                  </Button>
                </div>
              </TabsContent>
            </ScrollArea>
          </div>
          
          {/* Main Canvas */}
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="p-2 border-b flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="icon">
                  <Undo className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Redo className="h-4 w-4" />
                </Button>
                <div className="h-4 border-r mx-2"></div>
                <Button variant="ghost" size="icon" onClick={() => setShowGrid(!showGrid)}>
                  <Grid className="h-4 w-4" />
                </Button>
                <Select value={zoom.toString()} onValueChange={(val) => setZoom(parseInt(val))}>
                  <SelectTrigger className="w-24 h-8">
                    <SelectValue placeholder={`${zoom}%`} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="50">50%</SelectItem>
                    <SelectItem value="75">75%</SelectItem>
                    <SelectItem value="100">100%</SelectItem>
                    <SelectItem value="150">150%</SelectItem>
                    <SelectItem value="200">200%</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4 mr-2" />
                  Preview
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
                <Button size="sm">
                  <Save className="h-4 w-4 mr-2" />
                  Save
                </Button>
              </div>
            </div>
            
            <div className="flex-1 overflow-auto bg-slate-100 dark:bg-slate-900 p-8 flex items-center justify-center">
              <div 
                className={`bg-white shadow-lg ${showGrid ? 'bg-grid' : ''}`}
                style={{ 
                  width: `${canvasWidth * zoom / 100}px`, 
                  height: `${canvasHeight * zoom / 100}px`,
                  position: 'relative'
                }}
              >
                {elements.map(element => (
                  <div
                    key={element.id}
                    className={`absolute border ${selectedElement?.id === element.id ? 'border-primary border-2' : 'border-transparent'}`}
                    style={{
                      left: `${element.x * zoom / 100}px`,
                      top: `${element.y * zoom / 100}px`,
                      width: `${element.width * zoom / 100}px`,
                      height: `${element.height * zoom / 100}px`,
                      transform: `rotate(${element.rotation}deg)`,
                      cursor: 'pointer'
                    }}
                    onClick={() => handleSelectElement(element)}
                  >
                    {element.type === 'text' && (
                      <div 
                        style={{ 
                          color: element.color,
                          fontSize: `${(element.fontSize || 16) * zoom / 100}px`,
                          fontFamily: element.fontFamily,
                          width: '100%',
                          height: '100%'
                        }}
                      >
                        {element.content}
                      </div>
                    )}
                    
                    {element.type === 'shape' && element.shapeType === 'rectangle' && (
                      <div 
                        className="w-full h-full" 
                        style={{ backgroundColor: element.color }}
                      ></div>
                    )}
                    
                    {element.type === 'shape' && element.shapeType === 'circle' && (
                      <div 
                        className="w-full h-full rounded-full" 
                        style={{ backgroundColor: element.color }}
                      ></div>
                    )}
                    
                    {element.type === 'shape' && element.shapeType === 'triangle' && (
                      <div className="w-full h-full overflow-hidden">
                        <div 
                          style={{ 
                            width: '100%',
                            height: '100%',
                            backgroundColor: element.color,
                            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
                          }}
                        ></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Sidebar */}
          <div className="w-72 border-l bg-background">
            <div className="p-4 border-b">
              <h2 className="text-lg font-medium">Properties</h2>
            </div>
            
            <ScrollArea className="h-[calc(100vh-12rem)]">
              {!selectedElement ? (
                <div className="p-4">
                  <Card>
                    <CardContent className="p-4">
                      <p className="text-muted-foreground text-center">Select an element to edit its properties</p>
                    </CardContent>
                  </Card>
                  
                  <div className="mt-4 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium">Canvas Size</h3>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="space-y-1">
                          <label className="text-xs">Width (px)</label>
                          <Input 
                            type="number" 
                            value={canvasWidth}
                            onChange={(e) => setCanvasWidth(parseInt(e.target.value))}
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-xs">Height (px)</label>
                          <Input 
                            type="number" 
                            value={canvasHeight}
                            onChange={(e) => setCanvasHeight(parseInt(e.target.value))}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">
                      {selectedElement.type === 'text' 
                        ? 'Text Element' 
                        : selectedElement.type === 'shape' 
                          ? `Shape (${selectedElement.shapeType})` 
                          : 'Image'}
                    </h3>
                    <Button variant="destructive" size="sm" onClick={removeElement}>Remove</Button>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="text-xs font-medium">Position & Size</h4>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="space-y-1">
                          <label className="text-xs">X (px)</label>
                          <Input 
                            type="number" 
                            value={selectedElement.x}
                            onChange={(e) => handleElementChange('x', parseInt(e.target.value))}
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-xs">Y (px)</label>
                          <Input 
                            type="number" 
                            value={selectedElement.y}
                            onChange={(e) => handleElementChange('y', parseInt(e.target.value))}
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-xs">Width (px)</label>
                          <Input 
                            type="number" 
                            value={selectedElement.width}
                            onChange={(e) => handleElementChange('width', parseInt(e.target.value))}
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-xs">Height (px)</label>
                          <Input 
                            type="number" 
                            value={selectedElement.height}
                            onChange={(e) => handleElementChange('height', parseInt(e.target.value))}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <label className="text-xs">Rotation</label>
                          <span className="text-xs">{selectedElement.rotation}°</span>
                        </div>
                        <Slider
                          value={[selectedElement.rotation]}
                          min={0}
                          max={360}
                          step={1}
                          onValueChange={(values) => handleElementChange('rotation', values[0])}
                        />
                      </div>
                    </div>
                    
                    {selectedElement.type === 'text' && (
                      <div className="space-y-2">
                        <h4 className="text-xs font-medium">Text Properties</h4>
                        <Textarea 
                          value={selectedElement.content || ''}
                          onChange={(e) => handleElementChange('content', e.target.value)}
                          className="h-20"
                        />
                        
                        <div className="space-y-1">
                          <label className="text-xs">Font Family</label>
                          <Select 
                            value={selectedElement.fontFamily} 
                            onValueChange={(value) => handleElementChange('fontFamily', value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select font" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Arial">Arial</SelectItem>
                              <SelectItem value="Helvetica">Helvetica</SelectItem>
                              <SelectItem value="Times New Roman">Times New Roman</SelectItem>
                              <SelectItem value="Georgia">Georgia</SelectItem>
                              <SelectItem value="Courier New">Courier New</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-1">
                          <label className="text-xs">Font Size</label>
                          <div className="flex space-x-2">
                            <Input 
                              type="number" 
                              value={selectedElement.fontSize || 16}
                              onChange={(e) => handleElementChange('fontSize', parseInt(e.target.value))}
                            />
                            <div className="flex border rounded-md">
                              <Button variant="ghost" size="icon" className="h-10 w-10">
                                <Bold className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="icon" className="h-10 w-10">
                                <Italic className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="icon" className="h-10 w-10">
                                <Underline className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-1">
                          <label className="text-xs">Text Alignment</label>
                          <div className="flex border rounded-md">
                            <Button variant="ghost" size="sm" className="flex-1">
                              <AlignLeft className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="flex-1">
                              <AlignCenter className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="flex-1">
                              <AlignRight className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {(selectedElement.type === 'shape' || selectedElement.type === 'text') && (
                      <div className="space-y-2">
                        <h4 className="text-xs font-medium">Color</h4>
                        <div className="grid grid-cols-6 gap-2">
                          {['#000000', '#ffffff', '#ff0000', '#00ff00', '#0000ff', '#ffff00'].map(color => (
                            <div 
                              key={color}
                              className={`w-8 h-8 rounded-full cursor-pointer border-2 ${selectedElement.color === color ? 'border-primary' : 'border-transparent'}`}
                              style={{ backgroundColor: color }}
                              onClick={() => handleElementChange('color', color)}
                            ></div>
                          ))}
                        </div>
                        <Input 
                          type="color" 
                          value={selectedElement.color || '#000000'}
                          onChange={(e) => handleElementChange('color', e.target.value)}
                          className="h-10"
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </ScrollArea>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
