// TODO: @mapbox/rehype-prism does not have typescript definition
// @ts-expect-error
import rehypePrism from '@mapbox/rehype-prism';
import html from 'rehype-stringify';
import gfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

const anchorSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link" viewBox="0 0 16 16">
<path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
<path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"/>
</svg>`;

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(gfm)
    .use(remarkRehype)
    .use(rehypePrism)
    .use(html)
    .process(markdown);

  const resultString = result.toString();

  const resultWithAnchoredH2s = resultString.replace(
    /<h2>(.*?)<\/h2>/gi,
    (_match: string, captureGroupA: string) => {
      const hash = captureGroupA.replace(/[\s-_/]+/g, '-').toLowerCase();
      const h2WithHashLink = `<h2>${anchorSvg} <a href="#${hash}" id="${hash}">${captureGroupA}</a></h2>`;
      return h2WithHashLink;
    }
  );

  return resultWithAnchoredH2s.replace(
    /@@baseUrl@@/g,
    process.env.baseUrl ?? ''
  );
}
