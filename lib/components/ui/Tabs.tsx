'use client';

import { FC, ReactNode, useEffect, useState } from 'react';
import MarkdownRenderer from '@/lib/components/ui/MarkdownRenderer';

export interface Tab {
  title: string | ReactNode;
  content: string;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<Tab>(tabs[0]);

  useEffect(() => {
    setActiveTab(tabs[0]);
  }, [tabs]);

  return (
    <div className="w-full p-4 rounded-xl bg-background-dark flex flex-col gap-2">
      {/* titles */}
      <div className="px-0.5 flex gap-0 border-b border-foreground-light/20">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`py-1 px-3 rounded-t-md ${
              activeTab === tab ? 'bg-accent/20 border border-b-0 border-foreground-light/20' : ''
            }`}
            onClick={() => setActiveTab(tab)}>
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
        <MarkdownRenderer
          markDowncontent={activeTab.content}
          className=""
        />
      </div>
    </div>
  );
};

export default Tabs;
