'use client';

import { useEffect, useState } from 'react';

// Define the search configuration interface
export interface SearchConfig {
  placeholderText?: string;
  searchScope?: 'all' | 'current' | 'custom';
  customScope?: string;
  filters?: {
    id: string;
    label: string;
    active: boolean;
  }[];
  onSearch?: (query: string, filters: string[]) => void;
  disabled?: boolean;
}

/**
 * Custom hook for managing the search CTA button in the master shell
 * 
 * This hook allows mini-apps to customize the search functionality
 * for the current context in the dashboard.
 */
export const useSearchButton = () => {
  const [searchConfig, setSearchConfig] = useState<SearchConfig | null>(null);
  const [isSearchEnabled, setIsSearchEnabled] = useState<boolean>(true);

  // Set the search configuration for the current screen/app
  const setAppSearchConfig = (config: SearchConfig | null) => {
    try {
      // Dispatch event to notify dashboard of search config change
      const event = new CustomEvent('mixcore:search:setConfig', { 
        detail: { searchConfig: config } 
      });
      window.dispatchEvent(event);
      
      // Store config locally for reference
      setSearchConfig(config);
      
      // Store in sessionStorage for persistence
      if (config) {
        sessionStorage.setItem('mixcore_search_config', JSON.stringify(config));
      } else {
        sessionStorage.removeItem('mixcore_search_config');
      }
    } catch (error) {
      console.error('Error setting search configuration:', error);
    }
  };

  // Enable or disable the search button
  const setSearchEnabled = (enabled: boolean) => {
    try {
      // Dispatch event to notify dashboard of search button state change
      const event = new CustomEvent('mixcore:search:setEnabled', { 
        detail: { enabled } 
      });
      window.dispatchEvent(event);
      
      // Store state locally for reference
      setIsSearchEnabled(enabled);
      
      // Store in sessionStorage for persistence
      sessionStorage.setItem('mixcore_search_enabled', JSON.stringify(enabled));
    } catch (error) {
      console.error('Error setting search button state:', error);
    }
  };

  // Focus the search input programmatically
  const focusSearch = () => {
    try {
      if (isSearchEnabled) {
        const event = new CustomEvent('mixcore:search:focus');
        window.dispatchEvent(event);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error focusing search input:', error);
      return false;
    }
  };

  // Listen for search events from the dashboard
  useEffect(() => {
    const handleSearchQuery = (event: CustomEvent) => {
      const { query, filters } = event.detail;
      if (searchConfig && searchConfig.onSearch) {
        searchConfig.onSearch(query, filters);
      }
    };

    // Cast Event to CustomEvent for TypeScript
    const handleSearch = (event: Event) => 
      handleSearchQuery(event as unknown as CustomEvent);

    window.addEventListener(
      'mixcore:search:query', 
      handleSearch
    );

    // Clean up when component unmounts
    return () => {
      window.removeEventListener(
        'mixcore:search:query', 
        handleSearch
      );
      
      // Reset search config when component unmounts
      try {
        const event = new CustomEvent('mixcore:search:reset');
        window.dispatchEvent(event);
        sessionStorage.removeItem('mixcore_search_config');
        sessionStorage.removeItem('mixcore_search_enabled');
      } catch (error) {
        console.error('Error resetting search configuration:', error);
      }
    };
  }, [searchConfig]);

  // Load stored configuration on mount
  useEffect(() => {
    try {
      const storedConfig = sessionStorage.getItem('mixcore_search_config');
      const storedEnabled = sessionStorage.getItem('mixcore_search_enabled');
      
      if (storedConfig) {
        const config = JSON.parse(storedConfig);
        // Update local state
        setSearchConfig(config);
        // Dispatch event to restore search config
        const event = new CustomEvent('mixcore:search:setConfig', { 
          detail: { searchConfig: config } 
        });
        window.dispatchEvent(event);
      }
      
      if (storedEnabled) {
        const enabled = JSON.parse(storedEnabled);
        // Update local state
        setIsSearchEnabled(enabled);
        // Dispatch event to restore search button state
        const event = new CustomEvent('mixcore:search:setEnabled', { 
          detail: { enabled } 
        });
        window.dispatchEvent(event);
      }
    } catch (error) {
      console.error('Error loading stored search configuration:', error);
    }
  }, []);

  return {
    searchConfig,
    isSearchEnabled,
    setAppSearchConfig,
    setSearchEnabled,
    focusSearch
  };
};

export default useSearchButton; 