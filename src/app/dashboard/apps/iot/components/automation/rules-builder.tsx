'use client';

import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardDescription,
  CardFooter 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, 
} from "@/components/ui/select";
import { Textarea } from '@/components/ui/textarea';
import { 
  PlusCircle, 
  Workflow, 
  Play, 
  Pause, 
  Clock, 
  AlarmClock,
  Calendar,
  ChevronDown,
  Trash2,
  Copy,
  Save,
  RotateCcw,
  ListChecks,
  Bell,
  Sun,
  Moon,
  Calendar as CalendarIcon,
  ArrowRight,
  AlertTriangle,
  CalendarDays
} from 'lucide-react';
import { Automation } from '../../types';

// Sample automation rules
const sampleAutomations: Automation[] = [
  {
    id: '1',
    name: 'Turn off lights at night',
    description: 'Automatically turn off all lights at 11:00 PM',
    trigger: {
      deviceId: 'time',
      condition: 'equals',
      value: '23:00',
      timeCondition: {
        time: '23:00',
        days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
        recurrence: 'daily'
      }
    },
    actions: [
      {
        deviceId: 'all-lights',
        action: 'turn_off',
        value: '',
      }
    ],
    isActive: true,
    createdAt: new Date('2023-09-15'),
    updatedAt: new Date('2023-09-15'),
    lastTriggered: new Date('2023-10-24T23:00:00'),
    priority: 'medium'
  },
  {
    id: '2',
    name: 'Thermostat control',
    description: 'Adjust temperature based on occupancy',
    trigger: {
      deviceId: 'motion-sensor-1',
      condition: 'no_motion',
      value: '30',
    },
    actions: [
      {
        deviceId: 'thermostat-1',
        action: 'set_temperature',
        value: '18',
      }
    ],
    isActive: true,
    createdAt: new Date('2023-08-20'),
    updatedAt: new Date('2023-10-05'),
    lastTriggered: new Date('2023-10-24T18:30:00'),
    priority: 'high'
  },
  {
    id: '3',
    name: 'Security alert',
    description: 'Send notification when door opens after midnight',
    trigger: {
      deviceId: 'door-sensor-1',
      condition: 'opened',
      value: '',
      timeCondition: {
        time: '00:00-06:00',
        recurrence: 'daily'
      }
    },
    actions: [
      {
        deviceId: 'notification',
        action: 'send',
        value: 'Security Alert: Front door opened during night hours',
      },
      {
        deviceId: 'security-light',
        action: 'turn_on',
        value: '100',
      }
    ],
    isActive: true,
    createdAt: new Date('2023-07-10'),
    updatedAt: new Date('2023-07-10'),
    priority: 'critical'
  }
];

// Mock devices for selector
const mockDevices = [
  { id: 'light-1', name: 'Living Room Light', type: 'light' },
  { id: 'light-2', name: 'Kitchen Light', type: 'light' },
  { id: 'thermostat-1', name: 'Living Room Thermostat', type: 'climate' },
  { id: 'door-sensor-1', name: 'Front Door Sensor', type: 'security' },
  { id: 'motion-sensor-1', name: 'Living Room Motion', type: 'sensor' },
  { id: 'time', name: 'Time', type: 'system' },
  { id: 'all-lights', name: 'All Lights', type: 'group' },
  { id: 'notification', name: 'Notification Service', type: 'system' },
  { id: 'security-light', name: 'Outdoor Security Light', type: 'light' },
];

// Condition options based on device type
const getConditionOptions = (deviceType: string) => {
  switch (deviceType) {
    case 'light':
      return [
        { value: 'turned_on', label: 'Turned On' },
        { value: 'turned_off', label: 'Turned Off' },
        { value: 'brightness_above', label: 'Brightness Above' },
        { value: 'brightness_below', label: 'Brightness Below' },
      ];
    case 'climate':
      return [
        { value: 'temp_above', label: 'Temperature Above' },
        { value: 'temp_below', label: 'Temperature Below' },
        { value: 'humidity_above', label: 'Humidity Above' },
        { value: 'humidity_below', label: 'Humidity Below' },
      ];
    case 'security':
      return [
        { value: 'opened', label: 'Opened' },
        { value: 'closed', label: 'Closed' },
        { value: 'locked', label: 'Locked' },
        { value: 'unlocked', label: 'Unlocked' },
      ];
    case 'sensor':
      return [
        { value: 'motion_detected', label: 'Motion Detected' },
        { value: 'no_motion', label: 'No Motion for' },
        { value: 'value_above', label: 'Value Above' },
        { value: 'value_below', label: 'Value Below' },
      ];
    case 'system':
      // Check if the specific system device is the time device
      if (mockDevices.find(d => d.id === 'time')?.type === deviceType) {
        return [
          { value: 'equals', label: 'At Time' },
          { value: 'between', label: 'Between Times' },
          { value: 'sunrise', label: 'At Sunrise' },
          { value: 'sunset', label: 'At Sunset' },
        ];
      }
      return [
        { value: 'equals', label: 'Equals' },
        { value: 'not_equals', label: 'Not Equals' },
      ];
    default:
      return [
        { value: 'any_change', label: 'Any Change' },
        { value: 'equals', label: 'Equals' },
        { value: 'not_equals', label: 'Not Equals' },
      ];
  }
};

// Action options based on device type
const getActionOptions = (deviceType: string) => {
  switch (deviceType) {
    case 'light':
      return [
        { value: 'turn_on', label: 'Turn On' },
        { value: 'turn_off', label: 'Turn Off' },
        { value: 'toggle', label: 'Toggle' },
        { value: 'set_brightness', label: 'Set Brightness' },
      ];
    case 'climate':
      return [
        { value: 'set_temperature', label: 'Set Temperature' },
        { value: 'set_mode', label: 'Set Mode' },
        { value: 'turn_on', label: 'Turn On' },
        { value: 'turn_off', label: 'Turn Off' },
      ];
    case 'security':
      return [
        { value: 'lock', label: 'Lock' },
        { value: 'unlock', label: 'Unlock' },
      ];
    case 'system':
      // Check for notification service
      if (mockDevices.find(d => d.id === 'notification')?.type === deviceType) {
        return [
          { value: 'send', label: 'Send Notification' },
        ];
      }
      return [
        { value: 'activate', label: 'Activate' },
        { value: 'deactivate', label: 'Deactivate' },
      ];
    case 'group':
      return [
        { value: 'turn_on', label: 'Turn On All' },
        { value: 'turn_off', label: 'Turn Off All' },
      ];
    default:
      return [
        { value: 'turn_on', label: 'Turn On' },
        { value: 'turn_off', label: 'Turn Off' },
      ];
  }
};

// Function to get device type by ID
const getDeviceTypeById = (deviceId: string) => {
  const device = mockDevices.find(d => d.id === deviceId);
  return device ? device.type : 'unknown';
};

const getPriorityColor = (priority: string | undefined) => {
  switch (priority) {
    case 'low':
      return 'bg-gray-50 text-gray-700 border-gray-200';
    case 'medium':
      return 'bg-blue-50 text-blue-700 border-blue-200';
    case 'high':
      return 'bg-yellow-50 text-yellow-700 border-yellow-200';
    case 'critical':
      return 'bg-red-50 text-red-700 border-red-200';
    default:
      return 'bg-gray-50 text-gray-700 border-gray-200';
  }
};

interface TriggerConditionProps {
  deviceId: string;
  condition: string;
  value: string;
  timeCondition?: {
    time?: string;
    days?: string[];
    recurrence?: 'daily' | 'weekly' | 'monthly' | 'custom';
  };
  onUpdate: (field: string, value: any) => void;
}

const TriggerCondition: React.FC<TriggerConditionProps> = ({ 
  deviceId, 
  condition, 
  value, 
  timeCondition,
  onUpdate 
}) => {
  const deviceType = getDeviceTypeById(deviceId);
  const conditions = getConditionOptions(deviceType);
  
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>When</Label>
        <Select value={deviceId} onValueChange={(val) => onUpdate('deviceId', val)}>
          <SelectTrigger>
            <SelectValue placeholder="Select device" />
          </SelectTrigger>
          <SelectContent>
            {mockDevices.map(device => (
              <SelectItem key={device.id} value={device.id}>
                {device.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <Label>Condition</Label>
        <Select value={condition} onValueChange={(val) => onUpdate('condition', val)}>
          <SelectTrigger>
            <SelectValue placeholder="Select condition" />
          </SelectTrigger>
          <SelectContent>
            {conditions.map(c => (
              <SelectItem key={c.value} value={c.value}>
                {c.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      {(condition !== 'turned_on' && 
        condition !== 'turned_off' && 
        condition !== 'opened' && 
        condition !== 'closed' && 
        condition !== 'motion_detected' &&
        condition !== 'sunrise' &&
        condition !== 'sunset') && (
        <div className="space-y-2">
          <Label>Value</Label>
          <Input 
            type="text" 
            value={value} 
            onChange={(e) => onUpdate('value', e.target.value)} 
            placeholder={
              condition.includes('temp') ? 'e.g. 22' : 
              condition.includes('brightness') ? 'e.g. 80' : 
              condition === 'no_motion' ? 'Minutes' :
              condition === 'equals' && deviceId === 'time' ? 'HH:MM' :
              condition === 'between' && deviceId === 'time' ? 'HH:MM-HH:MM' :
              'Value'
            }
          />
          {(condition.includes('temp') || condition === 'set_temperature') && (
            <span className="text-xs text-muted-foreground">Temperature in °C</span>
          )}
          {condition === 'no_motion' && (
            <span className="text-xs text-muted-foreground">Duration in minutes</span>
          )}
        </div>
      )}
      
      {deviceId === 'time' && (
        <div className="space-y-2 border rounded-md p-3">
          <div className="flex items-center">
            <CalendarDays className="h-4 w-4 mr-2 text-muted-foreground" />
            <Label>Schedule</Label>
          </div>
          
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div>
              <Label className="text-xs">Recurrence</Label>
              <Select 
                value={timeCondition?.recurrence || 'daily'} 
                onValueChange={(val) => onUpdate('timeCondition.recurrence', val)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select recurrence" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="custom">Custom</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {(timeCondition?.recurrence === 'weekly' || timeCondition?.recurrence === 'custom') && (
              <div className="col-span-2 mt-2">
                <Label className="text-xs mb-2 block">Days</Label>
                <div className="flex flex-wrap gap-2">
                  {['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].map(day => (
                    <Button
                      key={day}
                      variant={timeCondition?.days?.includes(day) ? 'default' : 'outline'}
                      size="sm"
                      className="text-xs h-8"
                      onClick={() => {
                        const currentDays = timeCondition?.days || [];
                        const newDays = currentDays.includes(day)
                          ? currentDays.filter(d => d !== day)
                          : [...currentDays, day];
                        onUpdate('timeCondition.days', newDays);
                      }}
                    >
                      {day.substring(0, 3)}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

interface ActionStepProps {
  deviceId: string;
  action: string;
  value: string;
  delay?: number;
  onUpdate: (field: string, value: any) => void;
  onDelete: () => void;
}

const ActionStep: React.FC<ActionStepProps> = ({ 
  deviceId, 
  action, 
  value, 
  delay, 
  onUpdate,
  onDelete 
}) => {
  const deviceType = getDeviceTypeById(deviceId);
  const actions = getActionOptions(deviceType);
  
  return (
    <div className="border rounded-md p-4 space-y-4">
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <h4 className="font-medium text-sm">Action</h4>
          <p className="text-xs text-muted-foreground">
            Define what happens when the trigger condition is met
          </p>
        </div>
        <Button variant="ghost" size="sm" onClick={onDelete}>
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Device</Label>
          <Select value={deviceId} onValueChange={(val) => onUpdate('deviceId', val)}>
            <SelectTrigger>
              <SelectValue placeholder="Select device" />
            </SelectTrigger>
            <SelectContent>
              {mockDevices.map(device => (
                <SelectItem key={device.id} value={device.id}>
                  {device.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label>Action</Label>
          <Select value={action} onValueChange={(val) => onUpdate('action', val)}>
            <SelectTrigger>
              <SelectValue placeholder="Select action" />
            </SelectTrigger>
            <SelectContent>
              {actions.map(a => (
                <SelectItem key={a.value} value={a.value}>
                  {a.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        {(action === 'set_brightness' || 
          action === 'set_temperature' || 
          (action === 'send' && deviceId === 'notification') || 
          action === 'set_mode') && (
          <div className="space-y-2">
            <Label>
              {action === 'send' && deviceId === 'notification' 
                ? 'Message' 
                : action === 'set_mode'
                ? 'Mode'
                : 'Value'}
            </Label>
            {action === 'send' && deviceId === 'notification' ? (
              <Textarea 
                value={value} 
                onChange={(e) => onUpdate('value', e.target.value)}
                placeholder="Enter notification message"
                className="min-h-[80px]"
              />
            ) : (
              <Input 
                type="text" 
                value={value} 
                onChange={(e) => onUpdate('value', e.target.value)}
                placeholder={
                  action === 'set_brightness' ? 'e.g. 80' :
                  action === 'set_temperature' ? 'e.g. 22' :
                  action === 'set_mode' ? 'e.g. auto, heat, cool' :
                  'Value'
                }
              />
            )}
            {action === 'set_brightness' && (
              <span className="text-xs text-muted-foreground">Brightness level (0-100)</span>
            )}
            {action === 'set_temperature' && (
              <span className="text-xs text-muted-foreground">Temperature in °C</span>
            )}
          </div>
        )}
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="delay-toggle">Delay</Label>
            <Switch 
              id="delay-toggle" 
              checked={!!delay}
              onCheckedChange={(checked) => onUpdate('delay', checked ? 0 : undefined)}
            />
          </div>
          
          {delay !== undefined && (
            <div className="flex items-center gap-2">
              <Input 
                type="number" 
                min="0"
                value={delay} 
                onChange={(e) => onUpdate('delay', parseInt(e.target.value) || 0)}
              />
              <span className="text-sm whitespace-nowrap">seconds</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const RulesBuilder: React.FC = () => {
  const [activeTab, setActiveTab] = useState('automation-list');
  const [automations, setAutomations] = useState<Automation[]>(sampleAutomations);
  const [selectedAutomation, setSelectedAutomation] = useState<Automation | null>(null);
  const [newAutomation, setNewAutomation] = useState<Automation>({
    id: '',
    name: '',
    description: '',
    trigger: {
      deviceId: '',
      condition: '',
      value: '',
    },
    actions: [{
      deviceId: '',
      action: '',
      value: '',
    }],
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    priority: 'medium'
  });
  
  const handleCreateAutomation = () => {
    setSelectedAutomation(null);
    setNewAutomation({
      id: `new-${Date.now()}`,
      name: 'New Automation',
      description: '',
      trigger: {
        deviceId: mockDevices[0].id,
        condition: getConditionOptions(mockDevices[0].type)[0].value,
        value: '',
      },
      actions: [{
        deviceId: mockDevices[0].id,
        action: getActionOptions(mockDevices[0].type)[0].value,
        value: '',
      }],
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      priority: 'medium'
    });
    setActiveTab('create-automation');
  };
  
  const handleEditAutomation = (automation: Automation) => {
    setSelectedAutomation(automation);
    setNewAutomation({ ...automation });
    setActiveTab('create-automation');
  };
  
  const handleSaveAutomation = () => {
    if (selectedAutomation) {
      // Update existing automation
      setAutomations(automations.map(a => 
        a.id === selectedAutomation.id ? { ...newAutomation, updatedAt: new Date() } : a
      ));
    } else {
      // Add new automation
      setAutomations([...automations, { ...newAutomation, updatedAt: new Date() }]);
    }
    setActiveTab('automation-list');
    setSelectedAutomation(null);
  };
  
  const handleToggleAutomation = (id: string, isActive: boolean) => {
    setAutomations(automations.map(a => 
      a.id === id ? { ...a, isActive, updatedAt: new Date() } : a
    ));
  };
  
  const handleDeleteAutomation = (id: string) => {
    setAutomations(automations.filter(a => a.id !== id));
  };
  
  const handleAddAction = () => {
    setNewAutomation({
      ...newAutomation,
      actions: [
        ...newAutomation.actions,
        {
          deviceId: mockDevices[0].id,
          action: getActionOptions(mockDevices[0].type)[0].value,
          value: '',
        }
      ]
    });
  };
  
  const handleUpdateTrigger = (field: string, value: any) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setNewAutomation({
        ...newAutomation,
        trigger: {
          ...newAutomation.trigger,
          [parent]: {
            ...newAutomation.trigger[parent as keyof typeof newAutomation.trigger] as any,
            [child]: value
          }
        }
      });
    } else {
      setNewAutomation({
        ...newAutomation,
        trigger: {
          ...newAutomation.trigger,
          [field]: value
        }
      });
    }
  };
  
  const handleUpdateAction = (index: number, field: string, value: any) => {
    const updatedActions = [...newAutomation.actions];
    updatedActions[index] = {
      ...updatedActions[index],
      [field]: value
    };
    setNewAutomation({
      ...newAutomation,
      actions: updatedActions
    });
  };
  
  const handleDeleteAction = (index: number) => {
    if (newAutomation.actions.length > 1) {
      const updatedActions = [...newAutomation.actions];
      updatedActions.splice(index, 1);
      setNewAutomation({
        ...newAutomation,
        actions: updatedActions
      });
    }
  };
  
  const formatDate = (date: Date | undefined) => {
    if (!date) return 'Never';
    return new Date(date).toLocaleString();
  };
  
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Automation Rules</CardTitle>
            <CardDescription>
              Create and manage automated workflows for your devices
            </CardDescription>
          </div>
          <Button onClick={handleCreateAutomation}>
            <PlusCircle className="h-4 w-4 mr-2" />
            Create Automation
          </Button>
        </div>
      </CardHeader>
      
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="automation-list">Automations</TabsTrigger>
            <TabsTrigger value="create-automation" disabled={activeTab !== 'create-automation'}>
              {selectedAutomation ? 'Edit Automation' : 'Create Automation'}
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="automation-list" className="space-y-6">
            {automations.length === 0 ? (
              <div className="text-center py-12">
                <Workflow className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">No automations yet</h3>
                <p className="text-muted-foreground mb-6">
                  Create your first automation rule to automate your smart home
                </p>
                <Button onClick={handleCreateAutomation}>
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Create Automation
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {automations.map(automation => (
                  <Card key={automation.id} className="overflow-hidden">
                    <div className={`h-1 ${automation.isActive ? 'bg-green-500' : 'bg-gray-200'}`} />
                    <CardHeader className="py-4">
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <CardTitle className="text-lg">{automation.name}</CardTitle>
                          <CardDescription>{automation.description}</CardDescription>
                        </div>
                        <div className="flex items-center gap-1">
                          <Badge 
                            variant="outline" 
                            className={getPriorityColor(automation.priority)}
                          >
                            {automation.priority}
                          </Badge>
                          <Switch 
                            checked={automation.isActive}
                            onCheckedChange={(checked) => handleToggleAutomation(automation.id, checked)}
                          />
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="py-0">
                      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-sm mb-4">
                        <div className="flex items-center">
                          <AlarmClock className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>Trigger: {
                            automation.trigger.deviceId === 'time' 
                              ? `At ${automation.trigger.value}` 
                              : `When ${mockDevices.find(d => d.id === automation.trigger.deviceId)?.name || 'device'} ${automation.trigger.condition.replace('_', ' ')}`
                          }</span>
                        </div>
                        <div className="flex items-center">
                          <Play className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>Actions: {automation.actions.length}</span>
                        </div>
                        <div className="flex items-center">
                          <Bell className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>Last triggered: {formatDate(automation.lastTriggered)}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleEditAutomation(automation)}
                        >
                          Edit
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleDeleteAutomation(automation.id)}
                        >
                          Delete
                        </Button>
                        <Button variant="outline" size="sm">
                          <Play className="h-3 w-3 mr-1" />
                          Run Now
                        </Button>
                        <Button variant="outline" size="sm">
                          <Copy className="h-3 w-3 mr-1" />
                          Duplicate
                        </Button>
                      </div>
                    </CardContent>
                    
                    <div className="bg-muted/40 px-6 py-2 text-xs text-muted-foreground">
                      Created: {formatDate(automation.createdAt)} • Updated: {formatDate(automation.updatedAt)}
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="create-automation" className="space-y-6">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="automation-name">Name</Label>
                  <Input 
                    id="automation-name" 
                    placeholder="Enter automation name" 
                    value={newAutomation.name}
                    onChange={(e) => setNewAutomation({ ...newAutomation, name: e.target.value })}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="automation-priority">Priority</Label>
                  <Select 
                    value={newAutomation.priority} 
                    onValueChange={(val) => setNewAutomation({ ...newAutomation, priority: val as any })}
                  >
                    <SelectTrigger id="automation-priority">
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="critical">Critical</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="automation-description">Description</Label>
                <Textarea 
                  id="automation-description" 
                  placeholder="Enter a description for this automation"
                  value={newAutomation.description || ''}
                  onChange={(e) => setNewAutomation({ ...newAutomation, description: e.target.value })}
                />
              </div>
              
              <Separator />
              
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Trigger</h3>
                <p className="text-sm text-muted-foreground">
                  Define when this automation should run
                </p>
                
                <div className="border rounded-md p-4 mt-4">
                  <TriggerCondition 
                    deviceId={newAutomation.trigger.deviceId}
                    condition={newAutomation.trigger.condition}
                    value={newAutomation.trigger.value}
                    timeCondition={newAutomation.trigger.timeCondition}
                    onUpdate={handleUpdateTrigger}
                  />
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">Actions</h3>
                    <p className="text-sm text-muted-foreground">
                      Define what happens when the trigger condition is met
                    </p>
                  </div>
                  <Button
                    variant="outline" 
                    size="sm"
                    onClick={handleAddAction}
                  >
                    <PlusCircle className="h-4 w-4 mr-2" />
                    Add Action
                  </Button>
                </div>
                
                {newAutomation.actions.map((action, index) => (
                  <ActionStep 
                    key={index}
                    deviceId={action.deviceId}
                    action={action.action}
                    value={action.value}
                    delay={action.delay}
                    onUpdate={(field, value) => handleUpdateAction(index, field, value)}
                    onDelete={() => handleDeleteAction(index)}
                  />
                ))}
              </div>
              
              <div className="bg-muted/30 rounded-md p-4 flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5" />
                <div className="text-sm">
                  <h4 className="font-medium">Automation Validation</h4>
                  <p className="text-muted-foreground">
                    This automation will run automatically when the trigger conditions are met.
                    Make sure to test it properly before enabling.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      
      {activeTab === 'create-automation' && (
        <CardFooter className="flex justify-between border-t pt-6">
          <Button 
            variant="outline"
            onClick={() => {
              setActiveTab('automation-list');
              setSelectedAutomation(null);
            }}
          >
            Cancel
          </Button>
          <div className="space-x-2">
            <Button 
              variant="outline"
              onClick={() => {
                // Testing button would handle simulation logic
              }}
            >
              <Play className="h-4 w-4 mr-2" />
              Test
            </Button>
            <Button onClick={handleSaveAutomation}>
              <Save className="h-4 w-4 mr-2" />
              Save Automation
            </Button>
          </div>
        </CardFooter>
      )}
    </Card>
  );
};

export default RulesBuilder; 