import projects from '../data/projects.json';
import ProjectCard from './ProjectCard';

import { forwardRef } from 'react';

const Projects = forwardRef<HTMLDivElement>(function Projects(props, ref) {
  return (
    <div ref={ref} className='flex min-h-screen snap-start justify-center'>
      <div className='mx-4 max-w-7xl py-24 lg:mx-auto'>
        <h1 className='font-Oswald text-6xl'>Projects</h1>
        <br />
        {projects.map((project, index) => (
          <div key={index} className=''>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
});
export default Projects;
