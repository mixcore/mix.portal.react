'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { extractLanguageFromPath } from '@/utils/language-utils';

export default function LanguageDashboardPage({
  params
}: {
  params: { lang: string }
}) {
  const router = useRouter();
  const lang = params.lang;

  useEffect(() => {
    router.push(`/${lang}/dashboard/overview`);
  }, [router, lang]);

  return (
    <div className="flex items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-2">Loading Dashboard...</h1>
        <p className="text-muted-foreground">Please wait while we redirect you to the dashboard overview.</p>
      </div>
    </div>
  );
} 