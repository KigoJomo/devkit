'use client';

import { useState } from 'react';
import Button from '@/lib/components/ui/Button';
import Card from '@/lib/components/ui/Card';
import { CodeCopyButton } from '@/lib/components/ui/CodeCopyButton';
import Input from '@/lib/components/ui/Input';
import { clampUuidCount, generateUuids } from '@/lib/utils/uuidGen';

const MAX_UUIDS = 20;

const UuidGenerator = () => {
  const [count, setCount] = useState('1');
  const [error, setError] = useState('');
  const [uuids, setUuids] = useState<string[]>(() => generateUuids(1));

  const handleGenerate = () => {
    const parsedCount = Number(count);

    if (!Number.isInteger(parsedCount) || parsedCount < 1 || parsedCount > MAX_UUIDS) {
      setError(`Enter a whole number between 1 and ${MAX_UUIDS}.`);
      return;
    }

    setError('');
    setUuids(generateUuids(clampUuidCount(parsedCount)));
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <Card className="!p-6 space-y-6">
        <form
          className="flex flex-col gap-4 md:flex-row md:items-end"
          onSubmit={(event) => {
            event.preventDefault();
            handleGenerate();
          }}>
          <Input
            label="How many UUIDs?"
            name="uuid-count"
            type="number"
            min={1}
            max={MAX_UUIDS}
            value={count}
            onChange={(event) => setCount(event.target.value)}
            placeholder="1"
            error={error}
            className="w-full"
            inputClassName="w-full"
          />

          <Button type="submit" className="w-full md:w-fit">
            Generate
          </Button>
        </form>

        <div className="space-y-3">
          <div className="flex items-center justify-between gap-4">
            <h3>Generated UUIDs</h3>
            <CodeCopyButton textToCopy={uuids.join('\n')} />
          </div>

          <div className="space-y-2">
            {uuids.map((uuid) => (
              <div
                key={uuid}
                className="rounded-lg border border-foreground-light/20 bg-background-dark px-3 py-2 font-mono text-sm break-all">
                {uuid}
              </div>
            ))}
          </div>

          <p className="text-sm text-foreground-light">
            Uses the built-in <code>crypto.randomUUID()</code> API.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default UuidGenerator;
