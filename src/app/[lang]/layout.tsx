import { supportedLanguages } from '@/utils/language-utils';
import { Metadata } from 'next';

export async function generateStaticParams() {
  return supportedLanguages.map((lang) => ({
    lang,
  }));
}

export const metadata: Metadata = {
  title: 'Mixcore Portal',
  description: 'Modern content management system with Next.js and Shadcn UI'
};

export default function LanguageLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return children;
} 