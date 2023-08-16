import { useTranslation } from 'react-i18next';
import { useTheme } from '../hooks/ThemeContext';
import { Project } from '../types';
import TechBadge from './TechBadge';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

function ProjectCard({
  project,
  projectIndex,
  totalProjects,
}: {
  project: Project;
  projectIndex: number;
  totalProjects: number;
}) {
  const { theme } = useTheme();
  const { t } = useTranslation('projectCard');
  const cardClasses = {
    light: 'bg-white text-black bg-opacity-90',
    dark: 'bg-black text-white bg-opacity-60',
    rainbow: 'bg-rainbow-500',
  };
  const headingClasses = {
    light: 'text-blue-600',
    dark: 'text-lime-300',
    rainbow: '',
  };

  const prevProjectIndex = projectIndex === 0 ? totalProjects - 1 : projectIndex - 1;
  const nextProjectIndex = projectIndex === totalProjects - 1 ? 0 : projectIndex + 1;

  return (
    <div className={`relative flex w-screen justify-center`}>
      {project.image_url && (
        <img
          src={project.image_url}
          alt={project.title}
          className='absolute h-screen object-cover'
        />
      )}
      <div
        className={`z-20 mx-4 mb-24 mt-4 w-full max-w-3xl rounded-md pb-4 pt-20 shadow-xl sm:mt-14 ${cardClasses[theme]}`}
      >
        <div className='grid h-full grid-rows-[min-content,auto,auto,min-content] gap-2 overflow-x-auto p-4 font-OpenSans text-base sm:px-12 sm:text-xl'>
          <h2
            className={`row-span-1 flex items-end font-JetBrainsMono text-xl tracking-tighter sm:text-4xl ${headingClasses[theme]}`}
          >
            {project.title}
          </h2>
          <div className='row-span-1 rounded-sm leading-relaxed'>
            <h3 className='font-JetBrainsMono text-xl tracking-tight sm:text-2xl'>
              {t('description')}
            </h3>
            <p className='min-h-16 max-h-72 overflow-x-auto text-left'>{project.description}</p>
          </div>
          <div className='row-span-1 rounded-sm'>
            <h3 className='font-JetBrainsMono text-xl tracking-tight sm:text-2xl'>
              {t('techStack')}
            </h3>
            {project.tech_stack.map((tech, index) => (
              <TechBadge key={index} tech={tech} />
            ))}
          </div>
          <div className='row-span-1 grid grid-cols-4 gap-2'>
            <a
              href={`#slide${prevProjectIndex}`}
              className='btn btn-ghost col-start-1 rounded text-center'
            >
              <ChevronLeftIcon className='h-10 w-10 flex-shrink-0' />
              <span className='text-md sr-only sm:not-sr-only'>{t('prev')}</span>
            </a>
            <a
              href={project.link ? project.link : project.github}
              target='_blank'
              rel='noreferrer'
              className='btn btn-ghost col-start-2 rounded text-center shadow-md ring-2 ring-neutral-500'
            >
              {t('visit')}
            </a>
            <a
              href={project.github}
              target='_blank'
              rel='noreferrer'
              className='col-start-3 flex w-full justify-center py-1'
            >
              <svg
                className='h-10 w-10 fill-current'
                xmlns='http://www.w3.org/2000/svg'
                height='1em'
                viewBox='0 0 496 512'
              >
                <path d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z' />
              </svg>
            </a>
            <a
              href={`#slide${nextProjectIndex}`}
              className='btn btn-ghost col-start-4 rounded text-center '
            >
              <span className='text-md sr-only sm:not-sr-only'>{t('next')}</span>
              <ChevronRightIcon className='h-10 w-10 flex-shrink-0' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;
