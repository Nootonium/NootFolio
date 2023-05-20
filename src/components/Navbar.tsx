import {
  HomeIcon,
  IdentificationIcon,
  CommandLineIcon,
  BriefcaseIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';
import { useTheme } from './ThemeContext';

function NavButton({ Icon, text }: { Icon: any; text: string }) {
  const { theme } = useTheme();
  const buttonClasses = {
    light: 'bg-neutral-100 hover:bg-gray-600',
    dark: 'bg-gray-900 text-gray-300 hover:bg-gray-700',
    rainbow: 'bg-rainbow text-white hover:bg-gradient-to-r hover:from-red-600 hover:to-blue-600',
  };

  return (
    <button
      className={`flex w-auto items-center justify-start space-x-2 rounded-lg px-2 py-1 md:w-28 ${buttonClasses[theme]}`}
    >
      <Icon className='h-8 flex-shrink-0' />
      <span className='sr-only text-center text-xs font-semibold md:not-sr-only'>{text}</span>
    </button>
  );
}

function Navbar() {
  const { theme } = useTheme();

  const buttonClasses = {
    light: 'bg-neutral-100 hover:bg-gray-600',
    dark: 'bg-gray-900 text-gray-300 hover:bg-gray-700',
    rainbow: 'bg-rainbow text-white hover:bg-gradient-to-r hover:from-red-600 hover:to-blue-600',
  };

  return (
    <div className='fixed bottom-0 left-1/2 z-20 mb-4 flex -translate-x-1/2 flex-row space-x-2 rounded-lg bg-gray-800 p-2 shadow-md'>
      <NavButton Icon={HomeIcon} text='Home' />
      <NavButton Icon={IdentificationIcon} text='About' />
      <NavButton Icon={BriefcaseIcon} text='Projects' />
      <NavButton Icon={CommandLineIcon} text='Skills' />
      <NavButton Icon={EnvelopeIcon} text='Contact' />
    </div>
  );
}

export default Navbar;
