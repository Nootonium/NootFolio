import { useTheme } from './ThemeContext';

function ThemeToggle() {
  const { toggleTheme } = useTheme();

  return (
    <div className='flex space-x-2'>
      <button
        className='rounded bg-blue-500 px-2 py-1 text-white'
        onClick={() => toggleTheme('light')}
      >
        Light
      </button>
      <button
        className='rounded bg-blue-500 px-2 py-1 text-white'
        onClick={() => toggleTheme('dark')}
      >
        Dark
      </button>
      <button
        className='rounded bg-blue-500 px-2 py-1 text-white'
        onClick={() => toggleTheme('rainbow')}
      >
        Rainbow
      </button>
    </div>
  );
}
export default ThemeToggle;
