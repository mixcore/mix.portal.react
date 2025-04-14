import DashboardLayout from '@/app/dashboard/layout';

// This layout wraps all dashboard routes with language prefix
export default function LanguageDashboardLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  // Simply reuse the original dashboard layout 
  return <DashboardLayout>{children}</DashboardLayout>;
} 