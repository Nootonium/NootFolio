import { ReactNode, useState } from 'react';
import { ThemeContext } from './ThemeContext';
import { Theme } from '../types';

function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export default ThemeProvider;
