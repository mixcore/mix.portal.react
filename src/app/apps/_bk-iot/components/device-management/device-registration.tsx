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
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  PlusCircle, 
  Smartphone, 
  QrCode, 
  WifiIcon,
  Workflow,
  ShieldCheck,
  Lightbulb,
  Thermometer,
  Camera,
  Speaker,
  Lock,
  Router,
  Cpu,
  Power
} from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { DeviceType, ConnectivityProtocol } from '../../types';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';

const DeviceRegistration: React.FC = () => {
  const [registrationMethod, setRegistrationMethod] = useState<'manual' | 'qrcode' | 'discovery'>('manual');
  const [deviceType, setDeviceType] = useState<DeviceType>('light');
  const [deviceName, setDeviceName] = useState('');
  const [deviceRoom, setDeviceRoom] = useState('');
  const [deviceConnectivity, setDeviceConnectivity] = useState<ConnectivityProtocol>('mqtt');
  const [registrationStep, setRegistrationStep] = useState(1);
  const [isProvisioning, setIsProvisioning] = useState(false);
  const [provisioningProgress, setProvisioningProgress] = useState(0);
  const [provisioningComplete, setProvisioningComplete] = useState(false);

  const handleNextStep = () => {
    if (registrationStep < 3) {
      setRegistrationStep(registrationStep + 1);
    } else {
      startProvisioning();
    }
  };

  const handlePreviousStep = () => {
    if (registrationStep > 1) {
      setRegistrationStep(registrationStep - 1);
    }
  };

  const startProvisioning = () => {
    setIsProvisioning(true);
    
    // Simulate provisioning process
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setProvisioningProgress(progress);
      
      if (progress >= 100) {
        clearInterval(interval);
        setProvisioningComplete(true);
      }
    }, 500);
  };

  const getDeviceTypeIcon = (type: DeviceType) => {
    switch (type) {
      case 'light':
        return <Lightbulb className="h-6 w-6" />;
      case 'climate':
        return <Thermometer className="h-6 w-6" />;
      case 'security':
        return <Lock className="h-6 w-6" />;
      case 'media':
        return <Speaker className="h-6 w-6" />;
      case 'sensor':
        return <Camera className="h-6 w-6" />;
      case 'gateway':
        return <Router className="h-6 w-6" />;
      case 'controller':
        return <Cpu className="h-6 w-6" />;
      case 'actuator':
        return <Power className="h-6 w-6" />;
      default:
        return <Smartphone className="h-6 w-6" />;
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Device Registration</CardTitle>
        <CardDescription>
          Add a new IoT device to your smart home network
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        {!isProvisioning ? (
          <>
            <Tabs 
              value={registrationMethod} 
              onValueChange={(value) => setRegistrationMethod(value as any)}
              className="mb-6"
            >
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="manual">Manual Setup</TabsTrigger>
                <TabsTrigger value="qrcode">QR Code Scan</TabsTrigger>
                <TabsTrigger value="discovery">Auto Discovery</TabsTrigger>
              </TabsList>
              
              <TabsContent value="manual">
                <div className="py-2 text-sm text-muted-foreground">
                  Manually enter device details to add it to your network
                </div>
              </TabsContent>
              
              <TabsContent value="qrcode">
                <div className="py-2 text-sm text-muted-foreground">
                  Scan the QR code on your device packaging or documentation
                </div>
                <div className="flex flex-col items-center justify-center py-8 border-2 border-dashed rounded-lg">
                  <QrCode className="h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-sm text-muted-foreground">
                    Position the QR code in front of your camera
                  </p>
                  <Button variant="outline" className="mt-4">
                    Open Camera
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="discovery">
                <div className="py-2 text-sm text-muted-foreground">
                  Automatically discover new devices on your network
                </div>
                <div className="flex flex-col items-center justify-center py-8 border-2 border-dashed rounded-lg">
                  <WifiIcon className="h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-sm text-muted-foreground">
                    Searching for devices on your network...
                  </p>
                  <Button variant="outline" className="mt-4">
                    Start Scanning
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
            
            {registrationMethod === 'manual' && (
              <div className="space-y-6">
                <div className="relative">
                  <div className="absolute left-0 flex h-full items-center">
                    <div className="rounded-full w-8 h-8 flex items-center justify-center bg-primary text-primary-foreground">
                      {registrationStep}
                    </div>
                  </div>
                  <div className="mb-2 ml-12 font-medium">
                    {registrationStep === 1 && "Device Information"}
                    {registrationStep === 2 && "Connectivity"}
                    {registrationStep === 3 && "Configuration"}
                  </div>
                </div>
                
                <Separator />
                
                {registrationStep === 1 && (
                  <div className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="deviceType">Device Type</Label>
                      <Select 
                        value={deviceType} 
                        onValueChange={(value) => setDeviceType(value as DeviceType)}
                      >
                        <SelectTrigger id="deviceType">
                          <SelectValue placeholder="Select device type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="climate">Climate Control</SelectItem>
                          <SelectItem value="security">Security Device</SelectItem>
                          <SelectItem value="media">Media Device</SelectItem>
                          <SelectItem value="sensor">Sensor</SelectItem>
                          <SelectItem value="gateway">Gateway</SelectItem>
                          <SelectItem value="controller">Controller</SelectItem>
                          <SelectItem value="actuator">Actuator</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="deviceName">Device Name</Label>
                        <Input 
                          id="deviceName" 
                          placeholder="e.g. Living Room Light" 
                          value={deviceName}
                          onChange={(e) => setDeviceName(e.target.value)}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="deviceRoom">Room</Label>
                        <Select 
                          value={deviceRoom} 
                          onValueChange={setDeviceRoom}
                        >
                          <SelectTrigger id="deviceRoom">
                            <SelectValue placeholder="Select room" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Living Room">Living Room</SelectItem>
                            <SelectItem value="Kitchen">Kitchen</SelectItem>
                            <SelectItem value="Bedroom">Bedroom</SelectItem>
                            <SelectItem value="Bathroom">Bathroom</SelectItem>
                            <SelectItem value="Office">Office</SelectItem>
                            <SelectItem value="Outdoor">Outdoor</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="manufacturer">Manufacturer</Label>
                      <Select defaultValue="philips">
                        <SelectTrigger id="manufacturer">
                          <SelectValue placeholder="Select manufacturer" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="philips">Philips Hue</SelectItem>
                          <SelectItem value="samsung">Samsung SmartThings</SelectItem>
                          <SelectItem value="apple">Apple HomeKit</SelectItem>
                          <SelectItem value="google">Google Nest</SelectItem>
                          <SelectItem value="amazon">Amazon Echo</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}
                
                {registrationStep === 2 && (
                  <div className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="connectivity">Connectivity Protocol</Label>
                      <Select 
                        value={deviceConnectivity} 
                        onValueChange={(value) => setDeviceConnectivity(value as ConnectivityProtocol)}
                      >
                        <SelectTrigger id="connectivity">
                          <SelectValue placeholder="Select protocol" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mqtt">MQTT</SelectItem>
                          <SelectItem value="coap">CoAP</SelectItem>
                          <SelectItem value="http">HTTP</SelectItem>
                          <SelectItem value="websocket">WebSocket</SelectItem>
                          <SelectItem value="zigbee">Zigbee</SelectItem>
                          <SelectItem value="zwave">Z-Wave</SelectItem>
                          <SelectItem value="bluetooth">Bluetooth</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="ipAddress">IP Address (optional)</Label>
                      <Input id="ipAddress" placeholder="e.g. 192.168.1.100" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="macAddress">MAC Address (optional)</Label>
                      <Input id="macAddress" placeholder="e.g. 00:1A:2B:3C:4D:5E" />
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Switch id="dhcp" defaultChecked />
                      <Label htmlFor="dhcp">Use DHCP for automatic IP assignment</Label>
                    </div>
                  </div>
                )}
                
                {registrationStep === 3 && (
                  <div className="space-y-4 mt-4">
                    <div className="flex items-center space-x-2">
                      <Switch id="telemetry" defaultChecked />
                      <Label htmlFor="telemetry">Enable device telemetry</Label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Switch id="autoUpdate" defaultChecked />
                      <Label htmlFor="autoUpdate">Enable automatic firmware updates</Label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Switch id="alerts" defaultChecked />
                      <Label htmlFor="alerts">Enable alerts and notifications</Label>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="notes">Notes (optional)</Label>
                      <Textarea id="notes" placeholder="Add any notes about this device..." />
                    </div>
                    
                    <div className="rounded-lg border p-4">
                      <h4 className="font-medium mb-2">Security Verification</h4>
                      <div className="flex items-start space-x-2">
                        <ShieldCheck className="h-5 w-5 text-green-500 mt-0.5" />
                        <div className="text-sm">
                          <p className="font-medium">Device security analysis</p>
                          <p className="text-muted-foreground">
                            We'll scan for security vulnerabilities before adding the device to your network
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </>
        ) : (
          <div className="space-y-6">
            {!provisioningComplete ? (
              <>
                <div className="text-center mb-6">
                  <Workflow className="h-16 w-16 mx-auto mb-4 text-primary" />
                  <h3 className="text-lg font-medium mb-1">Provisioning Device</h3>
                  <p className="text-sm text-muted-foreground">
                    Setting up {deviceName || "your device"}
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">{provisioningProgress >= 20 ? "✓ " : ""}Validating device information</span>
                    {provisioningProgress < 20 && <span className="text-sm font-medium">In progress</span>}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">{provisioningProgress >= 50 ? "✓ " : ""}Establishing connection</span>
                    {provisioningProgress >= 20 && provisioningProgress < 50 && <span className="text-sm font-medium">In progress</span>}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">{provisioningProgress >= 70 ? "✓ " : ""}Setting up security</span>
                    {provisioningProgress >= 50 && provisioningProgress < 70 && <span className="text-sm font-medium">In progress</span>}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">{provisioningProgress >= 90 ? "✓ " : ""}Finalizing configuration</span>
                    {provisioningProgress >= 70 && provisioningProgress < 90 && <span className="text-sm font-medium">In progress</span>}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">{provisioningProgress >= 100 ? "✓ " : ""}Adding to network</span>
                    {provisioningProgress >= 90 && provisioningProgress < 100 && <span className="text-sm font-medium">In progress</span>}
                  </div>
                </div>
                
                <div className="space-y-2 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Overall Progress</span>
                    <span className="text-sm font-medium">{provisioningProgress}%</span>
                  </div>
                  <Progress value={provisioningProgress} className="h-2" />
                </div>
              </>
            ) : (
              <div className="text-center space-y-6">
                <div className="rounded-full bg-green-100 p-6 w-fit mx-auto">
                  <CheckCircle className="h-16 w-16 text-green-600" />
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-2">Setup Complete!</h3>
                  <p className="text-muted-foreground">
                    {deviceName || "Your device"} has been successfully added to your network
                  </p>
                </div>
                
                <div className="rounded-lg border p-4 text-left">
                  <h4 className="font-medium mb-2">Device Summary</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Name</span>
                      <span className="text-sm font-medium">{deviceName || "Smart Device"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Type</span>
                      <div className="flex items-center gap-1">
                        {getDeviceTypeIcon(deviceType)}
                        <span className="text-sm font-medium">{deviceType}</span>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Room</span>
                      <span className="text-sm font-medium">{deviceRoom || "Unassigned"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Protocol</span>
                      <span className="text-sm font-medium">{deviceConnectivity}</span>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 space-x-4">
                  <Button>
                    <PlusCircle className="h-4 w-4 mr-2" />
                    Add Another Device
                  </Button>
                  <Button variant="outline">
                    View Device
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
      
      {!isProvisioning && registrationMethod === 'manual' && (
        <CardFooter className="flex justify-between border-t pt-6">
          <Button
            variant="outline"
            onClick={handlePreviousStep}
            disabled={registrationStep === 1}
          >
            Back
          </Button>
          <Button onClick={handleNextStep}>
            {registrationStep === 3 ? 'Register Device' : 'Next'}
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default DeviceRegistration; 