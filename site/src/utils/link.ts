/**
 * Build an internal link prefixed with the configured base URL.
 * GitHub Pages typically serves from a subpath like /repo-name/.
 *
 * - Returns external URLs (http, mailto, anchor) unchanged.
 * - Joins the BASE_URL (set via astro.config) with the given path.
 */

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export function link(path: string): string {
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('mailto:') ||
    path.startsWith('tel:') ||
    path.startsWith('#')
  ) {
    return path;
  }
  const cleaned = path.startsWith('/') ? path : '/' + path;
  return BASE + cleaned || '/';
}
