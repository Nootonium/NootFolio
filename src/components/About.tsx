import { useTranslation } from 'react-i18next';
import { useTheme } from '../hooks/ThemeContext';

function About() {
  const { theme } = useTheme();
  const { t } = useTranslation('about');
  const aboutClasses = {
    light: 'bg-neutral-100 bg-opacity-80 text-black',
    dark: 'bg-neutral-900 bg-opacity-70 text-white',
    rainbow: '',
  };

  const headingClasses = {
    light: 'text-fuchsia-600',
    dark: 'text-teal-400',
    rainbow: '',
  };

  return (
    <div className={`flex min-h-screen snap-start justify-center ${aboutClasses[theme]}`}>
      <div className='mx-4 mt-4 max-w-xl py-16 lg:mx-auto'>
        <h1
          className={`font-JetBrainsMono text-5xl tracking-tighter sm:text-6xl ${headingClasses[theme]}`}
        >
          {t('title')}
        </h1>
        <br />
        <div className='font-OpenSans text-lg leading-loose'>
          <p className='mb-2 '>{t('intro')}</p>
          <p className='mb-2'>{t('body')}</p>
          <p className='mb-2'>{t('conclusion')}</p>
        </div>
      </div>
    </div>
  );
}
export default About;
