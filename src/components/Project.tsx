import { ProjectItem } from '../types';
import { useTranslation } from 'react-i18next';
import TechBadge from './TechBadge';

const Project = ({ project }: { project: ProjectItem }) => {
  const { t } = useTranslation('project');

  return (
    <div>
      <p className='text-sm'>
        {new Date(project.start_date).toLocaleDateString()} -
        {project.end_date ? new Date(project.end_date).toLocaleDateString() : 'Present'}
      </p>
      <p className='text-sm font-semibold capitalize text-blue-500'>{project.status}</p>
      <p className='mt-2'>
        {t('description')}: {project.description}
      </p>
      <p className='mt-2'>
        Technologies:{' '}
        {project.technologies.map((tech: string, index: any) => (
          <TechBadge key={index} tech={tech} />
        ))}{' '}
      </p>

      <div className='mt-4 flex space-x-4'>
        {project.links?.repo && (
          <a
            href={project.links.repo}
            target='_blank'
            rel='noopener noreferrer'
            className='rounded bg-gray-900 px-4 py-2 text-white hover:bg-gray-700'
          >
            GitHub
          </a>
        )}
        {project.links?.live && (
          <a
            href={project.links.live}
            target='_blank'
            rel='noopener noreferrer'
            className='rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600'
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;
