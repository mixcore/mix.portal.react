import React from 'react';

interface MainContentProps { 
  children: React.ReactNode;
  isFluidLayout: boolean;
  appHeight: number;
}

export const MainContent: React.FC<MainContentProps> = ({ 
  children, 
  isFluidLayout, 
  appHeight 
}) => (
  <div className="flex-1 border-l overflow-y-auto h-[calc(100vh-7.5rem)]">
    <div className="p-4 md:p-6">
      {children}
    </div>
  </div>
);

export default MainContent; 