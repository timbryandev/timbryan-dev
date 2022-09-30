import { AppConfig } from '../AppConfig';
import { getPublishedPosts } from './contentt';

const locTag = (url: string) => `<loc>${url}</loc>`;

const lastmodTag = (date: string) => `<lastmod>${date}</lastmod>`;

const priorityTag = (priority: number) => `<priority>${priority}</priority>`;

const urlTag = (url: string, date: string, priority: number) =>
  `<url>
  ${locTag(url)}
  ${lastmodTag(date)}
  ${priorityTag(priority)}
  </url>`;

export default async function generateSitemap() {
  const postUrlPath = `${AppConfig.url}/post/`;

  // TODO: This should be grabbed from the filesystem
  const pages = [
    {
      slug: '/about',
      updated: new Date().toISOString().split('T')[0],
      depth: 1,
    },
    {
      slug: '/contact',
      updated: new Date().toISOString().split('T')[0],
      depth: 1,
    },
  ];

  const posts = getPublishedPosts(['slug', 'updated']);

  const createRootEntry = () =>
    urlTag(AppConfig.url, new Date().toISOString().split('T')[0], 1);

  const createSubEntry = (slug: string, date: string, level: number) =>
    urlTag(slug, date, 1 - level / 10);

  // Add each blog entry to the feed
  const pageUrls = pages.map(({ slug, updated, depth }) =>
    createSubEntry(AppConfig.url + slug, updated, depth)
  );

  const postUrls = posts.map((post) =>
    createSubEntry(postUrlPath + post.slug, post.updated ?? post.posted, 2)
  );

  // for await (const post of posts) {
  //   const content = await markdownToHtml(post.content || '');
  //   feed.addItem({
  //     author: [author],
  //     content,
  //     contributor: [author],
  //     copyright,
  //     date: new Date(post.updated),
  //     description: post.description,
  //     guid: post.slug,
  //     id: post.slug,
  //     image: `${AppConfig.url}${post.image}`,
  //     link: post.slug,
  //     published: new Date(post.posted),
  //     title: post.title,
  //   });
  // }

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
