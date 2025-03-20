import {
  HomeIcon,
  IdentificationIcon,
  CommandLineIcon,
  BriefcaseIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/solid';
import { useTheme } from '../hooks/ThemeContext';
import { NavButton } from './NavButton';
import { useTranslation } from 'react-i18next';

function NavBar({
  activeSection,
  openContact,
  scrollToRef,
  refs,
}: {
  activeSection: string;
  openContact: () => void;
  scrollToRef: (ref: React.RefObject<HTMLElement>) => void;
  refs: {
    heroRef: React.RefObject<HTMLElement>;
    aboutRef: React.RefObject<HTMLElement>;
    journeyRef: React.RefObject<HTMLElement>;
    skillsRef: React.RefObject<HTMLElement>;
  };
}) {
  const { theme } = useTheme();
  const { t } = useTranslation('navbar');
  const navbarBGClasses = {
    light: 'bg-white text-black',
    dark: 'bg-black text-white',
    rainbow: '',
  };
  return (
    <nav
      className={`fixed bottom-0 left-1/2 z-30 mb-6 flex -translate-x-1/2 flex-row rounded-md bg-opacity-80 pr-1 ${navbarBGClasses[theme]}`}
    >
      <NavButton
        Icon={HomeIcon}
        text={t('home')}
        isActive={activeSection == 'home'}
        onClick={() => scrollToRef(refs.heroRef)}
      />
      <NavButton
        Icon={IdentificationIcon}
        text={t('about')}
        isActive={activeSection == 'about'}
        onClick={() => scrollToRef(refs.aboutRef)}
      />
      <NavButton
        Icon={BriefcaseIcon}
        text={t('journey')}
        isActive={activeSection == 'journey'}
        onClick={() => scrollToRef(refs.journeyRef)}
      />
      <NavButton
        Icon={CommandLineIcon}
        text={t('skills')}
        isActive={activeSection == 'skills'}
        onClick={() => scrollToRef(refs.skillsRef)}
      />
      <NavButton
        Icon={EnvelopeIcon}
        text={t('contact')}
        isActive={activeSection == 'contact'}
        onClick={() => openContact()}
      />
    </nav>
  );
}

export default NavBar;
