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
  const headingClasses = {
    light: 'text-fuchsia-600',
    dark: 'text-teal-400',
    rainbow: '',
  };

  return (
    <div
      className={`relative flex min-h-screen w-full snap-start justify-center ${projectsClasses[theme]}`}
    >
      <div className='carousel-center carousel absolute h-full w-full'>
        {projects.map((project, index) => (
          <div className='carousel-item relative w-full' key={index} id={`slide${index}`}>
            <ProjectCard project={project} projectIndex={index} totalProjects={projects.length} />
          </div>
        ))}
      </div>
      <h1
        className={`absolute z-20 mt-8 font-JetBrainsMono text-5xl sm:mt-16 sm:text-6xl ${headingClasses[theme]}`}
      >
        Projects
      </h1>
    </div>
  );
}
export default Projects;
