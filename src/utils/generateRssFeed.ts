import { Feed } from 'feed';

import { AppConfig } from '../AppConfig';
import { getPublishedPosts } from './content';
import { markdownToHtml } from './markdown';

export default async function generateRssFeed() {
  const posts = getPublishedPosts([
    'content',
    'description',
    'image',
    'posted',
    'status',
    'title',
    'updated',
  ]);
  const date = new Date();
  const author = {
    name: AppConfig.author,
    email: AppConfig.email,
    link: AppConfig.url,
  };
  const copyright = `© Copyright ${date.getFullYear()} ${AppConfig.author} of ${
    AppConfig.url
  }`;

  // Instantiate feed
  const feed = new Feed({
    author,
    copyright,
    description: AppConfig.description,
    favicon: `${AppConfig.url}/favicon.ico`,
    feedLinks: {
      json: `${AppConfig.url}/rss/feed.json`,
      rss2: `${AppConfig.url}/rss/feed.xml`,
    },
    generator: 'Feed for Node.js',
    id: AppConfig.url,
    image: `${AppConfig.url}/assets/avatar.jpg`,
    language: AppConfig.locale,
    link: AppConfig.url,
    title: AppConfig.siteName,
    updated: date,
  });

  // Add each blog entry to the feed
  // eslint-disable-next-line no-restricted-syntax
  for await (const post of posts) {
    const content = await markdownToHtml(post.content ?? '');

    feed.addItem({
      author: [author],
      content,
      contributor: [author],
      copyright,
      date: new Date(post.updated),
      description: post.description,
      guid: post.slug,
      id: post.slug,
      image: `${AppConfig.url}${post.image}`,
      link: post.slug,
      published: new Date(post.posted),
      title: post.title,
    });
  }

  return { rss: feed.rss2(), json: feed.json1() };
}
