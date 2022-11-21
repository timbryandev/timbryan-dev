import { useEffect } from 'react';

import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import posthog from 'posthog-js';

import '../styles/water.scss';
import '../styles/main.scss';
import '../styles/prism.scss';

import { ThemeProvider } from '../components/Theme/ThemeContext';
import consoleBrand from '@timbryandev/console-brand';

import { isBrowser } from '../utils/environment';
import { isProd } from '../utils/getBuildEnv';

const posthogHost = process.env.POSTHOG_API_HOST ?? '';
const posthogId = process.env.POSTHOG_API_KEY ?? '';

let hasSeenBrand = false;

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const router = useRouter();

  if (isBrowser && !hasSeenBrand) {
    hasSeenBrand = true;
    consoleBrand();
  }

  useEffect(() => {
    const allowTracking = isProd && posthogId !== '';

    function onRouteChangeComplete(): void {
      posthog.capture('$pageview');
    }

    if (allowTracking) {
      posthog.init(posthogId, { api_host: posthogHost });
      router.events.on('routeChangeComplete', onRouteChangeComplete);
    }

    return () => {
      if (allowTracking) {
        router.events.off('routeChangeComplete', onRouteChangeComplete);
      }
    };
  }, [router.events]);

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
