import { useTranslation } from 'react-i18next';
import { useTheme } from '../hooks/ThemeContext';
import { Project } from '../types';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import TechBadge from './TechBadge';
import ProjectCardButtons from './ProjectCardButtons';
import { forwardRef, Fragment } from 'react';

function ProjectCardTab({ label }: { label: string }) {
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

const ProjectCard = forwardRef<HTMLDivElement, { project: Project }>(({ project }, ref) => {
  const { theme } = useTheme();
  const { t } = useTranslation('projectCard');

  const cardClasses = {
    light: 'bg-white text-black bg-opacity-90',
    dark: 'bg-black text-white bg-opacity-75',
    rainbow: 'bg-rainbow-500',
  };

  const separatorClasses = {
    light: 'border-black opacity-50',
    dark: 'border-white opacity-50',
    rainbow: 'border-rainbow-500',
  };

  return (
    <div
      ref={ref}
      className={`z-20 flex h-full w-full flex-col rounded-sm pb-4 font-OpenSans ${cardClasses[theme]}`}
    >
      <TabGroup>
        <TabList className='flex flex-wrap'>
          <ProjectCardTab label={t('description')} />
          <ProjectCardTab label={t('motivation')} />
          <ProjectCardTab label={t('techStack')} />
        </TabList>
        <div className={`mb-4 border-b ${separatorClasses[theme]}`}></div>
        <TabPanels className={`text-md max-w-2xl px-4`}>
          <TabPanel>
            <p className='min-h-16 overflow-y-auto leading-relaxed'>{project.description}</p>
          </TabPanel>
          <TabPanel>
            <p className='min-h-16 overflow-y-auto leading-relaxed'>{project.motivation}</p>
          </TabPanel>
          <TabPanel>
            {project.tech_stack.map((tech: string, index: any) => (
              <TechBadge key={index} tech={tech} />
            ))}
          </TabPanel>
        </TabPanels>
        <div className={`my-4 border-b ${separatorClasses[theme]}`}></div>
        <ProjectCardButtons project={project} />
      </TabGroup>
    </div>
  );
});

// Set the display name to avoid the ESLint warning
ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;
