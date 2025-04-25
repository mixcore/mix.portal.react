'use client';

import { useState, useEffect } from 'react';

/**
 * Hook to detect if the container is wide enough for a fluid layout
 * Returns true if the container is wide and should use fluid layout
 * Returns false if the container is narrow and should use contained layout
 */
const useContainerStatus = (): boolean => {
  // Default to true for server-side rendering
  const [isFluidContainer, setIsFluidContainer] = useState(true);

  useEffect(() => {
    // Function to check container width
    const checkContainerWidth = () => {
      // Get the container element (usually main content area)
      const container = document.querySelector('main') as HTMLElement;
      
      if (container) {
        // If container is wider than 1024px, use fluid layout
        setIsFluidContainer(container.offsetWidth >= 1024);
      }
    };

    // Initial check
    checkContainerWidth();

    // Check on resize
    window.addEventListener('resize', checkContainerWidth);

    // Cleanup
    return () => {
      window.removeEventListener('resize', checkContainerWidth);
    };
  }, []);

  return isFluidContainer;
};

export default useContainerStatus; 