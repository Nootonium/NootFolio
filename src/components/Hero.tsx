import { useTheme } from '../hooks/ThemeContext';

function Hero() {
  const { theme } = useTheme();
  const heroClasses = {
    light: 'text-black bg-neutral-300',
    dark: 'text-white bg-neutral-900',
    rainbow: 'bg-rainbow-300',
  };
  return (
    <div
      className={`flex h-screen w-full snap-start items-center justify-center bg-opacity-20 ${heroClasses[theme]}`}
    >
      <div className={`h-min max-w-5xl px-8 py-8 lg:px-0`}>
        <h1 className='font-Oswald text-6xl md:text-7xl lg:text-8xl'>{`Hi there! I'm Dan,`}</h1>
        <br />
        <p className='font-Oswald text-5xl md:text-6xl lg:text-7xl'>
          {`Aspiring full\u2011stack web developer with a passion for creative problem solving.`}
        </p>
      </div>
    </div>
  );
}
export default Hero;
