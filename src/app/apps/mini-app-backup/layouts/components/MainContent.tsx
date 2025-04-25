import React from 'react';
import { ViewType } from './types';

interface MainContentProps { 
  children: React.ReactNode;
  isFluidLayout: boolean;
  appHeight: number;
  viewType: ViewType;
}

export const MainContent: React.FC<MainContentProps> = ({ 
  children, 
  isFluidLayout, 
  appHeight,
  viewType
}) => {
  // Determine if view should have padding (canvas and workflow editors need full space)
  const isFullWidthView = ['canvas', 'workflow'].includes(viewType);
  
  // Apply different classes based on view type
  const getContentClasses = () => {
    // Base styling first
    let classes = "main-content flex-1 border-l overflow-y-auto h-[calc(100vh-7.5rem)]";
    
    // Add special classes for editor views that need full width
    if (isFullWidthView) {
      classes += " editor-view";
    }
    
    return classes;
  };
  
  return (
    <div className={getContentClasses()}>
      <div className={isFullWidthView ? "p-0 h-full" : "p-4 md:p-6"}>
        {children}
      </div>
    </div>
  );
};

export default MainContent;