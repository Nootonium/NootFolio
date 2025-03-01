import { ProjectItem } from '../types';

const Project = ({ project }: { project: ProjectItem }) => {
  return (
    <div>
      <h1>Project</h1>
      <h2>{project.title}</h2>
      <p>{project.start_date}</p>
      <p>{project.end_date}</p>
      <p>{project.description}</p>
    </div>
  );
};

export default Project;
