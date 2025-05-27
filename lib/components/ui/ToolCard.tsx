import React from 'react';
import Card from '@/lib/components/ui/Card';
import { Tool } from '@/lib/config/tools';
import Tooltip from './Tooltip';

interface ToolCardProps {
  tool: Tool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  return (
    <Tooltip content={tool.description} position="bottom" size="sm">
      <Card href={tool.href} className="cursor-pointer flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="">{tool.name}</h3>

          <span className="text-xs text-foreground-light bg-background-dark px-2 py-1 rounded">
            {tool.category}
          </span>
        </div>
        <p className="!text-xs text-foreground-light line-clamp-2">{tool.description}</p>

        <div className="flex flex-wrap items-center gap-1">
          {tool.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs text-foreground-light/80 bg-background-dark px-2 py-0.5 rounded">
              {tag}
            </span>
          ))}
          {tool.tags.length > 3 && (
            <span className="text-xs text-foreground-light/60">
              +{tool.tags.length - 3} more
            </span>
          )}
        </div>
      </Card>
    </Tooltip>
  );
};

export default ToolCard;
