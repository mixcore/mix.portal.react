'use client';

import { useEffect, useState } from 'react';

// Define the CTA button interface
export interface CtaButton {
  id: string;
  label: string;
  icon?: string;
  variant?: 'default' | 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  disabled?: boolean;
  hidden?: boolean;
  onClick: () => void;
}

/**
 * Custom hook for managing key CTA buttons in the master shell
 * 
 * This hook allows mini-apps to register action buttons in the dashboard's
 * header area, providing contextual actions for the current screen.
 */
export const useCtaButton = () => {
  const [ctaButton, setCtaButton] = useState<CtaButton | null>(null);

  // Set the CTA button for the current app/screen
  const setAppCtaButton = (button: CtaButton | null) => {
    try {
      // Dispatch event to notify dashboard of CTA button change
      const event = new CustomEvent('mixcore:shell:setCtaButton', { 
        detail: { ctaButton: button } 
      });
      window.dispatchEvent(event);
      
      // Store button locally for reference
      setCtaButton(button);
      
      // Store in sessionStorage for persistence
      if (button) {
        sessionStorage.setItem('mixcore_shell_cta_button', JSON.stringify(button));
      } else {
        sessionStorage.removeItem('mixcore_shell_cta_button');
      }
    } catch (error) {
      console.error('Error setting CTA button:', error);
    }
  };

  // Update properties of the current CTA button
  const updateCtaButton = (updatedProps: Partial<CtaButton>) => {
    if (ctaButton) {
      const updatedButton = { ...ctaButton, ...updatedProps };
      setAppCtaButton(updatedButton);
    }
  };

  // Clean up when component unmounts
  useEffect(() => {
    // Try to load CTA button from sessionStorage on mount
    try {
      const storedButton = sessionStorage.getItem('mixcore_shell_cta_button');
      if (storedButton) {
        const button = JSON.parse(storedButton);
        // Update local state
        setCtaButton(button);
        // Dispatch event to restore CTA button
        const event = new CustomEvent('mixcore:shell:setCtaButton', { 
          detail: { ctaButton: button } 
        });
        window.dispatchEvent(event);
      }
    } catch (error) {
      console.error('Error loading stored CTA button:', error);
    }

    return () => {
      // Reset CTA button when component unmounts
      try {
        const event = new CustomEvent('mixcore:shell:resetCtaButton');
        window.dispatchEvent(event);
        sessionStorage.removeItem('mixcore_shell_cta_button');
      } catch (error) {
        console.error('Error resetting CTA button:', error);
      }
    };
  }, []);

  return {
    ctaButton,
    setAppCtaButton,
    updateCtaButton
  };
};

export default useCtaButton; 