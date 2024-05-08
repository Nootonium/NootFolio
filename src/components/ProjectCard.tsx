import { useTranslation } from 'react-i18next';
import { useTheme } from '../hooks/ThemeContext';
import { Project } from '../types';
import TechBadge from './TechBadge';
import ProjectCardButtons from './ProjectCardButtons';

function ProjectCard({
  project,
}: {
  project: Project;
  projectIndex: number;
  totalProjects: number;
}) {
  const { theme } = useTheme();
  const { t } = useTranslation('projectCard');
  const cardClasses = {
    light: 'bg-white text-black bg-opacity-90',
    dark: 'bg-black text-white bg-opacity-75',
    rainbow: 'bg-rainbow-500',
  };

  const headingClasses = {
    light: 'text-fuchsia-600',
    dark: 'text-teal-400',
    rainbow: '',
  };

  return (
    <div
      className={`z-20 flex h-full w-full flex-col gap-4 rounded-sm p-4 font-OpenSans shadow-xl sm:px-12 sm:text-xl ${cardClasses[theme]}`}
    >
      <div className=''>
        <h3
          className={`font-JetBrainsMono text-lg tracking-tight sm:text-2xl ${headingClasses[theme]}`}
        >
          {t('description')}
        </h3>
        <p className='min-h-16 max-h-72 overflow-y-auto leading-relaxed'>{project.description}</p>
      </div>
      <div className=''>
        <h3
          className={`font-JetBrainsMono text-lg tracking-tight sm:text-2xl ${headingClasses[theme]}`}
        >
          {t('techStack')}
        </h3>
        {project.tech_stack.map((tech, index) => (
          <TechBadge key={index} tech={tech} />
        ))}
      </div>
      <ProjectCardButtons project={project} />
    </div>
  );
}
export default ProjectCard;
