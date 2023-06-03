import { useTheme } from '../hooks/ThemeContext';

function About() {
  const { theme } = useTheme();
  const aboutClasses = {
    light: 'bg-neutral-100 text-black',
    dark: 'bg-neutral-900 text-white',
    rainbow: '',
  };
  return (
    <div
      className={`bg-dark-100 flex min-h-screen snap-start justify-center bg-opacity-75 ${aboutClasses[theme]}`}
    >
      <div className='mx-4 max-w-xl py-24 lg:mx-auto'>
        <h1 className='font-Oswald text-6xl'>About Me</h1>
        <br />
        <div className='font-OpenSans text-lg'>
          <p>
            {`
            I've found that the logic, problem-solving, and endless opportunities for learning really resonate with me. 
            Right now, I'm at the start of this fascinating journey, but I've set my sights high. 
            My goal? To become a lead developer where I can guide projects and foster creativity and problem-solving with my team. 
            But that's not all. Once I've honed my leadership and coding skills, 
            I'm aiming to delve into machine learning engineering. 
            I'm thrilled about the challenges and breakthroughs that await me in this dynamic field.`}
          </p>
          <br />
          <p>
            {`When I'm not coding, you might find me exploring nature, tinkering with projects,
            or getting lost in a good science fiction book.`}
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;
