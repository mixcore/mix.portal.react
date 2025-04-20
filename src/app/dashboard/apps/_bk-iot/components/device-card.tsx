'use client';

import React from 'react';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';

interface DeviceCardProps {
  name: string;
  type: 'light' | 'climate' | 'media' | 'sensor' | 'security';
  status: 'on' | 'off';
  value: string;
  icon: React.ReactNode;
}

const DeviceCard: React.FC<DeviceCardProps> = ({
  name,
  type,
  status,
  value,
  icon,
}) => {
  const [isOn, setIsOn] = React.useState(status === 'on');

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className={cn(
          "flex items-center justify-center w-10 h-10 rounded-full",
          isOn ? "bg-blue-50 text-blue-600" : "bg-gray-100 text-gray-400"
        )}>
          {icon}
        </div>
        <div>
          <p className="font-medium">{name}</p>
          <p className={cn(
            "text-sm",
            isOn ? "text-blue-600" : "text-muted-foreground"
          )}>
            {isOn ? value || 'On' : 'Off'}
          </p>
        </div>
      </div>
      <Switch
        checked={isOn}
        onCheckedChange={handleToggle}
      />
    </div>
  );
};

export default DeviceCard; 