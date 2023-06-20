import {
  HomeIcon,
  IdentificationIcon,
  CommandLineIcon,
  BriefcaseIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';
import { useTheme } from '../hooks/ThemeContext';

function NavButton({
  Icon,
  text,
  isActive,
  onClick,
}: {
  Icon: any; // TODO: Fix any
  text: string;
  isActive: boolean;
  onClick: () => void;
}) {
  const { theme } = useTheme();
  const activeClasses = {
    light: 'text-black',
    dark: 'text-white',
    rainbow: 'bg-rainbow-300',
  };

  const activeSection = isActive ? activeClasses[theme] : '';

  return (
    <button
      data-tip={text}
      onClick={onClick}
      className={`tooltip tooltip-info flex w-auto flex-row items-center justify-center rounded-md p-2 sm:w-32  ${activeSection}`}
    >
      <Icon className='h-8 flex-shrink-0 sm:mr-1' />
      <span className='sr-only text-center font-JetBrainsMono text-lg sm:not-sr-only'>{text}</span>
    </button>
  );
}

function NavBar({
  activeSection,
  openContact,
}: {
  activeSection: string;
  openContact: () => void;
}) {
  const { theme } = useTheme();
  const navbarBGClasses = {
    light: 'bg-neutral-100 text-neutral-600',
    dark: 'bg-neutral-900 text-neutral-400',
    rainbow: '',
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    element.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div
      className={`fixed bottom-0 left-1/2 z-20 mb-6 flex -translate-x-1/2 flex-row rounded-md bg-opacity-70 pr-1 ${navbarBGClasses[theme]}`}
    >
      <NavButton
        Icon={HomeIcon}
        text='Home'
        isActive={activeSection == 'home'}
        onClick={() => scrollToSection('home')}
      />
      <NavButton
        Icon={IdentificationIcon}
        text='About'
        isActive={activeSection == 'about'}
        onClick={() => scrollToSection('about')}
      />
      <NavButton
        Icon={BriefcaseIcon}
        text='Projects'
        isActive={activeSection == 'projects'}
        onClick={() => scrollToSection('projects')}
      />
      <NavButton
        Icon={CommandLineIcon}
        text='Skills'
        isActive={activeSection == 'skills'}
        onClick={() => scrollToSection('skills')}
      />
      <NavButton
        Icon={EnvelopeIcon}
        text='Contact'
        isActive={activeSection == 'contact'}
        onClick={() => openContact()}
      />
    </div>
  );
}

export default NavBar;
