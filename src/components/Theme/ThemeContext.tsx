import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { isBrowser } from '../../utils/environment';
import { AppConfig } from '../../AppConfig';

const DARK = 'dark';
const LIGHT = 'light';

export type ThemeOption = typeof DARK | typeof LIGHT;

const defaultTheme = (AppConfig.defaultTheme ?? LIGHT) as ThemeOption;

interface IThemeProviderContext {
  theme: ThemeOption;
  setTheme: Dispatch<SetStateAction<ThemeOption>>;
}

export const ThemeContext = createContext<IThemeProviderContext>({
  theme: defaultTheme,
  setTheme: () => {},
});

export interface IThemeProviderProps {
  initialTheme?: ThemeOption;
  children: ReactNode;
}

const getInitialTheme = (): ThemeOption => {
  if (isBrowser && typeof window.localStorage !== 'undefined') {
    const storedPrefs = window.localStorage.getItem(
      'color-theme'
    ) as ThemeOption | null;

    if (storedPrefs !== null) {
      return storedPrefs;
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
    if (userMedia.matches) {
      return 'dark';
    }
  }

  return defaultTheme;
};

export const ThemeProvider = ({
  initialTheme,
  children,
}: IThemeProviderProps): JSX.Element => {
  const [theme, setTheme] = useState(getInitialTheme());

  const rawSetTheme = (rawTheme: ThemeOption): void => {
    const root = window.document.documentElement;
    const isDark = rawTheme === DARK;

    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(rawTheme);

    localStorage.setItem('color-theme', rawTheme);
  };

  useEffect(() => {
    if (typeof initialTheme !== 'undefined') {
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
