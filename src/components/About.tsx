import { useTranslation } from 'react-i18next';
import { useTheme } from '../hooks/ThemeContext';
import { sendTrackingData } from '../api';

function About() {
  const { theme } = useTheme();
  const { t } = useTranslation('about');
  const aboutClasses = {
    light: 'bg-white bg-opacity-80 text-black',
    dark: 'bg-black bg-opacity-70 text-white',
    rainbow: '',
  };

  const headingClasses = {
    light: 'text-fuchsia-600',
    dark: 'text-teal-400',
    rainbow: '',
  };

  const linksClasses = {
    light: 'text-black hover:bg-fuchsia-600',
    dark: 'text-white hover:bg-teal-400',
    rainbow: '',
  };

  return (
    <div className={`flex min-h-screen snap-start justify-center ${aboutClasses[theme]}`}>
      <div className='mx-4 max-w-xl py-16 lg:mx-auto'>
        <h1
          className={`mb-1 font-JetBrainsMono text-4xl tracking-tighter sm:text-6xl ${headingClasses[theme]}`}
        >
          {t('title')}
        </h1>
        <div className='text-justify font-OpenSans text-lg leading-normal tracking-tight'>
          <p className='mb-2'>{t('intro')}</p>
          <p className='mb-2'>{t('body')}</p>
          <p className=''>{t('conclusion')}</p>
        </div>
        <div className='flex space-x-4 pt-2'>
          <a
            href='https://github.com/Nootonium'
            target='_blank'
            rel='noopener noreferrer'
            className={`rounded px-4 py-2 ${linksClasses[theme]} `}
            onClick={() => sendTrackingData({ type: 'click', data: 'github' })}
          >
            <svg
              className='h-10 w-10 fill-current'
              xmlns='http://www.w3.org/2000/svg'
              height='1em'
              viewBox='0 0 496 512'
            >
              <path d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z' />
            </svg>
          </a>
          <a
            href='https://linkedin.com/in/nootonium'
            target='_blank'
            rel='noopener noreferrer'
            className={`rounded px-4 py-2 ${linksClasses[theme]} `}
            onClick={() => sendTrackingData({ type: 'click', data: 'linkedin' })}
          >
            <svg
              className='h-10 w-10 fill-current'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
            >
              <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
export default About;
