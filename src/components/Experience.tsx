import { ExperienceItem } from '../types';

const Experience = ({ experience }: { experience: ExperienceItem }) => {
  return (
    <div>
      <h1>Experience</h1>
      <h2>{experience.company}</h2>
      <h3>{experience.experienceType}</h3>
      <p>
        {experience.start_date ? `${experience.start_date} - ${experience.end_date}` : 'Current'}
      </p>
      <p>{experience.location}</p>
      <p>{experience.description}</p>
    </div>
  );
};

export default Experience;
