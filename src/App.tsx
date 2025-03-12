import { RefObject, useRef, useState } from 'react';
import './assets/rainbow-theme.css';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Journey from './components/Journey';
import NavBar from './components/NavBar';
import useScrollSpy from './hooks/useScrollSpy';
import ThemeToggle from './components/ThemeToggle';
import background from './assets/pinguBg.webm';
import LanguageSelector from './components/LanguageSelector';

function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const journeyRef = useRef(null);
  const skillsRef = useRef(null);
  const activeSection = useScrollSpy([heroRef, aboutRef, journeyRef, skillsRef]);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const onOpen = () => setIsContactOpen(true);
  const onClose = () => setIsContactOpen(false);

  const scrollToRef = (ref: RefObject<HTMLElement>) => {
    const element = ref.current;
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.error('Element not found');
    }
  };

  return (
    <>
      <video
        autoPlay
        loop
        muted
        playsInline
        className='fixed inset-0 -z-10 h-full w-full object-cover'
        aria-hidden='true'
      >
        <source src={background} type='video/webm' />
        {`Sorry, your browser doesn't support embedded videos.`}
      </video>
      <header className='relative z-20'>
        <NavBar
          activeSection={activeSection}
          openContact={onOpen}
          scrollToRef={scrollToRef}
          refs={{ heroRef, aboutRef, journeyRef, skillsRef }}
        />
        <div className='absolute right-4 top-4 flex gap-2'>
          <ThemeToggle />
          <LanguageSelector />
        </div>
      </header>
      <main className='relative z-10'>
        <section ref={heroRef} id='home'>
          <Hero openContact={onOpen} />
        </section>
        <section ref={aboutRef} id='about'>
          <About />
        </section>
        <section ref={journeyRef} id='journey'>
          <Journey />
        </section>
        <section ref={skillsRef} id='skills'>
          <Skills active={activeSection === 'skills'} />
        </section>
      </main>
      <Contact isContactOpen={isContactOpen} onClose={onClose} />
    </>
  );
}
export default App;
