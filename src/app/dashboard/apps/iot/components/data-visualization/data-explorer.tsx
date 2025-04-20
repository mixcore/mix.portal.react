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
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { 
  BarChart, 
  LineChart, 
  PieChart, 
  Gauge, 
  Download, 
  RefreshCw, 
  Calendar, 
  Share2, 
  Maximize2, 
  ZoomIn,
  GitBranch,
  Layers,
  SplitSquareHorizontal, 
  AlertCircle,
  PlusCircle
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';

const DataExplorer: React.FC = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('24h');
  const [selectedDevices, setSelectedDevices] = useState<string[]>(['device-1', 'device-2']);
  const [selectedMetrics, setSelectedMetrics] = useState<string[]>(['temperature']);
  const [chartType, setChartType] = useState<'line' | 'bar' | 'pie' | 'gauge'>('line');
  const [isRealtime, setIsRealtime] = useState(true);
  const [aggregation, setAggregation] = useState('none');
  const [annotations, setAnnotations] = useState<any[]>([]);
  const [hasData, setHasData] = useState(true);

  // Mock data for devices
  const devices = [
    { id: 'device-1', name: 'Living Room Thermostat', type: 'climate' },
    { id: 'device-2', name: 'Kitchen Light', type: 'light' },
    { id: 'device-3', name: 'Front Door', type: 'security' },
    { id: 'device-4', name: 'Bedroom Air Quality', type: 'sensor' },
  ];

  // Mock data for metrics
  const metrics = [
    { id: 'temperature', name: 'Temperature', unit: '°C' },
    { id: 'humidity', name: 'Humidity', unit: '%' },
    { id: 'energy', name: 'Energy Consumption', unit: 'kWh' },
    { id: 'brightness', name: 'Brightness', unit: '%' },
    { id: 'motion', name: 'Motion Events', unit: 'count' },
  ];

  // Mock data for presets
  const presets = [
    { id: 'preset-1', name: 'Temperature Trends', devices: ['device-1'], metrics: ['temperature'] },
    { id: 'preset-2', name: 'Energy Usage', devices: ['device-2'], metrics: ['energy'] },
    { id: 'preset-3', name: 'Security Events', devices: ['device-3'], metrics: ['motion'] },
  ];

  const timeRanges = [
    { value: '1h', label: 'Last Hour' },
    { value: '24h', label: 'Last 24 Hours' },
    { value: '7d', label: 'Last 7 Days' },
    { value: '30d', label: 'Last 30 Days' },
    { value: '90d', label: 'Last 90 Days' },
    { value: 'custom', label: 'Custom Range' }
  ];

  const aggregationOptions = [
    { value: 'none', label: 'No Aggregation' },
    { value: 'avg', label: 'Average' },
    { value: 'sum', label: 'Sum' },
    { value: 'min', label: 'Minimum' },
    { value: 'max', label: 'Maximum' },
    { value: 'count', label: 'Count' },
  ];

  const getSelectedDeviceNames = () => {
    return devices
      .filter(device => selectedDevices.includes(device.id))
      .map(device => device.name)
      .join(', ');
  };

  const getSelectedMetricNames = () => {
    return metrics
      .filter(metric => selectedMetrics.includes(metric.id))
      .map(metric => metric.name)
      .join(', ');
  };

  const handleDeviceChange = (deviceId: string) => {
    if (selectedDevices.includes(deviceId)) {
      setSelectedDevices(selectedDevices.filter(id => id !== deviceId));
    } else {
      setSelectedDevices([...selectedDevices, deviceId]);
    }
  };

  const handleMetricChange = (metricId: string) => {
    if (selectedMetrics.includes(metricId)) {
      setSelectedMetrics(selectedMetrics.filter(id => id !== metricId));
    } else {
      setSelectedMetrics([...selectedMetrics, metricId]);
    }
  };

  const handlePresetSelect = (presetId: string) => {
    const preset = presets.find(p => p.id === presetId);
    if (preset) {
      setSelectedDevices(preset.devices);
      setSelectedMetrics(preset.metrics);
    }
  };

  const getChartIcon = () => {
    switch (chartType) {
      case 'line': return <LineChart className="h-5 w-5" />;
      case 'bar': return <BarChart className="h-5 w-5" />;
      case 'pie': return <PieChart className="h-5 w-5" />;
      case 'gauge': return <Gauge className="h-5 w-5" />;
      default: return <LineChart className="h-5 w-5" />;
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex flex-wrap justify-between items-start gap-2">
            <div>
              <CardTitle>Data Explorer</CardTitle>
              <CardDescription>
                Analyze and visualize your IoT device data
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <RefreshCw className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6">
            {/* Left sidebar with controls */}
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium mb-2">Data Source</h3>
                <Tabs defaultValue="devices" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="devices">Devices</TabsTrigger>
                    <TabsTrigger value="presets">Presets</TabsTrigger>
                  </TabsList>
                  <TabsContent value="devices" className="space-y-4 pt-2">
                    <div className="space-y-2">
                      <Label htmlFor="device-search">Search Devices</Label>
                      <Input id="device-search" placeholder="Filter devices..." />
                      <div className="mt-2 space-y-2 max-h-40 overflow-y-auto border rounded-md p-2">
                        {devices.map(device => (
                          <div key={device.id} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`device-${device.id}`} 
                              checked={selectedDevices.includes(device.id)}
                              onCheckedChange={() => handleDeviceChange(device.id)}
                            />
                            <Label 
                              htmlFor={`device-${device.id}`}
                              className="text-sm cursor-pointer flex-grow"
                            >
                              {device.name}
                            </Label>
                            <Badge variant="outline" className="text-xs">
                              {device.type}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="metric-search">Metrics</Label>
                      <Input id="metric-search" placeholder="Filter metrics..." />
                      <div className="mt-2 space-y-2 max-h-40 overflow-y-auto border rounded-md p-2">
                        {metrics.map(metric => (
                          <div key={metric.id} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`metric-${metric.id}`} 
                              checked={selectedMetrics.includes(metric.id)}
                              onCheckedChange={() => handleMetricChange(metric.id)}
                            />
                            <Label 
                              htmlFor={`metric-${metric.id}`}
                              className="text-sm cursor-pointer flex-grow"
                            >
                              {metric.name}
                            </Label>
                            <span className="text-xs text-muted-foreground">
                              {metric.unit}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="presets" className="pt-2">
                    <div className="space-y-2">
                      <div className="space-y-2 mt-2">
                        {presets.map(preset => (
                          <div 
                            key={preset.id} 
                            className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-accent"
                            onClick={() => handlePresetSelect(preset.id)}
                          >
                            <div className="flex-grow">
                              <p className="font-medium text-sm">{preset.name}</p>
                              <p className="text-xs text-muted-foreground">
                                {preset.devices.length} device{preset.devices.length !== 1 ? 's' : ''}, {preset.metrics.length} metric{preset.metrics.length !== 1 ? 's' : ''}
                              </p>
                            </div>
                            <Button variant="ghost" size="sm">
                              <Layers className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                      <Button variant="outline" className="w-full mt-2">
                        <PlusCircle className="h-4 w-4 mr-2" />
                        Create New Preset
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Time Range</h3>
                <Select 
                  value={selectedTimeRange} 
                  onValueChange={setSelectedTimeRange}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select time range" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeRanges.map(range => (
                      <SelectItem key={range.value} value={range.value}>
                        {range.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                {selectedTimeRange === 'custom' && (
                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-1">
                      <Label htmlFor="start-date" className="text-xs">Start Date</Label>
                      <div className="relative">
                        <Input id="start-date" type="date" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="end-date" className="text-xs">End Date</Label>
                      <div className="relative">
                        <Input id="end-date" type="date" />
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="flex items-center justify-between">
                  <Label htmlFor="realtime" className="text-sm">Real-time Updates</Label>
                  <Switch 
                    id="realtime" 
                    checked={isRealtime}
                    onCheckedChange={setIsRealtime}
                  />
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Visualization</h3>
                <div className="grid grid-cols-2 gap-2">
                  <Button 
                    variant={chartType === 'line' ? 'default' : 'outline'} 
                    className="justify-start"
                    onClick={() => setChartType('line')}
                  >
                    <LineChart className="h-4 w-4 mr-2" />
                    Line
                  </Button>
                  <Button 
                    variant={chartType === 'bar' ? 'default' : 'outline'} 
                    className="justify-start"
                    onClick={() => setChartType('bar')}
                  >
                    <BarChart className="h-4 w-4 mr-2" />
                    Bar
                  </Button>
                  <Button 
                    variant={chartType === 'pie' ? 'default' : 'outline'} 
                    className="justify-start"
                    onClick={() => setChartType('pie')}
                  >
                    <PieChart className="h-4 w-4 mr-2" />
                    Pie
                  </Button>
                  <Button 
                    variant={chartType === 'gauge' ? 'default' : 'outline'} 
                    className="justify-start"
                    onClick={() => setChartType('gauge')}
                  >
                    <Gauge className="h-4 w-4 mr-2" />
                    Gauge
                  </Button>
                </div>
                
                <div className="space-y-2">
                  <Label className="text-sm">Aggregation</Label>
                  <Select 
                    value={aggregation} 
                    onValueChange={setAggregation}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select aggregation" />
                    </SelectTrigger>
                    <SelectContent>
                      {aggregationOptions.map(option => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            
            {/* Main chart area */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">
                    {getSelectedMetricNames()} for {getSelectedDeviceNames()}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {selectedTimeRange === 'custom' ? 'Custom Range' : `Last ${selectedTimeRange}`}
                    {aggregation !== 'none' && ` • ${aggregationOptions.find(o => o.value === aggregation)?.label}`}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm">
                    <GitBranch className="h-4 w-4 mr-2" />
                    Compare
                  </Button>
                  <Button variant="ghost" size="sm">
                    <ZoomIn className="h-4 w-4 mr-2" />
                    Zoom
                  </Button>
                  <Button variant="ghost" size="sm">
                    <SplitSquareHorizontal className="h-4 w-4 mr-2" />
                    Split
                  </Button>
                </div>
              </div>
              
              {/* Chart visualization */}
              {hasData ? (
                <div className="border rounded-lg aspect-[3/2] min-h-[400px] bg-gradient-to-br from-muted/50 to-muted flex items-center justify-center">
                  <div className="text-center">
                    {getChartIcon()}
                    <p className="text-sm text-muted-foreground mt-2">
                      Chart visualization would be rendered here with actual data
                    </p>
                  </div>
                </div>
              ) : (
                <div className="border rounded-lg aspect-[3/2] min-h-[400px] flex items-center justify-center">
                  <div className="text-center max-w-md p-6">
                    <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-lg font-medium mb-2">No Data Available</p>
                    <p className="text-sm text-muted-foreground mb-4">
                      There's no data available for the selected devices, metrics, and time range.
                    </p>
                    <Button>
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Try Different Options
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Data insights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="py-2">
                    <CardTitle className="text-sm">Minimum</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">18.2°C</div>
                    <p className="text-xs text-muted-foreground">
                      2023-10-25 03:45 AM
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="py-2">
                    <CardTitle className="text-sm">Maximum</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">27.5°C</div>
                    <p className="text-xs text-muted-foreground">
                      2023-10-25 02:15 PM
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="py-2">
                    <CardTitle className="text-sm">Average</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">22.7°C</div>
                    <p className="text-xs text-muted-foreground">
                      Across time period
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              {/* Data table */}
              <Card>
                <CardHeader className="py-3">
                  <CardTitle className="text-sm">Raw Data</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="border-t">
                    <table className="w-full">
                      <thead>
                        <tr>
                          <th className="text-left text-xs font-medium text-muted-foreground p-2">Timestamp</th>
                          <th className="text-left text-xs font-medium text-muted-foreground p-2">Device</th>
                          <th className="text-left text-xs font-medium text-muted-foreground p-2">Metric</th>
                          <th className="text-right text-xs font-medium text-muted-foreground p-2">Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[...Array(5)].map((_, i) => (
                          <tr key={i} className="border-t hover:bg-muted/50">
                            <td className="p-2 text-xs">2023-10-25 14:{15 + i}:00</td>
                            <td className="p-2 text-xs">Living Room Thermostat</td>
                            <td className="p-2 text-xs">Temperature</td>
                            <td className="p-2 text-xs text-right">{22 + (Math.random() * 5).toFixed(1)}°C</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
                <div className="text-center p-2">
                  <Button variant="link" size="sm">
                    View all data entries
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DataExplorer; 