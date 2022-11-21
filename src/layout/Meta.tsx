import Head from 'next/head';
import { useRouter } from 'next/router';

import uuidV4 from '@timbryandev/uuidv4';

import { AppConfig } from '../AppConfig';
import { addTrailingSlash } from '../utils/urlHelpers';

interface IMetaProps {
  title: string;
  description: string;
  canonical?: string;
  post?: {
    image: string;
    posted: string;
    updated: string;
    status: string;
  };
}

const Meta = (props: IMetaProps): JSX.Element => {
  const router = useRouter();
  const [versionId] = uuidV4();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link
          rel="apple-touch-icon"
          href={`${router.basePath}/apple-touch-icon.png`}
          key="apple"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${router.basePath}/favicon-32x32.png`}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${router.basePath}/favicon-16x16.png`}
          key="icon16"
        />
        <link
          rel="icon"
          href={`${router.basePath}/favicon.ico`}
          key="favicon"
        />
        <title>{`${props.title} | ${AppConfig.siteName}`}</title>
        <meta
          name="description"
          content={props.description ?? AppConfig.description}
          key="description"
        />
        <meta name="author" content={AppConfig.author} key="author" />
        {typeof props.canonical === 'string' && (
          <link rel="canonical" href={props.canonical} key="canonical" />
        )}
        <meta
          property="og:title"
          content={`${props.title} | ${AppConfig.siteName}`}
          key="og:title"
        />
        <meta
          property="og:description"
          content={props.description ?? AppConfig.description}
          key="og:description"
        />
        <meta property="og:locale" content={AppConfig.locale} key="og:locale" />
        <meta
          property="og:site_name"
          content={AppConfig.siteName}
          key="og:site_name"
        />
        {props.post != null && (
          <>
            <meta property="og:type" content="article" key="og:type" />
            <meta
              property="og:image"
              content={`${router.basePath}${props.post.image}?v=${versionId}`}
              key="og:image"
            />
            <meta
              name="twitter:card"
              content="summary_large_image"
              key="twitter:card"
            />
            <meta
              property="article:published_time"
              content={new Date(props.post.posted).toISOString()}
              key="article:published_time"
            />
            <meta
              property="article:modified_time"
              content={new Date(props.post.updated).toISOString()}
              key="article:modified_time"
            />
            <meta
              property="article:status"
              content={props.post.status}
              key="article:status"
            />
            <script
              type="application/ld+json"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: `
          {
            "description": "${props.description ?? AppConfig.description}",
            "author": {
              "@type": "Person",
              "name": "${AppConfig.author}"
            },
            "@type": "BlogPosting",
            "url": "${AppConfig.url}${router.basePath}${addTrailingSlash(
                  router.asPath
                )}",
            "publisher": {
              "@type": "Organization",
              "logo": {
                "@type": "ImageObject",
                "url": "${AppConfig.url}${
                  router.basePath
                }/assets/images/logo.png"
              },
              "name": "${AppConfig.author}"
            },
            "headline": "${props.title} | ${AppConfig.siteName}",
            "image": ["${AppConfig.url}${router.basePath}${props.post.image}"],
            "datePublished": "${new Date(props.post.posted).toISOString()}",
            "dateModified": "${new Date(props.post.updated).toISOString()}",
            "status":"${props.post.status}"
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "${AppConfig.url}${router.basePath}${addTrailingSlash(
                  router.asPath
                )}"
            },
            "@context": "http://schema.org"
          }`,
              }}
              key="ldjson"
            />
          </>
        )}
        <link
          id="waterCssStylesheet"
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css"
        />
      </Head>
    </>
  );
};

export { Meta };
