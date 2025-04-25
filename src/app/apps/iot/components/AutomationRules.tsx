'use client';

import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  PlusCircle, 
  Search, 
  Gauge, 
  BrainCircuit, 
  Clock, 
  Zap, 
  Bell, 
  Calendar, 
  ArrowRight 
} from 'lucide-react';

interface AutomationRulesProps {
  onDeviceClick: (deviceId: string) => void;
}

// Define action type with proper TypeScript interface
interface AutomationAction {
  type: string;
  description: string;
  deviceId?: string; // Make deviceId optional
}

const AutomationRules: React.FC<AutomationRulesProps> = ({ onDeviceClick }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Sample automation rules
  const rules = [
    {
      id: 'rule-001',
      name: 'High Temperature Alert',
      description: 'Send notification when temperature exceeds threshold',
      enabled: true,
      triggerType: 'threshold',
      triggerDetails: {
        deviceId: 'temp-sensor-001',
        deviceName: 'Temperature Sensor 1',
        condition: '> 25°C',
      },
      actions: [
        { type: 'notification', description: 'Send notification: "Temperature is too high"' } as AutomationAction
      ]
    },
    {
      id: 'rule-002',
      name: 'Motion Detection - Turn On Lights',
      description: 'Turn on lights when motion is detected',
      enabled: true,
      triggerType: 'event',
      triggerDetails: {
        deviceId: 'motion-sensor-001',
        deviceName: 'Motion Sensor 1',
        condition: 'Motion detected',
      },
      actions: [
        { type: 'control', description: 'Turn on "Smart Light Controller"', deviceId: 'light-ctrl-001' } as AutomationAction
      ]
    },
    {
      id: 'rule-003',
      name: 'Night Time - Reduce Thermostat',
      description: 'Lower thermostat temperature at night',
      enabled: true,
      triggerType: 'schedule',
      triggerDetails: {
        schedule: '10:00 PM daily',
        condition: 'Time is 10:00 PM',
      },
      actions: [
        { type: 'control', description: 'Set "Smart Thermostat" to 20°C', deviceId: 'thermostat-001' } as AutomationAction
      ]
    },
    {
      id: 'rule-004',
      name: 'Morning - Increase Thermostat',
      description: 'Raise thermostat temperature in the morning',
      enabled: false,
      triggerType: 'schedule',
      triggerDetails: {
        schedule: '7:00 AM weekdays',
        condition: 'Time is 7:00 AM on weekdays',
      },
      actions: [
        { type: 'control', description: 'Set "Smart Thermostat" to 22°C', deviceId: 'thermostat-001' } as AutomationAction
      ]
    }
  ];

  // Filter rules based on search term
  const filteredRules = rules.filter(rule => 
    searchTerm === '' || 
    rule.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    rule.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Render trigger icon based on type
  const renderTriggerIcon = (triggerType: string) => {
    switch (triggerType) {
      case 'threshold':
        return <Gauge className="h-5 w-5 text-blue-500" />;
      case 'event':
        return <Zap className="h-5 w-5 text-yellow-500" />;
      case 'schedule':
        return <Clock className="h-5 w-5 text-purple-500" />;
      default:
        return <BrainCircuit className="h-5 w-5 text-gray-500" />;
    }
  };

  // Render action icon based on type
  const renderActionIcon = (actionType: string) => {
    switch (actionType) {
      case 'notification':
        return <Bell className="h-4 w-4 text-red-500" />;
      case 'control':
        return <Zap className="h-4 w-4 text-green-500" />;
      default:
        return <BrainCircuit className="h-4 w-4 text-blue-500" />;
    }
  };

  // Toggle rule enabled state
  const toggleRuleStatus = (ruleId: string, currentStatus: boolean) => {
    console.log(`Toggling rule ${ruleId} from ${currentStatus} to ${!currentStatus}`);
    // In a real app, this would update the state and call an API
  };

  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Automation Rules</h1>
          <p className="text-muted-foreground">Create and manage automation rules for your IoT devices</p>
        </div>
        <Button className="mt-4 md:mt-0">
          <PlusCircle className="h-4 w-4 mr-2" />
          Create Rule
        </Button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search rules..."
          className="pl-8 max-w-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Rules list */}
      <div className="space-y-4">
        {filteredRules.map(rule => (
          <Card 
            key={rule.id}
            className={`hover:shadow-md transition-shadow iot-automation-rule ${!rule.enabled ? 'iot-automation-rule-disabled' : ''}`}
          >
            <CardHeader className="pb-2 flex flex-row items-start justify-between space-y-0">
              <div className="space-y-1 flex-1">
                <div className="flex items-center gap-2">
                  {renderTriggerIcon(rule.triggerType)}
                  <CardTitle className="text-lg">{rule.name}</CardTitle>
                  <Badge variant={rule.triggerType === 'threshold' ? 'default' : 
                              rule.triggerType === 'event' ? 'secondary' : 'outline'}
                  >
                    {rule.triggerType}
                  </Badge>
                </div>
                <CardDescription>{rule.description}</CardDescription>
              </div>
              <Switch 
                checked={rule.enabled} 
                onCheckedChange={() => toggleRuleStatus(rule.id, rule.enabled)}
                aria-label={`${rule.enabled ? 'Disable' : 'Enable'} ${rule.name}`}
              />
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
                <div>
                  <h3 className="text-sm font-medium mb-2">Trigger</h3>
                  <div className="bg-muted rounded-md p-3 text-sm">
                    <div className="flex items-start gap-2">
                      {rule.triggerType === 'schedule' ? (
                        <Calendar className="h-4 w-4 text-muted-foreground mt-0.5" />
                      ) : (
                        <div className="cursor-pointer text-blue-600 hover:underline flex items-center" 
                          onClick={() => rule.triggerDetails.deviceId && onDeviceClick(rule.triggerDetails.deviceId)}
                        >
                          {renderTriggerIcon(rule.triggerType)}
                          <span className="ml-1">
                            {rule.triggerDetails.deviceName || 'Trigger device'}
                          </span>
                        </div>
                      )}
                      <div className="flex-1">
                        <div className="font-medium">{rule.triggerDetails.condition}</div>
                        {rule.triggerType === 'schedule' && (
                          <div className="text-muted-foreground">{rule.triggerDetails.schedule}</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium mb-2">Actions</h3>
                  <div className="space-y-2">
                    {rule.actions.map((action, index) => (
                      <div key={index} className="bg-muted rounded-md p-3 text-sm flex items-start gap-2">
                        {renderActionIcon(action.type)}
                        <div className="flex-1">
                          {action.description}
                          {action.deviceId && (
                            <div>
                              <button 
                                className="text-blue-600 hover:underline text-xs flex items-center mt-1"
                                onClick={() => onDeviceClick(action.deviceId!)}
                              >
                                View device
                                <ArrowRight className="h-3 w-3 ml-1" />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="outline" size="sm">Edit</Button>
              <Button variant="outline" size="sm" className="text-red-500 hover:bg-red-50 hover:text-red-600">
                Delete
              </Button>
            </CardFooter>
          </Card>
        ))}
        
        {filteredRules.length === 0 && (
          <Card className="border-dashed">
            <CardHeader>
              <CardTitle className="text-center">No rules found</CardTitle>
              <CardDescription className="text-center">
                No automation rules match your search.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center pb-6">
              <Button variant="outline" onClick={() => setSearchTerm('')}>
                Clear search
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default AutomationRules; 