export type Theme = 'light' | 'dark' | 'rainbow';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: (newTheme: Theme) => void;
}
