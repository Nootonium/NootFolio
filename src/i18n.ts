import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enHero from './locales/en/hero.json';
import frHero from './locales/fr/hero.json';
import esHero from './locales/es/hero.json';
import enAbout from './locales/en/about.json';
import frAbout from './locales/fr/about.json';
import esAbout from './locales/es/about.json';
import enNavbar from './locales/en/navbar.json';
import frNavbar from './locales/fr/navbar.json';
import esNavbar from './locales/es/navbar.json';
import enProjects from './locales/en/projects.json';
import frProjects from './locales/fr/projects.json';
import esProjects from './locales/es/projects.json';
import enProjectCard from './locales/en/projectCard.json';
import frProjectCard from './locales/fr/projectCard.json';
import esProjectCard from './locales/es/projectCard.json';
import enSkills from './locales/en/skills.json';
import frSkills from './locales/fr/skills.json';
import esSkills from './locales/es/skills.json';
import enRanks from './locales/en/ranks.json';
import frRanks from './locales/fr/ranks.json';
import esRanks from './locales/es/ranks.json';
import enJourney from './locales/en/journey.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      navbar: enNavbar,
      hero: enHero,
      about: enAbout,
      projects: enProjects,
      projectCard: enProjectCard,
      skills: enSkills,
      ranks: enRanks,
      journey: enJourney,
    },
    fr: {
      navbar: frNavbar,
      hero: frHero,
      about: frAbout,
      projects: frProjects,
      projectCard: frProjectCard,
      skills: frSkills,
      ranks: frRanks,
    },
    es: {
      navbar: esNavbar,
      hero: esHero,
      about: esAbout,
      projects: esProjects,
      projectCard: esProjectCard,
      skills: esSkills,
      ranks: esRanks,
    },
  },
  lng: 'en',
  fallbackLng: 'fr',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
