import {
  HomeIcon,
  IdentificationIcon,
  CommandLineIcon,
  BriefcaseIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';
import { useTheme } from '../hooks/ThemeContext';

function NavButton({ Icon, text }: { Icon: any; text: string }) {
  const { theme } = useTheme();
  const buttonClasses = {
    light: '',
    dark: 'bg-gray-900 text-gray-300 hover:bg-gray-700',
    rainbow: 'bg-rainbow text-white hover:bg-gradient-to-r hover:from-red-600 hover:to-blue-600',
  };

  return (
    <button
      data-tip={text}
      className={`tooltip mx-2 flex w-auto flex-row items-center justify-start py-2 sm:w-28 ${buttonClasses[theme]}`}
    >
      <Icon className='h-8 flex-shrink-0' />
      <span className='sr-only text-center text-lg sm:not-sr-only'>{text}</span>
    </button>
  );
}

function Navbar({ activeSection }) {
  return (
    <div className='fixed bottom-0 left-1/2 z-20 mb-4 flex -translate-x-1/2 flex-row rounded-md bg-dark-100 shadow-md'>
      <div className='btm-nav'>
        <NavButton Icon={HomeIcon} text='Home' />
        <NavButton Icon={IdentificationIcon} text='About' />
        <NavButton Icon={BriefcaseIcon} text='Projects' />
        <NavButton Icon={CommandLineIcon} text='Skills' />
        <NavButton Icon={EnvelopeIcon} text='Contact' />
        {activeSection}
      </div>
    </div>
  );
}

export default Navbar;
