import fs from 'fs';

import { Feed } from 'feed';

import { AppConfig } from './AppConfig';
import { getPublishedPosts } from './Content';

export default async function generateRssFeed() {
  const posts = getPublishedPosts();
  const siteURL = AppConfig.url;
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
    favicon: `${siteURL}/favicon.ico`,
    feedLinks: {
      json: `${siteURL}/rss/feed.json`,
      rss2: `${siteURL}/rss/feed.xml`,
    },
    generator: 'Feed for Node.js',
    id: siteURL,
    image: `${siteURL}/assets/avatar.jpg`,
    language: AppConfig.locale,
    link: siteURL,
    title: AppConfig.siteName,
    updated: date,
  });

  // Add each blog entry to the feed
  posts.forEach((post) => {
    feed.addItem({
      author: [author],
      content: post.content,
      contributor: [author],
      copyright,
      date: new Date(post.updated),
      description: post.description,
      guid: post.slug,
      id: post.slug,
      image: post.image,
      link: post.slug,
      published: new Date(post.posted),
      title: post.title,
    });
  });

  // Save xml and json files for rss feeds
  fs.mkdirSync('./public/rss', { recursive: true });
  fs.writeFileSync('./public/rss/feed.xml', feed.rss2());
  fs.writeFileSync('./public/rss/feed.json', feed.json1());
}
