import fs from 'fs';
import { join } from 'path';

import matter from 'gray-matter';

import removeFileExtension from './removeFileExtension';

const postsDirectory = join(process.cwd(), '_posts');
const pagesDirectory = join(process.cwd(), 'src/pages');

export interface PostItems {
  [key: string]: string;
}

export function getPagePaths() {
  console.log('scanning: ', pagesDirectory);
  return fs.readdirSync(pagesDirectory);
}

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = removeFileExtension(slug);
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

    if (data[field] !== undefined) {
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

export function getPages() {
  const isPrivateFile = (path: string) => path.match(/^([[\d_])/) !== null;
  const isPrivateFolder = (path: string) => ['api', 'posts'].includes(path);

  const isPublic = (path: string) =>
    !isPrivateFile(path) && !isPrivateFolder(path);

  const createPageObject = (path: string) => ({
    slug: `/${removeFileExtension(path)}`,
    updated: new Date().toISOString().split('T')[0],
    depth: 1,
  });

  const paths = getPagePaths();
  const pages = paths.filter(isPublic).map(createPageObject);

  return pages;
}

export function getPublishedPosts(fields: string[] = []) {
  return getAllPosts([...fields, 'status'], true);
}
