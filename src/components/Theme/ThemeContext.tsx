import React, { ReactNode } from 'react';

const DEFAULT_THEME = 'dark';

type ITheme = 'dark' | 'light';

interface IThemeProviderContext {
  theme: ITheme;
  setTheme: React.Dispatch<React.SetStateAction<ITheme>>;
}

// @ts-ignore
export const ThemeContext = React.createContext<IThemeProviderContext>();

export interface IThemeProviderProps {
  initialTheme?: ITheme;
  children: ReactNode;
}

const getInitialTheme = (): ITheme => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('color-theme');
    if (typeof storedPrefs === 'string') {
      return storedPrefs as ITheme;
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
    if (userMedia.matches) {
      return 'dark';
    }
  }

  return DEFAULT_THEME;
};

export const ThemeProvider = ({
  initialTheme,
  children,
}: IThemeProviderProps) => {
  const [theme, setTheme] = React.useState(getInitialTheme);

  const rawSetTheme = (rawTheme: string) => {
    const root = window.document.documentElement;
    const isDark = rawTheme === 'dark';

    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(rawTheme);

    localStorage.setItem('color-theme', rawTheme);
  };

  if (initialTheme) {
    rawSetTheme(initialTheme);
  }

  React.useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
