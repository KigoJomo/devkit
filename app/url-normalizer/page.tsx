import BackToTools from '@/lib/components/navigation/BackToTools';
import { ArrowDown } from 'lucide-react';
import Normalizer from './components/Normalizer';
import Tabs, { Tab } from '@/lib/components/ui/Tabs';
import MarkdownRenderer from '@/lib/components/ui/MarkdownRenderer';
import {
  normalizeUrlTypescript,
  normalizeUrlJavascript,
  normalizeUrlJava,
  normalizeUrlPython,
  normalizeUrlPhp,
} from '@/lib/utils/urlNormalize';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'URL Normalizer | DevKit',
  description:
    'Standardize URLs with protocol and www prefix normalization - includes implementation code in multiple languages.',
  openGraph: {
    title: 'URL Normalizer | DevKit',
    description:
      'Standardize URLs with protocol and www prefix normalization - includes implementation code in multiple languages.',
    type: 'website',
    url: 'https://tools.aqutte.co.ke/url-normalizer',
    siteName: 'DevKit',
    images: [{ url: 'https://tools.aqutte.co.ke/images/og.webp' }],
  },
};

const UrlNormalizePage = () => {
  const implementations: Tab[] = [
    {
      title: 'Typescript',
      content: <MarkdownRenderer markDowncontent={normalizeUrlTypescript} />,
    },
    {
      title: 'Javascript',
      content: <MarkdownRenderer markDowncontent={normalizeUrlJavascript} />,
    },
    {
      title: 'Python',
      content: <MarkdownRenderer markDowncontent={normalizeUrlPython} />,
    },
    {
      title: 'Java',
      content: <MarkdownRenderer markDowncontent={normalizeUrlJava} />,
    },
    {
      title: 'PHP',
      content: <MarkdownRenderer markDowncontent={normalizeUrlPhp} />,
    },
  ];

  return (
    <section className="flex flex-col items-center gap-8">
      <BackToTools />

      <div className="w-full flex flex-col items-center gap-4">
        <h1>URL Normalizer</h1>

        <p className="px-4 py-1 bg-background-dark rounded-lg border border-foreground-light/40 flex items-center gap-1">
          <span className="text-xs">Demo</span>
          <ArrowDown size={12} className="" />
        </p>

        <Normalizer />
      </div>

      <div className="w-full flex items-center gap-2">
        <div className="w-full h-[1px] bg-foreground-light/30" />
        <span className="text-foreground-light text-nowrap">
          get the normalizer code
        </span>
        <div className="w-full h-[1px] bg-foreground-light/30" />
      </div>

      <Tabs tabs={implementations} />
    </section>
  );
};

export default UrlNormalizePage;
