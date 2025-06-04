/**
 * Converts a string to a URL-friendly slug
 */
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters
    .replace(/\-\-+/g, '-'); // Replace multiple - with single -
}

// implementations of the slugify function for different languages

export const slugifyTypescript: string = `
\`\`\` typescript
function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/\\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\\-]+/g, '') // Remove all non-word characters
    .replace(/\\-\\-+/g, '-'); // Replace multiple - with single -
}
\`\`\`
`;

export const slugifyJavascript: string = `
\`\`\` javascript
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\\-]+/g, '') // Remove all non-word characters
    .replace(/\\-\\-+/g, '-'); // Replace multiple - with single -
}
\`\`\`
`;

export const slugifyPython: string = `
\`\`\`python
def slugify(text):
  text = text.strip().lower()
  text = re.sub(r'\\s+', '-', text)
  text = re.sub(r'&', '-and-', text)
  text = re.sub(r'[^\\w-]+', '', text)
  text = re.sub(r'-+', '-', text)
  return text
\`\`\`
`;
