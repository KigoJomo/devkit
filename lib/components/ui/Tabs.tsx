'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FC, ReactNode, useEffect, useState } from 'react';

export interface Tab {
  title: string | ReactNode;
  content: string | ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  className?: string;
}

const Tabs: FC<TabsProps> = ({ tabs, className = '' }) => {
  const [activeTab, setActiveTab] = useState<Tab | null>(null);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const tabFromUrl = searchParams.get('tab');

    const tabToSet = tabs.find((tab) => tab.title === tabFromUrl);

    if (tabFromUrl && tabToSet) {
      setActiveTab(tabToSet);
    } else {
      setActiveTab(tabs[0]);
    }
  }, [tabs, searchParams]);

  return (
    <div
      className={`w-full p-4 rounded-xl bg-background-dark flex flex-col gap-2 ${className}`}>
      {/* titles */}
      <div className="px-0.5 flex gap-0 border-b border-foreground-light/20">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`py-1 px-3 rounded-t-md ${
              activeTab === tab
                ? 'bg-accent/20 border border-b-0 border-foreground-light/20'
                : ''
            }`}
            onClick={() => {
              router.push(`${pathname}?tab=${tab.title}`);
              setActiveTab(tab);
            }}>
            {typeof tab.title === 'string' ? (
              <p className="!text-xs">{tab.title}</p>
            ) : (
              <>{tab.title}</>
            )}
          </button>
        ))}
      </div>

      {/* content */}
      <div className="w-full">
        {typeof activeTab?.content === 'string' ? (
          <pre className="whitespace-pre-wrap break-words text-sm">
            {activeTab.content}
          </pre>
        ) : (
          activeTab?.content
        )}
      </div>
    </div>
  );
};

export default Tabs;
