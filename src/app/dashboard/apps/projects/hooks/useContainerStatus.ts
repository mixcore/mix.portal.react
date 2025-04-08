'use client';

import { useState, useEffect } from 'react';

/**
 * Custom hook to check if the dashboard container is in fluid or container mode
 * @returns boolean - true if in fluid mode (no container class), false if in container mode
 */
export function useContainerStatus() {
  const [isFluidLayout, setIsFluidLayout] = useState(false);

  useEffect(() => {
    // Check initial status
    checkContainerStatus();
    
    // Set up observer to watch for class changes
    const dashboardContent = document.querySelector('.dashboard-content');
    if (dashboardContent) {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === 'class') {
            checkContainerStatus();
          }
        });
      });
      
      observer.observe(dashboardContent, { attributes: true });
      
      return () => {
        observer.disconnect();
      };
    }
  }, []);
  
  // Function to check container status
  const checkContainerStatus = () => {
    const dashboardContent = document.querySelector('.dashboard-content');
    setIsFluidLayout(dashboardContent ? !dashboardContent.classList.contains('container') : false);
  };

  return isFluidLayout;
}

export default useContainerStatus; 