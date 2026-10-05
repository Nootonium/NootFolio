import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  DocumentArrowDownIcon,
  PauseIcon,
  PlayIcon,
} from '@heroicons/react/24/outline';

import skills from '../data/skills.json';
import { useTheme } from '../hooks/ThemeContext';

interface Star {
  top: number;
  left: number;
  opacity: number;
  size: number;
}

function Skills({ active }: { active: boolean }) {
  const { theme } = useTheme();
  const { t } = useTranslation('skills');
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const stars = useMemo<Star[]>(
    () =>
      Array.from({ length: 220 }, () => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        opacity: 0.25 + Math.random() * 0.75,
        size: 1 + Math.random() * 2,
      })),
    [],
  );
  const scroll = (direction: 'left' | 'right') => {
    const slider = sliderRef.current;
    if (!slider) return;
    const amount = Math.min(slider.clientWidth * 0.8, 420);
    slider.scrollBy({
      left: direction === 'right' ? amount : -amount,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (!active || !isAnimating) return;
    const interval = window.setInterval(() => {
      const slider = sliderRef.current;
      if (!slider) return;
      const reachedEnd = slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 20;
      if (reachedEnd) {
        slider.scrollTo({
          left: 0,
          behavior: 'smooth',
        });
        return;
      }
      slider.scrollBy({
        left: Math.min(slider.clientWidth * 0.65, 360),
        behavior: 'smooth',
      });
    }, 2500);
    return () => window.clearInterval(interval);
  }, [active, isAnimating]);

  const themeClasses = {
    light: {
      background: 'bg-white',
      text: 'text-black',
      secondary: 'text-zinc-600',
      card: 'border-black/15 bg-white/80',
      star: 'bg-black',
    },
    dark: {
      background: 'bg-black',
      text: 'text-yellow-400',
      secondary: 'text-yellow-100/70',
      card: 'border-yellow-400/20 bg-black/70',
      star: 'bg-yellow-100',
    },
  };
  const classes = themeClasses[theme];

  return (
    <section
      className={`relative min-h-screen snap-start overflow-hidden ${classes.background} ${classes.text}`}
    >
      {/* Star field */}
      <div className='pointer-events-none absolute inset-0'>
        {stars.map((star, index) => (
          <span
            key={index}
            className={`absolute rounded-full ${classes.star}`}
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
            }}
          />
        ))}
      </div>
      <div className='relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-6 py-24 lg:px-10'>
        {/* Header */}
        <div className='mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between'>
          <div>
            <h1 className='font-JetBrainsMono text-5xl font-semibold tracking-tighter sm:text-7xl'>
              {t('title')}
            </h1>
            <p className={`font-OpenSans mt-4 max-w-2xl text-base sm:text-lg ${classes.secondary}`}>
              {t('description')}
            </p>
          </div>
          <a
            href='/Daniel-Lopez-CV.pdf'
            download
            className='font-JetBrainsMono inline-flex w-fit items-center gap-2 rounded-lg border border-current px-4 py-2 text-sm transition hover:scale-105'
          >
            <DocumentArrowDownIcon className='h-5 w-5' />
            {t('download_cv')}
          </a>
        </div>
        {/* Slider controls */}
        <div className='mb-4 flex items-center justify-between'>
          <button
            type='button'
            onClick={() => setIsAnimating(value => !value)}
            className='font-JetBrainsMono flex items-center gap-2 text-sm opacity-70 transition hover:opacity-100'
          >
            {isAnimating ? <PauseIcon className='h-5 w-5' /> : <PlayIcon className='h-5 w-5' />}
            {isAnimating ? t('stop_animation') : t('animate')}
          </button>
          <div className='flex gap-2'>
            <button
              type='button'
              aria-label={t('previous')}
              onClick={() => scroll('left')}
              className='rounded-full border border-current p-2 opacity-70 transition hover:opacity-100'
            >
              <ArrowLeftIcon className='h-5 w-5' />
            </button>
            <button
              type='button'
              aria-label={t('next')}
              onClick={() => scroll('right')}
              className='rounded-full border border-current p-2 opacity-70 transition hover:opacity-100'
            >
              <ArrowRightIcon className='h-5 w-5' />
            </button>
          </div>
        </div>
        {/* Skills slider */}
        <div
          ref={sliderRef}
          className='scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-5'
        >
          {skills.categories.map(category => (
            <article
              key={category.id}
              className={`min-h-64 min-w-[85%] snap-start rounded-xl border p-6 backdrop-blur-sm sm:min-w-88 ${classes.card}`}
            >
              <h2 className='font-JetBrainsMono mb-6 text-xl font-semibold tracking-tight uppercase'>
                {t(`categories.${category.id}`)}
              </h2>
              <div className='flex flex-wrap gap-2'>
                {category.skills.map(skillId => {
                  const skill = skills.catalog[skillId as keyof typeof skills.catalog];
                  if (!skill) return null;
                  const label =
                    'translationKey' in skill
                      ? t(skill.translationKey, {
                          defaultValue: skill.label,
                        })
                      : skill.label;
                  return (
                    <span
                      key={skillId}
                      className='font-OpenSans rounded-md border border-current/20 px-3 py-1.5 text-sm'
                    >
                      {label}
                    </span>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
        {/* Languages */}
        <div className='mt-8 border-t border-current/15 pt-6'>
          <h2 className='font-JetBrainsMono mb-3 text-sm tracking-widest uppercase opacity-60'>
            {t('categories.languages')}
          </h2>
          <div className='flex flex-wrap gap-x-8 gap-y-2'>
            {skills.languages.map(language => (
              <div key={language.id} className='font-OpenSans flex items-baseline gap-2'>
                <span className='font-medium'>{t(`languages.${language.id}`)}</span>
                <span className={classes.secondary}>
                  {t(`proficiency.${language.proficiency}`)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
