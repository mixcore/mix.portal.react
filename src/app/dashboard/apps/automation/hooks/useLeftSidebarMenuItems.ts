'use client';

import { useEffect, useState } from 'react';

// Define the menu item interface
export interface SidebarMenuItem {
  id: string;
  label: string;
  icon?: string;
  href?: string;
  onClick?: () => void;
  children?: SidebarMenuItem[];
}

/**
 * Custom hook for managing level 3 menu items in the master left sidebar
 * 
 * This hook allows mini-apps to register their own menu items in the dashboard's 
 * left sidebar at level 3 (sub-sub menu items).
 */
export const useLeftSidebarMenuItems = () => {
  const [menuItems, setMenuItems] = useState<SidebarMenuItem[]>([]);

  // Set menu items for the current app/module
  const setLeftSidebarMenuItems = (items: SidebarMenuItem[]) => {
    try {
      // Dispatch event to notify dashboard of menu items change
      const event = new CustomEvent('mixcore:sidebar:setLv3MenuItems', { 
        detail: { menuItems: items } 
      });
      window.dispatchEvent(event);
      
      // Store items locally for reference
      setMenuItems(items);
      
      // Store in sessionStorage for persistence
      sessionStorage.setItem('mixcore_sidebar_lv3_menu_items', JSON.stringify(items));
    } catch (error) {
      console.error('Error setting left sidebar menu items:', error);
    }
  };

  // Update a specific menu item (useful for dynamic updates)
  const updateMenuItem = (itemId: string, updatedItem: Partial<SidebarMenuItem>) => {
    const updatedMenuItems = menuItems.map(item => 
      item.id === itemId ? { ...item, ...updatedItem } : item
    );
    setLeftSidebarMenuItems(updatedMenuItems);
  };

  // Clean up when component is unmounted
  useEffect(() => {
    // Try to load menu items from sessionStorage on mount
    try {
      const storedMenuItems = sessionStorage.getItem('mixcore_sidebar_lv3_menu_items');
      if (storedMenuItems) {
        const items = JSON.parse(storedMenuItems);
        // Update local state
        setMenuItems(items);
        // Dispatch event to restore menu items
        const event = new CustomEvent('mixcore:sidebar:setLv3MenuItems', { 
          detail: { menuItems: items } 
        });
        window.dispatchEvent(event);
      }
    } catch (error) {
      console.error('Error loading stored menu items:', error);
    }

    return () => {
      // Reset menu items when component unmounts
      try {
        const event = new CustomEvent('mixcore:sidebar:resetLv3MenuItems');
        window.dispatchEvent(event);
        sessionStorage.removeItem('mixcore_sidebar_lv3_menu_items');
      } catch (error) {
        console.error('Error resetting menu items:', error);
      }
    };
  }, []);

  return {
    menuItems,
    setLeftSidebarMenuItems,
    updateMenuItem
  };
};

export default useLeftSidebarMenuItems; 