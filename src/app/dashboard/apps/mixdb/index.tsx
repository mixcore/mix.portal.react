'use client';

import React from 'react';

export interface MixDBAppProps {
  // Define app-specific props
}

export function MixDBApp(props: MixDBAppProps) {
  return (
    <div className="mixdb-app-container p-4">
      <h2 className="text-xl mb-4">MixDB Dashboard</h2>
      <p>Welcome to the MixDB Application</p>
      
      {/* Placeholder content */}
      <div className="mt-6 p-4 bg-blue-50 text-blue-800 rounded-md">
        <p>MixDB app is under development</p>
      </div>
    </div>
  );
}

// Default export for dynamic import
export default MixDBApp; 