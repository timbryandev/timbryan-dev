import Document, { Html, Head, Main, NextScript } from 'next/document';

import { AppConfig } from '../AppConfig';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang={AppConfig.locale}>
        <Head>
          <link
            id="waterCssStylesheet"
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
