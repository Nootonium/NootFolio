import { Tab } from '@headlessui/react';
import { useTheme } from './ThemeContext';

function Sidebar() {
  const { theme } = useTheme();

  const tabClasses = {
    light: 'bg-neutral-100 text-white hover:bg-gray-600',
    dark: 'bg-gray-900 text-gray-300 hover:bg-gray-700',
    rainbow: 'bg-rainbow text-white hover:bg-gradient-to-r hover:from-red-600 hover:to-blue-600',
  };

  return (
    <>
      <Tab.List className='fixed left-8 top-1/3 w-32 flex-col space-y-2 rounded-lg bg-gray-800 p-4 shadow-md'>
        <Tab as='button' className={`w-full rounded-lg px-4 py-2 ${tabClasses[theme]}`}>
          Home
        </Tab>
        <Tab as='button' className={`w-full rounded-lg px-4 py-2 ${tabClasses[theme]}`}>
          About
        </Tab>
        <Tab as='button' className={`w-full rounded-lg px-4 py-2 ${tabClasses[theme]}`}>
          Skills
        </Tab>
        <Tab as='button' className={`w-full rounded-lg px-4 py-2 ${tabClasses[theme]}`}>
          Projects
        </Tab>
        <Tab as='button' className={`w-full rounded-lg px-4 py-2 ${tabClasses[theme]}`}>
          Contact
        </Tab>
      </Tab.List>
    </>
  );
}
export default Sidebar;
