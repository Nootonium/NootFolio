import { useEffect, useRef, useState } from 'react';
import { useTheme } from '../hooks/ThemeContext';
import { Project } from '../types';
import TechBadge from './TechBadge';

function ProjectCard({ project }: { project: Project }) {
  const { theme } = useTheme();

  const cardClasses = {
    light: 'bg-neutral-200',
    dark: 'bg-neutral-800',
    rainbow: 'bg-rainbow-500',
  };

  return (
    <div className={`relative flex w-full  ${cardClasses[theme]}`}>
      <img
        src={project.image_url}
        alt={project.title}
        className='absolute h-full w-full object-cover'
      />
      <div className='z-10 mb-20 mt-28 w-full bg-black bg-opacity-50 p-2 text-left sm:mt-36'>
        <h2 className='mb-2 font-bold'>{project.title}</h2>
        <div>
          <p className={`min-h-12`}>{project.description}</p>
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
