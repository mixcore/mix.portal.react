'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardDescription,
  CardFooter 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Activity, 
  HeartPulse,
  RefreshCw, 
  Users,
  AlertCircle,
  Wifi,
  WifiOff,
  Settings,
  Search,
  Map,
  Filter,
  MapPin,
  Building,
  ArrowUpDown,
  Check,
  ChevronsUpDown,
  Thermometer
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import mqtt from 'mqtt';
import {
  LineChart,
  Line,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Area,
  AreaChart,
  BarChart,
  Bar,
  ComposedChart,
  Legend
} from 'recharts';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

interface MmWaveData {
  heart: {
    heart_rate?: number;
    heart_phase?: number;
    breath_rate?: number;
    breath_phase?: number;
  };
  human: {
    is_detected: boolean;
    targets: {
      x_point: number;
      y_point: number;
      move_speed?: number;
      cluster_index?: number;
    }[];
  };
}

interface VitalDataPoint {
  time: string;
  heartRate: number;
  breathRate: number;
}

// Add new interfaces for sensor management
interface SensorLocation {
  id: string;
  name: string;
  floor: string;
  building: string;
  coordinates: { x: number; y: number };
}

interface Sensor {
  id: string;
  name: string;
  type: 'heart-rate' | 'motion' | 'presence' | 'temperature' | 'multi';
  locationId: string;
  status: 'online' | 'offline' | 'warning';
  lastUpdated: string;
}

// Add interfaces for medical alarm standards
interface VitalSignThresholds {
  name: string;
  ranges: {
    critical: { min: number; max: number };
    warning: { min: number; max: number };
    normal: { min: number; max: number };
  };
  unit: string;
}

interface AlarmEvent {
  timestamp: Date;
  type: 'heart_rate' | 'breath_rate' | 'connection' | 'movement';
  severity: 'critical' | 'warning' | 'info';
  message: string;
  value?: number;
  acknowledged: boolean;
}

const SensorMonitoring: React.FC = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [sensorData, setSensorData] = useState<MmWaveData | null>(null);
  const [heartRateHistory, setHeartRateHistory] = useState<{ time: string; value: number }[]>([]);
  const [error, setError] = useState<string | null>(null);
  const clientRef = useRef<mqtt.MqttClient | null>(null);
  const [vitalSignsHistory, setVitalSignsHistory] = useState<VitalDataPoint[]>([]);
  const [timelineData, setTimelineData] = useState<{time: string; present: number}[]>([]);
  const [alarmHistory, setAlarmHistory] = useState<AlarmEvent[]>([]);
  const [alarmMuted, setAlarmMuted] = useState(false);
  const [alarmAcknowledged, setAlarmAcknowledged] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // State for sensor management
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<string>('all');
  const [selectedSensor, setSelectedSensor] = useState<string>('sensor-001');
  const [showLocationMap, setShowLocationMap] = useState(false);
  
  // Mock sensor locations data
  const sensorLocations: SensorLocation[] = [
    { id: 'loc-001', name: 'Living Room', floor: '1st Floor', building: 'Main Building', coordinates: { x: 120, y: 80 } },
    { id: 'loc-002', name: 'Bedroom', floor: '1st Floor', building: 'Main Building', coordinates: { x: 220, y: 80 } },
    { id: 'loc-003', name: 'Kitchen', floor: '1st Floor', building: 'Main Building', coordinates: { x: 80, y: 150 } },
    { id: 'loc-004', name: 'Bathroom', floor: '1st Floor', building: 'Main Building', coordinates: { x: 180, y: 150 } },
    { id: 'loc-005', name: 'Office', floor: '2nd Floor', building: 'Main Building', coordinates: { x: 120, y: 80 } },
    { id: 'loc-006', name: 'Conference Room', floor: '2nd Floor', building: 'Main Building', coordinates: { x: 220, y: 80 } },
    { id: 'loc-007', name: 'Lobby', floor: 'Ground Floor', building: 'Annex Building', coordinates: { x: 100, y: 100 } },
  ];
  
  // Mock sensors data
  const sensors: Sensor[] = [
    { id: 'sensor-001', name: 'Living Room Sensor', type: 'multi', locationId: 'loc-001', status: 'online', lastUpdated: '30 sec ago' },
    { id: 'sensor-002', name: 'Bedroom Sensor', type: 'heart-rate', locationId: 'loc-002', status: 'online', lastUpdated: '1 min ago' },
    { id: 'sensor-003', name: 'Kitchen Sensor', type: 'motion', locationId: 'loc-003', status: 'warning', lastUpdated: '5 min ago' },
    { id: 'sensor-004', name: 'Bathroom Sensor', type: 'presence', locationId: 'loc-004', status: 'offline', lastUpdated: '1 day ago' },
    { id: 'sensor-005', name: 'Office Sensor 1', type: 'multi', locationId: 'loc-005', status: 'online', lastUpdated: '2 min ago' },
    { id: 'sensor-006', name: 'Office Sensor 2', type: 'temperature', locationId: 'loc-005', status: 'online', lastUpdated: '3 min ago' },
    { id: 'sensor-007', name: 'Conference Sensor', type: 'presence', locationId: 'loc-006', status: 'online', lastUpdated: '2 min ago' },
    { id: 'sensor-008', name: 'Lobby Sensor', type: 'motion', locationId: 'loc-007', status: 'online', lastUpdated: '1 min ago' },
  ];
  
  // Filter sensors based on search and location
  const filteredSensors = sensors.filter(sensor => {
    const matchesSearch = sensor.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         sensor.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = selectedLocation === 'all' || sensor.locationId === selectedLocation;
    
    return matchesSearch && matchesLocation;
  });
  
  // Get the selected sensor
  const currentSensor = sensors.find(s => s.id === selectedSensor) || sensors[0];
  
  // Get the selected sensor's location
  const currentLocation = sensorLocations.find(loc => loc.id === currentSensor.locationId);
  
  // Medical standard thresholds based on global standards
  const vitalSignsThresholds: { [key: string]: VitalSignThresholds } = {
    heart_rate: {
      name: "Heart Rate",
      ranges: {
        critical: { min: 40, max: 150 },
        warning: { min: 50, max: 120 },
        normal: { min: 60, max: 100 },
      },
      unit: "BPM"
    },
    breath_rate: {
      name: "Respiratory Rate",
      ranges: {
        critical: { min: 5, max: 40 },
        warning: { min: 8, max: 30 },
        normal: { min: 12, max: 20 },
      },
      unit: "breaths/min"
    }
  };
  
  // Helper functions for vital sign classification
  const classifyVitalSign = (type: 'heart_rate' | 'breath_rate', value: number): 'critical' | 'warning' | 'normal' => {
    const thresholds = vitalSignsThresholds[type];
    
    if (value < thresholds.ranges.critical.min || value > thresholds.ranges.critical.max) {
      return 'critical';
    } else if (value < thresholds.ranges.warning.min || value > thresholds.ranges.warning.max) {
      return 'normal';
    } else {
      return 'normal';
    }
  };
  
  const getStatusColor = (status: 'critical' | 'warning' | 'normal') => {
    switch (status) {
      case 'critical':
        return {
          bg: "bg-red-50",
          text: "text-red-700",
          border: "border-red-200",
          fill: "#ef4444"
        };
      case 'warning':
        return {
          bg: "bg-yellow-50",
          text: "text-yellow-700",
          border: "border-yellow-200",
          fill: "#eab308"
        };
      case 'normal':
      default:
        return {
          bg: "bg-green-50",
          text: "text-green-700",
          border: "border-green-200",
          fill: "#22c55e"
        };
    }
  };
  
  // Function to add an alarm event
  const addAlarmEvent = (type: 'heart_rate' | 'breath_rate' | 'connection' | 'movement', 
                         severity: 'critical' | 'warning' | 'info',
                         message: string,
                         value?: number) => {
    const newAlarm: AlarmEvent = {
      timestamp: new Date(),
      type,
      severity,
      message,
      value,
      acknowledged: false
    };
    
    setAlarmHistory(prev => [newAlarm, ...prev.slice(0, 99)]); // Keep last 100 alarms
    
    // Play alarm sound for critical events if not muted
    if (severity === 'critical' && !alarmMuted && audioRef.current) {
      audioRef.current.play().catch(e => console.error("Failed to play alarm sound:", e));
    }
  };
  
  // Function to acknowledge all alarms
  const acknowledgeAllAlarms = () => {
    setAlarmHistory(prev => prev.map(alarm => ({ ...alarm, acknowledged: true })));
    setAlarmAcknowledged(true);
    
    // Stop alarm sound
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };
  
  useEffect(() => {
    // Connect to MQTT broker
    const connectMqtt = async () => {
      try {
        setError(null);
        
        // Initialize MQTT client
        const client = mqtt.connect('wss://mixcore.net:443/mqtt');
        clientRef.current = client;
        
        client.on('connect', () => {
          console.log('Connected to MQTT broker');
          setIsConnected(true);
          client.subscribe('iot/heart-rate', (err) => {
            if (err) {
              setError(`Failed to subscribe: ${err.message}`);
            }
          });
          
          // Initialize timeline data with past hour (simulated data)
          const initialTimelineData: {time: string; present: number}[] = [];
          const now = new Date();
          
          for (let i = 60; i >= 0; i--) {
            const timePoint = new Date(now.getTime() - (i * 60000));
            const hourMin = timePoint.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
            // Generate random presence data (0 or 1)
            initialTimelineData.push({
              time: hourMin,
              present: Math.random() > 0.3 ? 1 : 0
            });
          }
          setTimelineData(initialTimelineData);
        });
        
        client.on('message', (topic, message) => {
          try {
            const data = JSON.parse(message.toString()) as MmWaveData;
            setSensorData(data);
            
            // Process vital signs for alarms
            if (data.heart?.heart_rate) {
              const heartRate = data.heart.heart_rate;
              const heartStatus = classifyVitalSign('heart_rate', heartRate);
              
              // Generate alarm for abnormal heart rate
              if (heartStatus === 'critical') {
                addAlarmEvent(
                  'heart_rate', 
                  'critical',
                  `Critical heart rate detected: ${heartRate} BPM`, 
                  heartRate
                );
              } else if (heartStatus === 'warning') {
                addAlarmEvent(
                  'heart_rate', 
                  'warning',
                  `Abnormal heart rate detected: ${heartRate} BPM`, 
                  heartRate
                );
              }
            }
            
            if (data.heart?.breath_rate) {
              const breathRate = data.heart.breath_rate;
              const breathStatus = classifyVitalSign('breath_rate', breathRate);
              
              // Generate alarm for abnormal breath rate
              if (breathStatus === 'critical') {
                addAlarmEvent(
                  'breath_rate', 
                  'critical',
                  `Critical respiratory rate detected: ${breathRate} breaths/min`, 
                  breathRate
                );
              } else if (breathStatus === 'warning') {
                addAlarmEvent(
                  'breath_rate', 
                  'warning',
                  `Abnormal respiratory rate detected: ${breathRate} breaths/min`, 
                  breathRate
                );
              }
            }
            
            // Update heart rate history for chart
            if (data.heart?.heart_phase !== undefined) {
              const now = new Date().toLocaleTimeString();
              setHeartRateHistory(prev => {
                const newHistory = [...prev, { time: now, value: data.heart.heart_phase! }];
                // Keep only the last 20 data points
                return newHistory.slice(-20);
              });
              
              // Update vital signs correlation data
              if (data.heart?.heart_rate && data.heart?.breath_rate) {
                const timeStr = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second:'2-digit'});
                setVitalSignsHistory(prev => {
                  const newHistory = [...prev, { 
                    time: timeStr, 
                    heartRate: data.heart.heart_rate!, 
                    breathRate: data.heart.breath_rate! 
                  }];
                  // Keep only recent history
                  return newHistory.slice(-15);
                });
              }
              
              // Update presence timeline data
              const currentTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
              setTimelineData(prev => {
                const newData = [...prev, {
                  time: currentTime,
                  present: data.human?.is_detected ? 1 : 0
                }];
                return newData.slice(-60); // Keep last hour
              });
            }
          } catch (e) {
            console.error('Error parsing message:', e);
          }
        });
        
        client.on('error', (err) => {
          console.error('MQTT Error:', err);
          setError(`MQTT connection error: ${err.message}`);
          setIsConnected(false);
        });
        
        client.on('close', () => {
          console.log('MQTT connection closed');
          setIsConnected(false);
        });
        
        return () => {
          if (clientRef.current) {
            clientRef.current.end();
          }
        };
      } catch (error) {
        console.error('Failed to initialize MQTT:', error);
        setError(`Failed to initialize: ${error instanceof Error ? error.message : String(error)}`);
      }
    };
    
    connectMqtt();
    
    // Initialize audio element for alarm sounds
    audioRef.current = new Audio('/sounds/alarm.mp3');
    audioRef.current.loop = true;
    
    return () => {
      if (clientRef.current) {
        clientRef.current.end();
      }
      
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);
  
  // Reconnect to MQTT broker
  const handleReconnect = () => {
    if (clientRef.current) {
      clientRef.current.end();
    }
    
    const client = mqtt.connect('wss://mixcore.net:443/mqtt');
    clientRef.current = client;
    
    client.on('connect', () => {
      console.log('Reconnected to MQTT broker');
      setIsConnected(true);
      setError(null);
      client.subscribe('iot/heart-rate');
    });
    
    client.on('error', (err) => {
      setError(`Reconnection error: ${err.message}`);
    });
  };

  // Format human detection data for scatter chart
  const getHumanTargetData = () => {
    if (!sensorData?.human?.targets || sensorData.human.targets.length === 0) {
      return [];
    }
    
    return sensorData.human.targets.map((target, index) => ({
      x: target.x_point ?? 0,
      y: target.y_point ?? 0,
      z: target.move_speed ?? 0,
      id: index + 1
    }));
  };

  const humanTargetData = getHumanTargetData();
  
  // Generate simulated heart rate pulse data based on BPM
  const generatePulseData = (bpm: number) => {
    const dataPoints = 50;
    const data = [];
    
    // Generate a realistic pulse waveform
    for (let i = 0; i < dataPoints; i++) {
      const x = i / dataPoints;
      
      // Create a more realistic QRS complex waveform
      let value = 0;
      if (x < 0.1) {
        // P wave
        value = 20 * Math.sin(Math.PI * x / 0.1);
      } else if (x < 0.15) {
        // PR interval
        value = 10;
      } else if (x < 0.2) {
        // QRS complex
        value = 50 * Math.sin(Math.PI * (x - 0.15) / 0.05) + 40;
      } else if (x < 0.4) {
        // ST segment
        value = 10 - 20 * Math.sin(Math.PI * (x - 0.2) / 0.2);
      } else if (x < 0.7) {
        // T wave
        value = 30 * Math.sin(Math.PI * (x - 0.4) / 0.3);
      } else {
        // TP interval
        value = 5 * Math.sin(Math.PI * (x - 0.7) / 0.3);
      }
      
      // Scale based on heart rate
      const scaleFactor = 0.5 + (bpm / 140);
      
      data.push({
        id: i,
        value: value * scaleFactor
      });
    }
    
    return data;
  };

  // Generate breath rate waveform data
  const generateBreathWaveform = (breathRate: number) => {
    const dataPoints = 40;
    const data = [];
    
    // Create a smoother sine wave for breathing pattern
    for (let i = 0; i < dataPoints; i++) {
      const x = i / dataPoints;
      
      // Breathing is a simpler sine wave
      const value = 50 + 30 * Math.sin(2 * Math.PI * x);
      
      // Scale factor based on breath rate (breaths per minute)
      const scaleFactor = 0.7 + (breathRate / 30);
      
      data.push({
        id: i,
        value: value * scaleFactor
      });
    }
    
    return data;
  };

  // Get status of heart rate
  const heartRateStatus = sensorData?.heart?.heart_rate 
    ? classifyVitalSign('heart_rate', sensorData.heart.heart_rate)
    : 'normal';
    
  // Get status of breath rate
  const breathRateStatus = sensorData?.heart?.breath_rate
    ? classifyVitalSign('breath_rate', sensorData.heart.breath_rate)
    : 'normal';
  
  // Get colors for heart rate status
  const heartRateColors = getStatusColor(heartRateStatus);
  
  // Get colors for breath rate status
  const breathRateColors = getStatusColor(breathRateStatus);

  return (
    <div className="space-y-6">
      {/* Alarm audio element */}
      <audio ref={audioRef} src="/sounds/alarm.mp3" />
      
      {/* Active alarm banner */}
      {alarmHistory.length > 0 && alarmHistory.some(a => a.severity === 'critical' && !a.acknowledged) && (
        <div className="bg-red-50 border border-red-200 rounded-md p-3 flex items-center justify-between">
          <div className="flex items-center">
            <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
            <span className="font-medium text-red-800">
              Critical alarm active: {alarmHistory[0].message}
            </span>
          </div>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="border-red-300 text-red-700 hover:bg-red-100"
              onClick={acknowledgeAllAlarms}
            >
              Acknowledge
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              className="border-red-300 text-red-700 hover:bg-red-100"
              onClick={() => setAlarmMuted(!alarmMuted)}
            >
              {alarmMuted ? 'Unmute' : 'Mute'} Alarm
            </Button>
          </div>
        </div>
      )}
      
      {/* Sensor selection and filtering UI */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Sensor Monitoring</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={() => setShowLocationMap(!showLocationMap)}>
              <Map className="h-4 w-4 mr-2" />
              {showLocationMap ? 'Hide Map' : 'Show Map'}
            </Button>
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search input */}
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search sensors..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          {/* Location filter */}
          <Select value={selectedLocation} onValueChange={setSelectedLocation}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by location" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectLabel>Buildings</SelectLabel>
                {Array.from(new Set(sensorLocations.map(loc => loc.building))).map(building => (
                  <SelectItem key={building} value={`building-${building}`}>
                    {building}
                  </SelectItem>
                ))}
                <SelectLabel>Locations</SelectLabel>
                {sensorLocations.map(location => (
                  <SelectItem key={location.id} value={location.id}>
                    {location.name} ({location.floor})
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          
          {/* Sensor selector with smart suggestions */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" role="combobox" className="justify-between w-full">
                {currentSensor ? currentSensor.name : "Select sensor..."}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0" align="start">
              <Command>
                <CommandInput placeholder="Search sensor..." />
                <CommandEmpty>No sensor found.</CommandEmpty>
                <CommandGroup>
                  {filteredSensors.map((sensor) => (
                    <CommandItem
                      key={sensor.id}
                      value={sensor.id}
                      onSelect={() => {
                        setSelectedSensor(sensor.id);
                      }}
                    >
                      <Check
                        className={`mr-2 h-4 w-4 ${
                          sensor.id === selectedSensor ? "opacity-100" : "opacity-0"
                        }`}
                      />
                      <span className="flex-1">{sensor.name}</span>
                      <Badge 
                        variant="outline" 
                        className={
                          sensor.status === 'online' ? "bg-green-50 text-green-700 border-green-200" : 
                          sensor.status === 'warning' ? "bg-yellow-50 text-yellow-700 border-yellow-200" :
                          "bg-red-50 text-red-700 border-red-200"
                        }
                      >
                        {sensor.status}
                      </Badge>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
        
        {/* Visual sensor map */}
        {showLocationMap && (
          <Card className="p-4">
            <div className="mb-2 flex justify-between items-center">
              <h3 className="text-lg font-medium">Sensor Location Map</h3>
              <Select defaultValue="1st Floor">
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Select floor" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Ground Floor">Ground Floor</SelectItem>
                  <SelectItem value="1st Floor">1st Floor</SelectItem>
                  <SelectItem value="2nd Floor">2nd Floor</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="relative border rounded-md h-[300px] bg-slate-50">
              {/* Example simplified floor map with sensor positions */}
              <div className="absolute w-full h-full">
                {/* Room outlines - simplified for demo */}
                <div className="absolute border-2 border-gray-300 rounded-md left-20 top-10 w-40 h-30 bg-white/70">
                  <div className="text-xs text-center mt-1 text-gray-600">Living Room</div>
                </div>
                <div className="absolute border-2 border-gray-300 rounded-md left-70 top-10 w-40 h-30 bg-white/70">
                  <div className="text-xs text-center mt-1 text-gray-600">Bedroom</div>
                </div>
                <div className="absolute border-2 border-gray-300 rounded-md left-20 top-60 w-30 h-30 bg-white/70">
                  <div className="text-xs text-center mt-1 text-gray-600">Kitchen</div>
                </div>
                <div className="absolute border-2 border-gray-300 rounded-md left-60 top-60 w-30 h-30 bg-white/70">
                  <div className="text-xs text-center mt-1 text-gray-600">Bathroom</div>
                </div>
                
                {/* Sensor markers */}
                {sensors
                  .filter(s => {
                    const loc = sensorLocations.find(l => l.id === s.locationId);
                    return loc && loc.floor === "1st Floor";
                  })
                  .map(sensor => {
                    const location = sensorLocations.find(l => l.id === sensor.locationId);
                    if (!location) return null;
                    
                    return (
                      <div 
                        key={sensor.id}
                        className={`absolute w-6 h-6 rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 cursor-pointer ${
                          sensor.id === selectedSensor ? 'ring-2 ring-primary' : ''
                        } ${
                          sensor.status === 'online' ? 'bg-green-100 text-green-700' :
                          sensor.status === 'warning' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}
                        style={{
                          top: `${location.coordinates.y}px`,
                          left: `${location.coordinates.x}px`
                        }}
                        onClick={() => setSelectedSensor(sensor.id)}
                      >
                        {sensor.type === 'heart-rate' ? <HeartPulse className="h-3 w-3" /> :
                         sensor.type === 'motion' ? <Activity className="h-3 w-3" /> :
                         sensor.type === 'presence' ? <Users className="h-3 w-3" /> :
                         sensor.type === 'temperature' ? <Thermometer className="h-3 w-3" /> :
                         <Wifi className="h-3 w-3" />}
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="flex items-center gap-4 mt-2 text-sm">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span>Online</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <span>Warning</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <span>Offline</span>
              </div>
            </div>
          </Card>
        )}
        
        {/* Selected Sensor Context Information */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Badge 
              variant="outline" 
              className={
                currentSensor.status === 'online' ? "bg-green-50 text-green-700 border-green-200" : 
                currentSensor.status === 'warning' ? "bg-yellow-50 text-yellow-700 border-yellow-200" :
                "bg-red-50 text-red-700 border-red-200"
              }
            >
              {currentSensor.status === 'online' ? <Wifi className="h-3 w-3 mr-1" /> : <WifiOff className="h-3 w-3 mr-1" />}
              {currentSensor.status}
            </Badge>
            <span className="text-sm text-muted-foreground">
              Location: <span className="font-medium">{currentLocation?.name} ({currentLocation?.floor})</span>
            </span>
            <span className="text-sm text-muted-foreground">
              Last Updated: <span className="font-medium">{currentSensor.lastUpdated}</span>
            </span>
          </div>
          <Button variant="outline" size="sm" onClick={handleReconnect} disabled={isConnected}>
            <RefreshCw className="h-4 w-4 mr-2" />
            Reconnect
          </Button>
        </div>
      </div>
      
      {/* Main sensor data card with tabs */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle>{currentSensor.name}</CardTitle>
              <CardDescription>
                Real-time data from MR60BHA2 sensor
              </CardDescription>
            </div>
            <Badge 
              variant="outline" 
              className={isConnected 
                ? "bg-green-50 text-green-700 border-green-200" 
                : "bg-red-50 text-red-700 border-red-200"}
            >
              {isConnected ? <Wifi className="h-3 w-3 mr-1" /> : <WifiOff className="h-3 w-3 mr-1" />}
              {isConnected ? 'Connected' : 'Disconnected'}
            </Badge>
          </div>
        </CardHeader>
        
        {error && (
          <div className="mx-6 mb-4 p-3 rounded-md bg-red-50 border border-red-200 text-red-700 flex items-center gap-2">
            <AlertCircle className="h-4 w-4" />
            <span className="text-sm">{error}</span>
          </div>
        )}
        
        <CardContent>
          <Tabs defaultValue="heart-rate">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="heart-rate">
                <HeartPulse className="h-4 w-4 mr-2" />
                Heart Rate
              </TabsTrigger>
              <TabsTrigger value="human-detection">
                <Users className="h-4 w-4 mr-2" />
                Human Detection
              </TabsTrigger>
              <TabsTrigger value="advanced-metrics">
                <Activity className="h-4 w-4 mr-2" />
                Advanced Metrics
              </TabsTrigger>
              <TabsTrigger value="alarm-history">
                <AlertCircle className="h-4 w-4 mr-2" />
                Alarm History
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="heart-rate" className="space-y-4 pt-4">
              {/* Heart rate status card */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <Card>
                  <CardHeader className="py-2 px-4">
                    <CardTitle className="text-sm">Heart Rate</CardTitle>
                  </CardHeader>
                  <CardContent className="py-2 px-4">
                    <div className="text-2xl font-bold flex items-center">
                      <HeartPulse className={`h-5 w-5 mr-2 ${heartRateColors.text}`} />
                      {sensorData?.heart?.heart_rate || '--'} BPM
                    </div>
                    <div className="mt-2 text-xs">
                      <div className="flex justify-between">
                        <span>Critical: &lt;{vitalSignsThresholds.heart_rate.ranges.critical.min} or &gt;{vitalSignsThresholds.heart_rate.ranges.critical.max}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Warning: &lt;{vitalSignsThresholds.heart_rate.ranges.warning.min} or &gt;{vitalSignsThresholds.heart_rate.ranges.warning.max}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Normal: {vitalSignsThresholds.heart_rate.ranges.normal.min}-{vitalSignsThresholds.heart_rate.ranges.normal.max}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="py-2 px-4">
                    <CardTitle className="text-sm">Breath Rate</CardTitle>
                  </CardHeader>
                  <CardContent className="py-2 px-4">
                    <div className="text-2xl font-bold flex items-center">
                      <Activity className={`h-5 w-5 mr-2 ${breathRateColors.text}`} />
                      {sensorData?.heart?.breath_rate || '--'} breaths/min
                    </div>
                    <div className="mt-2 text-xs">
                      <div className="flex justify-between">
                        <span>Critical: &lt;{vitalSignsThresholds.breath_rate.ranges.critical.min} or &gt;{vitalSignsThresholds.breath_rate.ranges.critical.max}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Warning: &lt;{vitalSignsThresholds.breath_rate.ranges.warning.min} or &gt;{vitalSignsThresholds.breath_rate.ranges.warning.max}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Normal: {vitalSignsThresholds.breath_rate.ranges.normal.min}-{vitalSignsThresholds.breath_rate.ranges.normal.max}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="py-2 px-4">
                    <CardTitle className="text-sm">Status</CardTitle>
                  </CardHeader>
                  <CardContent className="py-2 px-4">
                    <Badge 
                      variant="outline" 
                      className={`${
                        heartRateStatus === 'critical' || breathRateStatus === 'critical' 
                          ? "bg-red-50 text-red-700 border-red-200" 
                          : heartRateStatus === 'warning' || breathRateStatus === 'warning'
                          ? "bg-yellow-50 text-yellow-700 border-yellow-200"
                          : "bg-green-50 text-green-700 border-green-200"
                      }`}
                    >
                      {heartRateStatus === 'critical' || breathRateStatus === 'critical' 
                        ? 'Critical Condition' 
                        : heartRateStatus === 'warning' || breathRateStatus === 'warning'
                        ? 'Requires Attention'
                        : 'Normal'}
                    </Badge>
                    <div className="mt-3">
                      <div className="text-xs text-muted-foreground">
                        Based on clinical vital sign standards:
                      </div>
                      <div className="mt-1 grid grid-cols-2 gap-2">
                        <div className={`text-xs rounded px-2 py-1 ${heartRateColors.bg} ${heartRateColors.text}`}>
                          Heart Rate: {heartRateStatus}
                        </div>
                        <div className={`text-xs rounded px-2 py-1 ${breathRateColors.bg} ${breathRateColors.text}`}>
                          Breath Rate: {breathRateStatus}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Heart rate pulse visualization */}
              <div className="border rounded-lg p-4 mb-4">
                <h3 className="text-sm font-medium mb-4">Heart Rate Pulse Visualization</h3>
                <div className="h-32">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={generatePulseData(sensorData?.heart?.heart_rate || 70)}
                      margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                    >
                      <defs>
                        <linearGradient id="heartRateGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor={heartRateColors.fill} stopOpacity={0.8} />
                          <stop offset="95%" stopColor={heartRateColors.fill} stopOpacity={0.2} />
                        </linearGradient>
                      </defs>
                      <Area 
                        type="monotone"
                        dataKey="value"
                        stroke={heartRateColors.fill}
                        strokeWidth={2}
                        fill="url(#heartRateGradient)"
                        isAnimationActive={true}
                      />
                      {/* Add reference lines for threshold values */}
                      <ReferenceLine 
                        y={vitalSignsThresholds.heart_rate.ranges.critical.min} 
                        stroke="red" 
                        strokeDasharray="3 3" 
                      />
                      <ReferenceLine 
                        y={vitalSignsThresholds.heart_rate.ranges.critical.max} 
                        stroke="red" 
                        strokeDasharray="3 3" 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <div className="text-sm text-muted-foreground">Current BPM: {sensorData?.heart?.heart_rate || '--'}</div>
                  <div className="text-sm">
                    <span className="font-medium mr-2">Status:</span>
                    <Badge 
                      variant="outline" 
                      className={`${heartRateColors.bg} ${heartRateColors.text} ${heartRateColors.border}`}
                    >
                      {heartRateStatus === 'normal' ? 'Normal' : 
                       heartRateStatus === 'warning' ? 'Abnormal' : 'Critical'}
                    </Badge>
                  </div>
                </div>
              </div>
              
              {/* Heart rate history chart */}
              <div className="border rounded-lg p-4">
                <h3 className="text-sm font-medium mb-4">Heart Rate History</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={heartRateHistory}
                      margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="time" />
                      <YAxis label={{ value: 'Heart Phase', angle: -90, position: 'insideLeft' }} />
                      <Tooltip />
                      <Line 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#ff6384" 
                        strokeWidth={2} 
                        dot={{ r: 3 }}
                        activeDot={{ r: 5 }}
                        isAnimationActive={true}
                        name="Heart Rate"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="text-sm text-muted-foreground">
                <p>The MR60BHA2 sensor uses 60GHz mmWave technology to detect heart rate without contact.</p>
                <p>Detection range: Up to 1.5 meters for heartbeat monitoring.</p>
              </div>
            </TabsContent>
            
            <TabsContent value="human-detection" className="space-y-4 pt-4">
              {/* Human detection status */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-sm font-medium">Human Detection Status</h3>
                  <p className="text-sm text-muted-foreground">
                    {sensorData?.human?.targets.length || 0} human{(sensorData?.human?.targets.length || 0) !== 1 ? 's' : ''} detected
                  </p>
                </div>
                <Badge 
                  variant="outline" 
                  className={sensorData?.human?.is_detected 
                    ? "bg-green-50 text-green-700 border-green-200" 
                    : "bg-yellow-50 text-yellow-700 border-yellow-200"}
                >
                  {sensorData?.human?.is_detected ? 'Active' : 'Inactive'}
                </Badge>
              </div>
              
              {/* Human detection chart */}
              <div className="border rounded-lg p-4">
                <h3 className="text-sm font-medium mb-4">Human Detection Map</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <ScatterChart
                      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                    >
                      <CartesianGrid />
                      <XAxis 
                        type="number" 
                        dataKey="x" 
                        name="X Position" 
                        unit="m"
                        domain={[-3, 3]} 
                        label={{ value: 'X Position (m)', position: 'bottom' }}
                      />
                      <YAxis 
                        type="number" 
                        dataKey="y" 
                        name="Y Position" 
                        unit="m"
                        domain={[-3, 3]} 
                        label={{ value: 'Y Position (m)', angle: -90, position: 'insideLeft' }}
                      />
                      <Tooltip 
                        cursor={{ strokeDasharray: '3 3' }}
                        formatter={(value: any, name: string) => {
                          if (name === 'z') return [`${Number(value).toFixed(2)} m/s`, 'Speed'];
                          return [`${Number(value).toFixed(2)} m`, name];
                        }}
                      />
                      <ReferenceLine y={0} stroke="#666" />
                      <ReferenceLine x={0} stroke="#666" />
                      <Scatter 
                        name="Human Targets" 
                        data={humanTargetData} 
                        fill="#36a2eb" 
                      />
                    </ScatterChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              {/* Targets data */}
              <Card>
                <CardHeader className="py-2">
                  <CardTitle className="text-sm">Detected Targets Data</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="border-t">
                    <table className="w-full">
                      <thead>
                        <tr>
                          <th className="text-left text-xs font-medium text-muted-foreground p-2">Target ID</th>
                          <th className="text-left text-xs font-medium text-muted-foreground p-2">X Position</th>
                          <th className="text-left text-xs font-medium text-muted-foreground p-2">Y Position</th>
                          <th className="text-right text-xs font-medium text-muted-foreground p-2">Movement Speed</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sensorData?.human?.targets && sensorData.human.targets.length > 0 ? (
                          sensorData.human.targets.map((target, i) => (
                            <tr key={i} className="border-t hover:bg-muted/50">
                              <td className="p-2 text-xs">Target {i + 1}</td>
                              <td className="p-2 text-xs">{target.x_point?.toFixed(2) || '0.00'} m</td>
                              <td className="p-2 text-xs">{target.y_point?.toFixed(2) || '0.00'} m</td>
                              <td className="p-2 text-xs text-right">{target.move_speed?.toFixed(2) || '0.00'} m/s</td>
                            </tr>
                          ))
                        ) : (
                          <tr className="border-t">
                            <td colSpan={4} className="p-2 text-xs text-center text-muted-foreground">
                              No targets detected
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
              
              <div className="text-sm text-muted-foreground">
                <p>The MR60BHA2 can detect human presence up to 6 meters away and track multiple targets simultaneously.</p>
              </div>
            </TabsContent>
            
            <TabsContent value="advanced-metrics" className="space-y-4 pt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <Card>
                  <CardHeader className="py-2 px-4">
                    <CardTitle className="text-sm">Vital Signs Correlation</CardTitle>
                  </CardHeader>
                  <CardContent className="p-2">
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <ComposedChart
                          data={vitalSignsHistory}
                          margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="time" />
                          <YAxis yAxisId="heart" orientation="left" domain={[40, 180]} label={{ value: 'Heart Rate (BPM)', angle: -90, position: 'insideLeft' }} />
                          <YAxis yAxisId="breath" orientation="right" domain={[5, 30]} label={{ value: 'Breath Rate (BPM)', angle: -90, position: 'insideRight' }} />
                          <Tooltip />
                          <Legend />
                          <Line yAxisId="heart" type="monotone" dataKey="heartRate" stroke="#ff6384" activeDot={{ r: 8 }} name="Heart Rate" />
                          <Line yAxisId="breath" type="monotone" dataKey="breathRate" stroke="#36a2eb" activeDot={{ r: 8 }} name="Breath Rate" />
                        </ComposedChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="py-2 px-4">
                    <CardTitle className="text-sm">Breath Rate Visualization</CardTitle>
                  </CardHeader>
                  <CardContent className="p-2">
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                          data={generateBreathWaveform(sensorData?.heart?.breath_rate || 15)}
                          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                        >
                          <defs>
                            <linearGradient id="breathRateGradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#36a2eb" stopOpacity={0.8} />
                              <stop offset="95%" stopColor="#36a2eb" stopOpacity={0.2} />
                            </linearGradient>
                          </defs>
                          <Area 
                            type="natural"
                            dataKey="value"
                            stroke="#36a2eb"
                            strokeWidth={2}
                            fill="url(#breathRateGradient)"
                            isAnimationActive={true}
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="text-center mt-2">
                      <div className="text-sm font-medium">Current Rate: {sensorData?.heart?.breath_rate || '--'} breaths/min</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardHeader className="py-2 px-4">
                  <CardTitle className="text-sm">Presence Detection Timeline (Last Hour)</CardTitle>
                </CardHeader>
                <CardContent className="p-2">
                  <div className="h-32">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart 
                        data={timelineData} 
                        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                        barCategoryGap={0}
                      >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis 
                          dataKey="time" 
                          interval={Math.floor(timelineData.length / 10)} 
                          angle={-45} 
                          textAnchor="end"
                          height={50}
                          scale="band"
                        />
                        <YAxis domain={[0, 1]} hide />
                        <Tooltip
                          formatter={(value) => [value === 1 ? 'Present' : 'Absent', 'Status']}
                          labelFormatter={(label) => `Time: ${label}`}
                        />
                        <Bar 
                          dataKey="present" 
                          fill="#4ade80" 
                          radius={[0, 0, 0, 0]}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-400 rounded-sm"></div>
                      <span className="text-sm text-muted-foreground">Present</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-gray-200 rounded-sm"></div>
                      <span className="text-sm text-muted-foreground">Absent</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Occupancy Rate: </span>
                      {Math.round((timelineData.filter(d => d.present === 1).length / timelineData.length) * 100)}%
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="text-sm text-muted-foreground">
                <p>The advanced metrics showcase correlations between different vital signs and patterns of presence detection over time.</p>
                <p>These visualizations can help identify trends and anomalies in the sensor data for more comprehensive analysis.</p>
              </div>
            </TabsContent>
            
            {/* New Alarm History tab */}
            <TabsContent value="alarm-history" className="space-y-4 pt-4">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-sm font-medium">Alarm History</h3>
                  <p className="text-xs text-muted-foreground">
                    Recent alerts and notifications ({alarmHistory.length})
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={acknowledgeAllAlarms}
                    disabled={alarmHistory.every(a => a.acknowledged)}
                  >
                    Acknowledge All
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setAlarmMuted(!alarmMuted)}
                  >
                    {alarmMuted ? 'Unmute Alarms' : 'Mute Alarms'}
                  </Button>
                </div>
              </div>
              
              <Card>
                <CardContent className="p-0">
                  <div className="border-t">
                    <table className="w-full">
                      <thead>
                        <tr>
                          <th className="text-left text-xs font-medium text-muted-foreground p-2">Time</th>
                          <th className="text-left text-xs font-medium text-muted-foreground p-2">Severity</th>
                          <th className="text-left text-xs font-medium text-muted-foreground p-2">Type</th>
                          <th className="text-left text-xs font-medium text-muted-foreground p-2">Message</th>
                          <th className="text-right text-xs font-medium text-muted-foreground p-2">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {alarmHistory.length > 0 ? (
                          alarmHistory.slice(0, 15).map((alarm, i) => (
                            <tr key={i} className="border-t hover:bg-muted/50">
                              <td className="p-2 text-xs">
                                {alarm.timestamp.toLocaleTimeString()}
                              </td>
                              <td className="p-2 text-xs">
                                <Badge 
                                  className={
                                    alarm.severity === 'critical' ? "bg-red-100 text-red-800 hover:bg-red-100" :
                                    alarm.severity === 'warning' ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100" :
                                    "bg-blue-100 text-blue-800 hover:bg-blue-100"
                                  }
                                  variant="secondary"
                                >
                                  {alarm.severity}
                                </Badge>
                              </td>
                              <td className="p-2 text-xs">
                                {alarm.type === 'heart_rate' ? 'Heart Rate' :
                                 alarm.type === 'breath_rate' ? 'Breath Rate' :
                                 alarm.type === 'connection' ? 'Connection' : 'Movement'}
                              </td>
                              <td className="p-2 text-xs">
                                {alarm.message}
                              </td>
                              <td className="p-2 text-xs text-right">
                                <Badge 
                                  variant="outline"
                                  className={alarm.acknowledged ? "bg-gray-50 text-gray-500" : "bg-blue-50 text-blue-700"}
                                >
                                  {alarm.acknowledged ? 'Acknowledged' : 'New'}
                                </Badge>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr className="border-t">
                            <td colSpan={5} className="p-2 text-xs text-center text-muted-foreground">
                              No alarms recorded
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
              
              <div className="p-4 border rounded-md">
                <h4 className="text-sm font-medium mb-2">Medical Standard Vital Signs Reference</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="text-xs font-medium mb-1">Heart Rate (Adult)</h5>
                    <ul className="text-xs space-y-1">
                      <li><span className="inline-block w-3 h-3 rounded-full bg-red-500 mr-2"></span> Critical: &lt;40 or &gt;150 BPM</li>
                      <li><span className="inline-block w-3 h-3 rounded-full bg-yellow-500 mr-2"></span> Warning: 40-50 or 120-150 BPM</li>
                      <li><span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2"></span> Normal: 60-100 BPM</li>
                      <li><span className="inline-block w-3 h-3 rounded-full bg-blue-500 mr-2"></span> Athletic: 40-60 BPM</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-xs font-medium mb-1">Respiratory Rate (Adult)</h5>
                    <ul className="text-xs space-y-1">
                      <li><span className="inline-block w-3 h-3 rounded-full bg-red-500 mr-2"></span> Critical: &lt;5 or &gt;40 breaths/min</li>
                      <li><span className="inline-block w-3 h-3 rounded-full bg-yellow-500 mr-2"></span> Warning: 5-8 or 30-40 breaths/min</li>
                      <li><span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2"></span> Normal: 12-20 breaths/min</li>
                      <li><span className="inline-block w-3 h-3 rounded-full bg-blue-500 mr-2"></span> At Rest: 8-12 breaths/min</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-3 text-xs text-muted-foreground">
                  Based on WHO and AHA clinical standards. Thresholds may vary based on age, health condition, and activity level.
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default SensorMonitoring; 