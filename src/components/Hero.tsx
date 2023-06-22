import { useTheme } from '../hooks/ThemeContext';

function Hero({ openContact }: { openContact: () => void }) {
  const { theme } = useTheme();
  const heroClasses = {
    light: 'text-black bg-neutral-300',
    dark: 'text-white bg-neutral-900',
    rainbow: 'bg-rainbow-300',
  };
  const HTMLTagClasses = {
    light: 'text-fuchsia-600',
    dark: 'text-teal-400',
    rainbow: 'text-syntax-rainbow',
  };

  return (
    <div
      className={`flex h-screen w-full snap-start items-center justify-center bg-opacity-20 ${heroClasses[theme]}`}
    >
      <div className={`h-min max-w-5xl px-4 pb-4 font-JetBrainsMono text-2xl lg:px-2`}>
        <span className={HTMLTagClasses[theme]}>{'<h1>'}</span>
        <h1 className='pl-8 text-4xl sm:text-5xl lg:text-6xl'>{`Hi there! I'm Dan,`}</h1>
        <span className={HTMLTagClasses[theme]}>{'</h1>'}</span>
        <br />
        <span className={HTMLTagClasses[theme]}>{'<p>'}</span>
        <p className='pl-8 text-3xl sm:text-4xl lg:text-5xl'>
          {`Aspiring full\u2011stack web developer with a passion for creative problem solving.`}
        </p>
        <span className={HTMLTagClasses[theme]}>{'</p>'}</span>
        <br />
        <button
          onClick={() => openContact()}
          className='btn-ghost btn p-0 text-2xl sm:text-3xl lg:text-4xl'
        >
          <span className={HTMLTagClasses[theme]}>{'<Contact Me />'}</span>
        </button>
      </div>
    </div>
  );
}
export default Hero;
