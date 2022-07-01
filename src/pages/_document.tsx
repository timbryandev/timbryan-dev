import Document, { Html, Head, Main, NextScript } from 'next/document';

import { AppConfig } from '../utils/AppConfig';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head />
        <body className="bg-white dark:bg-zinc-900 transition-all">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
