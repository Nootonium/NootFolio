import { ExperienceItem } from '../types';

const Experience = ({ experience }: { experience: ExperienceItem }) => {
  return (
    <div>
      <p className='text-gray-600'>{experience.description}</p>
      <p className='mt-4 font-semibold'>Company: {experience.company}</p>
      <p className='text-sm text-gray-500'>
        {experience.start_date} - {experience.end_date || 'Present'}
      </p>
      <p className='mt-2'>Technologies: {experience.technologies.join(', ')}</p>
      {experience.links?.company && (
        <a
          href={experience.links.company}
          target='_blank'
          rel='noopener noreferrer'
          className='mt-4 text-blue-600 underline'
        >
          Company Website
        </a>
      )}
    </div>
  );
};

export default Experience;
