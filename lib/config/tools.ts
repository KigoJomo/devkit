export interface Tool {
  id: string;
  name: string;
  description: string;
  href: string;
  category: string;
  tags: string[];
}

export const tools: Tool[] = [
  {
    id: 'compare-urls',
    name: 'Compare URLs',
    description: 'Compare two URLs and analyze their differences in detail',
    href: '/compare-urls',
    category: 'Web',
    tags: ['url', 'compare', 'analysis', 'web', 'development'],
  },
  // Add more tools here as they are created
];

export function searchTools(query: string): Tool[] {
  if (!query.trim()) return tools;

  const lowercaseQuery = query.toLowerCase();

  return tools.filter(
    (tool) =>
      tool.name.toLowerCase().includes(lowercaseQuery) ||
      tool.description.toLowerCase().includes(lowercaseQuery) ||
      tool.category.toLowerCase().includes(lowercaseQuery) ||
      tool.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
  );
}
