import { ExperienceItem } from '../types';
import { useTranslation } from 'react-i18next';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { capitalizeFirstLetter, formatDate, humanizeDate } from '../utils';
import ExperienceButtons from './ExperienceButtons';
import TechBadge from './TechBadge';

const Experience = ({ experience }: { experience: ExperienceItem }) => {
  const { t } = useTranslation('labels');
  return (
    <div className='font-OpenSans'>
      <p className='text-lg'>{experience.description}</p>
      {experience.keyContributions && experience.keyContributions.length > 0 && (
        <div className='mt-4'>
          <h3 className='text-lg font-semibold'>Key Contributions:</h3>
          <ul className='mt-2 list-disc pl-6'>
            {experience.keyContributions.map((contribution, index) => (
              <li key={index} className=''>
                {contribution}
              </li>
            ))}
          </ul>
        </div>
      )}
      <p className='mt-4 font-semibold'>
        {t('company')}: {experience.company}
      </p>
      <p className='text-sm text-gray-500'>
        {t('experienceType')}: {capitalizeFirstLetter(t(experience.experienceType))}
      </p>
      {experience.location && (
        <p className='text-sm text-gray-500'>
          {t('location')}: {experience.location}
        </p>
      )}
      <p className='text-sm text-gray-500'>
        {t('date')}: {formatDate(experience.start_date)} ({humanizeDate(experience.start_date)})
        {experience.end_date && (
          <>
            <ArrowRightIcon className='inline h-4 w-4' />
            {formatDate(experience.end_date)} ({humanizeDate(experience.end_date)})
          </>
        )}
      </p>
      <p className='mt-2'>
        {t('tech')}:{' '}
        {experience.technologies.map((tech: string, index: any) => (
          <TechBadge key={index} tech={tech} />
        ))}
      </p>
      <ExperienceButtons links={experience.links} id={experience.id} />
    </div>
  );
};

export default Experience;
