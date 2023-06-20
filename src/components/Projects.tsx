import projects from '../data/projects.json';
import ProjectCard from './ProjectCard';
import { useTheme } from '../hooks/ThemeContext';

function Projects() {
  const { theme } = useTheme();

  const projectsClasses = {
    light: 'text-black',
    dark: 'text-white',
    rainbow: 'bg-rainbow-300',
  };

  const carouselClasses = {
    light: 'bg-white bg-opacity-80',
    dark: 'bg-black bg-opacity-30',
    rainbow: 'bg-rainbow-300',
  };

  return (
    <div
      className={`relative flex min-h-screen w-full snap-start justify-center ${projectsClasses[theme]}`}
    >
      <h1 className={`z-20 mt-8 h-fit font-JetBrainsMono text-6xl sm:mt-16 `}>Projects</h1>
      <div className='carousel-center carousel absolute h-full w-full'>
        {projects.map((project, index) => (
          <div className='carousel-item relative w-full' key={index} id={`slide${index}`}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
      <div className='absolute bottom-20 z-10 flex w-full justify-center gap-2 py-2 '>
        {projects.map((_, index) => (
          <a
            key={index}
            href={`#slide${index}`}
            className={`btn-ghost btn-sm btn text-xl ring-2 ring-neutral-500 ${carouselClasses[theme]}`}
          >
            {index + 1}
          </a>
        ))}
      </div>
    </div>
  );
}
export default Projects;
