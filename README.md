# TimBryan.dev Portfolio(WIP) + Blog

Production: ![Production](https://github.com/timbryandev/timbryan-dev/actions/workflows/node.js.yml/badge.svg?branch=production)

Preview: ![Staging](https://github.com/timbryandev/timbryan-dev/actions/workflows/node.js.yml/badge.svg?branch=preview)

<p align="center">
  <a href="https://timbryan.dev/">
    <img src="public/android-chrome-192x192.png?raw=true" alt="" />
    <br />
    TimBryan.Dev
  </a>
</p>

## Features

Blog feature:

- 🔥 [Next.js](https://nextjs.org) for Static Site Generator
- 🎈 Syntax Highlighting with Prism.js
- ⬇️ Markdown Blog posts and page content
- 💯 Maximize lighthouse score
- 🃏 Test Driven Development with [Jest](https://jestjs.io/)
- 🎉 Type checking [TypeScript](https://www.typescriptlang.org)
- 🛠 Styled with [SCSS](https://sass-lang.com)
- 🛠 Code Formatter with [Prettier](https://prettier.io)
- 🛠 Code Linter with [ESLint](https://eslint.org)
- 🧹 Style Linter with [Stylelint](https://stylelint.io)
- 🦊 SEO metadata, [JSON-LD](https://developers.google.com/search/docs/guides/intro-structured-data) and [Open Graph](https://ogp.me/) tags with [Next SEO](https://github.com/garmeeh/next-seo)
- 🛠 Dynamically generated sitemap
- 🛠 [Husky](https://typicode.github.io/husky/#/) and [lint-staged](https://github.com/okonet/lint-staged) for pre-commit and pre-push linting, testing and build validation

Built-in feature from Next.js:

- ☕ Minify HTML & SCSS
- 💨 Live reload
- ✅ Cache busting

### Requirements

- Node.js (16+)
- NPM (8+)

## Getting started

Run the following command on your local environment:

```shell
npm install
```

Then, you can run locally in development mode with live reload:

```shell
npm run dev
```

Open <http://localhost:3000> with your favourite browser to see your project.

```text
.
├── _posts            # Blog posts
├── public            # Static files
│   ├── assets
│   │   └── images
│   │       └── posts # Images used your blog posts
└── src
    ├── pages         # Next.js pages
    └── styles        # SCSS files
```

## Deploy to production

You can see the results locally in production mode with:

```shell
npm run build
npm run start
```

The generated HTML and CSS files are minified (built-in feature from Next js).

Now, the project is ready to be deployed. All generated files are located at `dist` folder, which can deploy with any hosting service (I'm currently using Vercel).

## Contributions

Everyone is welcome to contribute to this project. Feel free to open an issue if you have question or found a bug.

## License

Licensed under the MIT License, Copyright © 2022

See [LICENSE](LICENSE) for more information.

---

Project base by [CreativeDesignsGuru](https://creativedesignsguru.com)
