import { Metadata } from 'next';
import { TenantsClientWrapper } from './components/TenantsClientWrapper';

export const metadata: Metadata = {
  title: 'Tenants - Mixcore Multi-tenant Management',
  description: 'A powerful multi-tenant management interface for Mixcore',
};

export default function TenantsPage() {
  return <TenantsClientWrapper />;
} 