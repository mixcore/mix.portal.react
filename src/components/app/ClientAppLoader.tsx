'use client';

import React from 'react';
import AppLoader, { AppLoaderProps } from './AppLoader';

export default function ClientAppLoader(props: AppLoaderProps) {
  return <AppLoader {...props} />;
} 