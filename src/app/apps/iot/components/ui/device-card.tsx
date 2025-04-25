'use client';

import React from 'react';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';
import { Device, DeviceType } from '../../types/devices';

interface DeviceCardProps {
  device: Device;
  icon: React.ReactNode;
  onStatusChange?: (id: string, newStatus: 'on' | 'off') => void;
  onClick?: (device: Device) => void;
}

const DeviceCard: React.FC<DeviceCardProps> = ({
  device,
  icon,
  onStatusChange,
  onClick,
}) => {
  const { id, name, type, status, value } = device;
  const isOn = status === 'on';

  const handleToggle = (checked: boolean) => {
    if (onStatusChange) {
      onStatusChange(id, checked ? 'on' : 'off');
    }
  };

  const handleClick = () => {
    if (onClick) {
      onClick(device);
    }
  };

  return (
    <div 
      className="flex items-center justify-between p-4 rounded-lg border hover:border-blue-200 cursor-pointer"
      onClick={handleClick}
    >
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
        onClick={(e) => e.stopPropagation()} // Prevent card click when toggling
      />
    </div>
  );
};

export default DeviceCard; 