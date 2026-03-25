'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FC, ReactNode } from 'react';

export interface Tab {
  title: string | ReactNode;
  content: string | ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  className?: string;
}

const Tabs: FC<TabsProps> = ({ tabs, className = '' }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const getTabParam = (tab: Tab, index: number) =>
    typeof tab.title === 'string' ? tab.title : String(index);

  const tabFromUrl = searchParams.get('tab');
  const matchedTabIndex = tabs.findIndex(
    (tab, index) => getTabParam(tab, index) === tabFromUrl
  );
  const activeTabIndex = matchedTabIndex >= 0 ? matchedTabIndex : 0;
  const activeTab = tabs[activeTabIndex];
  const activeTabParam = getTabParam(activeTab, activeTabIndex);

  const handleTabChange = (tab: Tab, index: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('tab', getTabParam(tab, index));
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div
      className={`w-full p-4 rounded-xl bg-background-dark flex flex-col gap-2 ${className}`}>
      {/* titles */}
      <div className="px-0.5 flex gap-0 border-b border-foreground-light/20">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`py-1 px-3 rounded-t-md ${
              getTabParam(tab, index) === activeTabParam
                ? 'bg-accent/20 border border-b-0 border-foreground-light/20'
                : ''
            }`}
            onClick={() => handleTabChange(tab, index)}>
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
