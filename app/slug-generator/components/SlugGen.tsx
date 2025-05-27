'use client';

import Button from '@/lib/components/ui/Button';
import { CodeCopyButton } from '@/lib/components/ui/CodeCopyButton';
import Input from '@/lib/components/ui/Input';
import { slugify } from '@/lib/utils/slugGen';
import { useEffect, useState } from 'react';

const SlugGen = () => {
  const [result, setResult] = useState('');
  const [input, setInput] = useState('Generate a slug from any text');

  useEffect(() => {
    setResult(slugify(input));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="w-full flex flex-col gap-4">
      <form
        className="w-full flex items-center gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          setResult(slugify(input));
        }}
      >
        <Input
          label=""
          name="slug"
          type="text"
          placeholder="Text to generate slug from"
          className="w-full"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <Button type="submit" onClick={() => setResult(slugify(input))}>
          Generate
        </Button>
      </form>

      <div className="w-full flex flex-col gap-2">
        <h5>Result:</h5>

        <div className="flex items-center gap-2 p-2 border border-foreground-light/20 rounded-md bg-gradient-to-b from-accent/20 to-accent/5">
          <CodeCopyButton textToCopy={result} />

          <p>{result}</p>
        </div>
      </div>
    </div>
  );
};

export default SlugGen;
