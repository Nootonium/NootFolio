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
        className={`data-checked:bg-stone-600 not-data-checked:bg-stone-200 relative z-20 inline-flex h-6 w-12 items-center rounded-full`}
      >
        <span className='sr-only'>Theme</span>
        <span className='data-checked:translate-x-6 not-data-checked:translate-x-1 inline-block h-5 w-5 transform rounded-full'>
          {isDarkMode ? (
            <MoonIcon className='h-5 w-5 text-stone-400' />
          ) : (
            <SunIcon className='h-5 w-5 text-yellow-500' />
          )}
        </span>
      </Switch>
    </div>
  );
}
export default ThemeToggle;
