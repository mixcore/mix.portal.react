import { Metadata } from 'next';
import { MixDBClientWrapper } from './components/MixDBClientWrapper';

export const metadata: Metadata = {
  title: 'MixDB - Modern Database Management',
  description: 'A powerful database management interface for Mixcore',
};

export default function MixDBPage() {
  return <MixDBClientWrapper />;
} 