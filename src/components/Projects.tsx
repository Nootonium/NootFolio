import projects from '../data/projects.json';
import ProjectCard from './ProjectCard';

function Projects() {
  return (
    <div className='flex min-h-screen snap-start justify-center bg-dark-100 bg-opacity-75'>
      <div className='mx-4 max-w-xl grow flex-col pb-32 pt-12 lg:mx-auto'>
        <h1 className='font-Oswald text-6xl'>Projects</h1>
        <br />
        <div className='flex flex-col'>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Projects;
