import { AppProps } from 'next/app';

import '../styles/water.scss';
import '../styles/main.scss';
import '../styles/prism.scss';

import { ThemeProvider } from '../components/Theme/ThemeContext';
import consoleBrand from '../utils/ConsoleBrand';

let hasSeenBrand = false;

const MyApp = ({ Component, pageProps }: AppProps) => {
  if (hasSeenBrand === false) {
    hasSeenBrand = true;
    consoleBrand();
  }

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
