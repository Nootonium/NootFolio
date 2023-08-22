import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enHero from './locales/en/hero.json';
import frHero from './locales/fr/hero.json';
import enAbout from './locales/en/about.json';
import frAbout from './locales/fr/about.json';
import enNavbar from './locales/en/navbar.json';
import frNavbar from './locales/fr/navbar.json';
import enProjects from './locales/en/projects.json';
import frProjects from './locales/fr/projects.json';
import enProjectCard from './locales/en/projectCard.json';
import frProjectCard from './locales/fr/projectCard.json';
import enSkills from './locales/en/skills.json';
import frSkills from './locales/fr/skills.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      navbar: enNavbar,
      hero: enHero,
      about: enAbout,
      projects: enProjects,
      projectCard: enProjectCard,
      skills: enSkills,
    },
    fr: {
      navbar: frNavbar,
      hero: frHero,
      about: frAbout,
      projects: frProjects,
      projectCard: frProjectCard,
      skills: frSkills,
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
