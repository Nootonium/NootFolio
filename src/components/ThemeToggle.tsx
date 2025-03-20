import { useEffect, useState } from 'react';
import { useTheme } from '../hooks/ThemeContext';
import { Switch } from '@headlessui/react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

function ThemeToggle() {
  const { toggleTheme, theme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(theme === 'dark');

  useEffect(() => {
    toggleTheme(isDarkMode ? 'dark' : 'light');
  }, [isDarkMode, toggleTheme]);

  return (
    <div data-tip='theme' className='tooltip tooltip-left tooltip-info fixed right-6 top-6'>
      <Switch
        checked={isDarkMode}
        onChange={() => setIsDarkMode(!isDarkMode)}
        className={`relative z-20 inline-flex h-6 w-12 items-center rounded-full ui-checked:bg-neutral-600 ui-not-checked:bg-neutral-200`}
      >
        <span className='sr-only'>Theme</span>
        <span className='inline-block h-5 w-5 transform rounded-full bg-white transition ui-checked:translate-x-6 ui-not-checked:translate-x-1'>
          {isDarkMode ? (
            <MoonIcon className='h-5 w-5 text-neutral-400' />
          ) : (
            <SunIcon className='h-5 w-5 text-yellow-500' />
          )}
        </span>
      </Switch>
    </div>
  );
}
export default ThemeToggle;
