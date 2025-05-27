import Tabs, { Tab } from '@/lib/components/ui/Tabs';
import SlugGen from './components/SlugGen';
import BackToTools from '@/lib/components/navigation/BackToTools';
import {
  slugifyJavascript,
  slugifyPython,
  slugifyTypescript,
} from '@/lib/utils/slugGen';
import MarkdownRenderer from '@/lib/components/ui/MarkdownRenderer';

export default function SlugGeneratorPage() {
  const implemenations: Tab[] = [
    {
      title: 'TypeScript',
      content: slugifyTypescript,
    },
    {
      title: 'JavaScript',
      content: slugifyJavascript,
    },
    {
      title: 'Python',
      content: slugifyPython,
    },
  ];

  const codeCaption = "_Code implementation of the slugify function in different programming languages._";

  return (
    <section className="flex flex-col items-center justify-center gap-6">
      <BackToTools />

      <h1>Slug Generator</h1>

      <p className="text-foreground-light">Generate slugs from your text</p>

      <SlugGen />

      <div className="w-full flex items-center gap-2">
        <div className="w-full h-[1px] bg-foreground-light/30" />
        <span className="text-foreground-light text-nowrap">
          or get the slugify code
        </span>
        <div className="w-full h-[1px] bg-foreground-light/30" />
      </div>

      {/* code implementation for slugify function in different languages */}

      <Tabs tabs={implemenations} />

      <MarkdownRenderer markDowncontent={codeCaption} className='mr-auto' />
    </section>
  );
}
