import { ProjectItem } from '../types';

const Project = ({ project }: { project: ProjectItem }) => {
  return (
    <div>
      <p className='text-gray-600'>{project.description}</p>
      <p className='mt-2'>Technologies: {project.technologies.join(', ')}</p>
      {project.images && project.images.length > 0 && (
        <div className='mt-4 flex space-x-2 overflow-x-auto'>
          {project.images.map((img, idx) => (
            <img key={idx} src={img} className='h-20 w-20 rounded-lg shadow-md' />
          ))}
        </div>
      )}
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
