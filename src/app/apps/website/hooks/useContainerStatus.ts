'use client';

import { useState, useEffect } from 'react';

/**
 * Hook to detect whether the app is running in a fluid container layout
 * 
 * @returns {boolean} True if app is running in a fluid container
 */
export default function useContainerStatus(): boolean {
  const [isFluidLayout, setIsFluidLayout] = useState(false);
  
  useEffect(() => {
    // Function to detect container status
    const detectContainerStatus = () => {
      // Check if the app container has a fluid layout class or attribute
      const container = document.querySelector('main.flex-1');
      const isFluid = container?.getAttribute('data-fluid-layout') === 'true' ||
                      container?.classList.contains('fluid-layout');
      
      setIsFluidLayout(!!isFluid);
    };
    
    // Call once on mount
    detectContainerStatus();
    
    // Set up event listener for container changes
    window.addEventListener('resize', detectContainerStatus);
    
    // Listen for custom events that might trigger layout changes
    window.addEventListener('mixcore:layout:change', detectContainerStatus);
    
    return () => {
      window.removeEventListener('resize', detectContainerStatus);
      window.removeEventListener('mixcore:layout:change', detectContainerStatus);
    };
  }, []);
  
  return isFluidLayout;
} 