'use client';

import { useState, useMemo } from 'react';
import Input from '@/lib/components/ui/Input';
import { tools, searchTools } from '@/lib/config/tools';
import ToolCard from '@/lib/components/ui/ToolCard';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTools = useMemo(() => {
    return searchTools(searchQuery);
  }, [searchQuery]);

  const handleSearchChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearchQuery(e.target.value);
  };

  return (
    <section className="flex flex-col items-center justify-center gap-8 min-h-screen">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Random Tools 😝</h1>
        <p className="text-foreground-light">
          A collection of useful utilities and tools
        </p>
      </div>

      <div className="w-full max-w-4xl mx-auto flex flex-col gap-6">
        <div className="search">
          <Input
            placeholder="Search tools..."
            name="search"
            label=""
            value={searchQuery}
            onChange={handleSearchChange}
            className="mb-0"
          />
        </div>

        <div className="tools-list">
          {filteredTools.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-foreground-light">
                {searchQuery
                  ? 'No tools found matching your search.'
                  : 'No tools available.'}
              </p>
            </div>
          )}
        </div>

        {searchQuery && (
          <div className="text-center">
            <p className="text-sm text-foreground-light">
              Showing {filteredTools.length} of {tools.length} tools
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
