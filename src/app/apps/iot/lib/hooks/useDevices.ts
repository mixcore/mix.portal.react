'use client';

import { useState, useEffect, useCallback } from 'react';
import { Device } from '../../types/devices';
import apiClient from '../api';
import { useDevices as useDevicesContext } from '../../context/DeviceContext';

export function useDevicesList() {
  const { devices, setSelectedDevice } = useDevicesContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchDevices = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      // In a real app, this would fetch from the API
      // const fetchedDevices = await apiClient.getDevices();
      // Currently using mock data from the context
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch devices');
      setLoading(false);
      console.error(err);
    }
  }, []);

  useEffect(() => {
    fetchDevices();
  }, [fetchDevices]);

  const selectDevice = useCallback((device: Device) => {
    setSelectedDevice(device);
  }, [setSelectedDevice]);

  return {
    devices,
    loading,
    error,
    fetchDevices,
    selectDevice
  };
}

export function useDeviceDetails(deviceId: string | null) {
  const { devices, selectedDevice, setSelectedDevice } = useDevicesContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [device, setDevice] = useState<Device | null>(null);

  useEffect(() => {
    if (!deviceId) {
      setDevice(null);
      return;
    }

    // First, check if we already have the device in our context
    const deviceFromContext = devices.find(d => d.id === deviceId) || null;
    
    if (deviceFromContext) {
      setDevice(deviceFromContext);
      setSelectedDevice(deviceFromContext);
      return;
    }

    // If not found in context, fetch from API
    const fetchDevice = async () => {
      setLoading(true);
      setError(null);
      try {
        const fetchedDevice = await apiClient.getDevice(deviceId);
        setDevice(fetchedDevice);
        if (fetchedDevice) {
          setSelectedDevice(fetchedDevice);
        }
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch device details');
        setLoading(false);
        console.error(err);
      }
    };

    fetchDevice();
  }, [deviceId, devices, setSelectedDevice]);

  return {
    device: device || selectedDevice,
    loading,
    error
  };
} 