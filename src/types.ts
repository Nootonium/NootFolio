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
  motivation: string;
}

export interface MessageData {
  name: string;
  email: string;
  message: string;
}

export type JourneyType = 'experience' | 'project' | 'current' | 'planned';

export interface JourneyItem {
  id: string;
  type: JourneyType;
  title: string;
  description: string;
  technologies: string[];
  status: 'completed' | 'active' | 'in-progress' | 'planned';
  links: {
    company?: string;
    repo?: string;
    live?: string;
  };
  start_date: string; // ISO 8601
  end_date?: string;
}

export interface JourneyInterface {
  items: JourneyItem[];
}
