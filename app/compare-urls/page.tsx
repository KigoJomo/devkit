'use client';

import { useState } from 'react';
import Input from '@/lib/components/ui/Input';
import Button from '@/lib/components/ui/Button';
import Card from '@/lib/components/ui/Card';
import { compareUrls, UrlComparison } from '@/lib/utils/urlComparison';
import BackToTools from '@/lib/components/navigation/BackToTools';

const CompareUrlsPage = () => {
  const [url1, setUrl1] = useState('');
  const [url2, setUrl2] = useState('');
  const [comparison, setComparison] = useState<UrlComparison | null>(null);
  const [errors, setErrors] = useState<{ url1?: string; url2?: string }>({});

  const handleCompare = () => {
    const newErrors: { url1?: string; url2?: string } = {};

    if (!url1.trim()) {
      newErrors.url1 = 'First URL is required';
    }
    if (!url2.trim()) {
      newErrors.url2 = 'Second URL is required';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const result = compareUrls(url1.trim(), url2.trim());
      setComparison(result);
    }
  };

  const handleReset = () => {
    setUrl1('');
    setUrl2('');
    setComparison(null);
    setErrors({});
  };

  const renderUrlPart = (
    label: string,
    value1: string | undefined,
    value2: string | undefined,
    isDifferent: boolean
  ) => {
    if (!value1 && !value2) return null;

    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-3 border-b border-foreground-light/20 last:border-b-0">
        <div className="font-medium text-foreground-light">{label}</div>
        <div
          className={`font-mono text-sm ${
            isDifferent ? 'text-red-400' : 'text-foreground'
          }`}>
          {value1 || '(empty)'}
        </div>
        <div
          className={`font-mono text-sm ${
            isDifferent ? 'text-red-400' : 'text-foreground'
          }`}>
          {value2 || '(empty)'}
        </div>
      </div>
    );
  };

  return (
    <section className="min-h-screen">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <BackToTools />
          <h1 className="text-3xl font-bold">Compare URLs</h1>
          <p className="text-foreground-light">
            Compare two URLs and analyze their structural differences
          </p>
        </div>

        {/* Input Form */}
        <Card className="space-y-6 !p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="First URL"
              name="url1"
              type="text"
              value={url1}
              onChange={(e) => setUrl1(e.target.value)}
              placeholder="https://example.com/path?param=value"
              error={errors.url1}
              required
            />
            <Input
              label="Second URL"
              name="url2"
              type="text"
              value={url2}
              onChange={(e) => setUrl2(e.target.value)}
              placeholder="https://example.org/path?param=other"
              error={errors.url2}
              required
            />
          </div>

          <div className="flex gap-4 justify-center">
            <Button onClick={handleCompare} variant="primary">
              Compare URLs
            </Button>
            <Button onClick={handleReset} variant="outline">
              Reset
            </Button>
          </div>
        </Card>

        {/* Results */}
        {comparison && (
          <div className="space-y-6">
            {/* Validity Check */}
            <Card>
              <h3 className="text-xl font-semibold mb-4">Validity Check</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                  className={`p-3 rounded-lg ${
                    comparison.isValid.url1
                      ? 'bg-green-500/20 border border-green-500/30'
                      : 'bg-red-500/20 border border-red-500/30'
                  }`}>
                  <span className="font-medium">First URL: </span>
                  <span
                    className={
                      comparison.isValid.url1
                        ? 'text-green-400'
                        : 'text-red-400'
                    }>
                    {comparison.isValid.url1 ? 'Valid' : 'Invalid'}
                  </span>
                </div>
                <div
                  className={`p-3 rounded-lg ${
                    comparison.isValid.url2
                      ? 'bg-green-500/20 border border-green-500/30'
                      : 'bg-red-500/20 border border-red-500/30'
                  }`}>
                  <span className="font-medium">Second URL: </span>
                  <span
                    className={
                      comparison.isValid.url2
                        ? 'text-green-400'
                        : 'text-red-400'
                    }>
                    {comparison.isValid.url2 ? 'Valid' : 'Invalid'}
                  </span>
                </div>
              </div>
            </Card>

            {/* Similarity Score */}
            {comparison.isValid.url1 && comparison.isValid.url2 && (
              <Card>
                <h3 className="text-xl font-semibold mb-4">Similarity</h3>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">
                    <span
                      className={
                        comparison.similarity >= 80
                          ? 'text-green-400'
                          : comparison.similarity >= 50
                          ? 'text-yellow-400'
                          : 'text-red-400'
                      }>
                      {comparison.similarity}%
                    </span>
                  </div>
                  <p className="text-foreground-light">
                    URLs are {comparison.similarity}% similar
                  </p>
                </div>
              </Card>
            )}

            {/* Detailed Comparison */}
            {comparison.isValid.url1 &&
              comparison.isValid.url2 &&
              comparison.url1Parts &&
              comparison.url2Parts && (
                <Card>
                  <h3 className="text-xl font-semibold mb-4">
                    Detailed Comparison
                  </h3>
                  <div className="space-y-1">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-2 font-semibold border-b-2 border-foreground-light/30">
                      <div>Component</div>
                      <div>First URL</div>
                      <div>Second URL</div>
                    </div>

                    {renderUrlPart(
                      'Protocol',
                      comparison.url1Parts.protocol,
                      comparison.url2Parts.protocol,
                      comparison.differences.protocol
                    )}
                    {renderUrlPart(
                      'Hostname',
                      comparison.url1Parts.hostname,
                      comparison.url2Parts.hostname,
                      comparison.differences.hostname
                    )}
                    {renderUrlPart(
                      'Port',
                      comparison.url1Parts.port || '(default)',
                      comparison.url2Parts.port || '(default)',
                      comparison.differences.port
                    )}
                    {renderUrlPart(
                      'Path',
                      comparison.url1Parts.pathname,
                      comparison.url2Parts.pathname,
                      comparison.differences.pathname
                    )}
                    {renderUrlPart(
                      'Query',
                      comparison.url1Parts.search,
                      comparison.url2Parts.search,
                      comparison.differences.search
                    )}
                    {renderUrlPart(
                      'Fragment',
                      comparison.url1Parts.hash,
                      comparison.url2Parts.hash,
                      comparison.differences.hash
                    )}
                  </div>

                  <div className="mt-6 p-4 bg-background rounded-lg">
                    <h4 className="font-semibold mb-2">Legend:</h4>
                    <div className="flex gap-6 text-sm">
                      <span className="text-foreground">⚫ Identical</span>
                      <span className="text-red-400">⚫ Different</span>
                    </div>
                  </div>
                </Card>
              )}
          </div>
        )}
      </div>
    </section>
  );
};

export default CompareUrlsPage;
