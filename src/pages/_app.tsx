import React from 'react';

import { AppProps } from 'next/app';

import '../styles/water.scss';
import '../styles/main.css';
import '../styles/prism-a11y-dark.css';

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
