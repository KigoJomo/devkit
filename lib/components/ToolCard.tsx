import React from 'react';
import Card from '@/lib/components/ui/Card';
import { Tool } from '@/lib/config/tools';

interface ToolCardProps {
  tool: Tool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  return (
    <Card href={tool.href} className="cursor-pointer">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-foreground">{tool.name}</h3>
          <span className="text-xs text-foreground-light bg-background px-2 py-1 rounded">
            {tool.category}
          </span>
        </div>
        <p className="text-sm text-foreground-light">{tool.description}</p>
        <div className="flex flex-wrap gap-1">
          {tool.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs text-foreground-light/80 bg-background px-2 py-0.5 rounded">
              {tag}
            </span>
          ))}
          {tool.tags.length > 3 && (
            <span className="text-xs text-foreground-light/60">
              +{tool.tags.length - 3} more
            </span>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ToolCard;
