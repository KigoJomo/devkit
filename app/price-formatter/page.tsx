import BackToTools from '@/lib/components/navigation/BackToTools';
import MarkdownRenderer from '@/lib/components/ui/MarkdownRenderer';
import Tabs, { Tab } from '@/lib/components/ui/Tabs';
import { tools } from '@/lib/config/tools';
import {
  priceFormatterTypescript,
  priceFormatterJavascript,
  priceFormatterJava,
  priceFormatterPython,
} from '@/lib/utils/priceFormat';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Price Formatter | Random Tools',
  description:
    'Format prices in different currencies - get the price formatter code in different programming languages.',
  openGraph: {
    title: 'Price Formatter',
    description:
      'Format prices in different currencies - get the price formatter code in different programming languages.',
    type: 'website',
    url: 'https://randomtools.vercel.app/price-formatter',
    siteName: 'Random Tools',
    images: [{ url: 'https://randomtools.vercel.app/images/og.webp' }],
  },
};

const PriceFormatPage = () => {
  const implementations: Tab[] = [
    {
      title: 'Typescript',
      content: <MarkdownRenderer markDowncontent={priceFormatterTypescript} />,
    },
    {
      title: 'JavaScript',
      content: <MarkdownRenderer markDowncontent={priceFormatterJavascript} />,
    },
    {
      title: 'Java',
      content: <MarkdownRenderer markDowncontent={priceFormatterJava} />,
    },
    {
      title: 'Python',
      content: <MarkdownRenderer markDowncontent={priceFormatterPython} />,
    },
  ];

  const tool = tools.find((tool) => tool.id === 'format-price');

  return (
    <section className="flex flex-col items-center gap-8">
      <BackToTools />

      <div className="flex flex-col items-center gap-2">
        <h1>Price Formatter</h1>
        {tool && (
          <div className="flex items-center gap-2">
            <span className="text-xs font-light text-foreground-light">
              Tags:
            </span>
            <div className="flex items-center gap-1">
              {tool.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-light text-foreground-light px-2 py-0.5 bg-background-dark rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="w-full flex items-center gap-2">
        <div className="w-full h-[1px] bg-foreground-light/30" />
        <span className="text-foreground-light text-nowrap">
          get the price formatter code
        </span>
        <div className="w-full h-[1px] bg-foreground-light/30" />
      </div>

      {/* tabs */}
      <Tabs tabs={implementations} />
    </section>
  );
};

export default PriceFormatPage;
