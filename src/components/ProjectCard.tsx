import { Project } from '../types';

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className='my-2 w-full bg-white p-4 shadow-lg'>
      <img
        src={project.image_url}
        alt={project.title}
        className='mb-4 aspect-video w-full rounded object-cover'
      />
      <h2 className='mb-2 text-xl font-bold'>{project.title}</h2>
      <p className='mb-2 text-gray-700'>{project.description}</p>
      <div className='mb-2'>
        {project.tech_stack.map((tech, index) => (
          <span
            key={index}
            className='mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700'
          >
            {tech}
          </span>
        ))}
      </div>
      <div className='flex justify-between'>
        <a
          href={project.link}
          target='_blank'
          rel='noreferrer'
          className='rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'
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
  );
}

export default ProjectCard;
