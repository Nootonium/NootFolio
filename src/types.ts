export type Theme = 'light' | 'dark' | 'rainbow';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: (newTheme: Theme) => void;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image_url?: string;
  tech_stack: string[];
  link: string;
  github: string;
}

export interface MessageData {
  name: string;
  email: string;
  message: string;
}
