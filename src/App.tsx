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
      <Sidebar />
      <div className='snap snap-y snap-mandatory scroll-smooth'>
        <div className='h-screen snap-start'>test1</div>
        <div className='h-screen snap-start'>test2</div>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
export default App;
