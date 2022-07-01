import React from 'react';

import { AppProps } from 'next/app';

import '../styles/main.css';
import '../styles/prism-a11y-dark.css';

import { ThemeProvider } from '../components/Theme/ThemeContext';
import Toggle from '../components/Theme/ThemeToggle';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider>
    <div className="absolute right-0 top-0 mr-4 mt-4 md:mr-6 md:mt-6">
      <Toggle />
    </div>

    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
