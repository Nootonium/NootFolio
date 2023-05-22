import projects from '../data/projects.json';
import ProjectCard from './ProjectCard';

function Projects() {
  return (
    <div className='flex min-h-screen max-w-xl snap-start justify-center'>
      <div className='mx-4 max-w-xl py-24 lg:mx-auto'>
        <h1 className='font-Oswald text-6xl'>Projects</h1>
        <div className='flex flex-wrap'>
          {projects.map((project, index) => (
            <div key={index} className='relative w-full px-2 py-2'>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Projects;
