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
  Settings
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
  AreaChart
} from 'recharts';

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

const SensorMonitoring: React.FC = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [sensorData, setSensorData] = useState<MmWaveData | null>(null);
  const [heartRateHistory, setHeartRateHistory] = useState<{ time: string; value: number }[]>([]);
  const [error, setError] = useState<string | null>(null);
  const clientRef = useRef<mqtt.MqttClient | null>(null);
  
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
        });
        
        client.on('message', (topic, message) => {
          try {
            const data = JSON.parse(message.toString()) as MmWaveData;
            setSensorData(data);
            
            // Update heart rate history for chart
            if (data.heart?.heart_phase !== undefined) {
              const now = new Date().toLocaleTimeString();
              setHeartRateHistory(prev => {
                const newHistory = [...prev, { time: now, value: data.heart.heart_phase! }];
                // Keep only the last 20 data points
                return newHistory.slice(-20);
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

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle>mmWave Sensor Monitoring</CardTitle>
              <CardDescription>
                Real-time heart rate and human detection data from MR60BHA2 sensor
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
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="heart-rate">
                <HeartPulse className="h-4 w-4 mr-2" />
                Heart Rate Monitoring
              </TabsTrigger>
              <TabsTrigger value="human-detection">
                <Users className="h-4 w-4 mr-2" />
                Human Detection
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
                      <HeartPulse className="h-5 w-5 mr-2 text-red-500" />
                      {sensorData?.heart?.heart_rate || '--'} BPM
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="py-2 px-4">
                    <CardTitle className="text-sm">Breath Rate</CardTitle>
                  </CardHeader>
                  <CardContent className="py-2 px-4">
                    <div className="text-2xl font-bold">
                      {sensorData?.heart?.breath_rate || '--'} BPM
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
                      className={sensorData?.human?.is_detected 
                        ? "bg-green-50 text-green-700 border-green-200" 
                        : "bg-yellow-50 text-yellow-700 border-yellow-200"}
                    >
                      {sensorData?.human?.is_detected ? 'Human Detected' : 'No Detection'}
                    </Badge>
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
                          <stop offset="5%" stopColor="#ff6384" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="#ff6384" stopOpacity={0.2} />
                        </linearGradient>
                      </defs>
                      <Area 
                        type="monotone"
                        dataKey="value"
                        stroke="#ff6384"
                        strokeWidth={2}
                        fill="url(#heartRateGradient)"
                        isAnimationActive={true}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <div className="text-sm text-muted-foreground">Current BPM: {sensorData?.heart?.heart_rate || '--'}</div>
                  <div className="text-sm">
                    <span className="font-medium mr-2">Status:</span>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      Normal
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
          </Tabs>
        </CardContent>
        
        <CardFooter className="border-t flex justify-between pt-4">
          <Button variant="outline" size="sm" onClick={handleReconnect} disabled={isConnected}>
            <RefreshCw className="h-4 w-4 mr-2" />
            Reconnect
          </Button>
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Sensor Settings
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SensorMonitoring; 