import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../assets/starwars.css';
import skills from '../data/skills.json';
import { useTheme } from '../hooks/ThemeContext';
import CustomPopover from './CustomPopover';
import RankAccordion from './RankAccordion';
import { ArrowPathIcon } from '@heroicons/react/24/outline';

const numStars = 420; // Nice

interface Star {
  top: number;
  left: number;
}

function Skills({ active }: { active: boolean }) {
  const textRef = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [stars, setStars] = useState<Star[]>([]);
  const { theme } = useTheme();
  const { t } = useTranslation('skills');

  const skillbgClasses = {
    // spaces at the end are important dunnow why
    light: 'bg-white ',
    dark: 'bg-black ',
    rainbow: 'bg-rainbow-300',
  };

  const skilltextClasses = {
    light: 'text-black',
    dark: 'text-yellow-500',
    rainbow: 'text-rainbow-300',
  };

  const starClasses = {
    light: 'bg-black',
    dark: 'bg-yellow-100',
    rainbow: 'bg-rainbow-300',
  };

  const generateStars = () => {
    const starPositions = [];
    if (containerRef.current) {
      const y = containerRef.current.offsetWidth;
      const x = containerRef.current.offsetHeight;
      for (let i = 0; i < numStars; i++) {
        const randomX = Math.floor(Math.random() * x);
        const randomY = Math.floor(Math.random() * y);
        starPositions.push({ top: randomX, left: randomY });
      }
    }
    setStars(starPositions);
  };

  const resetAnimation = () => {
    //console.log('resetting animation');
    if (textRef.current) {
      textRef.current.classList.remove('crawl');
      void textRef.current.offsetWidth;
      textRef.current.classList.add('crawl');
    }
  };

  useEffect(() => {
    resetAnimation();
  }, [active]);

  useEffect(() => {
    generateStars();
    window.addEventListener('resize', generateStars);
    return () => {
      window.removeEventListener('resize', generateStars);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative flex h-screen w-screen snap-start justify-center overflow-hidden ${skillbgClasses[theme]}}`}
    >
      {stars.map((star, index) => (
        <div
          key={index}
          className={`absolute h-0.5 w-0.5 ${starClasses[theme]}`}
          style={{ top: `${star.top}px`, left: `${star.left}px` }}
        />
      ))}
      <div
        ref={textRef}
        className={`crawl max-w-xs px-8 font-JetBrainsMono text-lg sm:max-w-md sm:text-2xl ${skilltextClasses[theme]}`}
      >
        <h1 className='text-center text-4xl tracking-tighter sm:text-6xl'>{t('title')}</h1>
        <br />
        {Object.keys(skills).map((key: string) => {
          const skillKey = key as keyof typeof skills;
          return (
            <div key={key}>
              <h1 className='text-center text-3xl tracking-tighter sm:text-5xl'>
                {t(`categories.${skillKey}`)}
              </h1>
              <div className='h-2' />
              {skills[skillKey].map((skill, index) => (
                <div key={index} className='flex flex-wrap font-OpenSans'>
                  <span className='text-left'>{t(`skills.${skill.id}`)}</span>
                  <span className='flex-grow' />
                  <span className='text-right'>{t(`ranks.${skill.level}`)}</span>
                </div>
              ))}
              <div className='h-4' />
            </div>
          );
        })}
      </div>
      <button
        data-tip='refresh'
        className='tooltip tooltip-left tooltip-info absolute right-8 top-24'
        onClick={() => resetAnimation()}
      >
        <ArrowPathIcon className={`w-8 ${skilltextClasses[theme]}`} />
      </button>
      <CustomPopover>
        <RankAccordion />
      </CustomPopover>
    </div>
  );
}

export default Skills;
