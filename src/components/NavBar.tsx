import {
  HomeIcon,
  IdentificationIcon,
  CommandLineIcon,
  BriefcaseIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';
import { useTheme } from '../hooks/ThemeContext';
import { NavButton } from './NavButton';
import { useTranslation } from 'react-i18next';

function NavBar({
  activeSection,
  openContact,
}: {
  activeSection: string;
  openContact: () => void;
}) {
  const { theme } = useTheme();
  const { t } = useTranslation('navbar');
  const navbarBGClasses = {
    light: 'bg-neutral-100 text-neutral-700',
    dark: 'bg-neutral-900 text-neutral-300',
    rainbow: '',
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    element.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <nav
      className={`fixed bottom-0 left-1/2 z-30 mb-6 flex -translate-x-1/2 flex-row rounded-md bg-opacity-70 pr-1 ${navbarBGClasses[theme]}`}
    >
      <NavButton
        Icon={HomeIcon}
        text={t('home')}
        isActive={activeSection == 'home'}
        onClick={() => scrollToSection('home')}
      />
      <NavButton
        Icon={IdentificationIcon}
        text={t('about')}
        isActive={activeSection == 'about'}
        onClick={() => scrollToSection('about')}
      />
      <NavButton
        Icon={BriefcaseIcon}
        text={t('projects')}
        isActive={activeSection == 'projects'}
        onClick={() => scrollToSection('projects')}
      />
      <NavButton
        Icon={CommandLineIcon}
        text={t('skills')}
        isActive={activeSection == 'skills'}
        onClick={() => scrollToSection('skills')}
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
