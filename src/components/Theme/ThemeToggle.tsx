import { useContext } from 'react';

import { FaSun, FaMoon } from 'react-icons/fa';

import { ThemeContext } from './ThemeContext';

const ThemeToggle = (): JSX.Element => {
  const { theme, setTheme } = useContext(ThemeContext);

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
