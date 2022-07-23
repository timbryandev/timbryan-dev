import React from 'react';

import { FaSun, FaMoon } from 'react-icons/fa';

import { ThemeContext } from './ThemeContext';

const BUTTON_CLASSES = 'text-yellow-600 text-2xl ml-2';

const ThemeToggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <button
      className="transition duration-500 ease-in-out rounded-full p-2 flex"
      onClick={() => {
        setTheme(theme === 'light' ? 'dark' : 'light');
      }}
    >
      <FaSun
        title="Turn the lights on"
        className={`${BUTTON_CLASSES} ${theme === 'light' ? 'disabled' : ''}`}
      />
      <FaMoon
        title="Turn the lights off"
        className={`${BUTTON_CLASSES} ${theme === 'dark' ? 'disabled' : ''}`}
      />
    </button>
  );
};

export default ThemeToggle;
