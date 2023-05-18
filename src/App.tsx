import { Tab } from '@headlessui/react';

import { useTheme } from './components/ThemeContext';
import './assets/rainbow-theme.css';

import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const { theme } = useTheme();

  const themeClasses = {
    light: '',
    dark: 'dark',
    rainbow: 'rainbow-theme',
  };

  return (
    <>
      <ThemeToggle />
      <Tab.Group vertical as='div' className={`relative bg-${themeClasses[theme]}`}>
        <Sidebar />
        <Tab.Panels className='pl-44'>
          <Tab.Panel style={{ minHeight: '100vh' }}>
            <Hero />
          </Tab.Panel>
          <Tab.Panel style={{ minHeight: '100vh' }}>
            <About />
          </Tab.Panel>
          <Tab.Panel style={{ minHeight: '100vh' }}>
            <Skills />
          </Tab.Panel>
          <Tab.Panel style={{ minHeight: '100vh' }}>
            <Projects />
          </Tab.Panel>
          <Tab.Panel style={{ minHeight: '100vh' }}>
            <Contact />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  );
}
export default App;
