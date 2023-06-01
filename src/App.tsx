import './assets/rainbow-theme.css';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import useScrollSpy from './hooks/useScrollSpy';
import { useRef, useState } from 'react';

function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const activeSection = useScrollSpy([heroRef, aboutRef, projectsRef, skillsRef]);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const onOpen = () => setIsContactOpen(true);
  const onClose = () => setIsContactOpen(false);

  return (
    <>
      <img
        className='absolute left-0 top-0 -z-10 h-full w-full object-cover'
        src='src/assets/DRy1.gif'
        alt='background'
      ></img>
      <div className='h-screen w-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll'>
        <section ref={heroRef} id='home'>
          <Hero />
        </section>
        <section ref={aboutRef} id='about'>
          <About />
        </section>
        <section ref={projectsRef} id='projects'>
          <Projects />
        </section>
        <section ref={skillsRef} id='skills'>
          <Skills />
        </section>
      </div>
      <Contact isContactOpen={isContactOpen} onClose={onClose} />
      <NavBar activeSection={activeSection} openContact={onOpen} />
    </>
  );
}
export default App;
