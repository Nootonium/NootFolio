import { useTheme } from '../hooks/ThemeContext';
import { Menu, Transition } from '@headlessui/react';

function ThemeToggle() {
  const { toggleTheme } = useTheme();

  return (
    <Menu as='div' className='relative inline-block text-left'>
      <Menu.Button className=''>button</Menu.Button>
      <Transition
        enter='transition duration-100 ease-out'
        enterFrom='transform scale-95 opacity-0'
        enterTo='transform scale-100 opacity-100'
        leave='transition duration-75 ease-out'
        leaveFrom='transform scale-100 opacity-100'
        leaveTo='transform scale-95 opacity-0'
      >
        <Menu.Items className='' static>
          <Menu.Item>
            <button
              className='rounded bg-blue-500 px-2 py-1 text-white'
              onClick={() => toggleTheme('light')}
            >
              Light
            </button>
          </Menu.Item>
          <Menu.Item>
            <button
              className='rounded bg-blue-500 px-2 py-1 text-white'
              onClick={() => toggleTheme('dark')}
            >
              Dark
            </button>
          </Menu.Item>
          <Menu.Item>
            <button
              className='rounded bg-blue-500 px-2 py-1 text-white'
              onClick={() => toggleTheme('rainbow')}
            >
              Rainbow
            </button>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
export default ThemeToggle;
