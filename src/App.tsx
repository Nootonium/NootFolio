import { useTheme } from './components/ThemeContext';
import './assets/rainbow-theme.css';
import ScrollSpy from 'react-ui-scrollspy';

import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  const { theme } = useTheme();

  const themeClasses = {
    light: '',
    dark: 'dark',
    rainbow: 'rainbow-theme',
  };

  return (
    <>
      <img
        className='absolute left-0 top-0 -z-10 h-full w-full object-cover'
        src='src/assets/DRy1.gif'
      ></img>
      <Navbar />
      <div className='h-screen snap-y snap-mandatory overflow-y-scroll'>
        <ScrollSpy>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </ScrollSpy>
      </div>
    </>
  );
}
export default App;
