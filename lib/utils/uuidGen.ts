const UUID_COUNT_MIN = 1;
const UUID_COUNT_MAX = 20;

export function clampUuidCount(count: number): number {
  if (!Number.isFinite(count)) {
    return UUID_COUNT_MIN;
  }

  return Math.min(UUID_COUNT_MAX, Math.max(UUID_COUNT_MIN, Math.floor(count)));
}

export function generateUuid(): string {
  return crypto.randomUUID();
}

export function generateUuids(count: number): string[] {
  const safeCount = clampUuidCount(count);

  return Array.from({ length: safeCount }, () => generateUuid());
}

export const uuidGeneratorTypescript = `
\`\`\`typescript
function generateUuids(count = 1): string[] {
  const safeCount = Math.min(20, Math.max(1, Math.floor(count)));

  return Array.from({ length: safeCount }, () => crypto.randomUUID());
}
\`\`\`
`;

export const uuidGeneratorJavascript = `
\`\`\`javascript
function generateUuids(count = 1) {
  const safeCount = Math.min(20, Math.max(1, Math.floor(count)));

  return Array.from({ length: safeCount }, () => crypto.randomUUID());
}
\`\`\`
`;

export const uuidGeneratorPython = `
\`\`\`python
import uuid

def generate_uuids(count=1):
  safe_count = max(1, min(20, int(count)))
  return [str(uuid.uuid4()) for _ in range(safe_count)]
\`\`\`
`;
