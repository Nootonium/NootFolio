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

  return (
    <div className={`z-20 flex w-full rounded-md shadow-xl  ${cardClasses[theme]}`}>
      <div className='grid h-full grid-rows-[min-content,auto,auto,min-content] gap-2 overflow-x-auto p-4 font-OpenSans text-base sm:px-12 sm:text-xl'>
        <div className='row-span-1 rounded-sm leading-relaxed'>
          <h3 className='font-JetBrainsMono text-lg tracking-tight sm:text-2xl'>
            {t('description')}
          </h3>
          <p className='min-h-16 max-h-72 overflow-x-auto'>{project.description}</p>
        </div>
        <div className='row-span-1 rounded-sm'>
          <h3 className='font-JetBrainsMono text-xl tracking-tight sm:text-2xl'>
            {t('techStack')}
          </h3>
          {project.tech_stack.map((tech, index) => (
            <TechBadge key={index} tech={tech} />
          ))}
        </div>
        <ProjectCardButtons project={project} />
      </div>
    </div>
  );
}
export default ProjectCard;
