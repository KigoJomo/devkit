'use client';

import Button from '@/lib/components/ui/Button';
import { CodeCopyButton } from '@/lib/components/ui/CodeCopyButton';
import Input from '@/lib/components/ui/Input';
import { normalizeUrl } from '@/lib/utils/urlNormalize';
import { ChangeEvent, FormEvent, useState } from 'react';

const Normalizer = () => {
  const [result, setResult] = useState(normalizeUrl('example.com'));
  const [input, setInput] = useState('example.com');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInput(e.target.value);
    
    if (!e.target.value.trim()) {
      setResult('');
    } else {
      setResult(normalizeUrl(e.target.value));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) setResult('');
    setResult(normalizeUrl(input));
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <form
        action=""
        className="w-full flex flex-col md:flex-row items-center gap-2"
        onSubmit={handleSubmit}>
        <Input
          label=""
          name="url"
          type="text"
          placeholder="URL to normalize"
          className="w-full"
          value={input}
          onChange={handleChange}
        />

        <Button
          type="submit"
          onClick={() => handleSubmit}
          className="w-full md:w-fit">
          Normalize
        </Button>
      </form>

      <div className="result w-full flex flex-col gap-2">
        <h5>Result:</h5>

        <div className="flex items-center gap-2 p-2 border border-foreground-light/20 rounded-md bg-gradient-to-b from-accent/20 to-accent/5">
          <CodeCopyButton textToCopy={result} />

          <p>{result}</p>
        </div>
      </div>
    </div>
  );
};

export default Normalizer;
