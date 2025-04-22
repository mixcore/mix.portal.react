'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  ChevronDown, 
  Layers, 
  Square, 
  Circle, 
  Type, 
  Image, 
  Move, 
  Pen, 
  Hand, 
  Minus, 
  Plus, 
  RotateCcw, 
  RotateCw,
  Trash,
  Copy,
  EyeOff,
  Eye,
  Lock,
  Unlock,
  PanelLeft,
  PanelRight,
  CheckSquare,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Save,
  Share,
  Settings,
  Download,
  Grid
} from 'lucide-react';

interface CanvasObject {
  id: string;
  type: 'rect' | 'circle' | 'text' | 'image';
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  fill: string;
  stroke: string;
  strokeWidth: number;
  opacity: number;
  name: string;
  locked: boolean;
  visible: boolean;
  text?: string;
  fontSize?: number;
  fontFamily?: string;
  imageUrl?: string;
}

export function CanvasEditor() {
  // Canvas state
  const [zoom, setZoom] = useState(100);
  const [tool, setTool] = useState<'select' | 'rect' | 'circle' | 'text' | 'image' | 'pen' | 'hand'>('select');
  const [objects, setObjects] = useState<CanvasObject[]>([
    {
      id: '1',
      type: 'rect',
      x: 100,
      y: 100,
      width: 200,
      height: 100,
      rotation: 0,
      fill: '#e2e8f0',
      stroke: '#94a3b8',
      strokeWidth: 1,
      opacity: 1,
      name: 'Rectangle',
      locked: false,
      visible: true
    },
    {
      id: '2',
      type: 'circle',
      x: 300,
      y: 200,
      width: 120,
      height: 120,
      rotation: 0,
      fill: '#dbeafe',
      stroke: '#3b82f6',
      strokeWidth: 2,
      opacity: 0.8,
      name: 'Circle',
      locked: false,
      visible: true
    },
    {
      id: '3',
      type: 'text',
      x: 150,
      y: 250,
      width: 200,
      height: 40,
      rotation: 0,
      fill: 'transparent',
      stroke: 'transparent',
      strokeWidth: 0,
      opacity: 1,
      name: 'Text Element',
      locked: false,
      visible: true,
      text: 'Hello, Canvas!',
      fontSize: 24,
      fontFamily: 'Inter'
    }
  ]);
  
  const [selectedObjectId, setSelectedObjectId] = useState<string | null>(null);
  const [showLeftPanel, setShowLeftPanel] = useState(true);
  const [showRightPanel, setShowRightPanel] = useState(true);
  const canvasRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [canvasOffset, setCanvasOffset] = useState({ x: 0, y: 0 });
  
  // Get selected object
  const selectedObject = selectedObjectId ? objects.find(obj => obj.id === selectedObjectId) : null;
  
  // Handle tool selection
  const handleToolSelect = (newTool: 'select' | 'rect' | 'circle' | 'text' | 'image' | 'pen' | 'hand') => {
    setTool(newTool);
  };
  
  // Handle canvas mouse down for drag operation
  const handleCanvasMouseDown = (e: React.MouseEvent) => {
    if (tool === 'hand') {
      setIsDragging(true);
      setStartX(e.clientX - canvasOffset.x);
      setStartY(e.clientY - canvasOffset.y);
    }
  };
  
  // Handle canvas mouse move for drag operation
  const handleCanvasMouseMove = (e: React.MouseEvent) => {
    if (isDragging && tool === 'hand') {
      const x = e.clientX - startX;
      const y = e.clientY - startY;
      setCanvasOffset({ x, y });
    }
  };
  
  // Handle canvas mouse up for drag operation
  const handleCanvasMouseUp = () => {
    setIsDragging(false);
  };
  
  // Handle zoom in/out
  const handleZoomChange = (value: number[]) => {
    setZoom(value[0]);
  };
  
  const handleZoomIn = () => {
    setZoom(Math.min(zoom + 10, 200));
  };
  
  const handleZoomOut = () => {
    setZoom(Math.max(zoom - 10, 25));
  };
  
  // Handle object selection
  const handleObjectClick = (objectId: string) => {
    if (tool === 'select') {
      setSelectedObjectId(objectId);
    }
  };
  
  // Create new object
  const createNewObject = (type: CanvasObject['type']) => {
    const newObject: CanvasObject = {
      id: `obj-${Date.now()}`,
      type,
      x: 200,
      y: 200,
      width: type === 'circle' ? 100 : 150,
      height: type === 'circle' ? 100 : type === 'text' ? 40 : 100,
      rotation: 0,
      fill: type === 'text' ? 'transparent' : '#e2e8f0',
      stroke: type === 'text' ? 'transparent' : '#94a3b8',
      strokeWidth: type === 'text' ? 0 : 1,
      opacity: 1,
      name: `${type.charAt(0).toUpperCase() + type.slice(1)} ${objects.length + 1}`,
      locked: false,
      visible: true
    };
    
    if (type === 'text') {
      newObject.text = 'Edit text';
      newObject.fontSize = 16;
      newObject.fontFamily = 'Inter';
    }
    
    setObjects([...objects, newObject]);
    setSelectedObjectId(newObject.id);
  };
  
  // Update object properties
  const updateObjectProperty = (id: string, property: keyof CanvasObject, value: any) => {
    setObjects(objects.map(obj => 
      obj.id === id ? { ...obj, [property]: value } : obj
    ));
  };
  
  // Delete selected object
  const deleteSelectedObject = () => {
    if (selectedObjectId) {
      setObjects(objects.filter(obj => obj.id !== selectedObjectId));
      setSelectedObjectId(null);
    }
  };
  
  // Duplicate selected object
  const duplicateSelectedObject = () => {
    if (selectedObjectId) {
      const selectedObj = objects.find(obj => obj.id === selectedObjectId);
      if (selectedObj) {
        const newObject = {
          ...selectedObj,
          id: `obj-${Date.now()}`,
          x: selectedObj.x + 20,
          y: selectedObj.y + 20,
          name: `${selectedObj.name} (Copy)`
        };
        setObjects([...objects, newObject]);
        setSelectedObjectId(newObject.id);
      }
    }
  };
  
  // Toggle object visibility
  const toggleObjectVisibility = (id: string) => {
    const obj = objects.find(o => o.id === id);
    if (obj) {
      updateObjectProperty(id, 'visible', !obj.visible);
    }
  };
  
  // Toggle object lock
  const toggleObjectLock = (id: string) => {
    const obj = objects.find(o => o.id === id);
    if (obj) {
      updateObjectProperty(id, 'locked', !obj.locked);
    }
  };
  
  // Sort objects by z-index
  const moveObjectUp = (id: string) => {
    const index = objects.findIndex(obj => obj.id === id);
    if (index < objects.length - 1) {
      const newObjects = [...objects];
      [newObjects[index], newObjects[index + 1]] = [newObjects[index + 1], newObjects[index]];
      setObjects(newObjects);
    }
  };
  
  const moveObjectDown = (id: string) => {
    const index = objects.findIndex(obj => obj.id === id);
    if (index > 0) {
      const newObjects = [...objects];
      [newObjects[index], newObjects[index - 1]] = [newObjects[index - 1], newObjects[index]];
      setObjects(newObjects);
    }
  };
  
  // Effect to handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Delete with Delete key
      if (e.key === 'Delete' && selectedObjectId) {
        deleteSelectedObject();
      }
      
      // Duplicate with Ctrl+D
      if (e.key === 'd' && (e.ctrlKey || e.metaKey) && selectedObjectId) {
        e.preventDefault();
        duplicateSelectedObject();
      }
      
      // Select tool with V
      if (e.key === 'v' && !e.ctrlKey && !e.metaKey) {
        setTool('select');
      }
      
      // Rectangle tool with R
      if (e.key === 'r' && !e.ctrlKey && !e.metaKey) {
        setTool('rect');
      }
      
      // Circle tool with C
      if (e.key === 'c' && !e.ctrlKey && !e.metaKey) {
        setTool('circle');
      }
      
      // Text tool with T
      if (e.key === 't' && !e.ctrlKey && !e.metaKey) {
        setTool('text');
      }
      
      // Hand tool with H
      if (e.key === 'h' && !e.ctrlKey && !e.metaKey) {
        setTool('hand');
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedObjectId]);
  
  return (
    <div className="flex h-[calc(100vh-10rem)] overflow-hidden">
      {/* Left panel - Layers */}
      {showLeftPanel && (
        <div className="w-[260px] border-r h-full flex flex-col">
          <div className="p-2 border-b flex items-center justify-between">
            <h2 className="font-medium text-sm">Layers</h2>
            <div className="flex space-x-1">
              <Button variant="ghost" size="icon" className="h-7 w-7">
                <Plus className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-7 w-7">
                <RotateCcw className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <ScrollArea className="flex-1">
            <div className="p-2 space-y-1">
              {objects.slice().reverse().map((object) => (
                <div 
                  key={object.id}
                  className={`rounded-md p-2 text-sm flex items-center justify-between cursor-pointer ${selectedObjectId === object.id ? 'bg-primary/10' : 'hover:bg-secondary/50'}`}
                  onClick={() => handleObjectClick(object.id)}
                >
                  <div className="flex items-center">
                    {object.type === 'rect' && <Square className="h-4 w-4 mr-2" />}
                    {object.type === 'circle' && <Circle className="h-4 w-4 mr-2" />}
                    {object.type === 'text' && <Type className="h-4 w-4 mr-2" />}
                    {object.type === 'image' && <Image className="h-4 w-4 mr-2" />}
                    <span className={object.visible ? '' : 'text-muted-foreground line-through'}>
                      {object.name}
                    </span>
                  </div>
                  <div className="flex space-x-1">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-5 w-5" 
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleObjectVisibility(object.id);
                      }}
                    >
                      {object.visible ? (
                        <Eye className="h-3 w-3" />
                      ) : (
                        <EyeOff className="h-3 w-3" />
                      )}
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-5 w-5" 
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleObjectLock(object.id);
                      }}
                    >
                      {object.locked ? (
                        <Lock className="h-3 w-3" />
                      ) : (
                        <Unlock className="h-3 w-3" />
                      )}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      )}
      
      {/* Main canvas area */}
      <div className="flex-1 flex flex-col h-full">
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
          
          <div className="flex items-center justify-center space-x-1 border rounded-md p-1 mr-4">
            <Button 
              variant={tool === 'select' ? 'secondary' : 'ghost'} 
              size="icon" 
              className="h-8 w-8" 
              onClick={() => handleToolSelect('select')}
            >
              <Move className="h-4 w-4" />
            </Button>
            <Button 
              variant={tool === 'rect' ? 'secondary' : 'ghost'} 
              size="icon" 
              className="h-8 w-8" 
              onClick={() => handleToolSelect('rect')}
            >
              <Square className="h-4 w-4" />
            </Button>
            <Button 
              variant={tool === 'circle' ? 'secondary' : 'ghost'} 
              size="icon" 
              className="h-8 w-8" 
              onClick={() => handleToolSelect('circle')}
            >
              <Circle className="h-4 w-4" />
            </Button>
            <Button 
              variant={tool === 'text' ? 'secondary' : 'ghost'} 
              size="icon" 
              className="h-8 w-8" 
              onClick={() => handleToolSelect('text')}
            >
              <Type className="h-4 w-4" />
            </Button>
            <Button 
              variant={tool === 'image' ? 'secondary' : 'ghost'} 
              size="icon" 
              className="h-8 w-8" 
              onClick={() => handleToolSelect('image')}
            >
              <Image className="h-4 w-4" />
            </Button>
            <Button 
              variant={tool === 'pen' ? 'secondary' : 'ghost'} 
              size="icon" 
              className="h-8 w-8" 
              onClick={() => handleToolSelect('pen')}
            >
              <Pen className="h-4 w-4" />
            </Button>
            <Button 
              variant={tool === 'hand' ? 'secondary' : 'ghost'} 
              size="icon" 
              className="h-8 w-8" 
              onClick={() => handleToolSelect('hand')}
            >
              <Hand className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex items-center mr-4">
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handleZoomOut}>
              <Minus className="h-4 w-4" />
            </Button>
            <div className="w-[100px] flex items-center justify-center">
              <span className="text-xs font-medium">{zoom}%</span>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handleZoomIn}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex-1"></div>
          
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Save className="h-4 w-4 mr-2" />
              Save
            </Button>
            <Button variant="outline" size="sm">
              <Share className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
          
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
        <div 
          className="flex-1 bg-[#f8f9fa] overflow-auto relative"
          onMouseDown={handleCanvasMouseDown}
          onMouseMove={handleCanvasMouseMove}
          onMouseUp={handleCanvasMouseUp}
          onMouseLeave={handleCanvasMouseUp}
        >
          <div 
            ref={canvasRef}
            className="absolute bg-white shadow-md rounded-md border"
            style={{
              width: 1200,
              height: 800,
              left: '50%',
              top: '50%',
              transform: `translate(calc(-50% + ${canvasOffset.x}px), calc(-50% + ${canvasOffset.y}px)) scale(${zoom / 100})`,
              transformOrigin: 'center',
              transition: isDragging ? 'none' : 'transform 0.1s ease-out',
              backgroundSize: '20px 20px',
              backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)',
            }}
          >
            {/* Canvas objects */}
            {objects.map(object => (
              <div
                key={object.id}
                className={`absolute ${!object.visible ? 'opacity-30' : ''} ${object.locked ? 'pointer-events-none' : ''} ${selectedObjectId === object.id ? 'ring-2 ring-primary' : ''}`}
                style={{
                  left: object.x,
                  top: object.y,
                  width: object.width,
                  height: object.height,
                  transform: `rotate(${object.rotation}deg)`,
                  opacity: object.opacity,
                  cursor: tool === 'select' ? 'move' : 'default',
                  userSelect: 'none',
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleObjectClick(object.id);
                }}
              >
                {object.type === 'rect' && (
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundColor: object.fill,
                      border: `${object.strokeWidth}px solid ${object.stroke}`,
                    }}
                  />
                )}
                
                {object.type === 'circle' && (
                  <div
                    className="w-full h-full rounded-full"
                    style={{
                      backgroundColor: object.fill,
                      border: `${object.strokeWidth}px solid ${object.stroke}`,
                    }}
                  />
                )}
                
                {object.type === 'text' && (
                  <div
                    className="w-full h-full flex items-center"
                    style={{
                      fontSize: `${object.fontSize}px`,
                      fontFamily: object.fontFamily,
                    }}
                  >
                    {object.text}
                  </div>
                )}
                
                {object.type === 'image' && (
                  <div
                    className="w-full h-full bg-gray-200 flex items-center justify-center"
                    style={{
                      border: `${object.strokeWidth}px solid ${object.stroke}`,
                    }}
                  >
                    {object.imageUrl ? (
                      <img
                        src={object.imageUrl}
                        alt="Canvas image"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Image className="h-6 w-6 text-gray-400" />
                    )}
                  </div>
                )}
                
                {/* Selection handles will go here */}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Right panel - Properties */}
      {showRightPanel && (
        <div className="w-[300px] border-l h-full flex flex-col">
          <div className="p-2 border-b flex items-center justify-between">
            <h2 className="font-medium text-sm">Properties</h2>
            <Button variant="ghost" size="icon" className="h-7 w-7">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
          
          <ScrollArea className="flex-1">
            {selectedObject ? (
              <div className="p-4 space-y-6">
                {/* Object basics */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">
                      {selectedObject.name}
                    </h3>
                    <div className="flex space-x-1">
                      <Button variant="ghost" size="icon" className="h-7 w-7" onClick={duplicateSelectedObject}>
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-7 w-7" onClick={deleteSelectedObject}>
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-2">
                      <Label htmlFor="x-pos" className="text-xs">X</Label>
                      <Input
                        id="x-pos"
                        type="number"
                        value={selectedObject.x}
                        onChange={(e) => updateObjectProperty(selectedObject.id, 'x', Number(e.target.value))}
                        className="h-8"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="y-pos" className="text-xs">Y</Label>
                      <Input
                        id="y-pos"
                        type="number"
                        value={selectedObject.y}
                        onChange={(e) => updateObjectProperty(selectedObject.id, 'y', Number(e.target.value))}
                        className="h-8"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="width" className="text-xs">Width</Label>
                      <Input
                        id="width"
                        type="number"
                        value={selectedObject.width}
                        onChange={(e) => updateObjectProperty(selectedObject.id, 'width', Number(e.target.value))}
                        className="h-8"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="height" className="text-xs">Height</Label>
                      <Input
                        id="height"
                        type="number"
                        value={selectedObject.height}
                        onChange={(e) => updateObjectProperty(selectedObject.id, 'height', Number(e.target.value))}
                        className="h-8"
                      />
                    </div>
                    <div className="space-y-2 col-span-2">
                      <Label htmlFor="rotation" className="text-xs">Rotation</Label>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => updateObjectProperty(selectedObject.id, 'rotation', (selectedObject.rotation - 15) % 360)}>
                          <RotateCcw className="h-4 w-4" />
                        </Button>
                        <Input
                          id="rotation"
                          type="number"
                          value={selectedObject.rotation}
                          onChange={(e) => updateObjectProperty(selectedObject.id, 'rotation', Number(e.target.value) % 360)}
                          className="h-8"
                        />
                        <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => updateObjectProperty(selectedObject.id, 'rotation', (selectedObject.rotation + 15) % 360)}>
                          <RotateCw className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                {/* Fill and stroke */}
                <div className="space-y-3">
                  <h3 className="text-sm font-medium">Appearance</h3>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="fill-color" className="text-xs">Fill</Label>
                      <div className="flex items-center space-x-2">
                        <div
                          className="w-6 h-6 rounded-md border"
                          style={{ backgroundColor: selectedObject.fill }}
                        />
                        <Input
                          id="fill-color"
                          type="color"
                          value={selectedObject.fill}
                          onChange={(e) => updateObjectProperty(selectedObject.id, 'fill', e.target.value)}
                          className="w-12 h-7 p-0"
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="stroke-color" className="text-xs">Stroke</Label>
                      <div className="flex items-center space-x-2">
                        <div
                          className="w-6 h-6 rounded-md border"
                          style={{ backgroundColor: selectedObject.stroke }}
                        />
                        <Input
                          id="stroke-color"
                          type="color"
                          value={selectedObject.stroke}
                          onChange={(e) => updateObjectProperty(selectedObject.id, 'stroke', e.target.value)}
                          className="w-12 h-7 p-0"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="stroke-width" className="text-xs">Stroke Width</Label>
                        <span className="text-xs text-muted-foreground">{selectedObject.strokeWidth}px</span>
                      </div>
                      <Slider
                        id="stroke-width"
                        min={0}
                        max={20}
                        step={1}
                        value={[selectedObject.strokeWidth]}
                        onValueChange={(values) => updateObjectProperty(selectedObject.id, 'strokeWidth', values[0])}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="opacity" className="text-xs">Opacity</Label>
                        <span className="text-xs text-muted-foreground">{Math.round(selectedObject.opacity * 100)}%</span>
                      </div>
                      <Slider
                        id="opacity"
                        min={0}
                        max={1}
                        step={0.01}
                        value={[selectedObject.opacity]}
                        onValueChange={(values) => updateObjectProperty(selectedObject.id, 'opacity', values[0])}
                      />
                    </div>
                  </div>
                </div>
                
                {/* Text properties if it's a text object */}
                {selectedObject.type === 'text' && (
                  <>
                    <Separator />
                    <div className="space-y-3">
                      <h3 className="text-sm font-medium">Text</h3>
                      
                      <div className="space-y-2">
                        <Label htmlFor="text-content" className="text-xs">Content</Label>
                        <Input
                          id="text-content"
                          value={selectedObject.text}
                          onChange={(e) => updateObjectProperty(selectedObject.id, 'text', e.target.value)}
                          className="h-8"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2">
                        <div className="space-y-2">
                          <Label htmlFor="font-size" className="text-xs">Size</Label>
                          <Input
                            id="font-size"
                            type="number"
                            value={selectedObject.fontSize}
                            onChange={(e) => updateObjectProperty(selectedObject.id, 'fontSize', Number(e.target.value))}
                            className="h-8"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="font-family" className="text-xs">Font</Label>
                          <Select 
                            value={selectedObject.fontFamily}
                            onValueChange={(value) => updateObjectProperty(selectedObject.id, 'fontFamily', value)}
                          >
                            <SelectTrigger id="font-family" className="h-8">
                              <SelectValue placeholder="Select font" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Inter">Inter</SelectItem>
                              <SelectItem value="Arial">Arial</SelectItem>
                              <SelectItem value="Georgia">Georgia</SelectItem>
                              <SelectItem value="Verdana">Verdana</SelectItem>
                              <SelectItem value="Monospace">Monospace</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="flex space-x-1 pt-1">
                        <Button variant="outline" size="icon" className="h-8 w-8">
                          <AlignLeft className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon" className="h-8 w-8">
                          <AlignCenter className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon" className="h-8 w-8">
                          <AlignRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </>
                )}
                
                <Separator />
                
                {/* Arrangement controls */}
                <div className="space-y-3">
                  <h3 className="text-sm font-medium">Arrangement</h3>
                  
                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="h-8"
                      onClick={() => moveObjectUp(selectedObject.id)}
                    >
                      Bring Forward
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="h-8"
                      onClick={() => moveObjectDown(selectedObject.id)}
                    >
                      Send Backward
                    </Button>
                  </div>
                  
                  <div className="flex space-x-2 pt-1">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 h-8"
                      onClick={() => toggleObjectLock(selectedObject.id)}
                    >
                      {selectedObject.locked ? (
                        <>
                          <Unlock className="h-4 w-4 mr-2" />
                          Unlock
                        </>
                      ) : (
                        <>
                          <Lock className="h-4 w-4 mr-2" />
                          Lock
                        </>
                      )}
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 h-8"
                      onClick={() => toggleObjectVisibility(selectedObject.id)}
                    >
                      {selectedObject.visible ? (
                        <>
                          <EyeOff className="h-4 w-4 mr-2" />
                          Hide
                        </>
                      ) : (
                        <>
                          <Eye className="h-4 w-4 mr-2" />
                          Show
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-4 flex flex-col items-center justify-center h-full text-center text-muted-foreground">
                <div className="mb-4">
                  <Square className="h-12 w-12 mx-auto mb-2 opacity-20" />
                  <p>No object selected</p>
                </div>
                <div className="space-y-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full"
                    onClick={() => createNewObject('rect')}
                  >
                    <Square className="h-4 w-4 mr-2" />
                    Add Rectangle
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full"
                    onClick={() => createNewObject('circle')}
                  >
                    <Circle className="h-4 w-4 mr-2" />
                    Add Circle
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full"
                    onClick={() => createNewObject('text')}
                  >
                    <Type className="h-4 w-4 mr-2" />
                    Add Text
                  </Button>
                </div>
              </div>
            )}
          </ScrollArea>
        </div>
      )}
    </div>
  );
}

export default CanvasEditor; 