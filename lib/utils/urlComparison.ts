export interface UrlParts {
  protocol: string;
  hostname: string;
  port: string;
  pathname: string;
  search: string;
  hash: string;
  origin: string;
}

export interface UrlComparison {
  url1: string;
  url2: string;
  url1Parts: UrlParts | null;
  url2Parts: UrlParts | null;
  differences: {
    protocol: boolean;
    hostname: boolean;
    port: boolean;
    pathname: boolean;
    search: boolean;
    hash: boolean;
  };
  isValid: {
    url1: boolean;
    url2: boolean;
  };
  similarity: number;
}

export function parseUrl(url: string): UrlParts | null {
  try {
    const urlObj = new URL(url);
    return {
      protocol: urlObj.protocol,
      hostname: urlObj.hostname,
      port: urlObj.port,
      pathname: urlObj.pathname,
      search: urlObj.search,
      hash: urlObj.hash,
      origin: urlObj.origin,
    };
  } catch {
    return null;
  }
}

export function compareUrls(url1: string, url2: string): UrlComparison {
  const url1Parts = parseUrl(url1);
  const url2Parts = parseUrl(url2);

  const isValid = {
    url1: url1Parts !== null,
    url2: url2Parts !== null,
  };

  let differences = {
    protocol: true,
    hostname: true,
    port: true,
    pathname: true,
    search: true,
    hash: true,
  };

  let similarity = 0;

  if (url1Parts && url2Parts) {
    differences = {
      protocol: url1Parts.protocol !== url2Parts.protocol,
      hostname: url1Parts.hostname !== url2Parts.hostname,
      port: url1Parts.port !== url2Parts.port,
      pathname: url1Parts.pathname !== url2Parts.pathname,
      search: url1Parts.search !== url2Parts.search,
      hash: url1Parts.hash !== url2Parts.hash,
    };

    // Calculate similarity percentage
    const totalParts = Object.keys(differences).length;
    const matchingParts = Object.values(differences).filter(
      (diff) => !diff
    ).length;
    similarity = Math.round((matchingParts / totalParts) * 100);
  }

  return {
    url1,
    url2,
    url1Parts,
    url2Parts,
    differences,
    isValid,
    similarity,
  };
}
