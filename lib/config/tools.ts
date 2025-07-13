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
    id: 'slug-generator',
    name: 'Slug Generator',
    description:
      'Transform text into URL-friendly slugs with implementation code in TypeScript, JavaScript, and Python',
    href: '/slug-generator',
    category: 'Text',
    tags: [
      'slug',
      'url',
      'text',
      'generator',
      'javascript',
      'typescript',
      'python',
      'code-examples',
    ],
  },
  {
    id: 'git-reference',
    name: 'Git Reference',
    description:
      'Comprehensive Git command reference with SSH setup guides and GitHub CLI workflows',
    href: '/git',
    category: 'Development',
    tags: [
      'git',
      'version-control',
      'ssh',
      'github',
      'cli',
      'reference',
      'commands',
    ],
  },
  {
    id: 'url-normalizer',
    name: 'URL Normalizer',
    description:
      'Standardize URLs with protocol and www prefix normalization, includes implementation code',
    href: '/url-normalizer',
    category: 'Web',
    tags: [
      'url',
      'normalizer',
      'web',
      'development',
      'standardization',
      'code-examples',
    ],
  },
  {
    id: 'format-price',
    name: 'Price Formatter',
    description:
      'Format prices with currency symbols and locale-specific formatting in multiple languages',
    href: '/price-formatter',
    category: 'Web',
    tags: [
      'price',
      'format',
      'currency',
      'web',
      'development',
      'code-examples',
    ],
  },
  {
    id: 'compare-urls',
    name: 'URL Comparison Tool',
    description: 'Compare and analyze differences between two URLs in detail',
    href: '/compare-urls',
    category: 'Web',
    tags: ['url', 'compare', 'analysis', 'web', 'development', 'debugging'],
  },
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
