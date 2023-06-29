import { useTheme } from '../hooks/ThemeContext';

function About() {
  const { theme } = useTheme();
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
          About Me
        </h1>
        <br />
        <div className='font-OpenSans text-lg leading-loose'>
          <p className='mb-2 '>
            {`Over the years, I've developed a robust set of coding skills, coupled with an unyielding
            passion for problem-solving and creativity. I firmly believe that with enough time and
            dedication, there's no project or challenge that's insurmountable. It is this love for
            learning and overcoming challenges that fuels my work and continues to drive my
            professional development.`}
          </p>
          <p className='mb-2'>
            {`My interests extend beyond the realm of coding and into the exploration of nature,
            engaging in various tinkering projects, and immersing myself in the exciting world of
            science fiction books. These pursuits not only provide a well-rounded set of
            inspirations for my work, but also serve as a testament to my belief that with curiosity
            and dedication, one can venture into and master any sphere of interest.`}
          </p>
          <p className='mb-1'>
            {`I invite you to join me on this journey of constant growth and learning. No matter the
            complexity of the project at hand, my skills, drive, and boundless curiosity equip me
            with the ability to conquer any challenge. Because in my world, a wall is not a
            blockade, but a door waiting to be opened.`}
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;
