import { useContext } from 'react';

import { FaSun, FaMoon } from 'react-icons/fa';

import { ThemeContext } from './ThemeContext';

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={() => {
        setTheme(theme === 'light' ? 'dark' : 'light');
      }}
    >
      <FaSun
        title="Turn the lights on"
        className={`${theme === 'light' ? 'disabled' : ''}`}
      />
      <FaMoon
        title="Turn the lights off"
        className={`${theme === 'dark' ? 'disabled' : ''}`}
      />
    </button>
  );
};

export default ThemeToggle;
