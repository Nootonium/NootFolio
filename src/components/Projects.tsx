import projects from '../data/projects.json';
import ProjectCard from './ProjectCard';

function Projects() {
  return (
    <div className='flex min-h-screen w-screen snap-start justify-center'>
      <div className='max-w-7xl lg:mx-auto'>
        <h1 className='font-Oswald text-6xl'>Projects</h1>
        <br />
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
export default Projects;
