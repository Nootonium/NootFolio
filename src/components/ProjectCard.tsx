import { useTranslation } from 'react-i18next';
import { useTheme } from '../hooks/ThemeContext';
import { Project } from '../types';
import { Tab } from '@headlessui/react';
import TechBadge from './TechBadge';
import ProjectCardButtons from './ProjectCardButtons';
import { Fragment } from 'react';

function ProjectCartTab({ label }: { label: string }) {
  const { theme } = useTheme();

  const tabClasses = {
    light: 'text-black',
    dark: 'text-white',
    rainbow: 'text-white',
  };

  const selectedTabClasses = {
    light: 'text-fuchsia-600 bg-white border-fuchsia-600 border-b-2',
    dark: ' text-teal-400 bg-black border-teal-400 border-b-2',
    rainbow: 'bg-rainbow-500',
  };
  return (
    <Tab as={Fragment}>
      {({ selected }) => (
        <button
          className={`rounded-sm px-4 py-2 font-JetBrainsMono transition-all focus:outline-none ${
            selected ? selectedTabClasses[theme] : tabClasses[theme]
          }`}
        >
          {label}
        </button>
      )}
    </Tab>
  );
}

function ProjectCard({
  project,
}: {
  project: Project;
  projectIndex: number;
  totalProjects: number;
}) {
  const { theme } = useTheme();
  const { t } = useTranslation('projectCard');
  const cardClasses = {
    light: 'bg-white text-black bg-opacity-90',
    dark: 'bg-black text-white bg-opacity-75',
    rainbow: 'bg-rainbow-500',
  };

  return (
    <div
      className={`z-20 flex h-full w-full flex-col rounded-sm pb-4 font-OpenSans ${cardClasses[theme]}`}
    >
      <Tab.Group>
        <Tab.List className='flex flex-wrap'>
          <ProjectCartTab label={t('description')} />
          <ProjectCartTab label={t('motivation')} />
          <ProjectCartTab label={t('techStack')} />
        </Tab.List>
        <Tab.Panels className={`text-md max-w-2xl px-4`}>
          <Tab.Panel>
            <p className='min-h-16 overflow-y-auto leading-relaxed'>{project.description}</p>
          </Tab.Panel>
          <Tab.Panel>
            <p className='min-h-16  overflow-y-auto leading-relaxed'>{project.motivation}</p>
          </Tab.Panel>
          <Tab.Panel>
            {project.tech_stack.map((tech, index) => (
              <TechBadge key={index} tech={tech} />
            ))}
          </Tab.Panel>
          <ProjectCardButtons project={project} />
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
export default ProjectCard;
