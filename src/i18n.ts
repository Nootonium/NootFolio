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
import enSkills from './locales/en/skills.json';
import frSkills from './locales/fr/skills.json';
import esSkills from './locales/es/skills.json';
import enRanks from './locales/en/ranks.json';
import frRanks from './locales/fr/ranks.json';
import esRanks from './locales/es/ranks.json';
import endescriptions from './locales/en/descriptions.json';
import frdescriptions from './locales/fr/descriptions.json';
import esdescriptions from './locales/es/descriptions.json';
import enlabels from './locales/en/labels.json';
import frlabels from './locales/fr/labels.json';
import eslabels from './locales/es/labels.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      navbar: enNavbar,
      hero: enHero,
      about: enAbout,
      skills: enSkills,
      ranks: enRanks,
      descriptions: endescriptions,
      labels: enlabels,
    },
    fr: {
      navbar: frNavbar,
      hero: frHero,
      about: frAbout,
      skills: frSkills,
      ranks: frRanks,
      descriptions: frdescriptions,
      labels: frlabels,
    },
    es: {
      navbar: esNavbar,
      hero: esHero,
      about: esAbout,
      skills: esSkills,
      ranks: esRanks,
      descriptions: esdescriptions,
      labels: eslabels,
    },
  },
  lng: 'en',
  fallbackLng: 'fr',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
