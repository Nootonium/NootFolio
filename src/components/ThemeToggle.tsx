import { useState } from 'react';
import { useTheme } from '../hooks/ThemeContext';
import { Switch } from '@headlessui/react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

function ThemeToggle() {
  const { toggleTheme, theme } = useTheme();
  const [enabled, setEnabled] = useState(true);
  toggleTheme(enabled ? 'dark' : 'light');

  return (
    <div className='absolute right-6 top-6'>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className='relative z-20 inline-flex h-6 w-12 items-center rounded-full ring-neutral-400 ui-checked:bg-neutral-600 ui-not-checked:bg-neutral-200 ui-not-checked:ring-2'
      >
        <span className='sr-only'>Enable notifications</span>
        <span className='inline-block h-5 w-5 transform rounded-full bg-white transition ui-checked:translate-x-6 ui-not-checked:translate-x-1'>
          {enabled ? (
            <MoonIcon className='h-5 w-5 text-neutral-500' />
          ) : (
            <SunIcon className='h-5 w-5 text-yellow-500' />
          )}
        </span>
      </Switch>
    </div>
  );
}
export default ThemeToggle;
