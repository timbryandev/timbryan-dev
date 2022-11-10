import { AppConfig } from '../AppConfig';
import { getPages, getPublishedPosts } from './content';

const locTag = (url: string): string => `<loc>${url}</loc>`;

const lastmodTag = (date: string): string => `<lastmod>${date}</lastmod>`;

const priorityTag = (priority: number): string =>
  `<priority>${priority}</priority>`;

const urlTag = (url: string, date: string, priority: number): string =>
  `<url>
  ${locTag(url)}
  ${lastmodTag(date)}
  ${priorityTag(priority)}
  </url>`;

export default async function generateSitemap(): Promise<string> {
  const postUrlPath = `${AppConfig.url}/posts/`;

  const pages = getPages();

  const posts = getPublishedPosts(['slug', 'updated']);

  const createRootEntry = (): string =>
    urlTag(AppConfig.url, new Date().toISOString().split('T')[0], 1);

  const createSubEntry = (slug: string, date: string, level: number): string =>
    urlTag(slug, date, 1 - level / 10);

  // Add each blog entry to the feed
  const pageUrls = pages.map(({ slug, updated, depth }): string =>
    createSubEntry(AppConfig.url + slug, updated, depth)
  );

  const postUrls = posts.map((post) =>
    createSubEntry(postUrlPath + post.slug, post.updated ?? post.posted, 2)
  );

  const sitemap = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  ${createRootEntry()}
  ${pageUrls.join('\n  ')}
  ${postUrls.join('\n  ')}
</urlset>
`.trim();

  return sitemap;
}
