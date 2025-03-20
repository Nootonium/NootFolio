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

interface BaseJourneyItem {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'active' | 'in-progress' | 'planned';
  technologies: string[];
  start_date: string; // ISO 8601
  end_date?: string;
  backdrop?: string;
}

export interface ExperienceItem extends BaseJourneyItem {
  type: 'experience';
  experienceType: 'full-time' | 'internship' | 'contract' | 'volunteer';
  company: string;
  location?: string;
  links?: {
    company?: string;
    linkedin?: string;
  };
  keyContributions?: string[];
}

export interface ProjectItem extends BaseJourneyItem {
  type: 'project';
  projectType: 'personal' | 'open-source' | 'freelance' | 'client' | 'hackathon';
  links?: {
    repo?: string;
    live?: string;
    privateRepo?: boolean;
    coldStorage?: boolean;
  };
}

export type JourneyItem = ExperienceItem | ProjectItem;

export interface JourneyInterface {
  items: JourneyItem[];
}

export interface Event {
  type: string;
  data: string;
}
