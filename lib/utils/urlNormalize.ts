export function normalizeUrl(input: string): string {
  let url = input.trim();

  // Add protocol if missing
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    url = 'https://' + url;
  }

  // Add www. if missing and the URL doesn't start with it
  if (!url.includes('://www.') && !url.includes('://localhost')) {
    url = url.replace('://', '://www.');
  }

  // Remove trailing slashes
  url = url.replace(/\/+$/, '');

  return url;
}

// implementations of the normalizeUrl function for different languages

export const normalizeUrlTypescript: string = `
\`\`\`typescript
function normalizeUrl(input: string): string {
  let url = input.trim();

  // Add protocol if missing
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    url = 'https://' + url;
  }

  // Add www. if missing and the URL doesn't start with it
  if (!url.includes('://www.') && !url.includes('://localhost')) {
    url = url.replace('://', '://www.');
  }

  // Remove trailing slashes
  url = url.replace(/\\/+$/, '');

  return url;
}

// Example usage
console.log(normalizeUrl('example.com')); // https://www.example.com
console.log(normalizeUrl('http://example.com/')); // http://www.example.com
\`\`\`
`;

export const normalizeUrlJavascript: string = `
\`\`\`javascript
function normalizeUrl(input) {
  let url = input.trim();

  // Add protocol if missing
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    url = 'https://' + url;
  }

  // Add www. if missing and the URL doesn't start with it
  if (!url.includes('://www.') && !url.includes('://localhost')) {
    url = url.replace('://', '://www.');
  }

  // Remove trailing slashes
  url = url.replace(/\\/+$/, '');

  return url;
}

// Example usage
console.log(normalizeUrl('example.com')); // https://www.example.com
console.log(normalizeUrl('http://example.com/')); // http://www.example.com
\`\`\`
`;

export const normalizeUrlPython: string = `
\`\`\`python
import re

def normalize_url(input_url):
    url = input_url.strip()
    
    # Add protocol if missing
    if not url.startswith('http://') and not url.startswith('https://'):
        url = 'https://' + url
    
    # Add www. if missing and the URL doesn't start with it
    if '://www.' not in url and '://localhost' not in url:
        url = url.replace('://', '://www.')
    
    # Remove trailing slashes
    url = re.sub(r'/+$', '', url)
    
    return url

# Example usage
print(normalize_url('example.com'))  # https://www.example.com
print(normalize_url('http://example.com/'))  # http://www.example.com
\`\`\`
`;

export const normalizeUrlJava: string = `
\`\`\`java
public static String normalizeUrl(String input) {
    String url = input.trim();
    
    // Add protocol if missing
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
        url = "https://" + url;
    }
    
    // Add www. if missing and the URL doesn't start with it
    if (!url.contains("://www.") && !url.contains("://localhost")) {
        url = url.replace("://", "://www.");
    }
    
    // Remove trailing slashes
    url = url.replaceAll("/+$", "");
    
    return url;
}

// Example usage
System.out.println(normalizeUrl("example.com")); // https://www.example.com
System.out.println(normalizeUrl("http://example.com/")); // http://www.example.com
\`\`\`
`;

export const normalizeUrlPhp: string = `
\`\`\`php
function normalizeUrl($input) {
    $url = trim($input);
    
    // Add protocol if missing
    if (!str_starts_with($url, 'http://') && !str_starts_with($url, 'https://')) {
        $url = 'https://' . $url;
    }
    
    // Add www. if missing and the URL doesn't start with it
    if (!str_contains($url, '://www.') && !str_contains($url, '://localhost')) {
        $url = str_replace('://', '://www.', $url);
    }
    
    // Remove trailing slashes
    $url = preg_replace('/\/+$/', '', $url);
    
    return $url;
}

// Example usage
echo normalizeUrl('example.com'); // https://www.example.com
echo normalizeUrl('http://example.com/'); // http://www.example.com
\`\`\`
`;
