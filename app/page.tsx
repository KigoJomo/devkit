'use client';

import { useState, useMemo } from 'react';
import Input from '@/lib/components/ui/Input';
import { tools, searchTools } from '@/lib/config/tools';
import ToolCard from '@/lib/components/ui/ToolCard';
import Button from '@/lib/components/ui/Button';
import Card from '@/lib/components/ui/Card';
import { Github, Plus } from 'lucide-react';

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
        <h1 className="text-4xl font-bold">DevKit</h1>
        <p className="text-foreground-light">
          Essential utilities for developers with ready-to-use code examples
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

        {/* Contribute CTA */}
        <div className="contribute-cta">
          <Card className="text-center border-dashed border-2 border-foreground-light/30 bg-gradient-to-br from-background to-background-light hover:border-foreground-light/50">
            <div className="flex flex-col items-center gap-4 py-4">
              <div className="flex items-center gap-2 text-foreground-light">
                <Plus className="w-5 h-5" />
                <span className="text-lg font-medium">
                  Have an idea for a tool?
                </span>
              </div>
              <p className="text-foreground-light/80 max-w-md">
                Contribute your ideas or help build new developer utilities. All
                contributions are welcome!
              </p>
              <Button
                href="https://github.com/KigoJomo/devkit"
                target="_blank"
                variant="outline"
                className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                Contribute on GitHub
              </Button>
            </div>
          </Card>
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
