'use client';

import { useEffect, useState } from 'react';

// Define the notification interface
export interface Notification {
  id: string;
  title: string;
  message: string;
  type?: 'info' | 'success' | 'warning' | 'error';
  timestamp: Date;
  read?: boolean;
  link?: string;
  icon?: string;
  appId?: string;
}

/**
 * Custom hook for managing notifications in the master shell
 * 
 * This hook allows mini-apps to add, update, and remove notifications
 * in the dashboard's notification system.
 */
export const useNotifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  // Add a new notification
  const addNotification = (notification: Omit<Notification, 'id' | 'timestamp'>) => {
    try {
      const newNotification: Notification = {
        ...notification,
        id: `notification-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        timestamp: new Date(),
        read: false
      };
      
      // Dispatch event to notify dashboard of new notification
      const event = new CustomEvent('mixcore:notifications:add', { 
        detail: { notification: newNotification } 
      });
      window.dispatchEvent(event);
      
      // Update local state
      setNotifications(prev => [newNotification, ...prev]);
      
      return newNotification.id;
    } catch (error) {
      console.error('Error adding notification:', error);
      return null;
    }
  };

  // Mark a notification as read
  const markAsRead = (notificationId: string) => {
    try {
      // Dispatch event to notify dashboard
      const event = new CustomEvent('mixcore:notifications:markAsRead', { 
        detail: { notificationId } 
      });
      window.dispatchEvent(event);
      
      // Update local state
      setNotifications(prev => 
        prev.map(notification => 
          notification.id === notificationId 
            ? { ...notification, read: true } 
            : notification
        )
      );
    } catch (error) {
      console.error('Error marking notification as read:', error);
    }
  };

  // Remove a notification
  const removeNotification = (notificationId: string) => {
    try {
      // Dispatch event to notify dashboard
      const event = new CustomEvent('mixcore:notifications:remove', { 
        detail: { notificationId } 
      });
      window.dispatchEvent(event);
      
      // Update local state
      setNotifications(prev => 
        prev.filter(notification => notification.id !== notificationId)
      );
    } catch (error) {
      console.error('Error removing notification:', error);
    }
  };

  // Listen for notification changes from the dashboard
  useEffect(() => {
    const handleNotificationsUpdate = (event: CustomEvent) => {
      const { notifications: updatedNotifications } = event.detail;
      setNotifications(updatedNotifications);
    };

    // Cast Event to CustomEvent for TypeScript
    const handleUpdate = (event: Event) => 
      handleNotificationsUpdate(event as unknown as CustomEvent);

    window.addEventListener(
      'mixcore:notifications:update', 
      handleUpdate
    );

    return () => {
      window.removeEventListener(
        'mixcore:notifications:update', 
        handleUpdate
      );
    };
  }, []);

  return {
    notifications,
    addNotification,
    markAsRead,
    removeNotification
  };
};

export default useNotifications; 