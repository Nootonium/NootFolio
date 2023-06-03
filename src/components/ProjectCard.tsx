import { useEffect, useRef, useState } from 'react';
import { useTheme } from '../hooks/ThemeContext';
import { Project } from '../types';
import TechBadge from './TechBadge';

function ProjectCard({ project }: { project: Project }) {
  const { theme } = useTheme();
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const descriptionRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (descriptionRef.current && !descriptionRef.current.contains(event.target)) {
        setIsDescriptionExpanded(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const cardClasses = {
    light: 'bg-neutral-200 ring-1 ring-neutral-300 -ring-offset-1',
    dark: 'bg-neutral-800',
    rainbow: 'bg-rainbow-500',
  };

  return (
    <div
      className={`my-2 flex w-full flex-col items-center px-2 py-2 shadow-xl sm:px-4 ${cardClasses[theme]}`}
    >
      <img
        src={project.image_url}
        alt={project.title}
        className='mb-4 aspect-video w-full rounded object-cover'
      />
      <div className='w-full text-left'>
        <h2 className='mb-2 font-bold'>{project.title}</h2>
        <div ref={descriptionRef}>
          <p className={`min-h-12 ${!isDescriptionExpanded ? 'line-clamp-2' : ''}`}>
            {project.description}
          </p>
          <button
            onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
            className='mb-2 text-blue-500 hover:text-blue-800'
          >
            {isDescriptionExpanded ? 'Read less' : 'Read more'}
          </button>
        </div>
        <div className='mb-2 space-x-2'>
          {project.tech_stack.map((tech, index) => (
            <TechBadge key={index} tech={tech} />
          ))}
        </div>
        <div className='flex flex-row items-center justify-between'>
          <a
            href={project.link ? project.link : project.github}
            target='_blank'
            rel='noreferrer'
            className='rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'
          >
            View Project
          </a>
          <a href={project.github} target='_blank' rel='noreferrer' className='pr-2'>
            <i className='fab fa-github fa-2x'></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
