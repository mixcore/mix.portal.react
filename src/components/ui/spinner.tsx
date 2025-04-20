import React from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface SpinnerProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Spinner({ className, size = 'md' }: SpinnerProps) {
  const sizeClass = 
    size === 'sm' ? 'h-4 w-4' : 
    size === 'lg' ? 'h-8 w-8' : 
    'h-6 w-6';
  
  return (
    <Loader2 className={cn('animate-spin', sizeClass, className)} />
  );
} 