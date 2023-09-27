/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const baseUrl = '';
const { POSTHOG_API_HOST, POSTHOG_API_KEY } = process.env;

module.exports = withBundleAnalyzer({
  poweredByHeader: false,
  trailingSlash: true,
  basePath: baseUrl,
  env: {
    baseUrl,
    POSTHOG_API_HOST,
    POSTHOG_API_KEY,
  },
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/rss/feed(.xml)?',
        destination: '/api/rss',
      },
      {
        source: '/rss/feed.json',
        destination: '/api/rss?format=json',
      },
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
      {
        source: '/timb.js',
        destination: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?si=mB3rfPyLMtsaDkng&autoplay=1',
        permanent: false,
        basePath: false
      }
    ];
  },
  images: { domains: ['res.cloudinary.com'] },
});
