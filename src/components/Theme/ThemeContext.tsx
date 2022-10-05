import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

const DEFAULT_THEME = 'dark';

type ITheme = 'dark' | 'light' | string;

interface IThemeProviderContext {
  theme: ITheme;
  setTheme: Dispatch<SetStateAction<ITheme>>;
}

export const ThemeContext = createContext<IThemeProviderContext>({
  theme: DEFAULT_THEME,
  setTheme: () => {},
});

export interface IThemeProviderProps {
  initialTheme?: ITheme;
  children: ReactNode;
}

const getInitialTheme = (): ITheme => {
  if (
    typeof window !== 'undefined' &&
    typeof window.localStorage !== 'undefined'
  ) {
    const storedPrefs = window.localStorage.getItem('color-theme');
    if (typeof storedPrefs === 'string') {
      return storedPrefs;
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
  const [theme, setTheme] = useState(DEFAULT_THEME);

  const rawSetTheme = (rawTheme: string) => {
    const root = window.document.documentElement;
    const isDark = rawTheme === 'dark';

    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(rawTheme);

    localStorage.setItem('color-theme', rawTheme);
  };

  useEffect(() => {
    if (typeof initialTheme === 'string') {
      setTheme(initialTheme);
      return;
    }
    setTheme(getInitialTheme());
  }, [initialTheme]);

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
