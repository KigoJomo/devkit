import Link from 'next/link';

const BackToTools = () => {
  return (
    <Link
      href="/"
      className="inline-block text-accent hover:text-accent/80 transition-all duration-300">
      ← Back to Tools
    </Link>
  );
};

export default BackToTools;
