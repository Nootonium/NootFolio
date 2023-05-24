import projects from '../data/projects.json';
import ProjectCard from './ProjectCard';

function Projects() {
  return (
    <div className='flex min-h-screen snap-start justify-center bg-dark-100 bg-opacity-75'>
      <div className='mx-4 max-w-xl pb-32 pt-16 lg:mx-auto'>
        <h1 className='font-Oswald text-6xl'>Projects</h1>
        <br />
        <div className='carousel-center carousel shadow-xl'>
          {projects.map((project, index) => (
            <div className='carousel-item w-full' key={index}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Projects;
