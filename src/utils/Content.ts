import fs from 'fs';
import { join } from 'path';

import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), '_posts');

export type PostItems = {
  [key: string]: string;
};

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const items: PostItems = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
      return;
    }

    if (field === 'content') {
      items[field] = content;
      return;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = [], publishedOnly = false) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.posted > post2.posted ? -1 : 1));

  if (publishedOnly) {
    return posts.filter((post) => post.status === 'published');
  }

  return posts;
}

export function getPublishedPosts(fields: string[] = []) {
  return getAllPosts([...fields, 'status'], true);
}
