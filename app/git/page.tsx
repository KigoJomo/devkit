import BackToTools from '@/lib/components/navigation/BackToTools';
import MarkdownRenderer from '@/lib/components/ui/MarkdownRenderer';
import Tabs, { Tab } from '@/lib/components/ui/Tabs';
import { tools } from '@/lib/config/tools';
import {
  basicGitCommands,
  sshSetupGuide,
  githubCliGuide,
  advancedGitCommands,
} from '@/lib/utils/gitContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Git Reference | DevKit',
  description:
    'Comprehensive Git command reference with SSH setup guides and GitHub CLI workflows',
  openGraph: {
    title: 'Git Reference | DevKit',
    description:
      'Comprehensive Git command reference with SSH setup guides and GitHub CLI workflows',
    type: 'website',
    url: 'https://tools.aqutte.co.ke/git',
    siteName: 'DevKit',
    images: [{ url: 'https://tools.aqutte.co.ke/images/og.webp' }],
  },
};

const GitReferencePage = () => {
  const gitTabs: Tab[] = [
    {
      title: 'Basic Commands',
      content: <MarkdownRenderer markDowncontent={basicGitCommands} />,
    },
    {
      title: 'SSH Setup',
      content: <MarkdownRenderer markDowncontent={sshSetupGuide} />,
    },
    {
      title: 'GitHub CLI',
      content: <MarkdownRenderer markDowncontent={githubCliGuide} />,
    },
    {
      title: 'Advanced',
      content: <MarkdownRenderer markDowncontent={advancedGitCommands} />,
    },
  ];

  const tool = tools.find((tool) => tool.id === 'git-reference');

  return (
    <section className="flex flex-col items-center gap-8">
      <BackToTools />

      <div className="flex flex-col items-center gap-2">
        <h1>Git Reference</h1>
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
        <p className="text-foreground-light">
          Comprehensive Git command reference with SSH setup guides and GitHub
          CLI workflows
        </p>
      </div>

      <div className="w-full max-w-4xl">
        <Tabs tabs={gitTabs} />
      </div>
    </section>
  );
};

export default GitReferencePage;
