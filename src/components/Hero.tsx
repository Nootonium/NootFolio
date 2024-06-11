import { useTranslation } from 'react-i18next';
import { useTheme } from '../hooks/ThemeContext';
import Typewriter from './Typewriter';

function Hero({ openContact }: { openContact: () => void }) {
  const { theme } = useTheme();
  const { t } = useTranslation('hero');

  const heroClasses = {
    light: 'text-black bg-white',
    dark: 'text-white bg-black',
    rainbow: 'bg-rainbow-300',
  };
  const HTMLTagClasses = {
    light: 'text-fuchsia-600 tracking-wide',
    dark: 'text-teal-400 tracking-wide',
    rainbow: 'text-syntax-rainbow',
  };
  const callToActionClasses = {
    light: 'text-pink-800 tracking-wide',
    dark: 'text-red-500 tracking-wide',
    rainbow: 'text-syntax-rainbow',
  };

  const titleText = t('title');
  const bodyText = t('text');
  const callToActionText = t('callToAction');

  return (
    <div
      className={`flex h-screen w-screen snap-start items-center justify-center bg-opacity-20 ${heroClasses[theme]}`}
    >
      <div
        className={`h-min max-w-5xl px-4 pb-4 font-JetBrainsMono text-2xl leading-tight lg:px-2`}
      >
        <span className={HTMLTagClasses[theme]}>{'<h1>'}</span>
        <h1 className='pl-8 text-4xl tracking-tighter sm:text-5xl lg:text-6xl '>
          <Typewriter text={titleText} />
        </h1>
        <span className={HTMLTagClasses[theme]}>{'</h1>'}</span>
        <br />
        <span className={HTMLTagClasses[theme]}>{'<p>'}</span>
        <p className='pl-8 text-3xl tracking-tighter sm:text-4xl lg:text-5xl'>{bodyText}</p>
        <span className={HTMLTagClasses[theme]}>{'</p>'}</span>
        <br />
        <button
          onClick={() => openContact()}
          className='btn btn-ghost p-0 text-2xl sm:text-3xl lg:text-4xl'
        >
          <span className={callToActionClasses[theme]}>{callToActionText}</span>
        </button>
      </div>
    </div>
  );
}
export default Hero;
