import { useRef, useState } from 'react';
import './assets/rainbow-theme.css';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import useScrollSpy from './hooks/useScrollSpy';
import ThemeToggle from './components/ThemeToggle';
import background from './assets/pinguBg.webm';
import LanguageSelector from './components/LanguageSelector';

function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const activeSection = useScrollSpy([heroRef, aboutRef, projectsRef, skillsRef]);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const onOpen = () => setIsContactOpen(true);
  const onClose = () => setIsContactOpen(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (!element) {
      console.error(`Element with id ${id} not found`);
    }
  };

  return (
    <>
      <video
        autoPlay
        loop
        muted
        playsInline
        className='absolute left-0 top-0 -z-10 h-full w-full object-cover'
      >
        <source src={background} type='video/webm' />
        {`Sorry, your browser doesn't support embedded videos.`}
      </video>
      <NavBar
        activeSection={activeSection}
        openContact={onOpen}
        scrollToSection={scrollToSection}
      />
      <div className='h-screen w-screen snap-none overflow-x-hidden md:snap-y md:snap-proximity'>
        <section ref={heroRef} id='home'>
          <Hero openContact={onOpen} />
        </section>
        <section ref={aboutRef} id='about'>
          <About />
        </section>
        <section ref={projectsRef} id='projects'>
          <Projects />
        </section>
        <section ref={skillsRef} id='skills'>
          <Skills active={activeSection == 'skills'} />
        </section>
      </div>
      <Contact isContactOpen={isContactOpen} onClose={onClose} />
      <ThemeToggle />
      <LanguageSelector />
    </>
  );
}
export default App;
