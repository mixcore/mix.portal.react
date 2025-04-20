'use client';

import { useEffect, useState } from 'react';

// Define the help content interface
export interface HelpContent {
  title: string;
  content: string;
  links?: {
    label: string;
    url: string;
  }[];
  videos?: {
    label: string;
    url: string;
    thumbnail?: string;
  }[];
}

/**
 * Custom hook for managing the help CTA button in the master shell
 * 
 * This hook allows mini-apps to register contextual help content
 * for the current screen in the dashboard's help system.
 */
export const useHelpButton = () => {
  const [helpContent, setHelpContent] = useState<HelpContent | null>(null);
  const [isHelpEnabled, setIsHelpEnabled] = useState<boolean>(true);

  // Set the help content for the current screen
  const setScreenHelpContent = (content: HelpContent | null) => {
    try {
      // Dispatch event to notify dashboard of help content change
      const event = new CustomEvent('mixcore:help:setContent', { 
        detail: { helpContent: content } 
      });
      window.dispatchEvent(event);
      
      // Store content locally for reference
      setHelpContent(content);
      
      // Store in sessionStorage for persistence
      if (content) {
        sessionStorage.setItem('mixcore_help_content', JSON.stringify(content));
      } else {
        sessionStorage.removeItem('mixcore_help_content');
      }
    } catch (error) {
      console.error('Error setting help content:', error);
    }
  };

  // Enable or disable the help button
  const setHelpButtonEnabled = (enabled: boolean) => {
    try {
      // Dispatch event to notify dashboard of help button state change
      const event = new CustomEvent('mixcore:help:setEnabled', { 
        detail: { enabled } 
      });
      window.dispatchEvent(event);
      
      // Store state locally for reference
      setIsHelpEnabled(enabled);
      
      // Store in sessionStorage for persistence
      sessionStorage.setItem('mixcore_help_enabled', JSON.stringify(enabled));
    } catch (error) {
      console.error('Error setting help button state:', error);
    }
  };

  // Show help dialog programmatically
  const showHelpDialog = () => {
    try {
      if (helpContent && isHelpEnabled) {
        const event = new CustomEvent('mixcore:help:show');
        window.dispatchEvent(event);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error showing help dialog:', error);
      return false;
    }
  };

  // Clean up when component unmounts
  useEffect(() => {
    // Try to load help content from sessionStorage on mount
    try {
      const storedContent = sessionStorage.getItem('mixcore_help_content');
      const storedEnabled = sessionStorage.getItem('mixcore_help_enabled');
      
      if (storedContent) {
        const content = JSON.parse(storedContent);
        // Update local state
        setHelpContent(content);
        // Dispatch event to restore help content
        const event = new CustomEvent('mixcore:help:setContent', { 
          detail: { helpContent: content } 
        });
        window.dispatchEvent(event);
      }
      
      if (storedEnabled) {
        const enabled = JSON.parse(storedEnabled);
        // Update local state
        setIsHelpEnabled(enabled);
        // Dispatch event to restore help button state
        const event = new CustomEvent('mixcore:help:setEnabled', { 
          detail: { enabled } 
        });
        window.dispatchEvent(event);
      }
    } catch (error) {
      console.error('Error loading stored help content:', error);
    }

    return () => {
      // Reset help content when component unmounts
      try {
        const event = new CustomEvent('mixcore:help:reset');
        window.dispatchEvent(event);
        sessionStorage.removeItem('mixcore_help_content');
        sessionStorage.removeItem('mixcore_help_enabled');
      } catch (error) {
        console.error('Error resetting help content:', error);
      }
    };
  }, []);

  return {
    helpContent,
    isHelpEnabled,
    setScreenHelpContent,
    setHelpButtonEnabled,
    showHelpDialog
  };
};

export default useHelpButton; 