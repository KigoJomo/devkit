import BackToTools from '@/lib/components/navigation/BackToTools';
import MarkdownRenderer from '@/lib/components/ui/MarkdownRenderer';
import Tabs, { Tab } from '@/lib/components/ui/Tabs';
import {
  basicGitCommands,
  sshSetupGuide,
  githubCliGuide,
  advancedGitCommands,
} from '@/lib/utils/gitContent';

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

  return (
    <section className="flex flex-col items-center gap-6">
      <BackToTools />

      <div className="text-center">
        <h1>Git Reference</h1>
        <p className="text-foreground-light mt-2">
          Quick reference for Git commands, SSH setup, and GitHub CLI
        </p>
      </div>

      <div className="w-full max-w-4xl">
        <Tabs tabs={gitTabs} />
      </div>
    </section>
  );
};

export default GitReferencePage;
