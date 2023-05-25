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
  Icon: any;
  text: string;
  isActive?: boolean;
  onClick: () => void;
}) {
  const { theme } = useTheme();
  const buttonClasses = {
    light: '',
    dark: 'bg-gray-900 text-gray-300 hover:bg-gray-700',
    rainbow: 'bg-rainbow text-white hover:bg-gradient-to-r hover:from-red-600 hover:to-blue-600',
  };

  const activeSection = isActive ? 'text-white' : '';

  return (
    <button
      data-tip={text}
      onClick={onClick}
      className={`tooltip mx-1 flex w-auto flex-row items-center justify-center py-2 sm:w-28 ${buttonClasses[theme]} ${activeSection}`}
    >
      <Icon className='h-8 flex-shrink-0 sm:mr-1' />
      <span className='sr-only text-center text-lg sm:not-sr-only'>{text}</span>
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
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    element.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className='fixed bottom-0 left-1/2 z-20 mb-4 flex -translate-x-1/2 flex-row rounded-md bg-dark-200 px-2'>
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
        onClick={openContact}
      />
    </div>
  );
}

export default NavBar;
