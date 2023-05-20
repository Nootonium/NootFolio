import { useTheme } from './components/ThemeContext';
import './assets/rainbow-theme.css';

import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

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
      <div className='h-screen snap-y snap-mandatory overflow-y-scroll'>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </>
  );
}
export default App;
