import { useState } from 'react';
import { useTheme } from '../hooks/ThemeContext';
import { Project } from '../types';
import TechBadge from './TechBadge';

function ProjectCard({ project }: { project: Project }) {
  const { theme } = useTheme();
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const cardClasses = {
    light: 'bg-neutral-200 ring-1 ring-neutral-300 -ring-offset-1',
    dark: 'bg-neutral-800',
    rainbow: 'bg-rainbow-500',
  };

  return (
    <div className={`my-2 flex w-full flex-col items-center p-4 shadow-xl ${cardClasses[theme]}`}>
      <img
        src={project.image_url}
        alt={project.title}
        className='mb-4 aspect-video w-full rounded object-cover'
      />
      <div className='w-full text-left'>
        <h2 className='mb-2 text-xl font-bold'>{project.title}</h2>
        <p className={`${!isDescriptionExpanded ? 'line-clamp-2' : ''}`}>{project.description}</p>
        <button
          onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
          className='mb-2 text-blue-500 hover:text-blue-800'
        >
          {isDescriptionExpanded ? 'Read less' : 'Read more'}
        </button>
        <div className='mb-2 space-x-2'>
          {project.tech_stack.map((tech, index) => (
            <TechBadge key={index} tech={tech} />
          ))}
        </div>
        <div className='flex flex-col justify-center md:flex-row md:justify-between'>
          <a
            href={project.link}
            target='_blank'
            rel='noreferrer'
            className='mb-2 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 md:mb-0'
          >
            View Project
          </a>
          <a
            href={project.github}
            target='_blank'
            rel='noreferrer'
            className='rounded bg-gray-500 px-4 py-2 font-bold text-white hover:bg-gray-700'
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
