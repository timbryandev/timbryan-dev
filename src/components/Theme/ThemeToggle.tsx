import React from 'react';

import { FaSun, FaMoon } from 'react-icons/fa';

import { ThemeContext } from './ThemeContext';

const BUTTON_CLASSES = 'text-yellow-600 text-2xl cursor-pointer';

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div className="transition duration-500 ease-in-out rounded-full p-2">
      {theme === 'dark' ? (
        <FaSun
          onClick={() => setTheme('light')}
          className={BUTTON_CLASSES}
          title="Turn the lights on"
        />
      ) : (
        <FaMoon
          onClick={() => setTheme('dark')}
          className={BUTTON_CLASSES}
          title="Turn the lights off"
        />
      )}
    </div>
  );
};

export default Toggle;
