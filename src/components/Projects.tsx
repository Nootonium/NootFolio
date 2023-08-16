import projects from '../data/projects.json';
import ProjectCard from './ProjectCard';
import { useTheme } from '../hooks/ThemeContext';
import { useTranslation } from 'react-i18next';

function Projects() {
  const { theme } = useTheme();
  const { t } = useTranslation('projects');
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
      className={`relative flex h-screen w-screen snap-start justify-center ${projectsClasses[theme]}`}
    >
      <div className='carousel-center carousel h-screen w-screen'>
        {projects.map((project, index) => (
          <div className='carousel-item relative w-screen' key={index} id={`slide${index}`}>
            <ProjectCard
              project={{
                ...project,
                description: t(`projects.${project.id}.description`),
              }}
              projectIndex={index}
              totalProjects={projects.length}
            />{' '}
          </div>
        ))}
      </div>
      <h1
        className={`absolute z-40 mt-8 font-JetBrainsMono text-5xl tracking-tighter sm:mt-16 sm:text-6xl ${headingClasses[theme]}`}
      >
        {t('title')}
      </h1>
    </div>
  );
}
export default Projects;
