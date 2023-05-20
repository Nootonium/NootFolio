import {
  HomeIcon,
  IdentificationIcon,
  CommandLineIcon,
  BriefcaseIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';
import { useTheme } from './ThemeContext';

function Sidebar() {
  const { theme } = useTheme();

  const buttonClasses = {
    light: 'bg-neutral-100 hover:bg-gray-600',
    dark: 'bg-gray-900 text-gray-300 hover:bg-gray-700',
    rainbow: 'bg-rainbow text-white hover:bg-gradient-to-r hover:from-red-600 hover:to-blue-600',
  };

  return (
    <div className='fixed left-8 top-1/3 z-10 flex w-min flex-col space-y-2 rounded-lg bg-gray-800 p-2 shadow-md'>
      <button
        className={`flex w-full items-center justify-start space-x-2 rounded-lg px-4 py-2 ${buttonClasses[theme]}`}
        data-to-scrollspy-id='home'
      >
        <HomeIcon className='h-8' />
        <span className='sr-only font-semibold md:not-sr-only'>Home</span>
      </button>
      <button
        className={`flex w-full items-center justify-start space-x-2 rounded-lg px-4 py-2 ${buttonClasses[theme]}`}
        data-to-scrollspy-id='about'
      >
        <IdentificationIcon className='h-8' />
        <span className='sr-only md:not-sr-only'>About</span>
      </button>
      <button
        className={`flex w-full items-center justify-start space-x-2 rounded-lg px-4 py-2 ${buttonClasses[theme]}`}
      >
        <BriefcaseIcon className='h-8' />
        <span className='sr-only md:not-sr-only'>Projects</span>
      </button>
      <button
        className={`flex w-full items-center justify-start space-x-2 rounded-lg px-4 py-2 ${buttonClasses[theme]}`}
      >
        <CommandLineIcon className='h-8' />
        <span className='sr-only md:not-sr-only'>Skills</span>
      </button>
      <button
        className={`flex w-full items-center justify-start space-x-2 rounded-lg px-4 py-2 ${buttonClasses[theme]}`}
      >
        <EnvelopeIcon className='h-8' />
        <span className='sr-only md:not-sr-only'>Contact</span>
      </button>
    </div>
  );
}

export default Sidebar;
