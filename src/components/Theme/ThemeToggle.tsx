import React from 'react';

import { FaSun, FaMoon } from 'react-icons/fa';

import { ThemeContext } from './ThemeContext';

const BUTTON_CLASSES = 'text-yellow-600 text-2xl cursor-pointer';

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div className="transition duration-500 ease-in-out rounded-full p-2 flex">
      <FaSun
        onClick={() => setTheme('light')}
        title="Turn the lights on"
        className={`${BUTTON_CLASSES} ${theme === 'light' ? 'disabled' : ''}`}
      />
      <FaMoon
        onClick={() => setTheme('dark')}
        title="Turn the lights off"
        className={`${BUTTON_CLASSES} ${theme === 'dark' ? 'disabled' : ''}`}
      />
    </div>
  );
};

export default Toggle;
