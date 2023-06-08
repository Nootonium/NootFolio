import { Popover, Transition } from '@headlessui/react';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import { ReactNode } from 'react';
import { useTheme } from '../hooks/ThemeContext';

interface CustomPopoverProps {
  children: ReactNode;
}

export default function CustomPopover({ children }: CustomPopoverProps) {
  const { theme } = useTheme();

  const popoverIconClasses = {
    light: 'bg-white text-black',
    dark: 'text-yellow-500',
    rainbow: 'bg-rainbow-300',
  };

  const popoverPanelClasses = {
    light: 'bg-white text-black border-black border-2 border-dashed border-inset rounded-sm',
    dark: 'bg-black text-yellow-500 border-yellow-500 border-2 border-dashed border-inset rounded-sm',
    rainbow: 'bg-rainbow-300',
  };

  return (
    <Popover className='absolute right-8 top-16'>
      <Popover.Button>
        <InformationCircleIcon
          className={`w-8 ${popoverIconClasses[theme]}`}
        ></InformationCircleIcon>
      </Popover.Button>
      <Transition
        enter='transition transform duration-200'
        enterFrom='translate-x-full opacity-0'
        enterTo='translate-x-0 opacity-100'
        leave='transition transform duration-200'
        leaveFrom='translate-x-0 opacity-100'
        leaveTo='translate-x-full opacity-0'
      >
        <Popover.Panel
          className={`absolute right-0 z-30 w-60 max-w-sm ${popoverPanelClasses[theme]}`}
        >
          {children}
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
