import { ArrowDown } from 'lucide-react';
import { Metadata } from 'next';
import BackToTools from '@/lib/components/navigation/BackToTools';
import MarkdownRenderer from '@/lib/components/ui/MarkdownRenderer';
import Tabs, { Tab } from '@/lib/components/ui/Tabs';
import UuidGenerator from './components/UuidGenerator';
import {
  uuidGeneratorJavascript,
  uuidGeneratorPython,
  uuidGeneratorTypescript,
} from '@/lib/utils/uuidGen';

export const metadata: Metadata = {
  title: 'UUID Generator | DevKit',
  description:
    'Generate RFC 4122 v4 UUIDs with the built-in crypto API and grab copy-ready code examples.',
  openGraph: {
    title: 'UUID Generator | DevKit',
    description:
      'Generate RFC 4122 v4 UUIDs with the built-in crypto API and grab copy-ready code examples.',
    type: 'website',
    url: 'https://tools.aqutte.co.ke/uuid-generator',
    siteName: 'DevKit',
    images: [{ url: 'https://tools.aqutte.co.ke/images/og.webp' }],
  },
};

export default function UuidGeneratorPage() {
  const implementations: Tab[] = [
    {
      title: 'TypeScript',
      content: <MarkdownRenderer markDowncontent={uuidGeneratorTypescript} />,
    },
    {
      title: 'JavaScript',
      content: <MarkdownRenderer markDowncontent={uuidGeneratorJavascript} />,
    },
    {
      title: 'Python',
      content: <MarkdownRenderer markDowncontent={uuidGeneratorPython} />,
    },
  ];

  const codeCaption =
    '_Code implementation for generating RFC 4122 v4 UUIDs with built-in platform APIs._';

  return (
    <section className="flex flex-col items-center justify-center gap-8">
      <BackToTools />

      <div className="w-full flex flex-col items-center gap-4">
        <h1>UUID Generator</h1>
        <p className="px-4 py-1 bg-background-dark rounded-lg border border-foreground-light/40 flex items-center gap-1">
          <span className="text-xs">Demo</span>
          <ArrowDown size={12} />
        </p>
        <UuidGenerator />
      </div>

      <div className="w-full flex items-center gap-2">
        <div className="w-full h-[1px] bg-foreground-light/30" />
        <span className="text-foreground-light text-nowrap">
          get the uuid code
        </span>
        <div className="w-full h-[1px] bg-foreground-light/30" />
      </div>

      <Tabs tabs={implementations} />

      <MarkdownRenderer markDowncontent={codeCaption} className="mr-auto" />
    </section>
  );
}
