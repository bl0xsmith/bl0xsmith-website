/**
 * Estimate reading time from raw markdown/text content.
 * Based on an average reading speed of 200 words per minute.
 */
export function readingTime(body: string): number {
  const words = body.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}
