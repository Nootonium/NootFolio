import projects from '../data/projects.json';
import ProjectCard from './ProjectCard';
import { useTheme } from '../hooks/ThemeContext';

function Projects() {
  const { theme } = useTheme();

  const projectsClasses = {
    light: 'bg-white text-black',
    dark: 'bg-black text-white',
    rainbow: 'bg-rainbow-300',
  };

  return (
    <div
      className={`relative flex min-h-screen w-full snap-start justify-center bg-opacity-90 ${projectsClasses[theme]}`}
    >
      <h1 className='z-10 mt-8 font-Oswald text-6xl sm:mt-16'>Projects</h1>
      <br />
      <div className='carousel-center carousel absolute h-full w-full'>
        {projects.map((project, index) => (
          <div className='carousel-item w-full' key={index}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Projects;
