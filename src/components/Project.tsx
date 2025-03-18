import { ProjectItem } from '../types';
import TechBadge from './TechBadge';
import { humanizeDate, formatDate } from '../utils';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import Status from './Status';
import ProjectButtons from './ProjectButtons';

const Project = ({ project }: { project: ProjectItem }) => {
  return (
    <div className='font-OpenSans'>
      <p className=''>
        {formatDate(project.start_date)} <ArrowRightIcon className='inline h-4 w-4' />
        {project.end_date
          ? ` ${formatDate(project.end_date)} (${humanizeDate(project.end_date)})`
          : ' Present'}
      </p>
      <Status status={project.status} />
      <p className='mt-4 text-lg leading-relaxed tracking-normal'>{project.description}</p>
      <p className='mt-4'>
        {project.technologies.map((tech: string, index: any) => (
          <TechBadge key={index} tech={tech} />
        ))}{' '}
      </p>
      <ProjectButtons links={project.links} />
    </div>
  );
};

export default Project;
