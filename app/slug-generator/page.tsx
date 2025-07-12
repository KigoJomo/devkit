import Tabs, { Tab } from '@/lib/components/ui/Tabs';
import SlugGen from './components/SlugGen';
import BackToTools from '@/lib/components/navigation/BackToTools';
import {
  slugifyJavascript,
  slugifyPython,
  slugifyTypescript,
} from '@/lib/utils/slugGen';
import MarkdownRenderer from '@/lib/components/ui/MarkdownRenderer';
import { Metadata } from 'next';
import { ArrowDown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Slug Generator | Random Tools',
  description:
    'Generate slugs from your text or get the slugify code in different programming languages.',
  openGraph: {
    title: 'Slug Generator',
    description:
      'Generate slugs from your text or get the slugify code in different programming languages.',
    type: 'website',
    url: 'https://tools.aqutte.co.ke/slug-generator',
    siteName: 'Random Tools',
    images: [{ url: 'https://tools.aqutte.co.ke/images/og.webp' }],
  },
};

export default function SlugGeneratorPage() {
  const implemenations: Tab[] = [
    {
      title: 'TypeScript',
      content: <MarkdownRenderer markDowncontent={slugifyTypescript} />,
    },
    {
      title: 'JavaScript',
      content: <MarkdownRenderer markDowncontent={slugifyJavascript} />,
    },
    {
      title: 'Python',
      content: <MarkdownRenderer markDowncontent={slugifyPython} />,
    },
  ];

  const codeCaption =
    '_Code implementation of the slugify function in different programming languages._';

  return (
    <section className="flex flex-col items-center justify-center gap-8">
      <BackToTools />

      <div className="w-full flex flex-col items-center gap-4">
        <h1>Slug Generator</h1>
        <p className="px-4 py-1 bg-background-dark rounded-lg border border-foreground-light/40 flex items-center gap-1">
          <span className='text-xs'>Demo</span> <ArrowDown size={12} className="" />
        </p>
        <SlugGen />
      </div>

      <div className="w-full flex items-center gap-2">
        <div className="w-full h-[1px] bg-foreground-light/30" />
        <span className="text-foreground-light text-nowrap">
          get the slugify code
        </span>
        <div className="w-full h-[1px] bg-foreground-light/30" />
      </div>

      <Tabs tabs={implemenations} />

      <MarkdownRenderer markDowncontent={codeCaption} className="mr-auto" />
    </section>
  );
}
