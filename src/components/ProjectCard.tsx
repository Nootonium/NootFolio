import { useTheme } from '../hooks/ThemeContext';
import { Project } from '../types';
import TechBadge from './TechBadge';

function ProjectCard({ project }: { project: Project }) {
  const { theme } = useTheme();

  const cardClasses = {
    light: 'bg-white text-black bg-opacity-80',
    dark: 'bg-black text-white bg-opacity-30',
    rainbow: 'bg-rainbow-500',
  };
  const headingClasses = {
    light: 'text-blue-600',
    dark: 'text-lime-300',
    rainbow: '',
  };

  return (
    <div className={`relative flex w-full justify-center`}>
      <img
        src={project.image_url}
        alt={project.title}
        className='absolute h-full w-full object-cover'
      />
      <div
        className={`z-10 mx-4 mb-32 mt-4 w-full max-w-4xl rounded-md pb-2 pt-20 shadow-xl sm:mt-14 ${cardClasses[theme]}`}
      >
        <div className='grid h-full grid-rows-[min-content,auto,auto,min-content] gap-2 overflow-x-auto p-4 font-OpenSans text-base sm:px-12 sm:text-xl'>
          <h2
            className={`row-span-1 flex items-end font-JetBrainsMono text-xl sm:text-4xl ${headingClasses[theme]}`}
          >
            {project.title}
          </h2>
          <div className='row-span-1 rounded-sm'>
            <h3 className='font-JetBrainsMono text-xl sm:text-2xl'>Description:</h3>
            <p className='min-h-16 max-h-72 overflow-x-auto text-justify'>{project.description}</p>
          </div>
          <div className='row-span-1 rounded-sm'>
            <h3 className='font-JetBrainsMono text-xl sm:text-2xl'>Technologies used:</h3>
            {project.tech_stack.map((tech, index) => (
              <TechBadge key={index} tech={tech} />
            ))}
          </div>
          <div className='row-span-1 grid grid-cols-2'>
            <a
              href={project.link ? project.link : project.github}
              target='_blank'
              rel='noreferrer'
              className='btn-ghost btn col-start-1 rounded text-center shadow-md ring-2 ring-neutral-500'
            >
              View Project
            </a>
            <a
              href={project.github}
              target='_blank'
              rel='noreferrer'
              className='col-start-2 justify-self-end py-1'
            >
              <i className='fab fa-github fa-2x'></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;
