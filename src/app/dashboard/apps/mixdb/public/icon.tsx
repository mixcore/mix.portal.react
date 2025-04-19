import React from 'react';

interface MixDBIconProps {
  className?: string;
  size?: number;
}

export function MixDBIcon({ className = '', size = 24 }: MixDBIconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
      <path 
        d="M7 8H17M7 12H17M7 16H13" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
      />
      <circle cx="17" cy="16" r="2" fill="currentColor" />
    </svg>
  );
}

export default MixDBIcon; 