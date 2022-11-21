import { useContext, useEffect, useRef } from 'react';

import { FaSun, FaMoon } from 'react-icons/fa';

import { ThemeContext, ThemeOption } from './ThemeContext';

const createStylesheetRef = (theme: ThemeOption): string =>
  `https://cdn.jsdelivr.net/npm/water.css@2/out/${theme}.css`;

const ThemeToggle = (): JSX.Element => {
  const { theme, setTheme } = useContext(ThemeContext);
  const linkStyle = useRef<HTMLLinkElement | null>(null);

  const setLinkStyleRef = (): void => {
    linkStyle.current = document.head.querySelector('#waterCssStylesheet');
  };

  const updateStyleLink = (): void => {
    if (linkStyle.current === null) return;

    linkStyle.current.href = createStylesheetRef(theme);
  };

  useEffect(setLinkStyleRef, []);
  useEffect(updateStyleLink, [theme]);

  return (
    <button
      className="toggle-theme"
      onClick={() => {
        setTheme(theme === 'light' ? 'dark' : 'light');
      }}
    >
      <FaSun
        title="Turn the lights on"
        className={`${theme === 'light' ? '' : 'disabled'}`}
        color="var(--yellow-dark)"
      />{' '}
      <FaMoon
        title="Turn the lights off"
        className={`${theme === 'dark' ? '' : 'disabled'}`}
        color="var(--orange)"
      />
    </button>
  );
};

export default ThemeToggle;
